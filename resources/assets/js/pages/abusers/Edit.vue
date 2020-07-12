<template>
    <div class="overlay-background">
        <div class="overlay">
            <header class="overlay-header">
                <div class="header-actions pull-right">
                    <button type="button" class="close" @click.stop="$router.back()" aria-label="Close"><i class="fa fa-close"></i> <span class="hidden-xs">Cancel</span></button>
                </div>
                <h1>Editing <em>{{ abuser.first_name }} {{ abuser.last_name }}</em></h1>
            </header>
            <div class="section">
                <form role="form" @submit.prevent="process" v-if="abuser">

                    <abuser-form v-model="abuser"></abuser-form>

                    <!--<p v-if="$v.abuser.$invalid">-->
                        <!--<span class="text-warning">* Please ensure all fields are filled out correctly to proceed.</span>-->
                    <!--</p>-->

                    <button type="submit" class="btn btn-primary btn-lg" :disabled="abuser && !abuser.isDirty()"><i class="fa fa-save"></i> Save</button>
                    <a class="btn btn-link" @click.stop="$router.back()">Cancel</a>
                </form>
                <div class="lead" v-else><i class="fa fa-refresh fa-spin"></i> Loading abuser</div>
                <!--<pre>{{ $data }}</pre>-->
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import { defined } from '../../common'
    import AbuserForm from '../../components/forms/AbuserFormPartial'
    import InitAbuser from '../../mixins/initAbuser'

    export default {

        name: 'abuser-edit',

        components: {
            AbuserForm,
        },

        mixins: [ InitAbuser ],

        computed: {
            ...mapGetters('eyeColors', {
                eyeColors: 'all',
            }),
            ...mapGetters('hairColors', {
                hairColors: 'all',
            }),
            ...mapGetters('hairLengths', {
                hairLengths: 'all',
            }),

            heights() {
                const heights = []
                for (let $i = 54; $i <= 90; $i++) {
                    heights.push($i);
                }

                return heights
            }
        },

        // Hooks
        created() {
            this.init()
        },

        // Watchers
        watch: {
            abuserData() {
                // Reset the model to prevent previous data
                // from hanging around
                this.reset()
                this.abuser.assign(this.abuserData)
            },
            ['params.abuser_id']() {
                this.init()
            },
        },

        methods: {
            ...mapActions('abusers', ['update']),

            init() {
                this.fetchCurrentAbuser()
            },

            process() {
                if (!this.abuser.isDirty()) {
                    window.scrollTo(0, 0)
                    return this.addMessage({
                        text: 'No changes have been made. Please make any changes and try your submission again.',
                        type: 'warning',
                        sticky: 1,
                    })
                }

                // if (this.$v.abuser.$invalid) {
                //     window.scrollTo(0, 0)
                //     return this.addMessage({
                //         text: 'The form contains errors. Please ensure that all fields are filled out correctly and try your submission again.',
                //         type: 'danger',
                //         sticky: 1,
                //     })
                // }

                const data = {
                    id: this.abuser.id,
                    data: this.abuser.changed,
                }

                this.update(data)
                    .then(updated => {
                        this.addMessage('Successfully updated ' + updated.first_name + ' ' + updated.last_name)
                        this.$router.push('/abusers/'+updated.id)
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
                // this.$v.$reset()
            },
        },
    }
</script>
