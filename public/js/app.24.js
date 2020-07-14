webpackJsonp([24,93],{

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(494)
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
Component.options.__file = "resources/assets/js/components/RequiredAsterisk.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b84e1e8", Component.options)
  } else {
    hotAPI.reload("data-v-0b84e1e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(633)
/* template */
var __vue_template__ = __webpack_require__(634)
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
Component.options.__file = "resources/assets/js/pages/advocates/Add.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-092886e6", Component.options)
  } else {
    hotAPI.reload("data-v-092886e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regex = exports.ref = exports.len = exports.req = exports.withParams = undefined;

var _withParams = __webpack_require__(498);

var _withParams2 = _interopRequireDefault(_withParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.withParams = _withParams2.default;

// "required" core, used in almost every validator to allow empty values

var req = exports.req = function req(value) {
  if (Array.isArray(value)) return !!value.length;
  if (value === undefined || value === null || value === false) {
    return false;
  }

  if (value instanceof Date) {
    // invalid date won't pass
    return !isNaN(value.getTime());
  }

  if (typeof value === 'object') {
    for (var _ in value) {
      return true;
    }return false;
  }

  return !!String(value).length;
};

// get length in type-agnostic way
var len = exports.len = function len(value) {
  if (Array.isArray(value)) return value.length;
  if (typeof value === 'object') {
    return Object.keys(value).length;
  }
  return String(value).length;
};

// resolve referenced value
var ref = exports.ref = function ref(reference, vm, parentVm) {
  return typeof reference === 'function' ? reference.call(vm, parentVm) : parentVm[reference];
};

// regex based validator template
var regex = exports.regex = function regex(type, expr) {
  return (0, _withParams2.default)({ type: type }, function (value) {
    return !req(value) || expr.test(value);
  });
};

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [_vm._v("*")])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0b84e1e8", module.exports)
  }
}

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxValue = exports.minValue = exports.and = exports.or = exports.url = exports.sameAs = exports.requiredUnless = exports.requiredIf = exports.required = exports.minLength = exports.maxLength = exports.macAddress = exports.ipAddress = exports.email = exports.between = exports.numeric = exports.alphaNum = exports.alpha = undefined;

var _alpha = __webpack_require__(497);

var _alpha2 = _interopRequireDefault(_alpha);

var _alphaNum = __webpack_require__(499);

var _alphaNum2 = _interopRequireDefault(_alphaNum);

var _numeric = __webpack_require__(500);

var _numeric2 = _interopRequireDefault(_numeric);

var _between = __webpack_require__(501);

var _between2 = _interopRequireDefault(_between);

var _email = __webpack_require__(502);

var _email2 = _interopRequireDefault(_email);

var _ipAddress = __webpack_require__(503);

var _ipAddress2 = _interopRequireDefault(_ipAddress);

var _macAddress = __webpack_require__(504);

var _macAddress2 = _interopRequireDefault(_macAddress);

var _maxLength = __webpack_require__(505);

var _maxLength2 = _interopRequireDefault(_maxLength);

var _minLength = __webpack_require__(506);

var _minLength2 = _interopRequireDefault(_minLength);

var _required = __webpack_require__(507);

var _required2 = _interopRequireDefault(_required);

var _requiredIf = __webpack_require__(508);

var _requiredIf2 = _interopRequireDefault(_requiredIf);

var _requiredUnless = __webpack_require__(509);

var _requiredUnless2 = _interopRequireDefault(_requiredUnless);

var _sameAs = __webpack_require__(510);

var _sameAs2 = _interopRequireDefault(_sameAs);

var _url = __webpack_require__(511);

var _url2 = _interopRequireDefault(_url);

var _or = __webpack_require__(512);

var _or2 = _interopRequireDefault(_or);

var _and = __webpack_require__(513);

var _and2 = _interopRequireDefault(_and);

var _minValue = __webpack_require__(514);

var _minValue2 = _interopRequireDefault(_minValue);

var _maxValue = __webpack_require__(515);

var _maxValue2 = _interopRequireDefault(_maxValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.alpha = _alpha2.default;
exports.alphaNum = _alphaNum2.default;
exports.numeric = _numeric2.default;
exports.between = _between2.default;
exports.email = _email2.default;
exports.ipAddress = _ipAddress2.default;
exports.macAddress = _macAddress2.default;
exports.maxLength = _maxLength2.default;
exports.minLength = _minLength2.default;
exports.required = _required2.default;
exports.requiredIf = _requiredIf2.default;
exports.requiredUnless = _requiredUnless2.default;
exports.sameAs = _sameAs2.default;
exports.url = _url2.default;
exports.or = _or2.default;
exports.and = _and2.default;
exports.minValue = _minValue2.default;
exports.maxValue = _maxValue2.default;

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(487);

exports.default = (0, _common.regex)('alpha', /^[a-zA-Z]*$/);

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* istanbul ignore next */
var withParams =  false ? require('./withParamsBrowser').withParams : __webpack_require__(233).withParams;

exports.default = withParams;

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(487);

exports.default = (0, _common.regex)('alphaNum', /^[a-zA-Z0-9]*$/);

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(487);

exports.default = (0, _common.regex)('numeric', /^[0-9]*$/);

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(487);

exports.default = function (min, max) {
  return (0, _common.withParams)({ type: 'between', min: min, max: max }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +min <= +value && +max >= +value;
  });
};

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(487);

var emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;

exports.default = (0, _common.regex)('email', emailRegex);

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(487);

exports.default = (0, _common.withParams)({ type: 'ipAddress' }, function (value) {
  if (!(0, _common.req)(value)) {
    return true;
  }

  if (typeof value !== 'string') {
    return false;
  }

  var nibbles = value.split('.');
  return nibbles.length === 4 && nibbles.every(nibbleValid);
});


var nibbleValid = function nibbleValid(nibble) {
  if (nibble.length > 3 || nibble.length === 0) {
    return false;
  }

  if (nibble[0] === '0' && nibble !== '0') {
    return false;
  }

  if (!nibble.match(/^\d+$/)) {
    return false;
  }

  var numeric = +nibble | 0;
  return numeric >= 0 && numeric <= 255;
};

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(487);

exports.default = function () {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':';
  return (0, _common.withParams)({ type: 'macAddress' }, function (value) {
    if (!(0, _common.req)(value)) {
      return true;
    }

    if (typeof value !== 'string') {
      return false;
    }

    var parts = typeof separator === 'string' && separator !== '' ? value.split(separator) : value.length === 12 || value.length === 16 ? value.match(/.{2}/g) : null;

    return parts !== null && (parts.length === 6 || parts.length === 8) && parts.every(hexValid);
  });
};

var hexValid = function hexValid(hex) {
  return hex.toLowerCase().match(/^[0-9a-f]{2}$/);
};

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(487);

exports.default = function (length) {
  return (0, _common.withParams)({ type: 'maxLength', max: length }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) <= length;
  });
};

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(487);

exports.default = function (length) {
  return (0, _common.withParams)({ type: 'minLength', min: length }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) >= length;
  });
};

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(487);

exports.default = (0, _common.withParams)({ type: 'required' }, _common.req);

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(487);

exports.default = function (prop) {
  return (0, _common.withParams)({ type: 'requiredIf', prop: prop }, function (value, parentVm) {
    return (0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(487);

exports.default = function (prop) {
  return (0, _common.withParams)({ type: 'requiredUnless', prop: prop }, function (value, parentVm) {
    return !(0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(487);

exports.default = function (equalTo) {
  return (0, _common.withParams)({ type: 'sameAs', eq: equalTo }, function (value, parentVm) {
    return value === (0, _common.ref)(equalTo, this, parentVm);
  });
};

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(487);

var urlRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

exports.default = (0, _common.regex)('url', urlRegex);

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(487);

exports.default = function () {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({ type: 'or' }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid || fn.apply(_this, args);
    }, false);
  });
};

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(487);

exports.default = function () {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({ type: 'and' }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid && fn.apply(_this, args);
    }, true);
  });
};

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(487);

exports.default = function (min) {
  return (0, _common.withParams)({ type: 'minValue', min: min }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value >= +min;
  });
};

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(487);

exports.default = function (max) {
  return (0, _common.withParams)({ type: 'maxValue', max: max }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value <= +max;
  });
};

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DEFAULT_STATE */
/* unused harmony export DEFAULT_CITY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MOMENT_DATE_FORMAT; });
/* unused harmony export MOMENT_TIME_FORMAT */
/* unused harmony export MOMENT_DATETIME_FORMAT */
/* unused harmony export blankAbuser */
/* unused harmony export blankAbusiveRelationship */
/* unused harmony export blankAbuseRelationship */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return blankAdvocate; });
/* unused harmony export blankClientPersonal */
/* unused harmony export blankClient */
/* unused harmony export blankIntake */
/* unused harmony export blankPhone */
/* unused harmony export blankRelationship */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(7);



var DEFAULT_STATE = 'Iowa';
var DEFAULT_CITY = 'Iowa City';
var MOMENT_DATE_FORMAT = 'YYYY-MM-DD';
var MOMENT_TIME_FORMAT = 'HH:mm:ss';
var MOMENT_DATETIME_FORMAT = MOMENT_DATE_FORMAT + ' ' + MOMENT_TIME_FORMAT;

var blankAbuser = function blankAbuser() {
    return {
        id: null,
        intake_id: null,
        first_name: null,
        last_name: null,
        birth_date: null,
        gender: null,
        eye_color: null,
        hair_color: null,
        hair_length: null,
        height: null,
        weight: null,
        identifying_features: null,
        vehicle: null,
        relationship: null
    };
};

var blankAbusiveRelationship = function blankAbusiveRelationship() {
    return {
        id: null,
        intake_id: null,
        relationship: '',
        abuser: null,
        abuser_id: null
    };
};

var blankAbuseRelationship = function blankAbuseRelationship() {
    return {
        abuser_id: null,
        client_id: null,
        relationshipType: ''
    };
};

var blankAdvocate = function blankAdvocate() {
    return {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
    };
};

var blankClientPersonal = function blankClientPersonal() {
    return {
        first_name: '',
        middle_initial: '',
        last_name: '',
        last_four: '',
        birth_date: null,
        gender: '',
        phones: [],
        ethnicity_ids: []
    };
};

var blankClient = function blankClient() {
    var relationship = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


    // Need to pass in a flag that tells us that this client belongs to another household
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        id: null,
        intake_id: null
    }, blankClientPersonal(), {
        homeless: false,
        address: {
            street: '',
            apt: '',
            state: '',
            city: '',
            county: '',
            zip: ''
        },
        note: ''
    });
};

var blankIntake = function blankIntake() {
    var relationship = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return {
        id: null,
        date: Object(__WEBPACK_IMPORTED_MODULE_1__common__["h" /* formattedDatetime */])(MOMENT_DATE_FORMAT),
        advocate_id: null,
        referred_by_id: null,
        note: ''
    };
};

var blankPhone = function blankPhone() {

    return {
        number: '',
        type: 'Mobile',
        primary: true,
        safe: false
    };
};

var blankRelationship = function blankRelationship() {
    return {
        type: ''
    };
};

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__factory__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_RequiredAsterisk_vue__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_RequiredAsterisk_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_RequiredAsterisk_vue__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'advocate-add',

    components: {
        RequiredAsterisk: __WEBPACK_IMPORTED_MODULE_5__components_RequiredAsterisk_vue___default.a
    },

    data: function data() {
        return {
            model: Object(__WEBPACK_IMPORTED_MODULE_4__factory__["b" /* blankAdvocate */])()
        };
    },
    validations: function validations() {
        return {
            model: {
                first_name: {
                    alpha: __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["alpha"],
                    required: __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["required"]
                },
                last_name: {
                    required: __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["required"]
                },
                email: {
                    email: __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["email"],
                    required: __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["required"]
                },
                password: {
                    required: __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["required"]
                },
                password_confirmation: {
                    required: __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["required"],
                    sameAsPassword: Object(__WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["sameAs"])('password')
                }
            }
        };
    },


    // Hooks
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        this.reset();
        next();
    },


    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])('advocates', ['create']), {
        process: function process() {
            var _this = this;

            var data = {
                data: this.model
            };

            this.create(data).then(function (created) {
                _this.addMessage('Successfully added ' + created.first_name + ' ' + created.last_name + '.');
                _this.$router.push('/advocates');
            }).catch(function (error) {
                if (Object(__WEBPACK_IMPORTED_MODULE_3__common__["f" /* defined */])(error.body) && Object(__WEBPACK_IMPORTED_MODULE_3__common__["f" /* defined */])(error.body.message)) {
                    _this.addMessage({
                        text: error.body.message,
                        type: 'danger'
                    });
                }
            });
        },
        requiredValidationClasses: function requiredValidationClasses(field) {
            var $validation = Object(__WEBPACK_IMPORTED_MODULE_3__common__["d" /* dataGet */])(this.$v.model, field);
            if (Object(__WEBPACK_IMPORTED_MODULE_3__common__["f" /* defined */])($validation)) {
                return {
                    'has-success': !$validation.$invalid,
                    'has-warning': $validation.$invalid
                };
            }
        },
        reset: function reset() {
            this.resetData();
            this.$v.$reset();
        },
        resetData: function resetData() {
            this.model = Object(__WEBPACK_IMPORTED_MODULE_4__factory__["b" /* blankAdvocate */])();
        }
    })
});

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "overlay-background" }, [
    _c("div", { staticClass: "overlay" }, [
      _c("header", { staticClass: "overlay-header" }, [
        _c("div", { staticClass: "header-actions pull-right" }, [
          _c(
            "button",
            {
              staticClass: "close",
              attrs: { type: "button", "aria-label": "Close" },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.$router.back()
                }
              }
            },
            [
              _c("i", { staticClass: "fa fa-close" }),
              _vm._v(" "),
              _c("span", { staticClass: "hidden-xs" }, [_vm._v("Cancel")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("h1", [_vm._v("Add Advocate")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "section" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.process($event)
              }
            }
          },
          [
            _c(
              "div",
              {
                staticClass: "form-group",
                class: _vm.requiredValidationClasses("first_name")
              },
              [
                _c(
                  "label",
                  {
                    staticClass: "control-label",
                    attrs: { for: "first_name" }
                  },
                  [_vm._v("First Name "), _c("required-asterisk")],
                  1
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.model.first_name,
                      expression: "model.first_name",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "first_name",
                    name: "first_name",
                    placeholder: "First name"
                  },
                  domProps: { value: _vm.model.first_name },
                  on: {
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.model,
                          "first_name",
                          $event.target.value.trim()
                        )
                      },
                      function($event) {
                        return _vm.$v.model.first_name.$touch()
                      }
                    ],
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$v.model.first_name.$dirty
                  ? [
                      !_vm.$v.model.first_name.required
                        ? _c("small", { staticClass: "help-block" }, [
                            _vm._v("Field is required.")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.model.first_name.alpha
                        ? _c("small", { staticClass: "help-block" }, [
                            _vm._v("Only alpha characters are allowed.")
                          ])
                        : _vm._e()
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "form-group",
                class: _vm.requiredValidationClasses("last_name")
              },
              [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "last_name" } },
                  [_vm._v("Last Name "), _c("required-asterisk")],
                  1
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.model.last_name,
                      expression: "model.last_name",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "last_name",
                    name: "last_name",
                    placeholder: "Last name"
                  },
                  domProps: { value: _vm.model.last_name },
                  on: {
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.model,
                          "last_name",
                          $event.target.value.trim()
                        )
                      },
                      function($event) {
                        return _vm.$v.model.last_name.$touch()
                      }
                    ],
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$v.model.last_name.$dirty
                  ? [
                      !_vm.$v.model.last_name.required
                        ? _c("small", { staticClass: "help-block" }, [
                            _vm._v("Field is required.")
                          ])
                        : _vm._e()
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "form-group",
                class: _vm.requiredValidationClasses("email")
              },
              [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "email" } },
                  [_vm._v("Email "), _c("required-asterisk")],
                  1
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.model.email,
                      expression: "model.email",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "email",
                    name: "email",
                    placeholder: "Email"
                  },
                  domProps: { value: _vm.model.email },
                  on: {
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.model, "email", $event.target.value.trim())
                      },
                      function($event) {
                        return _vm.$v.model.email.$touch()
                      }
                    ],
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$v.model.email.$dirty
                  ? [
                      !_vm.$v.model.email.required
                        ? _c("small", { staticClass: "help-block" }, [
                            _vm._v("Field is required.")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.model.email.email
                        ? _c("small", { staticClass: "help-block" }, [
                            _vm._v("A valid email address is required.")
                          ])
                        : _vm._e()
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "form-group",
                class: _vm.requiredValidationClasses("password")
              },
              [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "password" } },
                  [_vm._v("Password "), _c("required-asterisk")],
                  1
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.model.password,
                      expression: "model.password"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "password",
                    id: "password",
                    name: "password",
                    placeholder: "Enter a password",
                    autocomplete: "new-password"
                  },
                  domProps: { value: _vm.model.password },
                  on: {
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.model, "password", $event.target.value)
                      },
                      function($event) {
                        return _vm.$v.model.password.$touch()
                      }
                    ]
                  }
                }),
                _vm._v(" "),
                _vm.$v.model.password.$dirty
                  ? [
                      !_vm.$v.model.password.required
                        ? _c("small", { staticClass: "help-block" }, [
                            _vm._v("Field is required.")
                          ])
                        : _vm._e()
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "form-group",
                class: _vm.requiredValidationClasses("password_confirmation")
              },
              [
                _c(
                  "label",
                  {
                    staticClass: "control-label",
                    attrs: { for: "password_confirmation" }
                  },
                  [_vm._v("Confirm Password "), _c("required-asterisk")],
                  1
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.model.password_confirmation,
                      expression: "model.password_confirmation"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "password",
                    id: "password_confirmation",
                    name: "password_confirmation",
                    placeholder: "Confirm the password",
                    autocomplete: "new-password"
                  },
                  domProps: { value: _vm.model.password_confirmation },
                  on: {
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.model,
                          "password_confirmation",
                          $event.target.value
                        )
                      },
                      function($event) {
                        return _vm.$v.model.password_confirmation.$touch()
                      }
                    ]
                  }
                }),
                _vm._v(" "),
                _vm.$v.model.password_confirmation.$dirty
                  ? [
                      !_vm.$v.model.password_confirmation.required
                        ? _c("small", { staticClass: "help-block" }, [
                            _vm._v("Field is required.")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.model.password_confirmation.sameAsPassword
                        ? _c("small", { staticClass: "help-block" }, [
                            _vm._v("The passwords you entered don't match.")
                          ])
                        : _vm._e()
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-lg btn-success",
                attrs: { type: "submit", disabled: _vm.$v.model.$invalid }
              },
              [_c("i", { staticClass: "fa fa-save" }), _vm._v(" Save")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-link",
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.$router.back()
                  }
                }
              },
              [_vm._v("Cancel")]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-092886e6", module.exports)
  }
}

/***/ })

});