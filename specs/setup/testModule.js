import _ from 'lodash'
import Vue from 'vue'
import { currentTimestamp, defined, has, jsonClone, stringifyObject } from '../../resources/assets/js/common'
import axios from 'axios'

// Amount of time to wait between fetches
const FETCH_TIMEOUT = 60 * 5

class FetchRecord {
    constructor(id, request) {
        this.expires = currentTimestamp() + FETCH_TIMEOUT
        this.id = id
        this.request = request
    }
}

export const createState = (endpoint, name) => {
    return {
        all: [],
        currentId: 0,
        orderBy: 'id',
        order: 'asc',
        orderType: 'number',
        errorIds: [],
        endpoint: endpoint,
        fetched: {},
        fetching: false,
        limit: -1,
        listing: [],
        completeRecords: [],
        filters: [],
        filtered: {},
        type: name,
        links: {},
        meta: {},
    }
}

export const createGetters = () => {
    return {
        all: state => {
            let data = state.all

            if (state.filters.length) {
                data = data.filter(item => {
                    return state.filters.some(filter => {
                        return item.hasOwnProperty(filter.field) && item[filter.field] == filter.value || item[filter.field].constructor === Array && item[filter.field].indexOf(filter.value) >= 0
                    })
                })
            }

            switch (state.orderType) {
                case 'date':
                case 'string':
                case 'number':
                default:
                    data = data.slice().sort((a, b) => {
                        a = a[state.orderBy]
                        b = b[state.orderBy]
                        return (a === b ? 0 : a > b ? 1 : -1)
                    })

                    if (state.order === 'desc') {
                        data.reverse()
                    }
            }
            // console.log('all is changing for ' + state.type, data)

            return data
        },
        byId: state  => id => {
            // console.log('byId', id)
            return state.all.find(item => {
                // console.log('item', item)
                return item.id == id
            })
        },
        filtered: state => (...filters) => {
            if (!filters) {
                return state.all
            }

            // If the first item is an array, then the filters
            // have been passed as an array rather than a series of arguments
            if (filters[0].constructor === Array) {
                filters = filters[0]
            }

            // Loop through items and filter out items that
            // don't match
            return state.all.filter(item => {
                console.log('=============')
                console.log('item', item)

                // Loop through filters and check if the fields on the item
                // match all of them.
                return filters.every(filter => {
                    console.log('field', filter.field)
                    console.log('filter', filter.value, typeof filter.value)
                    if (!has(item, filter.field)) {
                        console.log('bouncing out because the item does not have the field')
                        return true
                    }



                    if (item[filter.field] && item[filter.field].constructor === Array) {
                        console.log('Checking for value in array')
                        console.log(item[filter.field], item[filter.field].indexOf(filter.value))
                        const fieldLength = item[filter.field].length
                        for (let i = 0; i < fieldLength; i++) {
                            if (item[filter.field][i] == filter.value)  {
                                console.log('Array contains value')
                                return true
                            }
                        }
                    }


                    // console.log('has(item, filter.field)', has(item, filter.field))
                    // console.log('item[filter.field]', item[filter.field])
                    // console.log('item[filter.field] === filter.value', item[filter.field] == filter.value)

                    return item[filter.field] == filter.value
                })
            })
        },
        current: state => state.all.find(item => item.id === state.currentId),
        fetched: state => state.fetched,
        fetching: state => state.fetching,
        links: state => state.links,
        meta: state => state.meta,
        one: (state, getters) => getters.all[0],
        paginated: state => (page, filters = {}) => {
            const paramString = stringifyObject({
                page,
                ...filters
            })
            return state.all.filter(item => {
                if (!state.filtered[paramString]) {
                    return false
                }
                return state.filtered[paramString].find(id => {
                    return item.id == id
                })
            })
            return state.all
        },
        query: state => {
            let data = state.all

            if (state.filters.length) {
                data = data.filter(item => {
                    return state.filters.some(filter => {
                        return item.hasOwnProperty(filter.field) && item[filter.field] == filter.value || item[filter.field].constructor === Array && item[filter.field].indexOf(filter.value) >= 0
                    })
                })
            }

            switch (state.orderType) {
                case 'date':
                case 'string':
                case 'number':
                default:
                    data = data.slice().sort((a, b) => {
                        a = a[state.orderBy]
                        b = b[state.orderBy]
                        return (a === b ? 0 : a > b ? 1 : -1)
                    })

                    if (state.order === 'desc') {
                        data.reverse()
                    }
            }

            return data
        },
    }
}

export const createActions = () => {
    return {
        clear({ commit }) {
            commit('clearAll')
        },
        // Create item
        create({ commit, state }, data) {

            return new Promise((resolve, reject) => {

                console.log('Creating item...')
                return axios.post(state.endpoint, data.data, { params: data.params } || {}, )
                    .then((response) => {
                        console.log('response', response)
                        const model = response.data.data
                        commit('receiveItem', model)
                        return resolve(model)
                    })
                    .catch(response => {
                        // Error
                        console.log('Failed to create item', response)
                        return reject(response)
                    })
            })
        },

        // Delete item
        destroy({ commit, state }, params = {}) {

            if (!params.id) return false

            console.log('Deleting item...', params.id)

            return axios.delete(state.endpoint, params)
                .then(response => {
                    console.log('id', params.id)
                    commit('deleteItem', params.id)
                })
                .catch(response => {
                    console.log('Unable to delete item', response)
                })
        },

        fetch(store, params) {

            console.log('fetch', store.state.endpoint, params)
            store.commit('setFetching', true)
            let refresh = false
            if (params) {

                // if (has(params, 'forceRefresh')) {
                //     refresh = params.forceRefresh
                //     console.log('Forcing refresh of fetched content')
                //     Vue.delete(params, 'forceRefresh')
                // }

                if (has(params, 'id')) {
                    if (defined(params.id) && params.id) {
                        // Only allow requests by id that are defined to prevent unintended fetches
                        return fetchById(store, params.id)
                    }
                    // Id is not valid, delete it and pass to fetchC ollection
                    delete params.id
                }
            }

            return fetchCollection(store, params, refresh)
        },

        // Initialize data
        init({ commit }, data) {
            if (has(data, 'payload')) {
                const payload = data.payload

                const fetchKey = (has(data, 'params') && JSON.stringify(data.params) !== '') ? JSON.stringify(data.params) : '*'
                const fetchTimestamp = Date.now() / 1000 | 0

                if (payload.constructor === Array) {
                    // Multiple items
                    commit('receiveItems', payload)
                } else {
                    // One item
                    commit('receiveItem', payload)
                    commit('setFetched', payload.id)
                }

                // Record the fetch so we can skip fetching it the next time
                commit('setFetched', {
                    key: fetchKey,
                    timestamp: fetchTimestamp,
                    request: null,
                })
            }
        },

        // Set the currently selected item
        setCurrent({ commit }, id) {
            commit('setCurrentId', id)
        },

        update({ commit, state }, data) {
            console.log('Updating item...')

            return new Promise((resolve, reject) => {

                console.log('Creating item...')
                return axios.patch(state.endpoint, data.params || {}, data.data)
                    .then((response) => {
                        console.log('response', response)
                        const model = response.body.data
                        commit('receiveItem', model)
                        commit('setFetched', model.id)
                        return resolve(model)
                    })
                    .catch(response => {
                        // Error
                        console.log('Failed to update item', response)
                        return reject(response)
                    })
            })
        },

        addFilter({ commit }, filters) {
            if (filters.constructor !== Array) {
                filters = [filters]
            }

            commit('setFilters', filters, false)
        },

        clearFilters({ commit }) {
            commit('setFilters', [])
        },

        setFilters({ commit }, filters) {
            console.log('Setting filters', filters)
            if (filters.constructor !== Array) {
                filters = [filters]
            }

            commit('setFilters', filters)
        },

        setQuery({ commit }, { filters, orderBy, order, limit }) {
            if (filters.constructor !== Array) {
                filters = [filters]
            }
            commit('setFilters', filters)

            if (orderBy) {
                commit('setState', { key: 'orderBy', value: orderBy })
            }

            if (order) {
                commit('setState', { key: 'order', value: order })
            }

            if (limit) {
                commit('setState', { key: 'limit', value: limit })
            }
        }
    }
}

const createMutations = (Model) => {
    return {

        receiveItems,
        receiveItem,
        setFetched,

        clearAll(state) {
            state.all = []
        },

        makePagination(state, data) {
            this.$set(state.pagination, {
                current_page: data.current_page,
                last_page: data.last_page,
                next_page_url: data.next_page_url,
                prev_page_url: data.prev_page_url
            })
        },

        setItems(state, items) {
            // state.all = []
            receiveItems(state, items)
        },

        // Set the currently selected item
        setCurrentId(state, id) {
            state.currentId = Number(id)
        },

        setLastFetch(state, timestamp) {
            state.lastFetch = timestamp
        },

        setFetching(state, fetching = false) {
            // console.log('setting fetching', fetching)
            state.fetching = fetching
        },

        setState(state, { key, value }) {
            if (has(state, key)) {
                Vue.set(state, key, value)
            }
        },

        // Delete item from store
        deleteItem (state, id) {
            let item = state.all.find(i =>  i.id == id)
            state.all.splice(state.all.indexOf(item), 1)
            Vue.delete(state.fetched, id)
        },

        setFilters(state, filters, replace = true) {
            if (replace) {
                state.filters = filters
            } else {
                filters.forEach(item => {
                    state.filters.push(item)
                })
            }
        },
    }
}

const normalizeItem = (item) => {
    return _.merge(item, {})
}

const receiveItem = (state, item, key = 'id') => {
    // console.log('Key', key)
    // console.log('[MUTATION receiveItem]: ', item)

    if (typeof item === 'string') {
        const index = state.all.indexOf(item)
        if (index >= 0) {
            state.all.splice(index, 1, item)
        } else {
            state.all.push(item)
        }
    } else {
        const localItem = _.find(state.all, { id: item.id })
        const normalizedItem = normalizeItem(item)
        if (state.all.constructor === Array) {
            if (localItem) {
                if (!_.isEqual(normalizedItem, localItem)) {
                    const index = state.all.indexOf(localItem)
                    state.all.splice(index, 1, normalizedItem)
                }
            } else {
                state.all.push(normalizedItem)
            }
        } else {
            if (localItem) {
                if (!_.isEqual(normalizedItem, localItem)) {
                    Vue.set(state.all, item[key], normalizedItem)
                }
            } else {
                // state.all[item[key]] = normalizedItem
                Vue.set(state.all, item[key], normalizedItem)
            }
        }
    }
}

// Receive multiple items into state
const receiveItems = (state, items) => {
    items.forEach(item => {
        receiveItem(state, item)
        // setFetched(state, item.id)
    })
}

const setFetched = (state, key, request) => {
    state.fetched[key] = new FetchRecord(key, request)
}

const fetchById = ({ commit, getters, state }, id, refresh = false) => new Promise ((resolve, reject) => {
    console.log('fetchById running...')
    // If we have already fetched this item and the timeout
    // isn't over yet, skip it
    // if (!refresh) {
    //     const item = getters.byId(id)
    //
    //     if (defined(item) && has(state.fetched, id) && state.fetched[id].expires > currentTimestamp()) {
    //         return resolve(item)
    //     }
    // }
    // Setting that we are fetching
    commit('setFetching', true)

    // let request

    // If the fetch key exists and is less than timeout
    // if (!refresh && has(state.fetched, id) && state.fetched[id].expires > currentTimestamp()) {
    //     console.log('Recycling existing fetch request')
    //     request = state.fetched[id].request
    // } else {
    //     console.log('Fetching a ' + state.type + ' with id: ' + id)
    //     request = fetch('/' + state.type + '/' + id)
    // }


    return fetch('/' + state.endpoint + '/' + id)
        .then(payload => {

            console.log('payload', payload)

            if (payload.data) {
                payload = payload.data
            }

            if (!payload) {
                reject(payload)
            }

            commit('receiveItem', payload)
            // commit('setFetched', id, request)

            resolve(payload)
        })
        .catch(error => {
            console.error('fetchById error', error)
            console.error('reject', reject)
            reject(error)
        })
        .then(() => {
            commit('setFetching')
        })
})

const fetchCollection = ({ commit, getters, state }, params, refresh = false) => new Promise ((resolve, reject) => {

    // const fetchKey = (params) ? JSON.stringify(params) : '*'

    // let request

    // If the fetch key exists and is less than timeout
    // if (!refresh && has(state.fetched, fetchKey) && state.fetched[fetchKey].expires < currentTimestamp()) {
    //     console.log('Recycling existing fetch request')
    //     request = state.fetched[fetchKey].request
    // } else {
    //     console.log('Fetching one or more ' + state.type + '...', JSON.stringify(params))
    //     request = fetch('/' + state.type, params)
    // }

    // Record the fetch so we can skip fetching it the next time
    // commit('setFetched', fetchKey, request)

    const request = fetch('/' + state.endpoint, params)
        .then(payload => {

            if (!payload.data) {
                reject(payload)
            }

            let ids = []

            if (payload.data.constructor === Array) {
                // Multiple items
                commit('setItems', payload.data)

                ids = payload.data.map(item => item.id)
            } else {
                // One item
                commit('receiveItem', payload.data)
                // Todo: this probably needs to be done differently to
                // allow proper checking of the id field
                commit('setFetched', payload.id, request)

                ids.push(payload.id);
            }

            if (params && params.params) {
                const paramString = stringifyObject(params.params)
                console.log('fetch', 'param string', paramString)
                state.filtered[paramString] = ids
                Object.keys(params.params).forEach(k => {
                    if (!has(state.filtered, k)) {
                        state.filtered[k] = {}

                        if (!has(state.filtered[k], params.params[k])) {
                            state.filtered[k][params.params[k]] = []
                        }
                    }

                    state.filtered[k][params.params[k]] = ids
                })
            }

            if (payload.meta) {
                commit('setState', { key: 'meta', value: payload.meta })
            }

            if (payload.links) {
                commit('setState', { key: 'links', value: payload.links })
            }

            resolve(payload.data)
        })
        .catch(response => {
            reject(response)
        })
        .then(() => {
            commit('setFetching')
        })

    // Setting that we are fetching
    commit('setFetching', request)

    return request

})

const fetch = (path, params) => {

    return new Promise((resolve, reject) => {

        return axios.get(path, params)
            .then(response => {

                if (!response.data) {
                    console.warn('Data property is not set on response')
                    return reject(response)
                }

                const payload = response.data

                resolve(payload)

            }).catch(error => {
                console.error(error)
                reject(error)
            })
    })
}

const mockAsync = (callback) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = callback()
        return resolve(result)
    }, 500)
})

export const createModel = (name, { actions = {}, getters = {}, mutations = {}, state = {}, namespaced = true, resource, endpoint } = {}) => {

    endpoint = endpoint || name

    return {
        namespaced: namespaced,
        actions: {
            ...createActions(),
            ...actions,
        },
        getters: {
            ...createGetters(),
            ...getters,
        },
        mutations: {
            ...createMutations(),
            ...mutations
        },
        state: {
            ...createState(endpoint, name),
            ...state,
        },
    }
}
