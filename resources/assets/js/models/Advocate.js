import Model from './Model'

export const defaultAdvocate = () => {
    return {
        id: null,
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    }
}

export default class Advocate extends Model {
    constructor(blank = {}, attributes = {}) {
        super(defaultAdvocate(), attributes)
    }
    defaults() {
        return defaultAdvocate()
    }
}