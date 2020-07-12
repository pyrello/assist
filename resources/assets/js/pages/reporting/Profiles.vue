<template>
    <div>
        <grid :fields="fields" :data="all" :fetching="fetching">
            <!--<template slot="label" scope="props">-->
                <!--<router-link :to="'/reporting/reports/'+props.item.id">{{ props.item.label }}</router-link>-->
            <!--</template>-->
            <template slot="actions" slot-scope="props">
                <div class="table-button-container">
                    <button class="btn btn-danger btn-xs" @click="confirmDelete(props.item.id)"><i class="fa fa-remove"></i> Delete</button>&nbsp;&nbsp;
                </div>
            </template>
        </grid>
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
                    'label',
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
            // console.log('fetching profiles')
            this.fetch()
        },

        methods: {
            ...mapActions('profiles', ['fetch', 'destroy']),
        },
    }
</script>