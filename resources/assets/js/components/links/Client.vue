<template>
    <router-link :to="'/clients/' + client.id" v-if="client">{{ client.full_name }}</router-link>
</template>

<script>
    export default {
        props: ['client'],
    }
</script>