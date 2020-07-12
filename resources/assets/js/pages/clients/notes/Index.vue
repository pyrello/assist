<template>
    <div>
        <div v-if="fetching" class="lead">
            <i class="fa fa-refresh fa-spin"></i> Loading data
        </div>
        <div v-else>
            <grid :fields="fields" :data="notes" :fetching="fetching">
                <template slot="content" slot-scope="props">
                    <router-link :to="'/clients/' + client.id + '/notes/' + props.item.id">{{ props.item.content | truncate('50') }}</router-link>
                </template>
                <template slot="type" slot-scope="props">
                    <template v-if="props.item.type">
                        <router-link :to="'/' + props.item.path_fragment + '/' + props.item.noteable_id" v-if="client">{{ props.item.type }}</router-link>
                    </template>
                    <template v-else> - </template>
                </template>
                <template slot="created_at" slot-scope="props">
                    {{ props.item.created_at | prettyDatetime }}
                </template>
                <template slot="actions" slot-scope="props">
                    <div class="table-button-container">
                        <router-link class="btn btn-warning btn-xs" :to="'/clients/' + client.id + '/notes/'+props.item.id+'/edit'" v-if="client"><i class="fas fa-edit fa-fw"></i><span class="hidden-xs"> Edit</span></router-link>
                        <button class="btn btn-danger btn-xs" @click="confirmDelete(props.item.id)" v-if="authUser.is_admin"><i class="fas fa-trash-alt fa-fw"></i><span class="hidden-xs"> Delete</span></button>&nbsp;&nbsp;
                    </div>
                </template>
            </grid>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import InitClient from '../../../mixins/initClient'

    export default {

        name: 'client-notes',

        mixins: [ InitClient ],

        data() {
            return {
                fields: [
                    {
                        name: 'content',
                        title: 'Note',
                    },
                    {
                        name: 'created_at',
                        title: 'Date',
                    },
                    {
                        name: 'type',
                        title: 'Attached to'
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
            ...mapGetters('notes', {
                byId: 'byId',
                fetching: 'fetching',
                notes: 'paginated',
                meta: 'meta',
            })
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
            },
        },

        methods: {
            ...mapActions('notes', ['destroy', 'fetch']),

            confirmDelete(id) {
                let c = confirm('Are you sure that you want to delete this note?')

                if (c) {
                    this.destroy({ id })
                            .then(() => {
                                this.addMessage('Note has been deleted.')
                            })
                }
            },

            init(query) {
                this.fetchCurrentClient()
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
