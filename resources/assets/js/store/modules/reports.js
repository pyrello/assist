import CrudModule from '../crud/CrudModule'

export default {
    ...new CrudModule('reports', {
        endpoint: 'reporting/reports',
    }),
}