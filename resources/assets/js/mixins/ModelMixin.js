import { mapActions, mapGetters } from 'vuex'
import { defined } from '../common'
import capitalize from '../filters/capitalize'
import Model from '../models/Model'

export default class ModelMixin {
    constructor({ name, storeName, model = Model }) {
        this.modelMixinOptions = {
            name,
            storeName,
            model,
        }

        const that = this

        this.data = function() {
            return {
                [that.modelMixinOptions.name]: new that.modelMixinOptions.model(),
                params: {
                    [`${that.modelMixinOptions.name}_id`]: null,
                },
            }
        }

        this.computed = {
            ...mapGetters(storeName, {
                // modelById
                [`${name}ById`]: 'byId',
                [`route${capitalize(name)}`]: 'byRoute',
                // fetchingModel
                [`fetching${capitalize(name)}`]: 'fetching',
            }),

            [`routeHas${capitalize(name)}Model`]() {
                return this.$route.params && this.$route.params[`${name}_id`] || false
            },

            // modelData
            [`${name}Data`]() {
                const fetching = this[`fetching${capitalize(name)}`] // This is a hack to force this to re-render when fetch completes
                if (this[`routeHas${capitalize(name)}Model`]) {
                    return this[`route${capitalize(name)}`]
                }
                return this[`${name}ById`](this.params[`${name}_id`])
            },
        }

        this.created = function() {
            this[`set${capitalize(name)}Id`]()
        }

        this.watch = {
            [`${name}Data`]: {
                deep: true,
                handler: function() {
                    // console.log(`${that.modelMixinOptions.name}Data`, this[`${that.modelMixinOptions.name}Data`])
                    // Reset the model to prevent lingering data
                    this[`reset${that.modelMixinOptions.name}`]()
                    // Assign the raw data to the model
                    if (this[`${that.modelMixinOptions.name}Data`]) {
                        this[`${that.modelMixinOptions.name}`].assign(this[`${that.modelMixinOptions.name}Data`])
                    }
                },
            },

            [`$route.params.${name}_id`]() {
                this[`set${capitalize(name)}Id`]()
            },

            [`params.${name}_id`](value) {
                if (value !== null) {
                    this[`fetchCurrent${capitalize(name)}`]()
                }
            }
        }

        this.methods = {
            ...mapActions(storeName, { [`fetch${capitalize(name)}Data`]: 'fetch' }),

            // setModelId
            [`set${capitalize(name)}Id`](id) {
                if (id) {
                    id = Number(id)
                }
                else if (this.$route.params[`${name}_id`]) {
                    id = Number(this.$route.params[`${name}_id`])
                } else {
                    id = null
                }
                // console.log(`set${capitalize(name)}Id`, id)

                Vue.set(this.params, `${name}_id`, id)
            },

            // modelIdExists
            [`${name}IdExists`]() {
                return defined(this.params[`${name}_id`]) && this.params[`${name}_id`] !== null
            },

            [`fetch${capitalize(name)}`](config) {
                this[`fetch${capitalize(name)}Data`](config)
                    .then(results => {
                        this[`${name}Fetched`](results)
                        return results
                    })
                    .catch(error => {
                        console.error(error)
                    })
            },

            // fetchCurrentModel
            [`fetchRoute${capitalize(name)}`]() {
                const id = Number(this.$route.params[`${name}_id`])
                if (!id) {
                    return false
                }
                return this[`fetch${capitalize(name)}Data`]({ id: id, fetchId: `id:${id}` })
                    .then(current => {
                        this[`route${capitalize(name)}Fetched`]()
                        this[`current${capitalize(name)}Fetched`]()
                        return current
                    })
                    .catch(error => {
                        console.error(error)
                    })
            },

            // fetchCurrentModel
            [`fetchCurrent${capitalize(name)}`]() {

                const id = Number(this.params[`${name}_id`])
                if (!id) {
                    return false
                }
                return this[`fetch${capitalize(name)}Data`]({ id: id, fetchId: `id:${id}` })
                    .then(current => {
                        this[`route${capitalize(name)}Fetched`]()
                        this[`current${capitalize(name)}Fetched`]()
                        return current
                    })
                    .catch(error => {
                        console.error(error)
                    })
            },
            [`current${capitalize(name)}Fetched`]() {
                //
            },
            [`route${capitalize(name)}Fetched`]() {
                //
            },
            [`${name}Fetched`]() {
                //
            },
            reset() {
                this.resetData()
            },

            resetData() {
                this[`reset${name}`]()
                this.params[`${name}_id`] = null
            },

            [`reset${name}`]() {
                this[name] = new model()
            },
        }
    }
}
