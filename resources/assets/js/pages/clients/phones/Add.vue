<template>
    <div class="overlay-background">
        <div class="overlay">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Add Phone Number<small v-if="client"> for <client-link :client="client"></client-link></small></h1>
            </header>
            <div class="section">
                <form role="form" @submit.prevent="process">

                    <phone-form-partial v-model="phone" :$v="$v.phone"></phone-form-partial>

                    <p v-if="$v.$invalid">
                        <span class="text-warning">* Please ensure all fields are filled out correctly to proceed.</span>
                    </p>

                    <button type="submit" class="btn btn-success btn-lg" :disabled="$v.$invalid"><i class="fa fa-save"></i> Save</button>
                    <a class="btn btn-link" @click.stop="$router.back()">Cancel</a>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { minLength, numeric, required } from 'vuelidate/lib/validators'
    import { mapActions, mapGetters } from 'vuex'
    import { defined } from '../../../common'
    import PhoneFormPartial from '../../../components/forms/PhoneFormPartial'
    import RequiredAsterisk from '../../../components/RequiredAsterisk'
    import InitClient from '../../../mixins/initClient'
    import ValidationClasses from '../../../mixins/validationClasses'
    import Phone from '../../../models/Phone'

    export default {

        name: 'add-phone',

        components: {
            PhoneFormPartial,
            RequiredAsterisk,
        },

        mixins: [InitClient, ValidationClasses],

        data() {
            return {
                phone: new Phone(),
            }
        },

        computed: {
            ...mapGetters('phoneTypes', {
                phoneTypes: 'all',
            }),
        },

        validations: {
            phone: {
                number: {
                    minLength: minLength(10),
                    numeric,
                    required,
                },
                ext: {
                    numeric,
                },
                type: {
                    required,
                }
            }
        },

        // Hooks
        created() {
            this.init()
        },

        // beforeRouteUpdate(to, from, next) {
        //     this.init()
        //     next()
        // },

        // beforeRouteLeave(to, from, next) {
        //     console.log(this.$options.name, 'Before route leave')
        //     this.reset()
        //     next()
        // },

        methods: {
            ...mapActions('phones', ['create']),

            init() {
                // console.log(this.$options.name, 'init', this.phone)
                this.fetchCurrentClient()
                this.$nextTick(() => {
                    this.phone.assign({ client_id : this.$route.params.client_id })
                })
            },

            process() {
                // If the form is valid
                if (!this.$v.$invalid) {
                    const config = {
                        data: this.phone.getAttributes(),
                    }

                    this.create(config)
                        .then(created => {
                            this.addMessage('Added phone number for ' + this.client.full_name)
                            this.fetchClient({ id: this.client.id })
                            this.$router.push('/clients/' + this.client.id + '/profile')
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
                this.phone = new Phone()
            },
        }
    }
</script>