<template>
    <div>
        <header class="content-header">
            <div class="header-actions pull-right hidden-sm hidden-xs desktop">
                <router-link class="btn btn-success" :to="'/outcomes/add'"><i class="fas fa-smile"></i> Add Outcome</router-link>
            </div>
            <h1>Outcomes</h1>
            <div class="header-actions hidden-md hidden-lg mobile">
                <router-link class="btn btn-success" :to="'/outcomes/add'"><i class="fas fa-smile"></i> Add Outcome</router-link>
            </div>
        </header>
        <grid class="section" :fields="fields" :data="all" :fetching="fetching">
            <template slot="services" slot-scope="props">
                <template v-for="(item, index) in props.item.services" v-if="props.item.services">
                    {{ item.name }}<template v-if="props.item.services.length-1 > index">, <br></template>
                </template>
            </template>
            <template slot="actions" slot-scope="props">
                <div class="table-button-container">
                    <router-link class="btn btn-warning btn-xs" :to="'/outcomes/'+props.item.id+'/edit'"><i class="fas fa-edit fa-fw"></i> Edit</router-link>
                    <button class="btn btn-danger btn-xs" @click="confirmDelete(props.item.id)" v-if="authUser.is_admin"><i class="fas fa-trash-alt fa-fw"></i> Delete</button>&nbsp;&nbsp;
                </div>
            </template>
            <template slot="active" slot-scope="props">
                <i class="fa fa-check-circle-o text-success" v-if="props.item.active === 1"></i>
                <i class="fa fa-times-circle-o text-danger" v-else></i>
            </template>
        </grid>
        <router-view></router-view>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {

        data() {
            return {
                fields: [
                    'description',
//                    {
//                        name: 'services',
//                        title: 'Services',
//                    },
                    {
                        name: 'active',
                        dataClass: 'text-center',
                        titleClass: 'text-center',
                    },
                    {
                        name: 'actions',
                        titleClass: 'fit-content',
                        dataClass: 'fit-content',
                        sortable: false,
                    },
                ],
            }
        },

        computed: {
            ...mapGetters('outcomes', ['all', 'fetching'])
        },

        // Hooks
        mounted() {
            this.clearFilters()
            this.fetch()
        },

        methods: {
            ...mapActions('outcomes', ['destroy', 'fetch', 'clearFilters']),

            confirmDelete(id) {
                let c = confirm('Are you sure that you want to delete this outcome?')
                if (c) {
                    this.destroy({ id })
                            .then(() => {
                                this.addMessage({
                                    text: 'The outcome has been deleted.',
                                    type: 'success',
                                })
                            })
                }
            },
        },
    }
</script>