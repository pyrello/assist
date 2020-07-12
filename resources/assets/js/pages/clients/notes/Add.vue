<template>
    <div class="overlay-background">
        <div class="overlay">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Add Note <small v-if="client"> for <client-link :client="client"></client-link></small></h1>
            </header>

            <div class="section">
                <form role="form" @submit.prevent="process">
                    <!-- Advocate -->
                    <div class="form-group" :class="controlClasses('advocate_id', 'note')">
                        <label class="control-label" for="advocate_id">Advocate <required-asterisk></required-asterisk></label>
                        <select-advocate v-model="note.advocate_id"></select-advocate>
                    </div>

                    <!-- Notes -->
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
    import { mapActions, mapGetters } from 'vuex'
    import { defined, jsonClone } from '../../../common'
    import SelectAdvocate from '../../../components/controls/selects/Advocates.vue'
    import RequiredAsterisk from '../../../components/RequiredAsterisk.vue'
    import InitClient from '../../../mixins/initClient'
    import ValidationClasses from '../../../mixins/validationClasses'
    import Activity from '../../../models/Activity'
    import Note from '../../../models/Note'

    export default {

        name: 'add-note',

        components: {
            RequiredAsterisk,
            SelectAdvocate,
        },

        mixins: [ InitClient, ValidationClasses ],

        data() {
            return {
                note: new Note()
            }
        },

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
            this.setAuthUser()
            this.init()
        },

        beforeRouteLeave(to, from, next) {
            this.reset()
            next()
        },

        methods: {
            ...mapActions('notes', ['create']),

            init() {
                this.setAuthUser()
                this.note.assign({ client_id: this.params.client_id })
                this.fetchCurrentClient()
            },

            process() {
                // If the form is valid
                if (!this.$v.$invalid) {
                    const config = {
                        data: this.note.getAttributes(),
                    }

                    this.create(config)
                        .then(created => {
                            this.addMessage('Added note for ' + this.client.full_name)
                            this.$router.push('/clients/' + this.client.id + '/notes')
                        })
                        .catch(error => {
                            if (defined(error.body) && defined(error.body.message)) {
                                this.addMessage({
                                    text: error.body.message,
                                    type: 'danger',
                                })
                            }
                        })
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

            resetData() {
                this.note = new Note()
            },

            setAuthUser() {
                this.note.assign({ advocate_id: this.authUser.id })
            },
        },
    }
</script>
