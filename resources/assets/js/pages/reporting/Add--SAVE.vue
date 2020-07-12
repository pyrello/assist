<template>
    <div class="overlay-background">
        <div class="overlay">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Add Report</h1>
            </header>
            <div class="section">
                <form role="form" @submit.prevent="process">
                    <div class="form-group">
                        <label class="control-label">Dates</label>
                        <select class="form-control" v-model="controls.dates" @change="setDates($event.target.value)">
                            <option>This month</option>
                            <option>This quarter</option>
                            <option>This year</option>
                            <option>Last month</option>
                            <option>Last quarter</option>
                            <option>Last year</option>
                            <option>Custom...</option>
                        </select>
                    </div>
                    <div v-if="controls.dates === 'Custom...'" class="well">
                        <div class="row">
                            <div class="col-sm-6">
                                <input-date label="Start Date" id="start_date" :selected.sync="start_date" :config="{ enableTime: false }"></input-date>
                            </div>
                            <div class="col-sm-6">
                                <input-date label="End Date" id="end_date" :selected.sync="start_date" :config="{ enableTime: false }"></input-date>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <select class="form-control" v-model="model.report_profile_id">
                            <option value="0" selected>Select a report profile...</option>
                            <option v-for="profile in profiles" :value="profile.id">{{ profile.label }}</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary btn-lg">Create</button>
                    <a class="btn btn-link" @click.stop="$router.back()">Cancel</a>
                </form>
                <pre>{{ $data }}</pre>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import moment from 'moment'
    import SelectAgeRanges from '../../components/reporting/RangeWidget.vue'
    import SelectEthnicity from '../../components/controls/selects/Selectize.vue'
    import ListWidget from '../../components/reporting/DemographicListWidget.vue'
    import DemographicOptions from '../../components/reporting/DemographicOptions.vue'

    export default {
        computed: {
            ...mapGetters('profiles', { profiles: 'all' }),
        },

        components: {
            DemographicOptions,
            ListWidget,
            SelectAgeRanges,
            SelectEthnicity,
        },

        data() {
            const end = moment().format('YYYY-MM-DD'),
                start = moment().subtract(1, 'year').format('YYYY-MM-DD')

            return {
                model: {
                    report_profile_id: 0,
                    start_date: start,
                    end_date: end,
                },

                controls: {
                    dates: 'This month',
                    selectedOption: null,
                },
            }
        },

        created() {
            this.controls.dates = 'Last quarter'
            this.setDates(this.controls.dates)
            this.fetchProfiles();
        },

        methods: {
            ...mapActions('profiles', { fetchProfiles: 'fetch' }),
            ...mapActions('reports', ['create']),

            allowSplit(range) {
                // Both values must be set
                if (range.min === null || range.max === null) {
                    return false
                }

                // If we made it this far, then yes
                return true
            },

            addSection() {
                this.report.sections.push({
                    title: '',
                })
            },

            blankRange() {
                return {
                    min: null,
                }
            },

            deleteRange(ranges, index) {

                // Delete the current range
                ranges.splice(index, 1)

            },

            removeSection(index) {
                this.report.sections.splice(index, 1)
            },

            process() {
                const data = {
                    data: this.model,
                }
                this.create(data)
                    .then(response => {
                        this.addMessage({
                            text: response.body.message,
                            type: 'success',
                        })
                        this.$router.push('/reports/'+response.body.data.id)
                    })
                    .catch(response => {
                        this.addMessage({
                            text: response.message,
                            type: 'danger',
                        })
                    })
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

            setDates(value) {
                console.log('value', value, moment().startOf('quarter').format('YYYY-MM-DD'))
                if (value !== 'Custom...') {

                    switch (value) {
                        case 'This month':
                            this.start_date = moment().startOf('month').format('YYYY-MM-DD')
                            this.end_date = moment().format('YYYY-MM-DD')
                            break;
                        case 'This quarter':
                            this.start_date = moment().startOf('quarter').format('YYYY-MM-DD')
                            this.end_date = moment().format('YYYY-MM-DD')
                            break;
                        case 'This year':
                            this.start_date = moment().startOf('year').format('YYYY-MM-DD')
                            this.end_date = moment().format('YYYY-MM-DD')
                            break;
                        case 'Last month':
                            this.start_date = moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DD')
                            this.end_date = moment().subtract(1, 'month').endOf('month').format('YYYY-MM-DD')
                            break;
                        case 'Last quarter':
                            this.start_date = moment().subtract(1, 'quarter').startOf('quarter').format('YYYY-MM-DD')
                            this.end_date = moment().subtract(1, 'quarter').endOf('quarter').format('YYYY-MM-DD')
                            break;
                        case 'Last year':
                            this.start_date = moment().subtract(1, 'year').startOf('year').format('YYYY-MM-DD')
                            this.end_date = moment().subtract(1, 'year').endOf('year').format('YYYY-MM-DD')
                            break;
                        default:
                            break;
                    }
                }
            },

            setNextRangeMin(ranges, index, value) {
                // Set it's min value to value + 1
                this.$set(ranges[index+1], 'min', Number(value)+1)
            },

            showSplitOptions(demographic, item) {
                this.controls.split.modal.show = true
            },

            splitByAges(type, name, index) {
                console.log(type, name, index)

                if (Object.prototype.hasOwnProperty.call(this.report.query, type)) {
                    // Todo: generalize this so that it doesn't depend on the item.description
                    if (!Object.prototype.hasOwnProperty.call(this.report.query[type].ages, name)) {
                        this.$set(this.report.query[type].ages, name, [])
                    }

                    if (typeof index === 'undefined') {
                        let current = { min: 0 }
                        this.report.query[type].ages[name].splice(0, 1, current)
                    } else {

                        let range = this.report.query[type].ages[name][index],
                                current = { ...this.blankRange(), max: null },
                                next = this.blankRange()

                        current.min = range.min

                        // If the range has a max value
                        if (range.hasOwnProperty('max') && range.max !== null) {
                            next.max = range.max
                        }

                        // Insert a new range
                        this.report.query[type].ages[name].splice(index, 1, current)

                        // Update the next range
                        this.report.query[type].ages[name].splice(index+1, 0, next)
                    }
                }
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

            toggleAllEthnicity() {
                console.log(this.report.query.ethnicity)
                if (this.controls.ethnicity.include_all) {
                    this.$set(this.report.query.ethnicity, 'include', this.ethnicity.map(item => item.name))
                } else {
                    this.$set(this.report.query.ethnicity, 'include', [])
                }
            },

            toggleAllServices() {
                console.log(this.report.query.services)
                if (this.controls.services.include_all) {
                    this.$set(this.report.query.services, 'include', this.services.map(item => item.name))
                } else {
                    this.$set(this.report.query.services, 'include', [])
                }
            },

            toggleAllVictimTypes() {
                console.log(this.report.query.services)
                if (this.controls.services.include_all) {
                    this.$set(this.report.query.services, 'include', this.services.map(item => item.name))
                } else {
                    this.$set(this.report.query.services, 'include', [])
                }
            },
        },
    }
</script>