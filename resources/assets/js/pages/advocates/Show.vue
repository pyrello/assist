 <template>
    <div>
        <header class="content-header" v-if="advocate">
            <div class="header-actions pull-right hidden-xs hidden-sm desktop">
                <div class="btn-group pull-right">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-ellipsis-h"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li role="presentation"><router-link :to="'/advocates/'+advocate.id+'/edit'"><i class="fa fa-edit"></i> Edit</router-link></li>
                        <li role="presentation"><a href="#delete" @click="confirmDelete(advocate.id)"><i class="fa fa-remove"></i> Delete</a></li>
                    </ul>
                </div>
            </div>
            <h1>{{ advocate.first_name }} {{ advocate.last_name }}</h1>
        </header>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import InitAdvocate from '../../mixins/initAdvocate'

    export default {

        name: 'advocate-show',

       mixins: [ InitAdvocate ],

        created() {
            this.init()
        },

        methods: {
            init() {
                this.fetchCurrentAdvocate()
            },
        }
    }
</script>

