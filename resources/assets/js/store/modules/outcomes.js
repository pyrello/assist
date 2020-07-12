import CrudModule from '../crud/CrudModule'
import Vue from 'vue'

export default {
    ...new CrudModule('outcomes', {
        actions: {
            setCurrentService({ commit }, serviceName) {
                commit('setCurrentServiceName', serviceName)
            }
        },

        getters: {
            all: (state) => {
                if (state.currentServiceName === null) {
                    return state.all
                }

                return state.all.filter(item => item.service_names.indexOf(state.currentServiceName) >= 0)
            },
            currentServiceName: state => state.currentServiceName,
        },

        mutations: {
            setCurrentServiceName(state, serviceName) {
                Vue.set(state, 'currentServiceName', serviceName)
            }
        },

        state: {
            currentServiceName: null,
        },
    }),
}