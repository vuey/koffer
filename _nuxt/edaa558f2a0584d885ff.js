(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{247:function(t,n,e){var content=e(255);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(51).default)("0e96e6e6",content,!0,{sourceMap:!1})},248:function(t,n,e){var content=e(257);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(51).default)("3c768ded",content,!0,{sourceMap:!1})},249:function(t,n,e){var content=e(261);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(51).default)("2da5cec2",content,!0,{sourceMap:!1})},250:function(t,n,e){var content=e(263);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(51).default)("6759f5ab",content,!0,{sourceMap:!1})},254:function(t,n,e){"use strict";var r=e(247);e.n(r).a},255:function(t,n,e){(n=e(50)(!1)).push([t.i,".progress-bar{height:20px;background-color:#0089f1;transition:width 1s}",""]),t.exports=n},256:function(t,n,e){"use strict";var r=e(248);e.n(r).a},257:function(t,n,e){(n=e(50)(!1)).push([t.i,".page-section{width:100%;height:100vh;display:flex;align-items:center;justify-items:center;justify-content:center;flex-direction:column;position:absolute}",""]),t.exports=n},258:function(t,n,e){"use strict";e(259)("link",(function(t){return function(n){return t(this,"a","href",n)}}))},259:function(t,n,e){var r=e(6),o=e(9),c=e(22),l=/"/g,f=function(t,n,e,r){var o=String(c(t)),f="<"+n;return""!==e&&(f+=" "+e+'="'+String(r).replace(l,"&quot;")+'"'),f+">"+o+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(f),r(r.P+r.F*o((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3})),"String",e)}},260:function(t,n,e){"use strict";var r=e(249);e.n(r).a},261:function(t,n,e){(n=e(50)(!1)).push([t.i,".link-container{background-color:#f8f8fc;display:flex;justify-content:center;align-items:center;width:550px;padding:20px;margin-bottom:20px;box-shadow:0 3px 8px -4px rgba(0,0,0,.75)}.link-container button,.link-container p{margin:0}.link-container p{flex:1 0;margin-left:20px;margin-right:20px}",""]),t.exports=n},262:function(t,n,e){"use strict";var r=e(250);e.n(r).a},263:function(t,n,e){(n=e(50)(!1)).push([t.i,".page-progress{position:absolute}.page-section-container{width:100vw;height:100vh;overflow:hidden;position:relative}.section-enter-active{-webkit-animation:slideIn 1s;animation:slideIn 1s}.section-leave-active{-webkit-animation:slideOut 1s;animation:slideOut 1s}@-webkit-keyframes slideIn{0%{transform:translateX(30vw);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes slideIn{0%{transform:translateX(30vw);opacity:0}to{transform:translateX(0);opacity:1}}@-webkit-keyframes slideOut{0%{transform:translateX(0);opacity:1}to{transform:translateX(-30vw);opacity:0}}@keyframes slideOut{0%{transform:translateX(0);opacity:1}to{transform:translateX(-30vw);opacity:0}}",""]),t.exports=n},264:function(t,n,e){"use strict";e.r(n);e(147);var r={props:{amount:{type:Number,default:.5}},computed:{width:function(){return"width: ".concat(100*this.amount,"%")}}},o=(e(254),e(31)),c=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"progress-bar",style:this.width})}),[],!1,null,null,null).exports,l=(e(256),Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"page-section"},[this._t("default")],2)}),[],!1,null,null,null).exports),f=(e(258),e(39),e(5)),v={props:{link:{type:String,required:!0}},methods:{copyLink:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$copyText(t.link);case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.error(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))()}}},d=(e(260),{components:{ProgressBar:c,PageSection:l,LinkContainer:Object(o.a)(v,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"link-container"},[e("i",{staticClass:"material-icons"},[t._v("link")]),t._v(" "),e("p",[t._v("\n    "+t._s(t.link)+"\n  ")]),t._v(" "),e("button",{staticClass:"text-button",on:{click:t.copyLink}},[t._v("\n    Copy link\n  ")])])}),[],!1,null,null,null).exports},data:function(){return{step:1}},computed:{progress:function(){return this.step/3}}}),h=(e(262),Object(o.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page-section-container"},[e("progress-bar",{staticClass:"page-progress",attrs:{amount:t.progress}}),t._v(" "),e("transition",{attrs:{name:"section",mode:"out-in"}},[1===t.step?e("page-section",[e("h1",[t._v("\n        Signers Koffer\n      ")]),t._v(" "),e("p",{staticClass:"lead"},[t._v("\n        👋 Start right now, but first of all: What's your name?\n      ")]),t._v(" "),e("input"),t._v(" "),e("button",{staticClass:"button",on:{click:function(n){t.step++}}},[t._v("Submit")])]):t._e()],1),t._v(" "),e("transition",{attrs:{name:"section",mode:"out-in"}},[2===t.step?e("page-section",[e("h1",[t._v("\n        Name this session\n      ")]),t._v(" "),e("p",[t._v("\n        ✍️ Let the participants know what they are working on.\n      ")]),t._v(" "),e("input"),t._v(" "),e("button",{staticClass:"button",on:{click:function(n){t.step++}}},[t._v("Almost complete")])]):t._e()],1),t._v(" "),e("transition",{attrs:{name:"section",mode:"out-in"}},[3===t.step?e("page-section",[e("h1",[t._v("Invite people")]),t._v(" "),e("p",[t._v("\n        🚀 Create your crew\n      ")]),t._v(" "),e("div",[e("h4",[t._v("Send link to invite more administrators")]),t._v(" "),e("p",[t._v("\n          Administrators host and moderate the session.\n        ")]),t._v(" "),e("link-container",{attrs:{link:"https://signers-koffer.github.io/koffer/board/admin"}})],1),t._v(" "),e("div",[e("h4",[t._v("Send link to invite participants")]),t._v(" "),e("link-container",{attrs:{link:"https://signers-koffer.github.io/koffer/board/user"}})],1)]):t._e()],1)],1)}),[],!1,null,null,null));n.default=h.exports}}]);