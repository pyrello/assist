export default {
    created() {
        this.log('created')
    },
    activated() {
        this.log('activated')
    },
    beforeRouteUpdate(to, from, next) {
        this.log('beforeRouteUpdate')
        next()
    },
    deactivated() {
        this.log('deactivated')
    },
    updated() {
        this.log('updated')
    },
    destroyed() {
        this.log('destroyed')
    },
    methods: {
        log(...messages) {
            const items = []
            if (this.$options.name) {
                const doNotLog = [
                    'grid',
                    'router-link',
                ]
                if (doNotLog.indexOf(this.$options.name) > -1) {
                    return false
                }
                items.push(`[${this.$options.name}]`)
            }
            console.log(...items, ...messages)
        }
    },
}