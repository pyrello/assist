<template>
    <div class="overlay-background">
        <div class="overlay">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Editing <em>{{ client.first_name }} {{ client.last_name }}</em>
                    <small v-if="fetchingClient"><i class="fas fa-spinner fa-spin"></i> Loading client</small></h1>
            </header>
            <div class="section">
                <form role="form" @submit.prevent="process">
                    <checkbox-slider label="This client is a dependent of another client" v-model="isDependent"></checkbox-slider>
                    <div :class="{ hidden: !isDependent }">
                        <hr>
                        <div class="form-group" :class="controlClasses('parent_id', 'client')">
                            <label class="control-label">Who is their parent/guardian?</label>
                            <template v-if="preloadParent">
                                <select-client v-model="client.parent_id" exclude="dependents" :preload="preloadParent"></select-client>
                            </template>
                            <template v-else>
                                <select-client v-model="client.parent_id" exclude="dependents"></select-client>
                            </template>
                        </div>
                        <hr>
                    </div>
                    <client-form v-model="client" :$v="$v.client"></client-form>

                    <!-- Household -->
                    <template v-if="household && !client.parent_id">
                        <household-form-partial v-model="household" :$v="$v.household"></household-form-partial>
                    </template>
                    <!--/ Household -->

                    <p v-if="$v.$invalid">
                        <span class="text-warning">Please ensure all fields are filled out correctly to proceed.</span>
                        <!--<pre>{{ $v }}</pre>-->
                    </p>

                    <button type="submit" class="btn btn-success btn-lg" :disabled="(!client.isDirty() && !household.isDirty()) || $v.$invalid"><i class="fa fa-save"></i> Save</button>
                    <a class="btn btn-link" @click.stop="$router.back()">Cancel</a>
                </form>

                <pre>{{ $data }}</pre>
            </div>
        </div>
    </div>
</template>

<script>
    import { alpha, maxLength, minLength, numeric, required, requiredIf } from 'vuelidate/lib/validators'
    import { mapActions, mapGetters } from 'vuex'
    import { defined } from '../../common'
    import CheckboxSlider from '../../components/controls/CheckboxSlider'
    import ClientForm from '../../components/forms/ClientFormPartial'
    import SelectClient from '../../components/controls/selects/Clients'
    import InitClient from '../../mixins/initClient'
    import Localities from '../../mixins/localities'
    import ValidationClasses from '../../mixins/validationClasses'
    import Client from '../../models/Client'
    import Household from '../../models/Household'
    import HouseholdFormPartial from '../../components/forms/HouseholdFormPartial'

    export default {

        name: 'client-edit',

        components: {
            CheckboxSlider,
            ClientForm,
            HouseholdFormPartial,
            // RequiredAsterisk,
            SelectClient,
        },

        mixins: [ InitClient, Localities, ValidationClasses ],

        // Data
        data() {
            return {
                household: new Household(),
                isDependent: false,
            }
        },

        computed: {
            parent() {
                if (this.routeClient) {
                    return this.clientById(this.routeClient.parent_id)
                }

                return null
            },
            preloadParent() {
                if (this.parent) {
                    return [this.parent]
                }

                return false
            }
        },

        validations: {
            client: {
                first_name: {
                    alpha,
                },
                middle_initial: {
                    alpha,
                },
                last_four: {
                    maxLength: maxLength(4),
                    minLength: minLength(4),
                    numeric,
                },
                address: {
                    county: {
                        required,
                    },
                    state: {
                        required,
                    },
                    zip: {
                        minLength: minLength(5),
                    },
                },
                parent_id: {
                    requiredIf: requiredIf(function() {
                        return this.isDependent
                    }),
                },
            },
            household: {
                annual_income: {
                    numeric,
                    required,
                },
                size: {
                    numeric,
                    required
                },
            },
        },

        // Hooks
        created() {
            this.init()
        },

        // Watchers
        watch: {
            '$route'() {
                this.init()
            },
            isDependent() {
                if (!this.isDependent) {
                    this.$set(this.client, 'parent_id', null)
                }
            },
        },

        methods: {
            ...mapActions('clients', ['update']),

            init() {
                this.fetchCurrentClient()
            },

            routeClientFetched() {
                if (this.routeClient && this.routeClient.parent_id) {
                    this.fetchClient({ id: Number(this.routeClient.parent_id) })
                }
                this.$nextTick(() => {
                    if (this.client.parent_id) {
                        this.isDependent = true
                    }
                    if (!this.client.parent_id && this.client.household) {
                        this.household.assign(this.client.household)
                    }
                })
            },

            process() {
                if (!this.client.isDirty() && !this.household.isDirty()) {
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

                const config = {
                    id: this.client.id,
                    data: {
                        ...this.client.getChanges(),
                        household: this.household.getAttributes(),
                    }
                }

                this.update(config)
                    .then(updated => {
                        this.addMessage('Successfully updated ' + updated.first_name + ' ' + updated.last_name)
                        this.$router.push('/clients/'+updated.id)
                    })
                    .catch(error => {
                        if (defined(error.body) && defined(error.body.message)) {
                            this.addMessage({
                                text: error.body.message,
                                type: 'danger',
                            })
                            window.scrollTo(0, 0)
                        }
                    })
            },

            reset() {
                this.resetData()
                this.$v.$reset()
            },

            resetData() {
                this.client = new Client()
                this.household = new Household()
            },
        },
    }
</script>
