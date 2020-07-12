import { formattedDatetime } from '../common'
import { MOMENT_DATE_FORMAT } from '../factory'
import Model from './Model'

export const defaultIntake = () => {
    return {
        id: null,
        date: formattedDatetime(MOMENT_DATE_FORMAT),
        advocate_id: null,
        referred_by_id: null,
        note: '',
        info: {},
    }
}

export default class Intake extends Model {

    constructor(attributes = {}) {
        super(defaultIntake(), attributes)
    }
}