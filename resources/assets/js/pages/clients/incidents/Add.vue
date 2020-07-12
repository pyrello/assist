<template>
    <div class="overlay-background">
        <div class="overlay">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Add Incident</h1>
            </header>
            <div class="section">
                <form role="form" @submit.prevent="process">

                    <!-- Advocate -->
                    <div class="form-group" :class="controlClasses('advocate_id', 'incident')">
                        <label class="control-label" for="advocate_id">Advocate <required-asterisk></required-asterisk></label>
                        <select-advocate v-model="incident.advocate_id" @input="$v.incident.advocate_id.$touch()"></select-advocate>
                    </div>

                    <incident-form-partial
                            v-model="incident"
                            :$v="$v.incident"
                    ></incident-form-partial>

                    <p v-if="$v.incident.$invalid">
                        <span class="text-warning">* Please ensure all fields are filled out correctly to proceed.</span>
                    </p>

                    <button type="submit" class="btn btn-primary btn-lg" :disabled="$v.incident.$invalid">Save</button>
                    <a class="btn btn-link" @click.stop="$router.back()">Cancel</a>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { minValue, numeric, required } from 'vuelidate/lib/validators'
    import { mapActions } from 'vuex'
    import { defined } from '../../../common'
    import RequiredAsterisk from '../../../components/RequiredAsterisk.vue'
    import SelectAdvocate from '../../../components/controls/selects/Advocates.vue'
    import IncidentFormPartial from '../../../components/forms/IncidentFormPartial'
    import InitClient from '../../../mixins/initClient'
    import Localities from '../../../mixins/localities'
    import ValidationClasses from '../../../mixins/validationClasses'
    import Incident from '../../../models/Incident'

    export default {

        name: 'incident-add',

        components: {
            IncidentFormPartial,
            RequiredAsterisk,
            SelectAdvocate,
        },

        mixins: [InitClient, Localities, ValidationClasses],

        // Data
        data() {
            return {
                incident: new Incident(),
            }
        },

        validations: {
            incident: {
                advocate_id: {
                    required,
                    numeric,
                },
                incident_type_id: {
                    minValue: minValue(1),
                    numeric,
                    required,
                },
                date: {
                    required,
                },
                city: {
                    required,
                },
                state: {
                    required,
                },
            },
        },

        // Hooks
        created() {
            this.setAuthUser()
        },

        beforeRouteLeave(to, from, next) {
            this.reset()
            next()
        },

        // Watchers
        watch: {
            authUser() {
                this.setAuthUser()
            },

            client() {
                console.warn('watch@client')
                if (defined(this.client)) {
                    // console.log('watched client is changing...', this.client)
                    // Copy in data from the client
                    if (this.client.address) {
                        this.incident.update({
                            state: this.client.state,
                            city: this.client.city,
                        })
                    }
                }
            },

            ['params.client_id']() {
                if (this.params.client_id) {
                    this.incident.update({ client_id: this.params.client_id })
                    this.init()
                }
            },
        },

        methods: {
            ...mapActions('incidents', ['create']),

            init() {
                this.fetchCurrentClient()
            },

            process() {
                // If the form is valid
                if (!this.$v.$invalid) {
                    const config = {
                        params: {
                            ...this.params
                        },
                        data: this.incident.getAttributes(),
                    }

                    this.create(config)
                        .then(created => {
                            this.addMessage('Added ' + created.type.name + ' incident for ' + this.client.full_name)
                            this.fetchCurrentClient()
                            this.$router.push('/clients/' + this.client.id + '/incidents')
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
                this.incident = new Incident()
            },

            setAuthUser() {
                this.incident.assign({ advocate_id: this.authUser.id })
            },
        },
    }
</script>
