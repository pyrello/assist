import { dataDelete, dataGet, dataSet, defined, equalOrEmpty } from '../common'

export default {
    data() {
        return {
            changed: [],
            updated: {},
        }
    },

    watch: {
        updated(item) {
            // Todo: implement addition to changed array when updated is altered
        }
    },

    methods: {
        isChanged(key, to, from) {
            console.log('isChanged', key, to, from)
            let check = dataGet(to, key),
                against = dataGet(from, key)

            console.log('check', check, 'against', against)

            if (defined(check) || defined(against)) {

                // Value is not empty and has changed
                console.log('not equal or null', check, against, !equalOrEmpty(check, against))
                return !equalOrEmpty(check, against)
            }

            return false
        },

        updateIfChanged(event, model, original) {
            console.log('event', event)
            let key
            if (typeof event === 'string') {
                key = event
            } else {
                key = event.target.id
            }

            if (key) {
//                    console.log('updateIfChanged', key)
                if (this.isChanged(key, model, original)) {
//                    console.log('adding to updated', key)
                    let newVal = dataGet(model, key)
//                    console.log('newVal', newVal)
                    dataSet(this.updated, key, newVal)
                } else {
//                    console.log('deleting from updated')
                    dataDelete(this.updated, key)
                }
            }
        },
    },
}