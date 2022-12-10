<template>
    <div>
        <div v-if="fetching" class="lead">
            <i class="fa fa-refresh fa-spin"></i> Loading data
        </div>
        <div v-else-if="!fetching && outcomes.length">
            <grid :data="outcomes" :fields="fields" :fetching="fetching" :meta="meta">
                <template slot="description" slot-scope="props">
                    <router-link :to="'/clients/' + client.id + '/outcomes/' + props.item.id">{{ props.item.description }}</router-link>
                </template>
                <template slot="actions" slot-scope="props">
                    <div class="table-button-container">
                        <router-link class="btn btn-warning btn-xs" :to="'/clients/'+props.item.client_id+'/outcomes/'+props.item.id+'/edit'"><i class="fas fa-edit fa-fw"></i> Edit</router-link>
                        <button class="btn btn-danger btn-xs" @click="confirmDelete(props.item.id)" v-if="authUser.is_admin"><i class="fas fa-trash-alt fa-fw"></i> Delete</button>&nbsp;&nbsp;
                    </div>
                </template>
                <template slot="completed" slot-scope="props">
                    <i class="fas fa-check-circle fa-fw text-success" v-if="props.item.completed === 1"></i>
                </template>
                <template slot="date" slot-scope="props">
                    {{ props.item.date | prettyDate }}
                </template>
            </grid>
        </div>

        <div v-else class="lead">
            <p>There are no outcomes for this client.</p>
            <p><router-link class="btn btn-lg btn-primary" :to="'outcomes/add'">Add Outcome</router-link></p>
            <p><i class="fa fa-info-circle"></i> Outcomes can be related to one or more activities or standalone. If you wish to associate an outcome with an activity, visit the <router-link to="activities">activities</router-link> page and select the activity or activities, then click the button to add an Outcome.</p>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import InitClient from '../../../mixins/initClient'
    import InitIncident from '../../../mixins/initIncident'

    export default {

        name: 'client-outcomes',

        mixins: [InitClient, InitIncident],

        data() {
            return {
                fields: [
                    {
                        name: 'description',
                        title: 'Outcome',
                    },
                    'date',
                    'completed',
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
            ...mapGetters('clientOutcomes', {
                byId: 'byId',
                fetching: 'fetching',
                outcomes: 'paginated',
                meta: 'meta',
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
            ['params.client_id']() {
                this.init(this.$route.query)
            },
        },

        methods: {
            ...mapActions('clientOutcomes', [ 'destroy', 'fetch' ]),
            ...mapActions('outcomes', ['setFilters']),

            confirmDelete(id) {
                let c = confirm('Are you sure that you want to delete this outcome?')

                if (c) {
                    this.destroy({ id })
                        .then(() => {
                            this.addMessage('Outcome has been deleted.')
                        })
                }
            },

            init(query) {
                const config = {
                    params: {
                        client_id: this.params.client_id,
                        page: query && query.page || 1,
                    }
            }

                this.fetch(config)
            },
        },
    }
</script>
