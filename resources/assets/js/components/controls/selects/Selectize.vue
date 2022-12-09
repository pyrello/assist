<template>
    <select :id="id" class="form-control" :placeholder="placeholder" :multiple="multiple" ref="select" :value.sync="value">
        <slot>
            <option v-for="item in all" :value="itemValue(item)" v-text="itemLabel(item)"></option>
        </slot>
    </select>
</template>

<script>
    import { defined, has, mustacheTemplate } from '../../../common'

    export default {

        name: 'selectize',

        data() {
            return {
                fetched: true,
                localConfig: this.defaultConfig(),
                updating: false,
                allCount: 0,
                allCached: '',
                previousValue: null,
            }
        },

        props: {
            all: {
                type: Array|Object,
            },

            clear: {
                type: Boolean,
                default: false,
            },

            config: Object,

            disabled: {
                default: false,
                type: Boolean,
            },

            id: String,

            multiple: {
                default: false,
                type: Boolean,
            },

            labelField: {
                default: 'name',
                type: String,
            },

            placeholder: {
                default: 'Select the item...',
                type: String,
            },

            template: String,

            value: Array|String,

            identity: String,

            valueField: {
                default: 'value',
                type: String,
            },

            valueType: {
                default: 'string',
                type: String,
            },
        },

        computed: {
            selectize() {
                return this.$el && this.$el.selectize || null
            },
        },

        /**
         * this.init() needs to be run during the mounted hook
         * or there is no element to attach to.
         */
        mounted() {
//            this.allCached = JSON.stringify(this.all)
            Object.assign(this.localConfig, this.config)
            this.init()
//            this.previousValue = this.value
//            console.log('previousValue', this.previousValue)
        },

        updated() {
            Object.assign(this.localConfig, this.config)
            this.init()
        },

        destroyed() {
            this.$el.selectize.destroy()
        },

        watch: {
            all() {
                // It is kind of amazing that I came up with a solution
                // to this issue, but it is a disgusting workaround
                // and it should be replaced with a better solution
                // Edit: It is fixed! There is a difference between how
                // vue.js treats bound attributes that are inline vs
                // defined in $data. Here's the code:
//                const allCached = JSON.stringify(this.all)
//                if (allCached !== this.allCached) {
//                    console.log('all is changing', this.id)
//                    this.allCached = allCached
//                }

                this.updating = true

                if (this.selectize) {
                    this.selectize.disable()
                    /**
                     * Instead of this:
                     * selectize.clearOptions()
                     * It is necessary to call the underlying functions that get
                     * called by that function because there is a not a silent
                     * option that can be passed through to the eventual
                     * selectize.clear(). This issue was really annoying to debug :(
                     *
                     * Hopefully, the selectize library eventually updates to include this
                     * PR: https://github.com/selectize/selectize.js/pull/894
                     */
                    this.clearOptions()

                    this.selectize.load(callback => {
                        if (this.all.length > 0) {
                            this.selectize.enable()
                            callback(this.all)
//                                console.log('re-loading all', this.id, this.value)
                            /**
                             * Second parameter of setValue, silent, should be set to
                             * true, to prevent triggering the onChange event
                             */
                            this.selectize.setValue(this.value, true)
                        } else {
                            callback()
                        }
                        this.updating = false
                    })
                }
            },

            disabled(value) {
                if (this.selectize) {
                    if (value) {
                        this.selectize.disable()
                    } else {
                        this.selectize.enable()
                    }
                }
            },

            clear(value) {
                if (value) {
                    this.clearOptions()
                }
                this.$emit('clear')
            },

            value(value) {
                // console.log('value', value)
                // Don't update unless the value has changed
//                if (value !== this.previousValue) {
                this.previousValue = value

                if (this.selectize) {
                    // this.selectize.load(callback => callback)
                    /**
                     * Second parameter of setValue, silent, should be set to
                     * true, to prevent triggering the onChange event
                     */
                    this.selectize.setValue(value, true)
                }
//                }
            },
        },

        methods: {
            defaultConfig() {
                const that = this;

                return {
                    // plugins: {
                    //     remove_button: {
                    //         mode: 'single',
                    //     },
                    // },
                    valueField: this.valueField,
                    labelField: this.labelField,
                    searchField: this.labelField,
                    onInitialize: () => {
                        this.setValue()
                    },
                    onChange: value => {
                        this.select(value);
                    },
                    render: {
                        option(item, escape) {
                            return '<div class="option">' + escape(that.itemLabel(item)) + '</div>'
                        },
                        item(item, escape) {
                            return '<div class="item">' + escape(that.itemLabel(item)) + '</div>'
                        }
                    }
                }
            },

            clearOptions() {
                if (this.selectize) {
                    this.selectize.loadedSearches = {}
                    this.selectize.userOptions = {}
                    this.selectize.renderCache = {}
                    this.selectize.options = this.selectize.sifter.items = {}
                    this.selectize.lastQuery = null
                    this.selectize.trigger('option_clear')
                    this.selectize.clear(true)
                }
            },

            init() {
                this.selectEl = this.$refs.select
                $(this.$el).selectize(this.localConfig)
                this.setValue()
            },

            itemLabel(item) {
                if (defined(this.template)) {
                    if (item.first_name && !defined(item.first_name) && item.last_name && !defined(item.last_name)) {
                        console.warn('first name and last name are undefined', item)
                    }
                    return mustacheTemplate(this.template, item)
                }

                if (typeof item === 'string') {
                    return item
                }

                return item[this.labelField]
            },

            itemValue(item) {
                if (typeof item === 'string') {
                    return item
                }
                if (has(item, this.valueField)) {
                    return item[this.valueField]
                }

                return item.id
            },

            select(value) {
                if (this.valueType === 'number' && value !== 0 && value !== '0') {
                    if (Array.isArray(value)) {
                        value = value.map(item => Number(item))
                    } else {
                        value = Number(value)
                    }
                }
                this.$emit('input', value)
            },

            setValue() {
                this.$el.selectize.setValue(this.value, true)
            },
        },
    }
</script>
