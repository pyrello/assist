<template>
    <div class="table-responsive">
        <!--<div>-->
            <!--<form id="search" class="form-inline">-->
                <!--<input class="form-control" name="query" v-model="query" placeholder="Filter...">-->
            <!--</form>-->
        <!--</div>-->
        <pagination-info :meta="meta"></pagination-info>
        <table class="table table-striped">
            <thead>
            <tr>
                <th v-for="field in fields" :class="titleClass(field)"
                    @click="sortBy(field.sortField)"
                    v-if="field.sortable">
                    {{ title(field) }}
                    <span class="arrow"
                          :class="sortClass(field.name)"
                    ></span>
                </th>
                <th :class="titleClass(field)" v-else>{{ title(field) }}</th>
            </tr>
            </thead>
            <tbody v-if="fetching">
            <tr>
                <td :colspan="fields.length"><i class="fa fa-refresh fa-spin"></i> Loading data</td>
            </tr>
            </tbody>
            <tbody v-else-if="filteredData.length">
            <tr v-for="(item, index) in filteredData">
                <template v-for="field in fields">
                    <template v-if="typeof $scopedSlots[field.name] !== 'undefined'">
                        <td :class="field.dataClass">
                            <slot :name="field.name" :field="field" :item="item" :row-index="index"></slot>
                        </td>
                    </template>
                    <template v-else>
                        <td :class="field.dataClass" v-html="renderColumn(field, item)"></td>
                    </template>
                </template>
            </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td :colspan="fields.length">No items to display</td>
                </tr>
            </tbody>
        </table>
        <pagination :meta="meta" v-if="meta"></pagination>
    </div>
</template>

<script>
    import Vue from 'vue'
    import _ from 'lodash'
    import { dataGet, defined, has, mustacheTemplate } from '../common'
    import Pagination from './Pagination.vue'
    import PaginationInfo from './PaginationInfo.vue'

    export default {
        name: 'grid',

        components: {
            Pagination,
            PaginationInfo,
        },

        props: {
            actions: Array,
            fields: Array,
            data: Array|Object,
            fetching: {
                default: false,
                type: Boolean|String,
            },
            initialSortKey: String,
            meta: Object,
        },

        data () {
            return {
                query: '',
                sortKey: '',
                sortOrders: {},
            }
        },

        created() {
            if (defined(this.initialSortKey)) {
                this.sortKey = this.initialSortKey
            }
            this.normalizeFields()
        },

        computed: {
            filteredData () {
                const sortKey = this.sortKey
                let query = this.query && this.query.toLowerCase()
                const order = this.sortOrders[sortKey] || 1
                let data = this.data
//                console.log('data', data)
                if (query) {
                    data = data.filter(function (row) {
//                        console.log('row', row)
                        return Object.keys(row).some(key => {
//                            console.log('key', key)
                            return String(row[key]).toLowerCase().indexOf(query) > -1
                        })
                    })
                }
                if (sortKey) {
                   // console.log(sortKey, order)
                    data = data.slice().sort((a, b) => {
                        a = a[sortKey]
                        b = b[sortKey]
//                        console.log('a', a, 'b', b)
                        return (a === b ? 0 : a > b ? 1 : -1) * order
                    })
                }
                return data
            },
        },

        filters: {
            capitalize (str) {
                return str.charAt(0).toUpperCase() + str.slice(1)
            }
        },

        methods: {

            normalizeFields: function() {
                if (typeof(this.fields) === 'undefined') {
                    return
                }
                let self = this
                let obj
                this.fields.forEach(function(field, i) {
                    if (typeof (field) === 'string') {

                        obj = {
                            name: field,
                            title: self.title(field),
                            type: 'string',
                            titleClass: '',
                            dataClass: '',
                            sortable: true,
                            sortField: field,
                            template: null,
//                            callback: null,
//                            visible: true,
                        }
                    } else {
                        obj = {
                            name: field.name,
                            title: self.title(field),
                            type: (defined(field.type)) ? field.type : 'string',
                            sortField: (defined(field.sortField)) ? field.sortField : field.name,
                            titleClass: (defined(field.titleClass)) ? field.titleClass : '',
                            dataClass: (defined(field.dataClass)) ? field.dataClass : '',
                            sortable: (defined(field.sortable)) ? field.sortable : true,
                            template: (defined(field.template)) ? field.template : null,
//                            callback: (field.callback === undefined) ? '' : field.callback,
//                            visible: (field.visible === undefined) ? true : field.visible,
                        }
                    }
                    // Set the field
                    self.$set(self.fields, i, obj)

                    // Add the field to sorting
                    self.$set(self.sortOrders, obj.sortField, 1)
                })
            },

            renderColumn (field, row) {
                if (field.template) {
                    return mustacheTemplate(field.template, row)
                }

                return dataGet(row, field.name)
            },

            resolveField(name, item) {

                if (name.match(/{{\s*[\w\.]+\s*}}/g)) {
                    const self = this
                    return name.replace(/{{\s*[\w\.]+\s*}}/g, function(match) {
                        return self.resolveDotNotation(match.match(/[\w\.]+/)[0], item)
                    })
                }

                return this.resolveDotNotation(name, item)
            },

            resolveDotNotation(name, item) {
                let levels = []
                if (name.indexOf('.') >= 0) {
                    levels = name.split('.')
                } else {
                    levels = [name]
                }

                for (let i = 0; i < levels.length; i++) {
                    item = item[levels[i]]
                }

                return item
            },

            sortBy (key) {
                this.sortKey = key
                this.$set(this.sortOrders, key, this.sortOrders[key] * -1)
            },

            sortClass(key) {
                return (this.sortOrders[key] > 0) ? 'asc' : 'dsc'
            },

            setTitle (field) {
                if (typeof field.title === 'undefined') {
                    return field.name
                }

                return field.title
            },

            title (field) {
                if (typeof field === 'string') {
                    return this.titleCase(field)
                }

                if (typeof field.title === 'undefined') {
                    return this.titleCase(field.name)
                }

                return field.title
            },

            titleCase(str) {
                return str.replace(/\w+/g, function(txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                })
            },

            titleClass(field) {
                const classObj = {}
                if (field.sortable) {
                    classObj.active = this.sortKey == field.sortField
                }
                if (field.titleClass) {
                    if (typeof field.titleClass === 'string') {
                        classObj[field.titleClass] = true
                    } else {
                        Object.assign(classObj, field.titleClass)
                    }
                }

                return classObj
            },
        },
    }
</script>

<style>
    .arrow {
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;
        margin-left: 5px;
        opacity: 0.66;
    }

    .arrow.asc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid #333;
    }

    .arrow.dsc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #333;
    }
</style>