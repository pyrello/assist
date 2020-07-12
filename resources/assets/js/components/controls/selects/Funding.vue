<template>
    <selectize
            :all="all"
            :value.sync="value"
            placeholder="Select the funding source..."
            id="funding_source_id"
            @input="select"
            valueField="id"
            valueType="number"
    ></selectize>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import Selectize from './Selectize.vue'

    export default {

        name: 'select-funding-source',

        components: {
            Selectize
        },

        props: ['value'],

        computed: {
            ...mapGetters('fundingSources', ['all']),
        },

        // activated() {
        //     this.fetch()
        // },

        methods: {
            // ...mapActions('fundingSources', ['fetch']),

            select(value) {
                this.$emit('input', value);
            }
        },
    }
</script>