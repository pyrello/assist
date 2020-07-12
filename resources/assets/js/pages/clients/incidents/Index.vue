<template>
    <div>
        <div v-if="fetching" class="lead">
            <i class="fa fa-refresh fa-spin"></i> Loading data
        </div>
        <div v-else-if="!fetching && incidents.length">
            <grid :fields="fields" :data="incidents" :fetching="fetching" :meta="meta">
                <template slot="type.name" slot-scope="props">
                    <router-link :to="'/incidents/' + props.item.id" v-if="client">{{ props.item.type.name }}</router-link>
                </template>
                <template slot="date" slot-scope="props">
                    {{ props.item.date | prettyDate }}
                </template>
                <template slot="actions" slot-scope="props">
                    <div class="table-button-container">
                        <router-link class="btn btn-warning btn-xs" :to="'/incidents/' + props.item.id + '/edit'" v-if="client"><i class="fa fa-edit"></i> Edit</router-link>
                        <button class="btn btn-danger btn-xs" @click="confirmDelete(props.item.id)" v-if="authUser.is_admin"><i class="fa fa-remove"></i> Delete</button>&nbsp;&nbsp;
                    </div>
                </template>
            </grid>
        </div>

        <div v-else-if="client" class="lead">
            <i class="fa fa-info-circle"></i> An incident is required to start adding activities and outcomes. <router-link :to="'/clients/' + client.id + '/incidents/add'"><i class="fas fa-exclamation-triangle"></i> Add an incident</router-link> to get started.
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import InitClient from '../../../mixins/initClient'

    export default {

        name: 'incident-index',

        mixins: [ InitClient ],

        data() {
            return {
                fields: [
                    {
                        name: 'type.name',
                        title: 'Type'
                    },
                    'date',
                    {
                        name: 'client_age',
                        title: 'Age',
                    },
                    {
                        name: 'advocate.name',
                        title: 'Advocate',
                        template: '{{ advocate.first_name }} {{ advocate.last_name }}',
                        sortField: 'advocate.last_name',
                    },
                    'state',
                    'city',
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
            ...mapGetters('incidents', {
                byId: 'byId',
                fetching: 'fetching',
                incidents: 'paginated',
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
            ...mapActions('incidents', [
                'destroy',
                'fetch',
                'setQuery',
            ]),

            confirmDelete(id) {
                let c = confirm('Are you sure that you want to delete this incident?')

                if (c) {
                    const client_id = this.byId(id).client_id
                    this.destroy({ id })
                        .then(() => {
                            this.addMessage('This incident has been deleted.')
                            this.fetchClient({ id: client_id })
                        })
                }
            },

            init(query) {
                const config = {
                    params: {
                        ...this.params,
                        page: query && query.page || 1,
                    }
                }

                this.fetch(config)
            },
        },
    }
</script>
