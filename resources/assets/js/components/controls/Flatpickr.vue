<template>
    <div class="has-feedback">
        <input type="text" class="flatpickr form-control" :id="id" ref="date" aria-describedby="calendarIcon" :value="value">
        <i class="fa fa-calendar form-control-feedback" aria-hidden="true"></i>
        <span id="calendarIcon" class="sr-only">(calendar)</span>
    </div>
</template>

<script>
    import flatpickr from 'flatpickr'
    import moment from 'moment'
    import { required } from 'vuelidate/lib/validators'
    import { formattedDatetime } from '../../common'
    import { MOMENT_DATETIME_FORMAT } from '../../factory'

    export default {

        props: ['id', 'config', 'value', 'enableTime', 'start', 'end'],
        computed: {
            getDefaultConfig() {
                return this.defaultConfig()
            }
        },

        mounted() {
            // console.log('enableTime', this.enableTime)
            flatpickr(this.$refs.date, this.buildConfig())
        },

        // Hooks
        updated() {
            // Todo: figure out a better way to handle this
            flatpickr(this.$refs.date, this.buildConfig())
        },

        watch: {
            value(value) {
                // console.log('flatpickr: value', value)
                if (value) {
                    this.$refs.date._flatpickr.setDate(value)
                }
            },

            start(value) {
                // console.log('flatpickr: start')
                if (value) {
                    this.$refs.date._flatpickr.set('minDate', value)
                }
            },

            end(value) {
                // console.log('flatpickr: end')
                if (value) {
                    value = (value === 'now') ? this.defaultDate() : value
                    this.$refs.date._flatpickr.set('maxDate', value)
                }
            }
        },

        methods: {
            buildConfig() {
                const config = { ...this.defaultConfig(), ...this.config }

                config.onChange = (selectedDates, dateStr, instance) => {
                    // console.log('Date is changing', selectedDates, dateStr, instance)
                    if (selectedDates.length) {
                        const selected = instance.parseDate(dateStr, instance.config.dateFormat)
                        this.select(instance.formatDate(selected, instance.config.dateFormat))
                    } /*else {
                        this.select('')
                    }*/
                }

                config.onClose = (selectedDates, dateStr, instance) => {
                    // console.log('Calendar is closing', selectedDates)
                    if (!selectedDates.length) {
                        this.select('')
                    }
                }

                if (this.value) {
                    config.defaultDate = this.value
                }

                if (this.start) {
                    config.minDate = this.start
                }

                if (this.end) {
                    config.maxDate = (this.end === 'now') ? this.defaultDate() : this.end
                }

                if (this.enableTime) {
                    config.enableTime = true
                }

                return config
            },
            defaultConfig() {
                let altFormat = 'm/d/Y'
                let dateFormat = 'Y-m-d'
                if (this.enableTime) {
                    altFormat += ' h:i K'
                    dateFormat += ' H:i:S'
                }
                const config = {
                    altFormat,
                    altInput: true,
                    // altInputClass: 'test',
                    // allowInput: true,
                    enableTime: this.enableTime,
                    dateFormat,
                }

                return config
            },

            defaultDate() {
                return moment().format('YYYY-MM-DD HH:mm:ss')
            },


            select(value) {
                this.$emit('input', value)
            },
        },
    }
</script>
