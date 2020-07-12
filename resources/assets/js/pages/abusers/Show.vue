<template>
    <div>
        <div v-if="abuser">
            <header class="content-header">
                <div class="header-actions pull-right hidden-sm hidden-xs desktop">
                    <div class="btn-group pull-right">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-ellipsis-h"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li role="presentation"><router-link :to="'/abusers/' + abuser.id + '/edit'"><i class="fas fa-edit fa-fw"></i> Edit</router-link></li>
                            <li role="presentation"><a href="#delete" @click.prevent="confirmDelete()" v-if="authUser.is_admin"><i class="fas fa-trash-alt fa-fw"></i> Delete</a></li>
                        </ul>
                    </div>
                </div>
                <h1>{{ abuser.first_name }} {{ abuser.last_name }}</h1>
                <div class="header-actions hidden-md hidden-lg mobile">
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-ellipsis-h"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li role="presentation"><router-link :to="'/abusers/' + abuser.id + '/edit'"><i class="fas fa-edit fa-fw"></i> Edit</router-link></li>
                            <li role="presentation"><a href="#delete" @click.prevent="confirmDelete()" v-if="authUser.is_admin"><i class="fas fa-trash-alt fa-fw"></i> Delete</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class="section">
                <nav>
                    <ul class="nav nav-tabs">
                        <router-link role="presentation" :to="'/abusers/' + abuser.id + '/profile'" tag="li"><a href="profile">Info</a></router-link>
                        <router-link role="presentation" :to="'/abusers/' + abuser.id + '/clients'" tag="li"><a href="dependents">Clients</a></router-link>
                    </ul>
                </nav>
                <div class="tab-content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div v-else class="lead section">
            <i class="fa fa-refresh fa-spin"></i> Loading abuser
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import InitAbuser from '../../mixins/initAbuser'

    export default {

        name: 'abuser-show',

        mixins: [ InitAbuser ],

        created() {
            this.init()
        },

        // Watchers
        watch: {
            '$route': 'init',
        },

        methods: {
            ...mapActions('abusers', ['destroy']),
            confirmDelete() {
                const name = this.abuser.full_name
                let c = confirm('Are you sure that you want to delete the abuser, ' + name + '?')

                if (c) {
                    this.destroy({ id: this.abuser.id })
                        .then(() => {
                            this.addMessage(name + ' has been deleted.')
                            this.$router.push('/abusers')
                        })
                }
            },

            init() {
                this.fetchCurrentAbuser()
            },
        },
    }
</script>