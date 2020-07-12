<template>
    <selectize
            :id="id"
            :value="value"
            :all="preload"
            class="form-control selectize-search"
            placeholder="Start typing to search for a client..."
            label-field="full_name"
            value-type="number"
            @input="select"
            :config="defaultConfig()"
    >
        <option v-for="item in preload" :value="item.id">{{ item.full_name }}</option>
    </selectize>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import Selectize from './Selectize.vue'

    export default {

        name: 'client-autocomplete',

        components: {
            Selectize
        },

        computed: {
            ...mapGetters('clientAutocomplete', ['query']),
        },

        props: {
            id: String,
            exclude_id: Number,
            exclude: Object|String,
            value: Number,
            preload: {
                type: Array,
                default() {
                    return []
                },
            },
        },

        methods: {
            ...mapActions('clientAutocomplete', ['clear', 'fetch']),

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

                        if (!_.isEmpty(that.exclude)) {
                            query = {
                                params: {
                                    exclude: that.exclude,
                                    q: query,
                                },
                            }
                        }

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