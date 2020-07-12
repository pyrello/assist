<template>
    <div>
        <h4>Dependents</h4>
        <div>
            <grid :fields="clientFields" :data="clientDependents" :fetching="fetchingClient">
                <template slot="first_name" slot-scope="props">
                    <router-link :to="'/clients/' + props.item.id">{{ props.item.first_name }}</router-link>
                </template>
                <template slot="last_name" slot-scope="props">
                    <router-link :to="'/clients/' + props.item.id">{{ props.item.last_name }}</router-link>
                </template>
                <template slot="actions" slot-scope="props">
                    <div class="table-button-container">
                        <router-link class="btn btn-warning btn-xs" :to="'/clients/' + props.item.id + '/edit'"><i class="fas fa-edit"></i> Edit</router-link>
                        <button class="btn btn-danger btn-xs" @click="confirmRemove(props.item.id)" v-if="authUser.is_admin"><i class="fas fa-trash-alt"></i> Remove</button>&nbsp;&nbsp;
                    </div>
                </template>
            </grid>
        </div>
        <h4>Non-client Dependents</h4>
        <div v-if="fetching" class="lead">
            <i class="fa fa-refresh fa-spin"></i> Loading data
        </div>
        <div v-else>
            <grid :fields="fields" :data="dependents" :fetching="fetching">
                <template slot="name" slot-scope="props">
                    <router-link :to="'/dependents/' + props.item.id">{{ props.item.name }}</router-link>
                </template>
                <template slot="actions" slot-scope="props">
                    <div class="table-button-container">
                        <router-link class="btn btn-warning btn-xs" :to="'/dependents/' + props.item.id + '/edit'"><i class="fas fa-edit"></i> Edit</router-link>
                        <button class="btn btn-danger btn-xs" @click="confirmDelete(props.item.id)" v-if="authUser.is_admin"><i class="fas fa-trash-alt"></i> Delete</button>&nbsp;&nbsp;
                    </div>
                </template>
            </grid>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { paramSignature } from '../../../store/crud/actions'
    import InitClient from '../../../mixins/initClient'

    export default {

        name: 'dependent-index',

        mixins: [ InitClient ],

        data() {
            return {
                fields: [
                    {
                        name: 'name',
                        title: 'Type'
                    },
                    // {
                    //     name: 'birth_date',
                    //     title: 'Birth Date'
                    // },
                    {
                        name: 'age',
                        title: 'Age',
                    },
                    {
                        name: 'actions',
                        dataClass: 'fit-content',
                        titleClass: 'fit-content',
                        sortable: false,
                    },
                ],
                clientFields: [
                    {
                        name: 'first_name',
                        title: 'First name',
                    },
                    {
                        name: 'last_name',
                        title: 'Last name',
                    },
                    'age',
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
            ...mapGetters('clients', {
                filtered: 'filtered',
            }),

            ...mapGetters('dependents', {
                byId: 'byId',
                dependents: 'paginated',
                fetching: 'fetching',
                meta: 'meta',
            }),

            clientDependents() {
                return this.filtered(paramSignature({
                    params: {
                        parent_id: this.$route.params.client_id
                    }
                }))
            },
        },

        // Hooks
        created() {
            this.init()
        },

        // beforeRouteUpdate(to, from, next) {
        //     this.init(to.query)
        //     next()
        // },

        watch: {
            '$route'() {
                this.init()
            }
        },

        methods: {
            ...mapActions('dependents', [
                'destroy',
                'fetch',
            ]),

            ...mapActions('clients', {
                update: 'update',
            }),

            confirmDelete(id) {
                let c = confirm('Are you sure that you want to delete this dependent?')

                if (c) {
                    const client_id = this.byId(id).client_id
                    this.destroy({ id })
                        .then(() => {
                            this.addMessage('The dependent has been deleted.')
                            this.fetchClient({ id: client_id })
                        })
                }
            },

            confirmRemove(id) {
                const dep = this.clientById(id)
                let c = confirm('Are you sure that you want to remove ' + dep.full_name + ' as a dependent of ' + this.client.full_name + '? The record for ' + dep.full_name + ' will not be deleted.')

                if (c) {
                    const config = {
                        id: id,
                        data: {
                            parent_id: null,
                        },
                    }
                    this.update(config)
                        .then(() => {
                            this.addMessage(`${dep.full_name} was removed as a dependent of ${this.client.full_name}.`)
                            this.init()
                        })
                }
            },

            init() {
                // this.log('init')
                const config = {
                    params: {
                        ...this.$route.params
                    }
                }

                this.fetch(config)

                const clientConfig = {
                    params: {
                        parent_id: this.$route.params.client_id
                    }
                }
                // this.log('about to fetch clients')
                this.fetchClient(clientConfig)
            }
        },
    }
</script>
