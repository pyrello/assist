<template>
    <div class="overlay-background">
        <div class="overlay">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Edit Outcome</h1>
            </header>

            <div class="section">
                <form role="form" @submit.prevent="process" @keyup="fieldChanged" @change="fieldChanged">
                    <div class="form-group" :class="requiredValidationClasses('description')">
                        <label class="control-label" for="description">Description</label>
                        <input type="text" id="description" class="form-control" placeholder="Write a description of the outcome..." autofocus v-model="model.description" ref="focus">
                    </div>

                    <div class="checkbox">
                        <label><input type="checkbox" id="active" v-model.trim="model.active" v-bind:true-value="1" v-bind:false-value="0"> Active</label>
                        <small class="help-block">Whether the outcome is currently being used or not</small>
                    </div>

                    <button type="submit" class="btn btn-primary btn-lg">Save</button>
                    <a class="btn btn-link" @click="$router.back()"> Cancel</a>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators'
    import { mapActions, mapGetters } from 'vuex'
    import { defined } from '../../common'
    import RequiredAsterisk from '../../components/RequiredAsterisk.vue'
    import InitOutcome from '../../mixins/initOutcome'

    export default {

        name: 'outcome-edit',

        components: {
            RequiredAsterisk,
        },

        mixins: [ InitOutcome ],

        computed: {
            ...mapGetters('outcomes', {
                fetching: 'fetching',
                byId: 'byId'
            }),

            outcome() {
                return this.byId(this.$route.params.id)
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

        // Hooks
        created() {
            this.init()
        },

        beforeRouteUpdate(to, from, next) {
            this.init()
            next()
        },

        beforeRouteLeave(to, from, next) {
            this.reset()
            next()
        },

        methods: {
            ...mapActions('outcomes', ['fetch', 'update']),

            init() {
                const id = this.$route.params.id
                this.fetch({ id })
            },

            process() {
                const data = {
                    data: this.updated,
                    params: {
                        id: this.outcome.id,
                    }
                }

                this.update(data)
                    .then(() => {
                        this.addMessage('Successfully updated outcome.')
                        this.$router.push('/outcomes')
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