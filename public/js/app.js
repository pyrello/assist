webpackJsonp([95],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(231);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mutations__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getters__ = __webpack_require__(221);






var CrudModule = function CrudModule(name) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$state = _ref.state,
        state = _ref$state === undefined ? {} : _ref$state,
        _ref$actions = _ref.actions,
        actions = _ref$actions === undefined ? {} : _ref$actions,
        _ref$getters = _ref.getters,
        getters = _ref$getters === undefined ? {} : _ref$getters,
        _ref$mutations = _ref.mutations,
        mutations = _ref$mutations === undefined ? {} : _ref$mutations,
        _ref$namespaced = _ref.namespaced,
        namespaced = _ref$namespaced === undefined ? true : _ref$namespaced,
        modules = _ref.modules,
        endpoint = _ref.endpoint,
        _ref$keyField = _ref.keyField,
        keyField = _ref$keyField === undefined ? 'id' : _ref$keyField;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, CrudModule);

    this.endpoint = endpoint || name;
    this.name = name;
    this.namespaced = namespaced;

    this.keyField = keyField;

    this.state = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        all: [],
        completeRecords: [],
        currentFilter: '{}',
        currentId: 0,
        // currentPage: 0,
        orderBy: 'id',
        order: 'asc',
        orderType: 'number',
        endpoint: this.endpoint,
        fetched: {},
        fetching: false,
        filters: [],
        filtered: {},
        keyField: 'id',
        limit: -1,
        links: {},
        listing: [],
        meta: {},
        type: name
    }, state);

    this.getters = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_4__getters__["b" /* default */], getters);

    this.actions = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_2__actions__, actions);

    this.mutations = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__mutations__["a" /* default */], mutations);

    if (modules) {
        this.modules = modules;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (CrudModule);

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(50)('wks');
var uid = __webpack_require__(38);
var Symbol = __webpack_require__(5).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return currentTimestamp; });
/* unused harmony export capitalizeFirstLetter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return defined; });
/* unused harmony export delay */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dataDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return vueDeepDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dataGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return dataSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return vueDeepSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return equalOrEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return formattedDatetime; });
/* unused harmony export getConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return jsonClone; });
/* unused harmony export indefiniteArticle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return mustacheTemplate; });
/* unused harmony export sortObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return stringifyObject; });
/* unused harmony export timeout */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return uuidv4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_keys__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue__);









var currentTimestamp = function currentTimestamp() {
    return Date.now() / 1000 | 0;
};

var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Recursively make a copy of all the properties
 * of an object and write them to a target object,
 * if one is provided, or return a new object.
 *
 * @param from
 * @param to
 * @returns {*}
 */
var copy = function copy(from, to) {
    var overwriteObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    // console.log('copy', from, to)
    // Only bother with copying if from
    // is defined
    if (defined(from)) {
        // console.log('from is defined')

        // If 'from' is an object
        if (__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.isObject(from)) {
            // console.log('from is an object')

            // if 'from' is an array
            if (Array.isArray(from)) {
                // console.log('from is an array of length', from.length)

                // Create an empty array or a reference to 'to',
                // if it exists and is also an array.
                var _copied = defined(to) && Array.isArray(to) ? to : [];

                // Loop through all the values in 'from'
                for (var i = 0; i < from.length; i++) {
                    // let copy = copy([from[i]])

                    // If 'to' is defined and has an entry at
                    // this index, splice a copied version of
                    // the value at this index in 'from'.
                    if (defined(to) && to !== null && to[i]) {
                        _copied.splice(i, 1, copy(from[i], to[i]));
                    }
                    // Otherwise, just add the value of this
                    // index in from.
                    else {
                            _copied.push(copy(from[i]));
                        }
                }
                // Since this was an array, there is nothing
                // more to do and it gets returned
                return _copied;
            }

            // Create an empty object or a reference to 'to',
            // if it exists and is also an object
            var copied = defined(to) && __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.isObject(to) ? to : {},
                keys = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_keys___default()(from);

            // Loop through the object keys
            for (var _i = 0; _i < keys.length; _i++) {

                // If from somehow doesn't contain this key, continue
                if (!has(from, keys[_i])) {
                    // console.log("from doesn't contain the key")
                    continue;
                }

                // If 'to' is defined and has this property,
                // use Vue.set to add a recursively copied version
                // of this property to the output object, running
                // copy again with the property values of 'from'
                // and 'to'.
                if (defined(to) && to !== null && has(to, keys[_i])) {
                    __WEBPACK_IMPORTED_MODULE_7_vue___default.a.set(copied, keys[_i], copy(from[keys[_i]], to[keys[_i]]));
                }
                // Otherwise, just add the property, recursively
                // calling copy on that property of from, in case
                // it is an object or array
                else {
                        __WEBPACK_IMPORTED_MODULE_7_vue___default.a.set(copied, keys[_i], copy(from[keys[_i]]));
                    }
            }

            return copied;
        }

        // console.log('Primitive', from, to)

        // If we have made it this far and 'from'
        // is null, and 'to' is defined, return 'to'
        if (from === null && defined(to)) {
            return to;
        }

        // From was a primitive value and we just return it
        // console.log('We are just at the point of returning from')
        return from;
    }

    // Undefined
    return undefined;
};

var defined = function defined(variable) {
    return typeof variable !== 'undefined';
};

var delay = function delay(ms) {
    return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function (resolve) {
        setTimeout(resolve, ms);
    });
};

/**
 * Recursively delete a property using dot notation,
 * deleting any empty objects up the parent chain.
 * @param obj
 * @param key
 */
var dataDelete = function dataDelete(obj, key) {
    if (defined(obj) && defined(key)) {
        // console.log('dataDelete', obj, key)
        // Base case: If the key is not a string or doesn't
        // contain a '.', delete it from the object
        if (typeof key !== 'string' || key.indexOf('.') < 0) {
            __WEBPACK_IMPORTED_MODULE_7_vue___default.a.delete(obj, key);
        }
        // Otherwise, recursively delete this item
        else {
                var levels = key.split('.');
                var current = levels.shift();
                var child = obj[current];

                // Run this again recursively for the next level
                dataDelete(child, levels.join('.'));

                // If the property we deleted left the parent empty,
                // delete it.
                if (__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.isEmpty(child)) {
                    __WEBPACK_IMPORTED_MODULE_7_vue___default.a.delete(obj, current);
                }
            }
    }
};

var vueDeepDelete = function vueDeepDelete(object, path) {
    path = castPath(path);

    if (path.length >= 2) {
        object = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.get(object, path.slice(0, -1));
    }

    return object == null | __WEBPACK_IMPORTED_MODULE_7_vue___default.a.delete(object, path[path.length - 1]);
};

/**
 * Get a property on an object with dot notation.
 *
 * @param {object} obj
 * @param {string} key
 * @returns {object}
 */
var dataGet = function dataGet(obj, key) {
    var log = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (log) console.log('====dataGet====');
    if (log) console.log(key, obj);
    if (defined(obj) && obj) {
        // obj = jsonClone(obj)
        var levels = [];
        if (typeof key === 'string' && key.indexOf('.') >= 0) {
            levels = key.split('.');
        } else {
            levels = [key];
        }

        var candidate = void 0;
        for (var i = 0; i < levels.length; i++) {
            if (log) console.log('level', levels[i], obj, has(obj, levels[i]));
            candidate = obj[levels[i]];
            if (log) console.log('candidate', candidate);

            // Changed this to return obj instead of undefined
            // to preserve empty strings and null values
            if (!defined(candidate)) {
                if (candidate === '') {
                    return '';
                }
                if (candidate === null) {
                    return null;
                }
                return undefined;
            }

            obj = candidate;
            if (log) console.log('obj (leveled)', obj);
        }
    }

    if (__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.isObject(obj)) {
        obj = jsonClone(obj);
    }

    if (log) console.log('dataGet result', obj);

    return obj;
};

/**
 * Reactively set a property on an object using dot
 * notation, creating properties that don't exist.
 *
 * @param {object} obj
 * @param {string} key
 * @param {*} value
 */
var dataSet = function dataSet(obj, key, value) {
    // console.log('dataSet', obj, key, value)
    var levels = [];
    // If this is a string and it contains a dot, then we
    // split it into a series of levels that will be
    // traversed to find the eventual target
    if (typeof key === 'string' && key.indexOf('.') >= 0) {
        levels = key.split('.');
    }
    // Otherwise, we just have one level
    else {
            levels = [key];
        }

    // Loop through each level
    for (var i = 0; i < levels.length; i++) {
        // console.log(levels[i], obj)
        // If we are not on the bottom level yet
        if (i < levels.length - 1) {
            // If this level doesn't exist yet in the object...
            if (!has(obj, levels[i])) {
                // ...add it
                __WEBPACK_IMPORTED_MODULE_7_vue___default.a.set(obj, levels[i], {});
            }
            obj = obj[levels[i]];
        }
        // We are at the bottom level, set it
        else {
                __WEBPACK_IMPORTED_MODULE_7_vue___default.a.set(obj, levels[i], value);
            }
    }
};

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
var vueDeepSet = function vueDeepSet(object, path, value, customizer) {
    if (!__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.isObject(object)) {
        return object;
    }

    path = castPath(path);

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
                newValue = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
        }
        __WEBPACK_IMPORTED_MODULE_7_vue___default.a.set(nested, key, newValue);
        nested = nested[key];
    }
    return object;
};

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @returns {Array} Returns the cast property path array.
 * @param path
 */
function castPath(path) {
    if (__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.isArray(path)) {
        return path;
    }

    var levels = void 0;

    if (typeof path === 'string' && path.indexOf('.') >= 0) {
        levels = path.split('.');
    }
    // Otherwise, we just have one level
    else {
            levels = [path];
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
    var type = typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(value);

    return !!length && (type == 'number' || type != 'symbol') && value > -1 && value % 1 == 0 && value < length;
}

var equalOrEmpty = function equalOrEmpty(first, second) {
    if (first === second || __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.isEqual(first, second)) {
        return true;
    }

    // Todo: consider whether we want to exclude 0 and ''
    return !first && !second;
};

var formattedDatetime = function formattedDatetime(format) {
    var datetime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var formatIn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    if (formatIn) {
        return __WEBPACK_IMPORTED_MODULE_6_moment___default()(datetime, formatIn).format(format);
    }
    return __WEBPACK_IMPORTED_MODULE_6_moment___default()(datetime).format(format);
};

// Todo: remove this
var getConfig = function getConfig(config, key) {
    if (config && defined(config[key])) {
        return config[key];
    }

    return undefined;
};

var has = function has(object, key) {
    return Object.prototype.hasOwnProperty.call(object, key);
};

var jsonClone = function jsonClone(obj) {
    return JSON.parse(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(obj));
};

var indefiniteArticle = function indefiniteArticle(phrase) {

    // Getting the first word
    var match = /\w+/.exec(phrase);
    if (match) var word = match[0];else return "an";

    var l_word = word.toLowerCase();
    // Specific start of words that should be preceeded by 'an'
    var alt_cases = ["honest", "hour", "hono"];
    for (var i in alt_cases) {
        if (l_word.indexOf(alt_cases[i]) == 0) return "an";
    }

    // Single letter word which should be preceeded by 'an'
    if (l_word.length == 1) {
        if ("aedhilmnorsx".indexOf(l_word) >= 0) return "an";else return "a";
    }

    // Capital words which should likely be preceeded by 'an'
    if (word.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/)) {
        return "an";
    }

    // Special cases where a word that begins with a vowel should be preceeded by 'a'
    var regexes = [/^e[uw]/, /^onc?e\b/, /^uni([^nmd]|mo)/, /^u[bcfhjkqrst][aeiou]/];
    for (var i in regexes) {
        if (l_word.match(regexes[i])) return "a";
    }

    // Special capital words (UK, UN)
    if (word.match(/^U[NK][AIEO]/)) {
        return "a";
    } else if (word == word.toUpperCase()) {
        if ("aedhilmnorsx".indexOf(l_word[0]) >= 0) return "an";else return "a";
    }

    // Basic method of words that begin with a vowel being preceeded by 'an'
    if ("aeiou".indexOf(l_word[0]) >= 0) return "an";

    // Instances where y follwed by specific letters is preceeded by 'an'
    if (l_word.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)) return "an";

    return "a";
};

var mustacheTemplate = function mustacheTemplate(template, obj) {
    if (defined(obj) && template.match(/{{\s*[\w\.]+\s*}}/g)) {
        return template.replace(/{{\s*[\w\.]+\s*}}/g, function (match) {
            return dataGet(obj, match.match(/[\w\.]+/)[0]);
        });
    }

    return template;
};

var sortObject = function sortObject(obj) {
    // If this isn't an object, do nothing
    if (!__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.isObject(obj)) {
        return obj;
    }
    var newObj = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create___default()(null);
    var keys = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_keys___default()(obj);
    keys.sort();
    keys.forEach(function (key) {
        newObj[key] = sortObject(obj[key]);
    });

    return newObj;
};

var stringifyObject = function stringifyObject(obj) {
    var sortedObj = sortObject(obj);
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(sortedObj);
};

var timeout = function timeout(ms, promise) {
    return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        promise.then(resolve);
        setTimeout(function () {
            reject(new Error('Timeout after ' + ms + ' ms'));
        }, ms);
    });
};

var uuidv4 = function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    });
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(216);
var isBuffer = __webpack_require__(321);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_getters__ = __webpack_require__(221);



// state
var state = function state() {
    return {
        all: []
    };
};

// getters
var getters = {
    all: function all(state) {
        return state.all;
    },
    byId: __WEBPACK_IMPORTED_MODULE_1__crud_getters__["a" /* byId */]
};

// mutations
var mutations = {
    receiveItems: function receiveItems(state, items) {
        items.forEach(function (item) {
            state.all.push(item);
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    getters: getters,
    mutations: mutations,
    namespaced: true,
    state: state
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(2);
var ctx = __webpack_require__(29);
var hide = __webpack_require__(18);
var has = __webpack_require__(19);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(21)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(62);
var toPrimitive = __webpack_require__(46);
var dP = Object.defineProperty;

exports.f = __webpack_require__(13) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(35);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(315), __esModule: true };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14);
var createDesc = __webpack_require__(37);
module.exports = __webpack_require__(13) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(64);
var defined = __webpack_require__(47);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(277), __esModule: true };

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(301), __esModule: true };

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export Store */
/* unused harmony export createLogger */
/* unused harmony export createNamespacedHelpers */
/* unused harmony export install */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mapGetters; });
/* unused harmony export mapMutations */
/* unused harmony export mapState */
/*!
 * vuex v3.5.1
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key)
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ("development" !== 'production') &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (("development" !== 'production') && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (("development" !== 'production') && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (("development" !== 'production') && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (("development" !== 'production') && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (("development" !== 'production') && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (("development" !== 'production') && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (("development" !== 'production') && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (("development" !== 'production') && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index = {
  Store: Store,
  install: install,
  version: '3.5.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

/* harmony default export */ __webpack_exports__["a"] = (index);


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(23)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(366), __esModule: true };

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(36);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(63);
var enumBugKeys = __webpack_require__(51);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(47);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(354), __esModule: true };

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_abuserAutocomplete__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_abuseRelationships__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_abusers__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_activities__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_advocates__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_auth__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_clientAutocomplete__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_clientOutcomes__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_clients__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_dependents__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_incident_types__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modules_incidents__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_intakes__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_list__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_locations__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modules_messages__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modules_notes__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modules_outcomes__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modules_phones__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modules_profiles__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__modules_reports__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__modules_services__ = __webpack_require__(361);




































/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* default */].Store({
    modules: {
        abuseRelationships: __WEBPACK_IMPORTED_MODULE_2__modules_abuseRelationships__["a" /* default */],
        abuserRelationshipTypes: __WEBPACK_IMPORTED_MODULE_14__modules_list__["a" /* default */],
        abuseTypes: __WEBPACK_IMPORTED_MODULE_14__modules_list__["a" /* default */],
        abusers: __WEBPACK_IMPORTED_MODULE_3__modules_abusers__["a" /* default */],
        abuserAutocomplete: __WEBPACK_IMPORTED_MODULE_1__modules_abuserAutocomplete__["a" /* default */],
        activities: __WEBPACK_IMPORTED_MODULE_4__modules_activities__["a" /* default */],
        advocates: __WEBPACK_IMPORTED_MODULE_5__modules_advocates__["a" /* default */],
        auth: __WEBPACK_IMPORTED_MODULE_6__modules_auth__["a" /* default */],
        clientAutocomplete: __WEBPACK_IMPORTED_MODULE_7__modules_clientAutocomplete__["a" /* default */],
        clientOutcomes: __WEBPACK_IMPORTED_MODULE_8__modules_clientOutcomes__["a" /* default */],
        clients: __WEBPACK_IMPORTED_MODULE_9__modules_clients__["a" /* default */],
        dependents: __WEBPACK_IMPORTED_MODULE_10__modules_dependents__["a" /* default */],
        ethnicity: __WEBPACK_IMPORTED_MODULE_14__modules_list__["a" /* default */],
        eyeColors: __WEBPACK_IMPORTED_MODULE_14__modules_list__["a" /* default */],
        fundingSources: __WEBPACK_IMPORTED_MODULE_14__modules_list__["a" /* default */],
        genders: __WEBPACK_IMPORTED_MODULE_14__modules_list__["a" /* default */],
        hairColors: __WEBPACK_IMPORTED_MODULE_14__modules_list__["a" /* default */],
        hairLengths: __WEBPACK_IMPORTED_MODULE_14__modules_list__["a" /* default */],
        housingStatuses: __WEBPACK_IMPORTED_MODULE_14__modules_list__["a" /* default */],
        incidents: __WEBPACK_IMPORTED_MODULE_12__modules_incidents__["a" /* default */],
        incidentTypes: __WEBPACK_IMPORTED_MODULE_11__modules_incident_types__["a" /* default */],
        intakes: __WEBPACK_IMPORTED_MODULE_13__modules_intakes__["a" /* default */],
        locations: __WEBPACK_IMPORTED_MODULE_15__modules_locations__["a" /* default */],
        messages: __WEBPACK_IMPORTED_MODULE_16__modules_messages__["a" /* default */],
        notes: __WEBPACK_IMPORTED_MODULE_17__modules_notes__["a" /* default */],
        outcomes: __WEBPACK_IMPORTED_MODULE_18__modules_outcomes__["a" /* default */],
        phones: __WEBPACK_IMPORTED_MODULE_19__modules_phones__["a" /* default */],
        phoneTypes: __WEBPACK_IMPORTED_MODULE_14__modules_list__["a" /* default */],
        profiles: __WEBPACK_IMPORTED_MODULE_20__modules_profiles__["a" /* default */],
        referralSources: __WEBPACK_IMPORTED_MODULE_14__modules_list__["a" /* default */],
        reports: __WEBPACK_IMPORTED_MODULE_21__modules_reports__["a" /* default */],
        services: __WEBPACK_IMPORTED_MODULE_22__modules_services__["a" /* default */],
        serviceNotProvidedReasons: __WEBPACK_IMPORTED_MODULE_14__modules_list__["a" /* default */]
    }
}));

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(14).f;
var has = __webpack_require__(19);
var TAG = __webpack_require__(6)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(56);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(368);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(25);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(56);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
var document = __webpack_require__(5).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(15);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(50)('keys');
var uid = __webpack_require__(38);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var global = __webpack_require__(5);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(32) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 52 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(280);
var enumBugKeys = __webpack_require__(51);
var IE_PROTO = __webpack_require__(49)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(45)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(70).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(36);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(303), __esModule: true };

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(304);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(306);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(6);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(32);
var wksExt = __webpack_require__(57);
var defineProperty = __webpack_require__(14).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(8);
var normalizeHeaderName = __webpack_require__(323);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(217);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(217);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(78)))

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_create__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_create___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_create__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_define_property__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common__ = __webpack_require__(7);










var Model = function () {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(Model, [{
        key: 'exists',
        get: function get() {
            return !!this._attributes.id;
        }
    }]);

    function Model() {
        var blank = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _this = this;

        var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, Model);

        // console.log('constructing model', blank, attributes)

        // this._watcherVM = new Vue()

        __WEBPACK_IMPORTED_MODULE_7_vue___default.a.set(this, '_options', options);

        // Create attributes and original arrays
        Object.defineProperty(this, '_original', {
            configurable: true,
            writable: true,
            // Deep clone blank and attributes to
            // remove references
            value: Object(__WEBPACK_IMPORTED_MODULE_8__common__["a" /* copy */])(attributes, blank)
        });

        Object.defineProperty(this, '_attributes', {
            configurable: true,
            writable: true,
            // Deep clone original to remove references
            value: Object(__WEBPACK_IMPORTED_MODULE_8__common__["a" /* copy */])(this._original)
        });

        this.changed = {};
        this.trackChanges = true;

        // this.exists = !!(attributes.id)

        this.loaded = false;

        if (__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(attributes).length) {
            this.loaded = true;
        }

        this.uuid = Object(__WEBPACK_IMPORTED_MODULE_8__common__["m" /* uuidv4 */])();

        // console.log('Adding all the original fields', this.constructor.name, this.uuid)
        // Loop through keys of original data and
        // define top-level accessors for them to
        // provide reactive points
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(this._original).forEach(function (key) {
            // console.log('Adding', key)
            _this.setAttribute(key, { context: _this });
        });
    }

    /**
     * @returns {string} The class name of this instance.
     */


    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(Model, [{
        key: 'log',
        value: function log() {
            var _console;

            for (var _len = arguments.length, messages = Array(_len), _key = 0; _key < _len; _key++) {
                messages[_key] = arguments[_key];
            }

            if (this.getOption('log')) (_console = console).log.apply(_console, ['[' + this.$class + ']'].concat(messages));
        }
    }, {
        key: 'getOption',
        value: function getOption(option) {
            return __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.get(this._options, option);
        }
    }, {
        key: 'assign',
        value: function assign(data) {
            var _this2 = this;

            var silent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            // console.log('data', data)
            // Attributes must be provided
            if (Object(__WEBPACK_IMPORTED_MODULE_8__common__["f" /* defined */])(data)) {

                // this.exists = !!(data.id)

                // If we are not adding changes
                if (silent) {
                    // console.log('filling silently', data)
                    this.trackChanges = false;
                    // Load the values into this._original
                    __WEBPACK_IMPORTED_MODULE_7_vue___default.a.set(this, '_original', data);

                    // console.log('original', this._original)
                }

                this.loaded = true;
                // copy(data, this)

                // Todo: how to handle when the item is not already in this._original
                __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(data).forEach(function (key) {
                    // console.log('filling', key)
                    if (!Object(__WEBPACK_IMPORTED_MODULE_8__common__["i" /* has */])(_this2._original, key)) {
                        _this2._original[key] = _this2.guessDefaultForValue(data[key]);
                    }
                    _this2.setAttribute(key, { data: data });
                });

                this.trackChanges = true;

                // Trigger reactive changes
                var ob = this.__ob__;
                if (ob && ob.dep) {
                    ob.dep.notify();
                }
            }
        }
    }, {
        key: 'getChanges',
        value: function getChanges(attribute) {
            if (__WEBPACK_IMPORTED_MODULE_6_lodash___default.a.isUndefined(attribute)) {
                return this.changed;
            }
            return __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.get(this.changed, attribute);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(fullKey) {
            // console.log('handling change', fullKey)
            if (!this.trackChanges) {
                // console.warn('Not tracking changes', fullKey)
                return false;
            }

            // console.log('handleChange', key, context)
            if (this.isChanging(fullKey)) {
                // console.log('Adding value to this.changed')
                var newVal = Object(__WEBPACK_IMPORTED_MODULE_8__common__["d" /* dataGet */])(this, fullKey);
                Object(__WEBPACK_IMPORTED_MODULE_8__common__["o" /* vueDeepSet */])(this.changed, fullKey, newVal);
            } else {
                // console.log('Removing value from this.changed')
                Object(__WEBPACK_IMPORTED_MODULE_8__common__["n" /* vueDeepDelete */])(this.changed, fullKey);
            }

            // Trigger reactive changes
            var ob = this.__ob__;
            if (ob && ob.dep) {
                ob.dep.notify();
            }
        }
    }, {
        key: 'isChanging',
        value: function isChanging(fullKey) {
            // console.log(`${fullKey} isChanging?`)
            var check = __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.get(this._attributes, fullKey),
                against = __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.get(this._original, fullKey);

            // console.log('check', check)
            // console.log('against', check)

            if (Object(__WEBPACK_IMPORTED_MODULE_8__common__["f" /* defined */])(check) || Object(__WEBPACK_IMPORTED_MODULE_8__common__["f" /* defined */])(against)) {

                // Value is not empty and has changed
                // console.log('not equal or empty', check, against, !equalOrEmpty(check, against))
                return !Object(__WEBPACK_IMPORTED_MODULE_8__common__["g" /* equalOrEmpty */])(check, against);
            }

            return false;
        }
    }, {
        key: 'isDirty',
        value: function isDirty() {
            return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(this.changed).length > 0;
        }
    }, {
        key: 'update',
        value: function update(attributes) {
            this.assign(attributes, false);
        }
    }, {
        key: 'getAttributes',
        value: function getAttributes() {
            return this._attributes;
        }

        // Todo: Name passed in attributes something else

    }, {
        key: 'setAttribute',
        value: function setAttribute(key, _ref) {
            var _ref$fullKey = _ref.fullKey,
                fullKey = _ref$fullKey === undefined ? key : _ref$fullKey,
                _ref$context = _ref.context,
                context = _ref$context === undefined ? this : _ref$context,
                _ref$data = _ref.data,
                data = _ref$data === undefined ? this._attributes : _ref$data;

            // console.warn('*^*^*^*^ Starting setAttribute')

            // console.log('key', key)
            // console.log('fullKey', fullKey)
            // console.log('context', context)
            // console.log('data', data)

            // The key we are setting must exist in data
            if (Object(__WEBPACK_IMPORTED_MODULE_8__common__["i" /* has */])(data, key)) {
                // console.log('About to check the value')
                var v = Object(__WEBPACK_IMPORTED_MODULE_8__common__["d" /* dataGet */])(data, key),

                // And the original, if it exists
                orig = Object(__WEBPACK_IMPORTED_MODULE_8__common__["d" /* dataGet */])(this, fullKey);
                // console.log('v', v)

                /**
                 * If the old value is an object and v is null, keep the
                 * old value. This is a workaround for when we have a client
                 * with no address and it is passed from the server as null,
                 * rather than a blank object.
                 */
                if (v === null && __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.isObject(orig)) {
                    // console.log('setting v to orig')
                    v = orig;
                }

                // v is an object
                if (__WEBPACK_IMPORTED_MODULE_6_lodash___default.a.isObject(v)) {
                    // console.log('>>>>>>>>>>>>>>>>> passed _.isObject(v)')
                    if (Array.isArray(v)) {
                        this.defineArray(key, v, { fullKey: fullKey, context: context });
                    } else {
                        this.defineObject(key, v, { fullKey: fullKey, context: context });
                    }
                }
                // v is a primitive
                else {
                        // console.log(fullKey, 'is a primitive')
                        Object(__WEBPACK_IMPORTED_MODULE_8__common__["o" /* vueDeepSet */])(this._attributes, fullKey, v);

                        this.defineAttribute(key, { fullKey: fullKey, context: context });
                        this.handleChange(key, context);
                    }
            }
            // console.warn('*^*^*^*^ Ending setAttribute')
        }
    }, {
        key: 'defineAttribute',
        value: function defineAttribute(key) {
            var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref2$fullKey = _ref2.fullKey,
                fullKey = _ref2$fullKey === undefined ? key : _ref2$fullKey,
                _ref2$context = _ref2.context,
                context = _ref2$context === undefined ? this : _ref2$context;

            var self = this;

            __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_define_property___default()(context, key, {
                configurable: true,
                enumerable: true,
                get: function get() {
                    return Object(__WEBPACK_IMPORTED_MODULE_8__common__["d" /* dataGet */])(self._attributes, fullKey);
                },
                set: function set(value) {
                    Object(__WEBPACK_IMPORTED_MODULE_8__common__["o" /* vueDeepSet */])(self._attributes, fullKey, value);
                    self.handleChange(fullKey, context);
                }
            });
        }
    }, {
        key: 'defineArray',
        value: function defineArray(key) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                _ref3$fullKey = _ref3.fullKey,
                fullKey = _ref3$fullKey === undefined ? key : _ref3$fullKey,
                _ref3$context = _ref3.context,
                context = _ref3$context === undefined ? this : _ref3$context;

            // console.log('defining on array on', fullKey)

            if (!Array.isArray(Object(__WEBPACK_IMPORTED_MODULE_8__common__["d" /* dataGet */])(this._attributes, fullKey))) {
                // console.log(this.uuid, `Creating ${fullKey} array on this._attributes`)
                Object(__WEBPACK_IMPORTED_MODULE_8__common__["e" /* dataSet */])(this._attributes, fullKey, []);
            }

            if (!Array.isArray(context[key])) {
                // console.log(this.uuid, `Creating ${key} array in context`)
                this.defineAttribute(key, { fullKey: fullKey, context: context });
            }

            // console.log('v is an array')
            for (var i = 0; i < data.length; i++) {
                this.setAttribute(i, {
                    context: context[key],
                    fullKey: fullKey + '.' + i,
                    // We pass the data itself
                    data: data
                });
            }

            // Trigger reactive changes
            var ob = context[key].__ob__;
            if (ob && ob.dep) {
                ob.dep.notify();
            }
        }
    }, {
        key: 'defineObject',
        value: function defineObject(key) {
            var _this3 = this;

            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var _ref4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                _ref4$fullKey = _ref4.fullKey,
                fullKey = _ref4$fullKey === undefined ? key : _ref4$fullKey,
                _ref4$context = _ref4.context,
                context = _ref4$context === undefined ? this : _ref4$context;

            if (!__WEBPACK_IMPORTED_MODULE_6_lodash___default.a.isObject(Object(__WEBPACK_IMPORTED_MODULE_8__common__["d" /* dataGet */])(this._attributes, fullKey))) {
                // console.log(this.uuid, `Creating ${fullKey} object on this._attributes`)
                Object(__WEBPACK_IMPORTED_MODULE_8__common__["e" /* dataSet */])(this._attributes, fullKey, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_create___default()(null));
            }

            if (!__WEBPACK_IMPORTED_MODULE_6_lodash___default.a.isObject(context[key])) {
                // console.log(this.uuid, `Creating ${key} object in context`, context)
                // For this we just create an empty container
                // and its children will contain the references
                // I think this is necessary because an object
                // can't be both a reference and a container
                context[key] = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_create___default()(null);
            }

            __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(data).forEach(function (k) {
                // console.log('*** Object loop ***', k, data)
                _this3.setAttribute(k, {
                    context: context[key],
                    fullKey: fullKey + '.' + k,
                    // We pass the data itself
                    data: data
                });
                // console.log('*** End Object loop ***')
            });

            // Trigger reactive changes
            var ob = context[key].__ob__;
            if (ob && ob.dep) {
                ob.dep.notify();
            }
        }
    }, {
        key: 'guessDefaultForValue',
        value: function guessDefaultForValue(value) {
            if (Object(__WEBPACK_IMPORTED_MODULE_8__common__["f" /* defined */])(value) && value !== null) {

                if (typeof value === 'string') {
                    return '';
                }
                if (typeof value === 'number') {
                    return 0;
                }
                if (typeof value === 'boolean') {
                    return value;
                }
                if (value.constructor === Array) {
                    return [];
                }
                if (__WEBPACK_IMPORTED_MODULE_6_lodash___default.a.isObject(value)) {
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_create___default()(null);
                }
            }
            return null;
        }
    }, {
        key: '$class',
        get: function get() {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(this).constructor.name;
        }
    }]);

    return Model;
}();

/* harmony default export */ __webpack_exports__["a"] = (Model);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(320);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(13) && !__webpack_require__(21)(function () {
  return Object.defineProperty(__webpack_require__(45)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(19);
var toIObject = __webpack_require__(22);
var arrayIndexOf = __webpack_require__(248)(false);
var IE_PROTO = __webpack_require__(49)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(31);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(48);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {



/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(278)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(68)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(32);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(69);
var hide = __webpack_require__(18);
var Iterators = __webpack_require__(34);
var $iterCreate = __webpack_require__(279);
var setToStringTag = __webpack_require__(41);
var getPrototypeOf = __webpack_require__(71);
var ITERATOR = __webpack_require__(6)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(5).document;
module.exports = document && document.documentElement;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(19);
var toObject = __webpack_require__(33);
var IE_PROTO = __webpack_require__(49)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(281);
var global = __webpack_require__(5);
var hide = __webpack_require__(18);
var Iterators = __webpack_require__(34);
var TO_STRING_TAG = __webpack_require__(6)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(31);
var TAG = __webpack_require__(6)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(12);
var aFunction = __webpack_require__(36);
var SPECIES = __webpack_require__(6)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(29);
var invoke = __webpack_require__(290);
var html = __webpack_require__(70);
var cel = __webpack_require__(45);
var global = __webpack_require__(5);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(31)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var isObject = __webpack_require__(15);
var newPromiseCapability = __webpack_require__(54);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(63);
var hiddenKeys = __webpack_require__(51).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(39);
var createDesc = __webpack_require__(37);
var toIObject = __webpack_require__(22);
var toPrimitive = __webpack_require__(46);
var has = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(62);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(13) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(11);
var core = __webpack_require__(2);
var fails = __webpack_require__(21);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);
var settle = __webpack_require__(324);
var buildURL = __webpack_require__(326);
var parseHeaders = __webpack_require__(327);
var isURLSameOrigin = __webpack_require__(328);
var createError = __webpack_require__(218);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(329);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(330);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(325);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PAGE_LIMIT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return byId; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(7);


var PAGE_LIMIT = 20;

var byId = function byId(state) {
    return function (id) {
        return state.all.find(function (item) {
            return item.id == id;
        });
    };
};

/* harmony default export */ __webpack_exports__["b"] = ({
    all: function all(state) {
        return state.all;
    },
    byId: byId,
    byRoute: function byRoute(state, getters, rootState) {
        var type = state.type;
        if (type.slice(-1) === 's') {
            type = type.slice(0, -1);
        }
        var param = type + '_id';
        if (rootState.route && rootState.route.params && rootState.route.params[param]) {
            return state.all.find(function (item) {
                return item.id == rootState.route.params[param];
            });
        }
        return null;
    },
    current: function current(state) {
        return state.all.find(function (item) {
            return item.id === state.currentId;
        });
    },
    currentFilter: function currentFilter(state) {
        return state.currentFilter;
    },
    fetching: function fetching(state) {
        return state.fetching;
    },
    filtered: function filtered(state) {
        return function (filter) {
            // console.log(state.type, 'getters', 'filtered')
            if (_.has(state.filtered, filter)) {
                return state.all.filter(function (item) {
                    return state.filtered[filter].find(function (id) {
                        return id == item.id;
                    });
                });
            }
            return [];
        };
    },
    links: function links(state) {
        return state.links;
    },
    meta: function meta(state) {
        return state.meta;
    },
    paginated: function paginated(state) {

        if (state.currentFilter && Object(__WEBPACK_IMPORTED_MODULE_0__common__["i" /* has */])(state.filtered, state.currentFilter)) {
            return state.all.filter(function (item) {
                return state.filtered[state.currentFilter].find(function (id) {
                    return id == item.id;
                });
            });
        }

        return [];
    }
});

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return axios; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_resource__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuelidate__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuelidate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vuelidate__);
/* unused harmony reexport VueResource */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1_vue_router__["a"]; });
/* unused harmony reexport Vuex */

window.Vue = __WEBPACK_IMPORTED_MODULE_0_vue___default.a;





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_resource__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_vuelidate___default.a);

var axios = __webpack_require__(61);

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Vuex = __WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* default */];
window.bus = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a();

// if (window.Laravel && Laravel.apiBaseUrl) {
axios.defaults.baseURL = Laravel.apiBaseUri;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.http.options.root = Laravel.apiBaseUri;
// }

/* harmony default export */ __webpack_exports__["c"] = (__WEBPACK_IMPORTED_MODULE_0_vue___default.a);



/***/ }),
/* 223 */,
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*! AdminLTE app.js
* ================
* Main JS application file for AdminLTE v2. This file
* should be included in all pages. It controls some layout
* options and implements exclusive AdminLTE plugins.
*
* @author Colorlib
* @support <https://github.com/ColorlibHQ/AdminLTE/issues>
* @version v2.4.18
* @repository git://github.com/ColorlibHQ/AdminLTE.git
* @license MIT <http://opensource.org/licenses/MIT>
*/
if("undefined"==typeof jQuery)throw new Error("AdminLTE requires jQuery");!function(i){"use strict";function s(t,e){if(this.element=t,this.options=e,this.$overlay=i(e.overlayTemplate),""===e.source)throw new Error("Source url was not defined. Please specify a url in your BoxRefresh source option.");this._setUpListeners(),this.load()}var r="lte.boxrefresh",a={source:"",params:{},trigger:".refresh-btn",content:".box-body",loadInContent:!0,responseType:"",overlayTemplate:'<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>',onLoadStart:function(){},onLoadDone:function(t){return t}},t='[data-widget="box-refresh"]';function e(n){return this.each(function(){var t=i(this),e=t.data(r);if(!e){var o=i.extend({},a,t.data(),"object"==typeof n&&n);t.data(r,e=new s(t,o))}if("string"==typeof e){if(void 0===e[n])throw new Error("No method named "+n);e[n]()}})}s.prototype.load=function(){this._addOverlay(),this.options.onLoadStart.call(i(this)),i.get(this.options.source,this.options.params,function(t){this.options.loadInContent&&i(this.element).find(this.options.content).html(t),this.options.onLoadDone.call(i(this),t),this._removeOverlay()}.bind(this),""!==this.options.responseType&&this.options.responseType)},s.prototype._setUpListeners=function(){i(this.element).on("click",this.options.trigger,function(t){t&&t.preventDefault(),this.load()}.bind(this))},s.prototype._addOverlay=function(){i(this.element).append(this.$overlay)},s.prototype._removeOverlay=function(){i(this.$overlay).remove()};var o=i.fn.boxRefresh;i.fn.boxRefresh=e,i.fn.boxRefresh.Constructor=s,i.fn.boxRefresh.noConflict=function(){return i.fn.boxRefresh=o,this},i(window).on("load",function(){i(t).each(function(){e.call(i(this))})})}(jQuery),function(i){"use strict";function s(t,e){this.element=t,this.options=e,this._setUpListeners()}var r="lte.boxwidget",a={animationSpeed:500,collapseTrigger:'[data-widget="collapse"]',removeTrigger:'[data-widget="remove"]',collapseIcon:"fa-minus",expandIcon:"fa-plus",removeIcon:"fa-times"},t=".box",e=".collapsed-box",d=".box-header",l=".box-body",c=".box-footer",h=".box-tools",f="collapsed-box",p="collapsing.boxwidget",u="collapsed.boxwidget",g="expanding.boxwidget",v="expanded.boxwidget",o="removing.boxwidget",n="removed.boxwidget";function b(n){return this.each(function(){var t=i(this),e=t.data(r);if(!e){var o=i.extend({},a,t.data(),"object"==typeof n&&n);t.data(r,e=new s(t,o))}if("string"==typeof n){if(void 0===e[n])throw new Error("No method named "+n);e[n]()}})}s.prototype.toggle=function(){!i(this.element).is(e)?this.collapse():this.expand()},s.prototype.expand=function(){var t=i.Event(v),e=i.Event(g),o=this.options.collapseIcon,n=this.options.expandIcon;i(this.element).removeClass(f),i(this.element).children(d+", "+l+", "+c).children(h).find("."+n).removeClass(n).addClass(o),i(this.element).children(l+", "+c).slideDown(this.options.animationSpeed,function(){i(this.element).trigger(t)}.bind(this)).trigger(e)},s.prototype.collapse=function(){var t=i.Event(u),e=i.Event(p),o=this.options.collapseIcon,n=this.options.expandIcon;i(this.element).children(d+", "+l+", "+c).children(h).find("."+o).removeClass(o).addClass(n),i(this.element).children(l+", "+c).slideUp(this.options.animationSpeed,function(){i(this.element).addClass(f),i(this.element).trigger(t)}.bind(this)).trigger(e)},s.prototype.remove=function(){var t=i.Event(n),e=i.Event(o);i(this.element).slideUp(this.options.animationSpeed,function(){i(this.element).trigger(t),i(this.element).remove()}.bind(this)).trigger(e)},s.prototype._setUpListeners=function(){var e=this;i(this.element).on("click",this.options.collapseTrigger,function(t){return t&&t.preventDefault(),e.toggle(i(this)),!1}),i(this.element).on("click",this.options.removeTrigger,function(t){return t&&t.preventDefault(),e.remove(i(this)),!1})};var m=i.fn.boxWidget;i.fn.boxWidget=b,i.fn.boxWidget.Constructor=s,i.fn.boxWidget.noConflict=function(){return i.fn.boxWidget=m,this},i(window).on("load",function(){i(t).each(function(){b.call(i(this))})})}(jQuery),function(i){"use strict";function s(t,e){this.element=t,this.options=e,this.hasBindedResize=!1,this.init()}var r="lte.controlsidebar",a={controlsidebarSlide:!0},e=".control-sidebar",t='[data-toggle="control-sidebar"]',o=".control-sidebar-open",n=".control-sidebar-bg",d=".wrapper",l=".layout-boxed",c="control-sidebar-open",h="control-sidebar-hold-transition",f="collapsed.controlsidebar",p="expanded.controlsidebar";function u(n){return this.each(function(){var t=i(this),e=t.data(r);if(!e){var o=i.extend({},a,t.data(),"object"==typeof n&&n);t.data(r,e=new s(t,o))}"string"==typeof n&&e.toggle()})}s.prototype.init=function(){i(this.element).is(t)||i(this).on("click",this.toggle),this.fix(),i(window).resize(function(){this.fix()}.bind(this))},s.prototype.toggle=function(t){t&&t.preventDefault(),this.fix(),i(e).is(o)||i("body").is(o)?this.collapse():this.expand()},s.prototype.expand=function(){i(e).show(),this.options.controlsidebarSlide?i(e).addClass(c):i("body").addClass(h).addClass(c).delay(50).queue(function(){i("body").removeClass(h),i(this).dequeue()}),i(this.element).trigger(i.Event(p))},s.prototype.collapse=function(){this.options.controlsidebarSlide?i(e).removeClass(c):i("body").addClass(h).removeClass(c).delay(50).queue(function(){i("body").removeClass(h),i(this).dequeue()}),i(e).fadeOut(),i(this.element).trigger(i.Event(f))},s.prototype.fix=function(){i("body").is(l)&&this._fixForBoxed(i(n))},s.prototype._fixForBoxed=function(t){t.css({position:"absolute",height:i(d).height()})};var g=i.fn.controlSidebar;i.fn.controlSidebar=u,i.fn.controlSidebar.Constructor=s,i.fn.controlSidebar.noConflict=function(){return i.fn.controlSidebar=g,this},i(document).on("click",t,function(t){t&&t.preventDefault(),u.call(i(this),"toggle")})}(jQuery),function(n){"use strict";function i(t){this.element=t}var s="lte.directchat",t='[data-widget="chat-pane-toggle"]',e=".direct-chat",o="direct-chat-contacts-open";function r(o){return this.each(function(){var t=n(this),e=t.data(s);e||t.data(s,e=new i(t)),"string"==typeof o&&e.toggle(t)})}i.prototype.toggle=function(t){t.parents(e).first().toggleClass(o)};var a=n.fn.directChat;n.fn.directChat=r,n.fn.directChat.Constructor=i,n.fn.directChat.noConflict=function(){return n.fn.directChat=a,this},n(document).on("click",t,function(t){t&&t.preventDefault(),r.call(n(this),"toggle")})}(jQuery),function(i){"use strict";function s(t){this.options=t,this.init()}var r="lte.pushmenu",a={collapseScreenSize:767,expandOnHover:!1,expandTransitionDelay:200},t=".sidebar-collapse",e=".main-sidebar",o=".content-wrapper",n=".sidebar-form .form-control",d='[data-toggle="push-menu"]',l=".sidebar-mini",c=".sidebar-expanded-on-hover",h=".fixed",f="sidebar-collapse",p="sidebar-open",u="sidebar-expanded-on-hover",g="sidebar-mini-expand-feature",v="expanded.pushMenu",b="collapsed.pushMenu";function m(n){return this.each(function(){var t=i(this),e=t.data(r);if(!e){var o=i.extend({},a,t.data(),"object"==typeof n&&n);t.data(r,e=new s(o))}"toggle"===n&&e.toggle()})}s.prototype.init=function(){(this.options.expandOnHover||i("body").is(l+h))&&(this.expandOnHover(),i("body").addClass(g)),i(o).click(function(){i(window).width()<=this.options.collapseScreenSize&&i("body").hasClass(p)&&this.close()}.bind(this)),i(n).click(function(t){t.stopPropagation()})},s.prototype.toggle=function(){var t=i(window).width(),e=!i("body").hasClass(f);t<=this.options.collapseScreenSize&&(e=i("body").hasClass(p)),e?this.close():this.open()},s.prototype.open=function(){i(window).width()>this.options.collapseScreenSize?i("body").removeClass(f).trigger(i.Event(v)):i("body").addClass(p).trigger(i.Event(v))},s.prototype.close=function(){i(window).width()>this.options.collapseScreenSize?i("body").addClass(f).trigger(i.Event(b)):i("body").removeClass(p+" "+f).trigger(i.Event(b))},s.prototype.expandOnHover=function(){i(e).hover(function(){i("body").is(l+t)&&i(window).width()>this.options.collapseScreenSize&&this.expand()}.bind(this),function(){i("body").is(c)&&this.collapse()}.bind(this))},s.prototype.expand=function(){setTimeout(function(){i("body").removeClass(f).addClass(u)},this.options.expandTransitionDelay)},s.prototype.collapse=function(){setTimeout(function(){i("body").removeClass(u).addClass(f)},this.options.expandTransitionDelay)};var y=i.fn.pushMenu;i.fn.pushMenu=m,i.fn.pushMenu.Constructor=s,i.fn.pushMenu.noConflict=function(){return i.fn.pushMenu=y,this},i(document).on("click",d,function(t){t.preventDefault(),m.call(i(this),"toggle")}),i(window).on("load",function(){m.call(i(d))})}(jQuery),function(i){"use strict";function s(t,e){this.element=t,this.options=e,this._setUpListeners()}var r="lte.todolist",a={onCheck:function(t){return t},onUnCheck:function(t){return t}},e={data:'[data-widget="todo-list"]'},o="done";function t(n){return this.each(function(){var t=i(this),e=t.data(r);if(!e){var o=i.extend({},a,t.data(),"object"==typeof n&&n);t.data(r,e=new s(t,o))}if("string"==typeof e){if(void 0===e[n])throw new Error("No method named "+n);e[n]()}})}s.prototype.toggle=function(t){t.parents(e.li).first().toggleClass(o),t.prop("checked")?this.check(t):this.unCheck(t)},s.prototype.check=function(t){this.options.onCheck.call(t)},s.prototype.unCheck=function(t){this.options.onUnCheck.call(t)},s.prototype._setUpListeners=function(){var t=this;i(this.element).on("change ifChanged","input:checkbox",function(){t.toggle(i(this))})};var n=i.fn.todoList;i.fn.todoList=t,i.fn.todoList.Constructor=s,i.fn.todoList.noConflict=function(){return i.fn.todoList=n,this},i(window).on("load",function(){i(e.data).each(function(){t.call(i(this))})})}(jQuery),function(s){"use strict";function n(t,e){this.element=t,this.options=e,s(this.element).addClass(h),s(a+o,this.element).addClass(c),this._setUpListeners()}var i="lte.tree",r={animationSpeed:500,accordion:!0,followLink:!1,trigger:".treeview a"},a=".treeview",d=".treeview-menu",l=".menu-open, .active",t='[data-widget="tree"]',o=".active",c="menu-open",h="tree",f="collapsed.tree",p="expanded.tree";function e(o){return this.each(function(){var t=s(this);if(!t.data(i)){var e=s.extend({},r,t.data(),"object"==typeof o&&o);t.data(i,new n(t,e))}})}n.prototype.toggle=function(t,e){var o=t.next(d),n=t.parent(),i=n.hasClass(c);n.is(a)&&(this.options.followLink&&"#"!==t.attr("href")||e.preventDefault(),i?this.collapse(o,n):this.expand(o,n))},n.prototype.expand=function(t,e){var o=s.Event(p);if(this.options.accordion){var n=e.siblings(l),i=n.children(d);this.collapse(i,n)}e.addClass(c),t.stop().slideDown(this.options.animationSpeed,function(){s(this.element).trigger(o),e.height("auto")}.bind(this))},n.prototype.collapse=function(t,e){var o=s.Event(f);e.removeClass(c),t.stop().slideUp(this.options.animationSpeed,function(){s(this.element).trigger(o),e.find(a).removeClass(c).find(d).hide()}.bind(this))},n.prototype._setUpListeners=function(){var e=this;s(this.element).on("click",this.options.trigger,function(t){e.toggle(s(this),t)})};var u=s.fn.tree;s.fn.tree=e,s.fn.tree.Constructor=n,s.fn.tree.noConflict=function(){return s.fn.tree=u,this},s(window).on("load",function(){s(t).each(function(){e.call(s(this))})})}(jQuery),function(a){"use strict";function i(t){this.options=t,this.bindedResize=!1,this.activate()}var s="lte.layout",r={slimscroll:!0,resetHeight:!0},d=".wrapper",l=".content-wrapper",c=".layout-boxed",h=".main-footer",f=".main-header",t=".main-sidebar",e="slimScrollDiv",p=".sidebar",u=".control-sidebar",o=".sidebar-menu",n=".main-header .logo",g="fixed",v="hold-transition";function b(n){return this.each(function(){var t=a(this),e=t.data(s);if(!e){var o=a.extend({},r,t.data(),"object"==typeof n&&n);t.data(s,e=new i(o))}if("string"==typeof n){if(void 0===e[n])throw new Error("No method named "+n);e[n]()}})}i.prototype.activate=function(){this.fix(),this.fixSidebar(),a("body").removeClass(v),this.options.resetHeight&&a("body, html, "+d).css({height:"auto","min-height":"100%"}),this.bindedResize||(a(window).resize(function(){this.fix(),this.fixSidebar(),a(n+", "+p).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){this.fix(),this.fixSidebar()}.bind(this))}.bind(this)),this.bindedResize=!0),a(o).on("expanded.tree",function(){this.fix(),this.fixSidebar()}.bind(this)),a(o).on("collapsed.tree",function(){this.fix(),this.fixSidebar()}.bind(this))},i.prototype.fix=function(){a(c+" > "+d).css("overflow","hidden");var t=a(h).outerHeight()||0,e=a(f).outerHeight()||0,o=e+t,n=a(window).height(),i=a(p).outerHeight()||0;if(a("body").hasClass(g))a(l).css("min-height",n-t);else{var s;s=i+e<=n?(a(l).css("min-height",n-o),n-o):(a(l).css("min-height",i),i);var r=a(u);void 0!==r&&r.height()>s&&a(l).css("min-height",r.height())}},i.prototype.fixSidebar=function(){a("body").hasClass(g)?this.options.slimscroll&&void 0!==a.fn.slimScroll&&0===a(t).find(e).length&&a(p).slimScroll({height:a(window).height()-a(f).height()+"px"}):void 0!==a.fn.slimScroll&&a(p).slimScroll({destroy:!0}).height("auto")};var m=a.fn.layout;a.fn.layout=b,a.fn.layout.Constuctor=i,a.fn.layout.noConflict=function(){return a.fn.layout=m,this},a(window).on("load",function(){b.call(a("body"))})}(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(375)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Menu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-750c22d4", Component.options)
  } else {
    hotAPI.reload("data-v-750c22d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(376)
/* template */
var __vue_template__ = __webpack_require__(377)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Message.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d3bc0a0", Component.options)
  } else {
    hotAPI.reload("data-v-0d3bc0a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(378)
/* template */
var __vue_template__ = __webpack_require__(379)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Messages.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c43016fa", Component.options)
  } else {
    hotAPI.reload("data-v-c43016fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_create__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_create___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_create__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__install__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store__ = __webpack_require__(40);












var Repository = function () {
    function Repository() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Repository);

        // this.options = options
        // this.models = Vue.extend({})
        // this.fetched = Object.create(null)

        var models = options.models || {};

        var _data = {
            options: options,
            models: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_create___default()(null),
            fetched: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_create___default()(null)

            // resetStoreVM(this, models)

        };__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(models).forEach(function (k) {
            console.log('k', k);
            _data.models[k] = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_create___default()(null);
            _data.fetched[k] = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_create___default()(null);
        });

        this._repo = __WEBPACK_IMPORTED_MODULE_5_vue___default.a.extend({
            data: function data() {
                return _data;
            }
        });

        console.log('Repository', this);
    }

    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Repository, [{
        key: 'fetchModel',
        value: function fetchModel(type, id) {
            var _this = this;

            var path = this.getPath(type, id);
            if (!this.fetched[type]) {
                this.fetched[type] = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_create___default()(null);
            }
            if (!this.fetched[type][id]) {
                this.fetched[type][id] = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_create___default()(null);
            }
            return fetch(path).then(function (item) {
                console.log('item', item);
                console.log('store', __WEBPACK_IMPORTED_MODULE_9__store__["a" /* default */]);
                console.log('vuex', _this.options.models[type].vuex, _this.options.models[type].vuex.commit);
                if (_this.options.models[type].vuex && _this.options.models[type].vuex.commit) {
                    __WEBPACK_IMPORTED_MODULE_9__store__["a" /* default */].commit(type + '/' + _this.options.models[type].vuex.commit, item);
                }
                if (Object(__WEBPACK_IMPORTED_MODULE_6__common__["f" /* defined */])(_this.models[type][id])) {
                    _this.models[type][id].assign(item);
                } else {
                    var ModelClass = _this.options.models[type].model || __WEBPACK_IMPORTED_MODULE_8__model__["a" /* default */];
                    _this.models[type][id] = new ModelClass(item);
                }
                // Todo: allow this to be a configurable amount
                _this.fetched[type][id].expires = Object(__WEBPACK_IMPORTED_MODULE_6__common__["b" /* currentTimestamp */])() + 60 * 5;
                _this.fetched[type][id].failed = false;
            }).catch(function (error) {
                console.error('Error', error);
                _this.fetched[type][id] = {
                    failed: true
                };
            });
        }
    }, {
        key: 'getModel',
        value: function getModel(type, id) {

            console.log('getModel');
            console.log('type', type);
            console.log('fetched', this.fetched);
            if (!Object(__WEBPACK_IMPORTED_MODULE_6__common__["i" /* has */])(this.fetched, type)) {
                reject();
                return null;
            }
            console.log('made it past fetched check');
            // If the model hasn't been fetched or is close to expiring
            if (!Object(__WEBPACK_IMPORTED_MODULE_6__common__["i" /* has */])(this.fetched[type], id) || this.fetched[type][id].expires < Object(__WEBPACK_IMPORTED_MODULE_6__common__["b" /* currentTimestamp */])()) {
                // Attempt to fetch
                this.fetchModel(type, id);
            }

            // If the model exists, return it, otherwise return null
            return this.models.clients[id];
        }
    }, {
        key: 'getPath',
        value: function getPath(type, id) {
            return type + '/' + id;
        }

        /**
         *
         * @param Vue Vue
         * @param options
         */

    }], [{
        key: 'install',
        value: function install(Vue, options) {
            console.log('running install', Vue, options);
            Object.defineProperty(Vue.prototype, '$modelManager', {
                get: function get() {
                    return this._modelManagerRoot._modelManager;
                }
            });
            Vue.mixin(modelManagerMixin);
        }
    }]);

    return Repository;
}();

// function resetStoreVM(store, models) {
//     // const oldVm = store._vm
//
//     const computed = {
//         fetched: Object.create(null),
//         models: Object.create(null),
//     }
//
//     Object.keys(models).forEach(m => {
//         computed.fetched[m] = (id) => {
//
//         }
//         computed.models[m] = Object.create(null)
//     })
//
//     store._vm = new Vue({
//         computed
//     })
// }


/* harmony default export */ __webpack_exports__["a"] = (Repository);
var fetch = function fetch(path, params) {

    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

        return axios.get(path, params).then(function (response) {

            if (!response.data || !response.data.data) {
                console.warn('Data property is not set on response');
                return reject(response);
            }

            var payload = response.data.data;

            resolve(payload);
        }).catch(function (error) {
            console.error(error);
            reject(error);
        });
    });
};

Repository.install = __WEBPACK_IMPORTED_MODULE_7__install__["a" /* default */];

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common__ = __webpack_require__(7);







// import store from '../vue'

var Model = function () {
    function Model() {
        var blank = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _this = this;

        var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var store = arguments[2];

        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Model);

        console.log('constructing model', blank, attributes);

        // Create attributes and original arrays
        Object.defineProperty(this, '_original', {
            configurable: true,
            writable: true,
            // Deep clone blank and attributes to
            // remove references
            value: Object(__WEBPACK_IMPORTED_MODULE_6__common__["a" /* copy */])(attributes, blank)
        });

        Object.defineProperty(this, '_attributes', {
            configurable: true,
            writable: true,
            // Deep clone original to remove references
            value: Object(__WEBPACK_IMPORTED_MODULE_6__common__["a" /* copy */])(this._original)
        });

        // Object.defineProperty(this, 'validation', {
        //     configurable: true,
        //     enumerable: true,
        //     writable: true,
        //     value: {
        //         ...validation,
        //     },
        // })

        this.changed = {};

        this.exists = !!attributes.id;

        // Loop through keys of original data and
        // define top-level accessors for them to
        // provide reactive points
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(this._original).forEach(function (key) {
            _this._defineAttribute(key, { context: _this });
        });

        console.log('Client', this);
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Model, [{
        key: 'fill',
        value: function fill(attributes) {
            var trackChanges = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            console.log('filling model');
            if (!trackChanges) {
                this.exists = !!attributes.id;
                Object(__WEBPACK_IMPORTED_MODULE_6__common__["a" /* copy */])(attributes, this._original);
            }
            Object(__WEBPACK_IMPORTED_MODULE_6__common__["a" /* copy */])(attributes, this);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(key, context) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_6__common__["f" /* defined */])(context)) {
                context = this._attributes;
            }
            console.log('handleChange', key, context);
            if (this.isChanging(key)) {
                console.log('Adding value to this.changed');
                var newVal = Object(__WEBPACK_IMPORTED_MODULE_6__common__["d" /* dataGet */])(context, key);
                Object(__WEBPACK_IMPORTED_MODULE_6__common__["e" /* dataSet */])(this.changed, key, newVal);
            } else {
                console.log('Removing value from this.changed');
                Object(__WEBPACK_IMPORTED_MODULE_6__common__["c" /* dataDelete */])(this.changed, key);
            }
        }
    }, {
        key: 'isChanging',
        value: function isChanging(key) {
            console.log('isChanging', key);
            var check = Object(__WEBPACK_IMPORTED_MODULE_6__common__["d" /* dataGet */])(this._attributes, key),
                against = Object(__WEBPACK_IMPORTED_MODULE_6__common__["d" /* dataGet */])(this._original, key);

            console.log('check', check);
            console.log('against', check);

            if (Object(__WEBPACK_IMPORTED_MODULE_6__common__["f" /* defined */])(check) || Object(__WEBPACK_IMPORTED_MODULE_6__common__["f" /* defined */])(against)) {

                // Value is not empty and has changed
                console.log('not equal or null', check, against, !Object(__WEBPACK_IMPORTED_MODULE_6__common__["g" /* equalOrEmpty */])(check, against));
                return !Object(__WEBPACK_IMPORTED_MODULE_6__common__["g" /* equalOrEmpty */])(check, against);
            }

            return false;
        }
    }, {
        key: 'isDirty',
        value: function isDirty() {
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(this.changed).length > 0;
        }
    }, {
        key: 'update',
        value: function update(attributes) {
            this.fill(attributes, true);
        }
    }, {
        key: '_defineAttribute',
        value: function _defineAttribute(key, _ref) {
            var _this2 = this;

            var fullKey = _ref.fullKey,
                context = _ref.context,
                attributes = _ref.attributes;


            if (!Object(__WEBPACK_IMPORTED_MODULE_6__common__["f" /* defined */])(fullKey)) {
                fullKey = key;
            }

            if (!Object(__WEBPACK_IMPORTED_MODULE_6__common__["f" /* defined */])(attributes)) {
                attributes = this._attributes;
            }

            // console.log('====_defineAttribute====')
            // console.log('key', key)
            // console.log('fullKey', fullKey)
            // console.log('context', context)
            // console.log('attributes', attributes)

            if (Object(__WEBPACK_IMPORTED_MODULE_6__common__["i" /* has */])(attributes, key)) {

                // console.log('About to check the value')
                var self = this,
                    v = Object(__WEBPACK_IMPORTED_MODULE_6__common__["d" /* dataGet */])(attributes, key);
                // console.log('v', v)

                // console.log('next context', context[key])
                if (__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.isObject(v)) {
                    // console.log('>>>>>>>>>>>>>>>>> passed _.isObject(v)')
                    if (Array.isArray(v)) {
                        context[key] = [];
                        // console.log('v is an array')
                        for (var i = 0; i < v.length; i++) {
                            this._defineAttribute(i, {
                                context: context[key],
                                fullKey: fullKey + '.' + i,
                                attributes: attributes[key]
                            });
                        }
                    } else {
                        // console.log('v is an object', fullKey)
                        context[key] = {};
                        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(v).forEach(function (k) {
                            // console.log('*** Object loop ***')
                            _this2._defineAttribute(k, {
                                context: context[key],
                                fullKey: fullKey + '.' + k,
                                attributes: attributes[key]
                            });
                            // console.log('*** End Object loop ***')
                        });
                    }
                } else {
                    // console.log('type of context', typeof context)
                    // console.log('prototype', context.constructor.prototype)
                    // console.log('prototype type', Object.getPrototypeOf(context))
                    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property___default()(context, key, {
                        configurable: true,
                        enumerable: true,
                        get: function get() {
                            // console.log('getting', fullKey, 'this (snapshot)')
                            return Object(__WEBPACK_IMPORTED_MODULE_6__common__["d" /* dataGet */])(attributes, key);
                        },
                        set: function set(value) {
                            // console.log('setting', key, value)
                            Object(__WEBPACK_IMPORTED_MODULE_6__common__["e" /* dataSet */])(attributes, key, value);
                            self.handleChange(fullKey);
                        }
                    });
                }
            }
        }
    }]);

    return Model;
}();

/* harmony default export */ __webpack_exports__["a"] = (Model);

/***/ }),
/* 230 */,
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(245), __esModule: true };

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultClient */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Household__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Model__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ModelPlus__ = __webpack_require__(234);









var defaultClient = function defaultClient() {
    return {
        id: null,
        parent_id: 0,
        intake_id: null,
        advocate_id: null,
        first_name: '',
        middle_initial: '',
        last_name: '',
        last_four: '',
        birth_date: null,
        gender: '',
        phones: [],
        ethnicity_ids: [],
        homeless: false,
        address: {
            street: '',
            apt: '',
            state: '',
            city: '',
            county: '',
            zip: ''
        },
        note: '',
        household: null
    };
};

var Client = function (_Model) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Client, _Model);

    function Client() {
        var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Client);

        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Client.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Client)).call(this, defaultClient(), attributes));
    }

    // defaults() {
    //     return {
    //         id: null,
    //         intake_id: null,
    //         advocate_id: null,
    //         first_name: '',
    //         middle_initial: '',
    //         last_name: '',
    //         last_four: '',
    //         birth_date: null,
    //         gender: '',
    //         phones: [],
    //         ethnicity_ids: [],
    //         homeless: false,
    //         address: {
    //             street: '',
    //             apt: '',
    //             state: '',
    //             city: '',
    //             county: '',
    //             zip: '',
    //         },
    //         note: '',
    //     }
    // }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Client, [{
        key: 'isMinimallyViable',
        value: function isMinimallyViable() {
            // console.log('running isMinimallyViable', this)
            var pii = ['first_name', 'last_name', 'birth_date'];
            var blank = this.defaults();
            var check = 0;

            for (var i = 0; i < pii.length; i++) {
                // console.log('pii[i]', pii[i], this.has(this, pii[i]), this.get([pii[i]]), blank[pii[i]])
                if (this.get([pii[i]]) !== blank[pii[i]]) {
                    check++;
                }
            }

            if (check >= 2) return true;

            return false;
        }
    }]);

    return Client;
}(__WEBPACK_IMPORTED_MODULE_6__Model__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Client);

/***/ }),
/* 233 */,
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Base__ = __webpack_require__(372);












var ModelPlus = function (_Base) {
    __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(ModelPlus, _Base);

    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default()(ModelPlus, [{
        key: '$',
        get: function get() {
            return this._original;
        }
    }, {
        key: 'attributes',
        get: function get() {
            return this._attributes;
        }
    }, {
        key: 'exists',
        get: function get() {
            return !!this._attributes.id;
        }
    }]);

    function ModelPlus() {
        var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, ModelPlus);

        // console.log('constructing model', blank, attributes)
        var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ModelPlus.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(ModelPlus)).call(this, options));

        __WEBPACK_IMPORTED_MODULE_9_vue___default.a.set(_this, '_attributes', {});
        __WEBPACK_IMPORTED_MODULE_9_vue___default.a.set(_this, '_original', {});
        __WEBPACK_IMPORTED_MODULE_9_vue___default.a.set(_this, '_changed', {});
        _this.trackChanges = true;

        // this.exists = !!(attributes.id)

        _this.assign(attributes);
        // this.log('Creating ' + this.$class, this)
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default()(ModelPlus, [{
        key: 'log',
        value: function log() {
            var _console;

            for (var _len = arguments.length, messages = Array(_len), _key = 0; _key < _len; _key++) {
                messages[_key] = arguments[_key];
            }

            if (this.getOption('log')) (_console = console).log.apply(_console, ['[' + this.$class + ']'].concat(messages));
        }
    }, {
        key: 'get',
        value: function get(attribute, fallback) {
            return __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.get(this._attributes, attribute, fallback);
        }
    }, {
        key: 'set',
        value: function set(attribute, value) {
            var _this2 = this;

            // Allow batch set of multiple attributes at once, ie. set({...});
            this.log('set', attribute, value);
            if (__WEBPACK_IMPORTED_MODULE_8_lodash___default.a.isPlainObject(attribute)) {
                __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.each(attribute, function (value, key) {
                    _this2.log('set', 'looping', key, value);
                    _this2.set(key, value);
                });

                return;
            }

            var defined = this.has(attribute);

            if (!defined) {
                this.log('Not defined', attribute);
                this.registerAttribute(attribute, value);
            }

            var previous = this.get(attribute);

            __WEBPACK_IMPORTED_MODULE_9_vue___default.a.set(this._attributes, attribute, value);

            var changed = defined && !__WEBPACK_IMPORTED_MODULE_8_lodash___default.a.isEqual(previous, value);
            this.log('changed', changed);

            if (changed) {
                __WEBPACK_IMPORTED_MODULE_9_vue___default.a.set(this._changed, attribute, value);
            } else {
                __WEBPACK_IMPORTED_MODULE_9_vue___default.a.delete(this._changed, attribute);
            }

            return value;
        }
    }, {
        key: 'assign',
        value: function assign(attributes) {
            this.set(__WEBPACK_IMPORTED_MODULE_8_lodash___default.a.defaultsDeep({}, attributes, __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.cloneDeep(this.defaults())));
            this.sync();
        }

        /**
         * Sync the current attributes to the original attributes. This is usually
         * only called on save. We have to clone the values otherwise we
         * end up with references to the same object in both attribute sets.
         *
         * You can also pass one or an array of attributes to sync.
         *
         * @param {string|string[]} attribute
         */

    }, {
        key: 'sync',
        value: function sync(attribute) {
            var _this3 = this;

            this.log('sync', attribute);
            var active = __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.cloneDeep(this._attributes);

            if (__WEBPACK_IMPORTED_MODULE_8_lodash___default.a.isUndefined(attribute)) {
                __WEBPACK_IMPORTED_MODULE_9_vue___default.a.set(this, '_original', active);
                __WEBPACK_IMPORTED_MODULE_9_vue___default.a.set(this, '_changed', {});
            } else {
                __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.each(__WEBPACK_IMPORTED_MODULE_8_lodash___default.a.castArray(attribute, function (attribute) {
                    console.log('syncing attribute', attribute);
                    __WEBPACK_IMPORTED_MODULE_9_vue___default.a.set(_this3._reference, attribute, __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.get(active, attribute));
                    __WEBPACK_IMPORTED_MODULE_9_vue___default.a.delete(_this3._changed, attribute);
                }));
            }
        }
    }, {
        key: 'defaults',
        value: function defaults() {
            return {};
        }

        // fill(data, silent = true) {
        //     // console.log('data', data)
        //     // Attributes must be provided
        //     if (defined(data)) {
        //
        //         // this.exists = !!(data.id)
        //
        //         // If we are not adding changes
        //         if (silent) {
        //             // console.log('filling silently', data)
        //             this.trackChanges = false
        //             // Load the values into this._original
        //             copy(data, this._original)
        //
        //             console.log('original', this._original)
        //         }
        //
        //         this.loaded = true
        //         // copy(data, this)
        //
        //         // Todo: how to handle when the item is not already in this._original
        //         Object.keys(data).forEach(key => {
        //             // console.log('filling', key)
        //             if (!has(this._original, key)) {
        //                 this._original[key] = this.guessDefaultForValue(data[key])
        //             }
        //             this.setAttribute(key, { data })
        //         })
        //
        //         this.trackChanges = true
        //
        //         // Trigger reactive changes
        //         const ob = this.__ob__
        //         if (ob && ob.dep) {
        //             ob.dep.notify()
        //         }
        //     }
        // }

    }, {
        key: 'has',
        value: function has(attribute) {
            return __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.has(this._attributes, attribute);
        }
    }, {
        key: 'getChanges',
        value: function getChanges(attribute) {
            if (__WEBPACK_IMPORTED_MODULE_8_lodash___default.a.isUndefined(attribute)) {
                return this._changed;
            }
            return __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.get(this._changed, attribute);
        }

        // handleChange(fullKey) {
        //     // console.log('handling change', fullKey)
        //     if (!this.trackChanges) {
        //         // console.warn('Not tracking changes', fullKey)
        //         return false
        //     }
        //
        //     // console.log('handleChange', key, context)
        //     if (this.isChanging(fullKey)) {
        //         // console.log('Adding value to this.changed')
        //         let newVal = dataGet(this, fullKey)
        //         dataSet(this.changed, fullKey, newVal)
        //     } else {
        //         // console.log('Removing value from this.changed')
        //         dataDelete(this.changed, fullKey)
        //     }
        //
        //     // Trigger reactive changes
        //     const ob = (this).__ob__
        //     if (ob && ob.dep) {
        //         ob.dep.notify()
        //     }
        // }

        // isChanging(fullKey) {
        //     // console.log(`${fullKey} isChanging?`)
        //     let check = dataGet(this._attributes, fullKey),
        //         against = dataGet(this._original, fullKey)
        //
        //     // console.log('check', check)
        //     // console.log('against', check)
        //
        //     if (defined(check) || defined(against)) {
        //
        //         // Value is not empty and has changed
        //         // console.log('not equal or empty', check, against, !equalOrEmpty(check, against))
        //         return !equalOrEmpty(check, against)
        //     }
        //
        //     return false
        // }

    }, {
        key: 'isDirty',
        value: function isDirty() {
            return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(this._changed).length > 0;
        }

        // getAttributes() {
        //     return this._attributes
        // }

    }, {
        key: 'registerAttribute',
        value: function registerAttribute(attribute, data) {
            var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

            // this.log('Registering', attribute, data)
            if (__WEBPACK_IMPORTED_MODULE_8_lodash___default.a.isObject(data)) {
                if (__WEBPACK_IMPORTED_MODULE_8_lodash___default.a.isArray(data)) {
                    this.log('Registering array', attribute);
                    this.registerArray(attribute, data, context);
                } else {
                    this.log('Registering object', attribute);
                    this.registerObject(attribute, data, context);
                }
            } else {
                var self = this;
                __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property___default()(context, attribute, {
                    configurable: true,
                    enumerable: true,
                    get: function get() {
                        return self.get(attribute);
                    },
                    set: function set(value) {
                        return self.set(attribute, value);
                    }
                });

                // Trigger reactive changes
                var ob = this.__ob__;
                if (ob && ob.dep) {
                    ob.dep.notify();
                }
            }
        }

        // Todo: Name passed in attributes something else
        // setAttribute(key, { fullKey = key, context = this, data = this._attributes }) {
        //     // console.warn('*^*^*^*^ Starting setAttribute')
        //
        //     // console.log('key', key)
        //     // console.log('fullKey', fullKey)
        //     // console.log('context', context)
        //     // console.log('data', data)
        //
        //     // The key we are setting must exist in data
        //     if (has(data, key)) {
        //         // console.log('About to check the value')
        //         let v = dataGet(data, key),
        //             // And the original, if it exists
        //             orig = dataGet(this, fullKey)
        //             // console.log('v', v)
        //
        //         if (key === 'abuser') dataGet(this, 'abuser', true)
        //
        //         /**
        //          * If the old value is an object and v is null, keep the
        //          * old value. This is a workaround for when we have a client
        //          * with no address and it is passed from the server as null,
        //          * rather than a blank object.
        //          */
        //         if (v === null && _.isObject(orig)) {
        //             // console.log('setting v to orig')
        //             v = orig
        //         }
        //
        //         // v is an object
        //         if (_.isObject(v)) {
        //             // console.log('>>>>>>>>>>>>>>>>> passed _.isObject(v)')
        //             if (Array.isArray(v)) {
        //                 this.defineArray(key, v, { fullKey, context })
        //             } else {
        //                 this.defineObject(key, v, { fullKey, context })
        //             }
        //         }
        //         // v is a primitive
        //         else {
        //             // console.log(fullKey, 'is a primitive')
        //             dataSet(this._attributes, fullKey, v)
        //
        //             this.defineAttribute(key, { fullKey, context })
        //             this.handleChange(key, context)
        //         }
        //     }
        //     // console.warn('*^*^*^*^ Ending setAttribute')
        // }

        // defineAttribute(key, { fullKey = key, context = this } = {}) {
        //     const self = this
        //
        //     Object.defineProperty(context, key, {
        //         configurable: true,
        //         enumerable: true,
        //         get() {
        //             return dataGet(self._attributes, fullKey)
        //         },
        //         set(value) {
        //             dataSet(self._attributes, fullKey, value)
        //             self.handleChange(fullKey, context)
        //         },
        //     })
        // }

    }, {
        key: 'registerArray',
        value: function registerArray(attribute) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var context = arguments[2];


            // console.log('defining on array on', fullKey)

            if (!__WEBPACK_IMPORTED_MODULE_8_lodash___default.a.isArray(this.get(attribute))) {
                // console.log(this.uuid, `Creating ${fullKey} array on this._attributes`)
                __WEBPACK_IMPORTED_MODULE_9_vue___default.a.set(context, attribute, []);
            }

            // console.log('v is an array')
            for (var i = 0; i < data.length; i++) {
                this.registerAttribute(i, data[i], context[attribute]);
            }
        }
    }, {
        key: 'registerObject',
        value: function registerObject(attribute) {
            var _this4 = this;

            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var context = arguments[2];


            if (!__WEBPACK_IMPORTED_MODULE_8_lodash___default.a.isObject(this.get(attribute))) {
                // this.log('Creating object', attribute)
                // console.log(this.uuid, `Creating ${fullKey} object on this._attributes`)
                // this.set(attribute, {})
                __WEBPACK_IMPORTED_MODULE_9_vue___default.a.set(context, attribute, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create___default()(null));
            }

            __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(data).forEach(function (key) {
                // console.log('*** Object loop ***', k, data)
                _this4.registerAttribute(key, data[key], context[attribute]);
                // console.log('*** End Object loop ***')
            });
        }
    }]);

    return ModelPlus;
}(__WEBPACK_IMPORTED_MODULE_10__Base__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (ModelPlus);

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultHousehold */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model__ = __webpack_require__(60);






var defaultHousehold = function defaultHousehold() {
    return {
        size: 1,
        annual_income: 0
    };
};

var Household = function (_Model) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Household, _Model);

    function Household() {
        var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Household);

        return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Household.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Household)).call(this, defaultHousehold(), attributes));
    }

    return Household;
}(__WEBPACK_IMPORTED_MODULE_4__Model__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Household);

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return directive; });
/* unused harmony export VueMaskPlugin */
function format (text, wholeMask) {
  if (!wholeMask) return text;
  var maskStartRegExp = /^([^#ANX]+)/;

  if (+text.length === 1 && maskStartRegExp.test(wholeMask)) {
    text = maskStartRegExp.exec(wholeMask)[0] + text;
  }

  var newText = '';
  var charOffset = 0;

  for (var maskIndex = 0; maskIndex < wholeMask.length; maskIndex += 1) {
    var mask = wholeMask.charAt(maskIndex);

    switch (mask) {
      case '#':
        break;

      case 'A':
        break;

      case '?':
        break;

      case 'N':
        break;

      case 'X':
        break;

      default:
        text = text.replace(mask, '');
    }
  }

  for (var _maskIndex = 0, x = 1; x && _maskIndex < wholeMask.length; _maskIndex += 1) {
    var char = text.charAt(_maskIndex - charOffset);

    var _mask = wholeMask.charAt(_maskIndex);

    switch (_mask) {
      case '#':
        /\d/.test(char) ? newText += char : x = 0;
        break;

      case 'A':
        /[a-z]/i.test(char) ? newText += char : x = 0;
        break;

      case 'N':
        /[a-z0-9]/i.test(char) ? newText += char : x = 0;
        break;

      case '?':
        charOffset += 1;
        break;

      case 'X':
        newText += char;
        break;

      default:
        newText += _mask;

        if (char && char !== _mask) {
          text = " ".concat(text);
        }

        break;
    }
  }

  return newText;
}

var trigger = function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
};
var queryInputElementInside = function queryInputElementInside(el) {
  return el instanceof HTMLInputElement ? el : el.querySelector('input') || el;
};

var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

function updateValue(el) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var value = el.value,
      _el$dataset = el.dataset,
      _el$dataset$previousV = _el$dataset.previousValue,
      previousValue = _el$dataset$previousV === void 0 ? '' : _el$dataset$previousV,
      mask = _el$dataset.mask;

  if (force || value && value !== previousValue && value.length > previousValue.length) {
    el.value = format(value, mask);

    if (isAndroid && isChrome) {
      setTimeout(function () {
        return trigger(el, 'input');
      }, 0);
    } else {
      trigger(el, 'input');
    }
  }

  el.dataset.previousValue = value;
}

function updateMask(el, mask) {
  el.dataset.mask = mask;
}

var directive = {
  bind: function bind(el, _ref) {
    var value = _ref.value;
    el = queryInputElementInside(el);
    updateMask(el, value);
    updateValue(el);
  },
  componentUpdated: function componentUpdated(el, _ref2) {
    var value = _ref2.value,
        oldValue = _ref2.oldValue;
    el = queryInputElementInside(el);
    var isMaskChanged = value !== oldValue;

    if (isMaskChanged) {
      updateMask(el, value);
    }

    updateValue(el, isMaskChanged);
  }
};

var plugin = (function (Vue) {
  Vue.directive('mask', directive);
});

/* unused harmony default export */ var _unused_webpack_default_export = (plugin);



/***/ }),
/* 237 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrent", function() { return setCurrent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentFilter", function() { return setCurrentFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFilter", function() { return addFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearFilters", function() { return clearFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilters", function() { return setFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setQuery", function() { return setQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paramSignature", function() { return paramSignature; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_create__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_create___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_create__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api__ = __webpack_require__(319);







var clear = function clear(_ref) {
    var commit = _ref.commit;

    commit('clearAll');
};

// Create item
var create = function create(_ref2, config) {
    var commit = _ref2.commit,
        state = _ref2.state;


    return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        // console.log('createItem', 'config', config)
        var data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_create___default()(null);
        if (config && config.data) {
            data = config.data;
            /**
             * This is necessary because if data is passed as both
             * the data object and as a property of config, it changes
             * all the empty fields into objects instead of null
             */
            delete config.data;
        }

        // console.log('Creating item...', config, data)
        return Object(__WEBPACK_IMPORTED_MODULE_5__api__["a" /* createItem */])(state.endpoint, data, config).then(function (response) {
            // console.log('response', response)
            var item = response.data.data;
            commit('receiveItem', item);
            return resolve(item);
        }).catch(function (response) {
            // Error
            // console.log('Failed to create item', response)
            return reject(response);
        });
    });
};

// Delete item
var destroy = function destroy(_ref3) {
    var commit = _ref3.commit,
        state = _ref3.state;
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

        if (!params.id) return reject('Must provide id param');

        // console.log('Deleting item...', params.id)

        return Object(__WEBPACK_IMPORTED_MODULE_5__api__["b" /* destroyItem */])(state.endpoint, params.id, params).then(function (response) {
            if (!response) return reject('No response provided');
            // console.log('id', params.id, response)
            commit('deleteItem', params.id);
            return resolve(response);
        }).catch(function (error) {
            // console.log('Unable to delete item', error)
            return reject(error);
        });
    });
};

/**
 * Fetch one or more items and store the results in state
 *
 * @param commit
 * @param state
 * @param config
 */
var fetch = function fetch(_ref4, config) {
    var commit = _ref4.commit,
        state = _ref4.state;


    if (_.has(config, 'fetchId') && state.fetching && state.fetching.fetchId && state.fetching.fetchId == config.fetchId) {
        return state.fetching.request;
    }

    console.warn('fetch', state.endpoint, config);

    var endpoint = state.endpoint;

    if (config && Object(__WEBPACK_IMPORTED_MODULE_4__common__["i" /* has */])(config, state.keyField)) {
        if (!config[state.keyField]) {
            console.warn('fetch command passed without valid id');
            return false;
        }
        commit('setCurrentId', config[state.keyField]);
        endpoint += '/' + config[state.keyField];
        delete config.id;
    }

    var request = Object(__WEBPACK_IMPORTED_MODULE_5__api__["c" /* fetchOneOrMore */])(endpoint, config).then(function (payload) {

        if (!payload.data) {
            return false;
        }

        if (payload.data.constructor === Array) {
            // Multiple items
            commit('receiveItems', payload.data);

            var ids = payload.data.map(function (item) {
                return item.id;
            });

            var signature = paramSignature(config);
            // console.log('fetch', 'param signature', signature)
            commit('setCurrentFilter', { ids: ids, signature: signature });
        } else {
            // console.log(state.endpoint, 'payload', payload)
            // One item
            commit('receiveItem', payload.data);
            // Todo: this probably needs to be done differently to
            // allow proper checking of the id field
            commit('setFetched', payload.id, request);
        }

        if (payload.meta) {
            commit('setState', { key: 'meta', value: payload.meta });
        }

        if (payload.links) {
            commit('setState', { key: 'links', value: payload.links });
        }

        // resolve(payload.data)
    }).catch(function (response) {
        // reject(response)
    }).then(function () {
        commit('setFetching');
    });

    // Setting that we are fetching
    var fetchId = config && _.has(config, 'fetchId') ? config.fetchId : Object(__WEBPACK_IMPORTED_MODULE_4__common__["m" /* uuidv4 */])();
    commit('setFetching', { fetchId: fetchId, request: request });

    return request;
};

// Initialize data
var init = function init(_ref5, data) {
    var commit = _ref5.commit;

    if (Object(__WEBPACK_IMPORTED_MODULE_4__common__["i" /* has */])(data, 'payload')) {
        var payload = data.payload;

        var fetchKey = Object(__WEBPACK_IMPORTED_MODULE_4__common__["i" /* has */])(data, 'params') && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(data.params) !== '' ? __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(data.params) : '*';
        var fetchTimestamp = Date.now() / 1000 | 0;

        if (payload.constructor === Array) {
            // Multiple items
            commit('receiveItems', payload);
        } else {
            // One item
            commit('receiveItem', payload);
            commit('setFetched', payload.id);
        }

        // Record the fetch so we can skip fetching it the next time
        commit('setFetched', {
            key: fetchKey,
            timestamp: fetchTimestamp,
            request: null
        });
    }
};

// Set the currently selected item
var setCurrent = function setCurrent(_ref6, id) {
    var commit = _ref6.commit;

    commit('setCurrentId', id);
};

var setCurrentFilter = function setCurrentFilter(_ref7, _ref8) {
    var commit = _ref7.commit;
    var ids = _ref8.ids,
        signature = _ref8.signature;

    commit('setCurrentFilter', { ids: ids, signature: signature });
};

var update = function update(_ref9, _ref10) {
    var commit = _ref9.commit,
        state = _ref9.state;
    var id = _ref10.id,
        data = _ref10.data;

    // console.log('Updating item...', id, data)

    return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

        return Object(__WEBPACK_IMPORTED_MODULE_5__api__["d" /* updateItem */])(state.endpoint, id, data).then(function (response) {
            // console.log('response', response)
            var model = response.data.data;
            commit('receiveItem', model);
            commit('setFetched', model.id);
            return resolve(model);
        }).catch(function (response) {
            // Error
            console.error('Failed to update item', response);
            return reject(response);
        });
    });
};

var addFilter = function addFilter(_ref11, filters) {
    var commit = _ref11.commit;

    if (filters.constructor !== Array) {
        filters = [filters];
    }

    commit('setFilters', filters, false);
};

var clearFilters = function clearFilters(_ref12) {
    var commit = _ref12.commit;

    commit('setFilters', []);
};

var setFilters = function setFilters(_ref13, filters) {
    var commit = _ref13.commit;

    // console.log('Setting filters', filters)
    if (filters.constructor !== Array) {
        filters = [filters];
    }

    commit('setFilters', filters);
};

var setQuery = function setQuery(_ref14, _ref15) {
    var commit = _ref14.commit;
    var filters = _ref15.filters,
        orderBy = _ref15.orderBy,
        order = _ref15.order,
        limit = _ref15.limit;

    if (filters.constructor !== Array) {
        filters = [filters];
    }
    commit('setFilters', filters);

    if (orderBy) {
        commit('setState', { key: 'orderBy', value: orderBy });
    }

    if (order) {
        commit('setState', { key: 'order', value: order });
    }

    if (limit) {
        commit('setState', { key: 'limit', value: limit });
    }
};

var paramSignature = function paramSignature(config) {
    var signature = {};

    if (config && config.params) {
        // console.log('config and config.params')
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(config.params).forEach(function (k) {
            // if (k !== this.keyField && k !== 'page') {
            signature[k] = config.params[k];
            // }
        });
    }
    return Object(__WEBPACK_IMPORTED_MODULE_4__common__["l" /* stringifyObject */])(signature);
};

/***/ }),
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(244);
module.exports = __webpack_require__(391);


/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Client__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex_router_sync__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex_router_sync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vuex_router_sync__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Messages_vue__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Messages_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_Messages_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Menu_vue__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_Menu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_v_mask__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filters_datetime__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__filters_text__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__filters_phone__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__filters_measurement__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mixins_auth__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__mixins_messages__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__plugins_vue_model_repository__ = __webpack_require__(388);

/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(250);







Object(__WEBPACK_IMPORTED_MODULE_5_vuex_router_sync__["sync"])(__WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */]);

// Import components



// Import directives


// Import filters





// Import mixins


// import HookLogging from './mixins/hookLogging'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.component('add-button', function (resolve) {
    return __webpack_require__.e/* require */(4/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(240)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('grid', function (resolve) {
    return __webpack_require__.e/* require */(1/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(239)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('input-date', function (resolve) {
    return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(241)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('selectize', function (resolve) {
    return __webpack_require__.e/* require */(3/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(230)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});
Vue.component('client-link', function (resolve) {
    return __webpack_require__.e/* require */(2/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(242)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

Vue.directive('mask', __WEBPACK_IMPORTED_MODULE_8_v_mask__["a" /* VueMaskDirective */]);

Vue.mixin(__WEBPACK_IMPORTED_MODULE_13__mixins_auth__["a" /* default */]);
Vue.mixin(__WEBPACK_IMPORTED_MODULE_14__mixins_messages__["a" /* default */]);
// Vue.mixin(HookLogging)

Vue.filter('prettyDate', __WEBPACK_IMPORTED_MODULE_9__filters_datetime__["a" /* prettyDate */]);
Vue.filter('prettyDatetime', __WEBPACK_IMPORTED_MODULE_9__filters_datetime__["b" /* prettyDatetime */]);
Vue.filter('prettyTime', __WEBPACK_IMPORTED_MODULE_9__filters_datetime__["c" /* prettyTime */]);
Vue.filter('markdown', __WEBPACK_IMPORTED_MODULE_10__filters_text__["a" /* markdown */]);
Vue.filter('truncate', __WEBPACK_IMPORTED_MODULE_10__filters_text__["b" /* truncate */]);
Vue.filter('phone', __WEBPACK_IMPORTED_MODULE_11__filters_phone__["a" /* default */]);
Vue.filter('height', __WEBPACK_IMPORTED_MODULE_12__filters_measurement__["a" /* height */]);

/**
 * Experimental
 */


// const repository = new Repository({
//     models: {
//         clients: {
//             collection: 'clients',
//             model: Client,
//             vuex: {
//                 name: 'clients',
//                 commit: 'receiveItem',
//             }
//         }
//     }
// })

// Vue.use(Repository)

/**
 * Initialize Vue app
 * @type {vuejs.Vue | *}
 */
var app = new Vue({
    el: '#app',
    components: {
        Messages: __WEBPACK_IMPORTED_MODULE_6__components_Messages_vue___default.a,
        SidebarMenu: __WEBPACK_IMPORTED_MODULE_7__components_Menu_vue___default.a
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('messages', {
        messages: 'all'
    })),

    watch: {
        '$route': function $route(value) {
            console.log('>^< Route changed =>', value.path);
        }
    },

    // Hooks
    created: function created() {
        if (window.Laravel && window.Laravel.data) {
            // Set current auth user
            this.$store.commit('auth/setCurrent', window.Laravel.data.authUser);
            // Pre-load the list of states
            this.$store.dispatch('locations/setStates', window.Laravel.data.states);
            // Pre-load some lists of categories
            this.$store.commit('abuserRelationshipTypes/receiveItems', window.Laravel.data.abuserRelationshipTypes);
            this.$store.commit('abuseTypes/receiveItems', window.Laravel.data.abuseTypes);
            this.$store.commit('ethnicity/receiveItems', window.Laravel.data.ethnicity);
            this.$store.commit('eyeColors/receiveItems', window.Laravel.data.eyeColors);
            this.$store.commit('fundingSources/receiveItems', window.Laravel.data.fundingSources);
            this.$store.commit('hairColors/receiveItems', window.Laravel.data.hairColors);
            this.$store.commit('hairLengths/receiveItems', window.Laravel.data.hairLengths);
            this.$store.commit('housingStatuses/receiveItems', window.Laravel.data.housingStatuses);
            this.$store.dispatch('incidentTypes/init', { payload: window.Laravel.data.incidentTypes });
            this.$store.commit('genders/receiveItems', window.Laravel.data.genders);
            this.$store.commit('phoneTypes/receiveItems', window.Laravel.data.phoneTypes);
            this.$store.commit('referralSources/receiveItems', window.Laravel.data.referralSources);
            this.$store.dispatch('services/init', { payload: window.Laravel.data.services });
        }
    },


    methods: {
        window: function (_window) {
            function window(_x) {
                return _window.apply(this, arguments);
            }

            window.toString = function () {
                return _window.toString();
            };

            return window;
        }(function (prop) {
            if (window.hasOwnProperty(prop)) {
                return window[prop];
            }
            return undefined;
        })
    },

    // repository,
    router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
    store: __WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */]
});

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(246);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(11);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(247) });


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(13);
var getKeys = __webpack_require__(30);
var gOPS = __webpack_require__(52);
var pIE = __webpack_require__(39);
var toObject = __webpack_require__(33);
var IObject = __webpack_require__(64);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(21)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(22);
var toLength = __webpack_require__(65);
var toAbsoluteIndex = __webpack_require__(249);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(48);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typeface_open_sans__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typeface_open_sans___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_typeface_open_sans__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue__ = __webpack_require__(222);




__webpack_require__(224);

window.axios = __WEBPACK_IMPORTED_MODULE_2__vue__["b" /* axios */];

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

// if (Laravel && Laravel.csrfToken) {
__WEBPACK_IMPORTED_MODULE_2__vue__["c" /* default */].http.interceptors.push(function (request, next) {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);

    next();
});
// }

__WEBPACK_IMPORTED_MODULE_2__vue__["c" /* default */].http.interceptors.push(function (request, next) {
    next(function (response) {
        if (response.status === 401) {
            window.location.href = '/login';

            return;
        }

        return response;
    });
});

__WEBPACK_IMPORTED_MODULE_2__vue__["b" /* axios */].interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 401) {
        __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].dispatch('messages/add', {
            type: 'warning',
            text: 'Your authorization token has expired, it is being refreshed. If your session has expired, you will need to log in again.'
        });

        setTimeout(function () {
            window.location.href = '/login';
        }, 700);
    } else if (error.response.status === 403) {
        __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].dispatch('messages/add', {
            type: 'danger',
            text: 'You are not allowed to perform this action. Please ask an administrator if you need assistance.'
        });

        window.scrollTo(0, 0);
    }
});

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key',
//     cluster: 'mt1',
//     encrypted: true
// });

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(252);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(274)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../css-loader/index.js!./index.css", function() {
			var newContent = require("!!../css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(253);
exports = module.exports = __webpack_require__(237)(false);
// imports


// module
exports.push([module.i, "/* open-sans-300normal - latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 300;\n  src:\n    local('Open Sans Light '),\n    local('Open Sans-Light'),\n    url(" + escape(__webpack_require__(254)) + ") format('woff2'), \n    url(" + escape(__webpack_require__(255)) + ") format('woff'); /* Modern Browsers */\n}\n\n/* open-sans-300italic - latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: italic;\n  font-display: swap;\n  font-weight: 300;\n  src:\n    local('Open Sans Light italic'),\n    local('Open Sans-Lightitalic'),\n    url(" + escape(__webpack_require__(256)) + ") format('woff2'), \n    url(" + escape(__webpack_require__(257)) + ") format('woff'); /* Modern Browsers */\n}\n\n/* open-sans-400normal - latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src:\n    local('Open Sans Regular '),\n    local('Open Sans-Regular'),\n    url(" + escape(__webpack_require__(258)) + ") format('woff2'), \n    url(" + escape(__webpack_require__(259)) + ") format('woff'); /* Modern Browsers */\n}\n\n/* open-sans-400italic - latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: italic;\n  font-display: swap;\n  font-weight: 400;\n  src:\n    local('Open Sans Regular italic'),\n    local('Open Sans-Regularitalic'),\n    url(" + escape(__webpack_require__(260)) + ") format('woff2'), \n    url(" + escape(__webpack_require__(261)) + ") format('woff'); /* Modern Browsers */\n}\n\n/* open-sans-600normal - latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 600;\n  src:\n    local('Open Sans SemiBold '),\n    local('Open Sans-SemiBold'),\n    url(" + escape(__webpack_require__(262)) + ") format('woff2'), \n    url(" + escape(__webpack_require__(263)) + ") format('woff'); /* Modern Browsers */\n}\n\n/* open-sans-600italic - latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: italic;\n  font-display: swap;\n  font-weight: 600;\n  src:\n    local('Open Sans SemiBold italic'),\n    local('Open Sans-SemiBolditalic'),\n    url(" + escape(__webpack_require__(264)) + ") format('woff2'), \n    url(" + escape(__webpack_require__(265)) + ") format('woff'); /* Modern Browsers */\n}\n\n/* open-sans-700normal - latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 700;\n  src:\n    local('Open Sans Bold '),\n    local('Open Sans-Bold'),\n    url(" + escape(__webpack_require__(266)) + ") format('woff2'), \n    url(" + escape(__webpack_require__(267)) + ") format('woff'); /* Modern Browsers */\n}\n\n/* open-sans-700italic - latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: italic;\n  font-display: swap;\n  font-weight: 700;\n  src:\n    local('Open Sans Bold italic'),\n    local('Open Sans-Bolditalic'),\n    url(" + escape(__webpack_require__(268)) + ") format('woff2'), \n    url(" + escape(__webpack_require__(269)) + ") format('woff'); /* Modern Browsers */\n}\n\n/* open-sans-800normal - latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 800;\n  src:\n    local('Open Sans ExtraBold '),\n    local('Open Sans-ExtraBold'),\n    url(" + escape(__webpack_require__(270)) + ") format('woff2'), \n    url(" + escape(__webpack_require__(271)) + ") format('woff'); /* Modern Browsers */\n}\n\n/* open-sans-800italic - latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: italic;\n  font-display: swap;\n  font-weight: 800;\n  src:\n    local('Open Sans ExtraBold italic'),\n    local('Open Sans-ExtraBolditalic'),\n    url(" + escape(__webpack_require__(272)) + ") format('woff2'), \n    url(" + escape(__webpack_require__(273)) + ") format('woff'); /* Modern Browsers */\n}\n\n", ""]);

// exports


/***/ }),
/* 253 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-300.woff2?60c866748ff15f5b347fdba64596b1b1";

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-300.woff?521d17bc9f3526c690e8ada6eee55bec";

/***/ }),
/* 256 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-300italic.woff2?06bbd3188b34820cd83a0e0b3d0a6f57";

/***/ }),
/* 257 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-300italic.woff?8a648ff38ded89ea15916e84529d62d3";

/***/ }),
/* 258 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-400.woff2?cffb686d7d2f4682df8342bd4d276e09";

/***/ }),
/* 259 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-400.woff?bf2d0783515b7d75c35bde69e01b3135";

/***/ }),
/* 260 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-400italic.woff2?987032ea5d57c93d8da215678eae3b86";

/***/ }),
/* 261 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-400italic.woff?db70d0b9cb27ada1a260a2b35e756b8b";

/***/ }),
/* 262 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-600.woff2?223a277bd88d8a90c8cdf24cda0ad5f5";

/***/ }),
/* 263 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-600.woff?1cd5320f8937d337b61d5117cf9d7b28";

/***/ }),
/* 264 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-600italic.woff2?4950a7205f0b5cefe41fc03ac346e236";

/***/ }),
/* 265 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-600italic.woff?318ea1ada4102c0704a0637228dcad03";

/***/ }),
/* 266 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-700.woff2?d08c09f2f169f4a6edbcf8b8d1636cb4";

/***/ }),
/* 267 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-700.woff?623e3205570002af47fc2b88f9335d19";

/***/ }),
/* 268 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-700italic.woff2?c02f5da6e82e1efe0b45841bfd49ce37";

/***/ }),
/* 269 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-700italic.woff?72e19cbb0e38c6773a7751156752cec4";

/***/ }),
/* 270 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-800.woff2?aaeffaf205b9bbb09920089a14dbe9e8";

/***/ }),
/* 271 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-800.woff?c6aa0c4a601fb6ac66f8253fa594dff5";

/***/ }),
/* 272 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-800italic.woff2?6b3973ffe02bb6a8be0f8453506ec032";

/***/ }),
/* 273 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/typeface-open-sans/files/open-sans-latin-800italic.woff?79b58175343190550489efe46a7f1138";

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(275);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 275 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common__ = __webpack_require__(7);




var state = {
    queries: {}
};

var getters = {
    query: function query(state) {
        return function (q) {
            return state.queries[q];
        };
    }
};

var actions = {
    fetch: function fetch(_ref, q) {
        var commit = _ref.commit;
        return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
            axios.get('/abusers/search', { params: { q: q } }).then(function (response) {
                if (response && response.data && response.data.data) {
                    var results = response.data.data;
                    // console.log('response', response.data.data)
                    commit('setQuery', { q: q, results: results });
                    resolve(response.data.data);
                } else {
                    reject(response);
                }
            }).catch(function (error) {
                console.error(error.data.message);
                reject(error, data.message);
            });
        });
    }
};

var mutations = {
    setQuery: function setQuery(state, _ref2) {
        var q = _ref2.q,
            results = _ref2.results;

        // console.log('setQuery', q, results)
        // If the query exists, return nothing
        if (Object(__WEBPACK_IMPORTED_MODULE_2__common__["i" /* has */])(state.queries, q)) {
            return false;
        }

        // If the query doesn't already exist, store the results
        __WEBPACK_IMPORTED_MODULE_1_vue___default.a.set(state.queries, q, results);
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    actions: actions,
    getters: getters,
    mutations: mutations,
    namespaced: true,
    state: state
});

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
__webpack_require__(67);
__webpack_require__(72);
__webpack_require__(284);
__webpack_require__(296);
__webpack_require__(297);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(48);
var defined = __webpack_require__(47);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(53);
var descriptor = __webpack_require__(37);
var setToStringTag = __webpack_require__(41);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(18)(IteratorPrototype, __webpack_require__(6)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(30);

module.exports = __webpack_require__(13) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(282);
var step = __webpack_require__(283);
var Iterators = __webpack_require__(34);
var toIObject = __webpack_require__(22);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(68)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 282 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 283 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(32);
var global = __webpack_require__(5);
var ctx = __webpack_require__(29);
var classof = __webpack_require__(73);
var $export = __webpack_require__(11);
var isObject = __webpack_require__(15);
var aFunction = __webpack_require__(36);
var anInstance = __webpack_require__(285);
var forOf = __webpack_require__(286);
var speciesConstructor = __webpack_require__(74);
var task = __webpack_require__(75).set;
var microtask = __webpack_require__(291)();
var newPromiseCapabilityModule = __webpack_require__(54);
var perform = __webpack_require__(76);
var userAgent = __webpack_require__(292);
var promiseResolve = __webpack_require__(77);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(6)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(293)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(41)($Promise, PROMISE);
__webpack_require__(294)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(295)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 285 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(29);
var call = __webpack_require__(287);
var isArrayIter = __webpack_require__(288);
var anObject = __webpack_require__(12);
var toLength = __webpack_require__(65);
var getIterFn = __webpack_require__(289);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(12);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(34);
var ITERATOR = __webpack_require__(6)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(73);
var ITERATOR = __webpack_require__(6)('iterator');
var Iterators = __webpack_require__(34);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 290 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var macrotask = __webpack_require__(75).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(31)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(18);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(5);
var core = __webpack_require__(2);
var dP = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(13);
var SPECIES = __webpack_require__(6)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(6)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(11);
var core = __webpack_require__(2);
var global = __webpack_require__(5);
var speciesConstructor = __webpack_require__(74);
var promiseResolve = __webpack_require__(77);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(11);
var newPromiseCapability = __webpack_require__(54);
var perform = __webpack_require__(76);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(302);
var $Object = __webpack_require__(2).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(11);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(53) });


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(305), __esModule: true };

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(67);
__webpack_require__(72);
module.exports = __webpack_require__(57).f('iterator');


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(307), __esModule: true };

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(308);
__webpack_require__(66);
__webpack_require__(313);
__webpack_require__(314);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(5);
var has = __webpack_require__(19);
var DESCRIPTORS = __webpack_require__(13);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(69);
var META = __webpack_require__(309).KEY;
var $fails = __webpack_require__(21);
var shared = __webpack_require__(50);
var setToStringTag = __webpack_require__(41);
var uid = __webpack_require__(38);
var wks = __webpack_require__(6);
var wksExt = __webpack_require__(57);
var wksDefine = __webpack_require__(58);
var enumKeys = __webpack_require__(310);
var isArray = __webpack_require__(311);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(15);
var toObject = __webpack_require__(33);
var toIObject = __webpack_require__(22);
var toPrimitive = __webpack_require__(46);
var createDesc = __webpack_require__(37);
var _create = __webpack_require__(53);
var gOPNExt = __webpack_require__(312);
var $GOPD = __webpack_require__(80);
var $GOPS = __webpack_require__(52);
var $DP = __webpack_require__(14);
var $keys = __webpack_require__(30);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(79).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(39).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(32)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(38)('meta');
var isObject = __webpack_require__(15);
var has = __webpack_require__(19);
var setDesc = __webpack_require__(14).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(21)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(30);
var gOPS = __webpack_require__(52);
var pIE = __webpack_require__(39);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(31);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(22);
var gOPN = __webpack_require__(79).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58)('asyncIterator');


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58)('observable');


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(316);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(33);
var $keys = __webpack_require__(30);

__webpack_require__(81)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 317 */,
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__["a" /* default */]('abuse-relationships')));

/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return destroyItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchOneOrMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);



var createItem = function createItem(endpoint, data, config) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(endpoint, data, config);
};

var destroyItem = function destroyItem(endpoint, id, params) {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.delete(endpoint + '/' + id, params);
    // .then(response => response)
    // .catch(error => {
    //     console.log('destroyItem error', error.response)
    //     return reject(error.response)
    // })
};

var fetchOneOrMore = function fetchOneOrMore(endpoint, params) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(endpoint, params).then(function (response) {

            if (!response.data) {
                console.warn('Data property is not set on response');
                return reject(response);
            }

            var payload = response.data;

            resolve(payload);
        }).catch(function (error) {
            console.error(error);
            reject(error);
        });
    });
};

var updateItem = function updateItem(endpoint, id) {
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    // console.log('updateItem', endpoint, id, data)
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.patch(endpoint + '/' + id, data);
};

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);
var bind = __webpack_require__(216);
var Axios = __webpack_require__(322);
var defaults = __webpack_require__(59);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(220);
axios.CancelToken = __webpack_require__(336);
axios.isCancel = __webpack_require__(219);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(337);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 321 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(59);
var utils = __webpack_require__(8);
var InterceptorManager = __webpack_require__(331);
var dispatchRequest = __webpack_require__(332);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(218);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);
var transformData = __webpack_require__(333);
var isCancel = __webpack_require__(219);
var defaults = __webpack_require__(59);
var isAbsoluteURL = __webpack_require__(334);
var combineURLs = __webpack_require__(335);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(220);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FetchRecord__ = __webpack_require__(339);




var normalizeItem = function normalizeItem(item) {
    return _.merge(item, {});
};

var receiveItem = function receiveItem(state, item) {
    var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';

    // console.log('Key', key)
    // console.log('[MUTATION receiveItem]: ', item)

    if (typeof item === 'string') {
        var index = state.all.indexOf(item);
        if (index >= 0) {
            state.all.splice(index, 1, item);
        } else {
            state.all.push(item);
        }
    } else {
        var normalizedItem = normalizeItem(item);
        if (state.all.constructor === Array) {
            var localItem = state.all.find(function (i) {
                return i.id == item.id;
            });
            if (localItem) {
                if (!_.isEqual(normalizedItem, localItem)) {
                    var _index = state.all.indexOf(localItem);
                    state.all.splice(_index, 1, normalizedItem);
                }
            } else {
                state.all.push(normalizedItem);
            }
        } else {
            var _localItem = _.find(state.all, { id: item.id });
            if (_localItem) {
                if (!_.isEqual(normalizedItem, _localItem)) {
                    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(state.all, item[key], normalizedItem);
                }
            } else {
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(state.all, item[key], normalizedItem);
            }
        }
    }
};

// Receive multiple items into state
var receiveItems = function receiveItems(state, items) {
    items.forEach(function (item) {
        receiveItem(state, item);
        // setFetched(state, item.id)
    });
};

var setFetched = function setFetched(state, key, request) {
    state.fetched[key] = new __WEBPACK_IMPORTED_MODULE_2__FetchRecord__["a" /* default */](key, request);
};

/* harmony default export */ __webpack_exports__["a"] = ({
    clearAll: function clearAll(state) {
        state.all = {};
    },


    // Delete item from store
    deleteItem: function deleteItem(state, id) {
        var item = state.all.find(function (i) {
            return i.id == id;
        });
        state.all.splice(state.all.indexOf(item), 1);
    },
    makePagination: function makePagination(state, data) {
        this.$set(state.pagination, {
            current_page: data.current_page,
            last_page: data.last_page,
            next_page_url: data.next_page_url,
            prev_page_url: data.prev_page_url
        });
    },


    receiveItems: receiveItems,
    receiveItem: receiveItem,

    setCurrentFilter: function setCurrentFilter(state, _ref) {
        var ids = _ref.ids,
            signature = _ref.signature;

        console.warn('setting current filter', signature, ids);
        state.currentFilter = signature;
        if (ids) {
            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(state.filtered, signature, ids);
        }
    },


    // Set the currently selected item
    setCurrentId: function setCurrentId(state, id) {
        // console.log('setting current id for', state.type)
        state.currentId = Number(id);
    },


    setFetched: setFetched,

    setFetching: function setFetching(state) {
        var fetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        state.fetching = fetch;
    },
    setFilters: function setFilters(state, filters) {
        filters.forEach(function (item) {
            state.filters.push(item);
        });
    },
    setState: function setState(state, _ref2) {
        var key = _ref2.key,
            value = _ref2.value;

        if (Object(__WEBPACK_IMPORTED_MODULE_1__common__["i" /* has */])(state, key)) {
            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(state, key, value);
        }
    }
});

/***/ }),
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FETCH_TIMEOUT */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(7);



// Amount of time to wait between fetches
var FETCH_TIMEOUT = 60 * 5;

var FetchRecord = function FetchRecord(id, request) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, FetchRecord);

    this.expires = Object(__WEBPACK_IMPORTED_MODULE_1__common__["b" /* currentTimestamp */])() + FETCH_TIMEOUT;
    this.id = id;
    this.request = request;
};

/* harmony default export */ __webpack_exports__["a"] = (FetchRecord);

/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__["a" /* default */]('abusers')));

/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__["a" /* default */]('activities')));

/***/ }),
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__["a" /* default */]('advocates')));

/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);



// state
var state = {
    authenticated: false,
    currentUser: null,
    token: null

    // getters
};var getters = {
    authenticated: function authenticated(state) {
        return state.authenticated;
    },
    authUser: function authUser(state) {
        return state.currentUser;
    },
    token: function token(state) {
        return state.token;
    }

    // actions
};var actions = {
    fetchAuthUser: function fetchAuthUser(_ref) {
        var commit = _ref.commit;

        return __WEBPACK_IMPORTED_MODULE_1_vue___default.a.http.get('user').then(function (response) {
            commit('setCurrent', response.body);
        }).catch(function (response) {
            // console.log('Unable to retrieve authenticated user')
        });
    }
};

// Mutations
var mutations = {
    setCurrent: function setCurrent(state, user) {
        __WEBPACK_IMPORTED_MODULE_1_vue___default.a.set(state, 'currentUser', user);
        localStorage.setItem('user', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(user));
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    actions: actions,
    getters: getters,
    mutations: mutations,
    namespaced: true,
    state: state
});

/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common__ = __webpack_require__(7);




var state = {
    queries: {}
};

var getters = {
    query: function query(state) {
        return function (q) {
            return state.queries[q];
        };
    }
};

var actions = {
    fetch: function fetch(_ref, q) {
        var commit = _ref.commit;
        return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
            if (_.isString(q)) {
                q = { params: { q: q } };
            }
            axios.get('/clients/search', q).then(function (response) {
                if (response && response.data && response.data.data) {
                    var results = response.data.data;
                    // console.log('response', response.data.data)
                    commit('setQuery', { q: q, results: results });
                    resolve(response.data.data);
                } else {
                    reject(response);
                }
            }).catch(function (error) {
                console.error(error.data.message);
                reject(error, data.message);
            });
        });
    }
};

var mutations = {
    setQuery: function setQuery(state, _ref2) {
        var q = _ref2.q,
            results = _ref2.results;

        // console.log('setQuery', q, results)
        // If the query exists, return nothing
        if (Object(__WEBPACK_IMPORTED_MODULE_2__common__["i" /* has */])(state.queries, q)) {
            return false;
        }

        // If the query doesn't already exist, store the results
        __WEBPACK_IMPORTED_MODULE_1_vue___default.a.set(state.queries, q, results);
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    actions: actions,
    getters: getters,
    mutations: mutations,
    namespaced: true,
    state: state
});

/***/ }),
/* 345 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__["a" /* default */]('client-outcomes')));

/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__ = __webpack_require__(3);


// import outcomes from './client_outcomes'
// import stays from './shelter'

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__["a" /* default */]('clients'), {
    modules: {
        // outcomes,
        // stays,
    }
}));

/***/ }),
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__["a" /* default */]('dependents')));

/***/ }),
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__["a" /* default */]('incident-types')));

/***/ }),
/* 349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__["a" /* default */]('incidents', {
    state: {
        orderBy: 'date',
        orderDirection: 'desc',
        orderType: 'date'
    }
})));

/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__["a" /* default */]('intakes')));

/***/ }),
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getStateByName */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(7);



// state
var state = {
    states: [],
    currentState: {},
    retrievedStates: [],
    stateLoading: false,
    counties: [],
    cities: []

    // getters
};var getters = {
    states: function states(state) {
        return state.states;
    },
    currentState: function currentState(state) {
        return state.currentState;
    },
    stateLoading: function stateLoading(state) {
        return state.stateLoading;
    },
    counties: function counties(state) {
        return function (stateName) {
            var stateId = void 0;
            if (stateName) {
                var st = getStateByName(stateName);
                if (st) {
                    stateId = st.id;
                }
            } else if (Object(__WEBPACK_IMPORTED_MODULE_1__common__["f" /* defined */])(state.currentState)) {
                stateId = state.currentState.id;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_1__common__["f" /* defined */])(stateId)) {
                return state.counties.filter(function (item) {
                    return item.state_id === stateId;
                });
            } else {
                return [];
            }
        };
    },
    cities: function cities(state) {
        return function (stateName) {
            var stateId = void 0;
            if (stateName) {
                var st = getStateByName(stateName);
                if (st) {
                    stateId = st.id;
                }
            } else if (Object(__WEBPACK_IMPORTED_MODULE_1__common__["f" /* defined */])(state.currentState)) {
                stateId = state.currentState.id;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_1__common__["f" /* defined */])(stateId)) {
                return state.cities.filter(function (item) {
                    return item.state_id === stateId;
                });
            } else {
                return [];
            }
        };
    }
};

// actions
var actions = {
    getLocalitiesByState: function getLocalitiesByState(_ref, stateName) {
        var commit = _ref.commit,
            state = _ref.state;

        // console.log('Calling getLocalitiesByState')
        var stateId = void 0;
        if (stateName) {
            var st = getStateByName(stateName);
            if (st) {
                stateId = st.id;
            }
        } else if (Object(__WEBPACK_IMPORTED_MODULE_1__common__["f" /* defined */])(state.currentState)) {
            stateName = state.currentState.name;
            stateId = state.currentState.id;
        }

        if (state.retrievedStates.indexOf(stateName) < 0) {
            state.stateLoading = true;
            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.http.get('localities/' + stateId).then(function (response) {
                var items = response.body;
                state.stateLoading = false;
                commit('receiveItems', items);
            }, function (response) {
                state.stateLoading = false;
                // console.log('Failed', response);
            });
        }
    },

    setStates: function setStates(_ref2, items) {
        var commit = _ref2.commit;

        commit('receiveStates', items);
    },

    setCurrentState: function setCurrentState(_ref3, item) {
        var commit = _ref3.commit;

        commit('setCurrentState', item);
    }
};

var getStateByName = function getStateByName(name) {
    return state.states.find(function (item) {
        return item.name === name;
    });
};

var logStates = function logStates(state) {
    // console.log('=== Logging states ===');
    state.states.forEach(function (item) {
        // console.log(item.id, item.name);
    });
};

// mutations
var mutations = {
    receiveItems: function receiveItems(state, items) {
        if (typeof items !== 'undefined') {
            if (items.hasOwnProperty('counties')) {
                items.counties.forEach(function (item) {
                    state.counties.push(item);
                });
            }
            if (items.hasOwnProperty('cities')) {
                items.cities.forEach(function (item) {
                    state.cities.push(item);
                });
            }
        }
    },
    setRetrievedState: function setRetrievedState(state, name) {
        if (!state.retrievedStates.find(function (item) {
            return item === name;
        })) {
            state.retrievedStates.push(name);
        }
    },
    receiveStates: function receiveStates(state, states) {
        state.states = states;
    },
    setCurrentState: function setCurrentState(state, item) {
        if (typeof item === 'string') {
            item = getStateByName(item);
        }
        state.currentState = item;
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    actions: actions,
    getters: getters,
    mutations: mutations,
    namespaced: true,
    state: state
});

/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Message__ = __webpack_require__(353);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__["a" /* default */]('messages', {
    actions: {
        add: function add(store, message) {
            return new __WEBPACK_IMPORTED_MODULE_2__models_Message__["a" /* default */](message).save(store);
        },
        cleanSticky: function cleanSticky(store) {
            store.commit('decrementSticky');
            store.commit('clearAllButSticky');
        }
    },
    mutations: {
        clearAllButSticky: function clearAllButSticky(state) {
            state.all = state.all.filter(function (item) {
                return item.sticky > 0;
            });
        },
        decrementSticky: function decrementSticky(state) {
            state.all.map(function (item) {
                return item.sticky--;
            });
        }
    }
})));

/***/ }),
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);


var lut = [];for (var i = 0; i < 256; i++) {
    lut[i] = (i < 16 ? '0' : '') + i.toString(16);
}

function generateUuid() {
    var dvals = new Uint32Array(4);
    window.crypto.getRandomValues(dvals);
    var d0 = dvals[0];
    var d1 = dvals[1];
    var d2 = dvals[2];
    var d3 = dvals[3];
    return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' + lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' + lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] + lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
}

var Message = function () {
    function Message(message) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Message);

        if (typeof message === 'string') {
            message = { text: message };
        }

        this.message = {
            id: generateUuid(),
            text: message.text ? message.text : '',
            type: message.type ? message.type : 'info',
            sticky: message.sticky ? message.sticky : 2
        };
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Message, [{
        key: 'save',
        value: function save(_ref) {
            var commit = _ref.commit;

            commit('receiveItem', this.message);
        }
    }]);

    return Message;
}();

/* harmony default export */ __webpack_exports__["a"] = (Message);

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(355);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(11);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(13), 'Object', { defineProperty: __webpack_require__(14).f });


/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__["a" /* default */]('notes')));

/***/ }),
/* 357 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__["a" /* default */]('outcomes', {
    actions: {
        setCurrentService: function setCurrentService(_ref, serviceName) {
            var commit = _ref.commit;

            commit('setCurrentServiceName', serviceName);
        }
    },

    getters: {
        all: function all(state) {
            if (state.currentServiceName === null) {
                return state.all;
            }

            return state.all.filter(function (item) {
                return item.service_names.indexOf(state.currentServiceName) >= 0;
            });
        },
        currentServiceName: function currentServiceName(state) {
            return state.currentServiceName;
        }
    },

    mutations: {
        setCurrentServiceName: function setCurrentServiceName(state, serviceName) {
            __WEBPACK_IMPORTED_MODULE_2_vue___default.a.set(state, 'currentServiceName', serviceName);
        }
    },

    state: {
        currentServiceName: null
    }
})));

/***/ }),
/* 358 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__["a" /* default */]('phones')));

/***/ }),
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__["a" /* default */]('profiles', {
    endpoint: 'reporting/profiles'
})));

/***/ }),
/* 360 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__["a" /* default */]('reports', {
    endpoint: 'reporting/reports'
})));

/***/ }),
/* 361 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_1__crud_CrudModule__["a" /* default */]('services')));

/***/ }),
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!
  * vue-router v3.3.4
  * (c) 2020 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ("development" !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function isRouterError (err, errorType) {
  return isError(err) && err._isRouter && (errorType == null || err.type === errorType)
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      var vnodeData = parent.$vnode ? parent.$vnode.data : {};
      if (vnodeData.routerView) {
        depth++;
      }
      if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      var cachedData = cache[name];
      var cachedComponent = cachedData && cachedData.component;
      if (cachedComponent) {
        // #2301
        // pass props
        if (cachedData.configProps) {
          fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps);
        }
        return h(cachedComponent, data, children)
      } else {
        // render previous empty view
        return h()
      }
    }

    var matched = route.matched[depth];
    var component = matched && matched.components[name];

    // render empty node if no matched route or no config component
    if (!matched || !component) {
      cache[name] = null;
      return h()
    }

    // cache component
    cache[name] = { component: component };

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // register instance in init hook
    // in case kept-alive component be actived when routes changed
    data.hook.init = function (vnode) {
      if (vnode.data.keepAlive &&
        vnode.componentInstance &&
        vnode.componentInstance !== matched.instances[name]
      ) {
        matched.instances[name] = vnode.componentInstance;
      }
    };

    var configProps = matched.props && matched.props[name];
    // save route and configProps in cachce
    if (configProps) {
      extend(cache[name], {
        route: route,
        configProps: configProps
      });
      fillPropsinData(component, data, route, configProps);
    }

    return h(component, data, children)
  }
};

function fillPropsinData (component, data, route, configProps) {
  // resolve props
  var propsToPass = data.props = resolveProps(route, configProps);
  if (propsToPass) {
    // clone to prevent mutation
    propsToPass = data.props = extend({}, propsToPass);
    // pass non-declared props as attrs
    var attrs = data.attrs = data.attrs || {};
    for (var key in propsToPass) {
      if (!component.props || !(key in component.props)) {
        attrs[key] = propsToPass[key];
        delete propsToPass[key];
      }
    }
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "development" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  params = params || {};
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));

    // Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}
    // and fix #3106 so that you can work with location descriptor object having params.pathMatch equal to empty string
    if (typeof params.pathMatch === 'string') { params[0] = params.pathMatch; }

    return filler(params, { pretty: true })
  } catch (e) {
    if (true) {
      // Fix #3072 no warn if `pathMatch` is string
      warn(typeof params.pathMatch === 'string', ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  } finally {
    // delete the 0 if it was added
    delete params[0];
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next._normalized) {
    return next
  } else if (next.name) {
    next = extend({}, raw);
    var params = next.params;
    if (params && typeof params === 'object') {
      next.params = extend({}, params);
    }
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params$1 = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params$1;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params$1, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var noop = function () {};

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    ariaCurrentValue: {
      type: String,
      default: 'page'
    },
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(
      this.to,
      current,
      this.append
    );
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback =
      globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback =
      globalExactActiveClass == null
        ? 'router-link-exact-active'
        : globalExactActiveClass;
    var activeClass =
      this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass =
      this.exactActiveClass == null
        ? exactActiveClassFallback
        : this.exactActiveClass;

    var compareTarget = route.redirectedFrom
      ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var ariaCurrentValue = classes[exactActiveClass] ? this.ariaCurrentValue : null;

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location, noop);
        } else {
          router.push(location, noop);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = { class: classes };

    var scopedSlot =
      !this.$scopedSlots.$hasNormal &&
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        href: href,
        route: route,
        navigate: handler,
        isActive: classes[activeClass],
        isExactActive: classes[exactActiveClass]
      });

    if (scopedSlot) {
      if (scopedSlot.length === 1) {
        return scopedSlot[0]
      } else if (scopedSlot.length > 1 || !scopedSlot.length) {
        if (true) {
          warn(
            false,
            ("RouterLink with to=\"" + (this.to) + "\" is trying to use a scoped slot but it didn't provide exactly one child. Wrapping the content with a span element.")
          );
        }
        return scopedSlot.length === 0 ? h() : h('span', {}, scopedSlot)
      }
    }

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href, 'aria-current': ariaCurrentValue };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = (a.data = extend({}, a.data));
        aData.on = aData.on || {};
        // transform existing events in both objects into arrays so we can push later
        for (var event in aData.on) {
          var handler$1 = aData.on[event];
          if (event in on) {
            aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
          }
        }
        // append new listeners for router-link
        for (var event$1 in on) {
          if (event$1 in aData.on) {
            // on[event] is always a function
            aData.on[event$1].push(on[event$1]);
          } else {
            aData.on[event$1] = handler;
          }
        }

        var aAttrs = (a.data.attrs = extend({}, a.data.attrs));
        aAttrs.href = href;
        aAttrs['aria-current'] = ariaCurrentValue;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  if (true) {
    // warn if routes do not include leading slashes
    var found = pathList
    // check for missing leading slash
      .filter(function (path) { return path && path.charAt(0) !== '*' && path.charAt(0) !== '/'; });

    if (found.length > 0) {
      var pathNames = found.map(function (path) { return ("- " + path); }).join('\n');
      warn(false, ("Non-nested routes must include a leading slash character. Fix the following routes: \n" + pathNames));
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(
        path || name
      )) + " cannot be a " + "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions =
    route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props:
      route.props == null
        ? {}
        : route.components
          ? route.props
          : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (
        route.name &&
        !route.redirect &&
        route.children.some(function (child) { return /^\/?$/.test(child.path); })
      ) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
            "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
            "the default child route will not be rendered. Remove the name from " +
            "this route and use the name of the default child route for named " +
            "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
    for (var i = 0; i < aliases.length; ++i) {
      var alias = aliases[i];
      if ("development" !== 'production' && alias === path) {
        warn(
          false,
          ("Found an alias with the same value as the path: \"" + path + "\". You have to remove that alias. It will be ignored in development.")
        );
        // skip in dev to make it work
        continue
      }

      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    }
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("development" !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
          "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (
  path,
  pathToRegexpOptions
) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(
        !keys[key.name],
        ("Duplicate param keys in route with path: \"" + path + "\"")
      );
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (
  path,
  parent,
  strict
) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
      return _createRoute(record, location, redirectedFrom)
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

// use User Timing api (if present) for more accurate key precision
var Time =
  inBrowser && window.performance && window.performance.now
    ? window.performance
    : Date;

function genStateKey () {
  return Time.now().toFixed(3)
}

var _key = genStateKey();

function getStateKey () {
  return _key
}

function setStateKey (key) {
  return (_key = key)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Prevent browser scroll behavior on History popstate
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  // Fix for #2774 Support for apps loaded from Windows file shares not mapped to network drives: replaced location.origin with
  // window.location.protocol + '//' + window.location.host
  // location.host contains the port and location.hostname doesn't
  var protocolAndPath = window.location.protocol + '//' + window.location.host;
  var absolutePath = window.location.href.replace(protocolAndPath, '');
  // preserve existing history state as it could be overriden by the user
  var stateCopy = extend({}, window.history.state);
  stateCopy.key = getStateKey();
  window.history.replaceState(stateCopy, '', absolutePath);
  window.addEventListener('popstate', handlePopState);
  return function () {
    window.removeEventListener('popstate', handlePopState);
  }
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(
      router,
      to,
      from,
      isPop ? position : null
    );

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll
        .then(function (shouldScroll) {
          scrollToPosition((shouldScroll), position);
        })
        .catch(function (err) {
          if (true) {
            assert(false, err.toString());
          }
        });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function handlePopState (e) {
  saveScrollPosition();
  if (e.state && e.state.key) {
    setStateKey(e.state.key);
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

var hashStartsWithNumberRE = /^#\d/;

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    // getElementById would still fail if the selector contains a more complicated query like #main[data-attr]
    // but at the same time, it doesn't make much sense to select an element with an id and an extra selector
    var el = hashStartsWithNumberRE.test(shouldScroll.selector) // $flow-disable-line
      ? document.getElementById(shouldScroll.selector.slice(1)) // $flow-disable-line
      : document.querySelector(shouldScroll.selector);

    if (el) {
      var offset =
        shouldScroll.offset && typeof shouldScroll.offset === 'object'
          ? shouldScroll.offset
          : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState =
  inBrowser &&
  (function () {
    var ua = window.navigator.userAgent;

    if (
      (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
      ua.indexOf('Mobile Safari') !== -1 &&
      ua.indexOf('Chrome') === -1 &&
      ua.indexOf('Windows Phone') === -1
    ) {
      return false
    }

    return window.history && typeof window.history.pushState === 'function'
  })();

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      // preserve existing history state as it could be overriden by the user
      var stateCopy = extend({}, history.state);
      stateCopy.key = getStateKey();
      history.replaceState(stateCopy, '', url);
    } else {
      history.pushState({ key: setStateKey(genStateKey()) }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "development" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

var NavigationFailureType = {
  redirected: 1,
  aborted: 2,
  cancelled: 3,
  duplicated: 4
};

function createNavigationRedirectedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.redirected,
    ("Redirected when going from \"" + (from.fullPath) + "\" to \"" + (stringifyRoute(
      to
    )) + "\" via a navigation guard.")
  )
}

function createNavigationDuplicatedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.duplicated,
    ("Avoided redundant navigation to current location: \"" + (from.fullPath) + "\".")
  )
}

function createNavigationCancelledError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.cancelled,
    ("Navigation cancelled from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" with a new navigation.")
  )
}

function createNavigationAbortedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.aborted,
    ("Navigation aborted from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" via a navigation guard.")
  )
}

function createRouterError (from, to, type, message) {
  var error = new Error(message);
  error._isRouter = true;
  error.from = from;
  error.to = to;
  error.type = type;

  return error
}

var propertiesToLog = ['params', 'query', 'hash'];

function stringifyRoute (to) {
  if (typeof to === 'string') { return to }
  if ('path' in to) { return to.path }
  var location = {};
  propertiesToLog.forEach(function (key) {
    if (key in to) { location[key] = to[key]; }
  });
  return JSON.stringify(location, null, 2)
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
  this.listeners = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (
  location,
  onComplete,
  onAbort
) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(
    route,
    function () {
      var prev = this$1.current;
      this$1.updateRoute(route);
      onComplete && onComplete(route);
      this$1.ensureURL();
      this$1.router.afterHooks.forEach(function (hook) {
        hook && hook(route, prev);
      });

      // fire ready cbs once
      if (!this$1.ready) {
        this$1.ready = true;
        this$1.readyCbs.forEach(function (cb) {
          cb(route);
        });
      }
    },
    function (err) {
      if (onAbort) {
        onAbort(err);
      }
      if (err && !this$1.ready) {
        this$1.ready = true;
        // Initial redirection should still trigger the onReady onSuccess
        // https://github.com/vuejs/vue-router/issues/3225
        if (!isRouterError(err, NavigationFailureType.redirected)) {
          this$1.readyErrorCbs.forEach(function (cb) {
            cb(err);
          });
        } else {
          this$1.readyCbs.forEach(function (cb) {
            cb(route);
          });
        }
      }
    }
  );
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    // changed after adding errors with
    // https://github.com/vuejs/vue-router/pull/3047 before that change,
    // redirect and aborted navigation would produce an err == null
    if (!isRouterError(err) && isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  var lastRouteIndex = route.matched.length - 1;
  var lastCurrentIndex = current.matched.length - 1;
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    lastRouteIndex === lastCurrentIndex &&
    route.matched[lastRouteIndex] === current.matched[lastCurrentIndex]
  ) {
    this.ensureURL();
    return abort(createNavigationDuplicatedError(current, route))
  }

  var ref = resolveQueue(
    this.current.matched,
    route.matched
  );
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort(createNavigationCancelledError(current, route))
    }
    try {
      hook(route, current, function (to) {
        if (to === false) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(createNavigationAbortedError(current, route));
        } else if (isError(to)) {
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' &&
            (typeof to.path === 'string' || typeof to.name === 'string'))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort(createNavigationRedirectedError(current, route));
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort(createNavigationCancelledError(current, route))
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) {
            cb();
          });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  this.current = route;
  this.cb && this.cb(route);
};

History.prototype.setupListeners = function setupListeners () {
  // Default implementation is empty
};

History.prototype.teardownListeners = function teardownListeners () {
  this.listeners.forEach(function (cleanupListener) {
    cleanupListener();
  });
  this.listeners = [];
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(
    activated,
    'beforeRouteEnter',
    function (guard, _, match, key) {
      return bindEnterGuard(guard, match, key, cbs, isValid)
    }
  )
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
      next(cb);
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (
    instances[key] &&
    !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
  ) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = /*@__PURE__*/(function (History) {
  function HTML5History (router, base) {
    History.call(this, router, base);

    this._startLocation = getLocation(this.base);
  }

  if ( History ) HTML5History.__proto__ = History;
  HTML5History.prototype = Object.create( History && History.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    if (this.listeners.length > 0) {
      return
    }

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }

    var handleRoutingEvent = function () {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === this$1._startLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    };
    window.addEventListener('popstate', handleRoutingEvent);
    this.listeners.push(function () {
      window.removeEventListener('popstate', handleRoutingEvent);
    });
  };

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = decodeURI(window.location.pathname);
  if (base && path.toLowerCase().indexOf(base.toLowerCase()) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = /*@__PURE__*/(function (History) {
  function HashHistory (router, base, fallback) {
    History.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History ) HashHistory.__proto__ = History;
  HashHistory.prototype = Object.create( History && History.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    if (this.listeners.length > 0) {
      return
    }

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }

    var handleRoutingEvent = function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    };
    var eventType = supportsPushState ? 'popstate' : 'hashchange';
    window.addEventListener(
      eventType,
      handleRoutingEvent
    );
    this.listeners.push(function () {
      window.removeEventListener(eventType, handleRoutingEvent);
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        pushHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        replaceHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  // empty path
  if (index < 0) { return '' }

  href = href.slice(index + 1);
  // decode the hash but not the search or hash
  // as search(query) is already decoded
  // https://github.com/vuejs/vue-router/issues/2708
  var searchIndex = href.indexOf('?');
  if (searchIndex < 0) {
    var hashIndex = href.indexOf('#');
    if (hashIndex > -1) {
      href = decodeURI(href.slice(0, hashIndex)) + href.slice(hashIndex);
    } else { href = decodeURI(href); }
  } else {
    href = decodeURI(href.slice(0, searchIndex)) + href.slice(searchIndex);
  }

  return href
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = /*@__PURE__*/(function (History) {
  function AbstractHistory (router, base) {
    History.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History ) AbstractHistory.__proto__ = History;
  AbstractHistory.prototype = Object.create( History && History.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
        this$1.index++;
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(
      route,
      function () {
        this$1.index = targetIndex;
        this$1.updateRoute(route);
      },
      function (err) {
        if (isRouterError(err, NavigationFailureType.duplicated)) {
          this$1.index = targetIndex;
        }
      }
    );
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */



var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "development" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // set up app destroyed handler
  // https://github.com/vuejs/vue-router/issues/2639
  app.$once('hook:destroyed', function () {
    // clean out app from this.apps array once destroyed
    var index = this$1.apps.indexOf(app);
    if (index > -1) { this$1.apps.splice(index, 1); }
    // ensure we still have a main app or null if no apps
    // we do not release the router so it can be reused
    if (this$1.app === app) { this$1.app = this$1.apps[0] || null; }

    if (!this$1.app) {
      // clean up event listeners
      // https://github.com/vuejs/vue-router/issues/2341
      this$1.history.teardownListeners();
    }
  });

  // main app previously initialized
  // return as we don't need to set up new history listener
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History || history instanceof HashHistory) {
    var setupListeners = function () {
      history.setupListeners();
    };
    history.transitionTo(history.getCurrentLocation(), setupListeners, setupListeners);
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.push(location, resolve, reject);
    })
  } else {
    this.history.push(location, onComplete, onAbort);
  }
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.replace(location, resolve, reject);
    })
  } else {
    this.history.replace(location, onComplete, onAbort);
  }
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  current = current || this.history.current;
  var location = normalizeLocation(
    to,
    current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.3.4';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);


/***/ }),
/* 363 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Url */
/* unused harmony export Http */
/* unused harmony export Resource */
/*!
 * vue-resource v1.5.1
 * https://github.com/pagekit/vue-resource
 * Released under the MIT License.
 */

/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

var RESOLVED = 0;
var REJECTED = 1;
var PENDING = 2;

function Promise$1(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

Promise$1.reject = function (r) {
    return new Promise$1(function (resolve, reject) {
        reject(r);
    });
};

Promise$1.resolve = function (x) {
    return new Promise$1(function (resolve, reject) {
        resolve(x);
    });
};

Promise$1.all = function all(iterable) {
    return new Promise$1(function (resolve, reject) {
        var count = 0, result = [];

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

Promise$1.race = function race(iterable) {
    return new Promise$1(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

var p = Promise$1.prototype;

p.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x['then'];

            if (x !== null && typeof x === 'object' && typeof then === 'function') {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;

                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p.notify = function notify() {
    var promise = this;

    nextTick(function () {
        if (promise.state !== PENDING) {
            while (promise.deferred.length) {
                var deferred = promise.deferred.shift(),
                    onResolved = deferred[0],
                    onRejected = deferred[1],
                    resolve = deferred[2],
                    reject = deferred[3];

                try {
                    if (promise.state === RESOLVED) {
                        if (typeof onResolved === 'function') {
                            resolve(onResolved.call(undefined, promise.value));
                        } else {
                            resolve(promise.value);
                        }
                    } else if (promise.state === REJECTED) {
                        if (typeof onRejected === 'function') {
                            resolve(onRejected.call(undefined, promise.value));
                        } else {
                            reject(promise.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p.then = function then(onResolved, onRejected) {
    var promise = this;

    return new Promise$1(function (resolve, reject) {
        promise.deferred.push([onResolved, onRejected, resolve, reject]);
        promise.notify();
    });
};

p.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

/**
 * Promise adapter.
 */

if (typeof Promise === 'undefined') {
    window.Promise = Promise$1;
}

function PromiseObj(executor, context) {

    if (executor instanceof Promise) {
        this.promise = executor;
    } else {
        this.promise = new Promise(executor.bind(context));
    }

    this.context = context;
}

PromiseObj.all = function (iterable, context) {
    return new PromiseObj(Promise.all(iterable), context);
};

PromiseObj.resolve = function (value, context) {
    return new PromiseObj(Promise.resolve(value), context);
};

PromiseObj.reject = function (reason, context) {
    return new PromiseObj(Promise.reject(reason), context);
};

PromiseObj.race = function (iterable, context) {
    return new PromiseObj(Promise.race(iterable), context);
};

var p$1 = PromiseObj.prototype;

p$1.bind = function (context) {
    this.context = context;
    return this;
};

p$1.then = function (fulfilled, rejected) {

    if (fulfilled && fulfilled.bind && this.context) {
        fulfilled = fulfilled.bind(this.context);
    }

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
};

p$1.catch = function (rejected) {

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.catch(rejected), this.context);
};

p$1.finally = function (callback) {

    return this.then(function (value) {
        callback.call(this);
        return value;
    }, function (reason) {
        callback.call(this);
        return Promise.reject(reason);
    }
    );
};

/**
 * Utility functions.
 */

var ref = {};
var hasOwnProperty = ref.hasOwnProperty;
var ref$1 = [];
var slice = ref$1.slice;
var debug = false, ntick;

var inBrowser = typeof window !== 'undefined';

function Util (ref) {
    var config = ref.config;
    var nextTick = ref.nextTick;

    ntick = nextTick;
    debug = config.debug || !config.silent;
}

function warn(msg) {
    if (typeof console !== 'undefined' && debug) {
        console.warn('[VueResource warn]: ' + msg);
    }
}

function error(msg) {
    if (typeof console !== 'undefined') {
        console.error(msg);
    }
}

function nextTick(cb, ctx) {
    return ntick(cb, ctx);
}

function trim(str) {
    return str ? str.replace(/^\s*|\s*$/g, '') : '';
}

function trimEnd(str, chars) {

    if (str && chars === undefined) {
        return str.replace(/\s+$/, '');
    }

    if (!str || !chars) {
        return str;
    }

    return str.replace(new RegExp(("[" + chars + "]+$")), '');
}

function toLower(str) {
    return str ? str.toLowerCase() : '';
}

function toUpper(str) {
    return str ? str.toUpperCase() : '';
}

var isArray = Array.isArray;

function isString(val) {
    return typeof val === 'string';
}

function isFunction(val) {
    return typeof val === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
}

function isBlob(obj) {
    return typeof Blob !== 'undefined' && obj instanceof Blob;
}

function isFormData(obj) {
    return typeof FormData !== 'undefined' && obj instanceof FormData;
}

function when(value, fulfilled, rejected) {

    var promise = PromiseObj.resolve(value);

    if (arguments.length < 2) {
        return promise;
    }

    return promise.then(fulfilled, rejected);
}

function options(fn, obj, opts) {

    opts = opts || {};

    if (isFunction(opts)) {
        opts = opts.call(obj);
    }

    return merge(fn.bind({$vm: obj, $options: opts}), fn, {$options: opts});
}

function each(obj, iterator) {

    var i, key;

    if (isArray(obj)) {
        for (i = 0; i < obj.length; i++) {
            iterator.call(obj[i], obj[i], i);
        }
    } else if (isObject(obj)) {
        for (key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                iterator.call(obj[key], obj[key], key);
            }
        }
    }

    return obj;
}

var assign = Object.assign || _assign;

function merge(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source, true);
    });

    return target;
}

function defaults(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {

        for (var key in source) {
            if (target[key] === undefined) {
                target[key] = source[key];
            }
        }

    });

    return target;
}

function _assign(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source);
    });

    return target;
}

function _merge(target, source, deep) {
    for (var key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
                target[key] = {};
            }
            if (isArray(source[key]) && !isArray(target[key])) {
                target[key] = [];
            }
            _merge(target[key], source[key], deep);
        } else if (source[key] !== undefined) {
            target[key] = source[key];
        }
    }
}

/**
 * Root Prefix Transform.
 */

function root (options$$1, next) {

    var url = next(options$$1);

    if (isString(options$$1.root) && !/^(https?:)?\//.test(url)) {
        url = trimEnd(options$$1.root, '/') + '/' + url;
    }

    return url;
}

/**
 * Query Parameter Transform.
 */

function query (options$$1, next) {

    var urlParams = Object.keys(Url.options.params), query = {}, url = next(options$$1);

    each(options$$1.params, function (value, key) {
        if (urlParams.indexOf(key) === -1) {
            query[key] = value;
        }
    });

    query = Url.params(query);

    if (query) {
        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
    }

    return url;
}

/**
 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
 */

function expand(url, params, variables) {

    var tmpl = parse(url), expanded = tmpl.expand(params);

    if (variables) {
        variables.push.apply(variables, tmpl.vars);
    }

    return expanded;
}

function parse(template) {

    var operators = ['+', '#', '.', '/', ';', '?', '&'], variables = [];

    return {
        vars: variables,
        expand: function expand(context) {
            return template.replace(/\{([^{}]+)\}|([^{}]+)/g, function (_, expression, literal) {
                if (expression) {

                    var operator = null, values = [];

                    if (operators.indexOf(expression.charAt(0)) !== -1) {
                        operator = expression.charAt(0);
                        expression = expression.substr(1);
                    }

                    expression.split(/,/g).forEach(function (variable) {
                        var tmp = /([^:*]*)(?::(\d+)|(\*))?/.exec(variable);
                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                        variables.push(tmp[1]);
                    });

                    if (operator && operator !== '+') {

                        var separator = ',';

                        if (operator === '?') {
                            separator = '&';
                        } else if (operator !== '#') {
                            separator = operator;
                        }

                        return (values.length !== 0 ? operator : '') + values.join(separator);
                    } else {
                        return values.join(',');
                    }

                } else {
                    return encodeReserved(literal);
                }
            });
        }
    };
}

function getValues(context, operator, key, modifier) {

    var value = context[key], result = [];

    if (isDefined(value) && value !== '') {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            value = value.toString();

            if (modifier && modifier !== '*') {
                value = value.substring(0, parseInt(modifier, 10));
            }

            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
        } else {
            if (modifier === '*') {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            } else {
                var tmp = [];

                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeURIComponent(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }

                if (isKeyOperator(operator)) {
                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
                } else if (tmp.length !== 0) {
                    result.push(tmp.join(','));
                }
            }
        }
    } else {
        if (operator === ';') {
            result.push(encodeURIComponent(key));
        } else if (value === '' && (operator === '&' || operator === '?')) {
            result.push(encodeURIComponent(key) + '=');
        } else if (value === '') {
            result.push('');
        }
    }

    return result;
}

function isDefined(value) {
    return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
    return operator === ';' || operator === '&' || operator === '?';
}

function encodeValue(operator, value, key) {

    value = (operator === '+' || operator === '#') ? encodeReserved(value) : encodeURIComponent(value);

    if (key) {
        return encodeURIComponent(key) + '=' + value;
    } else {
        return value;
    }
}

function encodeReserved(str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part);
        }
        return part;
    }).join('');
}

/**
 * URL Template (RFC 6570) Transform.
 */

function template (options) {

    var variables = [], url = expand(options.url, options.params, variables);

    variables.forEach(function (key) {
        delete options.params[key];
    });

    return url;
}

/**
 * Service for URL templating.
 */

function Url(url, params) {

    var self = this || {}, options$$1 = url, transform;

    if (isString(url)) {
        options$$1 = {url: url, params: params};
    }

    options$$1 = merge({}, Url.options, self.$options, options$$1);

    Url.transforms.forEach(function (handler) {

        if (isString(handler)) {
            handler = Url.transform[handler];
        }

        if (isFunction(handler)) {
            transform = factory(handler, transform, self.$vm);
        }

    });

    return transform(options$$1);
}

/**
 * Url options.
 */

Url.options = {
    url: '',
    root: null,
    params: {}
};

/**
 * Url transforms.
 */

Url.transform = {template: template, query: query, root: root};
Url.transforms = ['template', 'query', 'root'];

/**
 * Encodes a Url parameter string.
 *
 * @param {Object} obj
 */

Url.params = function (obj) {

    var params = [], escape = encodeURIComponent;

    params.add = function (key, value) {

        if (isFunction(value)) {
            value = value();
        }

        if (value === null) {
            value = '';
        }

        this.push(escape(key) + '=' + escape(value));
    };

    serialize(params, obj);

    return params.join('&').replace(/%20/g, '+');
};

/**
 * Parse a URL and return its components.
 *
 * @param {String} url
 */

Url.parse = function (url) {

    var el = document.createElement('a');

    if (document.documentMode) {
        el.href = url;
        url = el.href;
    }

    el.href = url;

    return {
        href: el.href,
        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
        port: el.port,
        host: el.host,
        hostname: el.hostname,
        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
        search: el.search ? el.search.replace(/^\?/, '') : '',
        hash: el.hash ? el.hash.replace(/^#/, '') : ''
    };
};

function factory(handler, next, vm) {
    return function (options$$1) {
        return handler.call(vm, options$$1, next);
    };
}

function serialize(params, obj, scope) {

    var array = isArray(obj), plain = isPlainObject(obj), hash;

    each(obj, function (value, key) {

        hash = isObject(value) || isArray(value);

        if (scope) {
            key = scope + '[' + (plain || hash ? key : '') + ']';
        }

        if (!scope && array) {
            params.add(value.name, value.value);
        } else if (hash) {
            serialize(params, value, key);
        } else {
            params.add(key, value);
        }
    });
}

/**
 * XDomain client (Internet Explorer).
 */

function xdrClient (request) {
    return new PromiseObj(function (resolve) {

        var xdr = new XDomainRequest(), handler = function (ref) {
                var type = ref.type;


                var status = 0;

                if (type === 'load') {
                    status = 200;
                } else if (type === 'error') {
                    status = 500;
                }

                resolve(request.respondWith(xdr.responseText, {status: status}));
            };

        request.abort = function () { return xdr.abort(); };

        xdr.open(request.method, request.getUrl());

        if (request.timeout) {
            xdr.timeout = request.timeout;
        }

        xdr.onload = handler;
        xdr.onabort = handler;
        xdr.onerror = handler;
        xdr.ontimeout = handler;
        xdr.onprogress = function () {};
        xdr.send(request.getBody());
    });
}

/**
 * CORS Interceptor.
 */

var SUPPORTS_CORS = inBrowser && 'withCredentials' in new XMLHttpRequest();

function cors (request) {

    if (inBrowser) {

        var orgUrl = Url.parse(location.href);
        var reqUrl = Url.parse(request.getUrl());

        if (reqUrl.protocol !== orgUrl.protocol || reqUrl.host !== orgUrl.host) {

            request.crossOrigin = true;
            request.emulateHTTP = false;

            if (!SUPPORTS_CORS) {
                request.client = xdrClient;
            }
        }
    }

}

/**
 * Form data Interceptor.
 */

function form (request) {

    if (isFormData(request.body)) {
        request.headers.delete('Content-Type');
    } else if (isObject(request.body) && request.emulateJSON) {
        request.body = Url.params(request.body);
        request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    }

}

/**
 * JSON Interceptor.
 */

function json (request) {

    var type = request.headers.get('Content-Type') || '';

    if (isObject(request.body) && type.indexOf('application/json') === 0) {
        request.body = JSON.stringify(request.body);
    }

    return function (response) {

        return response.bodyText ? when(response.text(), function (text) {

            var type = response.headers.get('Content-Type') || '';

            if (type.indexOf('application/json') === 0 || isJson(text)) {

                try {
                    response.body = JSON.parse(text);
                } catch (e) {
                    response.body = null;
                }

            } else {
                response.body = text;
            }

            return response;

        }) : response;

    };
}

function isJson(str) {

    var start = str.match(/^\s*(\[|\{)/);
    var end = {'[': /]\s*$/, '{': /}\s*$/};

    return start && end[start[1]].test(str);
}

/**
 * JSONP client (Browser).
 */

function jsonpClient (request) {
    return new PromiseObj(function (resolve) {

        var name = request.jsonp || 'callback', callback = request.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2), body = null, handler, script;

        handler = function (ref) {
            var type = ref.type;


            var status = 0;

            if (type === 'load' && body !== null) {
                status = 200;
            } else if (type === 'error') {
                status = 500;
            }

            if (status && window[callback]) {
                delete window[callback];
                document.body.removeChild(script);
            }

            resolve(request.respondWith(body, {status: status}));
        };

        window[callback] = function (result) {
            body = JSON.stringify(result);
        };

        request.abort = function () {
            handler({type: 'abort'});
        };

        request.params[name] = callback;

        if (request.timeout) {
            setTimeout(request.abort, request.timeout);
        }

        script = document.createElement('script');
        script.src = request.getUrl();
        script.type = 'text/javascript';
        script.async = true;
        script.onload = handler;
        script.onerror = handler;

        document.body.appendChild(script);
    });
}

/**
 * JSONP Interceptor.
 */

function jsonp (request) {

    if (request.method == 'JSONP') {
        request.client = jsonpClient;
    }

}

/**
 * Before Interceptor.
 */

function before (request) {

    if (isFunction(request.before)) {
        request.before.call(this, request);
    }

}

/**
 * HTTP method override Interceptor.
 */

function method (request) {

    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
        request.headers.set('X-HTTP-Method-Override', request.method);
        request.method = 'POST';
    }

}

/**
 * Header Interceptor.
 */

function header (request) {

    var headers = assign({}, Http.headers.common,
        !request.crossOrigin ? Http.headers.custom : {},
        Http.headers[toLower(request.method)]
    );

    each(headers, function (value, name) {
        if (!request.headers.has(name)) {
            request.headers.set(name, value);
        }
    });

}

/**
 * XMLHttp client (Browser).
 */

function xhrClient (request) {
    return new PromiseObj(function (resolve) {

        var xhr = new XMLHttpRequest(), handler = function (event) {

                var response = request.respondWith(
                'response' in xhr ? xhr.response : xhr.responseText, {
                    status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
                    statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
                });

                each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
                    response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
                });

                resolve(response);
            };

        request.abort = function () { return xhr.abort(); };

        xhr.open(request.method, request.getUrl(), true);

        if (request.timeout) {
            xhr.timeout = request.timeout;
        }

        if (request.responseType && 'responseType' in xhr) {
            xhr.responseType = request.responseType;
        }

        if (request.withCredentials || request.credentials) {
            xhr.withCredentials = true;
        }

        if (!request.crossOrigin) {
            request.headers.set('X-Requested-With', 'XMLHttpRequest');
        }

        // deprecated use downloadProgress
        if (isFunction(request.progress) && request.method === 'GET') {
            xhr.addEventListener('progress', request.progress);
        }

        if (isFunction(request.downloadProgress)) {
            xhr.addEventListener('progress', request.downloadProgress);
        }

        // deprecated use uploadProgress
        if (isFunction(request.progress) && /^(POST|PUT)$/i.test(request.method)) {
            xhr.upload.addEventListener('progress', request.progress);
        }

        if (isFunction(request.uploadProgress) && xhr.upload) {
            xhr.upload.addEventListener('progress', request.uploadProgress);
        }

        request.headers.forEach(function (value, name) {
            xhr.setRequestHeader(name, value);
        });

        xhr.onload = handler;
        xhr.onabort = handler;
        xhr.onerror = handler;
        xhr.ontimeout = handler;
        xhr.send(request.getBody());
    });
}

/**
 * Http client (Node).
 */

function nodeClient (request) {

    var client = __webpack_require__(364);

    return new PromiseObj(function (resolve) {

        var url = request.getUrl();
        var body = request.getBody();
        var method = request.method;
        var headers = {}, handler;

        request.headers.forEach(function (value, name) {
            headers[name] = value;
        });

        client(url, {body: body, method: method, headers: headers}).then(handler = function (resp) {

            var response = request.respondWith(resp.body, {
                status: resp.statusCode,
                statusText: trim(resp.statusMessage)
            });

            each(resp.headers, function (value, name) {
                response.headers.set(name, value);
            });

            resolve(response);

        }, function (error$$1) { return handler(error$$1.response); });
    });
}

/**
 * Base client.
 */

function Client (context) {

    var reqHandlers = [sendRequest], resHandlers = [];

    if (!isObject(context)) {
        context = null;
    }

    function Client(request) {
        while (reqHandlers.length) {

            var handler = reqHandlers.pop();

            if (isFunction(handler)) {

                var response = (void 0), next = (void 0);

                response = handler.call(context, request, function (val) { return next = val; }) || next;

                if (isObject(response)) {
                    return new PromiseObj(function (resolve, reject) {

                        resHandlers.forEach(function (handler) {
                            response = when(response, function (response) {
                                return handler.call(context, response) || response;
                            }, reject);
                        });

                        when(response, resolve, reject);

                    }, context);
                }

                if (isFunction(response)) {
                    resHandlers.unshift(response);
                }

            } else {
                warn(("Invalid interceptor of type " + (typeof handler) + ", must be a function"));
            }
        }
    }

    Client.use = function (handler) {
        reqHandlers.push(handler);
    };

    return Client;
}

function sendRequest(request) {

    var client = request.client || (inBrowser ? xhrClient : nodeClient);

    return client(request);
}

/**
 * HTTP Headers.
 */

var Headers = function Headers(headers) {
    var this$1 = this;


    this.map = {};

    each(headers, function (value, name) { return this$1.append(name, value); });
};

Headers.prototype.has = function has (name) {
    return getName(this.map, name) !== null;
};

Headers.prototype.get = function get (name) {

    var list = this.map[getName(this.map, name)];

    return list ? list.join() : null;
};

Headers.prototype.getAll = function getAll (name) {
    return this.map[getName(this.map, name)] || [];
};

Headers.prototype.set = function set (name, value) {
    this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
};

Headers.prototype.append = function append (name, value) {

    var list = this.map[getName(this.map, name)];

    if (list) {
        list.push(trim(value));
    } else {
        this.set(name, value);
    }
};

Headers.prototype.delete = function delete$1 (name) {
    delete this.map[getName(this.map, name)];
};

Headers.prototype.deleteAll = function deleteAll () {
    this.map = {};
};

Headers.prototype.forEach = function forEach (callback, thisArg) {
        var this$1 = this;

    each(this.map, function (list, name) {
        each(list, function (value) { return callback.call(thisArg, value, name, this$1); });
    });
};

function getName(map, name) {
    return Object.keys(map).reduce(function (prev, curr) {
        return toLower(name) === toLower(curr) ? curr : prev;
    }, null);
}

function normalizeName(name) {

    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
    }

    return trim(name);
}

/**
 * HTTP Response.
 */

var Response = function Response(body, ref) {
    var url = ref.url;
    var headers = ref.headers;
    var status = ref.status;
    var statusText = ref.statusText;


    this.url = url;
    this.ok = status >= 200 && status < 300;
    this.status = status || 0;
    this.statusText = statusText || '';
    this.headers = new Headers(headers);
    this.body = body;

    if (isString(body)) {

        this.bodyText = body;

    } else if (isBlob(body)) {

        this.bodyBlob = body;

        if (isBlobText(body)) {
            this.bodyText = blobText(body);
        }
    }
};

Response.prototype.blob = function blob () {
    return when(this.bodyBlob);
};

Response.prototype.text = function text () {
    return when(this.bodyText);
};

Response.prototype.json = function json () {
    return when(this.text(), function (text) { return JSON.parse(text); });
};

Object.defineProperty(Response.prototype, 'data', {

    get: function get() {
        return this.body;
    },

    set: function set(body) {
        this.body = body;
    }

});

function blobText(body) {
    return new PromiseObj(function (resolve) {

        var reader = new FileReader();

        reader.readAsText(body);
        reader.onload = function () {
            resolve(reader.result);
        };

    });
}

function isBlobText(body) {
    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
}

/**
 * HTTP Request.
 */

var Request = function Request(options$$1) {

    this.body = null;
    this.params = {};

    assign(this, options$$1, {
        method: toUpper(options$$1.method || 'GET')
    });

    if (!(this.headers instanceof Headers)) {
        this.headers = new Headers(this.headers);
    }
};

Request.prototype.getUrl = function getUrl () {
    return Url(this);
};

Request.prototype.getBody = function getBody () {
    return this.body;
};

Request.prototype.respondWith = function respondWith (body, options$$1) {
    return new Response(body, assign(options$$1 || {}, {url: this.getUrl()}));
};

/**
 * Service for sending network requests.
 */

var COMMON_HEADERS = {'Accept': 'application/json, text/plain, */*'};
var JSON_CONTENT_TYPE = {'Content-Type': 'application/json;charset=utf-8'};

function Http(options$$1) {

    var self = this || {}, client = Client(self.$vm);

    defaults(options$$1 || {}, self.$options, Http.options);

    Http.interceptors.forEach(function (handler) {

        if (isString(handler)) {
            handler = Http.interceptor[handler];
        }

        if (isFunction(handler)) {
            client.use(handler);
        }

    });

    return client(new Request(options$$1)).then(function (response) {

        return response.ok ? response : PromiseObj.reject(response);

    }, function (response) {

        if (response instanceof Error) {
            error(response);
        }

        return PromiseObj.reject(response);
    });
}

Http.options = {};

Http.headers = {
    put: JSON_CONTENT_TYPE,
    post: JSON_CONTENT_TYPE,
    patch: JSON_CONTENT_TYPE,
    delete: JSON_CONTENT_TYPE,
    common: COMMON_HEADERS,
    custom: {}
};

Http.interceptor = {before: before, method: method, jsonp: jsonp, json: json, form: form, header: header, cors: cors};
Http.interceptors = ['before', 'method', 'jsonp', 'json', 'form', 'header', 'cors'];

['get', 'delete', 'head', 'jsonp'].forEach(function (method$$1) {

    Http[method$$1] = function (url, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1}));
    };

});

['post', 'put', 'patch'].forEach(function (method$$1) {

    Http[method$$1] = function (url, body, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1, body: body}));
    };

});

/**
 * Service for interacting with RESTful services.
 */

function Resource(url, params, actions, options$$1) {

    var self = this || {}, resource = {};

    actions = assign({},
        Resource.actions,
        actions
    );

    each(actions, function (action, name) {

        action = merge({url: url, params: assign({}, params)}, options$$1, action);

        resource[name] = function () {
            return (self.$http || Http)(opts(action, arguments));
        };
    });

    return resource;
}

function opts(action, args) {

    var options$$1 = assign({}, action), params = {}, body;

    switch (args.length) {

        case 2:

            params = args[0];
            body = args[1];

            break;

        case 1:

            if (/^(POST|PUT|PATCH)$/i.test(options$$1.method)) {
                body = args[0];
            } else {
                params = args[0];
            }

            break;

        case 0:

            break;

        default:

            throw 'Expected up to 2 arguments [params, body], got ' + args.length + ' arguments';
    }

    options$$1.body = body;
    options$$1.params = assign({}, options$$1.params, params);

    return options$$1;
}

Resource.actions = {

    get: {method: 'GET'},
    save: {method: 'POST'},
    query: {method: 'GET'},
    update: {method: 'PUT'},
    remove: {method: 'DELETE'},
    delete: {method: 'DELETE'}

};

/**
 * Install plugin.
 */

function plugin(Vue) {

    if (plugin.installed) {
        return;
    }

    Util(Vue);

    Vue.url = Url;
    Vue.http = Http;
    Vue.resource = Resource;
    Vue.Promise = PromiseObj;

    Object.defineProperties(Vue.prototype, {

        $url: {
            get: function get() {
                return options(Vue.url, this, this.$options.url);
            }
        },

        $http: {
            get: function get() {
                return options(Vue.http, this, this.$options.http);
            }
        },

        $resource: {
            get: function get() {
                return Vue.resource.bind(this);
            }
        },

        $promise: {
            get: function get() {
                var this$1 = this;

                return function (executor) { return new Vue.Promise(executor, this$1); };
            }
        }

    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);



/***/ }),
/* 364 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 365 */,
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(367);
module.exports = __webpack_require__(2).Object.getPrototypeOf;


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(33);
var $getPrototypeOf = __webpack_require__(71);

__webpack_require__(81)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(369), __esModule: true };

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(370);
module.exports = __webpack_require__(2).Object.setPrototypeOf;


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(11);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(371).set });


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(15);
var anObject = __webpack_require__(12);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(29)(Function.call, __webpack_require__(80).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 372 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__(7);





var Base = function () {
    function Base(options) {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Base);

        // Define an automatic unique ID. This is primarily to distinguish
        // between multiple instances of the same name and data.
        Object.defineProperty(this, '_uid', {
            value: Object(__WEBPACK_IMPORTED_MODULE_3__common__["m" /* uuidv4 */])(),
            enumerable: false,
            configurable: false,
            writable: false
        });

        Vue.set(this, '_listeners', {}); // Event listeners
        Vue.set(this, '_options', {}); // Internal option store

        Vue.set(this, '_options', options);

        this.boot();
    }

    /**
     * @returns {string} The class name of this instance.
     */


    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Base, [{
        key: 'getOption',
        value: function getOption(option) {
            return _.get(this._options, option);
        }

        /**
         * Called after construction, this hook allows you to add some extra setup
         * logic without having to override the constructor.
         */

    }, {
        key: 'boot',
        value: function boot() {}
    }, {
        key: '$class',
        get: function get() {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(this).constructor.name;
        }
    }]);

    return Base;
}();

/* harmony default export */ __webpack_exports__["a"] = (Base);

/***/ }),
/* 373 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_admin_lte__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_admin_lte___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_admin_lte__);




// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
var scrollBehavior = function scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition;
    } else {
        var position = {};
        // new navigation.
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(function (m) {
            return m.meta.noScroll;
        })) {} else {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0;
            position.y = 0;
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position;
    }
};

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * @param  {string}   path     the filename (basename) of the view to load.
 */
var BASE_PAGE_PATH = './pages/';
var loadPage = function loadPage(path) {
    return function (resolve) {
        return __webpack_require__(374)(BASE_PAGE_PATH + path + '.vue');
    };
};

// Todo: figure out why the above doesn't work.

var routes = [{
    name: 'home',
    path: '/',
    component: loadPage('Home'),
    redirect: '/clients'
}, {
    name: 'test',
    path: '/test',
    component: loadPage('Test')
},

// Intake
{
    name: 'intake',
    path: '/intake',
    component: loadPage('Intake')
}, {
    name: 'intakeIndex',
    path: '/intakes',
    component: loadPage('intakes/Index'),
    meta: {
        breadcrumb: {
            label: 'Intakes'
        }
    }
}, {
    name: 'intakeShow',
    path: '/intakes/:intake_id',
    component: loadPage('intakes/Show'),
    meta: {
        breadcrumb: {
            label: '{{ id }} ({{ date }})',
            parent: 'intakeIndex',
            vuex: {
                getter: 'intakes/byId',
                param: 'intake_id'
            }
        }
    }
},

// abusers
{
    name: 'abuserIndex',
    path: '/abusers',
    component: loadPage('abusers/Index'),
    meta: {
        breadcrumb: {
            label: 'Abusers'
        }
    }
},
// abuserShow
{
    name: 'abuserShow',
    path: '/abusers/:abuser_id',
    component: loadPage('abusers/Show'),
    redirect: '/abusers/:abuser_id/profile',
    meta: {
        breadcrumb: {
            label: '{{ first_name }} {{ last_name }}',
            parent: 'abuserIndex',
            vuex: {
                getter: 'abusers/byId',
                param: 'abuser_id'
            }
        }
    },
    children: [
    // clientAbusers
    {
        name: 'abuserClient',
        path: 'clients',
        component: loadPage('abusers/abuse/Index'),
        meta: {
            breadcrumb: {
                label: 'Abusers',
                parent: 'clientShow'
            }
        }
    },
    // clientProfile
    {
        name: 'abuserProfile',
        path: 'profile',
        component: loadPage('abusers/Profile'),
        meta: {
            breadcrumb: {
                label: '{{ client.first_name }} {{ client.last_name }}'
                // parent: 'clients',
            }
        }
    }]
},
// abuserEdit
{
    name: 'abuserEdit',
    path: '/abusers/:abuser_id/edit',
    component: loadPage('abusers/Edit'),
    meta: {
        breadcrumb: {
            label: 'Editing {{ first_name }} {{ last_name }}',
            parent: 'abuserShow',
            vuex: {
                getter: 'abusers/byId',
                param: 'abuser_id'
            }
        }
    }
},

// Advocates
{
    name: 'advocates',
    path: '/advocates',
    component: loadPage('advocates/Index'),
    meta: {
        breadcrumb: {
            label: 'Advocates'
        },
        requiresAdmin: true
    }
}, {
    name: 'advocateAdd',
    path: '/advocates/add',
    component: loadPage('advocates/Add'),
    meta: {
        breadcrumb: {
            label: 'Add Advocate',
            parent: 'advocates'
        },
        requiresAdmin: true
    }
}, {
    name: 'advocateShow',
    path: '/advocates/:advocate_id',
    component: loadPage('advocates/Show'),
    meta: {
        breadcrumb: {
            label: '{{ first_name }} {{ last_name }}',
            parent: 'advocates',
            vuex: {
                getter: 'advocates/byId',
                param: 'advocate_id'
            }
        },
        requiresAdmin: true
    }
}, {
    name: 'advocateEdit',
    path: '/advocates/:advocate_id/edit',
    component: loadPage('advocates/Edit'),
    meta: {
        breadcrumb: {
            label: 'Editing {{ first_name }} {{ last_name }}',
            parent: 'advocates',
            vuex: {
                getter: 'advocates/byId',
                param: 'advocate_id'
            }
        },
        requiresAdmin: true
    }
},

// clientIndex
{
    name: 'clientIndex',
    path: '/clients',
    component: loadPage('Search'),
    meta: {
        breadcrumb: {
            label: 'Clients'
        }
    }
}, {
    name: 'clientShow',
    path: '/clients/:client_id',
    component: loadPage('clients/Show'),
    redirect: '/clients/:client_id/profile',
    meta: {
        breadcrumb: {
            label: '{{ first_name }} {{ last_name }}',
            parent: 'clientIndex',
            vuex: {
                getter: 'clients/ById',
                param: 'intake_id'
            }
        }
    },
    children: [
    // clientAbusers
    {
        name: 'clientAbuser',
        path: 'abuse',
        component: loadPage('clients/abuse/Index'),
        meta: {
            breadcrumb: {
                label: 'Abusers',
                parent: 'clientShow'
            }
        }
    },
    // clientProfile
    {
        name: 'clientProfile',
        path: 'profile',
        component: loadPage('clients/Profile'),
        meta: {
            breadcrumb: {
                label: '{{ client.first_name }} {{ client.last_name }}'
                // parent: 'clients',
            }
        }
    },
    // activities
    {
        name: 'activities',
        path: 'activities',
        component: loadPage('clients/activities/Index'),
        meta: {
            breadcrumb: {
                label: 'Activities',
                parent: 'ClientShow'
            }
        }
    }, {
        path: 'stays', component: loadPage('clients/incidents/shelter/Index'),
        children: [{ path: 'in', component: loadPage('clients/incidents/shelter/In') }, { path: ':stay_id/out', component: loadPage('clients/incidents/shelter/Out') }]
    },

    // clientOutcomes
    {
        name: 'clientOutcomes',
        path: 'outcomes',
        component: loadPage('clients/outcomes/Index'),
        meta: {
            breadcrumb: {
                label: 'Outcomes',
                parent: 'clientShow'
            }
        }
    },

    // dependents
    {
        name: 'dependents',
        path: 'dependents',
        component: loadPage('clients/dependents/Index'),
        meta: {
            breadcrumb: {
                label: 'Dependents',
                parent: 'ClientShow'
            }
        }
    },
    // incidents
    {
        name: 'incidents',
        path: 'incidents',
        component: loadPage('clients/incidents/Index'),
        meta: {
            breadcrumb: {
                label: 'Incidents'
                // parent: 'clientsShow',
            }
        }
    },

    // clientNotes
    {
        name: 'clientNotes',
        path: 'notes',
        component: loadPage('clients/notes/Index')
    }]
},

// clientEdit
{
    name: 'clientEdit',
    path: '/clients/:client_id/edit',
    component: loadPage('clients/Edit'),
    meta: {
        breadcrumb: {
            label: 'Editing {{ first_name }} {{ last_name }}',
            parent: 'clientShow',
            vuex: {
                getter: 'clients/byId',
                param: 'client_id'
            }
        }
    }
},

// abuserAdd
{
    name: 'abuserAdd',
    path: '/clients/:client_id/abuse/add',
    component: loadPage('clients/abuse/Add'),
    meta: {
        breadcrumb: {
            label: 'Add Abuser',
            parent: 'clientAbusers'
        }
    }
},

// activityAdd
{
    name: 'activityAdd',
    path: '/clients/:client_id/activities/add',
    component: loadPage('clients/activities/Add'),
    meta: {
        breadcrumb: {
            label: 'Add Activity',
            parent: 'activities'
        }
    }
},

// activityShow
{
    name: 'activityShow',
    path: '/clients/:client_id/activities/:activity_id',
    component: loadPage('clients/activities/Show'),
    meta: {
        breadcrumb: {
            label: '{{ service.name }}',
            parent: 'activities',
            vuex: {
                getter: 'clients/activities/byId',
                param: 'activity_id'
            }
        }
    }
},

// activityEdit
{
    name: 'activityEdit',
    path: '/clients/:client_id/activities/:activity_id/edit',
    component: loadPage('clients/activities/Edit'),
    meta: {
        breadcrumb: {
            label: 'Edit {{ service.name }}',
            parent: 'activityShow',
            vuex: {
                getter: 'clients/activities/byId',
                param: 'activity_id'
            }
        }
    }
},

// clientOutcomeAdd
{
    name: 'clientOutcomeAdd',
    path: '/clients/:client_id/outcomes/add',
    component: loadPage('clients/outcomes/Add'),
    meta: {
        breadcrumb: {
            label: 'Add Outcome',
            parent: 'clientOutcomes'
        }
    }
},

// clientOutcomeAdd
{
    name: 'clientOutcomeEdit',
    path: '/clients/:client_id/outcomes/:outcome_id/edit',
    component: loadPage('clients/outcomes/Edit'),
    meta: {
        breadcrumb: {
            label: 'Edit Outcome',
            parent: 'clientOutcomes'
        }
    }
},

// dependentAdd
{
    name: 'dependentAdd',
    path: '/clients/:client_id/dependents/add',
    component: loadPage('clients/dependents/Add'),
    meta: {
        breadcrumb: {
            label: 'Add Dependent',
            parent: 'dependentIndex'
        }
    }
},

// dependentIndex
{
    name: 'dependentIndex',
    path: '/dependents',
    component: loadPage('dependents/Index')
},

// dependentShow
{
    name: 'dependentShow',
    path: '/dependents/:dependent_id',
    component: loadPage('dependents/Show')
},

// dependentEdit
{
    name: 'dependentEdit',
    path: '/dependents/:dependent_id/edit',
    component: loadPage('dependents/Edit')
},

// incidentAdd
{
    name: 'incidentAdd',
    path: '/clients/:client_id/incidents/add',
    component: loadPage('clients/incidents/Add'),
    meta: {
        breadcrumb: {
            label: 'Add Incident',
            parent: 'incidents'
        }
    }
}, {
    name: 'incidentIndex',
    path: '/incidents',
    component: loadPage('incidents/Index')
},

// incidentShow
{
    name: 'incidentShow',
    path: '/incidents/:incident_id',
    component: loadPage('incidents/Show'),
    // children: [
    //     { path: 'stays', component: loadPage('clients/incidents/shelter/Index'),
    //         children: [
    //             { path: 'in', component: loadPage('clients/incidents/shelter/In') },
    //             { path: ':stay_id/out', component: loadPage('clients/incidents/shelter/Out') },
    //         ],
    //     },
    // ],
    meta: {
        breadcrumb: {
            label: '{{ type.name }}',
            parent: 'incidents',
            vuex: {
                getter: 'clients/incidents/byId',
                param: 'incident_id'
            }
        }
    }
},

// incidentShow
{
    name: 'clientIncidentShow',
    path: '/clients/:client_id/incidents/:incident_id',
    component: loadPage('clients/incidents/Show'),
    // children: [
    //     { path: 'stays', component: loadPage('clients/incidents/shelter/Index'),
    //         children: [
    //             { path: 'in', component: loadPage('clients/incidents/shelter/In') },
    //             { path: ':stay_id/out', component: loadPage('clients/incidents/shelter/Out') },
    //         ],
    //     },
    // ],
    meta: {
        breadcrumb: {
            label: '{{ type.name }}',
            parent: 'incidents',
            vuex: {
                getter: 'clients/incidents/byId',
                param: 'incident_id'
            }
        }
    }
}, {
    name: 'incidentEdit',
    path: '/incidents/:incident_id/edit',
    component: loadPage('incidents/Edit'),
    meta: {}
},

// clientPhonesAdd
{
    name: 'clientPhonesAdd',
    path: '/clients/:client_id/phones/add',
    component: loadPage('clients/phones/Add'),
    meta: {
        breadcrumb: {
            label: 'Add Phone Number',
            parent: 'clientShow'
        }
    }
},

// clientPhonesEdit
{
    name: 'clientPhonesEdit',
    path: '/clients/:client_id/phones/:phone_id/edit',
    component: loadPage('clients/phones/Edit'),
    meta: {
        breadcrumb: {
            label: 'Edit Phone Number',
            parent: 'clientShow'
        }
    }
},

// noteAdd
{
    name: 'noteAdd',
    path: '/clients/:client_id/notes/add',
    component: loadPage('clients/notes/Add')
},

// noteShow
{
    name: 'noteShow',
    path: '/clients/:client_id/notes/:note_id',
    component: loadPage('clients/notes/Show')
},

// noteEdit
{
    name: 'noteEdit',
    path: '/clients/:client_id/notes/:note_id/edit',
    component: loadPage('clients/notes/Edit')
},

// outcomes
{
    name: 'outcomeIndex',
    path: '/outcomes',
    component: loadPage('outcomes/Index'),
    meta: {
        breadcrumb: {
            label: 'Outcomes'
        },
        requiresAdmin: true
    }
}, {
    name: 'outcomeAdd',
    path: '/outcomes/add',
    component: loadPage('outcomes/Add'),
    meta: {
        breadcrumb: {
            label: 'Add Outcome',
            parent: 'outcomeIndex'
        },
        requiresAdmin: true
    }
}, {
    name: 'outcomeShow',
    path: '/clients/:client_id/outcomes/:outcome_id',
    component: loadPage('clients/outcomes/Show')
}, {
    name: 'outcomeEdit',
    path: '/outcomes/:id/edit',
    component: loadPage('outcomes/Edit'),
    meta: {
        breadcrumb: {
            label: 'Editing Outcome',
            parent: 'outcomeIndex',
            vuex: {
                getter: 'outcomes/byId',
                param: 'outcome_id'
            }
        },
        requiresAdmin: true }
},

// Reports
{
    path: '/reporting',
    children: [{
        name: 'reports',
        path: 'reports',
        component: loadPage('reporting/Index'),
        meta: {
            breadcrumb: {
                label: 'Reports'
            }
        }
    }, {
        name: 'profiles',
        path: 'profiles',
        component: loadPage('reporting/Profiles')
    }],
    name: 'reporting',
    component: loadPage('reporting/Container'),
    redirect: '/reporting/reports'
},
// reportAdd
{
    name: 'reportAdd',
    path: '/reporting/reports/add',
    component: loadPage('reporting/Add'),
    meta: {
        breadcrumb: {
            label: 'Add Report',
            parent: 'reports'
        }
    }
},
// reportShow
{
    name: 'reportShow',
    path: '/reporting/reports/:id',
    component: loadPage('reporting/Show'),
    meta: {
        breadcrumb: {
            label: '{ profile.label }',
            parent: 'reports'
        }
    }
}, {
    name: 'reportProfileShow',
    path: '/reporting/profiles/:id',
    component: loadPage('reporting/Show')
},

// Not found
{
    name: '404',
    path: '*',
    component: loadPage('404')
}];

var router = new __WEBPACK_IMPORTED_MODULE_0__vue__["a" /* VueRouter */]({
    linkActiveClass: 'active',
    mode: 'history',
    scrollBehavior: scrollBehavior,
    routes: routes
});

router.beforeEach(function (to, from, next) {
    // Todo: figure out how to not hard-code this
    if ($(window).width() <= 767) {
        var $body = $('body');
        if ($body.hasClass('sidebar-open')) {
            $body.removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
        }
    }

    // Clean up sticky messages
    __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].dispatch('messages/cleanSticky');

    if (to.matched.some(function (record) {
        return record.meta.requiresAdmin;
    })) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        var user = JSON.parse(localStorage.getItem('user'));

        if (!user.is_admin) {
            console.warn('User is not allowed to view this page.', to);
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].dispatch('messages/add', {
                type: 'danger',
                text: 'You are not allowed to view that page.',
                sticky: 1
            });
            next(from.fullPath);
        }
    }
    next();
});

/* harmony default export */ __webpack_exports__["a"] = (router);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(20)))

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/ExampleComponent.vue": [
		426,
		91
	],
	"./components/Grid.vue": [
		239,
		1
	],
	"./components/IssueReporter.vue": [
		427,
		94
	],
	"./components/ListingPage.vue": [
		428,
		90
	],
	"./components/Menu.vue": [
		225
	],
	"./components/Message.vue": [
		226
	],
	"./components/Messages.vue": [
		227
	],
	"./components/Pagination.vue": [
		423,
		89
	],
	"./components/PaginationInfo.vue": [
		424,
		88
	],
	"./components/RequiredAsterisk.vue": [
		397,
		93
	],
	"./components/TestWidget.vue": [
		425,
		87
	],
	"./components/_ComponentTemplate.vue": [
		429,
		86
	],
	"./components/buttons/AddButton.vue": [
		240,
		4
	],
	"./components/controls/CheckboxSlider.vue": [
		403,
		85
	],
	"./components/controls/Flatpickr.vue": [
		241,
		0
	],
	"./components/controls/Phone.vue": [
		405,
		84
	],
	"./components/controls/selects/Abusers.vue": [
		408,
		64
	],
	"./components/controls/selects/Advocates.vue": [
		400,
		63
	],
	"./components/controls/selects/Cities.vue": [
		401,
		62
	],
	"./components/controls/selects/Clients.vue": [
		414,
		61
	],
	"./components/controls/selects/Counties.vue": [
		411,
		60
	],
	"./components/controls/selects/Ethnicity.vue": [
		398,
		59
	],
	"./components/controls/selects/Funding.vue": [
		409,
		58
	],
	"./components/controls/selects/Genders.vue": [
		399,
		57
	],
	"./components/controls/selects/Outcomes.vue": [
		415,
		56
	],
	"./components/controls/selects/Selectize.vue": [
		230,
		3
	],
	"./components/controls/selects/Services.vue": [
		410,
		55
	],
	"./components/controls/selects/States.vue": [
		402,
		54
	],
	"./components/forms/AbuseRelationshipFormPartial.vue": [
		416,
		26
	],
	"./components/forms/AbuserFormPartial.vue": [
		406,
		32
	],
	"./components/forms/ClientFormPartial.vue": [
		417,
		25
	],
	"./components/forms/DependentFormPartial.vue": [
		412,
		29
	],
	"./components/forms/HouseholdFormPartial.vue": [
		418,
		66
	],
	"./components/forms/IncidentFormPartial.vue": [
		419,
		28
	],
	"./components/forms/PhoneFormPartial.vue": [
		413,
		40
	],
	"./components/forms/ServiceRequestFormPartial.vue": [
		420,
		22
	],
	"./components/links/Client.vue": [
		242,
		2
	],
	"./components/notes/List.vue": [
		404,
		83
	],
	"./components/reporting/DemographicListWidget.vue": [
		421,
		53
	],
	"./components/reporting/DemographicOptions.vue": [
		407,
		82
	],
	"./components/reporting/RangeWidget.vue": [
		422,
		81
	],
	"./pages/404.vue": [
		430,
		92
	],
	"./pages/Home.vue": [
		431,
		80
	],
	"./pages/Intake.vue": [
		432,
		5
	],
	"./pages/Search.vue": [
		433,
		33
	],
	"./pages/Test.vue": [
		434,
		65
	],
	"./pages/_ListingPage.template.vue": [
		435,
		79
	],
	"./pages/abusers/Edit.vue": [
		436,
		27
	],
	"./pages/abusers/Index.vue": [
		437,
		78
	],
	"./pages/abusers/Profile.vue": [
		438,
		47
	],
	"./pages/abusers/Show.vue": [
		439,
		46
	],
	"./pages/abusers/abuse/Index.vue": [
		440,
		45
	],
	"./pages/advocates/Add.vue": [
		441,
		24
	],
	"./pages/advocates/Edit.vue": [
		442,
		20
	],
	"./pages/advocates/Index.vue": [
		443,
		77
	],
	"./pages/advocates/Show.vue": [
		444,
		44
	],
	"./pages/clients/Edit.vue": [
		445,
		6
	],
	"./pages/clients/Index.vue": [
		446,
		76
	],
	"./pages/clients/Profile.vue": [
		447,
		52
	],
	"./pages/clients/Show.vue": [
		448,
		39
	],
	"./pages/clients/abuse/Add.vue": [
		449,
		9
	],
	"./pages/clients/abuse/Index.vue": [
		450,
		51
	],
	"./pages/clients/activities/Add.vue": [
		451,
		8
	],
	"./pages/clients/activities/Edit.vue": [
		452,
		7
	],
	"./pages/clients/activities/Index.vue": [
		453,
		42
	],
	"./pages/clients/activities/Show.vue": [
		454,
		35
	],
	"./pages/clients/dependents/Add.vue": [
		455,
		13
	],
	"./pages/clients/dependents/Index.vue": [
		456,
		50
	],
	"./pages/clients/incidents/Add.vue": [
		457,
		12
	],
	"./pages/clients/incidents/Index.vue": [
		458,
		49
	],
	"./pages/clients/notes/Add.vue": [
		459,
		16
	],
	"./pages/clients/notes/Edit.vue": [
		460,
		18
	],
	"./pages/clients/notes/Index.vue": [
		461,
		48
	],
	"./pages/clients/notes/Show.vue": [
		462,
		36
	],
	"./pages/clients/outcomes/Add.vue": [
		463,
		15
	],
	"./pages/clients/outcomes/Edit.vue": [
		464,
		14
	],
	"./pages/clients/outcomes/Index.vue": [
		465,
		41
	],
	"./pages/clients/outcomes/Show.vue": [
		466,
		38
	],
	"./pages/clients/phones/Add.vue": [
		467,
		19
	],
	"./pages/clients/phones/Edit.vue": [
		468,
		17
	],
	"./pages/dependents/Edit.vue": [
		469,
		11
	],
	"./pages/dependents/Index.vue": [
		470,
		75
	],
	"./pages/dependents/Show.vue": [
		471,
		37
	],
	"./pages/incidents/Edit.vue": [
		472,
		10
	],
	"./pages/incidents/Index.vue": [
		473,
		74
	],
	"./pages/incidents/Show.vue": [
		474,
		34
	],
	"./pages/intakes/Index.vue": [
		475,
		73
	],
	"./pages/intakes/Show.vue": [
		476,
		43
	],
	"./pages/outcomes/Add.vue": [
		477,
		23
	],
	"./pages/outcomes/Edit.vue": [
		478,
		21
	],
	"./pages/outcomes/Index.vue": [
		479,
		72
	],
	"./pages/reporting/Add--SAVE.vue": [
		480,
		31
	],
	"./pages/reporting/Add.vue": [
		481,
		30
	],
	"./pages/reporting/Container.vue": [
		482,
		71
	],
	"./pages/reporting/Index.vue": [
		483,
		70
	],
	"./pages/reporting/Profiles.vue": [
		484,
		69
	],
	"./pages/reporting/Show.vue": [
		485,
		68
	],
	"./pages/reporting/profiles/Show.vue": [
		486,
		67
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 374;
module.exports = webpackAsyncContext;

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "ul",
        { staticClass: "sidebar-menu" },
        [
          _c("router-link", { attrs: { tag: "li", to: "/intake" } }, [
            _c("a", { staticClass: "bg-green", attrs: { href: "/intake" } }, [
              _c("i", { staticClass: "fas fa-inbox-in fa-fw" }),
              _c("span", [
                _vm._v(" Start Intake "),
                _c("i", { staticClass: "fas fa-chevron-right" })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("router-link", { attrs: { tag: "li", to: "/clients" } }, [
            _c("a", { attrs: { href: "/search" } }, [
              _c("i", { staticClass: "fas fa-users fa-fw" }),
              _c("span", [_vm._v(" Clients")])
            ])
          ]),
          _vm._v(" "),
          _c("router-link", { attrs: { tag: "li", to: "/abusers" } }, [
            _c("a", { attrs: { href: "/abusers" } }, [
              _c("i", { staticClass: "fas fa-frown fa-fw" }),
              _c("span", [_vm._v(" Abusers")])
            ])
          ]),
          _vm._v(" "),
          _c("router-link", { attrs: { tag: "li", to: "/reporting" } }, [
            _c("a", { attrs: { href: "/reports" } }, [
              _c("i", { staticClass: "fas fa-chart-bar fa-fw" }),
              _c("span", [_vm._v(" Reports")])
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.authUser && _vm.authUser.is_admin
        ? [
            _c("h3", [_vm._v("Admin")]),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "sidebar-menu" },
              [
                _c("router-link", { attrs: { tag: "li", to: "/advocates" } }, [
                  _c("a", { attrs: { href: "/advocates" } }, [
                    _c("i", { staticClass: "fas fa-hands-helping fa-fw" }),
                    _c("span", [_vm._v(" Advocates")])
                  ])
                ]),
                _vm._v(" "),
                _c("router-link", { attrs: { tag: "li", to: "/outcomes" } }, [
                  _c("a", { attrs: { href: "/outcomes" } }, [
                    _c("i", { staticClass: "fas fa-smile-plus" }),
                    _c("span", [_vm._v(" Outcomes")])
                  ])
                ])
              ],
              1
            )
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-750c22d4", module.exports)
  }
}

/***/ }),
/* 376 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['message']
});

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "message alert", class: "alert-" + _vm.message.type },
    [_vm._m(0), _vm._v("\n    " + _vm._s(_vm.message.text) + "\n")]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "alert",
          "aria-label": "Close"
        }
      },
      [
        _c("span", { attrs: { "aria-hidden": "true" } }, [
          _c("i", { staticClass: "fa fa-times" })
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0d3bc0a0", module.exports)
  }
}

/***/ }),
/* 378 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Message_vue__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Message_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Message_vue__);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        Message: __WEBPACK_IMPORTED_MODULE_0__Message_vue___default.a
    },

    props: ['messages']
});

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "messages" },
    _vm._l(_vm.messages, function(message) {
      return _c("message", { key: message.id, attrs: { message: message } })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c43016fa", module.exports)
  }
}

/***/ }),
/* 380 */
/***/ (function(module, exports) {

exports.sync = function (store, router, options) {
  var moduleName = (options || {}).moduleName || 'route'

  store.registerModule(moduleName, {
    namespaced: true,
    state: cloneRoute(router.currentRoute),
    mutations: {
      'ROUTE_CHANGED': function ROUTE_CHANGED (state, transition) {
        store.state[moduleName] = cloneRoute(transition.to, transition.from)
      }
    }
  })

  var isTimeTraveling = false
  var currentPath

  // sync router on store change
  var storeUnwatch = store.watch(
    function (state) { return state[moduleName]; },
    function (route) {
      var fullPath = route.fullPath;
      if (fullPath === currentPath) {
        return
      }
      if (currentPath != null) {
        isTimeTraveling = true
        router.push(route)
      }
      currentPath = fullPath
    },
    { sync: true }
  )

  // sync store on router navigation
  var afterEachUnHook = router.afterEach(function (to, from) {
    if (isTimeTraveling) {
      isTimeTraveling = false
      return
    }
    currentPath = to.fullPath
    store.commit(moduleName + '/ROUTE_CHANGED', { to: to, from: from })
  })

  return function unsync () {
    // On unsync, remove router hook
    if (afterEachUnHook != null) {
      afterEachUnHook()
    }

    // On unsync, remove store watch
    if (storeUnwatch != null) {
      storeUnwatch()
    }

    // On unsync, unregister Module with store
    store.unregisterModule(moduleName)
  }
}

function cloneRoute (to, from) {
  var clone = {
    name: to.name,
    path: to.path,
    hash: to.hash,
    query: to.query,
    params: to.params,
    fullPath: to.fullPath,
    meta: to.meta
  }
  if (from) {
    clone.from = cloneRoute(from)
  }
  return Object.freeze(clone)
}



/***/ }),
/* 381 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return prettyDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return prettyTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prettyDatetime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);


/**
 * Output a pretty date
 *
 * @param  {String} datetime the string to convert
 * @return {String}
 */
var prettyDate = function prettyDate(datetime) {
  return __WEBPACK_IMPORTED_MODULE_0_moment___default()(datetime).format('MM/DD/YYYY');
};

/**
 * Output a pretty time
 *
 * @param datetime
 * @returns {string}
 */
var prettyTime = function prettyTime(datetime) {
  return __WEBPACK_IMPORTED_MODULE_0_moment___default()(datetime).format('hh:mm A');
};

/**
 * Output a pretty date and time
 *
 * @param datetime
 * @returns {string}
 */
var prettyDatetime = function prettyDatetime(datetime) {
  return prettyDate(datetime) + ' ' + prettyTime(datetime);
};

/***/ }),
/* 382 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return markdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_marked__);

/**
 * Truncates text if it exceeds the length of the limit
 *
 * @param text
 * @param limit
 * @return {String}
 */
var truncate = function truncate(text) {
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

    if (text.length > limit) {
        return text.substring(0, limit) + '...';
    }

    return text;
};

var markdown = function markdown(text) {
    return __WEBPACK_IMPORTED_MODULE_0_marked___default()(text, { sanitize: true });
};

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

;(function(root) {
'use strict';

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
  table: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  paragraph: /^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,
  text: /^[^\n]+/
};

block._label = /(?:\\[\[\]]|[^\[\]])+/;
block._title = /(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/;
block.def = edit(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = edit(block.item, 'gm')
  .replace(/bull/g, block.bullet)
  .getRegex();

block.list = edit(block.list)
  .replace(/bull/g, block.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b';

block.html = edit(block.html)
  .replace('comment', /<!--[\s\S]*?-->/)
  .replace('closed', /<(tag)[\s\S]+?<\/\1>/)
  .replace('closing', /<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/)
  .replace(/tag/g, block._tag)
  .getRegex();

block.paragraph = edit(block.paragraph)
  .replace('hr', block.hr)
  .replace('heading', block.heading)
  .replace('lheading', block.lheading)
  .replace('tag', '<' + block._tag)
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});

block.gfm.paragraph = edit(block.paragraph)
  .replace('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  .getRegex();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top) {
  src = src.replace(/^ +$/gm, '');
  var next,
      loose,
      cap,
      bull,
      b,
      item,
      space,
      i,
      tag,
      l,
      isordered;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];
      isordered = bull.length > 1;

      this.tokens.push({
        type: 'list_start',
        ordered: isordered,
        start: isordered ? +bull : ''
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    }

    // def
    if (top && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
      tag = cap[1].toLowerCase();
      if (!this.tokens.links[tag]) {
        this.tokens.links[tag] = {
          href: cap[2],
          title: cap[3]
        };
      }
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
};

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;

inline.autolink = edit(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex()

inline._inside = /(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = edit(inline.link)
  .replace('inside', inline._inside)
  .replace('href', inline._href)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('inside', inline._inside)
  .getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)
    .replace('email', inline._email)
    .getRegex(),
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: edit(inline.text)
    .replace(']|', '~]|')
    .replace('|', '|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&\'*+/=?^_`{\\|}~-]+@|')
    .getRegex()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text).replace('{2,}', '*').getRegex()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer();
  this.renderer.options = this.options;

  if (!this.links) {
    throw new Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = '',
      link,
      text,
      href,
      cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = escape(this.mangle(cap[1]));
        href = 'mailto:' + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      cap[0] = this.rules._backpedal.exec(cap[0])[0];
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = escape(cap[0]);
        href = 'mailto:' + text;
      } else {
        text = escape(cap[0]);
        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0]
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2].trim(), true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.text(escape(this.smartypants(cap[0])));
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href),
      title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = '',
      l = text.length,
      i = 0,
      ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered, start) {
  var type = ordered ? 'ol' : 'ul',
      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
  return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return text;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return text;
    }
  }
  if (this.options.baseUrl && !originIndependentUrl.test(href)) {
    href = resolveUrl(this.options.baseUrl, href);
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  if (this.options.baseUrl && !originIndependentUrl.test(href)) {
    href = resolveUrl(this.options.baseUrl, href);
  }
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * TextRenderer
 * returns only the textual part of the token
 */

function TextRenderer() {}

// no need for block level renderers

TextRenderer.prototype.strong =
TextRenderer.prototype.em =
TextRenderer.prototype.codespan =
TextRenderer.prototype.del =
TextRenderer.prototype.text = function (text) {
  return text;
}

TextRenderer.prototype.link =
TextRenderer.prototype.image = function(href, title, text) {
  return '' + text;
}

TextRenderer.prototype.br = function() {
  return '';
}

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer();
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options) {
  var parser = new Parser(options);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options);
  // use an InlineLexer with a TextRenderer to extract pure text
  this.inlineText = new InlineLexer(
    src.links,
    merge({}, this.options, {renderer: new TextRenderer()})
  );
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        unescape(this.inlineText.output(this.token.text)));
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = '',
          body = '',
          i,
          row,
          cell,
          j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      body = '';
      var ordered = this.token.ordered,
          start = this.token.start;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered, start);
    }
    case 'list_item_start': {
      body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function edit(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return {
    replace: function(name, val) {
      val = val.source || val;
      val = val.replace(/(^|[^\[])\^/g, '$1');
      regex = regex.replace(name, val);
      return this;
    },
    getRegex: function() {
      return new RegExp(regex, opt);
    }
  };
}

function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (/^[^:]+:\/*[^/]*$/.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = base.replace(/[^/]*$/, '');
    }
  }
  base = baseUrls[' ' + base];

  if (href.slice(0, 2) === '//') {
    return base.replace(/:[\s\S]*/, ':') + href;
  } else if (href.charAt(0) === '/') {
    return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
  } else {
    return base + href;
  }
}
var baseUrls = {};
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1,
      target,
      key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

/**
 * Marked
 */

function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight,
        tokens,
        pending,
        i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occurred:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer(),
  xhtml: false,
  baseUrl: null
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (true) {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  root.marked = marked;
}
})(this || (typeof window !== 'undefined' ? window : global));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ }),
/* 384 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (number) {
    var number2 = ("" + number).replace(/\D/g, '');
    var m = number2.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    var output = '';
    if (m[1] !== '') {
        output = '(' + m[1] + ')';

        if (m[2] !== '') {
            output += ' ' + m[2];

            if (m[3] !== '') {
                output += '-' + m[3];
            }
        }
    }
    return output;
});

/***/ }),
/* 385 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return height; });
/**
 * Truncates text if it exceeds the length of the limit
 *
 * @param inches
 * @return {String}
 */
var height = function height(inches) {
    var output = Math.floor(inches / 12) + "'";

    if (inches % 12 > 0) {
        output += ' ' + inches % 12 + '"';
    }

    return output;
};

/***/ }),
/* 386 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(26);



/* harmony default export */ __webpack_exports__["a"] = ({
    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('auth', ['authUser']))
});

/***/ }),
/* 387 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(26);



/* harmony default export */ __webpack_exports__["a"] = ({
    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('messages', {
        addMessage: 'add',
        removeMessage: 'remove'
    }))
});

/***/ }),
/* 388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repository__ = __webpack_require__(228);


/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__repository__["a" /* default */]);

/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = install;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin__ = __webpack_require__(390);


function install(Vue) {
    console.log('Repository.install');

    Vue.mixin(__WEBPACK_IMPORTED_MODULE_0__mixin__["a" /* default */]);

    Object.defineProperty(Vue.prototype, '$repo', {
        get: function get() {
            return this._repoRoot && this._repoRoot._repo;
        }
    });

    console.log('Vue.prototype', Vue.prototype);
}

/***/ }),
/* 390 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__repository__ = __webpack_require__(228);





/* harmony default export */ __webpack_exports__["a"] = ({
    beforeCreate: function beforeCreate() {
        var _this = this;

        // console.log('mixin this (start)', this)
        // console.log('options (start)', this.$options)
        var options = this.$options;

        if (Object(__WEBPACK_IMPORTED_MODULE_2__common__["f" /* defined */])(options.repository)) {
            this._repoRoot = this;
            this._repo = options.repository;
        } else {
            this._repoRoot = this.$parent && this.$parent._repoRoot || this;
        }

        // console.log('repoRoot', (this.$parent && this.$parent._repoRoot) ? 'parent': 'this')

        // model injection
        if (options.models) {
            console.log('options', this.$options);
            this.$models = typeof options.models === 'function' ? options.models() : options.models;

            if (!options.computed) options.computed = {};

            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.$models).forEach(function (k) {
                console.log('key', k);
                var type = _this.$models[k].model ? _this.$models[k].model : k;
                console.log('type', type);
                // Todo: figure out how to do this without relying on vue-router
                if (_this.$models[k].param) {
                    var param = _this.$models[k].param;
                    console.log('param', param);

                    if (Object(__WEBPACK_IMPORTED_MODULE_2__common__["i" /* has */])(_this.$route.params, param)) {
                        console.log('route param exists');
                        var id = _this.$route.params[param];
                        _this.$repo.fetchModel(type, id);
                        options.computed[k] = function () {
                            return _this.$repo.models[k] && _this.$repo.models[k][id] || undefined;
                        };
                    }
                }
                console.log('type option computed', options.computed);
            });
            console.log('options', Object(__WEBPACK_IMPORTED_MODULE_2__common__["j" /* jsonClone */])(this.$options.computed));
            console.log('mixin this', this);
        }

        // console.log('checking this (right before adding $repo)', this)

        // Object.defineProperty(Vue.prototype, '$repo', {
        //     get () { return this._repoRoot._repo }
        // })
        // if (options.)
        // Todo: should this be left in?
        // else if (options.parent && options.parent.$models) {
        //     this.$models = options.parent.$models
        // }
    }
});

/***/ }),
/* 391 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[243]);