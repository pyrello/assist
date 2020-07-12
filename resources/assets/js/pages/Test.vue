<template>
    <div>
        <!--<pre>{{ results }}</pre>-->
    </div>
</template>

<script>
    import axios from 'axios'
    import Client from '../models/Client'
    import TestWidget from '../components/TestWidget'
    import { stringifyObject } from '../common'

    export default {

        components: {
            TestWidget
        },

        data() {
            return {
                // model: new ModelNew(),
                results: {
                    puzzles: {
                        pieces: 500,
                        1000: 'never enough',
                    },
                    test: 'Donkey',
                    soapstone: {
                        have: 'not',
                        orange: 'pop',
                        ace: 'up my sleeve',
                    },
                    dentist: [
                        {
                            pain: 'no thanks',
                            discomfort: 'not for me',
                            rating: 0,
                        },
                        'anger',
                    ]
                },
            }
        },

        computed: {
            page() {
                return this.$route && this.$route.query && this.$route.query.page || 1
            },
        },

        // models: {
        //     client: {
        //         model: 'clients',
        //         store: 'clients',
        //         endpoint: 'clients',
        //         param: 'client_id',
        //         modelClass: Client,
        //     }
        // },
    }
</script>