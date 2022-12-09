<template>
    <div class="overlay-background">
        <div class="overlay">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Add Service Request <small v-if="client"> for <client-link :client="client"></client-link></small></h1>
            </header>

            <div class="section">
                <form role="form" @submit.prevent="process">

                    <service-request-form-partial v-model="activity" :$v="$v.activity"></service-request-form-partial>

                    <!-- Notes -->
                    <div class="form-group" :class="{ 'has-success': activity.note !== '' }">
                        <label class="control-label" for="note">Notes</label>
                        <textarea class="form-control" id="note" name="note" v-model.trim="activity.note"></textarea>
                    </div>

                    <p v-if="$v.$invalid">
                        <span class="text-warning">* Please ensure all fields are filled out correctly to proceed.</span>
                    </p>

                    <button type="submit" class="btn btn-primary btn-lg" :disabled="$v.$invalid">Save</button>
                    <a class="btn btn-link" @click.stop="$router.back()">Cancel</a>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    import { numeric, required, requiredIf } from 'vuelidate/lib/validators'
    import { mapActions } from 'vuex'
    import { defined } from '../../../common'
    import ServiceRequestFormPartial from '../../../components/forms/ServiceRequestFormPartial'
    import InitClient from '../../../mixins/initClient'
    import InitIncident from '../../../mixins/initIncident'
    import Localities from '../../../mixins/localities'
    import Activity from '../../../models/Activity'

    export default {

        name: 'add-activity',

        components: {
            ServiceRequestFormPartial,
        },

        mixins: [InitClient, InitIncident, Localities],

        data() {
            return {
                activity: new Activity()
            }
        },

        validations() {
            return {
                activity: {
                    advocate_id: {
                        numeric,
                        required,
                    },
                    requested_service_id: {
                        numeric,
                        required,
                    },
//                service_provided: {
//                    required,
//                },
                    why_not_provided: {
                        requiredIf: requiredIf(() => {
                            return !this.activity.service_provided
                        }),
                    },
                    started_at: {
                        required,
                    },
                    ended_at: {
                        requiredIf: requiredIf(() => {
                            return this.activity.service_provided
                        }),
                    },
                    funding_source_id: {
                        numeric,
                        requiredIf: requiredIf(() => {
                            return this.activity.service_provided
                        }),
                    },
                    state: {
                        requiredIf: requiredIf(() => {
                            return this.activity.service_provided
                        }),
                    },
                    city: {
                        requiredIf: requiredIf(() => {
                            return this.activity.service_provided
                        }),
                    },
                },
            }
        },

        created() {
            this.init()
        },

        // beforeRouteLeave(to, from, next) {
        //     this.reset()
        //     next()
        // },

        methods: {
            ...mapActions('activities', ['create']),

            currentClientFetched() {
                this.$nextTick(() => {
                    if (this.client.last_incident_id) {
                        this.setIncidentId(this.client.last_incident_id)
                        this.activity.assign({ incident_id: this.client.last_incident_id })
                        this.fetchIncident({ id: this.client.last_incident_id })
                    }
                })
            },

            init() {
                this.fetchCurrentClient()
                this.$nextTick(() => {
                    this.setAuthUser()
                    this.activity.assign({ client_id: this.$route.params.client_id })
                })
            },

            process() {
                // If the form is valid
                if (!this.$v.$invalid) {
                    const data = this.activity.getAttributes()

                    if (this.activity.service_provided) {
                        data.why_not_provided = null
                    } else {
                        data.started_at = null
                        data.ended_at = null
                        data.funding_source_id = null
                    }

                    const payload = {
                        data,
                    }

                    this.create(payload)
                        .then(created => {
                            this.addMessage('Added ' + created.service.name + ' activity record for ' + this.client.first_name + ' ' + this.client.last_name)
                            this.$router.push('/clients/' + this.client.id + '/activities')
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
                this.activity = new Activity()
            },

            setAuthUser() {
                this.activity.assign({ advocate_id: this.authUser.id })
            },
        },
    }
</script>
