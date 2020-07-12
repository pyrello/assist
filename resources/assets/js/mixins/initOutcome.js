import Outcome from '../models/Outcome'
import ModelMixin from './ModelMixin'

export default {
    ...new ModelMixin({
        name: 'outcome',
        storeName: 'outcomes',
        model: Outcome,
    }),
}