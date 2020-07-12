<template>
    <div v-if="meta && meta.from && meta.to && meta.total">
        Showing {{ meta.from }} - {{ meta.to }} of {{ meta.total }}
    </div>
</template>

<script>
    export default {
        props: ['meta'],
    }
</script>