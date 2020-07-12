<template>
    <router-link :to="url" class="btn btn-primary" :class="{ right: 'pull-right' }"><i class="fa fa-plus"></i> {{ text }}</router-link>
</template>

<script>
    export default {
        name: 'add-button',
        props: {
            url: String,
            right: {
                type: Boolean,
                default: false,
            },
            text: {
                type: String,
                default: 'New',
            }
        }
    }
</script>