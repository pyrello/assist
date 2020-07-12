import { defaultHousehold } from './Household'
import Model from './Model'
import ModelPlus from './ModelPlus'

export const defaultClient = () => {
    return {
        id: null,
        parent_id: 0,
        intake_id: null,
        advocate_id: null,
        first_name: '',
        middle_initial: '',
        last_name: '',
        last_four: '',
        birth_date: null,
        gender: '',
        phones: [],
        ethnicity_ids: [],
        homeless: false,
        address: {
            street: '',
            apt: '',
            state: '',
            city: '',
            county: '',
            zip: '',
        },
        note: '',
        household: null,
    }
}

export default class Client extends Model {

    constructor(attributes = {}) {
        super(defaultClient(), attributes)
    }

    // defaults() {
    //     return {
    //         id: null,
    //         intake_id: null,
    //         advocate_id: null,
    //         first_name: '',
    //         middle_initial: '',
    //         last_name: '',
    //         last_four: '',
    //         birth_date: null,
    //         gender: '',
    //         phones: [],
    //         ethnicity_ids: [],
    //         homeless: false,
    //         address: {
    //             street: '',
    //             apt: '',
    //             state: '',
    //             city: '',
    //             county: '',
    //             zip: '',
    //         },
    //         note: '',
    //     }
    // }

    isMinimallyViable() {
        // console.log('running isMinimallyViable', this)
        const pii = ['first_name', 'last_name', 'birth_date']
        const blank = this.defaults()
        let check = 0

        for (let i = 0; i < pii.length; i++) {
            // console.log('pii[i]', pii[i], this.has(this, pii[i]), this.get([pii[i]]), blank[pii[i]])
            if (this.get([pii[i]]) !== blank[pii[i]]) {
                check++
            }
        }

        if (check >= 2) return true

        return false
    }
}