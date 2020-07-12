import Model from './model'
import { copy, defined, has, jsonClone } from '../../common'
import Repository from './repository';

export default {
    beforeCreate () {
        // console.log('mixin this (start)', this)
        // console.log('options (start)', this.$options)
        let options = this.$options

        if (defined(options.repository)) {
            this._repoRoot = this
            this._repo = options.repository
        } else {
            this._repoRoot = this.$parent && this.$parent._repoRoot || this
        }

        // console.log('repoRoot', (this.$parent && this.$parent._repoRoot) ? 'parent': 'this')

        // model injection
        if (options.models) {
            console.log('options', this.$options)
            this.$models = typeof options.models === 'function'
                ? options.models()
                : options.models


            if (!options.computed) options.computed = {}

            Object.keys(this.$models).forEach(k => {
                console.log('key', k)
                const type = this.$models[k].model ? this.$models[k].model : k
                console.log('type', type)
                // Todo: figure out how to do this without relying on vue-router
                if (this.$models[k].param) {
                    const param = this.$models[k].param
                    console.log('param', param)

                    if (has(this.$route.params, param)) {
                        console.log('route param exists')
                        const id = this.$route.params[param]
                        this.$repo.fetchModel(type, id)
                        options.computed[k] = () => {
                            return this.$repo.models[k] && this.$repo.models[k][id] || undefined
                        }
                    }
                }
                console.log('type option computed', options.computed)
            })
            console.log('options', jsonClone(this.$options.computed))
            console.log('mixin this', this)
        }

        // console.log('checking this (right before adding $repo)', this)

        // Object.defineProperty(Vue.prototype, '$repo', {
        //     get () { return this._repoRoot._repo }
        // })
        // if (options.)
        // Todo: should this be left in?
        // else if (options.parent && options.parent.$models) {
        //     this.$models = options.parent.$models
        // }
    },
}