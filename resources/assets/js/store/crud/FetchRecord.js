import { currentTimestamp } from '../../common'

// Amount of time to wait between fetches
export const FETCH_TIMEOUT = 60 * 5

export default class FetchRecord {
    constructor(id, request) {
        this.expires = currentTimestamp() + FETCH_TIMEOUT
        this.id = id
        this.request = request
    }
}