import Abuser from '../models/Abuser'
import ModelMixin from './ModelMixin'

export default {
    ...new ModelMixin({
        name: 'abuser',
        storeName: 'abusers',
        model: Abuser,
    }),
}