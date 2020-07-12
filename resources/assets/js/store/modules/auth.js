import Vue from 'vue'

// state
const state = {
    authenticated: false,
    currentUser: null,
    token: null,
}

// getters
const getters = {
    authenticated: state => state.authenticated,
    authUser: state => state.currentUser,
    token: state => state.token,
}

// actions
const actions = {
    fetchAuthUser ({ commit }) {
        return Vue.http.get('user')
            .then(response => {
                commit('setCurrent', response.body)
            })
            .catch(response => {
                // console.log('Unable to retrieve authenticated user')
            })
    }
}

// Mutations
const mutations = {
    setCurrent (state, user) {
        Vue.set(state, 'currentUser', user)
        localStorage.setItem('user', JSON.stringify(user))
    },
}

export default {
    actions,
    getters,
    mutations,
    namespaced: true,
    state,
}
