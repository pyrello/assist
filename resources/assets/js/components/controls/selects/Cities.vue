<template>
    <selectize
            :all="citiesByState"
            :value.sync="value"
            @input="select"
            :disabled="disabled"
            :id="id"
            placeholder="Select the city..."
            valueField="name"
    ></selectize>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Selectize from './Selectize.vue'

    export default {

        components: {
            Selectize
        },

        props: ['id', 'stateName', 'value', 'disabled'],

        computed: {
            ...mapGetters('locations', [
                'cities',
            ]),

            citiesByState() {
                return this.cities(this.stateName)
            }
        },

        methods: {
            select(value) {
                this.$emit('input', value)
            },
        },
    }
</script>