<template>
    <selectize :all="allExceptExcluded"
               :selected.sync="selected"
               :label="label"
               @update:selected="select"
    ></selectize>
</template>

<script>
    export default {
        computed: {
            allExceptExcluded() {
                return this.options.filter(item => this.exclude.indexOf(item.value) < 0)
            }
        },

        data() {
            return {
                options: [
                    {
                        name: 'Age',
                        value: 'age'
                    },
                    {
                        name: 'Ethnicity',
                        value: 'ethnicity'
                    },
                    {
                        name: 'Gender',
                        value: 'gender',
                    },
                    {
                        name: 'Services Provided',
                        value: 'services',
                    },
                    {
                        name: 'Victim Types',
                        value: 'victimTypes',
                        nameField: 'description',
                    },
                ],
            }
        },

        methods: {
            select(value) {
                if (typeof value === 'undefined') {
                    value = this.selected
                }
                this.$emit('update:selected', value);
            },
        },

        props: {
            exclude: {
                type: Array,
                default: () => [],
            },
            label: String,
            selected: Array|String,
        }
    }
</script>