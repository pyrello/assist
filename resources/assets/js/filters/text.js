import marked from 'marked'
/**
 * Truncates text if it exceeds the length of the limit
 *
 * @param text
 * @param limit
 * @return {String}
 */
export const truncate = (text, limit = 50) => {
    if (text.length > limit) {
        return `${text.substring(0, limit)}...`
    }

    return text
}

export const markdown = (text) => {
    return marked(text, { sanitize: true })
}