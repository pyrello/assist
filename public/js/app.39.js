webpackJsonp([39],{

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(647)
}
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(649)
/* template */
var __vue_template__ = __webpack_require__(650)
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
Component.options.__file = "resources/assets/js/pages/clients/Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01a8f561", Component.options)
  } else {
    hotAPI.reload("data-v-01a8f561", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filters_capitalize__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_Model__ = __webpack_require__(60);








var ModelMixin = function ModelMixin(_ref) {
    var _mapGetters, _watch, _extends3;

    var name = _ref.name,
        storeName = _ref.storeName,
        _ref$model = _ref.model,
        model = _ref$model === undefined ? __WEBPACK_IMPORTED_MODULE_6__models_Model__["a" /* default */] : _ref$model;

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ModelMixin);

    this.modelMixinOptions = {
        name: name,
        storeName: storeName,
        model: model
    };

    var that = this;

    this.data = function () {
        var _ref2;

        return _ref2 = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref2, that.modelMixinOptions.name, new that.modelMixinOptions.model()), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref2, 'params', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()({}, that.modelMixinOptions.name + '_id', null)), _ref2;
    };

    this.computed = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapGetters */])(storeName, (_mapGetters = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_mapGetters, name + 'ById', 'byId'), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_mapGetters, 'route' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name), 'byRoute'), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_mapGetters, 'fetching' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name), 'fetching'), _mapGetters)), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()({}, name + 'Data', function undefined() {
        var fetching = this['fetching' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name)]; // This is a hack to force this to re-render when fetch completes
        return this['route' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name)];
    }));

    this.created = function () {
        this['set' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name) + 'Id']();
    };

    this.watch = (_watch = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_watch, name + 'Data', function undefined() {
        // this.log(`${name}Data`, this[`${name}Data`])
        // Reset the model to prevent lingering data
        this['reset' + that.modelMixinOptions.name]();
        // Assign the raw data to the model
        if (this[that.modelMixinOptions.name + 'Data']) {
            this['' + that.modelMixinOptions.name].assign(this[that.modelMixinOptions.name + 'Data']);
        }
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_watch, 'this.$route.params.' + name + '_id', function undefined() {
        this['set' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name) + 'Id']();
    }), _watch);

    this.methods = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(storeName, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()({}, 'fetch' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name), 'fetch')), (_extends3 = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, 'set' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name) + 'Id', function undefined(id) {
        if (id) {
            id = Number(id);
        } else if (this.$route.params[name + '_id']) {
            id = Number(this.$route.params[name + '_id']);
        } else {
            id = null;
        }
        // this.log(`set${capitalize(name)}Id`, id)

        Vue.set(this.params, name + '_id', id);
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, name + 'IdExists', function undefined() {
        return Object(__WEBPACK_IMPORTED_MODULE_4__common__["f" /* defined */])(this.params[name + '_id']) && this.params[name + '_id'] !== null;
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, 'fetchRoute' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name), function undefined() {
        var _this = this;

        var id = Number(this.$route.params[name + '_id']);
        if (!id) {
            return false;
        }
        return this['fetch' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name)]({ id: id, fetchId: 'id:' + id }).then(function (current) {
            _this['route' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name) + 'Fetched']();
            _this['current' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name) + 'Fetched']();
            return current;
        }).catch(function (error) {
            console.error(error);
            // this.addMessage({
            //     text: error,
            //     type: 'danger',
            // })
            // this.$router.push('/abusers')
        });
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, 'fetchCurrent' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name), function undefined() {
        return this['fetchRoute' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name)]();
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, 'current' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name) + 'Fetched', function undefined() {
        //
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, 'route' + Object(__WEBPACK_IMPORTED_MODULE_5__filters_capitalize__["a" /* default */])(name) + 'Fetched', function undefined() {
        //
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, name + 'Fetched', function undefined() {
        //
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, 'reset', function reset() {
        this.resetData();
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, 'resetData', function resetData() {
        this['reset' + name]();
        this.params[name + '_id'] = null;
    }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_extends3, 'reset' + name, function undefined() {
        this[name] = new model();
    }), _extends3));
};

/* harmony default export */ __webpack_exports__["a"] = (ModelMixin);

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(35);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Capitalizes a text string.
 * Example: capitalize this => Capitalize This
 * 
 * @param  {String} str the string to convert
 * @return {String}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
});

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Client__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ModelMixin__ = __webpack_require__(488);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, new __WEBPACK_IMPORTED_MODULE_2__ModelMixin__["a" /* default */]({
    name: 'client',
    storeName: 'clients',
    model: __WEBPACK_IMPORTED_MODULE_1__models_Client__["a" /* default */]
})));

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

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(648);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(578)("47df7af7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01a8f561\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01a8f561\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(237)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_initClient__ = __webpack_require__(495);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    name: 'client-show',

    mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_initClient__["a" /* default */]],

    // Hooks
    created: function created() {
        this.init();
    },


    // watch: {
    //     '$route'() {
    //         this.log('watch:$route')
    //         this.init()
    //     },
    // },

    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('clients', ['destroy']), {
        confirmDelete: function confirmDelete() {
            var _this = this;

            var name = this.clientData.full_name;
            var c = confirm('Are you sure that you want to delete the client, ' + name + '?');

            if (c) {
                this.destroy({ id: this.clientData.id }).then(function () {
                    _this.addMessage(name + ' has been deleted.');
                    _this.$router.push('/clients');
                });
            }
        },
        init: function init() {
            // this.log('init')
            this.fetchRouteClient();
        }
    })
});

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.client
      ? _c("div", [
          _c("header", { staticClass: "content-header" }, [
            _c(
              "div",
              {
                staticClass:
                  "header-actions pull-right hidden-sm hidden-xs desktop"
              },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { to: "/clients/" + _vm.client.id + "/abuse/add" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-frown" }),
                    _vm._v(" Add Abuser")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      to: "/clients/" + _vm.client.id + "/incidents/add"
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-exclamation-triangle" }),
                    _vm._v(" Add Incident")
                  ]
                ),
                _vm._v(" "),
                _vm.client.last_incident_id
                  ? _c(
                      "router-link",
                      {
                        staticClass: "btn btn-primary",
                        attrs: {
                          to: "/clients/" + _vm.client.id + "/activities/add"
                        }
                      },
                      [
                        _c("i", { staticClass: "fas fa-clock" }),
                        _vm._v(" Add Service Request")
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.client.last_incident_id
                  ? _c(
                      "router-link",
                      {
                        staticClass: "btn btn-primary",
                        attrs: {
                          to: "/clients/" + _vm.client.id + "/outcomes/add"
                        }
                      },
                      [
                        _c("i", { staticClass: "fas fa-smile" }),
                        _vm._v(" Add Outcome")
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "btn-group" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("ul", { staticClass: "dropdown-menu pull-right" }, [
                    !_vm.client.parent_id
                      ? _c(
                          "li",
                          { attrs: { role: "presentation" } },
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to:
                                    "/clients/" +
                                    _vm.client.id +
                                    "/dependents/add"
                                }
                              },
                              [
                                _c("i", { staticClass: "fas fa-child fa-fw" }),
                                _vm._v(" Add Dependent")
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "li",
                      { attrs: { role: "presentation" } },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: "/clients/" + _vm.client.id + "/notes/add"
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fas fa-sticky-note fa-fw"
                            }),
                            _vm._v(" Add Note")
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { attrs: { role: "presentation" } },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: { to: "/clients/" + _vm.client.id + "/edit" }
                          },
                          [
                            _c("i", { staticClass: "fas fa-edit fa-fw" }),
                            _vm._v(" Edit")
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("li", { attrs: { role: "presentation" } }, [
                      _vm.authUser.is_admin
                        ? _c(
                            "a",
                            {
                              attrs: { href: "#delete" },
                              on: {
                                click: function($event) {
                                  return _vm.confirmDelete()
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fas fa-trash-alt fa-fw"
                              }),
                              _vm._v(" Delete")
                            ]
                          )
                        : _vm._e()
                    ])
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "h1",
              [
                !_vm.client.full_name
                  ? [_vm._v("Loading client... ")]
                  : [
                      _vm._v(_vm._s(_vm.client.full_name)),
                      _vm.client.parent_id
                        ? [_vm._v(" (Dependent) ")]
                        : _vm._e()
                    ],
                _vm._v(" "),
                _vm.fetchingClient
                  ? _c("small", [
                      _c("i", { staticClass: "fas fa-spinner fa-spin" })
                    ])
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "header-actions hidden-md hidden-lg mobile" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { to: "/clients/" + _vm.client.id + "/abuse/add" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-frown" }),
                    _vm._v(" Add Abuser")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      to: "/clients/" + _vm.client.id + "/incidents/add"
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-exclamation-triangle" }),
                    _vm._v(" Add Incident")
                  ]
                ),
                _vm._v(" "),
                _vm.client.last_incident_id
                  ? _c(
                      "router-link",
                      {
                        staticClass: "btn btn-primary",
                        attrs: {
                          to: "/clients/" + _vm.client.id + "/activities/add"
                        }
                      },
                      [
                        _c("i", { staticClass: "fas fa-clock" }),
                        _vm._v(" Add Service Request")
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.client.last_incident_id
                  ? _c(
                      "router-link",
                      {
                        staticClass: "btn btn-primary",
                        attrs: {
                          to: "/clients/" + _vm.client.id + "/outcomes/add"
                        }
                      },
                      [
                        _c("i", { staticClass: "fas fa-smile" }),
                        _vm._v(" Add Outcome")
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "btn-group" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("ul", { staticClass: "dropdown-menu" }, [
                    !_vm.client.parent_id
                      ? _c(
                          "li",
                          { attrs: { role: "presentation" } },
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to:
                                    "/clients/" +
                                    _vm.client.id +
                                    "/dependents/add"
                                }
                              },
                              [
                                _c("i", { staticClass: "fas fa-child fa-fw" }),
                                _vm._v(" Add Dependent")
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "li",
                      { attrs: { role: "presentation" } },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: "/clients/" + _vm.client.id + "/notes/add"
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fas fa-sticky-note fa-fw"
                            }),
                            _vm._v(" Add Note")
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { attrs: { role: "presentation" } },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: { to: "/clients/" + _vm.client.id + "/edit" }
                          },
                          [
                            _c("i", { staticClass: "fas fa-edit fa-fw" }),
                            _vm._v(" Edit")
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("li", { attrs: { role: "presentation" } }, [
                      _vm.authUser.is_admin
                        ? _c(
                            "a",
                            {
                              attrs: { href: "#delete" },
                              on: {
                                click: function($event) {
                                  return _vm.confirmDelete(_vm.client.id)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fas fa-trash-alt fa-fw"
                              }),
                              _vm._v(" Delete")
                            ]
                          )
                        : _vm._e()
                    ])
                  ])
                ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "section" }, [
            _c("nav", [
              _c(
                "ul",
                { staticClass: "nav nav-tabs" },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        role: "presentation",
                        to: "/clients/" + _vm.client.id + "/profile",
                        tag: "li"
                      }
                    },
                    [_c("a", { attrs: { href: "profile" } }, [_vm._v("Info")])]
                  ),
                  _vm._v(" "),
                  !_vm.client.parent_id
                    ? _c(
                        "router-link",
                        {
                          attrs: {
                            role: "presentation",
                            to: "/clients/" + _vm.client.id + "/dependents",
                            tag: "li"
                          }
                        },
                        [
                          _c("a", { attrs: { href: "dependents" } }, [
                            _vm._v("Dependents")
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        role: "presentation",
                        to: "/clients/" + _vm.client.id + "/abuse",
                        tag: "li"
                      }
                    },
                    [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "/clients/" + _vm.client.id + "abusers"
                          }
                        },
                        [_vm._v("Abusers")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        role: "presentation",
                        to: "/clients/" + _vm.client.id + "/incidents",
                        tag: "li"
                      }
                    },
                    [
                      _c("a", { attrs: { href: "incidents" } }, [
                        _vm._v("Incidents")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm.client.last_incident_id
                    ? _c(
                        "router-link",
                        {
                          attrs: {
                            role: "presentation",
                            to: "/clients/" + _vm.client.id + "/activities",
                            tag: "li"
                          }
                        },
                        [
                          _c("a", { attrs: { href: "activities" } }, [
                            _vm._v("Activities")
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.client.last_incident_id
                    ? _c(
                        "router-link",
                        {
                          attrs: {
                            role: "presentation",
                            to: "/clients/" + _vm.client.id + "/outcomes",
                            tag: "li"
                          }
                        },
                        [
                          _c("a", { attrs: { href: "activities" } }, [
                            _vm._v("Outcomes")
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.client.household_size > 1
                    ? _c(
                        "router-link",
                        {
                          attrs: {
                            role: "presentation",
                            to: "/clients/" + _vm.client.id + "/household",
                            tag: "li"
                          }
                        },
                        [
                          _c("a", { attrs: { href: "household" } }, [
                            _vm._v("Household")
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        role: "presentation",
                        to: "/clients/" + _vm.client.id + "/notes",
                        tag: "li"
                      }
                    },
                    [_c("a", { attrs: { href: "notes" } }, [_vm._v("Notes")])]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tab-content" }, [_c("router-view")], 1)
          ])
        ])
      : _c("div", { staticClass: "lead section" }, [
          _c("i", { staticClass: "fas fa-spinner fa-spin" }),
          _vm._v(" Loading client\n    ")
        ]),
    _vm._v(" "),
    _c("div", { staticClass: "section" })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-primary dropdown-toggle",
        attrs: {
          type: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("i", { staticClass: "fa fa-ellipsis-h" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-primary dropdown-toggle",
        attrs: {
          type: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("i", { staticClass: "fa fa-ellipsis-h" })]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-01a8f561", module.exports)
  }
}

/***/ })

});