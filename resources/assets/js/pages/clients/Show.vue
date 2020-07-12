<template>
    <div>
        <div v-if="client">
            <header class="content-header">
                <div class="header-actions pull-right hidden-sm hidden-xs desktop">
                    <router-link class="btn btn-primary" :to="'/clients/' + client.id + '/abuse/add'"><i class="fas fa-frown"></i> Add Abuser</router-link>
                    <router-link class="btn btn-primary" :to="'/clients/' + client.id + '/incidents/add'"><i class="fas fa-exclamation-triangle"></i> Add Incident</router-link>
                    <router-link class="btn btn-primary" :to="'/clients/' + client.id + '/activities/add'" v-if="client.last_incident_id"><i class="fas fa-clock"></i> Add Service Request</router-link>
                    <router-link class="btn btn-primary" :to="'/clients/' + client.id + '/outcomes/add'" v-if="client.last_incident_id"><i class="fas fa-smile"></i> Add Outcome</router-link>
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-ellipsis-h"></i>
                        </button>
                        <ul class="dropdown-menu pull-right">
                            <li role="presentation" v-if="!client.parent_id"><router-link :to="'/clients/' + client.id + '/dependents/add'"><i class="fas fa-child fa-fw"></i> Add Dependent</router-link></li>
                            <!--<li role="presentation"><router-link :to="'/clients/' + client.id + '/relationship/add'"><i class="fas fa-user-plus fa-fw"></i> Add Relationship</router-link></li>-->
                            <li role="presentation"><router-link :to="'/clients/' + client.id + '/notes/add'"><i class="fas fa-sticky-note fa-fw"></i> Add Note</router-link></li>
                            <li role="presentation"><router-link :to="'/clients/' + client.id + '/edit'"><i class="fas fa-edit fa-fw"></i> Edit</router-link></li>
                            <li role="presentation"><a href="#delete" @click="confirmDelete()" v-if="authUser.is_admin"><i class="fas fa-trash-alt fa-fw"></i> Delete</a></li>
                        </ul>
                    </div>
                </div>
                <h1><template v-if="!client.full_name">Loading client... </template><template v-else>{{ client.full_name }}<template v-if="client.parent_id"> (Dependent) </template></template> <small v-if="fetchingClient"><i class="fas fa-spinner fa-spin"></i></small></h1>
                <div class="header-actions hidden-md hidden-lg mobile">
                    <router-link class="btn btn-primary" :to="'/clients/' + client.id + '/abuse/add'"><i class="fas fa-frown"></i> Add Abuser</router-link>
                    <router-link class="btn btn-primary" :to="'/clients/' + client.id + '/incidents/add'"><i class="fas fa-exclamation-triangle"></i> Add Incident</router-link>
                    <router-link class="btn btn-primary" :to="'/clients/' + client.id + '/activities/add'" v-if="client.last_incident_id"><i class="fas fa-clock"></i> Add Service Request</router-link>
                    <router-link class="btn btn-primary" :to="'/clients/' + client.id + '/outcomes/add'" v-if="client.last_incident_id"><i class="fas fa-smile"></i> Add Outcome</router-link>
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-ellipsis-h"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li role="presentation" v-if="!client.parent_id"><router-link :to="'/clients/' + client.id + '/dependents/add'"><i class="fas fa-child fa-fw"></i> Add Dependent</router-link></li>
                            <!--<li role="presentation"><router-link :to="'/clients/' + client.id + '/relationship/add'"><i class="fas fa-user-plus fa-fw"></i> Add Relationship</router-link></li>-->
                            <li role="presentation"><router-link :to="'/clients/' + client.id + '/notes/add'"><i class="fas fa-sticky-note fa-fw"></i> Add Note</router-link></li>
                            <li role="presentation"><router-link :to="'/clients/' + client.id + '/edit'"><i class="fas fa-edit fa-fw"></i> Edit</router-link></li>
                            <li role="presentation"><a href="#delete" @click="confirmDelete(client.id)" v-if="authUser.is_admin"><i class="fas fa-trash-alt fa-fw"></i> Delete</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class="section">
                <nav>
                    <ul class="nav nav-tabs">
                        <router-link role="presentation" :to="'/clients/' + client.id + '/profile'" tag="li"><a href="profile">Info</a></router-link>
                        <router-link role="presentation" :to="'/clients/' + client.id + '/dependents'" tag="li" v-if="!client.parent_id"><a href="dependents">Dependents</a></router-link>
                        <router-link role="presentation" :to="'/clients/' + client.id + '/abuse'" tag="li"><a :href="'/clients/'+client.id + 'abusers'">Abusers</a></router-link>
                        <router-link role="presentation" :to="'/clients/' + client.id + '/incidents'" tag="li"><a href="incidents">Incidents</a></router-link>
                        <router-link role="presentation" :to="'/clients/' + client.id + '/activities'" tag="li" v-if="client.last_incident_id"><a href="activities">Activities</a></router-link>
                        <router-link role="presentation" :to="'/clients/' + client.id + '/outcomes'" tag="li" v-if="client.last_incident_id"><a href="activities">Outcomes</a></router-link>
                        <router-link role="presentation" :to="'/clients/' + client.id + '/household'" tag="li" v-if="client.household_size > 1"><a href="household">Household</a></router-link>
                        <router-link role="presentation" :to="'/clients/' + client.id + '/notes'" tag="li"><a href="notes">Notes</a></router-link>
                    </ul>
                </nav>
                <div class="tab-content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div v-else class="lead section">
            <i class="fas fa-spinner fa-spin"></i> Loading client
        </div>
        <div class="section">
            <!--<pre>{{ { routeClient } }}</pre>-->
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import InitClient from '../../mixins/initClient'

    export default {

        name: 'client-show',

        mixins: [ InitClient ],

        // Hooks
        created() {
            this.init()
        },

        // watch: {
        //     '$route'() {
        //         this.log('watch:$route')
        //         this.init()
        //     },
        // },

        methods: {
            ...mapActions('clients', ['destroy']),
            confirmDelete() {
                const name = this.clientData.full_name
                let c = confirm('Are you sure that you want to delete the client, ' + name + '?')

                if (c) {
                    this.destroy({ id: this.clientData.id })
                        .then(() => {
                            this.addMessage(name + ' has been deleted.')
                            this.$router.push('/clients')
                        })
                }
            },

            init() {
                // this.log('init')
                this.fetchRouteClient()
            },
        },
    }
</script>

<style>

</style>
