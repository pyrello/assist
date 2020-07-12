<template>
    <selectize
            :all="states"
            :value.sync="value"
            id="select-state"
            @input="select"
            placeholder="Select the state..."
            valueField="name"
    >
        <option v-for="item in states" :value="item.id">{{ item.name }}</option>
    </selectize>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import Selectize from './Selectize.vue'

    export default {

        components: {
            Selectize
        },

        props: ['value'],

        computed: {
            ...mapGetters('locations', ['states'])
        },

        mounted() {
            if (this.value) {
                this.getLocalitiesByState(this.value)
            }
        },

        watch: {
            value(value) {
                this.getLocalitiesByState(value)
            }
        },

        methods: {
            ...mapActions('locations', ['getLocalitiesByState']),

            select(value) {
                this.$emit('input', value)
            },
        },
    }
</script>