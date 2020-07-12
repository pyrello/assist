import Model from './Model'

export const defaultDependent = () => {
    return {
        id: null,
        client_id: null,
        advocate_id: null,
        name: null,
        birth_date: null,
        gender: null,
        ethnicity_ids: [],
        housing_status: null,
    }
}

export default class Dependent extends Model {

    constructor(attributes = {}, options = {}) {
        super(defaultDependent(), attributes, options)
    }
}