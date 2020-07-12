import Model from './Model'

export const defaultHousehold = () => {
    return {
        size: 1,
        annual_income: 0,
    }
}

export default class Household extends Model {

    constructor(attributes = {}) {
        super(defaultHousehold(), attributes)
    }
}