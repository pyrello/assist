<template>
    <div class="notes box">
        <div class="box-header">Notes <i class="fas fa-spinner fa-spin" v-if="fetching"></i></div>
        <template v-if="fetching">
            <div class="box-body">
                <div class="lead">Loading notes</div>
            </div>
        </template>
        <template v-else-if="notes.length">
            <div class="box-body box-comments">
                <div v-for="note in notes" class="box-comment">
                    <span class="username">
                        {{ note.advocate.first_name }} {{ note.advocate.last_name }}
                        <span class="text-muted">
                             on {{ note.created_at | prettyDatetime }}
                        </span>
                    </span>
                    <div class="pull-right">
                        <router-link class="btn btn-warning btn-xs" :to="'/clients/' + note.client_id + '/notes/' + note.id + '/edit?from=' + $route.path"><i class="fas fa-edit fa-fw"></i> Edit</router-link>
                        <button class="btn btn-danger btn-xs" href="#delete" @click.prevent="confirmDelete(note.id)" v-if="authUser.is_admin">Delete</button>
                    </div>
                    <div v-html="$options.filters.markdown(note.content)"></div>
                </div>
            </div>
        </template>
        <div class="box-footer" v-if="client_id && noteable_type && noteable_id">
            <form @submit.prevent="addNote">
                <div class="form-group">
                    <textarea class="form-control input-sm" placeholder="Add a note" v-model="note"></textarea>
                </div>
                <button class="btn btn-success btn-sm" :disabled="processing">Add note<template v-if="processing"> <i class="fa fa-refresh fa-spin"></i></template></button>
            </form>
        </div>
        <!--<pre>{{ notes }}</pre>-->
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {

        name: 'note-list',

        /**
         * Note (ha): When using this, only apply the necessary
         * filter below to this component.
         */
        props: ['params', 'client_id', 'noteable_type', 'noteable_id'],

        data() {
            return {
                note: '',
                processing: false,
            }
        },

        computed: {
            ...mapGetters('notes', ['paginated', 'fetching']),

            notes() {
                return this.paginated
            }
        },

        created() {
            if (this.params) {
                this.fetch(this.params)
            }
        },

        watch: {
            params() {
                if (this.params) {
                    this.fetch(this.params)
                }
            }
        },

        methods: {
            ...mapActions('notes', ['create', 'fetch', 'destroy']),

            addNote() {
                this.processing = true
                const data = {
                    data: {
                        advocate_id: this.authUser.id,
                        client_id: this.client_id,
                        content: this.note,
                    },
                }

                if (this.noteable_id && this.noteable_type) {
                    data.data.noteable_type = this.noteable_type
                    data.data.noteable_id = this.noteable_id
                }

                this.create(data)
                    .then(() => {
                        this.processing = false
                        this.resetData()
                        this.fetch(this.params)
                    })
            },

            confirmDelete(id) {
                let c = confirm('Are you sure that you want to delete the note?')

                if (c) {
                    this.destroy({ id })
                        .then(() => {
                            this.addMessage('Note has been deleted.')
                        })
                }
            },

            resetData() {
                this.note = '';
            }
        }
    }
</script>