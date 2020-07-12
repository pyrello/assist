<template>
    <selectize
            :all="all"
            :value.sync="value"
            @input="select"
            labelField = 'full_name'
            valueField="id"
            valueType="number"
    ></selectize>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import Selectize from './Selectize.vue'

    export default {

        name: 'select-advocates',

        components: {
            Selectize,
        },

        props: ['value'],

        computed: {
            ...mapGetters('advocates', ['all'])
        },

        created() {
            this.fetch()
        },

        methods: {
            ...mapActions('advocates', ['fetch']),

            select(value) {
                this.$emit('input', value)
            },
        },
    }
</script>