import moment from 'moment'

/**
 * Output a pretty date
 *
 * @param  {String} datetime the string to convert
 * @return {String}
 */
export const prettyDate = (datetime) => {
    return moment(datetime).format('MM/DD/YYYY');
}

/**
 * Output a pretty time
 *
 * @param datetime
 * @returns {string}
 */
export const prettyTime = (datetime) => {
    return moment(datetime).format('hh:mm A')
}

/**
 * Output a pretty date and time
 *
 * @param datetime
 * @returns {string}
 */
export const prettyDatetime = (datetime) => {
    return prettyDate(datetime) + ' ' + prettyTime(datetime)
}
