import _ from 'lodash'
import Vue from 'vue'
import Base from './Base'

class ModelPlus extends Base {
    get $() {
        return this._original
    }
    get attributes() {
        return this._attributes
    }

    get exists() {
        return !! this._attributes.id
    }

    constructor(attributes = {}, options = {}) {
        super(options)
        // console.log('constructing model', blank, attributes)
        Vue.set(this, '_attributes', {})
        Vue.set(this, '_original', {})
        Vue.set(this, '_changed', {})
        this.trackChanges = true

        // this.exists = !!(attributes.id)

        this.assign(attributes)
        // this.log('Creating ' + this.$class, this)
    }

    log(...messages) {
        if (this.getOption('log')) console.log(`[${this.$class}]`, ...messages)
    }

    get(attribute, fallback) {
        return _.get(this._attributes, attribute, fallback)
    }

    set(attribute, value) {
        // Allow batch set of multiple attributes at once, ie. set({...});
        this.log('set', attribute, value)
        if (_.isPlainObject(attribute)) {
            _.each(attribute, (value, key) => {
                this.log('set', 'looping', key, value)
                this.set(key, value);
            });

            return;
        }

        const defined = this.has(attribute)

        if (!defined) {
            this.log('Not defined', attribute)
            this.registerAttribute(attribute, value)
        }

        const previous = this.get(attribute)

        Vue.set(this._attributes, attribute, value)

        const changed = defined && !_.isEqual(previous, value)
        this.log('changed', changed)

        if (changed) {
            Vue.set(this._changed, attribute, value)
        } else {
            Vue.delete(this._changed, attribute)
        }

        return value
    }

    assign(attributes) {
        this.set(_.defaultsDeep({}, attributes, _.cloneDeep(this.defaults())))
        this.sync()
    }

    /**
     * Sync the current attributes to the original attributes. This is usually
     * only called on save. We have to clone the values otherwise we
     * end up with references to the same object in both attribute sets.
     *
     * You can also pass one or an array of attributes to sync.
     *
     * @param {string|string[]} attribute
     */
    sync(attribute) {
        this.log('sync', attribute)
        let active = _.cloneDeep(this._attributes)

        if (_.isUndefined(attribute)) {
            Vue.set(this, '_original', active)
            Vue.set(this, '_changed', {})
        } else {
            _.each(_.castArray(attribute, (attribute) => {
                console.log('syncing attribute', attribute)
                Vue.set(this._reference, attribute, _.get(active, attribute))
                Vue.delete(this._changed, attribute)
            }))
        }
    }

    defaults() {
        return {}
    }

    // fill(data, silent = true) {
    //     // console.log('data', data)
    //     // Attributes must be provided
    //     if (defined(data)) {
    //
    //         // this.exists = !!(data.id)
    //
    //         // If we are not adding changes
    //         if (silent) {
    //             // console.log('filling silently', data)
    //             this.trackChanges = false
    //             // Load the values into this._original
    //             copy(data, this._original)
    //
    //             console.log('original', this._original)
    //         }
    //
    //         this.loaded = true
    //         // copy(data, this)
    //
    //         // Todo: how to handle when the item is not already in this._original
    //         Object.keys(data).forEach(key => {
    //             // console.log('filling', key)
    //             if (!has(this._original, key)) {
    //                 this._original[key] = this.guessDefaultForValue(data[key])
    //             }
    //             this.setAttribute(key, { data })
    //         })
    //
    //         this.trackChanges = true
    //
    //         // Trigger reactive changes
    //         const ob = this.__ob__
    //         if (ob && ob.dep) {
    //             ob.dep.notify()
    //         }
    //     }
    // }

    has(attribute) {
        return _.has(this._attributes, attribute)
    }

    getChanges(attribute) {
        if (_.isUndefined(attribute)) {
            return this._changed
        }
        return _.get(this._changed, attribute)
    }

    // handleChange(fullKey) {
    //     // console.log('handling change', fullKey)
    //     if (!this.trackChanges) {
    //         // console.warn('Not tracking changes', fullKey)
    //         return false
    //     }
    //
    //     // console.log('handleChange', key, context)
    //     if (this.isChanging(fullKey)) {
    //         // console.log('Adding value to this.changed')
    //         let newVal = dataGet(this, fullKey)
    //         dataSet(this.changed, fullKey, newVal)
    //     } else {
    //         // console.log('Removing value from this.changed')
    //         dataDelete(this.changed, fullKey)
    //     }
    //
    //     // Trigger reactive changes
    //     const ob = (this).__ob__
    //     if (ob && ob.dep) {
    //         ob.dep.notify()
    //     }
    // }

    // isChanging(fullKey) {
    //     // console.log(`${fullKey} isChanging?`)
    //     let check = dataGet(this._attributes, fullKey),
    //         against = dataGet(this._original, fullKey)
    //
    //     // console.log('check', check)
    //     // console.log('against', check)
    //
    //     if (defined(check) || defined(against)) {
    //
    //         // Value is not empty and has changed
    //         // console.log('not equal or empty', check, against, !equalOrEmpty(check, against))
    //         return !equalOrEmpty(check, against)
    //     }
    //
    //     return false
    // }

    isDirty() {
        return Object.keys(this._changed).length > 0
    }

    // getAttributes() {
    //     return this._attributes
    // }

    registerAttribute(attribute, data, context = this) {
        // this.log('Registering', attribute, data)
        if (_.isObject(data)) {
            if (_.isArray(data)) {
                this.log('Registering array', attribute)
                this.registerArray(attribute, data, context)
            } else {
                this.log('Registering object', attribute)
                this.registerObject(attribute, data, context)
            }
        } else {
            const self = this
            Object.defineProperty(context, attribute, {
                configurable: true,
                enumerable: true,
                get: () => self.get(attribute),
                set: (value) => self.set(attribute, value),
            })

            // Trigger reactive changes
            const ob = (this).__ob__
            if (ob && ob.dep) {
                ob.dep.notify()
            }
        }
    }

    // Todo: Name passed in attributes something else
    // setAttribute(key, { fullKey = key, context = this, data = this._attributes }) {
    //     // console.warn('*^*^*^*^ Starting setAttribute')
    //
    //     // console.log('key', key)
    //     // console.log('fullKey', fullKey)
    //     // console.log('context', context)
    //     // console.log('data', data)
    //
    //     // The key we are setting must exist in data
    //     if (has(data, key)) {
    //         // console.log('About to check the value')
    //         let v = dataGet(data, key),
    //             // And the original, if it exists
    //             orig = dataGet(this, fullKey)
    //             // console.log('v', v)
    //
    //         if (key === 'abuser') dataGet(this, 'abuser', true)
    //
    //         /**
    //          * If the old value is an object and v is null, keep the
    //          * old value. This is a workaround for when we have a client
    //          * with no address and it is passed from the server as null,
    //          * rather than a blank object.
    //          */
    //         if (v === null && _.isObject(orig)) {
    //             // console.log('setting v to orig')
    //             v = orig
    //         }
    //
    //         // v is an object
    //         if (_.isObject(v)) {
    //             // console.log('>>>>>>>>>>>>>>>>> passed _.isObject(v)')
    //             if (Array.isArray(v)) {
    //                 this.defineArray(key, v, { fullKey, context })
    //             } else {
    //                 this.defineObject(key, v, { fullKey, context })
    //             }
    //         }
    //         // v is a primitive
    //         else {
    //             // console.log(fullKey, 'is a primitive')
    //             dataSet(this._attributes, fullKey, v)
    //
    //             this.defineAttribute(key, { fullKey, context })
    //             this.handleChange(key, context)
    //         }
    //     }
    //     // console.warn('*^*^*^*^ Ending setAttribute')
    // }

    // defineAttribute(key, { fullKey = key, context = this } = {}) {
    //     const self = this
    //
    //     Object.defineProperty(context, key, {
    //         configurable: true,
    //         enumerable: true,
    //         get() {
    //             return dataGet(self._attributes, fullKey)
    //         },
    //         set(value) {
    //             dataSet(self._attributes, fullKey, value)
    //             self.handleChange(fullKey, context)
    //         },
    //     })
    // }

    registerArray(attribute, data = [], context) {

        // console.log('defining on array on', fullKey)

        if (!_.isArray(this.get(attribute))) {
            // console.log(this.uuid, `Creating ${fullKey} array on this._attributes`)
            Vue.set(context, attribute, [])
        }

        // console.log('v is an array')
        for (let i = 0; i < data.length; i++) {
            this.registerAttribute(i, data[i], context[attribute])
        }
    }

    registerObject(attribute, data = {}, context) {

        if (!_.isObject(this.get(attribute))) {
            // this.log('Creating object', attribute)
            // console.log(this.uuid, `Creating ${fullKey} object on this._attributes`)
            // this.set(attribute, {})
            Vue.set(context, attribute, Object.create(null))
        }

        Object.keys(data).forEach(key => {
            // console.log('*** Object loop ***', k, data)
            this.registerAttribute(key, data[key], context[attribute])
            // console.log('*** End Object loop ***')
        })
    }
}

export default ModelPlus