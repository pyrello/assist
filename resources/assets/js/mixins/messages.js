import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('messages', {
            addMessage: 'add',
            removeMessage: 'remove',
        })
    }
}