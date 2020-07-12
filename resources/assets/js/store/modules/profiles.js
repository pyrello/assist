import CrudModule from '../crud/CrudModule'

export default {
    ...new CrudModule('profiles', {
        endpoint: 'reporting/profiles',
    })
}