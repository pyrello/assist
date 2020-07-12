<template>
    <input type="text" :id="id" v-model="localValue" ref="phone" v-mask="'(###) ###-####'" @input="select($event.target.value)" placeholder="(319) 555-5555">
</template>

<script>
    import { VueMaskDirective } from 'v-mask'

    export default {

        name: 'phone-input',

        directives: {
            VueMaskDirective,
        },

        props: ['id', 'value'],

        data() {
            return {
                localValue: null,
                previousValue: '',
            }
        },

        activated() {
            this.localValue = null
        },

        watch: {
            value() {
                if (this.localValue === null) {
                    this.localValue = this.value
                }
            }
        },

        methods: {
            select(value) {
                const unmasked = value.replace(/\D+/g, '')
                this.$emit('input', unmasked)
            },
        },
    }
</script>