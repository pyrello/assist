import mixin from './mixin'

export default function install(Vue) {
    console.log('Repository.install')

    Vue.mixin(mixin)

    Object.defineProperty(Vue.prototype, '$repo', {
        get () { return this._repoRoot && this._repoRoot._repo }
    })

    console.log('Vue.prototype', Vue.prototype)
}