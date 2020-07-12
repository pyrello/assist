<template>
    <div>
        <div v-if="incident">
            <header class="content-header">
                <div class="header-actions pull-right hidden-sm hidden-xs desktop">
                    <div class="btn-group pull-right">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-ellipsis-h"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li role="presentation"><router-link :to="'/incidents/' + incident.id + '/edit'"><i class="fas fa-edit fa-fw"></i> Edit</router-link></li>
                            <li role="presentation" v-if="authUser.is_admin"><a href="#delete" @click="confirmDelete(incident.id)"><i class="fas fa-trash-alt fa-fw"></i> Delete</a></li>
                        </ul>
                    </div>
                </div>
                <h1><span v-if="incident.type">{{ incident.type.name }}</span> on {{ incident.date | prettyDate }}</h1>
                <div class="header-actions hidden-md hidden-lg mobile">
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-ellipsis-h"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li role="presentation"><router-link :to="'/incidents/' + incident.id + '/edit'"><i class="fas fa-edit fa-fw"></i> Edit</router-link></li>
                            <li role="presentation" v-if="authUser.is_admin"><a href="#delete" @click="confirmDelete(incident.id)"><i class="fas fa-trash-alt fa-fw"></i> Delete</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class="section">
                <p v-if="incident.advocate">
                    Advocate: <b>{{ incident.advocate.first_name }} {{ incident.advocate.last_name }}</b>
                </p>
                <div class="lead">
                    <p>
                        Client: <span v-if="incidentClient"><router-link :to="'/clients/' + incidentClient.id">{{ incidentClient.full_name }}</router-link><template v-if="incident.client_age"> ({{ incident.client_age }} at the time)</template></span>
                    </p>
                    <p>
                        Occurred: <b>{{ incident.date | prettyDate }}</b>
                        in <b>{{ incident.city }}, {{ incident.state }}</b>.
                    </p>
                </div>
                <notes :params="noteParams" :client_id="incident.client_id" :noteable_id="incident.id" :noteable_type="incident.noteable_type"></notes>
            </div>
        </div>
        <div v-else class="lead section">
            <i class="fa fa-refresh fa-spin"></i> Loading data
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { indefiniteArticle, defined } from '../../common'
    import InitClient from '../../mixins/initClient'
    import InitIncident from '../../mixins/initIncident'
    import Notes from '../../components/notes/List.vue'

    export default {

        name: 'incident-show',

        mixins: [ InitClient, InitIncident ],

        components: {
            Notes,
        },

        computed: {

            noteParams() {
                // console.log('getting noteParams')
                if (this.$route.params.incident_id && this.incident.noteable_type) {
                    return {
                        params: {
                            noteable_id: this.$route.params.incident_id,
                            noteable_type: this.incident.noteable_type,
                        }
                    }
                }

                return false
            },

            incidentClient() {
                return (this.incident && this.incident.client_id) ? this.clientById(this.incident.client_id) : null
            },
        },

        created() {
            this.init()
        },

        beforeRouteLeave(to, from, next) {
            this.reset()
            next()
        },

        // Watchers
        watch: {
            ['params.client_id']() {
                if (!isNaN(this.params.client_id)) {
                }
            },
        },

        methods: {

            ...mapActions('incidents', [
                'destroy',
            ]),

            confirmDelete(id) {
                let c = confirm('Are you sure that you want to delete this incident?')

                if (c) {
                    const client_id = this.incident.client_id
                    this.destroy({ id })
                        .then(() => {
                            this.addMessage('This incident has been deleted.')
                            this.fetchClient({ id: client_id })
                            this.$router.push('/clients/' + client_id)
                        })
                }
            },

            currentIncidentFetched() {
                // this.log('currentIncidentFetched')
                this.$nextTick(() => {
                    // this.log('incident', this.incidentData)
                    const client_id = this.incidentData.client_id
                    // this.params.client_id = this.incident.client_id
                    this.$set(this.params, 'client_id', client_id)
                    this.fetchClient({ id: client_id, fetchId: `id:${client_id}` })
                })
            },

            init() {
                this.fetchCurrentIncident()
            },
        },
    }
</script>

