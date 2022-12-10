import Vue from 'vue'
import { has, uuidv4 } from '../../common'
import FetchRecord from './FetchRecord'

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
        const normalizedItem = normalizeItem(item)
        if (state.all.constructor === Array) {
            const localItem = state.all.find(i => i[state.keyField] == item[state.keyField])
            if (localItem) {
                if (!_.isEqual(normalizedItem, localItem)) {
                    const index = state.all.indexOf(localItem)
                    state.all.splice(index, 1, normalizedItem)
                }
            } else {
                state.all.push(normalizedItem)
            }
        } else {
            const localItem = _.find(state.all, { [state.keyField]: item[state.keyField] })
            if (localItem) {
                if (!_.isEqual(normalizedItem, localItem)) {
                    Vue.set(state.all, item[state.keyField], normalizedItem)
                }
            } else {
                Vue.set(state.all, item[state.keyField], normalizedItem)
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

export default {

    clearAll(state) {
        state.all = {}
    },

    // Delete item from store
    deleteItem (state, id) {
        let item = state.all.find(i =>  i.id == id)
        state.all.splice(state.all.indexOf(item), 1)
    },

    makePagination(state, data) {
        this.$set(state.pagination, {
            current_page: data.current_page,
            last_page: data.last_page,
            next_page_url: data.next_page_url,
            prev_page_url: data.prev_page_url
        })
    },

    receiveItems,
    receiveItem,

    setCurrentFilter(state, { ids, signature }) {
        console.warn('setting current filter', signature, ids)
        state.currentFilter = signature
        if (ids) {
            Vue.set(state.filtered, signature, ids)
        }
    },

    // Set the currently selected item
    setCurrentId(state, id) {
        // console.log('setting current id for', state.type)
        state.currentId = Number(id)
    },

    setFetched,

    setFetching(state, fetch = false) {
        state.fetching = fetch
    },

    setFilters(state, filters) {
        filters.forEach(item => {
            state.filters.push(item)
        })
    },

    setState(state, { key, value }) {
        if (has(state, key)) {
            Vue.set(state, key, value)
        }
    },
}
