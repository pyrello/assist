webpackJsonp([68],{

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(726)
/* template */
var __vue_template__ = __webpack_require__(727)
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
Component.options.__file = "resources/assets/js/pages/reporting/Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22c112bb", Component.options)
  } else {
    hotAPI.reload("data-v-22c112bb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(26);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            range: 'This quarter',
            start_date: null,
            end_date: null
        };
    },


    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])('profiles', ['byId', 'fetching']), {
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

    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])('profiles', ['fetch', 'setCurrent']), {
        init: function init() {
            this.setDates(this.range);
            // const id = this.$route.params.id
            var config = {
                id: this.$route.params.id,
                params: {
                    start_date: this.start_date,
                    end_date: this.end_date
                }
            };
            this.fetch(config);
        },
        getDatesFromLabel: function getDatesFromLabel(label) {
            // console.log('label', label)
            var start_date = __WEBPACK_IMPORTED_MODULE_1_moment___default()(),
                end_date = __WEBPACK_IMPORTED_MODULE_1_moment___default()();

            switch (label) {
                case 'This month':
                    start_date = start_date.startOf('month');
                    break;
                case 'This quarter':
                    start_date = start_date.startOf('quarter');
                    break;
                case 'This year':
                    start_date = start_date.startOf('year');
                    break;
                case 'Last month':
                    start_date = start_date.subtract(1, 'month').startOf('month');
                    end_date = end_date.subtract(1, 'month').endOf('month');
                    break;
                case 'Last quarter':
                    start_date = start_date.subtract(1, 'quarter').startOf('quarter');
                    end_date = end_date.subtract(1, 'quarter').endOf('quarter');
                    break;
                case 'Last year':
                    start_date = start_date.subtract(1, 'year').startOf('year');
                    end_date = end_date.subtract(1, 'year').endOf('year');
                    break;
                default:
                    break;
            }

            start_date = start_date.format('YYYY-MM-DD');
            end_date = end_date.format('YYYY-MM-DD');

            return { start_date: start_date, end_date: end_date };
        },
        setDates: function setDates(label) {
            var _getDatesFromLabel = this.getDatesFromLabel(label),
                start_date = _getDatesFromLabel.start_date,
                end_date = _getDatesFromLabel.end_date;

            this.start_date = start_date;
            this.end_date = end_date;
        }
    })
});

/***/ }),

/***/ 727:
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
            _vm.current.label
              ? _c("h1", [_vm._v(_vm._s(_vm.current.label))])
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
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-5" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { staticClass: "control-label" }, [
                      _vm._v("Date Range")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.range,
                            expression: "range"
                          }
                        ],
                        staticClass: "form-control",
                        on: {
                          change: [
                            function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.range = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                            _vm.init
                          ]
                        }
                      },
                      [
                        _c("option", [_vm._v("This month")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("This quarter")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("This year")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Last month")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Last quarter")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Last year")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Custom...")])
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm.range === "Custom..."
                ? _c("div", { staticClass: "well" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { staticClass: "control-label" }, [
                              _vm._v("Start")
                            ]),
                            _vm._v(" "),
                            _c("input-date", {
                              attrs: {
                                label: "Start Date",
                                id: "start_date",
                                selected: _vm.start_date,
                                config: { enableTime: false }
                              },
                              on: {
                                "update:selected": function($event) {
                                  _vm.start_date = $event
                                }
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { staticClass: "control-label" }, [
                              _vm._v("End")
                            ]),
                            _vm._v(" "),
                            _c("input-date", {
                              attrs: {
                                label: "End Date",
                                id: "end_date",
                                selected: _vm.start_date,
                                config: { enableTime: false }
                              },
                              on: {
                                "update:selected": function($event) {
                                  _vm.start_date = $event
                                }
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.current.sections, function(section) {
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
    require("vue-hot-reload-api")      .rerender("data-v-22c112bb", module.exports)
  }
}

/***/ })

});