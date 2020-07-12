import { mapActions, mapGetters } from 'vuex'

export default {

    computed: {
        ...mapGetters('locations', [
            'currentState',
            'states',
            'stateLoading',
            'counties',
            'cities'
        ]),
    },

    // Watchers
    watch: {
        currentState() {
            // console.log('Current state has changed')
            this.getLocalitiesByState()
        }
    },

    methods: {
        ...mapActions('locations', [
            'getLocalitiesByState',
            'getStateByName',
            'setCurrentState'
        ]),
    }
}