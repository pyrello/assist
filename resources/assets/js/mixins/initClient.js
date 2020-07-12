import Client from '../models/Client'
import ModelMixin from './ModelMixin'

export default {
    ...new ModelMixin({
        name: 'client',
        storeName: 'clients',
        model: Client,
    }),
}