<template>
    <div>
        <div class="form-group">
            <label class="control-label">Models</label>
            <select>
                <option v-for="info in all">{{ info.class }}</option>
            </select>
        </div>
        <div class="form-group">
            <label class="control-label">Models</label>
            <select>
                <option v-for="info in all">{{ info.class }}</option>
            </select>
        </div>
        <pre>{{ all }}</pre>
        <!--<grid :fields="fields" :data="all" :fetching="fetching">-->
            <!--&lt;!&ndash;<template slot="label" scope="props">&ndash;&gt;-->
                <!--&lt;!&ndash;<router-link :to="'/reporting/reports/'+props.item.id">{{ props.item.label }}</router-link>&ndash;&gt;-->
            <!--&lt;!&ndash;</template>&ndash;&gt;-->
            <!--<template slot="actions" slot-scope="props">-->
                <!--<div class="table-button-container">-->
                    <!--<button class="btn btn-danger btn-xs" @click="confirmDelete(props.item.id)"><i class="fa fa-remove"></i> Delete</button>&nbsp;&nbsp;-->
                <!--</div>-->
            <!--</template>-->
        <!--</grid>-->
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters('models', ['all', 'fetching'])
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
            ...mapActions('models', ['fetch']),
        },
    }
</script>