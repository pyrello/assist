import _ from 'lodash'
import Vue from 'vue'
import { copy, dataDelete, dataGet, dataSet, defined, equalOrEmpty, has } from '../../common'
// import store from '../vue'

export default class Model {
    constructor(blank = {}, attributes = {}, store) {
        console.log('constructing model', blank, attributes)

        // Create attributes and original arrays
        Object.defineProperty(this, '_original', {
            configurable: true,
            writable: true,
            // Deep clone blank and attributes to
            // remove references
            value: copy(attributes, blank),
        })

        Object.defineProperty(this, '_attributes', {
            configurable: true,
            writable: true,
            // Deep clone original to remove references
            value: copy(this._original)
        })

        // Object.defineProperty(this, 'validation', {
        //     configurable: true,
        //     enumerable: true,
        //     writable: true,
        //     value: {
        //         ...validation,
        //     },
        // })

        this.changed = {}

        this.exists = !!(attributes.id)

        // Loop through keys of original data and
        // define top-level accessors for them to
        // provide reactive points
        Object.keys(this._original).forEach(key => {
            this._defineAttribute(key, { context: this })
        })

        console.log('Client', this)
    }

    fill(attributes, trackChanges = false) {
        console.log('filling model')
        if (!trackChanges) {
            this.exists = !!(attributes.id)
            copy(attributes, this._original)
        }
        copy(attributes, this)
    }

    handleChange(key, context) {
        if (!defined(context)) {
            context = this._attributes
        }
        console.log('handleChange', key, context)
        if (this.isChanging(key)) {
            console.log('Adding value to this.changed')
            let newVal = dataGet(context, key)
            dataSet(this.changed, key, newVal)
        } else {
            console.log('Removing value from this.changed')
            dataDelete(this.changed, key)
        }
    }

    isChanging(key) {
        console.log('isChanging', key)
        let check = dataGet(this._attributes, key),
            against = dataGet(this._original, key)

        console.log('check', check)
        console.log('against', check)

        if (defined(check) || defined(against)) {

            // Value is not empty and has changed
            console.log('not equal or null', check, against, !equalOrEmpty(check, against))
            return !equalOrEmpty(check, against)
        }

        return false
    }

    isDirty() {
        return Object.keys(this.changed).length > 0
    }

    update(attributes) {
        this.fill(attributes, true)
    }

    _defineAttribute(key, { fullKey, context, attributes }) {

        if (!defined(fullKey)) {
            fullKey = key
        }

        if (!defined(attributes)) {
            attributes = this._attributes
        }

        // console.log('====_defineAttribute====')
        // console.log('key', key)
        // console.log('fullKey', fullKey)
        // console.log('context', context)
        // console.log('attributes', attributes)

        if (has(attributes, key)) {

            // console.log('About to check the value')
            const self = this,
                v = dataGet(attributes, key)
            // console.log('v', v)

            // console.log('next context', context[key])
            if (_.isObject(v)) {
                // console.log('>>>>>>>>>>>>>>>>> passed _.isObject(v)')
                if (Array.isArray(v)) {
                    context[key] = []
                    // console.log('v is an array')
                    for (let i = 0; i < v.length; i++) {
                        this._defineAttribute(i, {
                            context: context[key],
                            fullKey: fullKey + '.' + i,
                            attributes: attributes[key]
                        })
                    }
                } else {
                    // console.log('v is an object', fullKey)
                    context[key] = {}
                    Object.keys(v).forEach(k => {
                        // console.log('*** Object loop ***')
                        this._defineAttribute(k, {
                            context: context[key],
                            fullKey: fullKey + '.' + k,
                            attributes: attributes[key]
                        })
                        // console.log('*** End Object loop ***')
                    })
                }
            } else {
                // console.log('type of context', typeof context)
                // console.log('prototype', context.constructor.prototype)
                // console.log('prototype type', Object.getPrototypeOf(context))
                Object.defineProperty(context, key, {
                    configurable: true,
                    enumerable: true,
                    get() {
                        // console.log('getting', fullKey, 'this (snapshot)')
                        return dataGet(attributes, key)
                    },
                    set(value) {
                        // console.log('setting', key, value)
                        dataSet(attributes, key, value)
                        self.handleChange(fullKey)
                    },
                })
            }
        }
    }
}