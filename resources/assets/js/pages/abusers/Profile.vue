<template>
    <div v-if="abuser">
        <h4>Basic Info</h4>
        <table class="table">
            <tbody>
            <tr>
                <th class="fit_content">Gender</th>
                <td>{{ abuser.gender }}</td>
            </tr>
            <tr>
                <th class="fit-content">Ethnicity</th>
                <td>
                    <template v-for="ethnicity in abuser.ethnicity">
                        <span class="label label-info">{{ ethnicity.name }}</span>&nbsp;
                    </template>
                </td>
            </tr>
            <tr>
                <th class="fit-content">Birth Date</th>
                <td><template v-if="abuser.birth_date">{{ abuser.birth_date | prettyDate }}</template><template v-else>Unknown</template></td>
            </tr>
            </tbody>
        </table>

        <h4>Physical Description</h4>
        <table class="table">
            <tbody>
            <tr>
                <th class="fit-content">Height</th>
                <td>{{ abuser.height | height }}</td>
            </tr>
            <tr>
                <th class="fit-content">Weight</th>
                <td>{{ abuser.weight }} lbs.</td>
            </tr>
            <tr>
                <th class="fit-content">Eye Color</th>
                <td>{{ abuser.eye_color }}</td>
            </tr>
            <tr>
                <th class="fit-content">Hair Color</th>
                <td>{{ abuser.hair_color }}</td>
            </tr>
            <tr>
                <th class="fit-content">Hair Length</th>
                <td>{{ abuser.hair_length }}</td>
            </tr>
            </tbody>
        </table>

        <h4>Other</h4>
        <table class="table">
            <tbody>
            <tr>
                <th class="fit-content">Identifying Features</th>
                <td v-html="$options.filters.markdown(abuser.identifying_features)" v-if="abuser.identifying_features"></td>
                <td v-else></td>
            </tr>
            <tr>
                <th class="fit-content">Vehicle</th>
                <td>{{ abuser.vehicle }}</td>
            </tr>
            </tbody>
        </table>
        <!--<pre>{{ abuser }}</pre>-->
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import InitAbuser from '../../mixins/initAbuser'

    export default {
        name: 'abuser-profile',

        mixins: [ InitAbuser ],

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
        },

        // Hooks
//        created() {
//
//            this.init()
//        },

        // Watchers
        watch: {
            client() {
                if (!this.advocate || this.advocate.id !== this.client.advocate_id) {
                    this.fetchAdvocate({ params: { id: this.client.advocate_id }})
                }
            }
        },

        methods: {
            ...mapActions('advocates', {
                fetchAdvocate: 'fetch',
            }),
            init() {
                this.fetchAdvocate()
            },
        },
    }
</script>

