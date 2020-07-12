<template>
    <div class="message alert" :class="'alert-'+message.type">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true"><i class="fa fa-times"></i></span>
        </button>
        {{ message.text }}
    </div>
</template>

<script>
    export default {
        props: ['message'],
    }
</script>