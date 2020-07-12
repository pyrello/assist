<template>
    <selectize
            :all="all"
            :value.sync="value"
            placeholder="Select the service..."
            id="service_id"
            @input="select"
            valueField="id"
            valueType="number"
    ></selectize>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import Selectize from './Selectize.vue'

    export default {

        name: 'select-services',

        components: {
            Selectize
        },

        props: ['value'],

        computed: {
            ...mapGetters('services', ['all']),
        },

        activated() {
            this.fetch()
        },

        methods: {
            ...mapActions('services', ['fetch']),

            select(value) {
                this.$emit('input', value);
            }
        },
    }
</script>