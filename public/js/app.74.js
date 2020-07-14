webpackJsonp([74],{

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(700)
/* template */
var __vue_template__ = __webpack_require__(701)
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
Component.options.__file = "resources/assets/js/pages/incidents/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70dd1777", Component.options)
  } else {
    hotAPI.reload("data-v-70dd1777", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 700:
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



/* harmony default export */ __webpack_exports__["default"] = ({

    name: 'incident-index',

    data: function data() {
        return {
            fields: ['client', {
                name: 'type.name',
                title: 'Type'
            }, 'date', {
                name: 'client_age',
                title: 'Age'
            }, {
                name: 'advocate.name',
                title: 'Advocate',
                template: '{{ advocate.first_name }} {{ advocate.last_name }}',
                sortField: 'advocate.last_name'
            }, 'state', 'city', {
                name: 'actions',
                dataClass: 'fit-content',
                titleClass: 'fit-content',
                sortable: false
            }]
        };
    },


    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('incidents', {
        byId: 'byId',
        fetching: 'fetching',
        incidents: 'paginated',
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


    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('incidents', ['destroy', 'fetch']), {
        confirmDelete: function confirmDelete(id) {
            var _this = this;

            var c = confirm('Are you sure that you want to delete this incident?');

            if (c) {
                var client_id = this.byId(id).client_id;
                this.destroy({ id: id }).then(function () {
                    _this.addMessage('This incident has been deleted.');
                    _this.fetchClient({ id: client_id });
                });
            }
        },
        init: function init(query) {
            var config = {
                params: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.params, {
                    page: query && query.page || 1
                })
            };

            this.fetch(config);
        }
    })
});

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "section" }, [
      _vm.fetching
        ? _c("div", { staticClass: "lead" }, [
            _c("i", { staticClass: "fa fa-refresh fa-spin" }),
            _vm._v(" Loading data\n        ")
          ])
        : !_vm.fetching && _vm.incidents.length
        ? _c(
            "div",
            [
              _c("grid", {
                attrs: {
                  fields: _vm.fields,
                  data: _vm.incidents,
                  fetching: _vm.fetching,
                  meta: _vm.meta
                },
                scopedSlots: _vm._u([
                  {
                    key: "client",
                    fn: function(props) {
                      return [
                        _c("client-link", {
                          attrs: { client: props.item.client }
                        })
                      ]
                    }
                  },
                  {
                    key: "type.name",
                    fn: function(props) {
                      return [
                        _c(
                          "router-link",
                          { attrs: { to: "/incidents/" + props.item.id } },
                          [_vm._v(_vm._s(props.item.type.name))]
                        )
                      ]
                    }
                  },
                  {
                    key: "date",
                    fn: function(props) {
                      return [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm._f("prettyDate")(props.item.date)) +
                            "\n                "
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
                                  to: "/incidents/" + props.item.id + "/edit"
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
                                        return _vm.confirmDelete(props.item.id)
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
                ])
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
    return _c("header", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Incidents")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-70dd1777", module.exports)
  }
}

/***/ })

});