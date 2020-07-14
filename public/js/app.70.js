webpackJsonp([70],{

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(722)
/* template */
var __vue_template__ = __webpack_require__(723)
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
Component.options.__file = "resources/assets/js/pages/reporting/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79524b84", Component.options)
  } else {
    hotAPI.reload("data-v-79524b84", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 722:
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



/* harmony default export */ __webpack_exports__["default"] = ({
    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('profiles', ['all', 'fetching'])),

    data: function data() {
        return {
            fields: [{
                name: 'label',
                title: 'Name'
            }, {
                name: 'actions',
                titleClass: 'fit-content',
                dataClass: 'fit-content',
                sortable: false
            }]
        };
    },
    created: function created() {
        this.fetch();
    },


    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('profiles', ['fetch', 'destroy']))
});

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("grid", {
        attrs: { fields: _vm.fields, data: _vm.all, fetching: _vm.fetching },
        scopedSlots: _vm._u([
          {
            key: "label",
            fn: function(props) {
              return [
                _c(
                  "router-link",
                  { attrs: { to: "/reporting/profiles/" + props.item.id } },
                  [_vm._v(_vm._s(props.item.label))]
                )
              ]
            }
          },
          {
            key: "actions",
            fn: function(props) {
              return [
                _c("div", { staticClass: "table-button-container" }, [
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
                ])
              ]
            }
          }
        ])
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-79524b84", module.exports)
  }
}

/***/ })

});