webpackJsonp([89],{

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(580)
/* template */
var __vue_template__ = __webpack_require__(581)
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
Component.options.__file = "resources/assets/js/components/Pagination.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3895afde", Component.options)
  } else {
    hotAPI.reload("data-v-3895afde", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    props: ['meta', 'path'],

    computed: {
        getPages: function getPages() {
            var pages = [];
            for (var i = 1; i <= this.meta.last_page; i++) {
                pages.push(i);
            }
            return pages;
        }
    },

    methods: {
        getPath: function getPath(page) {
            var path = this.$route.path;
            if (page) {
                path += '?page=' + Number(page);
            }
            return path;
        }
    }
});

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.meta.current_page && _vm.meta.last_page && _vm.meta.last_page > 1
    ? _c("div", [
        _c(
          "ul",
          { staticClass: "pagination" },
          [
            !(_vm.meta.current_page === 1 || _vm.meta.last_page === 1)
              ? _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        attrs: { to: _vm.getPath(), "aria-label": "Previous" }
                      },
                      [
                        _c("span", { attrs: { "aria-hidden": "true" } }, [
                          _vm._v("«")
                        ])
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.getPages, function(page) {
              return _c(
                "li",
                { class: { active: page === _vm.meta.current_page } },
                [
                  page === 1
                    ? _c(
                        "router-link",
                        { attrs: { to: _vm.getPath(), "aria-label": page } },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(page) +
                              "\n            "
                          )
                        ]
                      )
                    : _c(
                        "router-link",
                        {
                          attrs: { to: _vm.getPath(page), "aria-label": page }
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(page) +
                              "\n            "
                          )
                        ]
                      )
                ],
                1
              )
            }),
            _vm._v(" "),
            !(
              _vm.meta.current_page === _vm.meta.last_page ||
              _vm.meta.last_page === 1
            )
              ? _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: _vm.getPath(_vm.meta.current_page + 1),
                          "aria-label": "Next"
                        }
                      },
                      [
                        _c("span", { attrs: { "aria-hidden": "true" } }, [
                          _vm._v("»")
                        ])
                      ]
                    )
                  ],
                  1
                )
              : _vm._e()
          ],
          2
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3895afde", module.exports)
  }
}

/***/ })

});