<template>
    <div>
        <header class="content-header">
            <h1>Clients<small v-if="fetching"> <i class="fas fa-spinner fa-spin"></i></small></h1>
        </header>
        <div class="section">
            <form @submit.prevent="process">
                <div class="row" id="client-search-basic">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label hidden">Search</label>
                            <input class="form-control" type="text" v-model="q" placeholder="Enter one or more search terms...">
                        </div>
                    </div>
                    <div class="col-md-8" v-if="!advancedSearch">
                        <button class="btn btn-success"><i class="fas fa-search"></i> Search Clients</button>
                        <a class="btn btn-link" href="#advanced-search" @click.prevent="advancedSearch = true">More options <i class="fas fa-caret-down"></i></a>
                        <span v-if="fetching"><i class="fas fa-spinner fa-pulse"></i> Searching...</span>
                    </div>
                    <div class="col-sm-12">
                        <p class="help-block"><i class="fas fa-question-circle"></i> <strong>Tip:</strong> Search by first name and/or last name, id, or phone number. If searching by phone number, just type the numbers <em>without any formatting</em>.</p>
                    </div>
                </div>
                <div v-if="advancedSearch" class="row" id="client-search-advanced">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Intake Date</label>
                            <div class="row">
                                <div class="col-md-6">
                                    <!--<label>From</label>-->
                                    <input-date end="now" v-model="filters.intake_date"></input-date>
                                </div>
                                <!--<div class="col-md-6">-->
                                    <!--<label>To</label>-->
                                    <!--<input-date :end="today"></input-date>-->
                                <!--</div>-->
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Last Activity Date</label>
                            <div class="row">
                                <div class="col-md-6">
                                    <!--<label>From</label>-->
                                    <input-date end="now" v-model="filters.activity_date"></input-date>
                                </div>
                                <!--<div class="col-md-6">-->
                                    <!--<label>To</label>-->
                                    <!--<input-date :end="today"></input-date>-->
                                <!--</div>-->
                            </div>
                        </div>
                        <button class="btn btn-success btn-lg"><i class="fas fa-search"></i> Search Clients</button><button type="reset" class="btn btn-link btn-lg" @click.stop="reset()">Reset</button>
                        <span v-if="fetching"><i class="fas fa-spinner fa-pulse"></i> Searching...</span>
                    </div>
                </div>
            </form>
            <!--<pre>{{ q }}</pre>-->
            <div class="results" v-if="showResults">
                <grid :fields="fields" :data="all" :meta="meta" initialSortKey="last_name">
                    <template slot="first_name" slot-scope="props">
                        <router-link :to="'/clients/'+props.item.id">{{ props.item.first_name }}</router-link>
                    </template>
                    <template slot="last_name" slot-scope="props">
                        <router-link :to="'/clients/'+props.item.id">{{ props.item.last_name }}</router-link>
                    </template>
                    <template slot="phone" slot-scope="props">
                        <template v-if="props.item.primary_phone_number && props.item.primary_phone_number.number">{{ props.item.primary_phone_number.number | phone }}</template>
                        <template v-else> - </template>
                    </template>
                    <template slot="actions" slot-scope="props">
                        <div class="table-button-container">
                            <router-link class="btn btn-warning btn-xs" :to="'/clients/'+props.item.id+'/edit'"><i class="fa fa-edit"></i> Edit</router-link>
                            <button class="btn btn-danger btn-xs" @click="confirmDelete(props.item.id)" v-if="authUser.is_admin"><i class="fa fa-remove"></i> Delete</button>&nbsp;&nbsp;
                        </div>
                    </template>
                </grid>
                <!--<pre>{{ results }}</pre>-->
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable no-console */
    import { mapGetters, mapActions } from 'vuex'
    import SelectEthnicity from '../components/controls/selects/Ethnicity'
    import SelectGender from '../components/controls/selects/Genders'

    export default {

        name: 'client-index',

        components: {
            SelectEthnicity,
            SelectGender,
        },

        data() {
            return {
                fields: [
                    {
                        name: 'first_name',
                        title: 'First Name',
                    },
                    {
                        name: 'last_name',
                        title: 'Last Name',
                    },
                    {
                        name: 'id',
                        title: 'ID',
                    },
                    {
                        name: 'phone',
                        title: 'Phone',
                    },
//                    {
//                        name: 'last_activity_date',
//                        title: 'Last Activity',
//                    },
                    {
                        name: 'actions',
                        titleClass: 'fit-content',
                        dataClass: 'fit-content',
                        sortable: false,
                    },
                ],
                q: '',
                filters: {
                    intake_date: null,
                    last_activity_date: null
                },
                advancedSearch: false,
                showResults: false,
            }
        },

        computed: {
            ...mapGetters('clients', {
                byId: 'byId',
                fetching: 'fetching',
                meta: 'meta',
                paginated: 'paginated',
            }),

            all() {
                return this.paginated
            },
        },

        // Hooks
        created() {
            // this.init(this.$route.query)
            this.setCurrentFilter({ signature: '{}' })
            if (this.$route.query.page) {
                this.process()
            }
        },

        // beforeRouteUpdate(to, from, next) {
        //     this.init(to.query)
        //     next()
        // },

        beforeRouteLeave(to, from, next) {
            this.q = ''
            this.setCurrentFilter({ signature: '{}' })
            next()
        },

        watch: {
            ['$route.query.page']() {
                this.process()
            }
        },

        methods: {
            ...mapActions('clients', [
                'destroy',
                'fetch',
                'setCurrentFilter',
            ]),

            confirmDelete(id) {
                const name = this.byId(id).full_name
                let c = confirm('Are you sure that you want to delete the client, ' + name + '?')

                if (c) {
                    this.destroy({ id })
                        .then(response => {

                            // console.log('delete response', response)
                            this.addMessage(name + ' has been deleted.')
                            this.$router.push('/clients')
                        })
                        .catch(error => error)
                }
            },

            process() {
                this.showResults = true

                const page = this.$route && this.$route.query && this.$route.query.page || 1
                const config = {
                    params: {
                        page: Number(page),
                    }
                }
                if (this.q) {
                    config.params.q = this.q
                }

                if (this.filters.intake_date) {
                    config.params.intake_date = this.filters.intake_date
                }

                if (this.filters.activity_date) {
                    config.params.activity_date = this.filters.activity_date
                }

                // console.log('config', config)

                this.fetch(config)
            },

            reset() {
                this.advancedSearch = false
                this.showResults = false
                this.resetData()
            },

            resetData() {
                this.q = ''
                this.filters = {
                    intake_date: null,
                    last_activity_date: null,
                }
            }
        },
    }
</script>
