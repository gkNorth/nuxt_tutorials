(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{250:function(t,e,n){var content=n(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(130).default)("3881589e",content,!0,{sourceMap:!1})},252:function(t,e,n){"use strict";n(250)},253:function(t,e,n){var r=n(129)(!1);r.push([t.i,".main[data-v-044ec0aa]{width:960px;margin:0 auto}.title[data-v-044ec0aa]{margin-bottom:20px}.publishedAt[data-v-044ec0aa]{margin-bottom:40px}.post[data-v-044ec0aa] >h1{font-size:30px;font-weight:700;margin:40px 0 20px;background-color:#eee;padding:10px 20px;border-radius:5px}.post[data-v-044ec0aa] >h2{font-size:24px;font-weight:700;margin:40px 0 16px;border-bottom:1px solid #ddd}.post[data-v-044ec0aa] >p{line-height:1.8;letter-spacing:.2px}.post[data-v-044ec0aa] >ol{list-style-type:decimal;list-style-position:inside}",""]),t.exports=r},257:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(58),n(73),n(72)),c=n.n(o),d={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,e.next=3,c.a.get("".concat("https://gunbase.microcms.io/api/v1/blog","/").concat(n.slug),{headers:{"X-MICROCMS-API-KEY":"86d518d6-1de7-423f-aca2-8bde6f74e3cd"}});case 3:return r=e.sent,data=r.data,e.abrupt("return",data);case 6:case"end":return e.stop()}}),e)})))()}},l=(n(252),n(45)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main"},[n("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"publishedAt"},[t._v(t._s(t.createdAt))]),t._v(" "),n("div",{staticClass:"post",domProps:{innerHTML:t._s(t.content)}})])}),[],!1,null,"044ec0aa",null);e.default=component.exports}}]);