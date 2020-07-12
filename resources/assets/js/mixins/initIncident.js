import Incident from '../models/Incident'
import ModelMixin from './ModelMixin'

export default {
    ...new ModelMixin({
        name: 'incident',
        storeName: 'incidents',
        model: Incident,
    }),
}