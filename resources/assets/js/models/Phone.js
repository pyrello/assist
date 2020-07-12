import Model from './Model'

export const defaultPhone = () => {
    return {
        client_id: null,
        number: '',
        ext: '',
        type: 'Mobile',
        primary: true,
        safe: false,
    }
}

export default class Phone extends Model {

    constructor(attributes = {}) {
        super(defaultPhone(), attributes)
    }
}