import Vue from 'vue'
import { byId } from '../crud/getters'

// state
const state = () => {
    return {
        all: [],
    }
}

// getters
const getters = {
    all: state => state.all,
    byId,
};

// mutations
const mutations = {
    receiveItems (state, items) {
        items.forEach(item => {
            state.all.push(item);
        })
    },
};

export default {
    getters,
    mutations,
    namespaced: true,
    state,
}
