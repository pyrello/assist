<template>
    <selectize
            :all="all"
            :value.sync="value"
            :fetching="fetching"
            @input="select"
            labelField="description"
            valueField="id"
            valueType="number"
    ></selectize>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import Selectize from './Selectize.vue'

    export default {

        name: 'select-outcomes',

        components: {
            Selectize,
        },

        props: ['value'],

        computed: {
            ...mapGetters('outcomes', ['all', 'fetching'])
        },

        created() {
            this.fetch()
        },

        methods: {
            ...mapActions('outcomes', ['fetch']),

            select(value) {
                this.$emit('input', value)
            },
        },
    }
</script>