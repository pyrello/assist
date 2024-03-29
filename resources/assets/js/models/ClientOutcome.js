import Model from './Model'

export const defaultClientOutcome = () => {
    return {
        advocate_id: null,
        client_id: null,
        incident_id: null,
        outcome_id: null,
        activity_ids: [],
        completed: false,
        date: null,
        note: '',
    }
}

export default class ClientOutcome extends Model {

    constructor(attributes = {}) {
        super(defaultClientOutcome(), attributes)
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
