<template>
    <div>
        <div v-if="activity && activity.service">
            <header class="content-header">
                <div class="header-actions pull-right hidden-sm hidden-xs desktop">
                    <div class="btn-group pull-right">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-ellipsis-h"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li role="presentation"><router-link :to="activity.id + '/edit'"><i class="fas fa-edit fa-fw"></i> Edit</router-link></li>
                            <li role="presentation"><a href="#delete" @click.prevent="confirmDelete()" v-if="authUser.is_admin"><i class="fas fa-trash-alt fa-fw"></i> Delete</a></li>
                        </ul>
                    </div>
                </div>
                <h1>{{ activity.service.name }} on {{ activity.date | prettyDate }}</h1>
                <div class="header-actions hidden-md hidden-lg mobile">
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-ellipsis-h"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li role="presentation"><router-link :to="activity.id + '/edit'"><i class="fas fa-edit fa-fw"></i> Edit</router-link></li>
                            <li role="presentation"><a href="#delete" @click.prevent="confirmDelete()" v-if="authUser.is_admin"><i class="fas fa-trash-alt fa-fw"></i> Delete</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class="section">
                <p>
                    Advocate: <b>{{ activity.advocate.first_name }} {{ activity.advocate.last_name }}</b>
                </p>
                <div class="lead">
                    <template v-if="activity.service_provided">
                        <p>Client: <span v-if="client"><router-link :to="'/clients/' + client.id">{{ client.full_name }}</router-link></span></p>
                        <p>
                            {{ activity.service.name }} was provided from {{ activity.started_at | prettyDatetime }} to {{ activity.ended_at | prettyDatetime }}
                        </p>
                    </template>
                    <template v-else-if="whyServiceNotProvided">
                        <p>Client requested {{ activity.service.name }} on {{ activity.started_at | prettyDatetime }}, but the request was unable to be fulfilled for this reason: {{ whyServiceNotProvided.name }}</p>
                    </template>
                </div>
                <notes :params="noteParams" :client_id="client.id" :noteable_id="activity.id" :noteable_type="activity.noteable_type"></notes>
            </div>
        </div>
        <div v-else class="lead section">
            <i class="fa fa-refresh fa-spin"></i> Loading data
        </div>
        <!--<pre>{{ activity }}</pre>-->
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { indefiniteArticle, defined } from '../../../common'
    import InitClient from '../../../mixins/initClient'
    import InitActivity from '../../../mixins/initActivity'
    import Notes from '../../../components/notes/List.vue'

    export default {

        name: 'client-activity-show',

        mixins: [ InitClient, InitActivity ],

        components: {
            Notes,
        },

        data() {
            return {
                fetched: false,
            }
        },

        computed: {
            ...mapGetters('notes', {
                notes: 'paginated',
            }),
            ...mapGetters('services', {
                serviceById: 'byId',
            }),

            ...mapGetters('notProvidedReasons', {
                whyServiceNotProvidedById: 'byId',
            }),

            service() {
                if (this.activity) {
                    return this.serviceById(this.activity.requested_service_id)
                }
            },

            whyServiceNotProvided() {
                if (this.activity && this.activity.why_not_provided) {
                    return this.whyServiceNotProvidedById(this.activity.why_not_provided)
                }
                return null
            },

            noteParams() {
                // console.log('getting noteParams')
                if (this.$route.params.activity_id && this.activity.noteable_type) {
                    return {
                        params: {
                            noteable_id: this.$route.params.activity_id,
                            noteable_type: this.activity.noteable_type,
                        }
                    }
                }

                return false
            }
        },

        created() {
            this.init()
        },

        // Watchers
        watch: {
            activity() {
                // console.log('activity', this.activity)
                // If the client id on the incident doesn't match the loaded one
                // we are not supposed to be here.
                if (defined(this.activity) && this.activity.client_id != this.params.client_id) {
                    return this.$router.replace('/clients/'+this.activity.client_id+'/activities/'+this.activity.id)
                }
            },
        },

        methods: {
            ...mapActions('activities', ['destroy']),
            ...mapActions('notes', {
                fetchNotes: 'fetch',
            }),

            confirmDelete() {
                let c = confirm('Are you sure that you want to delete this activity?')

                if (c) {
                    this.destroy({ id: this.activity.id })
                        .then(() => {
                            this.addMessage('Activity has been deleted.')
                        })
                }
            },

            init() {
                this.fetchCurrentClient()
                this.fetchCurrentActivity()
                    .then(() => {
                        this.fetched = true
                    })
                // this.fetchNotes(this.noteParams)
            },
        },
    }
</script>

