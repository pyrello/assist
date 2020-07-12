import Dependent from '../models/Dependent'
import ModelMixin from './ModelMixin'

export default {
    ...new ModelMixin({
        name: 'dependent',
        storeName: 'dependents',
        model: Dependent,
    }),
}