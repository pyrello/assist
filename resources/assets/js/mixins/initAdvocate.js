import Advocate from '../models/Advocate'
import ModelMixin from './ModelMixin'

export default {
    ...new ModelMixin({
        name: 'advocate',
        storeName: 'advocates',
        model: Advocate,
    }),
}