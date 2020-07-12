import CrudModule from '../crud/CrudModule'
// import outcomes from './client_outcomes'
// import stays from './shelter'

export default {
    ...new CrudModule('clients'),
    modules: {
        // outcomes,
        // stays,
    },
}