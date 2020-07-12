<template>
    <selectize
            :all="all"
            :value.sync="value"
            placeholder="Select the gender..."
            :id="id"
            @input="select"
            valueField="name"
    >
        <option v-for="item in all">{{ item.name }}</option>
    </selectize>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Selectize from './Selectize.vue'

    export default {
        components: {
            Selectize,
        },

        props: ['id', 'value'],

        computed: {
            ...mapGetters('genders', ['all'])
        },

        methods: {
            select(value) {
                this.$emit('input', value)
            },
        },
    }
</script>