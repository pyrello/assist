<template>
    <div>
        <div v-if="outcome">
            <header class="content-header">
                <div class="header-actions pull-right hidden-sm hidden-xs desktop">
                    <div class="btn-group pull-right">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-ellipsis-h"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li role="presentation"><router-link :to="'/clients/' + client.id + '/outcomes/' + outcome.id + '/edit'"><i class="fas fa-edit fa-fw"></i> Edit</router-link></li>
                            <li role="presentation"><a href="#delete" @click="confirmDelete()" v-if="authUser.is_admin"><i class="fas fa-trash-alt fa-fw"></i> Delete</a></li>
                        </ul>
                    </div>
                </div>
                <h1>Outcome<template v-if="client"> for <client-link :client="client"></client-link></template> on {{ outcome.date | prettyDate }}</h1>
                <div class="header-actions hidden-md hidden-lg mobile">
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-ellipsis-h"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li role="presentation"><router-link :to="'/clients/' + client.id + '/outcomes/' + outcome.id + '/edit'"><i class="fas fa-edit fa-fw"></i> Edit</router-link></li>
                            <li role="presentation"><a href="#delete" @click="confirmDelete()" v-if="authUser.is_admin"><i class="fas fa-trash-alt fa-fw"></i> Delete</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class="section">
                <p v-if="outcome.advocate">Advocate: {{ outcome.advocate.full_name }}</p>
                <p>{{ outcome.description }}</p>
                <notes :params="noteParams" :client_id="client.id" :noteable_id="outcome.id" :noteable_type="outcome.noteable_type"></notes>
            </div>
        </div>
        <div v-else class="lead section">
            <i class="fas fa-spinner fa-spin"></i> Loading data
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import Notes from '../../../components/notes/List.vue'
    import InitClient from '../../../mixins/initClient'
    import InitClientOutcome from '../../../mixins/initClientOutcome'

    export default {

        name: 'show-client-outcome',

        mixins: [ InitClient, InitClientOutcome ],

        components: {
            Notes,
        },

        computed: {
            noteParams() {
                if (this.$route.params.outcome_id && this.outcome.noteable_type) {
                    return {
                        params: {
                            noteable_id: this.$route.params.outcome_id,
                            noteable_type: this.outcome.noteable_type,
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
            confirmDelete() {
                let c = confirm('Are you sure that you want to delete this note?')

                if (c) {
                    this.destroy({ id: this.outcome.id })
                        .then(() => {
                            this.addMessage('Note has been deleted.')
                        })
                }
            },

            init() {
                this.fetchCurrentClient()
                this.fetchCurrentOutcome()
            },
        },
    }
</script>

