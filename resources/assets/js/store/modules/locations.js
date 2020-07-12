import Vue from 'vue'
import { defined } from '../../common'

// state
const state = {
    states: [],
    currentState: {},
    retrievedStates: [],
    stateLoading: false,
    counties: [],
    cities: [],
}

// getters
const getters = {
    states: state => state.states,
    currentState: state => state.currentState,
    stateLoading: state => state.stateLoading,
    counties: state => stateName => {
        let stateId
        if (stateName) {
            let st = getStateByName(stateName)
            if (st) {
                stateId = st.id
            }
        } else if (defined(state.currentState)) {
            stateId = state.currentState.id
        }
        if (defined(stateId)) {
            return state.counties.filter(item => item.state_id === stateId)
        }
        else {
            return []
        }
    },
    cities: state => stateName => {
        let stateId
        if (stateName) {
            let st = getStateByName(stateName)
            if (st) {
                stateId = st.id
            }
        } else if (defined(state.currentState)) {
                stateId = state.currentState.id
        }
        if (defined(stateId)) {
            return state.cities.filter(item => item.state_id === stateId)
        }
        else {
            return []
        }
    }
};

// actions
const actions = {
    getLocalitiesByState: ({ commit, state }, stateName) => {
        // console.log('Calling getLocalitiesByState')
        let stateId
        if (stateName) {
            let st = getStateByName(stateName)
            if (st) {
                stateId = st.id
            }
        } else if (defined(state.currentState)) {
            stateName = state.currentState.name
            stateId = state.currentState.id
        }

        if (state.retrievedStates.indexOf(stateName) < 0) {
            state.stateLoading = true;
            Vue.http.get('localities/' + stateId).then(response => {
                const items = response.body;
                state.stateLoading = false;
                commit('receiveItems', items);
            }, response => {
                state.stateLoading = false;
                // console.log('Failed', response);
            });
        }
    },

    setStates: ({ commit }, items) => {
        commit('receiveStates', items);
    },

    setCurrentState: ({ commit }, item) => {
        commit('setCurrentState', item)
    },
}

export const getStateByName = (name) => {
    return state.states.find(item => item.name === name);
};

const logStates = (state) => {
    // console.log('=== Logging states ===');
    state.states.forEach(item => {
        // console.log(item.id, item.name);
    })
};

// mutations
const mutations = {
    receiveItems (state, items) {
        if (typeof items !== 'undefined') {
            if (items.hasOwnProperty('counties')) {
                items.counties.forEach(item => {
                    state.counties.push(item);
                });
            }
            if (items.hasOwnProperty('cities')) {
                items.cities.forEach(item => {
                    state.cities.push(item);
                });
            }
        }
    },

    setRetrievedState (state, name) {
        if (!state.retrievedStates.find(item => item === name)) {
            state.retrievedStates.push(name)
        }
    },

    receiveStates (state, states) {
        state.states = states
    },

    setCurrentState (state, item) {
        if (typeof item === 'string') {
            item = getStateByName(item)
        }
        state.currentState = item
    }
};

export default {
    actions,
    getters,
    mutations,
    namespaced: true,
    state,
}