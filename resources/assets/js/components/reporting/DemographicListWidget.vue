<template>
    <div class="form-group">
        <label class="control-label" v-text="label" v-if="label"></label>
        <table class="table table-striped no-bottom-margin">
            <thead>
            <tr>
                <th class="fit-content">
                    <input type="checkbox" v-model="includeAll" @change="toggleAll">
                </th>
                <th>Label</th>
                <th>Options</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="(item, index) in list">
                <template v-if="typeof item === 'string'">
                    <tr>
                        <td class="fit-content">
                            <input type="checkbox" :id="'victim_types-include-'+item" @click="toggleInclude(index)" checked="checked">
                        </td>
                        <td class="td-input">
                            <input type="text" class="form-control input-sm" :placeholder="item" @input="setLabel(index, $event.target.value)">
                        </td>
                        <td>
                            <a class="btn btn-rounded btn-primary btn-xs" href="#split-range" @click.stop="showSplitOptions(index)"><i class="fa fa-chevron-left"></i></a>
                        </td>
                    </tr>
                </template>
                <template v-else>
                    <tr>
                        <td class="fit-content">
                            <input type="checkbox" :id="'victim_types-include-'+item" v-model="list[index].include" :value="item">
                        </td>
                        <td class="td-input">
                            <input type="text" class="form-control input-sm" :placeholder="item.name" v-model="item.label" :disabled="!item.include">
                        </td>
                        <td>
                            <a class="btn btn-rounded btn-primary btn-xs" href="#split-range" @click.stop="showSplitOptions(index)"><i class="fa fa-chevron-left"></i></a>
                        </td>
                    </tr>
                </template>
            </template>
            </tbody>
        </table>
        <modal :show.sync="showModal">
            <template v-if="showOptionsIndex >= 0">
                <header>
                    <h1>Select demographic to sub-divide by</h1>
                </header>

                <form role="form" @submit.prevent="add">
                    <demographic-options
                            label="Base demographic set"
                            :exclude="[type]"
                    ></demographic-options>
                </form>
            </template>
        </modal>
        <small class="help-block">Use the insert button (<i class="fa fa-chevron-left"></i>) to break a range into multiple ranges. Use the delete button (<i class="fa fa-times"></i>) to remove a range. Use the label box to create an different label for the range.</small>
        <!--<pre>{{ $data }}</pre>-->
    </div>
</template>

<script>
    import _ from 'lodash'
    import DemographicOptions from './DemographicOptions.vue'

    export default {

        components: {
            DemographicOptions,
        },

        data() {
            return {
                activeRange: 0,
                includeAll: true,
                include: [],
                subs: {},
                labels: {},
                showModal: false,
                showOptionsIndex: -1,
            }
        },

        methods: {

            allowSplit(range) {
                // Both values must be set
                if (range.min === null || range.max === null) {
                    return false
                }

                // If we made it this far, then yes
                return true
            },

            blankRange() {
                return {
                    min: null,
                }
            },

            deleteRange(index) {
                // Get the current range
                let range = this.ranges[index]

                // Delete the current range
                this.ranges.splice(index, 1)

                this.$set(this.ranges[index], 'min', range.min)
            },

            rangeName(range) {
                let label = ''
                if (range.min === null) {
                    return ''
                } else {
                    label += range.min.toString()
                }

                if (range.hasOwnProperty('max') && range.max !== null) {
                    label += ' - ' + range.max.toString()
                } else {
                    label += '+'
                }

                return label
            },

            setLabel(index, value) {
                this.list.splice(index, 1, this.initObject(this.list[index], value))
            },

            setNextRangeMin(index, value) {
                // Set it's min value to value + 1
                this.$set(this.ranges[index+1], 'min', Number(value)+1)
            },

            showSplitOptions(index) {
                this.showOptionsIndex = index
                this.showModal = true
            },

            splitRange(index) {
                let range = this.ranges[index],
                    current = { ...this.blankRange(), max: null },
                    next = this.blankRange()

                current.min = range.min

                // If the range has a max value
                if (range.hasOwnProperty('max') && range.max !== null) {
                    next.max = range.max
                }

                // Insert a new range
                this.ranges.splice(index, 1, current)
                // Update the next range
                this.ranges.splice(index+1, 0, next)

                // There is a slight lag, so wait until the next tick
                this.$nextTick(() => {
                    // Set focus on the newly created input
                    this.activeRange = index
                    $(this.$refs['range-max-'+index]).focus()
                })
            },

            toggleAll() {
                if (this.includeAll) {
                    this.$set(this, 'include', this.services.map(item => item.name))
                } else {
                    this.$set(this, 'include', [])
                }
            },

            toggleInclude(index) {
                console.log('toggling include')
                if (typeof this.list[index] === 'string') {
                    this.list.splice(index, 1, this.initObject(this.list[index], '', false))
                }
            },

            convertToObject(index) {
                if (typeof this.list[index] === 'string') {
                    this.list.splice(index, 1, this.initObject(this.list[index]))
                } else {
                    console.error('Attempted to convert an object into an object')
                }
            },

            initObject(name, label = '', include = true) {
                console.log('creating object', name, label, include)
                return {
                    name,
                    label,
                    include,
                }
            }
        },

        props: {
            label: {
                type: String,
                default: 'Range',
            },
            type: String,
            list: Array,
        },

        watch: {
            // I'm using a watch function for this because
            // there are many moving parts of which to keep track
//            list() {
//                console.log('updated list')
//                this.$emit('update:list', this.list)
//            }
        }
    }
</script>