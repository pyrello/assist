import Vue from 'vue'

import { currentTimestamp, defined, has } from '../../common'
import install from './install'
import Model from './model'
import store from '../../store'

export default class Repository {

    constructor (options = {}) {
        // this.options = options
        // this.models = Vue.extend({})
        // this.fetched = Object.create(null)

        const models = options.models || {}

        const data = {
            options,
            models: Object.create(null),
            fetched: Object.create(null)
        }

        // resetStoreVM(this, models)

        Object.keys(models).forEach(k => {
            console.log('k', k)
            data.models[k] = Object.create(null)
            data.fetched[k] = Object.create(null)
        })

        this._repo = Vue.extend({
            data() {
                return data
            }
        })

        console.log('Repository', this)
    }

    fetchModel(type, id) {
        const path = this.getPath(type, id)
        if (!this.fetched[type]) {
            this.fetched[type] = Object.create(null)
        }
        if (!this.fetched[type][id]) {
            this.fetched[type][id] = Object.create(null)
        }
        return fetch(path)
            .then(item => {
                console.log('item', item)
                console.log('store', store)
                console.log('vuex', this.options.models[type].vuex, this.options.models[type].vuex.commit)
                if (this.options.models[type].vuex && this.options.models[type].vuex.commit) {
                    store.commit(type + '/' + this.options.models[type].vuex.commit, item)
                }
                if (defined(this.models[type][id])) {
                    this.models[type][id].assign(item)
                } else {
                    const ModelClass = this.options.models[type].model || Model
                    this.models[type][id] = new ModelClass(item)
                }
                // Todo: allow this to be a configurable amount
                this.fetched[type][id].expires = currentTimestamp() + (60 * 5)
                this.fetched[type][id].failed = false
            })
            .catch(error => {
                console.error('Error', error)
                this.fetched[type][id] = {
                    failed: true
                }
            })
    }

    getModel(type, id) {

            console.log('getModel')
            console.log('type', type)
            console.log('fetched', this.fetched)
            if (!has(this.fetched, type)) {
                reject()
                return null
            }
            console.log('made it past fetched check')
            // If the model hasn't been fetched or is close to expiring
            if (!has(this.fetched[type], id) || this.fetched[type][id].expires < currentTimestamp()) {
                // Attempt to fetch
                this.fetchModel(type, id)
            }

            // If the model exists, return it, otherwise return null
            return this.models.clients[id]
    }

    getPath(type, id) {
        return type + '/' + id
    }

    /**
     *
     * @param Vue Vue
     * @param options
     */
    static install(Vue, options) {
        console.log('running install', Vue, options)
        Object.defineProperty(Vue.prototype, '$modelManager', {
            get () { return this._modelManagerRoot._modelManager }
        })
        Vue.mixin(modelManagerMixin)
    }
}

// function resetStoreVM(store, models) {
//     // const oldVm = store._vm
//
//     const computed = {
//         fetched: Object.create(null),
//         models: Object.create(null),
//     }
//
//     Object.keys(models).forEach(m => {
//         computed.fetched[m] = (id) => {
//
//         }
//         computed.models[m] = Object.create(null)
//     })
//
//     store._vm = new Vue({
//         computed
//     })
// }


const fetch = (path, params) => {

    return new Promise((resolve, reject) => {

        return axios.get(path, params)
            .then(response => {

                if (!response.data || !response.data.data) {
                    console.warn('Data property is not set on response')
                    return reject(response)
                }

                const payload = response.data.data

                resolve(payload)

            }).catch(error => {
                console.error(error)
                reject(error)
            })
    })
}

Repository.install = install
