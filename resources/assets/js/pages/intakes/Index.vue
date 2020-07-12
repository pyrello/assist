<template>
    <div>
        <header class="content-header">
            <div class="header-actions pull-right hidden-sm hidden-xs desktop">
                <add-button url="/intakes/add" text="Add Model"></add-button>
            </div>
            <h1>Intakes</h1>
            <div class="header-actions hidden-md hidden-lg mobile">
                <add-button url="/intakes/add" text="Add Model"></add-button>
            </div>
        </header>
        <div class="section">
            <grid :fields="fields" :data="all" :meta="meta" :fetching="fetching" initialSortKey="last_name">
                <template slot="id" slot-scope="props">
                    <router-link :to="'/intakes/'+props.item.id">{{ props.item.id }}</router-link>
                </template>
                <template slot="date" slot-scope="props">
                    {{ props.item.date | prettyDate }}
                </template>
                <template slot="actions" slot-scope="props">
                    <div class="table-button-container">
                        <router-link class="btn btn-warning btn-xs" :to="'/intakes/'+props.item.id+'/edit'"><i class="fa fa-pencil"></i> Edit</router-link>
                        <button class="btn btn-danger btn-xs" @click="confirmDelete(props.item.id)" v-if="authUser.is_admin"><i class="fa fa-remove"></i> Delete</button>&nbsp;&nbsp;
                    </div>
                </template>
            </grid>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {

        name: 'intake-index',

        data() {
            return {
                fields: [
                    'id',
                    // {
                    //     name: 'full_name',
                    //     title: 'Name',
                    //     sortField: 'last_name',
                    // },
                    'date',
                    // 'email',
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
            ...mapGetters('intakes', {
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
            ...mapActions('intakes', [
                'destroy',
                'fetch',
            ]),

            confirmDelete(id) {
                let c = confirm(`Are you sure that you want to delete this intake (${id})?`)

                if (c) {
                    this.destroy({ id })
                        .then(response => {
                            this.addMessage(`This intake (${id}) has been deleted.`)
                        })
                }
            },

            init(query) {
                const config = {
                    params: {
                        page: query && query.page || 1,
                    }
                }

                // console.log('config', config)

                this.fetch(config)
            }
        },
    }
</script>