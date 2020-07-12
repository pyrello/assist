import Model from './Model'

export const defaultOutcome = () => {
    return {
        advocate_id: null,
        client_id: null,
        incident_id: null,
        outcome_id: null,
        activity_ids: [],
        date: null,
        note: '',
    }
}

export default class Outcome extends Model {

    constructor(attributes = {}) {
        super(defaultOutcome(), attributes)
    }

    // defaults() {
    //     return {
    //         id: null,
    //         first_name: null,
    //         last_name: null,
    //         birth_date: null,
    //         gender: null,
    //         eye_color: null,
    //         hair_color: null,
    //         hair_length: null,
    //         height: null,
    //         weight: null,
    //         identifying_features: null,
    //         vehicle: null,
    //     }
    // }
}