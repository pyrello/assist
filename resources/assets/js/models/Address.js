import Model from './Model'

export default class Address extends Model {

    defaults() {
        return {
            street: '',
            apt: '',
            state: '',
            city: '',
            county: '',
            zip: '',
        }
    }
}