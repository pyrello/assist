<template>
    <ul>
        <li v-for="item in list">{{ item.value }}</li>
    </ul>
</template>

<script>
    export default {
        props: ['list']
    }
</script>