import CrudModule from '../crud/CrudModule'
import Message from '../../models/Message'

export default {
    ...new CrudModule('messages', {
        actions: {
            add(store, message) {
                return new Message(message).save(store)
            },

            cleanSticky(store) {
                store.commit('decrementSticky')
                store.commit('clearAllButSticky')
            },
        },
        mutations: {
            clearAllButSticky(state) {
                state.all = state.all.filter(item => item.sticky > 0)
            },

            decrementSticky(state) {
                state.all.map(item => item.sticky--)
            },
        }
    }),
}