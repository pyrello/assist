<template>
    <div>
        <div v-if="current">
            <header class="content-header padded">
                <div class="header-actions pull-right hidden-xs hidden-sm desktop">
                    <a class="btn btn-success btn" :href="downloadPath"><i class="fa fa-download"></i> Download</a>
                </div>
                <h1 v-if="current.label">{{ current.label }}</h1>
                <div class="header-actions hidden-md hidden-lg mobile">
                    <a class="btn btn-success btn" :href="downloadPath"><i class="fa fa-download"></i> Download</a>
                </div>
            </header>
            <div class="section">
                <!--<header>-->
                    <!--<h2>{{ current.start_date | prettyDate }} - {{ current.end_date | prettyDate }}</h2>-->
                <!--</header>-->
                <div class="row">
                    <div class="col-sm-5">
                        <div class="form-group">
                            <label class="control-label">Date Range</label>
                            <select class="form-control" v-model="range" @change="init">
                                <option>This month</option>
                                <option>This quarter</option>
                                <option>This year</option>
                                <option>Last month</option>
                                <option>Last quarter</option>
                                <option>Last year</option>
                                <option>Custom...</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div v-if="range === 'Custom...'" class="well">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="control-label">Start</label>
                                <input-date label="Start Date" id="start_date" :selected.sync="start_date" :config="{ enableTime: false }"></input-date>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="control-label">End</label>
                                <input-date label="End Date" id="end_date" :selected.sync="start_date" :config="{ enableTime: false }"></input-date>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th></th>
                        <th v-if="current.aggregation_type === 'percent'">Completed</th>
                        <th>Total</th>
                        <th v-if="current.aggregation_type === 'percent'">Percent</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(row, $index) in current.report_data">
                        <td>{{ row.label }}</td>
                        <td class="fit-content" v-if="current.aggregation_type === 'percent'">{{ row.partial }}</td>
                        <td class="fit-content">{{ row.total }}</td>
                        <td class="fit-content" v-if="current.aggregation_type === 'percent'">{{ Math.round(row.percent) }}%</td>
                    </tr>
                    <tr class="report-total-row">
                        <th>Total</th>
                        <th v-if="current.aggregation_type === 'percent'"></th>
                        <th>{{ current.total }}</th>
                        <th v-if="current.aggregation_type === 'percent'">100%</th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-else class="lead section">
            <i class="fa fa-refresh fa-spin"></i> Your report is being generated. Please allow some time for the process to complete.
        </div>
        <pre>{{ current }}</pre>
    </div>
</template>

<script>
    import moment from 'moment'
    import { mapActions, mapGetters } from 'vuex'

    export default {

        data() {
            return {
                generating: true,
                range: 'Last year',
                start_date: null,
                end_date: null,
            }
        },

        computed: {
            ...mapGetters('profiles', ['byId', 'fetching']),

            current() {
                return this.byId(this.$route.params.id)
            },

            downloadPath() {
                let path = '/reports/'+this.current.id+'/download'
                let query = ''

                if (this.start_date) {
                    query += 'start_date=' + this.start_date
                }

                if (this.end_date) {
                    if (query !== '') {
                        query += '&'
                    }
                    query += 'end_date=' + this.end_date
                }

                if (query !== '') {
                    path += '?' + query
                }
                console.log(path)

                return path
            }
        },

        created() {
            this.init()
        },

        // Watchers
        watch: {
            '$route': 'init',
        },

        methods: {
            ...mapActions('profiles', ['fetch', 'setCurrent']),

            init() {
                this.setDates(this.range)
                // const id = this.$route.params.id
                const config = {
                    id: this.$route.params.id,
                    params: {
                        start_date: this.start_date,
                        end_date: this.end_date,
                    }
                }
                this.fetch(config)
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

            setDates(label) {
                const { start_date, end_date } = this.getDatesFromLabel(label)
                this.start_date = start_date
                this.end_date = end_date
            },

//            pollFetch() {
//                const id = this.$route.params.id
//                this.fetch({ id, forceRefresh: true })
//                        .then(response => {
//                            console.log('Fetched...', this.current)
//                            if (this.current.cached_report === null) {
//                                console.log('Setting timeout')
//                                setTimeout(this.pollFetch, 10000)
//                            } else {
//                                this.generating = false
//                            }
//                        })
//            }
        },
    }
</script>
