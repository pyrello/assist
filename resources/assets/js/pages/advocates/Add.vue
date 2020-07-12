<template>
    <div class="overlay-background">
        <div class="overlay">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Add Advocate</h1>
            </header>
            <div class="section">
                <form @submit.prevent="process">

                    <!-- First Name -->
                    <div class="form-group" :class="requiredValidationClasses('first_name')">
                        <label class="control-label" for="first_name">First Name <required-asterisk></required-asterisk></label>
                        <input type="text" class="form-control" id="first_name" name="first_name" placeholder="First name" v-model.trim="model.first_name" @input="$v.model.first_name.$touch()">
                        <template v-if="$v.model.first_name.$dirty">
                            <small class="help-block" v-if="!$v.model.first_name.required">Field is required.</small>
                            <small class="help-block" v-if="!$v.model.first_name.alpha">Only alpha characters are allowed.</small>
                        </template>
                    </div>

                    <!-- Last Name -->
                    <div class="form-group" :class="requiredValidationClasses('last_name')">
                        <label class="control-label" for="last_name">Last Name <required-asterisk></required-asterisk></label>
                        <input type="text" class="form-control" id="last_name" name="last_name" placeholder="Last name" v-model.trim="model.last_name" @input="$v.model.last_name.$touch()">
                        <template v-if="$v.model.last_name.$dirty">
                            <small class="help-block" v-if="!$v.model.last_name.required">Field is required.</small>
                        </template>
                    </div>

                    <!-- Email -->
                    <div class="form-group" :class="requiredValidationClasses('email')">
                        <label class="control-label" for="email">Email <required-asterisk></required-asterisk></label>
                        <input type="text" class="form-control" id="email" name="email" placeholder="Email" v-model.trim="model.email" @input="$v.model.email.$touch()">
                        <template v-if="$v.model.email.$dirty">
                            <small class="help-block" v-if="!$v.model.email.required">Field is required.</small>
                            <small class="help-block" v-if="!$v.model.email.email">A valid email address is required.</small>
                        </template>
                    </div>

                    <!-- Password -->
                    <div class="form-group" :class="requiredValidationClasses('password')">
                        <label class="control-label" for="password">Password <required-asterisk></required-asterisk></label>
                        <input type="password" class="form-control" id="password" name="password" placeholder="Enter a password" v-model="model.password" @input="$v.model.password.$touch()" autocomplete="new-password">
                        <template v-if="$v.model.password.$dirty">
                            <small class="help-block" v-if="!$v.model.password.required">Field is required.</small>
                        </template>
                    </div>

                    <!-- Password Confirm -->
                    <div class="form-group" :class="requiredValidationClasses('password_confirmation')">
                        <label class="control-label" for="password_confirmation">Confirm Password <required-asterisk></required-asterisk></label>
                        <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" placeholder="Confirm the password" v-model="model.password_confirmation" @input="$v.model.password_confirmation.$touch()" autocomplete="new-password">
                        <template v-if="$v.model.password_confirmation.$dirty">
                            <small class="help-block" v-if="!$v.model.password_confirmation.required">Field is required.</small>
                            <small class="help-block" v-if="!$v.model.password_confirmation.sameAsPassword">The passwords you entered don't match.</small>
                        </template>
                    </div>

                    <button class="btn btn-lg btn-success" type="submit" :disabled="$v.model.$invalid"><i class="fa fa-save"></i> Save</button>
                    <a class="btn btn-link" @click.stop="$router.back()">Cancel</a>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { alpha, email, minLength, numeric, required, sameAs } from 'vuelidate/lib/validators'
    import { mapGetters, mapActions } from 'vuex'
    import { dataGet, defined, has } from '../../common'
    import { blankAdvocate } from '../../factory'
    import RequiredAsterisk from '../../components/RequiredAsterisk.vue'

    export default {
        name: 'advocate-add',

        components: {
            RequiredAsterisk,
        },

        data() {
            return {
                model: blankAdvocate(),
            }
        },

        validations() {
            return {
                model: {
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
            }
        },

        // Hooks
        beforeRouteLeave(to, from, next) {
            this.reset()
            next()
        },

        methods: {
            ...mapActions('advocates', [
                'create',
            ]),

            process() {
                const data = {
                    data: this.model,
                }

                this.create(data)
                    .then(created => {
                        this.addMessage('Successfully added ' + created.first_name + ' ' + created.last_name + '.')
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

            requiredValidationClasses(field) {
                const $validation = dataGet(this.$v.model, field)
                if (defined($validation)) {
                    return {
                        'has-success': !$validation.$invalid,
                        'has-warning': $validation.$invalid,
                    }
                }
            },

            reset() {
                this.resetData()
                this.$v.$reset()
            },

            resetData() {
                this.model = blankAdvocate()
            },
        },
    }
</script>