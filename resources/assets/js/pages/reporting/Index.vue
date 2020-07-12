<template>
    <div>
        <grid :fields="fields" :data="all" :fetching="fetching">
            <template slot="label" slot-scope="props">
                <router-link :to="'/reporting/profiles/'+props.item.id">{{ props.item.label }}</router-link>
            </template>
            <template slot="actions" slot-scope="props">
                <div class="table-button-container">
                    <!--<a class="btn btn-warning btn-xs" :href="'/reports/'+props.item.id+'/download'"><i class="fa fa-download"></i> Download</a>-->
                    <button class="btn btn-danger btn-xs" @click="confirmDelete(props.item.id)" v-if="authUser.is_admin"><i class="fas fa-trash-alt fa-fw"></i> Delete</button>&nbsp;&nbsp;
                </div>
            </template>
        </grid>
        <!--<pre>{{ all }}</pre>-->
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters('profiles', ['all', 'fetching'])
        },

        data() {
            return {
                fields: [
                    {
                        name: 'label',
                        title: 'Name',
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

        created() {
            this.fetch()
        },

        methods: {
            ...mapActions('profiles', ['fetch', 'destroy']),
        },
    }
</script>