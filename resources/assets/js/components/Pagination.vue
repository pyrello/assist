<template>
    <div v-if="meta.current_page && meta.last_page && meta.last_page > 1">
        <ul class="pagination">
            <li v-if="!(meta.current_page === 1 || meta.last_page === 1)">
                <router-link :to="getPath()" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </router-link>
            </li>
            <li v-for="page in getPages" :class="{ active: page === meta.current_page }">
                <router-link :to="getPath()" :aria-label="page" v-if="page === 1">
                    {{ page }}
                </router-link>
                <router-link :to="getPath(page)" :aria-label="page" v-else>
                    {{ page }}
                </router-link>
            </li>
            <li v-if="!(meta.current_page === meta.last_page || meta.last_page === 1)">
                <router-link :to="getPath(meta.current_page+1)" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['meta', 'path'],

        computed: {
            getPages() {
                const pages = []
                for (let i = 1; i <= this.meta.last_page; i++) {
                    pages.push(i)
                }
                return pages
            },
        },

        methods: {
            getPath(page) {
                let path = this.$route.path
                if (page) {
                    path += '?page=' + Number(page)
                }
                return path
            },
        }
    }
</script>