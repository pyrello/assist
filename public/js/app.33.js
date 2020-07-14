webpackJsonp([33,3,57,59],{

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

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(519)
/* template */
var __vue_template__ = __webpack_require__(520)
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
Component.options.__file = "resources/assets/js/components/controls/selects/Ethnicity.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dbb81ef6", Component.options)
  } else {
    hotAPI.reload("data-v-dbb81ef6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(521)
/* template */
var __vue_template__ = __webpack_require__(522)
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
Component.options.__file = "resources/assets/js/components/controls/selects/Genders.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e355850", Component.options)
  } else {
    hotAPI.reload("data-v-1e355850", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(617)
/* template */
var __vue_template__ = __webpack_require__(618)
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
Component.options.__file = "resources/assets/js/pages/Search.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57b4ae25", Component.options)
  } else {
    hotAPI.reload("data-v-57b4ae25", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Selectize_vue__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Selectize_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Selectize_vue__);

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
    name: 'select-ethnicity',
    components: {
        Selectize: __WEBPACK_IMPORTED_MODULE_3__Selectize_vue___default.a
    },

    props: {
        value: Array
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('ethnicity', ['all'])),

    methods: {
        select: function select(value) {
            // console.log('[ethnicity] selecting', value)
            if (Array.isArray(value)) {
                value = value.map(function (id) {
                    return Number(id);
                });
            }
            this.$emit('input', value);
        }
    }
});

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "selectize",
    {
      attrs: {
        all: _vm.all,
        value: _vm.value,
        id: "select-ethnicity",
        placeholder: "Select ethnicity...",
        multiple: true,
        identity: "ethnicity",
        valueField: "id",
        valueType: "number"
      },
      on: {
        "update:value": function($event) {
          _vm.value = $event
        },
        input: _vm.select
      }
    },
    _vm._l(_vm.all, function(item) {
      return _c("option", { domProps: { value: item.id } }, [
        _vm._v(_vm._s(item.name))
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-dbb81ef6", module.exports)
  }
}

/***/ }),

/***/ 521:
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
//




/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        Selectize: __WEBPACK_IMPORTED_MODULE_2__Selectize_vue___default.a
    },

    props: ['id', 'value'],

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('genders', ['all'])),

    methods: {
        select: function select(value) {
            this.$emit('input', value);
        }
    }
});

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "selectize",
    {
      attrs: {
        all: _vm.all,
        value: _vm.value,
        placeholder: "Select the gender...",
        id: _vm.id,
        valueField: "name"
      },
      on: {
        "update:value": function($event) {
          _vm.value = $event
        },
        input: _vm.select
      }
    },
    _vm._l(_vm.all, function(item) {
      return _c("option", [_vm._v(_vm._s(item.name))])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e355850", module.exports)
  }
}

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_controls_selects_Ethnicity__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_controls_selects_Ethnicity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_controls_selects_Ethnicity__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_controls_selects_Genders__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_controls_selects_Genders___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_controls_selects_Genders__);


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

/* eslint-disable no-console */




/* harmony default export */ __webpack_exports__["default"] = ({

    name: 'client-index',

    components: {
        SelectEthnicity: __WEBPACK_IMPORTED_MODULE_3__components_controls_selects_Ethnicity___default.a,
        SelectGender: __WEBPACK_IMPORTED_MODULE_4__components_controls_selects_Genders___default.a
    },

    data: function data() {
        return {
            fields: [{
                name: 'first_name',
                title: 'First Name'
            }, {
                name: 'last_name',
                title: 'Last Name'
            }, {
                name: 'id',
                title: 'ID'
            }, {
                name: 'phone',
                title: 'Phone'
            },
            //                    {
            //                        name: 'last_activity_date',
            //                        title: 'Last Activity',
            //                    },
            {
                name: 'actions',
                titleClass: 'fit-content',
                dataClass: 'fit-content',
                sortable: false
            }],
            q: '',
            filters: {
                intake_date: null,
                last_activity_date: null
            },
            advancedSearch: false,
            showResults: false
        };
    },


    computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])('clients', {
        byId: 'byId',
        fetching: 'fetching',
        meta: 'meta',
        paginated: 'paginated'
    }), {
        all: function all() {
            return this.paginated;
        }
    }),

    // Hooks
    created: function created() {
        // this.init(this.$route.query)
        this.setCurrentFilter({ signature: '{}' });
        if (this.$route.query.page) {
            this.process();
        }
    },


    // beforeRouteUpdate(to, from, next) {
    //     this.init(to.query)
    //     next()
    // },

    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        this.q = '';
        this.setCurrentFilter({ signature: '{}' });
        next();
    },


    watch: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, '$route.query.page', function $routeQueryPage() {
        this.process();
    }),

    methods: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])('clients', ['destroy', 'fetch', 'setCurrentFilter']), {
        confirmDelete: function confirmDelete(id) {
            var _this = this;

            var name = this.byId(id).full_name;
            var c = confirm('Are you sure that you want to delete the client, ' + name + '?');

            if (c) {
                this.destroy({ id: id }).then(function (response) {

                    // console.log('delete response', response)
                    _this.addMessage(name + ' has been deleted.');
                    _this.$router.push('/clients');
                }).catch(function (error) {
                    return error;
                });
            }
        },
        process: function process() {
            this.showResults = true;

            var page = this.$route && this.$route.query && this.$route.query.page || 1;
            var config = {
                params: {
                    page: Number(page)
                }
            };
            if (this.q) {
                config.params.q = this.q;
            }

            if (this.filters.intake_date) {
                config.params.intake_date = this.filters.intake_date;
            }

            if (this.filters.activity_date) {
                config.params.activity_date = this.filters.activity_date;
            }

            // console.log('config', config)

            this.fetch(config);
        },
        reset: function reset() {
            this.advancedSearch = false;
            this.showResults = false;
            this.resetData();
        },
        resetData: function resetData() {
            this.q = '';
            this.filters = {
                intake_date: null,
                last_activity_date: null
            };
        }
    })
});

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("header", { staticClass: "content-header" }, [
      _c("h1", [
        _vm._v("Clients"),
        _vm.fetching
          ? _c("small", [_c("i", { staticClass: "fas fa-spinner fa-spin" })])
          : _vm._e()
      ])
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
            { staticClass: "row", attrs: { id: "client-search-basic" } },
            [
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "control-label hidden" }, [
                    _vm._v("Search")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.q,
                        expression: "q"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Enter one or more search terms..."
                    },
                    domProps: { value: _vm.q },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.q = $event.target.value
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              !_vm.advancedSearch
                ? _c("div", { staticClass: "col-md-8" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-link",
                        attrs: { href: "#advanced-search" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.advancedSearch = true
                          }
                        }
                      },
                      [
                        _vm._v("More options "),
                        _c("i", { staticClass: "fas fa-caret-down" })
                      ]
                    ),
                    _vm._v(" "),
                    _vm.fetching
                      ? _c("span", [
                          _c("i", { staticClass: "fas fa-spinner fa-pulse" }),
                          _vm._v(" Searching...")
                        ])
                      : _vm._e()
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._m(1)
            ]
          ),
          _vm._v(" "),
          _vm.advancedSearch
            ? _c(
                "div",
                { staticClass: "row", attrs: { id: "client-search-advanced" } },
                [
                  _c("div", { staticClass: "col-md-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Intake Date")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-6" },
                          [
                            _c("input-date", {
                              attrs: { end: "now" },
                              model: {
                                value: _vm.filters.intake_date,
                                callback: function($$v) {
                                  _vm.$set(_vm.filters, "intake_date", $$v)
                                },
                                expression: "filters.intake_date"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Last Activity Date")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-6" },
                          [
                            _c("input-date", {
                              attrs: { end: "now" },
                              model: {
                                value: _vm.filters.activity_date,
                                callback: function($$v) {
                                  _vm.$set(_vm.filters, "activity_date", $$v)
                                },
                                expression: "filters.activity_date"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(2),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-link btn-lg",
                        attrs: { type: "reset" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.reset()
                          }
                        }
                      },
                      [_vm._v("Reset")]
                    ),
                    _vm._v(" "),
                    _vm.fetching
                      ? _c("span", [
                          _c("i", { staticClass: "fas fa-spinner fa-pulse" }),
                          _vm._v(" Searching...")
                        ])
                      : _vm._e()
                  ])
                ]
              )
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _vm.showResults
        ? _c(
            "div",
            { staticClass: "results" },
            [
              _c("grid", {
                attrs: {
                  fields: _vm.fields,
                  data: _vm.all,
                  meta: _vm.meta,
                  initialSortKey: "last_name"
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "first_name",
                      fn: function(props) {
                        return [
                          _c(
                            "router-link",
                            { attrs: { to: "/clients/" + props.item.id } },
                            [_vm._v(_vm._s(props.item.first_name))]
                          )
                        ]
                      }
                    },
                    {
                      key: "last_name",
                      fn: function(props) {
                        return [
                          _c(
                            "router-link",
                            { attrs: { to: "/clients/" + props.item.id } },
                            [_vm._v(_vm._s(props.item.last_name))]
                          )
                        ]
                      }
                    },
                    {
                      key: "phone",
                      fn: function(props) {
                        return [
                          props.item.primary_phone_number &&
                          props.item.primary_phone_number.number
                            ? [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("phone")(
                                      props.item.primary_phone_number.number
                                    )
                                  )
                                )
                              ]
                            : [_vm._v(" - ")]
                        ]
                      }
                    },
                    {
                      key: "actions",
                      fn: function(props) {
                        return [
                          _c(
                            "div",
                            { staticClass: "table-button-container" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn btn-warning btn-xs",
                                  attrs: {
                                    to: "/clients/" + props.item.id + "/edit"
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-edit" }),
                                  _vm._v(" Edit")
                                ]
                              ),
                              _vm._v(" "),
                              _vm.authUser.is_admin
                                ? _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger btn-xs",
                                      on: {
                                        click: function($event) {
                                          return _vm.confirmDelete(
                                            props.item.id
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-remove" }),
                                      _vm._v(" Delete")
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v("  \n                    ")
                            ],
                            1
                          )
                        ]
                      }
                    }
                  ],
                  null,
                  false,
                  3053631147
                )
              })
            ],
            1
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "btn btn-success" }, [
      _c("i", { staticClass: "fas fa-search" }),
      _vm._v(" Search Clients")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-12" }, [
      _c("p", { staticClass: "help-block" }, [
        _c("i", { staticClass: "fas fa-question-circle" }),
        _vm._v(" "),
        _c("strong", [_vm._v("Tip:")]),
        _vm._v(
          " Search by first name and/or last name, id, or phone number. If searching by phone number, just type the numbers "
        ),
        _c("em", [_vm._v("without any formatting")]),
        _vm._v(".")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "btn btn-success btn-lg" }, [
      _c("i", { staticClass: "fas fa-search" }),
      _vm._v(" Search Clients")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-57b4ae25", module.exports)
  }
}

/***/ })

});