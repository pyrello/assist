webpackJsonp([66,93],{

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

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(567)
/* template */
var __vue_template__ = __webpack_require__(568)
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
Component.options.__file = "resources/assets/js/components/forms/HouseholdFormPartial.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-208ded15", Component.options)
  } else {
    hotAPI.reload("data-v-208ded15", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_Household__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RequiredAsterisk__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RequiredAsterisk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__RequiredAsterisk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_validationClasses__ = __webpack_require__(492);
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

    name: 'household-form-partial',

    components: {
        RequiredAsterisk: __WEBPACK_IMPORTED_MODULE_1__RequiredAsterisk___default.a
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_validationClasses__["a" /* default */]],

    props: ['value', '$v'],

    data: function data() {
        return {
            model: new __WEBPACK_IMPORTED_MODULE_0__models_Household__["a" /* default */]()
        };
    },


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

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "form-group", class: _vm.controlClasses("size") },
      [
        _c(
          "label",
          { staticClass: "control-label" },
          [_vm._v("Size"), _c("required-asterisk")],
          1
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model.number",
              value: _vm.model.size,
              expression: "model.size",
              modifiers: { number: true }
            }
          ],
          staticClass: "form-control",
          attrs: { type: "number" },
          domProps: { value: _vm.model.size },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.model, "size", _vm._n($event.target.value))
            },
            blur: function($event) {
              return _vm.$forceUpdate()
            }
          }
        }),
        _vm._v(" "),
        _c("small", { staticClass: "help-block" }, [
          _vm._v("Including the client.")
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "form-group", class: _vm.controlClasses("annual_income") },
      [
        _c(
          "label",
          {
            staticClass: "control-label",
            attrs: { for: "household.annual_income" }
          },
          [_vm._v("Income")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "input-group" }, [
          _c("span", { staticClass: "input-group-addon" }, [_vm._v("$")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.model.annual_income,
                expression: "model.annual_income"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              id: "household.annual_income",
              "aria-label": "Amount (to the nearest dollar)"
            },
            domProps: { value: _vm.model.annual_income },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.model, "annual_income", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "input-group-addon" }, [_vm._v(".00")])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-208ded15", module.exports)
  }
}

/***/ })

});