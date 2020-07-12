<template>
    <div>
        <header class="content-header">
            <div class="header-actions pull-right hidden-sm hidden-xs desktop">
                <add-button url="/advocates/add" text="Add Model"></add-button>
            </div>
            <h1>[Models]</h1>
            <div class="header-actions hidden-md hidden-lg mobile">
                <add-button url="/advocates/add" text="Add Model"></add-button>
            </div>
        </header>
        <div class="section">
            <grid :fields="fields" :data="all" :meta="meta" :fetching="fetching" initialSortKey="last_name">
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

        name: 'ModelIndex',

        props: {
            model: String,
            fields: Array,
            singular: {
                type: String,
                default: 'model'
            },
            plural: {
                type: String,
                default: 'models',
            },
        },

        data() {
            return {
                fields: [
                    // {
                    //     name: 'full_name',
                    //     title: 'Name',
                    //     sortField: 'last_name',
                    // },
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
            ...mapGetters('[model]', {
                byId: 'byId',
                paginated: 'paginated',
                meta: 'meta',
                fetching: 'fetching',
            }),

            all() {
                return this.paginated(this.page)
            },

            page() {
                return this.$route && this.$route.query && this.$route.query.page || 1
            },
        },

        // Hooks
        activated() {
            this.init(this.$route.query)
        },

        beforeRouteUpdate(to, from, next) {
            this.init(to.query)
            next()
        },

        methods: {
            ...mapActions('[model]', [
                'destroy',
                'fetch',
            ]),

            confirmDelete(id) {
                let c = confirm(`Are you sure that you want to delete this ${this.singular}?`)

                if (c) {
                    this.destroy({ id })
                        .then(response => {
                            this.addMessage(`This ${this.singular} has been deleted.`)
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