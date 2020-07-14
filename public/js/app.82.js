webpackJsonp([82],{

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

/***/ })

});