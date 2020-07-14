webpackJsonp([81],{

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(575)
/* template */
var __vue_template__ = __webpack_require__(576)
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
Component.options.__file = "resources/assets/js/components/reporting/RangeWidget.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a08ac4e", Component.options)
  } else {
    hotAPI.reload("data-v-5a08ac4e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            activeRange: 0
        };
    },


    methods: {
        allowSplit: function allowSplit(range) {
            // Both values must be set
            if (range.min === null || range.max === null) {
                return false;
            }

            // If we made it this far, then yes
            return true;
        },
        blankRange: function blankRange() {
            return {
                min: null
            };
        },
        deleteRange: function deleteRange(index) {
            // Get the current range
            var range = this.ranges[index];

            // Delete the current range
            this.ranges.splice(index, 1);

            this.$set(this.ranges[index], 'min', range.min);
        },
        rangeName: function rangeName(range) {
            var label = '';
            if (range.min === null) {
                return '';
            } else {
                label += range.min.toString();
            }

            if (range.hasOwnProperty('max') && range.max !== null) {
                label += ' - ' + range.max.toString();
            } else {
                label += '+';
            }

            return label;
        },
        setLabel: function setLabel(index, value) {
            this.$set(this.ranges[index], 'label', value);
        },
        setNextRangeMin: function setNextRangeMin(index, value) {
            // Set it's min value to value + 1
            this.$set(this.ranges[index + 1], 'min', Number(value) + 1);
        },
        splitRange: function splitRange(index) {
            var _this = this;

            var range = this.ranges[index],
                current = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.blankRange(), { max: null }),
                next = this.blankRange();

            current.min = range.min;

            // If the range has a max value
            if (range.hasOwnProperty('max') && range.max !== null) {
                next.max = range.max;
            }

            // Insert a new range
            this.ranges.splice(index, 1, current);
            // Update the next range
            this.ranges.splice(index + 1, 0, next);

            // There is a slight lag, so wait until the next tick
            this.$nextTick(function () {
                // Set focus on the newly created input
                _this.activeRange = index;
                $(_this.$refs['range-max-' + index]).focus();
            });
        }
    },

    props: {
        label: {
            type: String,
            default: 'Range'
        },
        ranges: Array
    },

    watch: {
        // I'm using a watch function for this because
        // there are many moving parts of which to keep track
        ranges: function ranges() {
            this.$emit('update:ranges', this.ranges);
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(20)))

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form-group" }, [
    _c("label", {
      staticClass: "control-label",
      domProps: { textContent: _vm._s(_vm.label) }
    }),
    _vm._v(" "),
    _c("table", { staticClass: "table" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.ranges, function(item, index) {
          return _c("tr", [
            _c("td", { staticClass: "col-sm-1 text-right" }, [
              _vm._v(_vm._s(item.min))
            ]),
            _vm._v(" "),
            item.hasOwnProperty("max")
              ? _c("td", { staticClass: "fit-content" }, [_vm._v("-")])
              : _c("td", { staticClass: "fit-content" }, [_vm._v("+")]),
            _vm._v(" "),
            _c("td", { staticClass: "fit-content td-number td-input" }, [
              item.hasOwnProperty("max")
                ? _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.ranges[index].max,
                        expression: "ranges[index].max",
                        modifiers: { number: true }
                      }
                    ],
                    ref: "range-max-" + index,
                    refInFor: true,
                    staticClass: "form-control input-sm col-sm-1",
                    attrs: { type: "number", size: "4", min: item.min + 1 },
                    domProps: { value: _vm.ranges[index].max },
                    on: {
                      keyup: function($event) {
                        return _vm.setNextRangeMin(index, $event.target.value)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.ranges[index],
                          "max",
                          _vm._n($event.target.value)
                        )
                      },
                      blur: function($event) {
                        return _vm.$forceUpdate()
                      }
                    }
                  })
                : _vm._e()
            ]),
            _vm._v(" "),
            _vm.allowSplit(item)
              ? _c("td", { staticClass: "td-btn" }, [
                  _vm.allowSplit(item)
                    ? _c(
                        "a",
                        {
                          staticClass: "btn btn-rounded btn-primary btn-xs",
                          attrs: { href: "#split-range" },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.splitRange(index)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fa fa-chevron-left" })]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.allowSplit(item) && index < _vm.ranges.length - 1
                    ? _c(
                        "a",
                        {
                          staticClass: "btn btn-rounded btn-danger btn-xs",
                          attrs: { href: "#delete-range" },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.deleteRange(index)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fa fa-times" })]
                      )
                    : _vm._e()
                ])
              : _vm.activeRange == index
              ? _c("td", [
                  _c("small", { staticClass: "help-block" }, [
                    _vm._v("Enter the top of the range")
                  ])
                ])
              : _vm.activeRange + 1 == index
              ? _c("td", [
                  _c("small", { staticClass: "help-block" }, [
                    _vm._v("This will update automatically")
                  ])
                ])
              : _c("td"),
            _vm._v(" "),
            _c("td", { staticClass: "td-input" }, [
              _vm.allowSplit(item)
                ? _c("input", {
                    staticClass: "form-control input-sm",
                    attrs: { type: "text", placeholder: _vm.rangeName(item) },
                    domProps: { value: _vm.ranges[index].label },
                    on: {
                      input: function($event) {
                        return _vm.setLabel(index, $event.target.value)
                      }
                    }
                  })
                : _vm._e()
            ])
          ])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "col-sm-1" }, [_vm._v("Min")]),
        _vm._v(" "),
        _c("th", { staticClass: "fit-content" }),
        _vm._v(" "),
        _c("th", { staticClass: "fit-content" }, [_vm._v("Max")]),
        _vm._v(" "),
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Label")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("small", { staticClass: "help-block" }, [
      _vm._v("Use the insert button ("),
      _c("i", { staticClass: "fa fa-chevron-left" }),
      _vm._v(
        ") to break a range into multiple ranges. Use the delete button ("
      ),
      _c("i", { staticClass: "fa fa-times" }),
      _vm._v(
        ") to remove a range. Use the label box to create an different label for the range."
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5a08ac4e", module.exports)
  }
}

/***/ })

});