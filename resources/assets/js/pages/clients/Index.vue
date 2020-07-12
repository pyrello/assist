<template>
    <div>
        <header class="content-header">
            <div class="header-actions pull-right hidden-sm hidden-xs desktop">
                <add-button url="/clients/add" text="Add Client"></add-button>
            </div>
            <h1>Clients</h1>
            <div class="header-actions hidden-md hidden-lg mobile">
                <add-button url="/clients/add" text="Add Client"></add-button>
            </div>
        </header>
        <div class="section">
            <grid :fields="fields" :data="all" :fetching="fetching" :meta="meta" initialSortKey="last_name">
                <template slot="first_name" slot-scope="props">
                    <router-link :to="'/clients/'+props.item.id">{{ props.item.first_name }}</router-link>
                </template>
                <template slot="last_name" slot-scope="props">
                    <router-link :to="'/clients/'+props.item.id">{{ props.item.last_name }}</router-link>
                </template>
                <template slot="actions" slot-scope="props">
                    <div class="table-button-container">
                        <router-link class="btn btn-warning btn-xs" :to="'/clients/'+props.item.id+'/edit'"><i class="fa fa-edit"></i> Edit</router-link>
                        <button class="btn btn-danger btn-xs" @click="confirmDelete(props.item.id)" v-if="authUser.is_admin"><i class="fa fa-remove"></i> Delete</button>&nbsp;&nbsp;
                    </div>
                </template>
            </grid>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { has } from '../../common'

    export default {

        name: 'clients',

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
//                    {
//                        name: 'phone_number',
//                        title: 'Phone',
//                    },
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
            }
        },

        computed: {
            ...mapGetters('clients', {
                byId: 'byId',
                fetching: 'fetching',
                paginated: 'paginated',
                meta: 'meta',
            }),

            all() {
                return this.paginated(this.page)
            },

            page() {
                return this.$route && this.$route.query && this.$route.query.page || 1
            },
        },

        // Hooks
        created() {
            this.init(this.$route.query)
        },

        beforeRouteUpdate(to, from, next) {
            this.init(to.query)
            next()
        },

        methods: {
            ...mapActions('clients', [
                'destroy',
                'fetch',
            ]),

            confirmDelete(id) {
                const name = this.byId(id).full_name
                let c = confirm('Are you sure that you want to delete the client, ' + name + '?')

                if (c) {
                    this.destroy({ id })
                        .then(() => {
                            this.addMessage(name + ' has been deleted.')
                            this.$router.push('/clients/' + id + '/incidents')
                        })
                }
            },

            init(query) {
                const config = {
                    params: {
                        page: query && query.page || 1,
                    }
                }

                this.fetch(config)
            }
        },
    }
</script>
