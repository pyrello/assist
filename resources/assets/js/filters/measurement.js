/**
 * Truncates text if it exceeds the length of the limit
 *
 * @param inches
 * @return {String}
 */
export const height = (inches) => {
    let output = Math.floor(inches / 12) + "'"

    if (inches % 12 > 0) {
        output += ' ' + (inches % 12) + '"'
    }

    return output
}