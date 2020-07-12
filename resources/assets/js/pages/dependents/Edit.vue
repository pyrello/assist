<template>
    <div class="overlay-background">
        <div class="overlay" v-if="dependent">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Editing {{ dependent.name }}<small v-if="client"> (Dependent of <client-link :client="client"></client-link>)</small></h1>
            </header>
            <div class="section">
                <form role="form" @submit.prevent="process">

                    <!-- Advocate -->
                    <div class="form-group" :class="controlClasses('advocate_id')">
                        <label class="control-label" for="advocate_id">Advocate<required-asterisk></required-asterisk></label>
                        <select-advocate v-model="dependent.advocate_id"></select-advocate>
                    </div>

                    <dependent-form-partial
                            v-model="dependent"
                            :$v="$v.dependent"
                    ></dependent-form-partial>

                    <p v-if="dependent.isDirty() && $v.$invalid">
                        <span class="text-warning">* Please ensure all fields are filled out correctly to proceed.</span>
                    </p>

                    <button type="submit" class="btn btn-primary btn-lg" :disabled="!dependent.isDirty || $v.$invalid">Save</button>
                    <a class="btn btn-link" @click.stop="$router.back()">Cancel</a>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators'
    import { mapActions, mapGetters } from 'vuex'
    import { defined } from '../../common'
    import SelectAdvocate from '../../components/controls/selects/Advocates.vue'
    import DependentFormPartial from '../../components/forms/DependentFormPartial'
    import RequiredAsterisk from '../../components/RequiredAsterisk.vue'
    import InitClient from '../../mixins/initClient'
    import InitDependent from '../../mixins/initDependent'
    import Localities from '../../mixins/localities'
    import ValidationClasses from '../../mixins/validationClasses'

    export default {

        name: 'incidents-edit',

        components: {
            DependentFormPartial,
            RequiredAsterisk,
            SelectAdvocate,
        },

        mixins: [ InitClient, InitDependent, Localities, ValidationClasses ],

        computed: {
            ...mapGetters('incidentTypes', {
                incidentTypes: 'all',
            }),
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
            this.init()
        },

        beforeRouteLeave(to, from, next) {
            this.reset()
            next()
        },

        // Watchers
        watch: {
            ['params.client_id']() {
                // console.log('params.client_id is changing', this.params.client_id)
                if (!isNaN(this.params.client_id)) {
                    this.fetchCurrentClient()
                }
            },
        },

        methods: {
            ...mapActions('dependents', ['update']),

            init() {
                this.fetchCurrentDependent()
                    .then(() => {
                        this.$set(this.params, 'client_id', this.dependentData.client_id)
                    })
            },

            process() {
                if (!this.dependent.isDirty()) {
                    window.scrollTo(0, 0)
                    return this.addMessage({
                        text: 'No changes have been made. Please make any changes and try your submission again.',
                        type: 'warning',
                        sticky: 1,
                    })
                }

                if (this.$v.$invalid) {
                    window.scrollTo(0, 0)
                    return this.addMessage({
                        text: 'The form contains errors. Please ensure that all fields are filled out correctly and try your submission again.',
                        type: 'danger',
                        sticky: 1,
                    })
                }

                const data = {
                    id: this.dependent.id,
                    data: this.dependent.getChanges(),
                }

                this.update(data)
                    .then(updated => {
                        this.addMessage('Successfully updated ' + updated.name + ', dependent of ' + this.client.full_name)
                        this.$router.push('/dependents/' + updated.id)
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
                this.dependent.assign({ advocate_id: this.authUser.id })
            },
        },
    }
</script>
