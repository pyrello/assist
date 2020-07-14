webpackJsonp([41],{

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(683)
/* template */
var __vue_template__ = __webpack_require__(684)
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
Component.options.__file = "resources/assets/js/pages/clients/outcomes/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1583e848", Component.options)
  } else {
    hotAPI.reload("data-v-1583e848", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultIncident */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__factory__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Model__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ModelPlus__ = __webpack_require__(234);









var defaultIncident = function defaultIncident() {
    return {
        date: Object(__WEBPACK_IMPORTED_MODULE_4__common__["h" /* formattedDatetime */])(__WEBPACK_IMPORTED_MODULE_5__factory__["a" /* MOMENT_DATE_FORMAT */]),
        client_id: null,
        advocate_id: null,
        incident_type_id: null,
        state: null,
        city: null,
        note: ''
    };
};

var Incident = function (_Model) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Incident, _Model);

    function Incident() {
        var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Incident);

        return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Incident.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Incident)).call(this, defaultIncident(), attributes));
    }

    // defaults() {
    //     return defaultIncident()
    // }


    return Incident;
}(__WEBPACK_IMPORTED_MODULE_6__Model__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Incident);

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Incident__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ModelMixin__ = __webpack_require__(488);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_2__ModelMixin__["a" /* default */]({
    name: 'incident',
    storeName: 'incidents',
    model: __WEBPACK_IMPORTED_MODULE_1__models_Incident__["a" /* default */]
})));

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_initClient__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_initIncident__ = __webpack_require__(530);


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

    name: 'client-outcomes',

    mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_initClient__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_initIncident__["a" /* default */]],

    data: function data() {
        return {
            fields: [{
                name: 'description',
                title: 'Outcome'
            }, 'date', {
                name: 'actions',
                dataClass: 'fit-content',
                titleClass: 'fit-content',
                sortable: false
            }]
        };
    },


    computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])('clientOutcomes', {
        byId: 'byId',
        fetching: 'fetching',
        outcomes: 'paginated',
        meta: 'meta'
    })),

    // Hooks
    created: function created() {
        this.init(this.$route.query);
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        this.init(to.query);
        next();
    },


    watch: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, 'params.client_id', function paramsClient_id() {
        this.init(this.$route.query);
    }),

    methods: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])('clientOutcomes', ['destroy', 'fetch']), Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])('outcomes', ['setFilters']), {
        confirmDelete: function confirmDelete(id) {
            var _this = this;

            var c = confirm('Are you sure that you want to delete this outcome?');

            if (c) {
                this.destroy({ id: id }).then(function () {
                    _this.addMessage('Outcome has been deleted.');
                });
            }
        },
        init: function init(query) {
            var config = {
                params: {
                    client_id: this.params.client_id,
                    page: query && query.page || 1
                }
            };

            this.fetch(config);
        }
    })
});

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.fetching
      ? _c("div", { staticClass: "lead" }, [
          _c("i", { staticClass: "fa fa-refresh fa-spin" }),
          _vm._v(" Loading data\n    ")
        ])
      : !_vm.fetching && _vm.outcomes.length
      ? _c(
          "div",
          [
            _c("grid", {
              attrs: {
                data: _vm.outcomes,
                fields: _vm.fields,
                fetching: _vm.fetching,
                meta: _vm.meta
              },
              scopedSlots: _vm._u([
                {
                  key: "description",
                  fn: function(props) {
                    return [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to:
                              "/clients/" +
                              _vm.client.id +
                              "/outcomes/" +
                              props.item.id
                          }
                        },
                        [_vm._v(_vm._s(props.item.description))]
                      )
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
                                to:
                                  "/clients/" +
                                  props.item.client_id +
                                  "/outcomes/" +
                                  props.item.id +
                                  "/edit"
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-edit fa-fw" }),
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
                                      return _vm.confirmDelete(props.item.id)
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-trash-alt fa-fw"
                                  }),
                                  _vm._v(" Delete")
                                ]
                              )
                            : _vm._e(),
                          _vm._v("  \n                ")
                        ],
                        1
                      )
                    ]
                  }
                },
                {
                  key: "date",
                  fn: function(props) {
                    return [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm._f("prettyDate")(props.item.date)) +
                          "\n            "
                      )
                    ]
                  }
                }
              ])
            })
          ],
          1
        )
      : _c("div", { staticClass: "lead" }, [
          _c("p", [_vm._v("There are no outcomes for this client.")]),
          _vm._v(" "),
          _c(
            "p",
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-lg btn-primary",
                  attrs: { to: "outcomes/add" }
                },
                [_vm._v("Add Outcome")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "p",
            [
              _c("i", { staticClass: "fa fa-info-circle" }),
              _vm._v(
                " Outcomes can be related to one or more activities or standalone. If you wish to associate an outcome with an activity, visit the "
              ),
              _c("router-link", { attrs: { to: "activities" } }, [
                _vm._v("activities")
              ]),
              _vm._v(
                " page and select the activity or activities, then click the button to add an Outcome."
              )
            ],
            1
          )
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1583e848", module.exports)
  }
}

/***/ })

});