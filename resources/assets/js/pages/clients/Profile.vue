<template>
    <div v-if="client">
        <h3 v-if="client.parent_id"><strong>Dependent of <client-link :client="parent" v-if="parent && parent.full_name"></client-link><small v-else> <i class="fas fa-spinner fa-spin"></i></small></strong></h3>
        <h4>Intake
            <small><router-link :to="'/intakes/' + client.intake_id">View <i class="fas fa-caret-right"></i></router-link></small>
        </h4>
        <table class="table">
            <tbody>
            <tr v-if="client.intake">
                <th class="fit-content">Date</th>
                <td>{{ client.intake.date | prettyDatetime }}</td>
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
        <h4>Basic Info</h4>
        <table class="table">
            <tbody>
            <tr>
                <th class="fit-content">Gender</th>
                <td>{{ client.gender }}</td>
            </tr>
            <tr>
                <th class="fit-content">Ethnicity</th>
                <td>
                    <template v-for="ethnicity in client.ethnicity">
                        <span class="label label-info">{{ ethnicity.name }}</span>&nbsp;
                    </template>
                </td>
            </tr>
            <tr>
                <th class="fit-content">Date of Birth</th>
                <td><template v-if="client.birth_date">{{ client.birth_date | prettyDate }}</template><template v-else>Unknown</template></td>
            </tr>
            <tr>
                <th class="fit-content">Address</th>
                <td>
                    <address v-if="client.address">
                        <template v-if="client.address.street">{{ client.address.street }}<br></template>
                        <template v-if="client.address.apt">{{ client.address.apt }}<br></template>
                        <template v-if="client.address.city">{{ client.address.city }},</template>
                        <template v-if="client.address.county">{{ client.address.county }},</template>
                        <template v-if="client.address.state">{{ client.address.state }}</template>
                        <template v-if="client.address.zip">{{ client.address.zip }}</template>
                    </address>
                    <template v-else>Homeless</template>
                </td>
            </tr>
            </tbody>
        </table>
        <template v-if="client.household && !client.parent_id">

            <h4>Household</h4>
            <table class="table" v-if="client.household">
                <tbody>
                <tr>
                    <th class="fit-content">Size</th>
                    <td>{{ client.household.size }}</td>
                </tr>
                <tr>
                    <th class="fit-content">Annual Income</th>
                    <td>{{ client.household.annual_income }}</td>
                </tr>
                </tbody>
            </table>
        </template>
        <h4 class="panel-title">Phone Numbers</h4>
        <grid :data="client.phones" :fields="phoneFields">
            <template slot="primary" slot-scope="props">
                <i class="fas fa-check-circle fa-fw text-success" v-if="props.item.primary === 1"></i>
            </template>
            <template slot="number" slot-scope="props">
                {{ props.item.number | phone }}
            </template>
            <template slot="safe" slot-scope="props">
                <i class="fas fa-check-circle fa-fw text-success" v-if="props.item.safe === 1"></i>
                <i class="fas fa-times-circle fa-fw text-danger" v-else></i>
            </template>
            <template slot="actions" slot-scope="props">
                <div class="table-button-container">
                    <router-link class="btn btn-warning btn-xs" :to="'/clients/'+client.id+'/phones/'+props.item.id+'/edit'" v-if="client"><i class="fas fa-edit fa-fw"></i></router-link>
                    <button class="btn btn-danger btn-xs" @click="confirmDelete(props.item.id)" v-if="authUser.is_admin"><i class="fas fa-trash-alt fa-fw"></i></button>&nbsp;&nbsp;
                </div>
            </template>
        </grid>
        <router-link class="btn btn-primary btn-sm" to="phones/add"><i class="fas fa-mobile"></i> Add phone</router-link>
        <!--<pre>{{ client }}</pre>-->
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import InitClient from '../../mixins/initClient'

    export default {

        name: 'profile-client',

        mixins: [ InitClient ],

        data() {
            return {
                phoneFields: [
                    {
                        name: 'primary',
                        sortable: false,
                    },
                    'number',
                    {
                        name: 'ext',
                        sortable: false,
                    },
                    'type',
                    {
                        name: 'safe',
                        sortable: false,
                    },
                    {
                        name: 'actions',
                        titleClass: 'fit-content',
                        dataClass: 'fit-content',
                        sortable: false,
                    }
                ],
            }
        },

        computed: {
            ...mapGetters('advocates', {
                advocateById: 'byId',
            }),
            ...mapGetters('referralSources', {
                referralSourceById: 'byId',
            }),

            advocate() {
                if (this.client && this.client.intake) {
                    return this.advocateById(this.client.intake.advocate_id)
                }

                return null
            },

            referralSource() {
                if (this.client && this.client.intake) {
                    return this.referralSourceById(this.client.intake.referred_by_id)
                }
            },

            parent() {
                if (this.routeClient) {
                    return this.clientById(this.routeClient.parent_id)
                }

                return null
            }
        },

        // Hooks
       created() {
           this.init()
       },

        // Watchers
        watch: {
            routeClient() {
                if (!this.advocate || this.advocate.id !== this.client.advocate_id) {
                    this.fetchAdvocate({ params: { id: this.client.advocate_id }})
                }
            },
        },

        methods: {
            ...mapActions('advocates', {
                fetchAdvocate: 'fetch',
            }),

            ...mapActions('phones', {
                destroyPhone: 'destroy',
            }),

            routeClientFetched() {
                if (this.routeClient && this.routeClient.parent_id) {
                    this.fetchClient({ id: Number(this.routeClient.parent_id) })
                }
            },

            confirmDelete(id) {
                let c = confirm('Are you sure that you want to delete this phone?')

                if (c) {
                    this.destroyPhone({ id })
                        .then(() => {
                            this.addMessage('This phone has been deleted.')
                            this.fetchClient({ id: this.client.id })
                        })
                }
            },

            init() {
                // this.log('init')
                // this.fetchAdvocate()
                this.fetchCurrentClient()
            },
        },
    }
</script>

