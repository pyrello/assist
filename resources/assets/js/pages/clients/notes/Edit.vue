<template>
    <div class="overlay-background">
        <div class="overlay">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Editing Note <small v-if="client"> about <client-link :client="client"></client-link></small></h1>
            </header>
            <div class="section">
                <form role="form" @submit.prevent="process">
                    <!-- Advocate -->
                    <div class="form-group" :class="controlClasses('advocate_id', 'note')">
                        <label class="control-label" for="advocate_id">Advocate <required-asterisk></required-asterisk></label>
                        <select-advocate v-model="note.advocate_id"></select-advocate>
                    </div>

                    <!-- Content -->
                    <div class="form-group" :class="controlClasses('content', 'note')">
                        <label class="control-label" for="note">Notes</label>
                        <textarea class="form-control" id="note" name="note" v-model.trim="note.content"></textarea>
                    </div>

                    <p v-if="$v.$invalid">
                        <span class="text-warning">* Please ensure all fields are filled out correctly to proceed.</span>
                    </p>

                    <button type="submit" class="btn btn-primary btn-lg" :disabled="!note.isDirty() || $v.$invalid">Save</button>
                    <a class="btn btn-link" @click.stop="$router.back()">Cancel</a>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators'
    import { mapActions } from 'vuex'
    import SelectAdvocate from '../../../components/controls/selects/Advocates.vue'
    import RequiredAsterisk from '../../../components/RequiredAsterisk.vue'
    import InitClient from '../../../mixins/initClient'
    import InitNote from '../../../mixins/initNote'
    import ValidationClasses from '../../../mixins/validationClasses'

    export default {

        name: 'edit-note',

        components: {
            RequiredAsterisk,
            SelectAdvocate,
        },

        mixins: [ InitClient, InitNote, ValidationClasses ],

        validations() {
            return {
                note: {
                    advocate_id: {
                        required,
                    },
                    content: {
                        required,
                    },
                },
            }
        },

        created() {
            this.init()
        },

        beforeRouteUpdate(to, from, next) {
            this.init()
            next()
        },

        beforeRouteLeave(to, from, next) {
            this.reset()
            next()
        },

        // Watchers
        watch: {
            ['params.note_id']() {
                this.init()
            },
        },

        methods: {
            ...mapActions('notes', ['update']),

            init() {
                this.fetchCurrentNote()
                this.fetchCurrentClient()
            },

            process() {
                if (!this.$v.$invalid) {

                    const config = {
                        id: this.note.id,
                        data: this.note.getChanges(),
                    }

                    const to = this.$route && this.$route.query && this.$route.query.from || `/clients/${this.client.id}/notes`

                    this.update(config)
                        .then(updated => {
                            this.addMessage('Updated note about ' + this.client.full_name)
                            return this.$router.push(to)
                        });
                }
                    // Otherwise, scroll to the top and show an error message.
                else {
                        window.scrollTo(0, 0)
                        this.addMessage({
                            text: 'The form contains errors. Please ensure that all fields are filled out correctly and try your submission again.',
                            type: 'danger',
                            sticky: 1,
                        })
                    }
            },

            reset() {
                this.resetData()
                this.$v.$reset()
            },
        },
    }
</script>