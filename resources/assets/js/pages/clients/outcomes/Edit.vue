<template>
    <div class="overlay-background">
        <div class="overlay">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Editing Outcome <small v-if="client"> for <client-link :client="client"></client-link></small></h1>
            </header>
            <div class="section">
                <form role="form" @submit.prevent="process">

                    <div class="form-group" :class="controlClasses('outcome_id', 'outcome')">
                        <label class="control-label" for="outcome_id">Outcome <required-asterisk></required-asterisk></label>
                        <select-outcome v-model="outcome.outcome_id"></select-outcome>
                    </div>

                    <label>Completed?</label>
                    <div class="radio">
                        <label>
                            <input type="radio" name="completed" v-model="outcome.completed" :value="true"> Yes
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="completed" v-model="outcome.completed" :value="false"> No
                        </label>
                    </div>

                    <div class="form-group" :class="controlClasses('date', 'outcome')" v-if="!outcome.activity_ids.length">
                        <label class="control-label" for="date">Date <required-asterisk></required-asterisk></label>
                        <input-date id="date" v-model="outcome.date"></input-date>
                    </div>

                    <p v-if="$v.outcome.$invalid">
                        <span class="text-warning">* Please ensure all fields are filled out correctly to proceed.</span>
                    </p>

                    <button type="submit" class="btn btn-primary btn-lg" :disabled="!outcome.isDirty() || $v.$invalid">Save</button>
                    <a class="btn btn-link" @click.stop="$router.back()">Cancel</a>
                </form>
<!--                <pre>{{ outcome }}</pre>-->
            </div>
        </div>
    </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators'
    import { mapActions, mapGetters } from 'vuex'
    import SelectOutcome from '../../../components/controls/selects/Outcomes.vue'
    import RequiredAsterisk from '../../../components/RequiredAsterisk.vue'
    import InitClient from '../../../mixins/initClient'
    import InitClientOutcome from '../../../mixins/initClientOutcome'
    import InitIncident from '../../../mixins/initIncident'
    import ValidationClasses from '../../../mixins/validationClasses'

    export default {

        name: 'edit-client-outcome',

        components: {
            RequiredAsterisk,
            SelectOutcome,
        },

        mixins: [ InitClient, InitIncident, InitClientOutcome, ValidationClasses ],

        computed: {
            ...mapGetters('outcomes', ['all']),
        },

        validations() {
            const v = {
                outcome: {
                    outcome_id: {
                        required,
                    },
                }
            }
            if (!this.outcome.activity_ids.length) {
                v.outcome.date = {
                    required,
                }
            }
            return v
        },

        created() {
            // if (this.$route.query.activity_ids) {
            //     this.outcome.activity_ids = this.parseActivityIds(this.$route.query.activity_ids)
            // }
            this.init()
        },

        beforeRouteLeave(to, from, next) {
            this.reset()
            next()
        },

        // Watchers
        watch: {
            ['params.outcome_id']() {
                this.init()
            },
        },

        methods: {
            ...mapActions('clientOutcomes', ['update']),
            ...mapActions('outcomes', ['fetch']),

            init() {
                this.fetchCurrentOutcome()
                this.fetchCurrentClient()
            },

            process() {
                if (!this.$v.$invalid) {

                    const config = {
                        id: this.outcome.id,
                        data: this.outcome.getChanges(),
                    }

                    this.update(config)
                        .then(updated => {
                            this.addMessage('Updated outcome for ' + this.client.full_name)
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

            parseActivityIds(ids) {
                return ids.split(',').map(id => Number(id))
            },
        },
    }
</script>
