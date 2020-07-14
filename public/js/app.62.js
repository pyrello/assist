webpackJsonp([62,3],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(490)
/* template */
var __vue_template__ = __webpack_require__(491)
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
Component.options.__file = "resources/assets/js/components/controls/selects/Selectize.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c600a5e", Component.options)
  } else {
    hotAPI.reload("data-v-5c600a5e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(526)
/* template */
var __vue_template__ = __webpack_require__(527)
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
Component.options.__file = "resources/assets/js/components/controls/selects/Cities.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-644a319a", Component.options)
  } else {
    hotAPI.reload("data-v-644a319a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(7);

//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    name: 'selectize',

    data: function data() {
        return {
            fetched: true,
            localConfig: this.defaultConfig(),
            updating: false,
            allCount: 0,
            allCached: '',
            previousValue: null
        };
    },


    props: {
        all: {
            type: Array | Object
        },

        clear: {
            type: Boolean,
            default: false
        },

        config: Object,

        disabled: {
            default: false,
            type: Boolean
        },

        id: String,

        multiple: {
            default: false,
            type: Boolean
        },

        labelField: {
            default: 'name',
            type: String
        },

        placeholder: {
            default: 'Select the item...',
            type: String
        },

        template: String,

        value: Array | String,

        identity: String,

        valueField: {
            default: 'value',
            type: String
        },

        valueType: {
            default: 'string',
            type: String
        }
    },

    computed: {
        selectize: function selectize() {
            return this.$el && this.$el.selectize || null;
        }
    },

    /**
     * this.init() needs to be run during the mounted hook
     * or there is no element to attach to.
     */
    mounted: function mounted() {
        //            this.allCached = JSON.stringify(this.all)
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.localConfig, this.config);
        this.init();
        //            this.previousValue = this.value
        //            console.log('previousValue', this.previousValue)
    },
    updated: function updated() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.localConfig, this.config);
        this.init();
    },
    destroyed: function destroyed() {
        this.$el.selectize.destroy();
    },


    watch: {
        all: function all() {
            var _this = this;

            // It is kind of amazing that I came up with a solution
            // to this issue, but it is a disgusting workaround
            // and it should be replaced with a better solution
            // Edit: It is fixed! There is a difference between how
            // vue.js treats bound attributes that are inline vs
            // defined in $data. Here's the code:
            //                const allCached = JSON.stringify(this.all)
            //                if (allCached !== this.allCached) {
            //                    console.log('all is changing', this.id)
            //                    this.allCached = allCached
            //                }

            this.updating = true;

            if (this.selectize) {
                this.selectize.disable();
                /**
                 * Instead of this:
                 * selectize.clearOptions()
                 * It is necessary to call the underlying functions that get
                 * called by that function because there is a not a silent
                 * option that can be passed through to the eventual
                 * selectize.clear(). This issue was really annoying to debug :(
                 *
                 * Hopefully, the selectize library eventually updates to include this
                 * PR: https://github.com/selectize/selectize.js/pull/894
                 */
                this.clearOptions();

                this.selectize.load(function (callback) {
                    if (_this.all.length > 0) {
                        _this.selectize.enable();
                        callback(_this.all);
                        //                                console.log('re-loading all', this.id, this.value)
                        /**
                         * Second parameter of setValue, silent, should be set to
                         * true, to prevent triggering the onChange event
                         */
                        _this.selectize.setValue(_this.value, true);
                    } else {
                        callback();
                    }
                    _this.updating = false;
                });
            }
        },
        disabled: function disabled(value) {
            if (this.selectize) {
                if (value) {
                    this.selectize.disable();
                } else {
                    this.selectize.enable();
                }
            }
        },
        clear: function clear(value) {
            if (value) {
                this.clearOptions();
            }
            this.$emit('clear');
        },
        value: function value(_value) {
            // Don't update unless the value has changed
            //                if (value !== this.previousValue) {
            this.previousValue = _value;

            if (!_value) {
                this.clearOptions();
            }

            if (this.selectize) {
                // this.selectize.load(callback => callback)
                /**
                 * Second parameter of setValue, silent, should be set to
                 * true, to prevent triggering the onChange event
                 */
                this.selectize.setValue(_value, true);
            }
            //                }
        }
    },

    methods: {
        defaultConfig: function defaultConfig() {
            var _this2 = this;

            var that = this;

            return {
                // plugins: {
                //     remove_button: {
                //         mode: 'single',
                //     },
                // },
                valueField: this.valueField,
                labelField: this.labelField,
                searchField: this.labelField,
                onInitialize: function onInitialize() {
                    _this2.setValue();
                },
                onChange: function onChange(value) {
                    _this2.select(value);
                },
                render: {
                    option: function option(item, escape) {
                        return '<div class="option">' + escape(that.itemLabel(item)) + '</div>';
                    },
                    item: function item(_item, escape) {
                        return '<div class="item">' + escape(that.itemLabel(_item)) + '</div>';
                    }
                }
            };
        },
        clearOptions: function clearOptions() {
            if (this.selectize) {
                this.selectize.loadedSearches = {};
                this.selectize.userOptions = {};
                this.selectize.renderCache = {};
                this.selectize.options = this.selectize.sifter.items = {};
                this.selectize.lastQuery = null;
                this.selectize.trigger('option_clear');
                this.selectize.clear(true);
            }
        },
        init: function init() {
            this.selectEl = this.$refs.select;
            $(this.$el).selectize(this.localConfig);
            this.setValue();
        },
        itemLabel: function itemLabel(item) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1__common__["f" /* defined */])(this.template)) {
                if (item.first_name && !Object(__WEBPACK_IMPORTED_MODULE_1__common__["f" /* defined */])(item.first_name) && item.last_name && !Object(__WEBPACK_IMPORTED_MODULE_1__common__["f" /* defined */])(item.last_name)) {
                    console.warn('first name and last name are undefined', item);
                }
                return Object(__WEBPACK_IMPORTED_MODULE_1__common__["k" /* mustacheTemplate */])(this.template, item);
            }

            if (typeof item === 'string') {
                return item;
            }

            return item[this.labelField];
        },
        itemValue: function itemValue(item) {
            if (typeof item === 'string') {
                return item;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_1__common__["i" /* has */])(item, this.valueField)) {
                return item[this.valueField];
            }

            return item.id;
        },
        select: function select(value) {
            if (this.valueType === 'number' && value !== 0 && value !== '0') {
                if (Array.isArray(value)) {
                    value = value.map(function (item) {
                        return Number(item);
                    });
                } else {
                    value = Number(value);
                }
            }
            this.$emit('input', value);
        },
        setValue: function setValue() {
            this.$el.selectize.setValue(this.value, true);
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(20)))

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "select",
    {
      ref: "select",
      staticClass: "form-control",
      attrs: {
        id: _vm.id,
        placeholder: _vm.placeholder,
        multiple: _vm.multiple
      },
      domProps: { value: _vm.value },
      on: {
        "update:value": function($event) {
          _vm.value = $event
        }
      }
    },
    [
      _vm._t(
        "default",
        _vm._l(_vm.all, function(item) {
          return _c("option", {
            domProps: {
              value: _vm.itemValue(item),
              textContent: _vm._s(_vm.itemLabel(item))
            }
          })
        })
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-5c600a5e", module.exports)
  }
}

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Selectize_vue__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Selectize_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Selectize_vue__);

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

    components: {
        Selectize: __WEBPACK_IMPORTED_MODULE_2__Selectize_vue___default.a
    },

    props: ['id', 'stateName', 'value', 'disabled'],

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('locations', ['cities']), {
        citiesByState: function citiesByState() {
            return this.cities(this.stateName);
        }
    }),

    methods: {
        select: function select(value) {
            this.$emit('input', value);
        }
    }
});

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("selectize", {
    attrs: {
      all: _vm.citiesByState,
      value: _vm.value,
      disabled: _vm.disabled,
      id: _vm.id,
      placeholder: "Select the city...",
      valueField: "name"
    },
    on: {
      "update:value": function($event) {
        _vm.value = $event
      },
      input: _vm.select
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-644a319a", module.exports)
  }
}

/***/ })

});