webpackJsonp([41],{"9OIq":function(t,e,n){"use strict";var i=n("Dd8w"),a=n.n(i),s=n("jtR9"),c=n("UmUL");e.a=a()({},new c.a({name:"incident",storeName:"incidents",model:s.a}))},UmUL:function(t,e,n){"use strict";var i=n("Dd8w"),a=n.n(i),s=n("bOdI"),c=n.n(s),o=n("Zrlr"),r=n.n(o),u=n("NYxO"),d=n("OQde"),f=function(t){return t.replace(/\w\S*/g,function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})},l=n("TFAV");e.a=function t(e){var n,i,s,o,h=e.name,m=e.storeName,p=e.model,v=void 0===p?l.a:p;r()(this,t),this.modelMixinOptions={name:h,storeName:m,model:v};var _=this;this.data=function(){var t;return t={},c()(t,_.modelMixinOptions.name,new _.modelMixinOptions.model),c()(t,"params",c()({},_.modelMixinOptions.name+"_id",null)),t},this.computed=a()({},Object(u.c)(m,(n={},c()(n,h+"ById","byId"),c()(n,"route"+f(h),"byRoute"),c()(n,"fetching"+f(h),"fetching"),n)),(i={},c()(i,"routeHas"+f(h)+"Model",function(){return this.$route.params&&this.$route.params[h+"_id"]||!1}),c()(i,h+"Data",function(){return this["fetching"+f(h)],this["routeHas"+f(h)+"Model"]?this["route"+f(h)]:this[h+"ById"](this.params[h+"_id"])}),i)),this.created=function(){this["set"+f(h)+"Id"]()},this.watch=(s={},c()(s,h+"Data",{deep:!0,handler:function(){this["reset"+_.modelMixinOptions.name](),this[_.modelMixinOptions.name+"Data"]&&this[""+_.modelMixinOptions.name].assign(this[_.modelMixinOptions.name+"Data"])}}),c()(s,"$route.params."+h+"_id",function(){this["set"+f(h)+"Id"]()}),c()(s,"params."+h+"_id",function(t){null!==t&&this["fetchCurrent"+f(h)]()}),s),this.methods=a()({},Object(u.b)(m,c()({},"fetch"+f(h)+"Data","fetch")),(o={},c()(o,"set"+f(h)+"Id",function(t){t=t?Number(t):this.$route.params[h+"_id"]?Number(this.$route.params[h+"_id"]):null,Vue.set(this.params,h+"_id",t)}),c()(o,h+"IdExists",function(){return Object(d.f)(this.params[h+"_id"])&&null!==this.params[h+"_id"]}),c()(o,"fetch"+f(h),function(t){var e=this;this["fetch"+f(h)+"Data"](t).then(function(t){return e[h+"Fetched"](t),t}).catch(function(t){console.error(t)})}),c()(o,"fetchRoute"+f(h),function(){var t=this,e=Number(this.$route.params[h+"_id"]);return!!e&&this["fetch"+f(h)+"Data"]({id:e,fetchId:"id:"+e}).then(function(e){return t["route"+f(h)+"Fetched"](),t["current"+f(h)+"Fetched"](),e}).catch(function(t){console.error(t)})}),c()(o,"fetchCurrent"+f(h),function(){var t=this,e=Number(this.params[h+"_id"]);return!!e&&this["fetch"+f(h)+"Data"]({id:e,fetchId:"id:"+e}).then(function(e){return t["route"+f(h)+"Fetched"](),t["current"+f(h)+"Fetched"](),e}).catch(function(t){console.error(t)})}),c()(o,"current"+f(h)+"Fetched",function(){}),c()(o,"route"+f(h)+"Fetched",function(){}),c()(o,h+"Fetched",function(){}),c()(o,"reset",function(){this.resetData()}),c()(o,"resetData",function(){this["reset"+h](),this.params[h+"_id"]=null}),c()(o,"reset"+h,function(){this[h]=new v}),o))}},VaaI:function(t,e,n){var i=n("VU/8")(n("gv0I"),n("c25v"),!1,null,null,null);t.exports=i.exports},c25v:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.fetching?n("div",{staticClass:"lead"},[n("i",{staticClass:"fa fa-refresh fa-spin"}),t._v(" Loading data\n    ")]):!t.fetching&&t.outcomes.length?n("div",[n("grid",{attrs:{data:t.outcomes,fields:t.fields,fetching:t.fetching,meta:t.meta},scopedSlots:t._u([{key:"description",fn:function(e){return[n("router-link",{attrs:{to:"/clients/"+t.client.id+"/outcomes/"+e.item.id}},[t._v(t._s(e.item.description))])]}},{key:"actions",fn:function(e){return[n("div",{staticClass:"table-button-container"},[n("router-link",{staticClass:"btn btn-warning btn-xs",attrs:{to:"/clients/"+e.item.client_id+"/outcomes/"+e.item.id+"/edit"}},[n("i",{staticClass:"fas fa-edit fa-fw"}),t._v(" Edit")]),t._v(" "),t.authUser.is_admin?n("button",{staticClass:"btn btn-danger btn-xs",on:{click:function(n){t.confirmDelete(e.item.id)}}},[n("i",{staticClass:"fas fa-trash-alt fa-fw"}),t._v(" Delete")]):t._e(),t._v("  \n                ")],1)]}},{key:"completed",fn:function(e){return[1===e.item.completed?n("i",{staticClass:"fas fa-check-circle fa-fw text-success"}):t._e()]}},{key:"date",fn:function(e){return[t._v("\n                "+t._s(t._f("prettyDate")(e.item.date))+"\n            ")]}}])})],1):n("div",{staticClass:"lead"},[n("p",[t._v("There are no outcomes for this client.")]),t._v(" "),n("p",[n("router-link",{staticClass:"btn btn-lg btn-primary",attrs:{to:"outcomes/add"}},[t._v("Add Outcome")])],1),t._v(" "),n("p",[n("i",{staticClass:"fa fa-info-circle"}),t._v(" Outcomes can be related to one or more activities or standalone. If you wish to associate an outcome with an activity, visit the "),n("router-link",{attrs:{to:"activities"}},[t._v("activities")]),t._v(" page and select the activity or activities, then click the button to add an Outcome.")],1)])])},staticRenderFns:[]}},fQ0y:function(t,e,n){"use strict";var i=n("Dd8w"),a=n.n(i),s=n("b+22"),c=n("UmUL");e.a=a()({},new c.a({name:"client",storeName:"clients",model:s.a}))},gv0I:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("bOdI"),a=n.n(i),s=n("Dd8w"),c=n.n(s),o=n("NYxO"),r=n("fQ0y"),u=n("9OIq");e.default={name:"client-outcomes",mixins:[r.a,u.a],data:function(){return{fields:[{name:"description",title:"Outcome"},"date","completed",{name:"actions",dataClass:"fit-content",titleClass:"fit-content",sortable:!1}]}},computed:c()({},Object(o.c)("clientOutcomes",{byId:"byId",fetching:"fetching",outcomes:"paginated",meta:"meta"})),created:function(){this.init(this.$route.query)},beforeRouteUpdate:function(t,e,n){this.init(t.query),n()},watch:a()({},"params.client_id",function(){this.init(this.$route.query)}),methods:c()({},Object(o.b)("clientOutcomes",["destroy","fetch"]),Object(o.b)("outcomes",["setFilters"]),{confirmDelete:function(t){var e=this;confirm("Are you sure that you want to delete this outcome?")&&this.destroy({id:t}).then(function(){e.addMessage("Outcome has been deleted.")})},init:function(t){var e={params:{client_id:this.params.client_id,page:t&&t.page||1}};this.fetch(e)}})}},jtR9:function(t,e,n){"use strict";var i=n("Zx67"),a=n.n(i),s=n("Zrlr"),c=n.n(s),o=n("zwoO"),r=n.n(o),u=n("Pf15"),d=n.n(u),f=n("OQde"),l=n("vXSK"),h=n("TFAV"),m=(n("0aVa"),function(){return{date:Object(f.h)(l.a),client_id:null,advocate_id:null,incident_type_id:null,state:"",city:"",note:""}}),p=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c()(this,e),r()(this,(e.__proto__||a()(e)).call(this,m(),t))}return d()(e,t),e}(h.a);e.a=p},vXSK:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s});var i=n("Dd8w"),a=(n.n(i),n("OQde"),"YYYY-MM-DD"),s=function(){return{first_name:"",last_name:"",email:"",password:"",password_confirmation:""}}}});