webpackJsonp([19,40,84,93],{

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

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(538)
/* template */
var __vue_template__ = __webpack_require__(539)
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
Component.options.__file = "resources/assets/js/components/controls/Phone.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-084ebfe8", Component.options)
  } else {
    hotAPI.reload("data-v-084ebfe8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(553)
/* template */
var __vue_template__ = __webpack_require__(554)
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
Component.options.__file = "resources/assets/js/components/forms/PhoneFormPartial.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8d0a39b4", Component.options)
  } else {
    hotAPI.reload("data-v-8d0a39b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(687)
/* template */
var __vue_template__ = __webpack_require__(688)
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
Component.options.__file = "resources/assets/js/pages/clients/phones/Add.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76f31c7b", Component.options)
  } else {
    hotAPI.reload("data-v-76f31c7b", Component.options)
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

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filters_capitalize__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_Model__ = __webpack_require__(60);








var ModelMixin = function ModelMixin(_ref) {
    var _mapGetters, _watch, _extends3;

    var name = _ref.name,
        storeName = _ref.storeName,
        _ref$model = _ref.model,
        model = _ref$model === undefined ? __WEBPACK_IMPORTED_MODULE_6__models_Model__["a" /* default */] : _ref$model;

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ModelMixin);

    this.modelMixinOptions = {
        name: name,
        storeName: storeName,
        model: model
    };

    var that = this;

    this.data = function () {
        var _ref2;

        return _ref2 = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref2, that.modelMixinOptions.name, new that.modelMixinOptions.model()), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref2, 'params', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()({}, that.modelMixinOptions.name + '_id', null)), _ref2;
    };

    this.computed = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapGetters */])(storeName, (_mapGetters = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_mapGetters, name + 'ById', 'byId'), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_mapGetters, 'route' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name), 'byRoute'), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_mapGetters, 'fetching' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name), 'fetching'), _mapGetters)), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()({}, name + 'Data', function undefined() {
        var fetching = this['fetching' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name)]; // This is a hack to force this to re-render when fetch completes
        return this['route' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name)];
    }));

    this.created = function () {
        this['set' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name) + 'Id']();
    };

    this.watch = (_watch = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_watch, name + 'Data', function undefined() {
        // this.log(`${name}Data`, this[`${name}Data`])
        // Reset the model to prevent lingering data
        this['reset' + that.modelMixinOptions.name]();
        // Assign the raw data to the model
        if (this[that.modelMixinOptions.name + 'Data']) {
            this['' + that.modelMixinOptions.name].assign(this[that.modelMixinOptions.name + 'Data']);
        }
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_watch, 'this.$route.params.' + name + '_id', function undefined() {
        this['set' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name) + 'Id']();
    }), _watch);

    this.methods = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(storeName, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()({}, 'fetch' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name), 'fetch')), (_extends3 = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, 'set' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name) + 'Id', function undefined(id) {
        if (id) {
            id = Number(id);
        } else if (this.$route.params[name + '_id']) {
            id = Number(this.$route.params[name + '_id']);
        } else {
            id = null;
        }
        // this.log(`set${capitalize(name)}Id`, id)

        Vue.set(this.params, name + '_id', id);
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, name + 'IdExists', function undefined() {
        return Object(__WEBPACK_IMPORTED_MODULE_4__common__["f" /* defined */])(this.params[name + '_id']) && this.params[name + '_id'] !== null;
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, 'fetchRoute' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name), function undefined() {
        var _this = this;

        var id = Number(this.$route.params[name + '_id']);
        if (!id) {
            return false;
        }
        return this['fetch' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name)]({ id: id, fetchId: 'id:' + id }).then(function (current) {
            _this['route' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name) + 'Fetched']();
            _this['current' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name) + 'Fetched']();
            return current;
        }).catch(function (error) {
            console.error(error);
            // this.addMessage({
            //     text: error,
            //     type: 'danger',
            // })
            // this.$router.push('/abusers')
        });
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, 'fetchCurrent' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name), function undefined() {
        return this['fetchRoute' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name)]();
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, 'current' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name) + 'Fetched', function undefined() {
        //
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, 'route' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name) + 'Fetched', function undefined() {
        //
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, name + 'Fetched', function undefined() {
        //
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, 'reset', function reset() {
        this.resetData();
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, 'resetData', function resetData() {
        this['reset' + name]();
        this.params[name + '_id'] = null;
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, 'reset' + name, function undefined() {
        this[name] = new model();
    }), _extends3));
};

/* harmony default export */ __webpack_exports__["a"] = (ModelMixin);

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(35);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Model__ = __webpack_require__(60);



/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        /**
         * Set the classes to show feedback for whether form controls
         * are required and/or valid.
         *
         * @param prop
         * @param model
         * @param $validation
         * @param log
         * @returns {boolean|string}
         */
        controlClasses: function controlClasses(prop) {
            var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'model';
            var $validation = arguments[2];
            var log = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;


            // Check if the log flag was sent as an earlier argument
            if (typeof model === 'boolean') {
                log = model;
                model = 'model';
            } else if (typeof $validation === 'boolean') {
                log = $validation;
                $validation = undefined;
            }

            if (log) console.log({ prop: prop, model: model });

            // If validation is not defined and the this.$v object is defined
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__common__["f" /* defined */])($validation) && this.$v) {
                $validation = this.$v;

                // Try accessing the validation using the model
                if (typeof model === 'string') {
                    if (log) console.log('Checking if we can use model in validation', model);
                    if (Object(__WEBPACK_IMPORTED_MODULE_0__common__["i" /* has */])($validation, model)) {
                        $validation = $validation[model];
                    }
                }
            }

            // Try accessing the validation using the prop
            $validation = _.get($validation, prop);

            if (log) console.log('$validation', $validation);

            // See if we can grab the model
            if (typeof model === 'string') {
                model = this[model];
            }

            // Otherwise, see if we can use the default one
            else if (!model) {
                    model = this.model;
                }

            if (log) console.log('[controlClasses]', 'model', model);

            // If we don't have a model, we can't process this
            if (!model || !model instanceof __WEBPACK_IMPORTED_MODULE_1__models_Model__["a" /* default */]) {
                console.warn('Unable to find model for checking control classes.', prop);
                return true;
            }

            if (log) console.log('changed', model.getChanges(prop), Object(__WEBPACK_IMPORTED_MODULE_0__common__["f" /* defined */])(model.getChanges(prop)));

            var check = false,
                valid = true,
                required = false,
                value = _.get(model, prop),
                changed = Object(__WEBPACK_IMPORTED_MODULE_0__common__["f" /* defined */])(model.getChanges(prop)),
                empty = !Object(__WEBPACK_IMPORTED_MODULE_0__common__["f" /* defined */])(value) || value === null || !((typeof value === 'string' || typeof value === 'number') && value !== '') || prop === 'id' && !value;

            if (log) console.log('empty', value, !Object(__WEBPACK_IMPORTED_MODULE_0__common__["f" /* defined */])(value), value === null, typeof value === 'string', typeof value === 'number', value !== '', !((typeof value === 'string' || typeof value === 'number') && value !== ''));

            // Validation is defined
            if (Object(__WEBPACK_IMPORTED_MODULE_0__common__["f" /* defined */])($validation)) {

                if (log) console.log('validation is defined');

                if (log) console.log('required', Object(__WEBPACK_IMPORTED_MODULE_0__common__["f" /* defined */])($validation.required), $validation.required);
                // Check if the field is required
                if (Object(__WEBPACK_IMPORTED_MODULE_0__common__["f" /* defined */])($validation.required) || Object(__WEBPACK_IMPORTED_MODULE_0__common__["f" /* defined */])($validation.requiredIf)) {
                    // check = true
                    required = true;
                }

                // Valid if validation passes
                valid = !$validation.$invalid;
            }

            if (log) console.log({ check: check, valid: valid, value: value, changed: changed, required: required, empty: empty });

            if (required) {
                check = true;

                if (empty) {
                    if (log) console.log('empty and required = invalid');
                    valid = false;
                }
            } else {
                check = changed;
            }

            if (model.exists && !changed && (!required || valid)) {
                if (log) console.log('Model exists and prop has not changed.');
                return '';
            }

            if (log) console.log('final', { check: check, valid: valid });

            if (!check) {
                return '';
            }

            return {
                'has-warning': !valid,
                'has-success': valid
            };
        },
        feedbackClasses: function feedbackClasses(prop) {
            var $validation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
            var model = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'model';
            var log = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;


            if (typeof $validation === 'boolean') {
                log = $validation;
                $validation = undefined;
            }

            if (log) console.log('prop', prop);

            if (typeof model === 'String') {
                model = this[model];
            } else if (!model) {
                model = this.model;
            }

            if (!model) {
                return true;
            }

            if (log) console.log('$validation', $validation);
            if (typeof $validation === 'string' && this.$v) {
                var $vname = $validation;
                $validation = Object(__WEBPACK_IMPORTED_MODULE_0__common__["d" /* dataGet */])(this.$v, $vname);

                if (!Object(__WEBPACK_IMPORTED_MODULE_0__common__["f" /* defined */])($validation)) {
                    $validation = Object(__WEBPACK_IMPORTED_MODULE_0__common__["d" /* dataGet */])(this.$v.model, $vname);
                }

                if (!Object(__WEBPACK_IMPORTED_MODULE_0__common__["f" /* defined */])($validation)) {
                    console.warn('Validation for ' + $vname + ' is not defined');
                }
            }

            if (log) console.log('$validation', $validation);

            var check = false,
                valid = false,
                value = _.get(model, prop),
                changed = Object(__WEBPACK_IMPORTED_MODULE_0__common__["f" /* defined */])(Object(__WEBPACK_IMPORTED_MODULE_0__common__["d" /* dataGet */])(model.changed, prop)),
                required = false,
                empty = _.isUndefined(value) || (typeof value === 'string' || typeof value === 'number') && value !== '';
            // This clause needs to be separate from the next check
            // because of the case where validation may be defined but
            // not required. We still want it to show up as valid.

            // Validation is defined
            if (Object(__WEBPACK_IMPORTED_MODULE_0__common__["f" /* defined */])($validation)) {

                if (log) console.log('validation is defined');

                // Valid if validation passes
                valid = !$validation.$invalid;

                if (log) console.log('required', Object(__WEBPACK_IMPORTED_MODULE_0__common__["f" /* defined */])($validation.required), $validation.required);
                // Check if the field is required
                if (Object(__WEBPACK_IMPORTED_MODULE_0__common__["f" /* defined */])($validation.required)) {
                    required = true;
                }
            }

            if (log) console.log({ check: check, valid: valid, value: value, changed: changed, required: required, empty: empty });

            if (required) {
                check = true;

                if (empty) {
                    valid = false;
                }
            }

            if (log) console.log('final', { check: check, valid: valid });

            if (!check) {
                return '';
            }

            return {
                'has-warning': !valid,
                'has-success': valid
            };
        }
    }
});

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Capitalizes a text string.
 * Example: capitalize this => Capitalize This
 * 
 * @param  {String} str the string to convert
 * @return {String}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
});

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

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Client__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ModelMixin__ = __webpack_require__(488);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_2__ModelMixin__["a" /* default */]({
    name: 'client',
    storeName: 'clients',
    model: __WEBPACK_IMPORTED_MODULE_1__models_Client__["a" /* default */]
})));

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

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultPhone */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model__ = __webpack_require__(60);






var defaultPhone = function defaultPhone() {
    return {
        client_id: null,
        number: '',
        ext: '',
        type: 'Mobile',
        primary: true,
        safe: false
    };
};

var Phone = function (_Model) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Phone, _Model);

    function Phone() {
        var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Phone);

        return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Phone.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Phone)).call(this, defaultPhone(), attributes));
    }

    return Phone;
}(__WEBPACK_IMPORTED_MODULE_4__Model__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Phone);

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_mask__ = __webpack_require__(236);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    name: 'phone-input',

    directives: {
        VueMaskDirective: __WEBPACK_IMPORTED_MODULE_0_v_mask__["a" /* VueMaskDirective */]
    },

    props: ['id', 'value'],

    data: function data() {
        return {
            localValue: null,
            previousValue: ''
        };
    },
    activated: function activated() {
        this.localValue = null;
    },


    watch: {
        value: function value() {
            if (this.localValue === null) {
                this.localValue = this.value;
            }
        }
    },

    methods: {
        select: function select(value) {
            var unmasked = value.replace(/\D+/g, '');
            this.$emit('input', unmasked);
        }
    }
});

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("input", {
    directives: [
      {
        name: "model",
        rawName: "v-model",
        value: _vm.localValue,
        expression: "localValue"
      },
      {
        name: "mask",
        rawName: "v-mask",
        value: "(###) ###-####",
        expression: "'(###) ###-####'"
      }
    ],
    ref: "phone",
    attrs: { type: "text", id: _vm.id, placeholder: "(319) 555-5555" },
    domProps: { value: _vm.localValue },
    on: {
      input: [
        function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.localValue = $event.target.value
        },
        function($event) {
          return _vm.select($event.target.value)
        }
      ]
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-084ebfe8", module.exports)
  }
}

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_controls_Phone__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_controls_Phone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_controls_Phone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Phone__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_validationClasses__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RequiredAsterisk__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RequiredAsterisk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__RequiredAsterisk__);

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

    name: 'phone-form-partial',

    components: {
        PhoneInput: __WEBPACK_IMPORTED_MODULE_2__components_controls_Phone___default.a,
        RequiredAsterisk: __WEBPACK_IMPORTED_MODULE_5__RequiredAsterisk___default.a
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_4__mixins_validationClasses__["a" /* default */]],

    props: ['value', '$v'],

    data: function data() {
        return {
            model: new __WEBPACK_IMPORTED_MODULE_3__models_Phone__["a" /* default */]()
        };
    },


    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('phoneTypes', {
        phoneTypes: 'all'
    })),

    // Watchers
    watch: {
        model: function model() {
            if (this.model && this.model.isDirty()) {
                this.$emit('input', this.model);
            }
        },
        value: function value(_value) {
            this.model = _value;
        }
    }
});

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "form-group", class: _vm.controlClasses("number") },
      [
        _c(
          "label",
          { staticClass: "control-label" },
          [_vm._v("Number"), _c("required-asterisk")],
          1
        ),
        _vm._v(" "),
        _c("phone-input", {
          staticClass: "form-control",
          model: {
            value: _vm.model.number,
            callback: function($$v) {
              _vm.$set(_vm.model, "number", $$v)
            },
            expression: "model.number"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "form-group", class: _vm.controlClasses("ext") }, [
      _c("label", { staticClass: "control-label" }, [_vm._v("Ext.")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.model.ext,
            expression: "model.ext"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", id: "ext" },
        domProps: { value: _vm.model.ext },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.model, "ext", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "form-group", class: _vm.controlClasses("type") },
      [
        _c("label", { staticClass: "control-label" }, [_vm._v("Type")]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.model.type,
                expression: "model.type"
              }
            ],
            staticClass: "form-control",
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.$set(
                  _vm.model,
                  "type",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              }
            }
          },
          _vm._l(_vm.phoneTypes, function(type) {
            return _c("option", [_vm._v(_vm._s(type))])
          }),
          0
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "checkbox", class: _vm.controlClasses("primary") },
      [
        _c("label", [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.model.primary,
                expression: "model.primary"
              }
            ],
            attrs: { type: "checkbox", name: "primary_phone" },
            domProps: {
              checked: Array.isArray(_vm.model.primary)
                ? _vm._i(_vm.model.primary, null) > -1
                : _vm.model.primary
            },
            on: {
              change: function($event) {
                var $$a = _vm.model.primary,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && _vm.$set(_vm.model, "primary", $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      _vm.$set(
                        _vm.model,
                        "primary",
                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                      )
                  }
                } else {
                  _vm.$set(_vm.model, "primary", $$c)
                }
              }
            }
          }),
          _vm._v(" Primary\n        ")
        ]),
        _vm._v(" "),
        _c("small", { staticClass: "help-block" }, [
          _vm._v(
            "Making this the primary phone number will unset any other phone number as the primary number"
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "checkbox", class: _vm.controlClasses("safe") }, [
      _c("label", [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.model.safe,
              expression: "model.safe"
            }
          ],
          attrs: { type: "checkbox" },
          domProps: {
            checked: Array.isArray(_vm.model.safe)
              ? _vm._i(_vm.model.safe, null) > -1
              : _vm.model.safe
          },
          on: {
            change: function($event) {
              var $$a = _vm.model.safe,
                $$el = $event.target,
                $$c = $$el.checked ? true : false
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v)
                if ($$el.checked) {
                  $$i < 0 && _vm.$set(_vm.model, "safe", $$a.concat([$$v]))
                } else {
                  $$i > -1 &&
                    _vm.$set(
                      _vm.model,
                      "safe",
                      $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                    )
                }
              } else {
                _vm.$set(_vm.model, "safe", $$c)
              }
            }
          }
        }),
        _vm._v(" Safe?\n        ")
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
    require("vue-hot-reload-api")      .rerender("data-v-8d0a39b4", module.exports)
  }
}

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_forms_PhoneFormPartial__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_forms_PhoneFormPartial___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_forms_PhoneFormPartial__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_RequiredAsterisk__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_RequiredAsterisk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_RequiredAsterisk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_initClient__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mixins_validationClasses__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_Phone__ = __webpack_require__(537);

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

    name: 'add-phone',

    components: {
        PhoneFormPartial: __WEBPACK_IMPORTED_MODULE_4__components_forms_PhoneFormPartial___default.a,
        RequiredAsterisk: __WEBPACK_IMPORTED_MODULE_5__components_RequiredAsterisk___default.a
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_6__mixins_initClient__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__mixins_validationClasses__["a" /* default */]],

    data: function data() {
        return {
            phone: new __WEBPACK_IMPORTED_MODULE_8__models_Phone__["a" /* default */]()
        };
    },


    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])('phoneTypes', {
        phoneTypes: 'all'
    })),

    validations: {
        phone: {
            number: {
                minLength: Object(__WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["minLength"])(10),
                numeric: __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["numeric"],
                required: __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["required"]
            },
            ext: {
                numeric: __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["numeric"]
            },
            type: {
                required: __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["required"]
            }
        }
    },

    // Hooks
    created: function created() {
        this.init();
    },


    // beforeRouteUpdate(to, from, next) {
    //     this.init()
    //     next()
    // },

    // beforeRouteLeave(to, from, next) {
    //     console.log(this.$options.name, 'Before route leave')
    //     this.reset()
    //     next()
    // },

    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])('phones', ['create']), {
        init: function init() {
            var _this = this;

            // console.log(this.$options.name, 'init', this.phone)
            this.fetchCurrentClient();
            this.$nextTick(function () {
                _this.phone.assign({ client_id: _this.$route.params.client_id });
            });
        },
        process: function process() {
            var _this2 = this;

            // If the form is valid
            if (!this.$v.$invalid) {
                var config = {
                    data: this.phone.getAttributes()
                };

                this.create(config).then(function (created) {
                    _this2.addMessage('Added phone number for ' + _this2.client.full_name);
                    _this2.fetchClient({ id: _this2.client.id });
                    _this2.$router.push('/clients/' + _this2.client.id + '/profile');
                }).catch(function (error) {
                    if (Object(__WEBPACK_IMPORTED_MODULE_3__common__["f" /* defined */])(error.body) && Object(__WEBPACK_IMPORTED_MODULE_3__common__["f" /* defined */])(error.body.message)) {
                        _this2.addMessage({
                            text: error.body.message,
                            type: 'danger'
                        });
                    }
                });
            }
            // Otherwise, scroll to the top and show an error message.
            else {
                    window.scrollTo(0, 0);
                    this.addMessage({
                        text: 'The form contains errors. Please ensure that all fields are filled out correctly and try your submission again.',
                        type: 'danger',
                        sticky: 1
                    });
                }
        },
        reset: function reset() {
            this.resetData();
            this.$v.$reset();
        },
        resetData: function resetData() {
            this.phone = new __WEBPACK_IMPORTED_MODULE_8__models_Phone__["a" /* default */]();
        }
    })
});

/***/ }),

/***/ 688:
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
        _c("h1", [
          _vm._v("Add Phone Number"),
          _vm.client
            ? _c(
                "small",
                [
                  _vm._v(" for "),
                  _c("client-link", { attrs: { client: _vm.client } })
                ],
                1
              )
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "section" }, [
        _c(
          "form",
          {
            attrs: { role: "form" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.process($event)
              }
            }
          },
          [
            _c("phone-form-partial", {
              attrs: { $v: _vm.$v.phone },
              model: {
                value: _vm.phone,
                callback: function($$v) {
                  _vm.phone = $$v
                },
                expression: "phone"
              }
            }),
            _vm._v(" "),
            _vm.$v.$invalid
              ? _c("p", [
                  _c("span", { staticClass: "text-warning" }, [
                    _vm._v(
                      "* Please ensure all fields are filled out correctly to proceed."
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-success btn-lg",
                attrs: { type: "submit", disabled: _vm.$v.$invalid }
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
          ],
          1
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
    require("vue-hot-reload-api")      .rerender("data-v-76f31c7b", module.exports)
  }
}

/***/ })

});