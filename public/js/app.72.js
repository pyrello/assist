webpackJsonp([72],{

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(714)
/* template */
var __vue_template__ = __webpack_require__(715)
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
Component.options.__file = "resources/assets/js/pages/outcomes/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d311de1", Component.options)
  } else {
    hotAPI.reload("data-v-7d311de1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 714:
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



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            fields: ['description',
            //                    {
            //                        name: 'services',
            //                        title: 'Services',
            //                    },
            {
                name: 'active',
                dataClass: 'text-center',
                titleClass: 'text-center'
            }, {
                name: 'actions',
                titleClass: 'fit-content',
                dataClass: 'fit-content',
                sortable: false
            }]
        };
    },


    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('outcomes', ['all', 'fetching'])),

    // Hooks
    mounted: function mounted() {
        this.clearFilters();
        this.fetch();
    },


    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('outcomes', ['destroy', 'fetch', 'clearFilters']), {
        confirmDelete: function confirmDelete(id) {
            var _this = this;

            var c = confirm('Are you sure that you want to delete this outcome?');
            if (c) {
                this.destroy({ id: id }).then(function () {
                    _this.addMessage({
                        text: 'The outcome has been deleted.',
                        type: 'success'
                    });
                });
            }
        }
    })
});

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("header", { staticClass: "content-header" }, [
        _c(
          "div",
          {
            staticClass: "header-actions pull-right hidden-sm hidden-xs desktop"
          },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-success",
                attrs: { to: "/outcomes/add" }
              },
              [_c("i", { staticClass: "fas fa-smile" }), _vm._v(" Add Outcome")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("h1", [_vm._v("Outcomes")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "header-actions hidden-md hidden-lg mobile" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-success",
                attrs: { to: "/outcomes/add" }
              },
              [_c("i", { staticClass: "fas fa-smile" }), _vm._v(" Add Outcome")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("grid", {
        staticClass: "section",
        attrs: { fields: _vm.fields, data: _vm.all, fetching: _vm.fetching },
        scopedSlots: _vm._u([
          {
            key: "services",
            fn: function(props) {
              return [
                _vm._l(props.item.services, function(item, index) {
                  return props.item.services
                    ? [
                        _vm._v("\n                " + _vm._s(item.name)),
                        props.item.services.length - 1 > index
                          ? [_vm._v(", "), _c("br")]
                          : _vm._e()
                      ]
                    : _vm._e()
                })
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
                        attrs: { to: "/outcomes/" + props.item.id + "/edit" }
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
                            _c("i", { staticClass: "fas fa-trash-alt fa-fw" }),
                            _vm._v(" Delete")
                          ]
                        )
                      : _vm._e(),
                    _vm._v("  \n            ")
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "active",
            fn: function(props) {
              return [
                props.item.active === 1
                  ? _c("i", {
                      staticClass: "fa fa-check-circle-o text-success"
                    })
                  : _c("i", { staticClass: "fa fa-times-circle-o text-danger" })
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("router-view")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7d311de1", module.exports)
  }
}

/***/ })

});