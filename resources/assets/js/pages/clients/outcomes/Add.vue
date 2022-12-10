<template>
    <div class="overlay-background">
        <div class="overlay">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Add Outcome <span v-if="client"> for {{ client.first_name }} {{ client.last_name }}</span></h1>
            </header>
            <div class="section">
                <form role="form" @submit.prevent="process">

                    <div class="form-group" :class="controlClasses('outcome_id')">
                        <label class="control-label" for="outcome_id">Outcome <required-asterisk></required-asterisk></label>
                        <select-outcome v-model="model.outcome_id"></select-outcome>
                    </div>

                    <label>Completed?</label>
                    <div class="radio">
                        <label>
                            <input type="radio" name="completed" v-model="model.completed" :value="true"> Yes
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="completed" v-model="model.completed" :value="false"> No
                        </label>
                    </div>

                    <div class="form-group" :class="controlClasses('date')" v-if="!model.activity_ids.length">
                        <label class="control-label" for="date">Date <required-asterisk></required-asterisk></label>
                        <input-date id="date" v-model="model.date"></input-date>
                    </div>

                    <!-- Notes -->
                    <div class="form-group" :class="controlClasses('note')">
                        <label class="control-label" for="note">Notes</label>
                        <textarea class="form-control" id="note" name="note" v-model.trim="model.note"></textarea>
                    </div>

                    <p v-if="$v.model.$invalid">
                        <span class="text-warning">* Please ensure all fields are filled out correctly to proceed.</span>
                    </p>

                    <button type="submit" class="btn btn-primary btn-lg">Save</button>
                    <a class="btn btn-link" @click.stop="$router.back()">Cancel</a>
                </form>
<!--                <pre>{{ { model } }}</pre>-->
            </div>
        </div>
    </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators'
    import { mapGetters, mapActions } from 'vuex'
    import { dataGet, defined, has } from '../../../common'
    import { blankClientOutcome } from '../../../factory'
    import RequiredAsterisk from '../../../components/RequiredAsterisk.vue'
    import SelectOutcome from '../../../components/controls/selects/Outcomes.vue'
    import InitClient from '../../../mixins/initClient'
    import InitIncident from '../../../mixins/initIncident'
    import ClientOutcome from '../../../models/ClientOutcome'
    import ValidationClasses from '../../../mixins/validationClasses'

    export default {

        components: {
            RequiredAsterisk,
            SelectOutcome,
        },

        mixins: [ InitClient, InitIncident, ValidationClasses ],

        data() {
            return {
                model: new ClientOutcome(),
            }
        },

        computed: {
            ...mapGetters('outcomes', ['all']),
        },

        validations() {
            const v = {
                model: {
                    outcome_id: {
                        required,
                    },
                }
            }
            if (!this.model.activity_ids.length) {
                v.model.date = {
                    required,
                }
            }
            return v
        },

        created() {
            if (this.$route.query.activity_ids) {
                this.model.activity_ids = this.parseActivityIds(this.$route.query.activity_ids)
            }
            this.setAuthUser()
            this.init()
        },

        // mounted() {
        //     this.fetch()
        // },

        // beforeRouteLeave(to, from, next) {
        //     this.reset()
        //     next()
        // },

        watch: {
            authUser() {
                this.setAuthUser()
            },
        },

        methods: {
            ...mapActions('clientOutcomes', ['create']),
            // ...mapActions('outcomes', ['fetch', 'setCurrentService']),

            init() {
                this.fetchCurrentClient()
            },

            currentClientFetched() {
                this.$nextTick(() => {
                    this.$set(this.model, 'client_id', this.client.id)
                    if (this.client && this.client.last_incident_id) {
                        this.params.incident_id = this.client.last_incident_id
                        this.model.update({ incident_id: this.client.last_incident_id })
                        this.fetchIncident({ id: this.client.last_incident_id })
                    }
                })
            },

            process() {
                if (!this.$v.model.$invalid) {

                    const data = {
                        data: this.model,
                    }
                    this.create(data)
                        .then(response => {
                            // console.log('created', response)
                            this.show = false
                            this.addMessage('Successfully added outcome for ' + this.client.full_name)
                            return this.$router.push('/clients/' + this.client.id + '/outcomes')
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

            resetData() {
                this.model = new ClientOutcome()
            },

            setAuthUser() {
                this.$set(this.model, 'advocate_id', this.authUser.id)
            },

            parseActivityIds(ids) {
                return ids.split(',').map(id => Number(id))
            },
        },
    }
</script>
