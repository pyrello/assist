webpackJsonp([67],{

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(728)
/* template */
var __vue_template__ = __webpack_require__(729)
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
Component.options.__file = "resources/assets/js/pages/reporting/profiles/Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-535c5218", Component.options)
  } else {
    hotAPI.reload("data-v-535c5218", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 728:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            generating: true,
            range: '',
            start_date: null,
            end_date: null
        };
    },


    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('reports', ['byId', 'fetching']), {
        current: function current() {
            return this.byId(this.$route.params.id);
        }
    }),

    created: function created() {
        this.init();
    },


    // Watchers
    watch: {
        '$route': 'init'
    },

    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('reports', ['fetch', 'setCurrent']), {
        init: function init() {
            var id = this.$route.params.id;
            this.fetch({ id: id });
        }

        //            pollFetch() {
        //                const id = this.$route.params.id
        //                this.fetch({ id, forceRefresh: true })
        //                        .then(response => {
        //                            console.log('Fetched...', this.current)
        //                            if (this.current.cached_report === null) {
        //                                console.log('Setting timeout')
        //                                setTimeout(this.pollFetch, 10000)
        //                            } else {
        //                                this.generating = false
        //                            }
        //                        })
        //            }

    })
});

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.current
      ? _c("div", [
          _c("header", { staticClass: "content-header padded" }, [
            _c(
              "div",
              {
                staticClass:
                  "header-actions pull-right hidden-xs hidden-sm desktop"
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-success btn",
                    attrs: { href: "/reports/" + _vm.current.id + "/download" }
                  },
                  [
                    _c("i", { staticClass: "fa fa-download" }),
                    _vm._v(" Download")
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _vm.current.profile.label
              ? _c("h1", [_vm._v(_vm._s(_vm.current.profile.label))])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "header-actions hidden-md hidden-lg mobile" },
              [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-success btn",
                    attrs: { href: "/reports/" + _vm.current.id + "/download" }
                  },
                  [
                    _c("i", { staticClass: "fa fa-download" }),
                    _vm._v(" Download")
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "section" },
            [
              _c("header", [
                _c("h2", [
                  _vm._v(
                    _vm._s(_vm._f("prettyDate")(_vm.current.start_date)) +
                      " - " +
                      _vm._s(_vm._f("prettyDate")(_vm.current.end_date))
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._l(_vm.current.profile.sections, function(section) {
                return _c("div", [
                  section.label
                    ? _c("h2", [_vm._v(_vm._s(section.label))])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("table", { staticClass: "table table-striped" }, [
                    _c(
                      "tbody",
                      [
                        _vm._l(section.data, function(row, $index) {
                          return _c("tr", [
                            _c("td", [_vm._v(_vm._s($index))]),
                            _vm._v(" "),
                            _c("td", { staticClass: "fit-content" }, [
                              _vm._v(_vm._s(row))
                            ])
                          ])
                        }),
                        _vm._v(" "),
                        _c("tr", { staticClass: "report-total-row" }, [
                          _c("th", [_vm._v("Total")]),
                          _vm._v(" "),
                          _c("th", [_vm._v(_vm._s(section.total))])
                        ])
                      ],
                      2
                    )
                  ])
                ])
              })
            ],
            2
          )
        ])
      : _c("div", { staticClass: "lead section" }, [
          _c("i", { staticClass: "fa fa-refresh fa-spin" }),
          _vm._v(
            " Your report is being generated. Please allow some time for the process to complete.\n    "
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
    require("vue-hot-reload-api")      .rerender("data-v-535c5218", module.exports)
  }
}

/***/ })

});