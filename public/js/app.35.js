webpackJsonp([35,83],{"3YFH":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.activity&&t.activity.service?i("div",[i("header",{staticClass:"content-header"},[i("div",{staticClass:"header-actions pull-right hidden-sm hidden-xs desktop"},[i("div",{staticClass:"btn-group pull-right"},[t._m(0),t._v(" "),i("ul",{staticClass:"dropdown-menu"},[i("li",{attrs:{role:"presentation"}},[i("router-link",{attrs:{to:t.activity.id+"/edit"}},[i("i",{staticClass:"fas fa-edit fa-fw"}),t._v(" Edit")])],1),t._v(" "),i("li",{attrs:{role:"presentation"}},[t.authUser.is_admin?i("a",{attrs:{href:"#delete"},on:{click:function(e){e.preventDefault(),t.confirmDelete()}}},[i("i",{staticClass:"fas fa-trash-alt fa-fw"}),t._v(" Delete")]):t._e()])])])]),t._v(" "),i("h1",[t._v(t._s(t.activity.service.name)+" on "+t._s(t._f("prettyDate")(t.activity.date)))]),t._v(" "),i("div",{staticClass:"header-actions hidden-md hidden-lg mobile"},[i("div",{staticClass:"btn-group"},[t._m(1),t._v(" "),i("ul",{staticClass:"dropdown-menu"},[i("li",{attrs:{role:"presentation"}},[i("router-link",{attrs:{to:t.activity.id+"/edit"}},[i("i",{staticClass:"fas fa-edit fa-fw"}),t._v(" Edit")])],1),t._v(" "),i("li",{attrs:{role:"presentation"}},[t.authUser.is_admin?i("a",{attrs:{href:"#delete"},on:{click:function(e){e.preventDefault(),t.confirmDelete()}}},[i("i",{staticClass:"fas fa-trash-alt fa-fw"}),t._v(" Delete")]):t._e()])])])])]),t._v(" "),i("div",{staticClass:"section"},[i("p",[t._v("\n                Advocate: "),i("b",[t._v(t._s(t.activity.advocate.first_name)+" "+t._s(t.activity.advocate.last_name))])]),t._v(" "),i("div",{staticClass:"lead"},[t.activity.service_provided?[i("p",[t._v("Client: "),t.client?i("span",[i("router-link",{attrs:{to:"/clients/"+t.client.id}},[t._v(t._s(t.client.full_name))])],1):t._e()]),t._v(" "),i("p",[t._v("\n                        "+t._s(t.activity.service.name)+" was provided from "+t._s(t._f("prettyDatetime")(t.activity.started_at))+" to "+t._s(t._f("prettyDatetime")(t.activity.ended_at))+"\n                    ")])]:t.whyServiceNotProvided?[i("p",[t._v("Client requested "+t._s(t.activity.service.name)+" on "+t._s(t._f("prettyDatetime")(t.activity.started_at))+", but the request was unable to be fulfilled for this reason: "+t._s(t.whyServiceNotProvided.name))])]:t._e()],2),t._v(" "),i("notes",{attrs:{params:t.noteParams,client_id:t.client.id,noteable_id:t.activity.id,noteable_type:t.activity.noteable_type}})],1)]):i("div",{staticClass:"lead section"},[i("i",{staticClass:"fa fa-refresh fa-spin"}),t._v(" Loading data\n    ")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-primary dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fa fa-ellipsis-h"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-primary dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fa fa-ellipsis-h"})])}]}},"3xKi":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),a=i.n(n),s=i("NYxO"),r=i("OQde"),o=i("fQ0y"),c=i("OgGL"),d=i("IM3Y"),l=i.n(d);e.default={name:"client-activity-show",mixins:[o.a,c.a],components:{Notes:l.a},data:function(){return{fetched:!1}},computed:a()({},Object(s.c)("notes",{notes:"paginated"}),Object(s.c)("services",{serviceById:"byId"}),Object(s.c)("notProvidedReasons",{whyServiceNotProvidedById:"byId"}),{service:function(){if(this.activity)return this.serviceById(this.activity.requested_service_id)},whyServiceNotProvided:function(){return this.activity&&this.activity.why_not_provided?this.whyServiceNotProvidedById(this.activity.why_not_provided):null},noteParams:function(){return!(!this.$route.params.activity_id||!this.activity.noteable_type)&&{params:{noteable_id:this.$route.params.activity_id,noteable_type:this.activity.noteable_type}}}}),created:function(){this.init()},watch:{activity:function(){if(Object(r.f)(this.activity)&&this.activity.client_id!=this.params.client_id)return this.$router.replace("/clients/"+this.activity.client_id+"/activities/"+this.activity.id)}},methods:a()({},Object(s.b)("activities",["destroy"]),Object(s.b)("notes",{fetchNotes:"fetch"}),{confirmDelete:function(){var t=this;confirm("Are you sure that you want to delete this activity?")&&this.destroy({id:this.activity.id}).then(function(){t.addMessage("Activity has been deleted.")})},init:function(){var t=this;this.fetchCurrentClient(),this.fetchCurrentActivity().then(function(){t.fetched=!0})}})}},IM3Y:function(t,e,i){var n=i("VU/8")(i("smZi"),i("vqbb"),!1,null,null,null);t.exports=n.exports},OgGL:function(t,e,i){"use strict";var n=i("Dd8w"),a=i.n(n),s=i("tP61"),r=i("UmUL");e.a=a()({},new r.a({name:"activity",storeName:"activities",model:s.a}))},UmUL:function(t,e,i){"use strict";var n=i("Dd8w"),a=i.n(n),s=i("bOdI"),r=i.n(s),o=i("Zrlr"),c=i.n(o),d=i("NYxO"),l=i("OQde"),u=function(t){return t.replace(/\w\S*/g,function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})},f=i("TFAV");e.a=function t(e){var i,n,s,o=e.name,h=e.storeName,v=e.model,_=void 0===v?f.a:v;c()(this,t),this.modelMixinOptions={name:o,storeName:h,model:_};var p=this;this.data=function(){var t;return t={},r()(t,p.modelMixinOptions.name,new p.modelMixinOptions.model),r()(t,"params",r()({},p.modelMixinOptions.name+"_id",null)),t},this.computed=a()({},Object(d.c)(h,(i={},r()(i,o+"ById","byId"),r()(i,"route"+u(o),"byRoute"),r()(i,"fetching"+u(o),"fetching"),i)),r()({},o+"Data",function(){return this["fetching"+u(o)],this["route"+u(o)]})),this.created=function(){this["set"+u(o)+"Id"]()},this.watch=(n={},r()(n,o+"Data",function(){this["reset"+p.modelMixinOptions.name](),this[p.modelMixinOptions.name+"Data"]&&this[""+p.modelMixinOptions.name].assign(this[p.modelMixinOptions.name+"Data"])}),r()(n,"this.$route.params."+o+"_id",function(){this["set"+u(o)+"Id"]()}),n),this.methods=a()({},Object(d.b)(h,r()({},"fetch"+u(o),"fetch")),(s={},r()(s,"set"+u(o)+"Id",function(t){t=t?Number(t):this.$route.params[o+"_id"]?Number(this.$route.params[o+"_id"]):null,Vue.set(this.params,o+"_id",t)}),r()(s,o+"IdExists",function(){return Object(l.f)(this.params[o+"_id"])&&null!==this.params[o+"_id"]}),r()(s,"fetchRoute"+u(o),function(){var t=this,e=Number(this.$route.params[o+"_id"]);return!!e&&this["fetch"+u(o)]({id:e,fetchId:"id:"+e}).then(function(e){return t["route"+u(o)+"Fetched"](),t["current"+u(o)+"Fetched"](),e}).catch(function(t){console.error(t)})}),r()(s,"fetchCurrent"+u(o),function(){return this["fetchRoute"+u(o)]()}),r()(s,"current"+u(o)+"Fetched",function(){}),r()(s,"route"+u(o)+"Fetched",function(){}),r()(s,o+"Fetched",function(){}),r()(s,"reset",function(){this.resetData()}),r()(s,"resetData",function(){this["reset"+o](),this.params[o+"_id"]=null}),r()(s,"reset"+o,function(){this[o]=new _}),s))}},WrdQ:function(t,e,i){var n=i("VU/8")(i("3xKi"),i("3YFH"),!1,null,null,null);t.exports=n.exports},bOdI:function(t,e,i){"use strict";e.__esModule=!0;var n,a=i("C4MV"),s=(n=a)&&n.__esModule?n:{default:n};e.default=function(t,e,i){return e in t?(0,s.default)(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}},fQ0y:function(t,e,i){"use strict";var n=i("Dd8w"),a=i.n(n),s=i("b+22"),r=i("UmUL");e.a=a()({},new r.a({name:"client",storeName:"clients",model:s.a}))},smZi:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),a=i.n(n),s=i("NYxO");e.default={name:"note-list",props:["params","client_id","noteable_type","noteable_id"],data:function(){return{note:"",processing:!1}},computed:a()({},Object(s.c)("notes",["paginated","fetching"]),{notes:function(){return this.paginated}}),created:function(){this.params&&this.fetch(this.params)},watch:{params:function(){this.params&&this.fetch(this.params)}},methods:a()({},Object(s.b)("notes",["create","fetch","destroy"]),{addNote:function(){var t=this;this.processing=!0;var e={data:{advocate_id:this.authUser.id,client_id:this.client_id,content:this.note}};this.noteable_id&&this.noteable_type&&(e.data.noteable_type=this.noteable_type,e.data.noteable_id=this.noteable_id),this.create(e).then(function(){t.processing=!1,t.resetData(),t.fetch(t.params)})},confirmDelete:function(t){var e=this;confirm("Are you sure that you want to delete the note?")&&this.destroy({id:t}).then(function(){e.addMessage("Note has been deleted.")})},resetData:function(){this.note=""}})}},tP61:function(t,e,i){"use strict";var n=i("Zx67"),a=i.n(n),s=i("Zrlr"),r=i.n(s),o=i("zwoO"),c=i.n(o),d=i("Pf15"),l=i.n(d),u=i("PJh5"),f=i.n(u),h=(i("OQde"),i("vXSK"),function(){var t=f()().startOf("hour").subtract(1,"h");f()(t).add(1,"h");return{advocate_id:null,client_id:null,incident_id:null,requested_service_id:null,service_provided:!0,why_not_provided:"",started_at:null,ended_at:null,duration:null,funding_source_id:null,state:"",city:"",client_age:null,note:""}}),v=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r()(this,e),c()(this,(e.__proto__||a()(e)).call(this,h(),t))}return l()(e,t),e}(i("TFAV").a);e.a=v},vXSK:function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s});var n=i("Dd8w"),a=(i.n(n),i("OQde"),"YYYY-MM-DD"),s=function(){return{first_name:"",last_name:"",email:"",password:"",password_confirmation:""}}},vqbb:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"notes box"},[i("div",{staticClass:"box-header"},[t._v("Notes "),t.fetching?i("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),t._v(" "),t.fetching?[t._m(0)]:t.notes.length?[i("div",{staticClass:"box-body box-comments"},t._l(t.notes,function(e){return i("div",{staticClass:"box-comment"},[i("span",{staticClass:"username"},[t._v("\n                    "+t._s(e.advocate.first_name)+" "+t._s(e.advocate.last_name)+"\n                    "),i("span",{staticClass:"text-muted"},[t._v("\n                         on "+t._s(t._f("prettyDatetime")(e.created_at))+"\n                    ")])]),t._v(" "),i("div",{staticClass:"pull-right"},[i("router-link",{staticClass:"btn btn-warning btn-xs",attrs:{to:"/clients/"+e.client_id+"/notes/"+e.id+"/edit?from="+t.$route.path}},[i("i",{staticClass:"fas fa-edit fa-fw"}),t._v(" Edit")]),t._v(" "),t.authUser.is_admin?i("button",{staticClass:"btn btn-danger btn-xs",attrs:{href:"#delete"},on:{click:function(i){i.preventDefault(),t.confirmDelete(e.id)}}},[t._v("Delete")]):t._e()],1),t._v(" "),i("div",{domProps:{innerHTML:t._s(t.$options.filters.markdown(e.content))}})])}))]:t._e(),t._v(" "),t.client_id&&t.noteable_type&&t.noteable_id?i("div",{staticClass:"box-footer"},[i("form",{on:{submit:function(e){return e.preventDefault(),t.addNote(e)}}},[i("div",{staticClass:"form-group"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note,expression:"note"}],staticClass:"form-control input-sm",attrs:{placeholder:"Add a note"},domProps:{value:t.note},on:{input:function(e){e.target.composing||(t.note=e.target.value)}}})]),t._v(" "),i("button",{staticClass:"btn btn-success btn-sm",attrs:{disabled:t.processing}},[t._v("Add note"),t.processing?[i("i",{staticClass:"fa fa-refresh fa-spin"})]:t._e()],2)])]):t._e()],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-body"},[e("div",{staticClass:"lead"},[this._v("Loading notes")])])}]}}});