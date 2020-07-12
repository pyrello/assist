<template>
    <selectize
            :id="id"
            :value="value"
            class="form-control selectize-search"
            placeholder="Start typing to search for an existing abuser..."
            label-field="full_name"
            value-type="number"
            @input="select"
            :config="defaultConfig()"
    ></selectize>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import Selectize from './Selectize.vue'

    export default {

        components: {
            Selectize
        },

        computed: {
            ...mapGetters('clientAutocomplete', ['query']),
        },

        props: {
            id: String,
            exclude_id: Number,
            value: Number,
        },

        methods: {
            ...mapActions('abuserAutocomplete', ['clear', 'fetch']),

            defaultConfig() {
                const that = this;

                return {
                    valueField: 'id',
                    labelField: 'full_name',
                    searchField: 'full_name',
                    options: [],
                    create: false,
                    load(query, callback) {
                        if (!query.length) return callback()

                        that.fetch(query)
                            .then(results => {

                                // Remove the id of the current client
                                if (that.exclude_id) {
                                    results = results.filter(item => item.id !== that.exclude_id)
                                }
                                callback(results)
                            })
                            .catch(error => callback(error))
                    },
                }
            },

            select(value) {
                value = Number(value) || null
                this.$emit('input', value);
            },
        },
    }
</script>