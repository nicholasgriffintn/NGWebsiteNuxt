(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{366:function(t,e,r){var map={"./5c7af91ae6bdacc5ee62ecfe.md":245,"./5c7be6e2a1e5fbe51cd94950.md":246,"./5c7c00ffa1e5fbe51cd94951.md":247,"./5ce13a901c9d4400004275bd.md":248,"./5ce1adde1c9d4400007337c6.md":249,"./5ce1f1631c9d440000cbc59c.md":250,"./seperating-my-app-from-the-server-with-nuxt.md":251};function n(t){return Promise.resolve().then(function(){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}var n=map[t];return r(n)})}n.keys=function(){return Object.keys(map)},n.id=366,t.exports=n},368:function(t,e,r){var content=r(623);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("d8488408",content,!0,{sourceMap:!1})},622:function(t,e,r){"use strict";var n=r(368);r.n(n).a},623:function(t,e,r){(t.exports=r(59)(!1)).push([t.i,".single-page .App-header{height:auto!important;padding-top:0!important;position:relative}.single-page .App-content{top:0!important;padding:1rem;text-align:left;min-height:150px;width:calc(100% - 2rem)}img.post-image{width:100%;height:auto}.post-content-wrap{max-width:780px;width:calc(100% - 2rem);margin:auto;padding:1rem}.post-buttons-wrapper .button{background:#fff;font-size:.7rem;opacity:1;border-radius:0;padding:0;cursor:pointer;color:#000;margin:0;line-height:.7rem}.post-buttons-wrapper{margin-top:.5rem}@media (max-width:780px){.post-header-titles{margin-top:0!important}}",""])},636:function(t,e,r){"use strict";r.r(e);r(32);var n=r(6),o=r(370),c=r(244),d=r(371)({html:!0,langPrefix:"",typographer:!0,highlight:function(t,e){if(e&&o.getLanguage(e))try{return o.highlight(e,t).value}catch(t){}return""}}),l={asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var n,o,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,t.next=3,r(366)("./".concat(n.year,"/").concat(n.month,"/").concat(n.post,".md"));case 3:return o=t.sent,l=c(o.default),t.abrupt("return",{attributes:l.attributes,content:d.render(l.body)});case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),head:function(){return{title:this.attributes.title+" | Nicholas Griffin",meta:[{hid:"description",name:"description",content:this.attributes.description}]}}},m=(r(622),r(16)),component=Object(m.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{key:t.$route.params.post},[r("div",{staticClass:"single-page"},[r("div",{staticClass:"header-single-image-full"},[r("img",{attrs:{src:t.attributes.header,alt:t.attributes.title,loading:"lazy"}})]),t._v(" "),r("div",{staticClass:"App-content"},[r("div",{staticClass:"ui container"},[r("div",{staticClass:"post-header"},[r("div",{staticClass:"post-header-titles"},[r("h1",{staticClass:"animated bounceInDown",attrs:{id:"single-title"}},[t._v(t._s(t.attributes.title))]),t._v(" "),r("small",[t._v("\n                Posted "+t._s(t.attributes.ctime.getDate()+"-"+(t.attributes.ctime.getMonth()+1)+"-"+t.attributes.ctime.getFullYear())+"\n            ")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"post-buttons-wrapper"})])]),t._v(" "),r("div",{staticClass:"post-content-wrap",domProps:{innerHTML:t._s(t.content)}})])])]),t._v(" "),r("link",{attrs:{rel:"stylesheet",href:"/css/dracula.min.css"}})])},[],!1,null,null,null);e.default=component.exports}}]);