import { has } from '../../common'

export const PAGE_LIMIT = 20

export const byId = state  => id => state.all.find(item => item.id == id)

export default {
    all: state => state.all,
    byId,
    byRoute: (state, getters, rootState) => {
        let type = state.type
        if (type.slice(-1) === 's') {
            type = type.slice(0, -1)
        }
        const param = type + '_id'
        if (rootState.route && rootState.route.params && rootState.route.params[param]) {
            return state.all.find(item => item.id == rootState.route.params[param])
        }
        return null
    },
    current: state => state.all.find(item => item.id === state.currentId),
    currentFilter: state => state.currentFilter,
    fetching: state => state.fetching,
    filtered: state => filter => {
        // console.log(state.type, 'getters', 'filtered')
        if (_.has(state.filtered, filter)) {
            return state.all.filter(item => state.filtered[filter].find(id => id == item.id))
        }
        return []
    },
    links: state => state.links,
    meta: state => state.meta,
    paginated: (state) => {

        if (state.currentFilter && has(state.filtered, state.currentFilter)) {
            return state.all.filter(item => {
                return state.filtered[state.currentFilter].find(id => id == item.id)
            })
        }

        return []
    },
}
