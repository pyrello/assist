<template>
    <div class="overlay-background">
        <div class="overlay" v-if="incident">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Editing <template v-if="incident && incident.type">{{ incident.type.name }} </template>Incident<small v-if="client"> for <client-link :client="client"></client-link></small></h1>
            </header>
            <div class="section">
                <form role="form" @submit.prevent="process">

                    <!-- Advocate -->
                    <div class="form-group" :class="controlClasses('advocate_id')">
                        <label class="control-label" for="advocate_id">Advocate<required-asterisk></required-asterisk></label>
                        <select-advocate v-model="incident.advocate_id"></select-advocate>
                    </div>

                    <incident-form-partial v-model="incident" :$v="$v.incident"></incident-form-partial>

                    <p v-if="incident.isDirty() && $v.$invalid">
                        <span class="text-warning">* Please ensure all fields are filled out correctly to proceed.</span>
                    </p>

                    <button type="submit" class="btn btn-primary btn-lg" :disabled="!incident.isDirty() || $v.$invalid">Save</button>
                    <a class="btn btn-link" @click.stop="$router.back()">Cancel</a>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { numeric, required } from 'vuelidate/lib/validators'
    import { mapActions, mapGetters } from 'vuex'
    import { defined } from '../../common'
    import RequiredAsterisk from '../../components/RequiredAsterisk.vue'
    import SelectAdvocate from '../../components/controls/selects/Advocates.vue'
    import IncidentFormPartial from '../../components/forms/IncidentFormPartial'
    import InitClient from '../../mixins/initClient'
    import InitIncident from '../../mixins/initIncident'
    import Localities from '../../mixins/localities'
    import ValidationClasses from '../../mixins/validationClasses'

    export default {

        name: 'incidents-edit',

        components: {
            IncidentFormPartial,
            RequiredAsterisk,
            SelectAdvocate,
        },

        mixins: [ InitClient, InitIncident, Localities, ValidationClasses ],

        computed: {
            ...mapGetters('incidentTypes', {
                incidentTypes: 'all',
            }),
        },

        validations: {
            incident: {
                advocate_id: {
                    numeric,
                    required,
                },
                incident_type_id: {
                    numeric,
                    required,
                },
                date: {
                    required,
                },
                state: {
                    required,
                },
                city: {
                    required,
                },
            },
        },

        // Hooks
        created() {
            this.setAuthUser()
            this.init()
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

            ['params.client_id']() {
                // console.log('params.client_id is changing', this.params.client_id)
                if (!isNaN(this.params.client_id)) {
                    this.fetchCurrentClient()
                }
            },
        },

        methods: {
            ...mapActions('incidents', ['update']),

            init() {
                this.fetchCurrentIncident()
                    .then(() => {
                        // console.log('incident', this.incidentData)
                        // this.params.client_id = this.incident.client_id
                        this.$set(this.params, 'client_id', this.incidentData.client_id)
                    })
            },

            process() {
                if (!this.incident.isDirty()) {
                    window.scrollTo(0, 0)
                    return this.addMessage({
                        text: 'No changes have been made. Please make any changes and try your submission again.',
                        type: 'warning',
                        sticky: 1,
                    })
                }

                if (this.$v.incident.$invalid) {
                    window.scrollTo(0, 0)
                    return this.addMessage({
                        text: 'The form contains errors. Please ensure that all fields are filled out correctly and try your submission again.',
                        type: 'danger',
                        sticky: 1,
                    })
                }

                const data = {
                    id: this.incident.id,
                    data: this.incident.getChanges(),
                    // params: {
                    // },
                }

                this.update(data)
                    .then(updated => {
                        this.addMessage('Successfully updated ' + updated.type.name + ' incident for ' + this.client.first_name + ' ' + this.client.last_name)
                        this.$router.push('/incidents/' + updated.id)
                    })
                    .catch(error => {
                        if (defined(error.body) && defined(error.body.message)) {
                            this.addMessage({
                                text: error.body.message,
                                type: 'danger',
                            })
                        }
                    })
            },

            setAuthUser() {
                this.incident.assign({ advocate_id: this.authUser.id })
            },
        },
    }
</script>
