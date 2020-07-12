<template>
    <div class="checkbox checkbox-slider--b-flat">
        <label>
            <input type="checkbox" :value="value" :checked="value" @change="select"><span><slot>{{ label }}</slot></span>
        </label>
    </div>
</template>

<script>
    export default {

        name: 'checkbox-slider',

        props: {
            label: {
                type: String,
                required: true,
            },
            value: [Boolean, Number, String],
        },

        methods: {
            select(event) {
                this.$emit('input', !!event.target.checked)
            },
        },

    }
</script>