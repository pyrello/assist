import axios from 'axios'

export const createItem = (endpoint, data, config) => {
    return axios.post(endpoint, data, config)
}

export const destroyItem = (endpoint, id, params) => {
    return axios.delete(endpoint + '/' + id, params)
        // .then(response => response)
        // .catch(error => {
        //     console.log('destroyItem error', error.response)
        //     return reject(error.response)
        // })
}

export const fetchOneOrMore = (endpoint, params) => new Promise((resolve, reject) => {
    return axios.get(endpoint, params)
        .then(response => {

            if (!response.data) {
                console.warn('Data property is not set on response')
                return reject(response)
            }

            const payload = response.data

            resolve(payload)

        }).catch(error => {
            console.error(error)
            reject(error)
        })
})

export const updateItem = (endpoint, id, data = {}) => {
    // console.log('updateItem', endpoint, id, data)
    return axios.patch(endpoint + '/' + id, data)
}