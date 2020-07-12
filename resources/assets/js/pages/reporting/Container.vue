<template>
    <div>
        <header class="content-header">
            <!--<div class="header-actions pull-right hidden-xs hidden-sm desktop">-->
                <!--<add-button url="/reporting/reports/add" text="Add Report"></add-button>-->
            <!--</div>-->
            <h1>Reporting</h1>
            <!--<div class="header-actions hidden-md hidden-lg mobile">-->
                <!--<add-button url="/reporting/reports/add" text="Add Report"></add-button>-->
            <!--</div>-->
        </header>
        <div class="section">
            <nav>
                <ul class="nav nav-tabs">
                    <router-link role="presentation" to="reports" tag="li"><a href="incidents">Reports</a></router-link>
                    <router-link role="presentation" to="profiles" tag="li"><a href="profile">Profiles</a></router-link>
                </ul>
            </nav>
            <div class="tab-content">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters('reports', ['all', 'fetching'])
        },

        data() {
            return {
                fields: [
                    'label',
                    {
                        name: 'actions',
                        titleClass: 'fit-content',
                        dataClass: 'fit-content',
                    },
                ],
            }
        },

        created() {
            this.fetch()
        },

        methods: {
            ...mapActions('reports', ['fetch', 'destroy']),
        },
    }
</script>