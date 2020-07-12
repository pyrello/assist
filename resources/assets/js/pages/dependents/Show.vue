<template>
    <div>
        <div v-if="dependent">
            <header class="content-header">
                <div class="header-actions pull-right hidden-sm hidden-xs desktop">
                    <div class="btn-group pull-right">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-ellipsis-h"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li role="presentation"><router-link :to="'/dependents/' + dependent.id + '/edit'"><i class="fas fa-edit"></i> Edit</router-link></li>
                            <li role="presentation" v-if="authUser.is_admin"><a href="#delete" @click.prevent="confirmDelete(incident.id)"><i class="fas fa-trash"></i> Delete</a></li>
                        </ul>
                    </div>
                </div>
                <h1>{{ dependent.name }} (Dependent)</h1>
                <div class="header-actions hidden-md hidden-lg mobile">
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-ellipsis-h"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li role="presentation"><router-link :to="'/dependents/' + dependent.id + '/edit'"><i class="fas fa-edit"></i> Edit</router-link></li>
                            <li role="presentation" v-if="authUser.is_admin"><a href="#delete" @click.prevent="confirmDelete(incident.id)"><i class="fas fa-trash"></i> Delete</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class="section">
                <table class="table">
                    <tbody>
                    <tr>
                        <th class="fit-content">Client</th>
                        <td><client-link :client="client"></client-link></td>
                    </tr>
                    <tr>
                        <th class="fit-content">Gender</th>
                        <td>{{ dependent.gender }}</td>
                    </tr>
                    <tr>
                        <th class="fit-content">Ethnicity</th>
                        <td>
                            <template v-for="ethnicity in dependent.ethnicity">
                                <span class="label label-info">{{ ethnicity.name }}</span>&nbsp;
                            </template>
                        </td>
                    </tr>
                    <tr>
                        <th class="fit-content">Birth Date</th>
                        <td>{{ dependent.birth_date | prettyDate }}</td>
                    </tr>
                    <tr>
                        <th class="fit-content">Housing Status</th>
                        <td>{{ dependent.housing_status }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-else class="lead section">
            <i class="fa fa-refresh fa-spin"></i> Loading data
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import Notes from '../../components/notes/List'
    import InitClient from '../../mixins/initClient'
    import InitDependent from '../../mixins/initDependent'

    export default {

        name: 'dependent-show',

        mixins: [ InitClient, InitDependent ],

        components: {
            Notes,
        },

        created() {
            this.init()
        },

        beforeRouteLeave(to, from, next) {
            this.reset()
            next()
        },

        // Watchers
        watch: {
            ['params.client_id']() {
                // console.log('params.client_id is changing', this.params.client_id)
                if (!isNaN(this.params.client_id)) {
                    this.fetchCurrentClient()
                }
            },
        },

        methods: {
            ...mapActions('dependents', [
                'destroy',
            ]),

            confirmDelete(id) {
                let c = confirm('Are you sure that you want to delete this dependent?')

                if (c) {
                    const client_id = this.dependent.client_id
                    this.destroy({ id })
                        .then(() => {
                            this.addMessage('This incident has been deleted.')
                            this.$router.push('/clients/' + client_id)
                        })
                }
            },

            init() {
                this.fetchCurrentDependent()
                    .then(() => {
                        // console.log('Fetched current dependent')
                        this.$set(this.params, 'client_id', this.dependentData.client_id)
                    })
            },
        },
    }
</script>

