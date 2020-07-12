import ClientOutcome from '../models/ClientOutcome'
import ModelMixin from './ModelMixin'

export default {
    ...new ModelMixin({
        name: 'outcome',
        storeName: 'clientOutcomes',
        model: ClientOutcome,
    }),
}