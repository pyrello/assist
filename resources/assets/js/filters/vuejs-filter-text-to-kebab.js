/**
 * Converts a text string to kebab case.
 * Example: Kebab Case => kebab-case
 * 
 * @param  {String} str the string to convert
 * @return {String}
 */
export default function (str) {
    return str.split(' ').map(function (item) {
        return item.charAt(0).toLowerCase() + item.substring(1);
    }).join('-');
}
