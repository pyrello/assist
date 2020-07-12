<template>
    <div>
        <header class="content-header">
            <div class="header-actions pull-right hidden-sm hidden-xs desktop">
                <add-button url="/advocates/add" text="Add Advocate"></add-button>
            </div>
            <h1>Advocates<small v-if="fetching"> <i class="fas fa-spinner fa-spin"></i></small></h1>
            <div class="header-actions hidden-md hidden-lg mobile">
                <add-button url="/advocates/add" text="Add Advocate"></add-button>
            </div>
        </header>
        <div class="section">
            <grid :fields="fields" :data="all" :meta="meta" initialSortKey="last_name">
                <!--<template slot="name" scope="props">-->
                <!--<router-link :to="'/advocates/'+props.item.id">{{ props.item.first_name }} {{ props.item.last_name }}</router-link>-->
                <!--</template>-->
                <template slot="actions" slot-scope="props">
                    <div class="table-button-container">
                        <router-link class="btn btn-warning btn-xs" :to="'/advocates/'+props.item.id+'/edit'"><i class="fa fa-pencil"></i> Edit</router-link>
                        <button class="btn btn-danger btn-xs" @click="confirmDelete(props.item.id)"><i class="fa fa-remove"></i> Delete</button>&nbsp;&nbsp;
                    </div>
                </template>
            </grid>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {

        name: 'advocate-index',

        data() {
            return {
                fields: [
                    {
                        name: 'full_name',
                        title: 'Name',
                        sortField: 'last_name',
                    },
                    'email',
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
            ...mapGetters('advocates', {
                byId: 'byId',
                fetching: 'fetching',
                paginated: 'paginated',
                meta: 'meta',
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
        //     console.warn(this.$options.name, 'beforeRouteUpdate')
        //     this.init(to.query)
        //     next()
        // },

        // beforeRouteLeave(to, from, next) {
        //     this.setCurrentFilter({ signature: '{}' })
        //     next()
        // },

        watch: {
            '$route'(to, from) {
                this.init(to.query)
            }
        },

        methods: {
            ...mapActions('advocates', [
                'destroy',
                'fetch',
                'setCurrentFilter',
            ]),

            confirmDelete(id) {
                const name = this.byId(id).full_name
                let c = confirm('Are you sure that you want to delete the advocate, ' + name + '?')

                if (c) {
                    this.destroy({ id })
                        .then(response => {
                            this.addMessage(name + ' has been deleted.')
                        })
                }
            },

            init(query) {
                const page = query && query.page || 1
                const config = {
                    params: {
                        page: Number(page),
                    }
                }

                this.fetch(config)
            },
        },
    }
</script>
