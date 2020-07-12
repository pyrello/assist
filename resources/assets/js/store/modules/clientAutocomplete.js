import Vue from 'vue'
import { has } from '../../common'

const state = {
    queries: {}
}

const getters = {
    query: state => q => state.queries[q]
}

const actions = {
    fetch: ({ commit }, q) => new Promise((resolve, reject) => {
        if (_.isString(q)) {
            q = { params: { q }}
        }
        axios.get('/clients/search', q)
            .then(response => {
                if (response && response.data && response.data.data) {
                    let results = response.data.data
                    // console.log('response', response.data.data)
                    commit('setQuery', { q, results })
                    resolve(response.data.data)
                } else {
                    reject(response)
                }
            })
            .catch(error => {
                console.error(error.data.message)
                reject(error,data.message)
            })
    }),
}

const mutations = {
    setQuery(state, { q, results }) {
        // console.log('setQuery', q, results)
        // If the query exists, return nothing
        if (has(state.queries, q)) {
            return false
        }

        // If the query doesn't already exist, store the results
        Vue.set(state.queries, q, results)
    }
}

export default {
    actions,
    getters,
    mutations,
    namespaced: true,
    state,
}