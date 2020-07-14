webpackJsonp([83],{

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(42)
/* script */
var __vue_script__ = __webpack_require__(535)
/* template */
var __vue_template__ = __webpack_require__(536)
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
Component.options.__file = "resources/assets/js/components/notes/List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-135a32a3", Component.options)
  } else {
    hotAPI.reload("data-v-135a32a3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 535:
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



/* harmony default export */ __webpack_exports__["default"] = ({

    name: 'note-list',

    /**
     * Note (ha): When using this, only apply the necessary
     * filter below to this component.
     */
    props: ['params', 'client_id', 'noteable_type', 'noteable_id'],

    data: function data() {
        return {
            note: '',
            processing: false
        };
    },


    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('notes', ['paginated', 'fetching']), {
        notes: function notes() {
            return this.paginated;
        }
    }),

    created: function created() {
        if (this.params) {
            this.fetch(this.params);
        }
    },


    watch: {
        params: function params() {
            if (this.params) {
                this.fetch(this.params);
            }
        }
    },

    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('notes', ['create', 'fetch', 'destroy']), {
        addNote: function addNote() {
            var _this = this;

            this.processing = true;
            var data = {
                data: {
                    advocate_id: this.authUser.id,
                    client_id: this.client_id,
                    content: this.note
                }
            };

            if (this.noteable_id && this.noteable_type) {
                data.data.noteable_type = this.noteable_type;
                data.data.noteable_id = this.noteable_id;
            }

            this.create(data).then(function () {
                _this.processing = false;
                _this.resetData();
                _this.fetch(_this.params);
            });
        },
        confirmDelete: function confirmDelete(id) {
            var _this2 = this;

            var c = confirm('Are you sure that you want to delete the note?');

            if (c) {
                this.destroy({ id: id }).then(function () {
                    _this2.addMessage('Note has been deleted.');
                });
            }
        },
        resetData: function resetData() {
            this.note = '';
        }
    })
});

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "notes box" },
    [
      _c("div", { staticClass: "box-header" }, [
        _vm._v("Notes "),
        _vm.fetching
          ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.fetching
        ? [_vm._m(0)]
        : _vm.notes.length
        ? [
            _c(
              "div",
              { staticClass: "box-body box-comments" },
              _vm._l(_vm.notes, function(note) {
                return _c("div", { staticClass: "box-comment" }, [
                  _c("span", { staticClass: "username" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(note.advocate.first_name) +
                        " " +
                        _vm._s(note.advocate.last_name) +
                        "\n                    "
                    ),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v(
                        "\n                         on " +
                          _vm._s(_vm._f("prettyDatetime")(note.created_at)) +
                          "\n                    "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "pull-right" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-warning btn-xs",
                          attrs: {
                            to:
                              "/clients/" +
                              note.client_id +
                              "/notes/" +
                              note.id +
                              "/edit?from=" +
                              _vm.$route.path
                          }
                        },
                        [
                          _c("i", { staticClass: "fas fa-edit fa-fw" }),
                          _vm._v(" Edit")
                        ]
                      ),
                      _vm._v(" "),
                      _vm.authUser.is_admin
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-danger btn-xs",
                              attrs: { href: "#delete" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.confirmDelete(note.id)
                                }
                              }
                            },
                            [_vm._v("Delete")]
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", {
                    domProps: {
                      innerHTML: _vm._s(
                        _vm.$options.filters.markdown(note.content)
                      )
                    }
                  })
                ])
              }),
              0
            )
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.client_id && _vm.noteable_type && _vm.noteable_id
        ? _c("div", { staticClass: "box-footer" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.addNote($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.note,
                        expression: "note"
                      }
                    ],
                    staticClass: "form-control input-sm",
                    attrs: { placeholder: "Add a note" },
                    domProps: { value: _vm.note },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.note = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success btn-sm",
                    attrs: { disabled: _vm.processing }
                  },
                  [
                    _vm._v("Add note"),
                    _vm.processing
                      ? [_c("i", { staticClass: "fa fa-refresh fa-spin" })]
                      : _vm._e()
                  ],
                  2
                )
              ]
            )
          ])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-body" }, [
      _c("div", { staticClass: "lead" }, [_vm._v("Loading notes")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-135a32a3", module.exports)
  }
}

/***/ })

});