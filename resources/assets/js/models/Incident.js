import { formattedDatetime } from '../common'
import { MOMENT_DATE_FORMAT } from '../factory'
import Model from './Model'
import ModelPlus from './ModelPlus'

export const defaultIncident = () => {
    return {
        date: formattedDatetime(MOMENT_DATE_FORMAT),
        client_id: null,
        advocate_id: null,
        incident_type_id: null,
        state: '',
        city: '',
        note: '',
    }
}

export default class Incident extends Model {

    constructor(attributes = {}) {
        super(defaultIncident(), attributes)
    }

    // defaults() {
    //     return defaultIncident()
    // }
}
