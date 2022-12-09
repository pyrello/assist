import Vuex from 'vuex'
import abuserAutocomplete from './modules/abuserAutocomplete'

import abuseRelationships from './modules/abuseRelationships'
import abusers from './modules/abusers'
import activities from './modules/activities'
import advocates from './modules/advocates'
import auth from './modules/auth'
import clientAutocomplete from './modules/clientAutocomplete'
import clientOutcomes from './modules/clientOutcomes'
import clients from './modules/clients'
import dependents from './modules/dependents'
import incidentTypes from './modules/incident_types'
import incidents from './modules/incidents'
import intakes from './modules/intakes'
import abuserRelationshipTypes from './modules/list'
import abuseTypes from './modules/list'
import ethnicity from './modules/list'
import eyeColors from './modules/list'
import fundingSources from './modules/list'
import genders from './modules/list'
import hairColors from './modules/list'
import hairLengths from './modules/list'
import housingStatuses from './modules/list'
import phoneTypes from './modules/list'
import referralSources from './modules/list'
import serviceNotProvidedReasons from './modules/list'
import locations from './modules/locations'
import messages from './modules/messages'
import models from './modules/models'
import notes from './modules/notes'
import outcomes from './modules/outcomes'
import phones from './modules/phones'
import profiles from './modules/profiles'
import reports from './modules/reports'
import services from './modules/services'

export default new Vuex.Store({
    modules: {
        abuseRelationships,
        abuserRelationshipTypes,
        abuseTypes,
        abusers,
        abuserAutocomplete,
        activities,
        advocates,
        auth,
        clientAutocomplete,
        clientOutcomes,
        clients,
        dependents,
        ethnicity,
        eyeColors,
        fundingSources,
        genders,
        hairColors,
        hairLengths,
        housingStatuses,
        incidents,
        incidentTypes,
        intakes,
        locations,
        messages,
        models,
        notes,
        outcomes,
        phones,
        phoneTypes,
        profiles,
        referralSources,
        reports,
        services,
        serviceNotProvidedReasons,
    }
})
