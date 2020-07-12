<template>
    <div v-if="intake">
        <header class="content-header">
            <h1>Intake {{ intake.date | prettyDate }}<template v-if="intake.id"> ({{ intake.id }})</template></h1>
        </header>
        <div class="section">
            <h4>Intake Info</h4>
            <table class="table">
                <tbody>
                <tr>
                    <th class="fit-content">Date</th>
                    <td>{{ intake.date | prettyDate }}</td>
                </tr>
                <tr v-if="advocate">
                    <th class="fit-content">Advocate</th>
                    <td>{{ advocate.full_name }}</td>
                </tr>
                <tr v-if="referralSource">
                    <th class="fit-content">Referred by</th>
                    <td>{{ referralSource.name }}</td>
                </tr>
                </tbody>
            </table>
            <h4>Client</h4>
            <table class="table">
                <tbody>
                <tr v-if="intake.client">
                    <th class="fit-content">Name</th>
                    <td><router-link :to="'/clients/' + intake.client.id">{{ intake.client.full_name }}</router-link></td>
                </tr>
                </tbody>
            </table>
            <!--<h4>Dependents</h4>-->
            <!--<table class="table">-->
                <!--<tbody>-->
                <!--<tr v-if="intake.client">-->
                    <!--<th class="fit-content">Relationship</th>-->
                    <!--<td><router-link :to="'/clients/' + intake.client.id">{{ intake.client.full_name }}</router-link></td>-->
                <!--</tr>-->
                <!--</tbody>-->
            <!--</table>-->
            <h4>Abusers</h4>
            <table class="table">
                <thead>
                <tr v-if="intake.client">
                    <th class="fit-content">Relationship</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="relationship in intake.abuse_relationships">
                    <td>{{ relationship.relationship }}</td>
                    <td><router-link :to="'/abusers/' + relationship.abuser_id">{{ relationship.abuser.full_name }}</router-link></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import InitIntake from '../../mixins/initIntake'

    export default {

        name: 'intake-show',

        mixins: [ InitIntake ],

        computed: {
            ...mapGetters('advocates', {
                advocateById: 'byId',
            }),
            ...mapGetters('referralSources', {
                referralSourceById: 'byId',
            }),

            advocate() {
                if (this.intake && this.intake.advocate_id) {
                    return this.advocateById(this.intake.advocate_id)
                }

                return null
            },

            referralSource() {
                if (this.intake && this.intake.advocate_id) {
                    return this.referralSourceById(this.intake.referred_by_id)
                }

                return null
            },
        },

        created() {
            this.init()
        },

        // Watchers
        watch: {
            ['params.$route.intake_id']() {
                this.init()
            },
        },

        methods: {
            ...mapActions('intakes', ['destroy']),

            confirmDelete() {
                let c = confirm('Are you sure that you want to delete this intake?')

                if (c) {
                    this.destroy({ id: this.intake.id })
                        .then(() => {
                            this.addMessage('The intake has been deleted.')
                            this.$router.push('/intakes')
                        })
                }
            },

            init() {
                // console.log('intake_id', this.params.intake_id)
                this.fetchCurrentIntake()
                    .then(response => {
                        // console.log('response', response)
                        // console.log('intake', this.intakeData, this.intake)
                    })
            },
        },
    }
</script>