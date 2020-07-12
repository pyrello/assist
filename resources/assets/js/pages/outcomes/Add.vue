<template>
    <div class="overlay-background">
        <div class="overlay">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Add Outcome</h1>
            </header>

            <div class="section">
                <form role="form" @submit.prevent="process">
                    <div class="form-group" :class="controlClasses('description')">
                        <label class="control-label" for="description">Description</label>
                        <input type="text" id="description" class="form-control" placeholder="Write a description of the outcome..." autofocus v-model="model.description" ref="focus">
                    </div>

                    <div class="checkbox">
                        <label><input type="checkbox" id="active" v-model.trim="model.active" v-bind:true-value="1" v-bind:false-value="0"> Active</label>
                        <small class="help-block">Whether the outcome is currently being used or not</small>
                    </div>

                    <p v-if="$v.model.$invalid">
                        <span class="text-warning">* Please ensure all fields are filled out correctly to proceed.</span>
                    </p>

                    <button type="submit" class="btn btn-primary btn-lg" :disabled="$v.model.$invalid">Save</button>
                    <a class="btn btn-link" @click="$router.back()"> Cancel</a>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators'
    import { mapActions } from 'vuex'
    import RequiredAsterisk from '../../components/RequiredAsterisk.vue'
    import ValidationClasses from '../../mixins/validationClasses'
    import Outcome from '../../models/Outcome'

    export default {

        components: {
            RequiredAsterisk,
        },

        mixins: [ ValidationClasses ],

        data() {
            return {
                model: new Outcome(),
            }
        },

        validations: {
            model: {
                active: {
                    required,
                },
                description: {
                    required,
                },
            },
        },

        methods: {
            ...mapActions('outcomes', ['create']),

            process() {
                if (!this.$v.model.$invalid) {
                    const data = {
                        data: this.model,
                    }
                    this.create(data)
                        .then(() => {
                            this.addMessage('Successfully added outcome.')
                            this.$router.push('/outcomes')
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
        },
    }
</script>