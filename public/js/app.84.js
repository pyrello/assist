webpackJsonp([84],{"71cn":function(e,t,n){var l=n("VU/8")(n("r/2Y"),n("oUie"),!1,null,null,null);e.exports=l.exports},oUie:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("selectize",{attrs:{all:e.allExceptExcluded,selected:e.selected,label:e.label},on:{"update:selected":[function(t){e.selected=t},e.select]}})},staticRenderFns:[]}},"r/2Y":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={computed:{allExceptExcluded:function(){var e=this;return this.options.filter(function(t){return e.exclude.indexOf(t.value)<0})}},data:function(){return{options:[{name:"Age",value:"age"},{name:"Ethnicity",value:"ethnicity"},{name:"Gender",value:"gender"},{name:"Services Provided",value:"services"},{name:"Victim Types",value:"victimTypes",nameField:"description"}]}},methods:{select:function(e){void 0===e&&(e=this.selected),this.$emit("update:selected",e)}},props:{exclude:{type:Array,default:function(){return[]}},label:String,selected:Array|String}}}});