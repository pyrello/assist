webpackJsonp([73],{

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(704)
/* template */
var __vue_template__ = __webpack_require__(705)
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
Component.options.__file = "resources/assets/js/pages/intakes/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-348a539d", Component.options)
  } else {
    hotAPI.reload("data-v-348a539d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 704:
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



/* harmony default export */ __webpack_exports__["default"] = ({

    name: 'intake-index',

    data: function data() {
        return {
            fields: ['id',
            // {
            //     name: 'full_name',
            //     title: 'Name',
            //     sortField: 'last_name',
            // },
            'date',
            // 'email',
            {
                name: 'actions',
                titleClass: 'fit-content',
                dataClass: 'fit-content',
                sortable: false
            }]
        };
    },


    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('intakes', {
        byId: 'byId',
        fetching: 'fetching',
        meta: 'meta',
        paginated: 'paginated'
    }), {
        all: function all() {
            return this.paginated;
        }
    }),

    // Hooks
    created: function created() {
        this.init(this.$route.query);
    },


    // beforeRouteUpdate(to, from, next) {
    //     this.init(to.query)
    //     next()
    // },

    watch: {
        '$route': function $route() {
            this.init(this.$route.query);
        }
    },

    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('intakes', ['destroy', 'fetch']), {
        confirmDelete: function confirmDelete(id) {
            var _this = this;

            var c = confirm('Are you sure that you want to delete this intake (' + id + ')?');

            if (c) {
                this.destroy({ id: id }).then(function (response) {
                    _this.addMessage('This intake (' + id + ') has been deleted.');
                });
            }
        },
        init: function init(query) {
            var config = {
                params: {
                    page: query && query.page || 1
                }

                // console.log('config', config)

            };this.fetch(config);
        }
    })
});

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("header", { staticClass: "content-header" }, [
      _c(
        "div",
        {
          staticClass: "header-actions pull-right hidden-sm hidden-xs desktop"
        },
        [
          _c("add-button", {
            attrs: { url: "/intakes/add", text: "Add Model" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("h1", [_vm._v("Intakes")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "header-actions hidden-md hidden-lg mobile" },
        [
          _c("add-button", {
            attrs: { url: "/intakes/add", text: "Add Model" }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "section" },
      [
        _c("grid", {
          attrs: {
            fields: _vm.fields,
            data: _vm.all,
            meta: _vm.meta,
            fetching: _vm.fetching,
            initialSortKey: "last_name"
          },
          scopedSlots: _vm._u([
            {
              key: "id",
              fn: function(props) {
                return [
                  _c(
                    "router-link",
                    { attrs: { to: "/intakes/" + props.item.id } },
                    [_vm._v(_vm._s(props.item.id))]
                  )
                ]
              }
            },
            {
              key: "date",
              fn: function(props) {
                return [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm._f("prettyDate")(props.item.date)) +
                      "\n            "
                  )
                ]
              }
            },
            {
              key: "actions",
              fn: function(props) {
                return [
                  _c(
                    "div",
                    { staticClass: "table-button-container" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-warning btn-xs",
                          attrs: { to: "/intakes/" + props.item.id + "/edit" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-pencil" }),
                          _vm._v(" Edit")
                        ]
                      ),
                      _vm._v(" "),
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
                              _c("i", { staticClass: "fa fa-remove" }),
                              _vm._v(" Delete")
                            ]
                          )
                        : _vm._e(),
                      _vm._v("  \n                ")
                    ],
                    1
                  )
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-348a539d", module.exports)
  }
}

/***/ })

});