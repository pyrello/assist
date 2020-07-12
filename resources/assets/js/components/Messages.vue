<template>
    <div class="messages">
        <message v-for="message in messages" :message="message" :key="message.id"></message>
    </div>
</template>

<script>
    import Message from './Message.vue'

    export default {
        components: {
            Message,
        },

        props: ['messages']
    }
</script>