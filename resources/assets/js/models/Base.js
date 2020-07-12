import { uuidv4 } from '../common'

class Base {
    constructor(options) {
        // Define an automatic unique ID. This is primarily to distinguish
        // between multiple instances of the same name and data.
        Object.defineProperty(this, '_uid', {
            value:        uuidv4(),
            enumerable:   false,
            configurable: false,
            writable:     false,
        })

        Vue.set(this, '_listeners', {}) // Event listeners
        Vue.set(this, '_options', {}) // Internal option store

        Vue.set(this, '_options', options)

        this.boot()
    }

    /**
     * @returns {string} The class name of this instance.
     */
    get $class() {
        return (Object.getPrototypeOf(this)).constructor.name;
    }

    getOption(option) {
        return _.get(this._options, option)
    }

    /**
     * Called after construction, this hook allows you to add some extra setup
     * logic without having to override the constructor.
     */
    boot() {

    }
}

export default Base