import _ from 'lodash'
import moment from 'moment'
import Vue from 'vue'

export const currentTimestamp = () => {
    return Date.now() / 1000 | 0
}

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Recursively make a copy of all the properties
 * of an object and write them to a target object,
 * if one is provided, or return a new object.
 *
 * @param from
 * @param to
 * @returns {*}
 */
export const copy = (from, to, overwriteObject = false) => {
    // console.log('copy', from, to)
    // Only bother with copying if from
    // is defined
    if (defined(from)) {
        // console.log('from is defined')

        // If 'from' is an object
        if (_.isObject(from)) {
            // console.log('from is an object')

            // if 'from' is an array
            if (Array.isArray(from)) {
                // console.log('from is an array of length', from.length)

                // Create an empty array or a reference to 'to',
                // if it exists and is also an array.
                const copied = (defined(to) && Array.isArray(to)) ? to : []

                // Loop through all the values in 'from'
                for (let i = 0; i < from.length; i++) {
                    // let copy = copy([from[i]])

                    // If 'to' is defined and has an entry at
                    // this index, splice a copied version of
                    // the value at this index in 'from'.
                    if (defined(to) && to !== null && to[i]) {
                        copied.splice(i, 1, copy(from[i], to[i]))
                    }
                    // Otherwise, just add the value of this
                    // index in from.
                    else {
                        copied.push(copy(from[i]))
                    }
                }
                // Since this was an array, there is nothing
                // more to do and it gets returned
                return copied
            }

            // Create an empty object or a reference to 'to',
            // if it exists and is also an object
            const copied = (defined(to) && _.isObject(to)) ? to : {},
                keys = Object.keys(from)

            // Loop through the object keys
            for (let i = 0; i < keys.length; i++) {

                // If from somehow doesn't contain this key, continue
                if (!has(from, keys[i])) {
                    // console.log("from doesn't contain the key")
                    continue
                }

                // If 'to' is defined and has this property,
                // use Vue.set to add a recursively copied version
                // of this property to the output object, running
                // copy again with the property values of 'from'
                // and 'to'.
                if (defined(to) && to !== null && has(to, keys[i])) {
                    Vue.set(copied, keys[i], copy(from[keys[i]], to[keys[i]]))
                }
                // Otherwise, just add the property, recursively
                // calling copy on that property of from, in case
                // it is an object or array
                else {
                    Vue.set(copied, keys[i], copy(from[keys[i]]))
                }
            }

            return copied
        }

        // console.log('Primitive', from, to)

        // If we have made it this far and 'from'
        // is null, and 'to' is defined, return 'to'
        if (from === null && defined(to)) {
            return to
        }

        // From was a primitive value and we just return it
        // console.log('We are just at the point of returning from')
        return from
    }

    // Undefined
    return undefined
}

export const defined = (variable) => {
    return typeof variable !== 'undefined'
}

export const delay = (ms) => {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms)
    })
}

/**
 * Recursively delete a property using dot notation,
 * deleting any empty objects up the parent chain.
 * @param obj
 * @param key
 */
export const dataDelete = (obj, key) => {
    if (defined(obj) && defined(key)) {
        // console.log('dataDelete', obj, key)
        // Base case: If the key is not a string or doesn't
        // contain a '.', delete it from the object
        if (typeof key !== 'string' || key.indexOf('.') < 0) {
            Vue.delete(obj, key)
        }
        // Otherwise, recursively delete this item
        else {
            const levels = key.split('.')
            const current = levels.shift()
            const child = obj[current]

            // Run this again recursively for the next level
            dataDelete(child, levels.join('.'))

            // If the property we deleted left the parent empty,
            // delete it.
            if (_.isEmpty(child)) {
                Vue.delete(obj, current)
            }
        }
    }
}

export const vueDeepDelete = (object, path) => {
    path = castPath(path)

    if (path.length >= 2) {
        object = _.get(object, path.slice(0, -1))
    }

    return object == null | Vue.delete(object, path[path.length-1])
}

/**
 * Get a property on an object with dot notation.
 *
 * @param {object} obj
 * @param {string} key
 * @returns {object}
 */
export const dataGet = (obj, key, log = false) => {
    if (log) console.log('====dataGet====')
    if (log) console.log(key, obj)
    if (defined(obj) && obj) {
        // obj = jsonClone(obj)
        let levels = []
        if (typeof key === 'string' && key.indexOf('.') >= 0) {
            levels = key.split('.')
        } else {
            levels = [key]
        }

        let candidate
        for (let i = 0; i < levels.length; i++) {
            if (log) console.log('level', levels[i], obj, has(obj, levels[i]))
            candidate = obj[levels[i]]
            if (log) console.log('candidate', candidate)

            // Changed this to return obj instead of undefined
            // to preserve empty strings and null values
            if (!defined(candidate)) {
                if (candidate === '') {
                    return ''
                }
                if (candidate === null) {
                    return null
                }
                return undefined
            }

            obj = candidate
            if (log) console.log('obj (leveled)', obj)
        }
    }

    if (_.isObject(obj)) {
        obj = jsonClone(obj)
    }

    if (log) console.log('dataGet result', obj)

    return obj
}

/**
 * Reactively set a property on an object using dot
 * notation, creating properties that don't exist.
 *
 * @param {object} obj
 * @param {string} key
 * @param {*} value
 */
export const dataSet = (obj, key, value) => {
    // console.log('dataSet', obj, key, value)
    let levels = []
    // If this is a string and it contains a dot, then we
    // split it into a series of levels that will be
    // traversed to find the eventual target
    if (typeof key === 'string' && key.indexOf('.') >= 0) {
        levels = key.split('.')
    }
    // Otherwise, we just have one level
    else {
        levels = [key]
    }

    // Loop through each level
    for (let i = 0; i < levels.length; i++) {
        // console.log(levels[i], obj)
        // If we are not on the bottom level yet
        if (i < levels.length-1) {
            // If this level doesn't exist yet in the object...
            if (!has(obj, levels[i])) {
                // ...add it
                Vue.set(obj, levels[i], {})
            }
            obj = obj[levels[i]]
        }
        // We are at the bottom level, set it
        else {
            Vue.set(obj, levels[i], value)
        }
    }
}

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
export const vueDeepSet = (object, path, value, customizer) => {
    if (!_.isObject(object)) {
        return object;
    }

    path = castPath(path)

    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        nested = object;

    while (nested != null && ++index < length) {
        var key = path[index],
            newValue = value;

        if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined;
            if (newValue === undefined) {
                newValue = _.isObject(objValue)
                    ? objValue
                    : (isIndex(path[index + 1]) ? [] : {});
            }
        }
        Vue.set(nested, key, newValue);
        nested = nested[key];
    }
    return object;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @returns {Array} Returns the cast property path array.
 * @param path
 */
function castPath(path) {
    if (_.isArray(path)) {
        return path;
    }

    let levels

    if (typeof path === 'string' && path.indexOf('.') >= 0) {
        levels = path.split('.')
    }
    // Otherwise, we just have one level
    else {
        levels = [path]
    }
    return levels;
}

/**
 * Checks if `value` is a valid array-like index.
 * Copied from https://github.com/lodash/lodash/blob/4.17.10/lodash.js#L6280
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
    var type = typeof value;

    return !!length &&
        (type == 'number' ||
            (type != 'symbol')) &&
        (value > -1 && value % 1 == 0 && value < length);
}

export const equalOrEmpty = (first, second) => {
    if (first === second || _.isEqual(first, second)) {
        return true
    }

    // Todo: consider whether we want to exclude 0 and ''
    return (!first && !second)
}

export const formattedDatetime = (format, datetime = {}, formatIn = '') => {
    if (formatIn) {
        return moment(datetime, formatIn).format(format)
    }
    return moment(datetime).format(format)
}

// Todo: remove this
export const getConfig = (config, key) => {
    if (config && defined(config[key])) {
        return config[key];
    }

    return undefined
}

export const has = (object, key) => {
    return Object.prototype.hasOwnProperty.call(object, key)
}

export const jsonClone = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}

export const indefiniteArticle = phrase => {

    // Getting the first word
    var match = /\w+/.exec(phrase);
    if (match)
        var word = match[0];
    else
        return "an";

    var l_word = word.toLowerCase();
    // Specific start of words that should be preceeded by 'an'
    var alt_cases = ["honest", "hour", "hono"];
    for (var i in alt_cases) {
        if (l_word.indexOf(alt_cases[i]) == 0)
            return "an";
    }

    // Single letter word which should be preceeded by 'an'
    if (l_word.length == 1) {
        if ("aedhilmnorsx".indexOf(l_word) >= 0)
            return "an";
        else
            return "a";
    }

    // Capital words which should likely be preceeded by 'an'
    if (word.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/)) {
        return "an";
    }

    // Special cases where a word that begins with a vowel should be preceeded by 'a'
    const regexes = [/^e[uw]/, /^onc?e\b/, /^uni([^nmd]|mo)/, /^u[bcfhjkqrst][aeiou]/]
    for (var i in regexes) {
        if (l_word.match(regexes[i]))
            return "a"
    }

    // Special capital words (UK, UN)
    if (word.match(/^U[NK][AIEO]/)) {
        return "a";
    }
    else if (word == word.toUpperCase()) {
        if ("aedhilmnorsx".indexOf(l_word[0]) >= 0)
            return "an";
        else
            return "a";
    }

    // Basic method of words that begin with a vowel being preceeded by 'an'
    if ("aeiou".indexOf(l_word[0]) >= 0)
        return "an";

    // Instances where y follwed by specific letters is preceeded by 'an'
    if (l_word.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/))
        return "an";

    return "a";
}

export const mustacheTemplate = (template, obj) => {
    if (defined(obj) && template.match(/{{\s*[\w\.]+\s*}}/g)) {
        return template.replace(/{{\s*[\w\.]+\s*}}/g, function(match) {
            return dataGet(obj, match.match(/[\w\.]+/)[0])
        })
    }

    return template
}

export const sortObject = (obj) => {
    // If this isn't an object, do nothing
    if (!_.isObject(obj)) {
        return obj
    }
    const newObj = Object.create(null)
    const keys = Object.keys(obj)
    keys.sort()
    keys.forEach(key => {
        newObj[key] = sortObject(obj[key])
    })

    return newObj
}

export const stringifyObject = (obj) => {
    const sortedObj = sortObject(obj)
    return JSON.stringify(sortedObj)
}

export const timeout = (ms, promise) => {
    return new Promise(function (resolve, reject) {
        promise.then(resolve)
        setTimeout(function () {
            reject(new Error('Timeout after '+ms+' ms'))
        }, ms)
    })
}

export const uuidv4 = () => {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}