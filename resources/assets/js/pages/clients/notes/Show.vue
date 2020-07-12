<template>
    <div>
        <div v-if="note">
            <header class="content-header">
                <div class="header-actions pull-right hidden-sm hidden-xs desktop">
                    <div class="btn-group pull-right">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-ellipsis-h"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li role="presentation"><router-link :to="'/clients/' + client.id + '/notes/' + note.id + '/edit'"><i class="fas fa-edit fa-fw"></i> Edit</router-link></li>
                            <li role="presentation"><a href="#delete" @click="confirmDelete()" v-if="authUser.is_admin"><i class="fas fa-trash-alt fa-fw"></i> Delete</a></li>
                        </ul>
                    </div>
                </div>
                <h1>Note<template v-if="client"> about <client-link :client="client"></client-link></template> on {{ note.created_at | prettyDatetime }}</h1>
                <div class="header-actions hidden-md hidden-lg mobile">
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-ellipsis-h"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li role="presentation"><router-link :to="'/clients/' + client.id + '/notes/' + note.id + '/edit'"><i class="fas fa-edit fa-fw"></i> Edit</router-link></li>
                            <li role="presentation"><a href="#delete" @click="confirmDelete()" v-if="authUser.is_admin"><i class="fas fa-trash-alt fa-fw"></i> Delete</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class="section">
                <div v-if="note.advocate"><strong>by {{ note.advocate.full_name }}</strong></div>
                <div v-html="note.content"></div>
            </div>
        </div>
        <div v-else class="lead section">
            <i class="fa fa-refresh fa-spin"></i> Loading data
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import Notes from '../../../components/notes/List.vue'
    import InitClient from '../../../mixins/initClient'
    import InitNote from '../../../mixins/initNote'

    export default {

        name: 'client-activity-show',

        mixins: [ InitClient, InitNote ],

        components: {
            Notes,
        },

        data() {
            return {
                fetched: false,
            }
        },

        computed: {
            ...mapGetters('notes', {
                notes: 'paginated',
            }),
            ...mapGetters('services', {
                serviceById: 'byId',
            }),

            ...mapGetters('notProvidedReasons', {
                whyServiceNotProvidedById: 'byId',
            }),

            service() {
                if (this.activity) {
                    return this.serviceById(this.activity.requested_service_id)
                }
            },

            whyServiceNotProvided() {
                if (this.activity && this.activity.why_not_provided) {
                    return this.whyServiceNotProvidedById(this.activity.why_not_provided)
                }
                return null
            },

            noteParams() {
                // console.log('getting noteParams')
                if (this.$route.params.activity_id && this.activity.noteable_type) {
                    return {
                        params: {
                            noteable_id: this.$route.params.activity_id,
                            noteable_type: this.activity.noteable_type,
                        }
                    }
                }

                return false
            }
        },

        created() {
            this.init()
        },

        methods: {
            ...mapActions('notes', {
                fetchNotes: 'fetch',
            }),

            confirmDelete() {
                let c = confirm('Are you sure that you want to delete this activity?')

                if (c) {
                    this.destroy({ id: this.note.id })
                        .then(() => {
                            this.addMessage('Activity has been deleted.')
                        })
                }
            },

            init() {
                this.fetchCurrentClient()
                this.fetchCurrentNote()
            },
        },
    }
</script>

