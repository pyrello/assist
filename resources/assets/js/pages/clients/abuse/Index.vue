<template>
    <div>
        <grid :fields="fields" :data="all" :fetching="fetching" :meta="meta" initialSortKey="last_name">
            <template slot="relationship" slot-scope="props">
                <template v-if="props.item.relationship">
                    <!--<router-link :to="'/clients/' + client.id + '/abuse/' + props.item.id">-->{{ props.item.relationship }}<!--</router-link>-->
                </template>
                <template v-else>'-'</template>
            </template>
            <template slot="first_name" slot-scope="props">
                <template v-if="props.item.abuser === null"><em>Abuser deleted</em></template>
                <template v-else-if="props.item.abuser && props.item.abuser.first_name">
                    <router-link :to="'/abusers/' + props.item.abuser_id">{{ props.item.abuser.first_name }}</router-link>
                </template>
                <template v-else>-</template>
            </template>
            <template slot="last_name" slot-scope="props">
                <template v-if="props.item.abuser && props.item.abuser.last_name">
                    <router-link :to="'/abusers/' + props.item.abuser_id">{{ props.item.abuser.last_name }}</router-link>
                </template>
                <template v-else>-</template>
            </template>
            <template slot="actions" slot-scope="props">
                <div class="table-button-container">
                    <router-link class="btn btn-warning btn-xs" :to="'/clients/' + client.id + '/abuse/' + props.item.id + '/edit'"><i class="fas fa-edit"></i> Edit</router-link>
                    <button class="btn btn-danger btn-xs" @click="confirmDelete(props.item.id)" v-if="authUser.is_admin"><i class="fas fa-user-times"></i> Remove</button>&nbsp;&nbsp;
                </div>
            </template>
        </grid>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import InitClient from '../../../mixins/initClient'

    export default {

        name: 'clients',

        mixins: [ InitClient ],

        data() {
            return {
                fields: [
                    'relationship',
                    {
                        name: 'first_name',
                        title: 'First Name',
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
            }
        },

        computed: {
            ...mapGetters('abuseRelationships', {
                byId: 'byId',
                all: 'paginated',
                fetching: 'fetching',
                meta: 'meta',
            }),
        },

        // Hooks
        created() {
            this.init()
        },

        // beforeRouteUpdate(to, from, next) {
        //     this.init()
        //     next()
        // },

        watch: {
            '$route': 'init',
        },

        methods: {
            ...mapActions('abuseRelationships', {
                fetch: 'fetch',
                removeRelationship: 'destroy',
            }),

            confirmDelete(id) {
                const name = this.byId(id) && this.byId(id).abuser && this.byId(id).abuser.full_name || ''
                let c = confirm('Are you sure that you want to remove the abuse relationship between, ' + name + ' and ' + this.client.full_name + '? If this abuser is not attached to any other clients, their record will be deleted.')

                if (c) {
                    this.removeRelationship({ id })
                        .then(() => {
                            this.addMessage('This abuse relationship has been removed')
                            this.$router.push('/clients/' + this.client.id + '/abuse')
                        })
                }
            },

            init(query) {
                const config = {
                    params: {
                        ...this.$route.params
                    }
                }

                this.fetch(config)
                // this.fetchCurrentClient()
            }
        },
    }
</script>
