webpackJsonp([77],{"1Wog":function(t,e,n){var i=n("VU/8")(n("50IA"),n("e+pp"),!1,null,null,null);t.exports=i.exports},"50IA":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),s=n.n(i),a=n("NYxO");e.default={name:"dependents-index",data:function(){return{fields:["client",{name:"name",title:"Name"},{name:"age",title:"Age"},{name:"actions",dataClass:"fit-content",titleClass:"fit-content",sortable:!1}]}},computed:s()({},Object(a.c)("dependents",{byId:"byId",dependents:"paginated",fetching:"fetching",meta:"meta"})),created:function(){this.init(this.$route.query)},watch:{$route:function(){this.init(this.$route.query)}},methods:s()({},Object(a.b)("dependents",["destroy","fetch"]),{confirmDelete:function(t){var e=this;if(confirm("Are you sure that you want to delete this incident?")){var n=this.byId(t).client_id;this.destroy({id:t}).then(function(){e.addMessage("This incident has been deleted."),e.fetchClient({id:n})})}},init:function(t){var e={params:s()({},this.params,{page:t&&t.page||1})};this.fetch(e)}})}},"e+pp":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"section"},[t.fetching?n("div",{staticClass:"lead"},[n("i",{staticClass:"fa fa-refresh fa-spin"}),t._v(" Loading data\n        ")]):t.dependents.length?n("div",[n("grid",{attrs:{fields:t.fields,data:t.dependents,fetching:t.fetching,meta:t.meta},scopedSlots:t._u([{key:"client",fn:function(t){return[n("client-link",{attrs:{client:t.item.client}})]}},{key:"name",fn:function(e){return[n("router-link",{attrs:{to:"/dependents/"+e.item.id}},[t._v(t._s(e.item.name))])]}},{key:"actions",fn:function(e){return[n("div",{staticClass:"table-button-container"},[n("router-link",{staticClass:"btn btn-warning btn-xs",attrs:{to:"/dependents/"+e.item.id+"/edit"}},[n("i",{staticClass:"fa fa-edit"}),t._v(" Edit")]),t._v(" "),t.authUser.is_admin?n("button",{staticClass:"btn btn-danger btn-xs",on:{click:function(n){t.confirmDelete(e.item.id)}}},[n("i",{staticClass:"fa fa-remove"}),t._v(" Delete")]):t._e(),t._v("  \n                    ")],1)]}}])})],1):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"content-header"},[e("h1",[this._v("Dependents")])])}]}}});