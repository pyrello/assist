import CrudModule from '../crud/CrudModule'

export default {
    ...new CrudModule('models', {
        endpoint: 'reporting/builder/models',
        state: {
            keyField: 'class',
        },
    }),
}