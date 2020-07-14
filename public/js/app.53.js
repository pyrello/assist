webpackJsonp([53,82],{

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(555)
/* template */
var __vue_template__ = __webpack_require__(556)
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
Component.options.__file = "resources/assets/js/components/reporting/DemographicOptions.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fe76291e", Component.options)
  } else {
    hotAPI.reload("data-v-fe76291e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(573)
/* template */
var __vue_template__ = __webpack_require__(574)
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
Component.options.__file = "resources/assets/js/components/reporting/DemographicListWidget.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0331aa02", Component.options)
  } else {
    hotAPI.reload("data-v-0331aa02", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 555:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        allExceptExcluded: function allExceptExcluded() {
            var _this = this;

            return this.options.filter(function (item) {
                return _this.exclude.indexOf(item.value) < 0;
            });
        }
    },

    data: function data() {
        return {
            options: [{
                name: 'Age',
                value: 'age'
            }, {
                name: 'Ethnicity',
                value: 'ethnicity'
            }, {
                name: 'Gender',
                value: 'gender'
            }, {
                name: 'Services Provided',
                value: 'services'
            }, {
                name: 'Victim Types',
                value: 'victimTypes',
                nameField: 'description'
            }]
        };
    },


    methods: {
        select: function select(value) {
            if (typeof value === 'undefined') {
                value = this.selected;
            }
            this.$emit('update:selected', value);
        }
    },

    props: {
        exclude: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        label: String,
        selected: Array | String
    }
});

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("selectize", {
    attrs: {
      all: _vm.allExceptExcluded,
      selected: _vm.selected,
      label: _vm.label
    },
    on: {
      "update:selected": [
        function($event) {
          _vm.selected = $event
        },
        _vm.select
      ]
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fe76291e", module.exports)
  }
}

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DemographicOptions_vue__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DemographicOptions_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__DemographicOptions_vue__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    components: {
        DemographicOptions: __WEBPACK_IMPORTED_MODULE_2__DemographicOptions_vue___default.a
    },

    data: function data() {
        return {
            activeRange: 0,
            includeAll: true,
            include: [],
            subs: {},
            labels: {},
            showModal: false,
            showOptionsIndex: -1
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
            this.list.splice(index, 1, this.initObject(this.list[index], value));
        },
        setNextRangeMin: function setNextRangeMin(index, value) {
            // Set it's min value to value + 1
            this.$set(this.ranges[index + 1], 'min', Number(value) + 1);
        },
        showSplitOptions: function showSplitOptions(index) {
            this.showOptionsIndex = index;
            this.showModal = true;
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
        },
        toggleAll: function toggleAll() {
            if (this.includeAll) {
                this.$set(this, 'include', this.services.map(function (item) {
                    return item.name;
                }));
            } else {
                this.$set(this, 'include', []);
            }
        },
        toggleInclude: function toggleInclude(index) {
            console.log('toggling include');
            if (typeof this.list[index] === 'string') {
                this.list.splice(index, 1, this.initObject(this.list[index], '', false));
            }
        },
        convertToObject: function convertToObject(index) {
            if (typeof this.list[index] === 'string') {
                this.list.splice(index, 1, this.initObject(this.list[index]));
            } else {
                console.error('Attempted to convert an object into an object');
            }
        },
        initObject: function initObject(name) {
            var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var include = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            console.log('creating object', name, label, include);
            return {
                name: name,
                label: label,
                include: include
            };
        }
    },

    props: {
        label: {
            type: String,
            default: 'Range'
        },
        type: String,
        list: Array
    },

    watch: {
        // I'm using a watch function for this because
        // there are many moving parts of which to keep track
        //            list() {
        //                console.log('updated list')
        //                this.$emit('update:list', this.list)
        //            }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(20)))

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "form-group" },
    [
      _vm.label
        ? _c("label", {
            staticClass: "control-label",
            domProps: { textContent: _vm._s(_vm.label) }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("table", { staticClass: "table table-striped no-bottom-margin" }, [
        _c("thead", [
          _c("tr", [
            _c("th", { staticClass: "fit-content" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.includeAll,
                    expression: "includeAll"
                  }
                ],
                attrs: { type: "checkbox" },
                domProps: {
                  checked: Array.isArray(_vm.includeAll)
                    ? _vm._i(_vm.includeAll, null) > -1
                    : _vm.includeAll
                },
                on: {
                  change: [
                    function($event) {
                      var $$a = _vm.includeAll,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && (_vm.includeAll = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.includeAll = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.includeAll = $$c
                      }
                    },
                    _vm.toggleAll
                  ]
                }
              })
            ]),
            _vm._v(" "),
            _c("th", [_vm._v("Label")]),
            _vm._v(" "),
            _c("th", [_vm._v("Options")])
          ])
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          [
            _vm._l(_vm.list, function(item, index) {
              return [
                typeof item === "string"
                  ? [
                      _c("tr", [
                        _c("td", { staticClass: "fit-content" }, [
                          _c("input", {
                            attrs: {
                              type: "checkbox",
                              id: "victim_types-include-" + item,
                              checked: "checked"
                            },
                            on: {
                              click: function($event) {
                                return _vm.toggleInclude(index)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "td-input" }, [
                          _c("input", {
                            staticClass: "form-control input-sm",
                            attrs: { type: "text", placeholder: item },
                            on: {
                              input: function($event) {
                                return _vm.setLabel(index, $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-rounded btn-primary btn-xs",
                              attrs: { href: "#split-range" },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.showSplitOptions(index)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fa fa-chevron-left" })]
                          )
                        ])
                      ])
                    ]
                  : [
                      _c("tr", [
                        _c("td", { staticClass: "fit-content" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.list[index].include,
                                expression: "list[index].include"
                              }
                            ],
                            attrs: {
                              type: "checkbox",
                              id: "victim_types-include-" + item
                            },
                            domProps: {
                              value: item,
                              checked: Array.isArray(_vm.list[index].include)
                                ? _vm._i(_vm.list[index].include, item) > -1
                                : _vm.list[index].include
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.list[index].include,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = item,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.list[index],
                                        "include",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.list[index],
                                        "include",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.list[index], "include", $$c)
                                }
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "td-input" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.label,
                                expression: "item.label"
                              }
                            ],
                            staticClass: "form-control input-sm",
                            attrs: {
                              type: "text",
                              placeholder: item.name,
                              disabled: !item.include
                            },
                            domProps: { value: item.label },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(item, "label", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-rounded btn-primary btn-xs",
                              attrs: { href: "#split-range" },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.showSplitOptions(index)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fa fa-chevron-left" })]
                          )
                        ])
                      ])
                    ]
              ]
            })
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: { show: _vm.showModal },
          on: {
            "update:show": function($event) {
              _vm.showModal = $event
            }
          }
        },
        [
          _vm.showOptionsIndex >= 0
            ? [
                _c("header", [
                  _c("h1", [_vm._v("Select demographic to sub-divide by")])
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    attrs: { role: "form" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.add($event)
                      }
                    }
                  },
                  [
                    _c("demographic-options", {
                      attrs: {
                        label: "Base demographic set",
                        exclude: [_vm.type]
                      }
                    })
                  ],
                  1
                )
              ]
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _vm._m(0)
    ],
    1
  )
}
var staticRenderFns = [
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
    require("vue-hot-reload-api")      .rerender("data-v-0331aa02", module.exports)
  }
}

/***/ })

});