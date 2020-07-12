import moment from 'moment'
import { formattedDatetime } from '../common'
import { MOMENT_DATETIME_FORMAT } from '../factory'
import Model from './Model'

export const blankActivity = () => {
    const start = moment().startOf('hour').subtract(1, 'h')
    const end = moment(start).add(1, 'h')
    return {
        advocate_id: null,
        client_id: null,
        incident_id: null,
        requested_service_id: null,
        service_provided: true,
        why_not_provided: '',
        started_at: null,
        ended_at: null,
        // started_at: formattedDatetime(MOMENT_DATETIME_FORMAT, start),
        // ended_at: formattedDatetime(MOMENT_DATETIME_FORMAT, end),
        duration: null,
        funding_source_id: null,
        state: '',
        city: '',
        client_age: null,
        note: '',
    }
}

export default class Activity extends Model {

    constructor(attributes = {}) {
        super(blankActivity(), attributes)
    }
}