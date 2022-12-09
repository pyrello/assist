<template>
    <div class="overlay-background">
        <div class="overlay">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Editing Activity<span v-if="activity && activity.service"> for {{ activity.service.name }}</span></h1>
            </header>

            <div class="section">
                <form role="form" @submit.prevent="process" v-if="activity">
                    <!-- Incident -->
                    <!--<div class="form-group" v-if="incident">-->
                        <!--<label class="control-label">Incident</label>-->
                        <!--<p class="form-control-static">{{ incident.type.name }}</p>-->
                    <!--</div>-->
                    <service-request-form-partial v-model="activity" :$v="$v.activity"></service-request-form-partial>

                    <p v-if="activity.isDirty() && $v.$invalid">
                        <span class="text-warning">* Please ensure all fields are filled out correctly to proceed.</span>
                    </p>

                    <button type="submit" class="btn btn-success btn-lg" :disabled="!activity.isDirty() || $v.$invalid"><i class="fa fa-save"></i> Save</button>
                    <a class="btn btn-link" @click.stop="$router.back()">Cancel</a>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { numeric, required, requiredIf } from 'vuelidate/lib/validators'
    import { mapActions } from 'vuex'
    import { copy, defined } from '../../../common'
    import SelectAdvocate from '../../../components/controls/selects/Advocates.vue'
    import SelectCity from '../../../components/controls/selects/Cities.vue'
    import SelectFunding from '../../../components/controls/selects/Funding.vue'
    import SelectService from '../../../components/controls/selects/Services.vue'
    import SelectState from '../../../components/controls/selects/States.vue'
    import ServiceRequestFormPartial from '../../../components/forms/ServiceRequestFormPartial'
    import RequiredAsterisk from '../../../components/RequiredAsterisk.vue'
    import InitActivity from '../../../mixins/initActivity'
    import InitClient from '../../../mixins/initClient'
    import InitIncident from '../../../mixins/initIncident'
    import Localities from '../../../mixins/localities'
    import ValidationClasses from '../../../mixins/validationClasses'

    export default {

        name: 'activity-edit',

        components: {
            RequiredAsterisk,
            ServiceRequestFormPartial,
        },

        mixins: [InitActivity, InitClient, InitIncident, Localities, ValidationClasses],

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

        // Hooks
        // created() {
        //     this.init()
        // },

       beforeRouteLeave(to, from, next) {
           this.reset()
           next()
       },

        // watch: {
        //     ['params.activity_id']() {
        //         this.init()
        //     },
        // },

        methods: {
            ...mapActions('activities', ['update']),

            // init() {
            //     this.fetchCurrentActivity()
            //     this.fetchCurrentClient()
            // },

            process() {
                if (this.activity.isDirty()) {
                    if (!this.$v.$invalid) {

                        const config = {
                            id: this.activity.id,
                            data: this.activity.getChanges(),
                        }

                        this.update(config)
                            .then(updated => {
                                this.addMessage('Updated ' + updated.service_name + ' activity record for ' + this.client.full_name)
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
                    else {

                        window.scrollTo(0, 0)
                        this.addMessage({
                            text: 'The form contains errors. Please ensure that all fields are filled out correctly and try your submission again.',
                            type: 'danger',
                            sticky: 1,
                        })
                    }
                }
                else {

                    window.scrollTo(0, 0)
                    this.addMessage({
                        text: 'No changes have been made. Please make any changes and try your submission again.',
                        type: 'warning',
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
