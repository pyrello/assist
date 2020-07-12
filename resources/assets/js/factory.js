import { defined, formattedDatetime, has, jsonClone } from './common'

export const DEFAULT_STATE = 'Iowa'
export const DEFAULT_CITY = 'Iowa City'
export const MOMENT_DATE_FORMAT = 'YYYY-MM-DD'
export const MOMENT_TIME_FORMAT = 'HH:mm:ss'
export const MOMENT_DATETIME_FORMAT = MOMENT_DATE_FORMAT + ' ' + MOMENT_TIME_FORMAT

export const blankAbuser = () => {
    return {
        id: null,
        intake_id: null,
        first_name: null,
        last_name: null,
        birth_date: null,
        gender: null,
        eye_color: null,
        hair_color: null,
        hair_length: null,
        height: null,
        weight: null,
        identifying_features: null,
        vehicle: null,
        relationship: null,
    }
}

export const blankAbusiveRelationship = () => {
    return {
        id: null,
        intake_id: null,
        relationship: '',
        abuser: null,
        abuser_id: null,
    }
}

export const blankAbuseRelationship = () => {
    return {
        abuser_id: null,
        client_id: null,
        relationshipType: '',
    }
}

export const blankAdvocate = () => {
    return {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    }
}

export const blankClientPersonal = () => {
    return {
        first_name: '',
        middle_initial: '',
        last_name: '',
        last_four: '',
        birth_date: null,
        gender: '',
        phones: [],
        ethnicity_ids: [],
    }
}

export const blankClient = (relationship = false) => {

    // Need to pass in a flag that tells us that this client belongs to another household
    return {
        id: null,
        intake_id: null,
        ...blankClientPersonal(),
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
    }
}

export const blankIntake = (relationship = false) => {
    return {
        id: null,
        date: formattedDatetime(MOMENT_DATE_FORMAT),
        advocate_id: null,
        referred_by_id: null,
        note: '',
    }
}

export const blankPhone = () => {

    return {
        number: '',
        type: 'Mobile',
        primary: true,
        safe: false,
    }
}

export const blankRelationship = () => {
    return {
        type: '',
    }
}