webpackJsonp([94],{

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(600)
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
Component.options.__file = "resources/assets/js/components/IssueReporter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22794333", Component.options)
  } else {
    hotAPI.reload("data-v-22794333", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", [
      _c("div", { staticClass: "form-group" }, [
        _c("label", [_vm._v("Summary")]),
        _vm._v(" "),
        _c("input", {
          attrs: { type: "text", placeholder: "A brief summary of the issue" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", [_vm._v("Issue Description")]),
        _vm._v(" "),
        _c("textarea", [
          _vm._v(
            "Describe the issue you encountered in as much detail as possible."
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-22794333", module.exports)
  }
}

/***/ })

});