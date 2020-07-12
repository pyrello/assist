import Activity from '../models/Activity'
import ModelMixin from './ModelMixin'

export default {
    ...new ModelMixin({
        name: 'activity',
        storeName: 'activities',
        model: Activity,
    }),
}