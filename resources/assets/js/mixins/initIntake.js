import Intake from '../models/Intake'
import ModelMixin from './ModelMixin'

export default {
    ...new ModelMixin({
        name: 'intake',
        storeName: 'intakes',
        model: Intake,
    }),
}