webpackJsonp([78],{

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(625)
/* template */
var __vue_template__ = __webpack_require__(626)
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
Component.options.__file = "resources/assets/js/pages/abusers/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24cbd35d", Component.options)
  } else {
    hotAPI.reload("data-v-24cbd35d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 625:
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

/* eslint-disable no-console */


/* harmony default export */ __webpack_exports__["default"] = ({

    name: 'abuser-index',

    data: function data() {
        return {
            fields: [{
                name: 'first_name',
                title: 'First Name',
                titleClass: 'fit-content',
                dataClass: 'fit-content'
            }, {
                name: 'last_name',
                title: 'Last Name'
            }, {
                name: 'actions',
                titleClass: 'fit-content',
                dataClass: 'fit-content',
                sortable: false
            }],
            q: ''
        };
    },


    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('abusers', {
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
        this.init(this.$route.query);
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        this.init(to.query);
        next();
    },
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        this.q = '';
        next();
    },


    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('abusers', ['destroy', 'fetch']), {
        confirmDelete: function confirmDelete(id) {
            var _this = this;

            var name = this.byId(id).full_name;
            var c = confirm('Are you sure that you want to delete the abuser, ' + name + '?');

            if (c) {
                this.destroy({ id: id }).then(function () {
                    _this.addMessage(name + ' has been deleted.');
                });
            }
        },
        init: function init(query) {
            console.warn(this.$options.name, 'init');
            var page = query && query.page || 1;
            var config = {
                params: {
                    page: Number(page)
                }
            };
            if (this.q) {
                config.params.q = this.q;
            }

            this.fetch(config);
        }
    })
});

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("header", { staticClass: "content-header" }, [
      _c("h1", [
        _vm._v("Abusers"),
        _vm.fetching
          ? _c("small", [_c("i", { staticClass: "fas fa-spinner fa-spin" })])
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "section" },
      [
        _c(
          "form",
          {
            staticClass: "form-inline",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.init($event)
              }
            }
          },
          [
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
                staticClass: "form-control control-lg",
                attrs: { type: "text" },
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
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _vm.fetching
              ? _c("span", [
                  _c("i", { staticClass: "fas fa-spinner fa-pulse" }),
                  _vm._v(" Searching...")
                ])
              : _vm._e()
          ]
        ),
        _vm._v(" "),
        _c("grid", {
          attrs: {
            fields: _vm.fields,
            data: _vm.all,
            meta: _vm.meta,
            initialSortKey: "last_name"
          },
          scopedSlots: _vm._u([
            {
              key: "first_name",
              fn: function(props) {
                return [
                  _c(
                    "router-link",
                    { attrs: { to: "/abusers/" + props.item.id } },
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
                    { attrs: { to: "/abusers/" + props.item.id } },
                    [_vm._v(_vm._s(props.item.last_name))]
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
                          attrs: { to: "/abusers/" + props.item.id + "/edit" }
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
                      _vm._v("  \n                ")
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
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "btn btn-success btn-lg" }, [
      _c("i", { staticClass: "fas fa-search" }),
      _vm._v(" Search")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-24cbd35d", module.exports)
  }
}

/***/ })

});