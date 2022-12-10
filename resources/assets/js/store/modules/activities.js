import CrudModule from '../crud/CrudModule'

export default {
    ...new CrudModule('activities', {
        singular: 'activity',
    }),
}
