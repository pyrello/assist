<template>
    <div>
        <header class="content-header">
            <h1>Dependents</h1>
        </header>
        <div class="section">
            <div v-if="fetching" class="lead">
                <i class="fa fa-refresh fa-spin"></i> Loading data
            </div>
            <div v-else-if="dependents.length">
                <grid :fields="fields" :data="dependents" :fetching="fetching" :meta="meta">
                    <template slot="client" slot-scope="props">
                        <client-link :client="props.item.client"></client-link>
                    </template>
                    <template slot="name" slot-scope="props">
                        <router-link :to="'/dependents/' + props.item.id">{{ props.item.name }}</router-link>
                    </template>
                    <template slot="actions" slot-scope="props">
                        <div class="table-button-container">
                            <router-link class="btn btn-warning btn-xs" :to="'/dependents/' + props.item.id + '/edit'"><i class="fa fa-edit"></i> Edit</router-link>
                            <button class="btn btn-danger btn-xs" @click="confirmDelete(props.item.id)" v-if="authUser.is_admin"><i class="fa fa-remove"></i> Delete</button>&nbsp;&nbsp;
                        </div>
                    </template>
                </grid>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {

        name: 'dependents-index',

        data() {
            return {
                fields: [
                    'client',
                    {
                        name: 'name',
                        title: 'Name'
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
            }
        },

        computed: {
            ...mapGetters('dependents', {
                byId: 'byId',
                dependents: 'paginated',
                fetching: 'fetching',
                meta: 'meta',
            }),
        },

        // Hooks
        created() {
            this.init(this.$route.query)
        },

        // beforeRouteUpdate(to, from, next) {
        //     this.init(to.query)
        //     next()
        // },

        watch: {
            '$route'() {
                this.init(this.$route.query)
            }
        },

        methods: {
            ...mapActions('dependents', [
                'destroy',
                'fetch',
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
