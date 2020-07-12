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

            // modelData
            [`${name}Data`]() {
                const fetching = this[`fetching${capitalize(name)}`] // This is a hack to force this to re-render when fetch completes
                return this[`route${capitalize(name)}`]
            },
        }

        this.created = function() {
            this[`set${capitalize(name)}Id`]()
        }

        this.watch = {
            [`${name}Data`]() {
                // this.log(`${name}Data`, this[`${name}Data`])
                // Reset the model to prevent lingering data
                this[`reset${that.modelMixinOptions.name}`]()
                // Assign the raw data to the model
                if (this[`${that.modelMixinOptions.name}Data`]) {
                    this[`${that.modelMixinOptions.name}`].assign(this[`${that.modelMixinOptions.name}Data`])
                }
            },

            [`this.$route.params.${name}_id`]() {
                this[`set${capitalize(name)}Id`]()
            },
        }

        this.methods = {
            ...mapActions(storeName, { [`fetch${capitalize(name)}`]: 'fetch' }),

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
                // this.log(`set${capitalize(name)}Id`, id)

                Vue.set(this.params, `${name}_id`, id)
            },

            // modelIdExists
            [`${name}IdExists`]() {
                return defined(this.params[`${name}_id`]) && this.params[`${name}_id`] !== null
            },

            // fetchCurrentModel
            [`fetchRoute${capitalize(name)}`]() {
                const id = Number(this.$route.params[`${name}_id`])
                if (!id) {
                    return false
                }
                return this[`fetch${capitalize(name)}`]({ id: id, fetchId: `id:${id}` })
                    .then(current => {
                        this[`route${capitalize(name)}Fetched`]()
                        this[`current${capitalize(name)}Fetched`]()
                        return current
                    })
                    .catch(error => {
                        console.error(error)
                        // this.addMessage({
                        //     text: error,
                        //     type: 'danger',
                        // })
                        // this.$router.push('/abusers')
                    })
            },

            // fetchCurrentModel
            [`fetchCurrent${capitalize(name)}`]() {
                return this[`fetchRoute${capitalize(name)}`]()
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
