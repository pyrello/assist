import * as defaultActions from './actions'
import defaultMutations from './mutations'
import defaultGetters from './getters'

export default class CrudModule {
    constructor(name, {
        state = {},
        actions = {},
        getters = {},
        mutations = {},
        namespaced = true,
        modules,
        endpoint,
        keyField = 'id'
    } = {}) {

        this.endpoint = endpoint || name
        this.name = name
        this.namespaced = namespaced

        this.keyField = keyField

        this.state = {
            all: [],
            completeRecords: [],
            currentFilter: '{}',
            currentId: 0,
            // currentPage: 0,
            orderBy: 'id',
            order: 'asc',
            orderType: 'number',
            endpoint: this.endpoint,
            fetched: {},
            fetching: false,
            filters: [],
            filtered: {},
            keyField: 'id',
            limit: -1,
            links: {},
            listing: [],
            meta: {},
            type: name,
            ...state,
        }

        this.getters = {
            ...defaultGetters,
            ...getters,
        }

        this.actions = {
            ...defaultActions,
            ...actions,
        }

        this.mutations = {
            ...defaultMutations,
            ...mutations,
        }

        if (modules) {
            this.modules = modules
        }
    }
}