<template>
    <div class="overlay-background">
        <div class="overlay">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Add Abuser<small v-if="client"> of {{ client.full_name }}</small></h1>
            </header>
            <div class="section">
                <form role="form" @submit.prevent="process">

                    <abuse-relationship-form v-model="abuse" :$v="$v.abuse"></abuse-relationship-form>
                    <footer class="section">
                        <!--<p v-if="$v.$invalid">-->
                            <!--<span class="text-warning">* Please ensure all fields are filled out correctly to proceed.</span>-->
                        <!--</p>-->

                        <button type="submit" class="btn btn-primary btn-lg" :disabled="!validRecord"><i class="fa fa-save"></i> Save</button>
                        <a class="btn btn-link" @click.stop="$router.back()">Cancel</a>
                    </footer>
                </form>
                <!--<pre>{{ { $data, $v } }}</pre>-->
            </div>
        </div>
    </div>
</template>

<script>
    import { required, requiredIf } from 'vuelidate/lib/validators'
    import { mapActions, mapGetters } from 'vuex'
    import { defined } from '../../../common'
    import AbuseRelationshipForm from '../../../components/forms/AbuseRelationshipFormPartial'
    import Abuser from '../../../models/Abuser'
    import AbuseRelationship from '../../../models/AbuseRelationship'
    import InitClient from '../../../mixins/initClient'
    import RequiredAsterisk from '../../../components/RequiredAsterisk.vue'
    import SelectAbuser from '../../../components/controls/selects/Abusers.vue'
    import ValidationClasses from '../../../mixins/validationClasses'

    export default {

        name: 'abusers-add',

        components: {
            AbuseRelationshipForm,
            RequiredAsterisk,
            SelectAbuser,
        },

        mixins: [ InitClient, ValidationClasses  ],

        // Data
        data() {
            return {
                abuse: {
                    abuser: new Abuser(),
                    relationship: new AbuseRelationship(),
                },
            }
        },

        computed: {
            ...mapGetters('abuserRelationshipTypes', {
                abuserRelationshipTypes: 'all',
            }),
            ...mapGetters('abuseTypes', {
                abuseTypes: 'all',
            }),

            validRecord() {
                return !this.$v.$invalid
            },
        },

        validations: {
            abuse: {
                relationship: {
                    relationship: {
                        required,
                    },
                    abuse_types: {
                        required,
                    },
                    abuser_id: {
                        requiredIf: requiredIf(function(abuseRelationship) {
                            return abuseRelationship.addExistingAbuser
                        })
                    }
                }
            },
        },

        // Hooks
       created() {
           this.init()
       },

        // beforeRouteLeave(to, from, next) {
        //     this.reset()
        //     next()
        // },

        // Watchers
        watch: {
            '$route': 'init',
            // ['params.$route.client_id']() {
            //     // this.abuse.relationship.client_id = this.params.client_id
            //     this.abuse.relationship.update({ client_id: this.params.client_id })
            // },
        },

        methods: {
            ...mapActions('abuseRelationships', {
                createRelationship: 'create',
            }),
            ...mapActions('abusers', ['create', 'update']),

            init() {
                this.fetchCurrentClient()
                this.$nextTick(() => {
                    this.abuse.relationship.update({ client_id: this.$route.params.client_id })
                })
            },

            process() {

                if (this.addExistingAbuser) {
                    const config = {
                        data: {
                            ...this.abuse.relationship.getChanges(),
                            // abuser_id: this.abuse.relationship.abuser_id,
                            client_id: this.client.id,
                        },
                    }

                    this.createRelationship(config)
                        .then(created => {

                            this.addMessage('Successfully added ' + created.abuser.full_name + ' as abuser to client')
                            this.$router.push('/clients/' + this.client.id)
                        })
                        .catch(error => {
                            if (defined(error.body) && defined(error.body.message)) {
                                this.addMessage({
                                    text: error.body.message,
                                    type: 'danger',
                                })
                            }
                        })
                } else {
                    // If the form is valid
                    // if (!this.$v.model.$invalid) {
                    const config = {
                        data: {
                            ...this.abuse.relationship.getChanges(),
                            abuser: this.abuse.abuser.getChanges(),
                        },
                    }

                    this.createRelationship(config)
                        .then(created => {
                            this.addMessage('Successfully added ' + created.abuser.full_name)
                            this.$router.push('/clients/' + this.client.id + '/abuse')
                        })
                        .catch(error => {
                            if (defined(error.body) && defined(error.body.message)) {
                                this.addMessage({
                                    text: error.body.message,
                                    type: 'danger',
                                })
                            }
                        })
                    // }
                    // Otherwise, scroll to the top and show an error message.
                    // else {
                    //     window.scrollTo(0, 0)
                    //     this.addMessage({
                    //         text: 'The form contains errors. Please ensure that all fields are filled out correctly and try your submission again.',
                    //         type: 'danger',
                    //         sticky: 1,
                    //     })
                    // }
                }
            },

            reset() {
                this.resetData()
                this.$v.$reset()
            },

            resetData() {
                this.abuse = {
                    abuser: new Abuser(),
                    relationship: new AbuseRelationship(),
                };
            },

            setAuthUser() {
                // Is this necessary?
                // this.relationship.assign({ 'advocate_id': this.authUser.id })
            },
        },
    }
</script>
