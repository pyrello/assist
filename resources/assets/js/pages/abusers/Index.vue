<template>
    <div>
        <header class="content-header">
            <h1>Abusers<small v-if="fetching"> <i class="fas fa-spinner fa-spin"></i></small></h1>
        </header>
        <div class="section">
            <form class="form-inline" @submit.prevent="init">
                <div class="form-group">
                    <label class="control-label hidden">Search</label>
                    <input class="form-control control-lg" type="text" v-model="q">
                </div>
                <button class="btn btn-success btn-lg"><i class="fas fa-search"></i> Search</button>
                <span v-if="fetching"><i class="fas fa-spinner fa-pulse"></i> Searching...</span>
            </form>
            <grid :fields="fields" :data="all" :meta="meta" initialSortKey="last_name">
                <template slot="first_name" slot-scope="props">
                    <router-link :to="'/abusers/'+props.item.id">{{ props.item.first_name }}</router-link>
                </template>
                <template slot="last_name" slot-scope="props">
                    <router-link :to="'/abusers/'+props.item.id">{{ props.item.last_name }}</router-link>
                </template>
                <template slot="actions" slot-scope="props">
                    <div class="table-button-container">
                        <router-link class="btn btn-warning btn-xs" :to="'/abusers/'+props.item.id+'/edit'"><i class="fa fa-edit"></i> Edit</router-link>
                        <button class="btn btn-danger btn-xs" @click="confirmDelete(props.item.id)" v-if="authUser.is_admin"><i class="fa fa-remove"></i> Delete</button>&nbsp;&nbsp;
                    </div>
                </template>
            </grid>
        </div>
    </div>
</template>

<script>
    /* eslint-disable no-console */
    import { mapGetters, mapActions } from 'vuex'

    export default {

        name: 'abuser-index',

        data() {
            return {
                fields: [
                    {
                        name: 'first_name',
                        title: 'First Name',
                        titleClass: 'fit-content',
                        dataClass: 'fit-content',
                    },
                    {
                        name: 'last_name',
                        title: 'Last Name',
                    },
                    {
                        name: 'actions',
                        titleClass: 'fit-content',
                        dataClass: 'fit-content',
                        sortable: false,
                    },
                ],
                q: '',
            }
        },

        computed: {
            ...mapGetters('abusers', {
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

        beforeRouteUpdate(to, from, next) {
            this.init(to.query)
            next()
        },

        beforeRouteLeave(to, from, next) {
            this.q = ''
            next()
        },

        methods: {
            ...mapActions('abusers', [
                'destroy',
                'fetch',
            ]),

            confirmDelete(id) {
                const name = this.byId(id).full_name
                let c = confirm('Are you sure that you want to delete the abuser, ' + name + '?')

                if (c) {
                    this.destroy({ id })
                        .then(() => {
                            this.addMessage(name + ' has been deleted.')
                        })
                }
            },

            init(query) {
                console.warn(this.$options.name, 'init')
                const page = query && query.page || 1
                const config = {
                    params: {
                        page: Number(page),
                    }
                }
                if (this.q) {
                    config.params.q = this.q
                }

                this.fetch(config)
            },
        },
    }
</script>
