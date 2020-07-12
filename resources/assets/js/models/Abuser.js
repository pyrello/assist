import Model from './Model'

export const defaultAbuser = () => {
    return {
        id: null,
        first_name: null,
        last_name: null,
        birth_date: null,
        gender: null,
        ethnicity_ids: [],
        eye_color: null,
        hair_color: null,
        hair_length: null,
        height: null,
        weight: null,
        identifying_features: null,
        vehicle: null,
    }
}

export default class Abuser extends Model {

    constructor(attributes = {}) {
        super(defaultAbuser(), attributes)
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