import Phone from '../models/Phone'
import ModelMixin from './ModelMixin'

export default {
    ...new ModelMixin({
        name: 'phone',
        storeName: 'phones',
        model: Phone,
    }),
}