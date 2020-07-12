import CrudModule from '../crud/CrudModule'

export default {
    ...new CrudModule('incidents', {
        state: {
            orderBy: 'date',
            orderDirection: 'desc',
            orderType: 'date',
        },
    })
}