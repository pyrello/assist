<template>
    <div class="overlay-background">
        <div class="overlay">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Editing <em>{{ advocate.first_name }} {{ advocate.last_name }} </em><small v-if="fetchingAdvocate"><i class="fas fa-spinner fa-spin"></i></small></h1>
            </header>
            <div class="section">
                <form role="form" @submit.prevent="process">

                    <!-- First Name -->
                    <div class="form-group" :class="controlClasses('first_name', 'advocate')">
                        <label class="control-label" for="first_name">First Name <required-asterisk></required-asterisk></label>
                        <input type="text" class="form-control" id="first_name" name="first_name" placeholder="First Name" v-model.trim="advocate.first_name">
                        <template v-if="$v.advocate.first_name.$dirty">
                            <small class="help-block" v-if="!$v.advocate.first_name.required">Field is required.</small>
                            <small class="help-block" v-if="!$v.advocate.first_name.alpha">Only alpha characters are allowed.</small>
                        </template>
                    </div>

                    <!-- Last Name -->
                    <div class="form-group" :class="controlClasses('last_name', 'advocate')">
                        <label class="control-label" for="last_name">Last Name <required-asterisk></required-asterisk></label>
                        <input type="text" class="form-control" id="last_name" name="last_name" placeholder="Last name" v-model.trim="advocate.last_name" @input="$v.advocate.last_name.$touch()">
                        <template v-if="$v.advocate.last_name.$dirty">
                            <small class="help-block" v-if="!$v.advocate.last_name.required">Field is required.</small>
                        </template>
                    </div>

                    <!-- Email -->
                    <div class="form-group" :class="controlClasses('email', 'advocate')">
                        <label class="control-label" for="email">Email <required-asterisk></required-asterisk></label>
                        <input type="text" class="form-control" id="email" name="email" placeholder="Email" v-model.trim="advocate.email" @input="$v.advocate.email.$touch()">
                        <template v-if="$v.advocate.email.$dirty">
                            <small class="help-block" v-if="!$v.advocate.email.required">Field is required.</small>
                            <small class="help-block" v-if="!$v.advocate.email.email">A valid email address is required.</small>
                        </template>
                    </div>

                    <!-- Password -->
                    <div class="form-group" :class="passwordClasses('password')">
                        <label class="control-label" for="password">Update Password <required-asterisk></required-asterisk></label>
                        <input type="password" class="form-control" id="password" name="password" placeholder="Enter a new password" v-model="advocate.password" @input="$v.advocate.password.$touch()" autocomplete="new-password">
                        <template v-if="(advocate.getChanges().password || advocate.getChanges().password_confirmation) && $v.advocate.password.$dirty">
                            <small class="help-block" v-if="!$v.advocate.password.required">Field is required.</small>
                        </template>
                    </div>

                    <!-- Password Confirm -->
                    <div class="form-group" :class="passwordClasses('password_confirmation')">
                        <label class="control-label" for="password_confirmation">Confirm Password <required-asterisk></required-asterisk></label>
                        <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" placeholder="Confirm the new password" v-model="advocate.password_confirmation" @input="$v.advocate.password_confirmation.$touch()" autocomplete="new-password">
                        <template v-if="(advocate.getChanges().password || advocate.getChanges().password_confirmation) && $v.advocate.password_confirmation.$dirty">
                            <small class="help-block" v-if="!$v.advocate.password_confirmation.required">Field is required.</small>
                            <small class="help-block" v-if="!$v.advocate.password_confirmation.sameAsPassword">The passwords you entered don't match.</small>
                        </template>
                    </div>

                    <button class="btn btn-lg btn-success" type="submit" :disabled="!advocate.isDirty() && !$v.invalid"><i class="fa fa-save"></i> Save</button>
                    <a class="btn btn-link" @click.stop="$router.back()">Cancel</a>
                </form>
                <!--<pre>{{ $data }}</pre>-->
            </div>
        </div>
    </div>
</template>

<script>
    import { alpha, email, minLength, numeric, required, sameAs } from 'vuelidate/lib/validators'
    import { mapGetters, mapActions } from 'vuex'
    import { dataGet, defined, has } from '../../common'
    import RequiredAsterisk from '../../components/RequiredAsterisk.vue'
    import InitAdvocate from '../../mixins/initAdvocate'
    import ValidationClasses from '../../mixins/validationClasses'

    export default {

        name: 'advocate-edit',

        components: {
            RequiredAsterisk,
        },

       mixins: [ InitAdvocate, ValidationClasses ],

        data() {
            return {
            }
        },

        validations: {
            advocate: {
                first_name: {
                    alpha,
                    required,
                },
                last_name: {
                    required,
                },
                email: {
                    email,
                    required,
                },
                password: {
                    required,
                },
                password_confirmation: {
                    required,
                    sameAsPassword: sameAs('password')
                },
            },
        },

        // Hooks
        created() {
            this.init()
        },

        // beforeRouteLeave(to, from, next) {
        //     console.log('leaving route');
        //     this.reset()
        //     next()
        // },

        watch: {
            '$route': 'init'
        },

        methods: {
            ...mapActions('advocates', [
                'update',
            ]),

            init() {
                this.fetchRouteAdvocate()
            },

            passwordClasses(field) {
                const $validation = this.$v.advocate[field]
                if ((has(this.advocate.getChanges(), 'password') || has(this.advocate.getChanges(), 'password_confirmation'))) {
                // if ((defined(dataGet(this.updated, 'password')) || defined(dataGet(this.updated, 'password_confirmation'))) && defined($validation)) {
                    return {
                        'has-success': !$validation.$invalid,
                        'has-warning': $validation.$invalid,
                    }
                }
            },

            process() {
                const params = {
                    id: this.advocate.id,
                    data: this.advocate.getChanges()
                }

                this.update(params)
                    .then(updated => {
                        // If this is the current advocate, we need to
                        // set a new local storage entry.
                        if (this.authUser.id == updated.id) {
                            this.$store.commit('auth/setCurrent', updated)
                        }
                        this.addMessage('Successfully updated ' + updated.first_name + ' ' + updated.last_name + '.')
                        // console.log('About to navigate to advocates page')
                        this.$router.push('/advocates')
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

            reset() {
                this.resetData()
                this.$v.$reset()
            },
        },
    }
</script>
