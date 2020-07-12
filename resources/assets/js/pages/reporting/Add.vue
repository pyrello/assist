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
                                <input-date label="Start Date" id="start_date" v-model="model.start_date"></input-date>
                            </div>
                            <div class="col-sm-6">
                                <input-date label="End Date" id="end_date" v-model="model.end_date"></input-date>
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
                <!--<pre>{{ $data }}</pre>-->
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

            process() {
                const data = {
                    data: this.model,
                }
                this.create(data)
                    .then(created => {
                        // console.log('created', created)
                        this.addMessage('Report created successfully')
                        this.$router.push('/reporting/reports/'+created.id)
                    })
                    .catch(error => {
                        // console.log('error', error)
                        this.addMessage({
                            text: error.message,
                            type: 'danger',
                        })
                    })
            },

            setDates(label) {
                const { start_date, end_date } = this.getDatesFromLabel(label)
                this.model.start_date = start_date
                this.model.end_date = end_date
            },

            getDatesFromLabel(label) {
                // console.log('label', label)
                let start_date = moment(),
                    end_date = moment()

                switch (label) {
                    case 'This month':
                        start_date = start_date.startOf('month')
                        break;
                    case 'This quarter':
                        start_date = start_date.startOf('quarter')
                        break;
                    case 'This year':
                        start_date = start_date.startOf('year')
                        break;
                    case 'Last month':
                        start_date = start_date.subtract(1, 'month').startOf('month')
                        end_date = end_date.subtract(1, 'month').endOf('month')
                        break;
                    case 'Last quarter':
                        start_date = start_date.subtract(1, 'quarter').startOf('quarter')
                        end_date = end_date.subtract(1, 'quarter').endOf('quarter')
                        break;
                    case 'Last year':
                        start_date = start_date.subtract(1, 'year').startOf('year')
                        end_date = end_date.subtract(1, 'year').endOf('year')
                        break;
                    default:
                        break;
                }

                start_date = start_date.format('YYYY-MM-DD')
                end_date = end_date.format('YYYY-MM-DD')

                return { start_date, end_date }
            },

            setNextRangeMin(ranges, index, value) {
                // Set it's min value to value + 1
                this.$set(ranges[index+1], 'min', Number(value)+1)
            },

            showSplitOptions(demographic, item) {
                this.controls.split.modal.show = true
            },

            splitByAges(type, name, index) {
                // console.log(type, name, index)

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
                // console.log(this.report.query.ethnicity)
                if (this.controls.ethnicity.include_all) {
                    this.$set(this.report.query.ethnicity, 'include', this.ethnicity.map(item => item.name))
                } else {
                    this.$set(this.report.query.ethnicity, 'include', [])
                }
            },

            toggleAllServices() {
                // console.log(this.report.query.services)
                if (this.controls.services.include_all) {
                    this.$set(this.report.query.services, 'include', this.services.map(item => item.name))
                } else {
                    this.$set(this.report.query.services, 'include', [])
                }
            },

            toggleAllVictimTypes() {
                // console.log(this.report.query.services)
                if (this.controls.services.include_all) {
                    this.$set(this.report.query.services, 'include', this.services.map(item => item.name))
                } else {
                    this.$set(this.report.query.services, 'include', [])
                }
            },
        },
    }
</script>