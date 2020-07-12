<template>
    <div class="overlay-background">
        <div class="overlay">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Add Dependent<small v-if="client"> for <client-link :client="client"></client-link></small></h1>
            </header>
            <div class="section">
                <p><strong><i class="fas fa-exclamation-triangle"></i> Note: </strong> This form is only for adding a non-client dependent. If you need to add a <em>dependent who is also a client</em>, please <router-link to="/intake">start an intake</router-link> and select <client-link :client="client"></client-link> as the parent/guardian.</p>
                <form role="form" @submit.prevent="process">

                    <!-- Advocate -->
                    <div class="form-group" :class="controlClasses('advocate_id')">
                        <label class="control-label" for="advocate_id">Advocate <required-asterisk></required-asterisk></label>
                        <select-advocate v-model="dependent.advocate_id" @input="$v.dependent.advocate_id.$touch()"></select-advocate>
                    </div>

                    <dependent-form-partial
                            v-model="dependent"
                            :$v="$v.dependent"
                    ></dependent-form-partial>

                    <p v-if="$v.$invalid">
                        <span class="text-warning">* Please ensure all fields are filled out correctly to proceed.</span>
                    </p>

                    <button type="submit" class="btn btn-primary btn-lg" :disabled="$v.$invalid">Save</button>
                    <a class="btn btn-link" @click.stop="$router.back()">Cancel</a>
                </form>
                <!--<pre>{{ { $data, $v } }}</pre>-->
            </div>
        </div>
    </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators'
    import { mapActions } from 'vuex'
    import { defined } from '../../../common'
    import SelectAdvocate from '../../../components/controls/selects/Advocates.vue'
    import DependentFormPartial from '../../../components/forms/DependentFormPartial'
    import RequiredAsterisk from '../../../components/RequiredAsterisk.vue'
    import InitClient from '../../../mixins/initClient'
    import Localities from '../../../mixins/localities'
    import ValidationClasses from '../../../mixins/validationClasses'
    import Dependent from '../../../models/Dependent'

    export default {

        name: 'incident-add',

        components: {
            DependentFormPartial,
            RequiredAsterisk,
            SelectAdvocate,
        },

        mixins: [InitClient, Localities, ValidationClasses],

        // Data
        data() {
            return {
                dependent: new Dependent(),
            }
        },

        validations: {
            dependent: {
                name: {
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

            ['params.client_id']() {
                this.dependent.update({ client_id: this.params.client_id })
                this.init()
            },
        },

        methods: {
            ...mapActions('dependents', ['create']),

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
                        data: this.dependent.getAttributes(),
                    }

                    this.create(config)
                        .then(created => {
                            this.addMessage('Added ' + created.name + ' as a dependent for ' + this.client.full_name)
                            this.$router.push('/clients/' + this.client.id + '/dependents')
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
                this.dependent = new Dependent()
            },

            setAuthUser() {
                this.dependent.assign({ advocate_id: this.authUser.id })
            },
        },
    }
</script>
