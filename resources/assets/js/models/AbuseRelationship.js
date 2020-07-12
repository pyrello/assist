import Abuser, { defaultAbuser } from './Abuser'
import Model from './Model'

export const defaultAbuseRelationship = () => {
    return {
        id: null,
        client_id: null,
        relationship: '',
        abuser_id: null,
        abuse_types: [],
        addExistingAbuser: false,
        // abuser: new Abuser()
    }
}

export default class AbuseRelationship extends Model {

    constructor(attributes = {}) {
        super(defaultAbuseRelationship(), attributes)
    }

    // defaults() {
    //     return {
    //         id: null,
    //         intake_id: null,
    //         relationship: '',
    //         abuser_id: null,
    //         abuse_types: [],
    //         addExistingAbuser: false,
    //         abuser: new Abuser()
    //     }
    // }
}