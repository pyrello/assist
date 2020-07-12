<template>
    <selectize
            :all="all"
            :value.sync="value"
            id="select-ethnicity"
            placeholder="Select ethnicity..."
            :multiple="true"
            @input="select"
            identity="ethnicity"
            valueField="id"
            valueType="number"
    >
        <option v-for="item in all" :value="item.id">{{ item.name }}</option>
    </selectize>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { copy } from '../../../common'
    import Selectize from './Selectize.vue'

    export default {
        name: 'select-ethnicity',
        components: {
            Selectize,
        },

        props: {
            value: Array,
        },

        computed: {
            ...mapGetters('ethnicity', ['all']),
        },

        methods: {
            select(value) {
                // console.log('[ethnicity] selecting', value)
                if (Array.isArray(value)) {
                    value = value.map(id => Number(id))
                }
                this.$emit('input', value)
            },
        },
    }
</script>