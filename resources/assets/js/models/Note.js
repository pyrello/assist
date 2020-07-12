import Model from './Model'

export const defaultNote = () => {
    return {
        id: null,
        client_id: null,
        advocate_id: null,
        noteable_type: null,
        noteable_id: null,
        content: ''
    }
}

export default class Note extends Model {

    constructor(attributes = {}) {
        super(defaultNote(), attributes)
    }
}