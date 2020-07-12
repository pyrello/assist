<template>
    <div class="form-group">
        <label class="control-label" v-text="label"></label>
        <table class="table">
            <thead>
            <tr>
                <th class="col-sm-1">Min</th>
                <th class="fit-content"></th>
                <th class="fit-content">Max</th>
                <th></th>
                <th>Label</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in ranges">
                <td class="col-sm-1 text-right">{{ item.min }}</td>
                <td class="fit-content" v-if="item.hasOwnProperty('max')">-</td>
                <td class="fit-content" v-else>+</td>
                <td class="fit-content td-number td-input">
                    <input type="number" class="form-control input-sm col-sm-1" size="4" :min="item.min+1" :ref="'range-max-'+index" v-model.number="ranges[index].max" @keyup="setNextRangeMin(index, $event.target.value)" v-if="item.hasOwnProperty('max')">
                </td>
                <td v-if="allowSplit(item)" class="td-btn">
                    <a class="btn btn-rounded btn-primary btn-xs" href="#split-range" @click.stop="splitRange(index)" v-if="allowSplit(item)"><i class="fa fa-chevron-left"></i></a>
                    <a class="btn btn-rounded btn-danger btn-xs" href="#delete-range" @click.stop="deleteRange(index)" v-if="allowSplit(item) && index < ranges.length-1"><i class="fa fa-times"></i></a>
                </td>
                <td v-else-if="activeRange==index"><small class="help-block">Enter the top of the range</small></td>
                <td v-else-if="activeRange+1==index"><small class="help-block">This will update automatically</small></td>
                <td v-else></td>
                <td class="td-input">
                    <input type="text" class="form-control input-sm" :placeholder="rangeName(item)" :value="ranges[index].label" @input="setLabel(index, $event.target.value)" v-if="allowSplit(item)">
                </td>
            </tr>
            </tbody>
        </table>
        <small class="help-block">Use the insert button (<i class="fa fa-chevron-left"></i>) to break a range into multiple ranges. Use the delete button (<i class="fa fa-times"></i>) to remove a range. Use the label box to create an different label for the range.</small>
        <!--<pre>{{ ranges }}</pre>-->
    </div>
</template>

<script>
    import _ from 'lodash'

    export default {
        data() {
            return {
                activeRange: 0,
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
                this.$set(this.ranges[index], 'label', value)
            },

            setNextRangeMin(index, value) {
                // Set it's min value to value + 1
                this.$set(this.ranges[index+1], 'min', Number(value)+1)
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
        },

        props: {
            label: {
                type: String,
                default: 'Range',
            },
            ranges: Array,
        },

        watch: {
            // I'm using a watch function for this because
            // there are many moving parts of which to keep track
            ranges() {
                this.$emit('update:ranges', this.ranges)
            }
        }
    }
</script>