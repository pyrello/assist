import _ from 'lodash'
import Vue from 'vue'
import {
    copy, dataGet, dataSet, defined, equalOrEmpty, has, uuidv4, vueDeepDelete,
    vueDeepSet
} from '../common'

export default class Model {

    get exists() {
        return !! this._attributes.id
    }

    constructor(blank = {}, attributes = {}, options = {}) {
        // console.log('constructing model', blank, attributes)

        // this._watcherVM = new Vue()

        Vue.set(this, '_options', options)

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

        this.changed = {}
        this.trackChanges = true

        // this.exists = !!(attributes.id)

        this.loaded = false

        if (Object.keys(attributes).length) {
            this.loaded = true
        }

        this.uuid = uuidv4()

        // console.log('Adding all the original fields', this.constructor.name, this.uuid)
        // Loop through keys of original data and
        // define top-level accessors for them to
        // provide reactive points
        Object.keys(this._original).forEach(key => {
            // console.log('Adding', key)
            this.setAttribute(key, { context: this })
        })
    }

    /**
     * @returns {string} The class name of this instance.
     */
    get $class() {
        return (Object.getPrototypeOf(this)).constructor.name;
    }

    log(...messages) {
        if (this.getOption('log')) console.log(`[${this.$class}]`, ...messages)
    }

    getOption(option) {
        return _.get(this._options, option)
    }

    assign(data, silent = true) {
        // console.log('data', data)
        // Attributes must be provided
        if (defined(data)) {

            // this.exists = !!(data.id)

            // If we are not adding changes
            if (silent) {
                // console.log('filling silently', data)
                this.trackChanges = false
                // Load the values into this._original
                Vue.set(this, '_original', data)

                // console.log('original', this._original)
            }

            this.loaded = true
            // copy(data, this)

            // Todo: how to handle when the item is not already in this._original
            Object.keys(data).forEach(key => {
                // console.log('filling', key)
                if (!has(this._original, key)) {
                    this._original[key] = this.guessDefaultForValue(data[key])
                }
                this.setAttribute(key, { data })
            })

            this.trackChanges = true

            // Trigger reactive changes
            const ob = this.__ob__
            if (ob && ob.dep) {
                ob.dep.notify()
            }
        }
    }

    getChanges(attribute) {
        if (_.isUndefined(attribute)) {
            return this.changed
        }
        return _.get(this.changed, attribute)
    }

    handleChange(fullKey) {
        // console.log('handling change', fullKey)
        if (!this.trackChanges) {
            // console.warn('Not tracking changes', fullKey)
            return false
        }

        // console.log('handleChange', key, context)
        if (this.isChanging(fullKey)) {
            // console.log('Adding value to this.changed')
            let newVal = dataGet(this, fullKey)
            vueDeepSet(this.changed, fullKey, newVal)
        } else {
            // console.log('Removing value from this.changed')
            vueDeepDelete(this.changed, fullKey)
        }

        // Trigger reactive changes
        const ob = (this).__ob__
        if (ob && ob.dep) {
            ob.dep.notify()
        }
    }

    isChanging(fullKey) {
        // console.log(`${fullKey} isChanging?`)
        let check = _.get(this._attributes, fullKey),
            against = _.get(this._original, fullKey)

        // console.log('check', check)
        // console.log('against', check)

        if (defined(check) || defined(against)) {

            // Value is not empty and has changed
            // console.log('not equal or empty', check, against, !equalOrEmpty(check, against))
            return !equalOrEmpty(check, against)
        }

        return false
    }

    isDirty() {
        return Object.keys(this.changed).length > 0
    }

    update(attributes) {
        this.assign(attributes, false)
    }

    getAttributes() {
        return this._attributes
    }

    // Todo: Name passed in attributes something else
    setAttribute(key, { fullKey = key, context = this, data = this._attributes }) {
        // console.warn('*^*^*^*^ Starting setAttribute')

        // console.log('key', key)
        // console.log('fullKey', fullKey)
        // console.log('context', context)
        // console.log('data', data)

        // The key we are setting must exist in data
        if (has(data, key)) {
            // console.log('About to check the value')
            let v = dataGet(data, key),
                // And the original, if it exists
                orig = dataGet(this, fullKey)
                // console.log('v', v)

            /**
             * If the old value is an object and v is null, keep the
             * old value. This is a workaround for when we have a client
             * with no address and it is passed from the server as null,
             * rather than a blank object.
             */
            if (v === null && _.isObject(orig)) {
                // console.log('setting v to orig')
                v = orig
            }

            // v is an object
            if (_.isObject(v)) {
                // console.log('>>>>>>>>>>>>>>>>> passed _.isObject(v)')
                if (Array.isArray(v)) {
                    this.defineArray(key, v, { fullKey, context })
                } else {
                    this.defineObject(key, v, { fullKey, context })
                }
            }
            // v is a primitive
            else {
                // console.log(fullKey, 'is a primitive')
                vueDeepSet(this._attributes, fullKey, v)

                this.defineAttribute(key, { fullKey, context })
                this.handleChange(key, context)
            }
        }
        // console.warn('*^*^*^*^ Ending setAttribute')
    }

    defineAttribute(key, { fullKey = key, context = this } = {}) {
        const self = this

        Object.defineProperty(context, key, {
            configurable: true,
            enumerable: true,
            get() {
                return dataGet(self._attributes, fullKey)
            },
            set(value) {
                vueDeepSet(self._attributes, fullKey, value)
                self.handleChange(fullKey, context)
            },
        })
    }

    defineArray(key, data = [], { fullKey = key, context = this } = {}) {

        // console.log('defining on array on', fullKey)

        if (!Array.isArray(dataGet(this._attributes, fullKey))) {
            // console.log(this.uuid, `Creating ${fullKey} array on this._attributes`)
            dataSet(this._attributes, fullKey, [])
        }

        if (!Array.isArray(context[key])) {
            // console.log(this.uuid, `Creating ${key} array in context`)
            this.defineAttribute(key, { fullKey, context })
        }

        // console.log('v is an array')
        for (let i = 0; i < data.length; i++) {
            this.setAttribute(i, {
                context: context[key],
                fullKey: fullKey + '.' + i,
                // We pass the data itself
                data: data,
            })
        }

        // Trigger reactive changes
        const ob = (context[key]).__ob__
        if (ob && ob.dep) {
            ob.dep.notify()
        }
    }

    defineObject(key, data = {}, { fullKey = key, context = this } = {}) {

        if (!_.isObject(dataGet(this._attributes, fullKey))) {
            // console.log(this.uuid, `Creating ${fullKey} object on this._attributes`)
            dataSet(this._attributes, fullKey, Object.create(null))
        }

        if (!_.isObject(context[key])) {
            // console.log(this.uuid, `Creating ${key} object in context`, context)
            // For this we just create an empty container
            // and its children will contain the references
            // I think this is necessary because an object
            // can't be both a reference and a container
            context[key] = Object.create(null)
        }

        Object.keys(data).forEach(k => {
            // console.log('*** Object loop ***', k, data)
            this.setAttribute(k, {
                context: context[key],
                fullKey: fullKey + '.' + k,
                // We pass the data itself
                data: data,
            })
            // console.log('*** End Object loop ***')
        })

        // Trigger reactive changes
        const ob = (context[key]).__ob__
        if (ob && ob.dep) {
            ob.dep.notify()
        }
    }

    guessDefaultForValue(value) {
        if (defined(value) && value !== null) {

            if (typeof value === 'string') {
                return ''
            }
            if (typeof value === 'number') {
                return 0
            }
            if (typeof value === 'boolean') {
                return value
            }
            if (value.constructor === Array) {
                return []
            }
            if (_.isObject(value)) {
                return Object.create(null)
            }
        }
        return null
    }
}