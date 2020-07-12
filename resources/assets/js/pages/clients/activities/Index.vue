<template>
    <div>
        <div v-if="fetching" class="lead">
            <i class="fa fa-refresh fa-spin"></i> Loading data
        </div>
        <div v-else-if="!fetching && activities.length">
            <grid :fields="fields" :data="activities" :fetching="fetching" :meta="meta">
                <template slot="select" slot-scope="props">
                    <input type="checkbox" v-model="activity_ids" :value="props.item.id" v-if="props.item.service_provided">
                </template>
                <template slot="service.name" slot-scope="props">
                    <router-link :to="'activities/'+props.item.id" v-if="client">{{ props.item.service.name }}</router-link>
                </template>
                <template slot="started_at" slot-scope="props">
                    <template v-if="props.item.service_provided">
                        {{ props.item.started_at | prettyDatetime }}
                    </template>
                    <template v-else-if="serviceNotProvidedReasons(props.item.why_not_provided)">Not provided: {{ serviceNotProvidedReasons(props.item.why_not_provided).name }}</template>
                </template>
                <template slot="actions" slot-scope="props">
                    <div class="table-button-container">
                        <router-link class="btn btn-warning btn-xs" :to="'/clients/' + client.id + '/activities/'+ props.item.id + '/edit'"><i class="fa fa-edit"></i> Edit</router-link>
                        <button class="btn btn-danger btn-xs" @click="confirmDelete(props.item.id)" v-if="authUser.is_admin"><i class="fa fa-remove"></i> Delete</button>&nbsp;&nbsp;
                    </div>
                </template>
            </grid>
            <router-link class="btn btn-primary" :to="'outcomes/add?activity_ids='+activity_ids.join(',')" v-if="activity_ids.length">Add outcome</router-link>
            <small class="help-block">Select one or more activities to assign an outcome.</small>
        </div>

        <div v-else class="lead">
            <p>There are no activities for this client.</p>
            <p><router-link class="btn btn-lg btn-primary" :to="'activities/add'">Add Activity</router-link></p>
            <p><i class="fa fa-info-circle"></i> Activities are interactions between the client and staff. Once activities are entered you can associate one or more of them with an outcome.</p>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import InitClient from '../../../mixins/initClient'
    import InitIncident from '../../../mixins/initIncident'

    export default {

        name: 'client-activities',

        mixins: [ InitClient, InitIncident ],

        data() {
            return {
                activity_ids: [],
                fields: [
                    {
                        name: 'select',
                        dataClass: 'fit-content',
                        title: '',
                        sortable: false,
                    },
                    {
                        name: 'service.name',
                        title: 'Service',
                    },
                    {
                        name: 'started_at',
                        title: 'When'
                    },
                    {
                        name: 'advocate.full_name',
                        template: '{{ advocate.first_name }} {{ advocate.last_name }}',
                        title: 'Advocate',
                    },
                    {
                        name: 'actions',
                        dataClass: 'fit-content',
                        titleClass: 'fit-content',
                        sortable: false,
                    },
                ],
            }
        },

        computed: {
            ...mapGetters('activities', {
                byId: 'byId',
                fetching: 'fetching',
                activities: 'paginated',
                meta: 'meta',
            }),
            ...mapGetters('services', {
                serviceById: 'byId',
            }),
            ...mapGetters('serviceNotProvidedReasons', {
                serviceNotProvidedReasons: 'byId',
            }),
        },

        // Hooks
        created() {
            this.init(this.$route.query)
        },

        beforeRouteUpdate(to, from, next) {
            this.init(to.query)
            next()
        },

        watch: {
            '$route'() {
                this.init(this.$route.query)
            },
        },

        methods: {
            ...mapActions('activities', ['fetch', 'destroy']),

            confirmDelete(id) {
                let c = confirm('Are you sure that you want to delete this activity?')
                const client_id = this.client.id
                if (c) {
                    this.destroy({ client_id, id })
                        .then(() => {
                            this.addMessage('The activities for ' + this.client.full_name + ' has been deleted.')
                        })
                }
            },

            init(query) {
                const config = {
                    params: {
                        client_id: this.$route.params.client_id,
                        page: query && query.page || 1,
                    }
                }

                this.fetch(config)
            },

            whyServiceNotProvided(id) {
                const reason = this.whyServiceNotProvidedById(id)
                return reason || null
            }
        },
    }
</script>

