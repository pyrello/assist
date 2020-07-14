webpackJsonp([1,88,89],{

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(596)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(598)
/* template */
var __vue_template__ = __webpack_require__(599)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources/assets/js/components/Grid.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0727ce06", Component.options)
  } else {
    hotAPI.reload("data-v-0727ce06", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

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

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(582)
/* template */
var __vue_template__ = __webpack_require__(583)
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
Component.options.__file = "resources/assets/js/components/PaginationInfo.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a69855f", Component.options)
  } else {
    hotAPI.reload("data-v-6a69855f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(579)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 579:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


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

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['meta']
});

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.meta && _vm.meta.from && _vm.meta.to && _vm.meta.total
    ? _c("div", [
        _vm._v(
          "\n    Showing " +
            _vm._s(_vm.meta.from) +
            " - " +
            _vm._s(_vm.meta.to) +
            " of " +
            _vm._s(_vm.meta.total) +
            "\n"
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
    require("vue-hot-reload-api")      .rerender("data-v-6a69855f", module.exports)
  }
}

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(597);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(578)("2f8341cd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0727ce06\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Grid.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0727ce06\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Grid.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(237)(false);
// imports


// module
exports.push([module.i, "\n.arrow {\n    display: inline-block;\n    vertical-align: middle;\n    width: 0;\n    height: 0;\n    margin-left: 5px;\n    opacity: 0.66;\n}\n.arrow.asc {\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    border-bottom: 4px solid #333;\n}\n.arrow.dsc {\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    border-top: 4px solid #333;\n}\n", ""]);

// exports


/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Pagination_vue__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PaginationInfo_vue__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PaginationInfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__PaginationInfo_vue__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'grid',

    components: {
        Pagination: __WEBPACK_IMPORTED_MODULE_5__Pagination_vue___default.a,
        PaginationInfo: __WEBPACK_IMPORTED_MODULE_6__PaginationInfo_vue___default.a
    },

    props: {
        actions: Array,
        fields: Array,
        data: Array | Object,
        fetching: {
            default: false,
            type: Boolean | String
        },
        initialSortKey: String,
        meta: Object
    },

    data: function data() {
        return {
            query: '',
            sortKey: '',
            sortOrders: {}
        };
    },
    created: function created() {
        if (Object(__WEBPACK_IMPORTED_MODULE_4__common__["f" /* defined */])(this.initialSortKey)) {
            this.sortKey = this.initialSortKey;
        }
        this.normalizeFields();
    },


    computed: {
        filteredData: function filteredData() {
            var sortKey = this.sortKey;
            var query = this.query && this.query.toLowerCase();
            var order = this.sortOrders[sortKey] || 1;
            var data = this.data;
            //                console.log('data', data)
            if (query) {
                data = data.filter(function (row) {
                    //                        console.log('row', row)
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(row).some(function (key) {
                        //                            console.log('key', key)
                        return String(row[key]).toLowerCase().indexOf(query) > -1;
                    });
                });
            }
            if (sortKey) {
                // console.log(sortKey, order)
                data = data.slice().sort(function (a, b) {
                    a = a[sortKey];
                    b = b[sortKey];
                    //                        console.log('a', a, 'b', b)
                    return (a === b ? 0 : a > b ? 1 : -1) * order;
                });
            }
            return data;
        }
    },

    filters: {
        capitalize: function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    },

    methods: {

        normalizeFields: function normalizeFields() {
            if (typeof this.fields === 'undefined') {
                return;
            }
            var self = this;
            var obj = void 0;
            this.fields.forEach(function (field, i) {
                if (typeof field === 'string') {

                    obj = {
                        name: field,
                        title: self.title(field),
                        type: 'string',
                        titleClass: '',
                        dataClass: '',
                        sortable: true,
                        sortField: field,
                        template: null
                        //                            callback: null,
                        //                            visible: true,
                    };
                } else {
                    obj = {
                        name: field.name,
                        title: self.title(field),
                        type: Object(__WEBPACK_IMPORTED_MODULE_4__common__["f" /* defined */])(field.type) ? field.type : 'string',
                        sortField: Object(__WEBPACK_IMPORTED_MODULE_4__common__["f" /* defined */])(field.sortField) ? field.sortField : field.name,
                        titleClass: Object(__WEBPACK_IMPORTED_MODULE_4__common__["f" /* defined */])(field.titleClass) ? field.titleClass : '',
                        dataClass: Object(__WEBPACK_IMPORTED_MODULE_4__common__["f" /* defined */])(field.dataClass) ? field.dataClass : '',
                        sortable: Object(__WEBPACK_IMPORTED_MODULE_4__common__["f" /* defined */])(field.sortable) ? field.sortable : true,
                        template: Object(__WEBPACK_IMPORTED_MODULE_4__common__["f" /* defined */])(field.template) ? field.template : null
                        //                            callback: (field.callback === undefined) ? '' : field.callback,
                        //                            visible: (field.visible === undefined) ? true : field.visible,
                    };
                }
                // Set the field
                self.$set(self.fields, i, obj);

                // Add the field to sorting
                self.$set(self.sortOrders, obj.sortField, 1);
            });
        },

        renderColumn: function renderColumn(field, row) {
            if (field.template) {
                return Object(__WEBPACK_IMPORTED_MODULE_4__common__["k" /* mustacheTemplate */])(field.template, row);
            }

            return Object(__WEBPACK_IMPORTED_MODULE_4__common__["d" /* dataGet */])(row, field.name);
        },
        resolveField: function resolveField(name, item) {

            if (name.match(/{{\s*[\w\.]+\s*}}/g)) {
                var self = this;
                return name.replace(/{{\s*[\w\.]+\s*}}/g, function (match) {
                    return self.resolveDotNotation(match.match(/[\w\.]+/)[0], item);
                });
            }

            return this.resolveDotNotation(name, item);
        },
        resolveDotNotation: function resolveDotNotation(name, item) {
            var levels = [];
            if (name.indexOf('.') >= 0) {
                levels = name.split('.');
            } else {
                levels = [name];
            }

            for (var i = 0; i < levels.length; i++) {
                item = item[levels[i]];
            }

            return item;
        },
        sortBy: function sortBy(key) {
            this.sortKey = key;
            this.$set(this.sortOrders, key, this.sortOrders[key] * -1);
        },
        sortClass: function sortClass(key) {
            return this.sortOrders[key] > 0 ? 'asc' : 'dsc';
        },
        setTitle: function setTitle(field) {
            if (typeof field.title === 'undefined') {
                return field.name;
            }

            return field.title;
        },
        title: function title(field) {
            if (typeof field === 'string') {
                return this.titleCase(field);
            }

            if (typeof field.title === 'undefined') {
                return this.titleCase(field.name);
            }

            return field.title;
        },
        titleCase: function titleCase(str) {
            return str.replace(/\w+/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        },
        titleClass: function titleClass(field) {
            var classObj = {};
            if (field.sortable) {
                classObj.active = this.sortKey == field.sortField;
            }
            if (field.titleClass) {
                if (typeof field.titleClass === 'string') {
                    classObj[field.titleClass] = true;
                } else {
                    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(classObj, field.titleClass);
                }
            }

            return classObj;
        }
    }
});

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "table-responsive" },
    [
      _c("pagination-info", { attrs: { meta: _vm.meta } }),
      _vm._v(" "),
      _c("table", { staticClass: "table table-striped" }, [
        _c("thead", [
          _c(
            "tr",
            _vm._l(_vm.fields, function(field) {
              return field.sortable
                ? _c(
                    "th",
                    {
                      class: _vm.titleClass(field),
                      on: {
                        click: function($event) {
                          return _vm.sortBy(field.sortField)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.title(field)) +
                          "\n                "
                      ),
                      _c("span", {
                        staticClass: "arrow",
                        class: _vm.sortClass(field.name)
                      })
                    ]
                  )
                : _c("th", { class: _vm.titleClass(field) }, [
                    _vm._v(_vm._s(_vm.title(field)))
                  ])
            }),
            0
          )
        ]),
        _vm._v(" "),
        _vm.fetching
          ? _c("tbody", [
              _c("tr", [
                _c("td", { attrs: { colspan: _vm.fields.length } }, [
                  _c("i", { staticClass: "fa fa-refresh fa-spin" }),
                  _vm._v(" Loading data")
                ])
              ])
            ])
          : _vm.filteredData.length
          ? _c(
              "tbody",
              _vm._l(_vm.filteredData, function(item, index) {
                return _c(
                  "tr",
                  [
                    _vm._l(_vm.fields, function(field) {
                      return [
                        typeof _vm.$scopedSlots[field.name] !== "undefined"
                          ? [
                              _c(
                                "td",
                                { class: field.dataClass },
                                [
                                  _vm._t(field.name, null, {
                                    field: field,
                                    item: item,
                                    rowIndex: index
                                  })
                                ],
                                2
                              )
                            ]
                          : [
                              _c("td", {
                                class: field.dataClass,
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.renderColumn(field, item)
                                  )
                                }
                              })
                            ]
                      ]
                    })
                  ],
                  2
                )
              }),
              0
            )
          : _c("tbody", [
              _c("tr", [
                _c("td", { attrs: { colspan: _vm.fields.length } }, [
                  _vm._v("No items to display")
                ])
              ])
            ])
      ]),
      _vm._v(" "),
      _vm.meta ? _c("pagination", { attrs: { meta: _vm.meta } }) : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-0727ce06", module.exports)
  }
}

/***/ })

});