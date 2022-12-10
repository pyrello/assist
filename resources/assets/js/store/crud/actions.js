import { copy, has, stringifyObject, uuidv4 } from '../../common'
import { createItem, destroyItem, fetchOneOrMore, updateItem } from './api'

export const clear = ({ commit }) => {
    commit('clearAll')
}

// Create item
export const create = ({ commit, state }, config) => {

    return new Promise((resolve, reject) => {
        // console.log('createItem', 'config', config)
        let data = Object.create(null)
        if (config && config.data) {
            data = config.data
            /**
             * This is necessary because if data is passed as both
             * the data object and as a property of config, it changes
             * all the empty fields into objects instead of null
             */
            delete config.data
        }

        // console.log('Creating item...', config, data)
        return createItem(state.endpoint, data, config)
            .then((response) => {
                // console.log('response', response)
                const item = response.data.data
                commit('receiveItem', item)
                return resolve(item)
            })
            .catch(response => {
                // Error
                // console.log('Failed to create item', response)
                return reject(response)
            })
    })
}

// Delete item
export const destroy = ({ commit, state }, params = {}) => new Promise((resolve, reject) => {

    if (!params.id) return reject('Must provide id param')

    // console.log('Deleting item...', params.id)

    return destroyItem(state.endpoint, params.id, params)
        .then(response => {
            if (!response) return reject('No response provided')
            // console.log('id', params.id, response)
            commit('deleteItem', params.id)
            return resolve(response)
        })
        .catch(error => {
            // console.log('Unable to delete item', error)
            return reject(error)
        })
})

/**
 * Fetch one or more items and store the results in state
 *
 * @param commit
 * @param state
 * @param config
 */
export const fetch = ({ commit, state }, config) => {

    if (_.has(config, 'fetchId') && state.fetching && state.fetching.fetchId && state.fetching.fetchId == config.fetchId) {
        return state.fetching.request
    }

    // console.warn('fetch', state.endpoint, config)

    let endpoint = state.endpoint

    if (config && has(config, state.keyField)) {
        if (!config[state.keyField]) {
            console.warn('fetch command passed without valid id')
            return false
        }
        commit('setCurrentId', config[state.keyField])
        endpoint += '/' + config[state.keyField]
        delete config.id
    }


    const request = fetchOneOrMore(endpoint, config)
        .then(payload => {

            if (!payload.data) {
                return false
            }

            if (payload.data.constructor === Array) {
                // Multiple items
                commit('receiveItems', payload.data)

                const ids = payload.data.map(item => item[state.keyField])

                const signature = paramSignature(config)
                // console.log('fetch', 'param signature', signature)
                commit('setCurrentFilter', { ids, signature })
            }
            else {
                // console.log(state.endpoint, 'payload', payload)
                // One item
                commit('receiveItem', payload.data)
                // Todo: this probably needs to be done differently to
                // allow proper checking of the id field
                commit('setFetched', payload.id, request)

            }

            if (payload.meta) {
                commit('setState', { key: 'meta', value: payload.meta })
            }

            if (payload.links) {
                commit('setState', { key: 'links', value: payload.links })
            }

            // resolve(payload.data)
        })
        .catch(response => {
            // reject(response)
        })
        .then(() => {
            commit('setFetching')
        })

    // Setting that we are fetching
    const fetchId = (config && _.has(config, 'fetchId')) ? config.fetchId : uuidv4()
    commit('setFetching', { fetchId, request })

    return request
}

// Initialize data
export const init = ({ commit }, data) => {
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
}

// Set the currently selected item
export const setCurrent = ({ commit }, id) => {
    commit('setCurrentId', id)
}

export const setCurrentFilter = ({ commit }, { ids, signature }) => {
    commit('setCurrentFilter', { ids, signature })
}

export const update = ({ commit, state }, { id, data }) => {
    // console.log('Updating item...', id, data)

    return new Promise((resolve, reject) => {

        return updateItem(state.endpoint, id, data)
            .then((response) => {
                // console.log('response', response)
                const model = response.data.data
                commit('receiveItem', model)
                commit('setFetched', model.id)
                return resolve(model)
            })
            .catch(response => {
                // Error
                console.error('Failed to update item', response)
                return reject(response)
            })
    })
}

export const addFilter = ({ commit }, filters) => {
    if (filters.constructor !== Array) {
        filters = [filters]
    }

    commit('setFilters', filters, false)
}

export const clearFilters = ({ commit }) => {
    commit('setFilters', [])
}

export const setFilters = ({ commit }, filters) => {
    // console.log('Setting filters', filters)
    if (filters.constructor !== Array) {
        filters = [filters]
    }

    commit('setFilters', filters)
}

export const setQuery = ({ commit }, { filters, orderBy, order, limit }) => {
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

export const paramSignature = (config) => {
    let signature = {}

    if (config && config.params) {
        // console.log('config and config.params')
        Object.keys(config.params).forEach(k => {
            // if (k !== this.keyField && k !== 'page') {
            signature[k] = config.params[k]
            // }
        })
    }
    return stringifyObject(signature)
}
