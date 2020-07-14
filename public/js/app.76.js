webpackJsonp([76],{

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(643)
/* template */
var __vue_template__ = __webpack_require__(644)
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
Component.options.__file = "resources/assets/js/pages/clients/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7766bd9e", Component.options)
  } else {
    hotAPI.reload("data-v-7766bd9e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common__ = __webpack_require__(7);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    name: 'clients',

    data: function data() {
        return {
            fields: [{
                name: 'first_name',
                title: 'First Name'
            }, {
                name: 'last_name',
                title: 'Last Name'
            }, {
                name: 'id',
                title: 'ID'
            },
            //                    {
            //                        name: 'phone_number',
            //                        title: 'Phone',
            //                    },
            //                    {
            //                        name: 'last_activity_date',
            //                        title: 'Last Activity',
            //                    },
            {
                name: 'actions',
                titleClass: 'fit-content',
                dataClass: 'fit-content',
                sortable: false
            }]
        };
    },


    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('clients', {
        byId: 'byId',
        fetching: 'fetching',
        paginated: 'paginated',
        meta: 'meta'
    }), {
        all: function all() {
            return this.paginated(this.page);
        },
        page: function page() {
            return this.$route && this.$route.query && this.$route.query.page || 1;
        }
    }),

    // Hooks
    created: function created() {
        this.init(this.$route.query);
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        this.init(to.query);
        next();
    },


    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('clients', ['destroy', 'fetch']), {
        confirmDelete: function confirmDelete(id) {
            var _this = this;

            var name = this.byId(id).full_name;
            var c = confirm('Are you sure that you want to delete the client, ' + name + '?');

            if (c) {
                this.destroy({ id: id }).then(function () {
                    _this.addMessage(name + ' has been deleted.');
                    _this.$router.push('/clients/' + id + '/incidents');
                });
            }
        },
        init: function init(query) {
            var config = {
                params: {
                    page: query && query.page || 1
                }
            };

            this.fetch(config);
        }
    })
});

/***/ }),

/***/ 644:
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
            attrs: { url: "/clients/add", text: "Add Client" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("h1", [_vm._v("Clients")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "header-actions hidden-md hidden-lg mobile" },
        [
          _c("add-button", {
            attrs: { url: "/clients/add", text: "Add Client" }
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
            fetching: _vm.fetching,
            meta: _vm.meta,
            initialSortKey: "last_name"
          },
          scopedSlots: _vm._u([
            {
              key: "first_name",
              fn: function(props) {
                return [
                  _c(
                    "router-link",
                    { attrs: { to: "/clients/" + props.item.id } },
                    [_vm._v(_vm._s(props.item.first_name))]
                  )
                ]
              }
            },
            {
              key: "last_name",
              fn: function(props) {
                return [
                  _c(
                    "router-link",
                    { attrs: { to: "/clients/" + props.item.id } },
                    [_vm._v(_vm._s(props.item.last_name))]
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
                          attrs: { to: "/clients/" + props.item.id + "/edit" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-edit" }),
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
    require("vue-hot-reload-api")      .rerender("data-v-7766bd9e", module.exports)
  }
}

/***/ })

});