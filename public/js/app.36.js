webpackJsonp([36,83],{

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(535)
/* template */
var __vue_template__ = __webpack_require__(536)
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
Component.options.__file = "resources/assets/js/components/notes/List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-135a32a3", Component.options)
  } else {
    hotAPI.reload("data-v-135a32a3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(677)
/* template */
var __vue_template__ = __webpack_require__(678)
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
Component.options.__file = "resources/assets/js/pages/clients/notes/Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48c08022", Component.options)
  } else {
    hotAPI.reload("data-v-48c08022", Component.options)
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

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(26);

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

    name: 'note-list',

    /**
     * Note (ha): When using this, only apply the necessary
     * filter below to this component.
     */
    props: ['params', 'client_id', 'noteable_type', 'noteable_id'],

    data: function data() {
        return {
            note: '',
            processing: false
        };
    },


    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('notes', ['paginated', 'fetching']), {
        notes: function notes() {
            return this.paginated;
        }
    }),

    created: function created() {
        if (this.params) {
            this.fetch(this.params);
        }
    },


    watch: {
        params: function params() {
            if (this.params) {
                this.fetch(this.params);
            }
        }
    },

    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('notes', ['create', 'fetch', 'destroy']), {
        addNote: function addNote() {
            var _this = this;

            this.processing = true;
            var data = {
                data: {
                    advocate_id: this.authUser.id,
                    client_id: this.client_id,
                    content: this.note
                }
            };

            if (this.noteable_id && this.noteable_type) {
                data.data.noteable_type = this.noteable_type;
                data.data.noteable_id = this.noteable_id;
            }

            this.create(data).then(function () {
                _this.processing = false;
                _this.resetData();
                _this.fetch(_this.params);
            });
        },
        confirmDelete: function confirmDelete(id) {
            var _this2 = this;

            var c = confirm('Are you sure that you want to delete the note?');

            if (c) {
                this.destroy({ id: id }).then(function () {
                    _this2.addMessage('Note has been deleted.');
                });
            }
        },
        resetData: function resetData() {
            this.note = '';
        }
    })
});

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "notes box" },
    [
      _c("div", { staticClass: "box-header" }, [
        _vm._v("Notes "),
        _vm.fetching
          ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.fetching
        ? [_vm._m(0)]
        : _vm.notes.length
        ? [
            _c(
              "div",
              { staticClass: "box-body box-comments" },
              _vm._l(_vm.notes, function(note) {
                return _c("div", { staticClass: "box-comment" }, [
                  _c("span", { staticClass: "username" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(note.advocate.first_name) +
                        " " +
                        _vm._s(note.advocate.last_name) +
                        "\n                    "
                    ),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v(
                        "\n                         on " +
                          _vm._s(_vm._f("prettyDatetime")(note.created_at)) +
                          "\n                    "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "pull-right" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-warning btn-xs",
                          attrs: {
                            to:
                              "/clients/" +
                              note.client_id +
                              "/notes/" +
                              note.id +
                              "/edit?from=" +
                              _vm.$route.path
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
                              attrs: { href: "#delete" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.confirmDelete(note.id)
                                }
                              }
                            },
                            [_vm._v("Delete")]
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", {
                    domProps: {
                      innerHTML: _vm._s(
                        _vm.$options.filters.markdown(note.content)
                      )
                    }
                  })
                ])
              }),
              0
            )
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.client_id && _vm.noteable_type && _vm.noteable_id
        ? _c("div", { staticClass: "box-footer" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.addNote($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.note,
                        expression: "note"
                      }
                    ],
                    staticClass: "form-control input-sm",
                    attrs: { placeholder: "Add a note" },
                    domProps: { value: _vm.note },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.note = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success btn-sm",
                    attrs: { disabled: _vm.processing }
                  },
                  [
                    _vm._v("Add note"),
                    _vm.processing
                      ? [_c("i", { staticClass: "fa fa-refresh fa-spin" })]
                      : _vm._e()
                  ],
                  2
                )
              ]
            )
          ])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-body" }, [
      _c("div", { staticClass: "lead" }, [_vm._v("Loading notes")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-135a32a3", module.exports)
  }
}

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultNote */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model__ = __webpack_require__(60);






var defaultNote = function defaultNote() {
    return {
        id: null,
        client_id: null,
        advocate_id: null,
        noteable_type: null,
        noteable_id: null,
        content: ''
    };
};

var Note = function (_Model) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Note, _Model);

    function Note() {
        var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Note);

        return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Note.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Note)).call(this, defaultNote(), attributes));
    }

    return Note;
}(__WEBPACK_IMPORTED_MODULE_4__Model__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Note);

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Note__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ModelMixin__ = __webpack_require__(488);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_2__ModelMixin__["a" /* default */]({
    name: 'note',
    storeName: 'notes',
    model: __WEBPACK_IMPORTED_MODULE_1__models_Note__["a" /* default */]
})));

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_notes_List_vue__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_notes_List_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_notes_List_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_initClient__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_initNote__ = __webpack_require__(590);

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

    name: 'client-activity-show',

    mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_initClient__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_initNote__["a" /* default */]],

    components: {
        Notes: __WEBPACK_IMPORTED_MODULE_2__components_notes_List_vue___default.a
    },

    data: function data() {
        return {
            fetched: false
        };
    },


    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('notes', {
        notes: 'paginated'
    }), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('services', {
        serviceById: 'byId'
    }), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('notProvidedReasons', {
        whyServiceNotProvidedById: 'byId'
    }), {
        service: function service() {
            if (this.activity) {
                return this.serviceById(this.activity.requested_service_id);
            }
        },
        whyServiceNotProvided: function whyServiceNotProvided() {
            if (this.activity && this.activity.why_not_provided) {
                return this.whyServiceNotProvidedById(this.activity.why_not_provided);
            }
            return null;
        },
        noteParams: function noteParams() {
            // console.log('getting noteParams')
            if (this.$route.params.activity_id && this.activity.noteable_type) {
                return {
                    params: {
                        noteable_id: this.$route.params.activity_id,
                        noteable_type: this.activity.noteable_type
                    }
                };
            }

            return false;
        }
    }),

    created: function created() {
        this.init();
    },


    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('notes', {
        fetchNotes: 'fetch'
    }), {
        confirmDelete: function confirmDelete() {
            var _this = this;

            var c = confirm('Are you sure that you want to delete this activity?');

            if (c) {
                this.destroy({ id: this.note.id }).then(function () {
                    _this.addMessage('Activity has been deleted.');
                });
            }
        },
        init: function init() {
            this.fetchCurrentClient();
            this.fetchCurrentNote();
        }
    })
});

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.note
      ? _c("div", [
          _c("header", { staticClass: "content-header" }, [
            _c(
              "div",
              {
                staticClass:
                  "header-actions pull-right hidden-sm hidden-xs desktop"
              },
              [
                _c("div", { staticClass: "btn-group pull-right" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("ul", { staticClass: "dropdown-menu" }, [
                    _c(
                      "li",
                      { attrs: { role: "presentation" } },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to:
                                "/clients/" +
                                _vm.client.id +
                                "/notes/" +
                                _vm.note.id +
                                "/edit"
                            }
                          },
                          [
                            _c("i", { staticClass: "fas fa-edit fa-fw" }),
                            _vm._v(" Edit")
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("li", { attrs: { role: "presentation" } }, [
                      _vm.authUser.is_admin
                        ? _c(
                            "a",
                            {
                              attrs: { href: "#delete" },
                              on: {
                                click: function($event) {
                                  return _vm.confirmDelete()
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
                        : _vm._e()
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "h1",
              [
                _vm._v("Note"),
                _vm.client
                  ? [
                      _vm._v(" about "),
                      _c("client-link", { attrs: { client: _vm.client } })
                    ]
                  : _vm._e(),
                _vm._v(
                  " on " + _vm._s(_vm._f("prettyDatetime")(_vm.note.created_at))
                )
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "header-actions hidden-md hidden-lg mobile" },
              [
                _c("div", { staticClass: "btn-group" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("ul", { staticClass: "dropdown-menu" }, [
                    _c(
                      "li",
                      { attrs: { role: "presentation" } },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to:
                                "/clients/" +
                                _vm.client.id +
                                "/notes/" +
                                _vm.note.id +
                                "/edit"
                            }
                          },
                          [
                            _c("i", { staticClass: "fas fa-edit fa-fw" }),
                            _vm._v(" Edit")
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("li", { attrs: { role: "presentation" } }, [
                      _vm.authUser.is_admin
                        ? _c(
                            "a",
                            {
                              attrs: { href: "#delete" },
                              on: {
                                click: function($event) {
                                  return _vm.confirmDelete()
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
                        : _vm._e()
                    ])
                  ])
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "section" }, [
            _vm.note.advocate
              ? _c("div", [
                  _c("strong", [
                    _vm._v("by " + _vm._s(_vm.note.advocate.full_name))
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { domProps: { innerHTML: _vm._s(_vm.note.content) } })
          ])
        ])
      : _c("div", { staticClass: "lead section" }, [
          _c("i", { staticClass: "fa fa-refresh fa-spin" }),
          _vm._v(" Loading data\n    ")
        ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-primary dropdown-toggle",
        attrs: {
          type: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("i", { staticClass: "fa fa-ellipsis-h" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-primary dropdown-toggle",
        attrs: {
          type: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("i", { staticClass: "fa fa-ellipsis-h" })]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-48c08022", module.exports)
  }
}

/***/ })

});