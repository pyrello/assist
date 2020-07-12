<template>
    <div>
        <div v-if="current">
            <header class="content-header padded">
                <div class="header-actions pull-right hidden-xs hidden-sm desktop">
                    <a class="btn btn-success btn" :href="'/reports/'+current.id+'/download'"><i class="fa fa-download"></i> Download</a>
                </div>
                <h1 v-if="current.profile.label">{{ current.profile.label }}</h1>
                <div class="header-actions hidden-md hidden-lg mobile">
                    <a class="btn btn-success btn" :href="'/reports/'+current.id+'/download'"><i class="fa fa-download"></i> Download</a>
                </div>
            </header>
            <div class="section">
                <header>
                    <h2>{{ current.start_date | prettyDate }} - {{ current.end_date | prettyDate }}</h2>
                </header>
                <!--<div class="form-group">-->
                    <!--<label class="control-label">Date Range</label>-->
                    <!--<select class="form-control" v-model="range" @change="setDates($event.target.value)">-->
                        <!--<option>This month</option>-->
                        <!--<option>This quarter</option>-->
                        <!--<option>This year</option>-->
                        <!--<option>Last month</option>-->
                        <!--<option>Last quarter</option>-->
                        <!--<option>Last year</option>-->
                        <!--<option>Custom...</option>-->
                    <!--</select>-->
                <!--</div>-->
                <!--<div v-if="range === 'Custom...'" class="well">-->
                    <!--<div class="row">-->
                        <!--<div class="col-sm-6">-->
                            <!--<input-date label="Start Date" id="start_date" :selected.sync="start_date" :config="{ enableTime: false }"></input-date>-->
                        <!--</div>-->
                        <!--<div class="col-sm-6">-->
                            <!--<input-date label="End Date" id="end_date" :selected.sync="start_date" :config="{ enableTime: false }"></input-date>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <div v-for="section in current.profile.sections">
                    <h2 v-if="section.label">{{ section.label }}</h2>
                    <table class="table table-striped">
                        <tbody>
                        <tr v-for="(row, $index) in section.data">
                            <td>{{ $index }}</td>
                            <td class="fit-content">{{ row }}</td>
                        </tr>
                        <tr class="report-total-row">
                            <th>Total</th>
                            <th>{{ section.total }}</th>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!--<pre>{{ current }}</pre>-->
        </div>
        <div v-else class="lead section">
            <i class="fa fa-refresh fa-spin"></i> Your report is being generated. Please allow some time for the process to complete.
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {

        data() {
            return {
                generating: true,
                range: '',
                start_date: null,
                end_date: null,
            }
        },

        computed: {
            ...mapGetters('reports', ['byId', 'fetching']),

            current() {
                return this.byId(this.$route.params.id)
            },
        },

        created() {
            this.init()
        },

        // Watchers
        watch: {
            '$route': 'init',
        },

        methods: {
            ...mapActions('reports', ['fetch', 'setCurrent']),

            init() {
                const id = this.$route.params.id
                this.fetch({ id })
            }

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