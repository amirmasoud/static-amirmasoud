(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{251:function(t,e,r){var content=r(254);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("5019b1c4",content,!0,{sourceMap:!1})},252:function(t,e,r){"use strict";r.r(e);var l=r(27),component=Object(l.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"px-2 py-1 rounded-md text-xs uppercase bg-gray-100 text-gray-400 border-gray-100 hover:bg-blue-100 hover:text-blue-400 hover:border-blue-100 shadow-xs border"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},253:function(t,e,r){"use strict";r(251)},254:function(t,e,r){(e=r(65)(!1)).push([t.i,"@-webkit-keyframes hand-shake-data-v-4c5e6c0b{0%{transform:rotate(0);transform-origin:60% 75%}to{transform:rotate(-45deg);transform-origin:60% 75%}}@keyframes hand-shake-data-v-4c5e6c0b{0%{transform:rotate(0);transform-origin:60% 75%}to{transform:rotate(-45deg);transform-origin:60% 75%}}.hand-shake[data-v-4c5e6c0b]{-webkit-animation:hand-shake-data-v-4c5e6c0b .7s ease-in-out infinite alternate both;animation:hand-shake-data-v-4c5e6c0b .7s ease-in-out infinite alternate both}",""]),t.exports=e},255:function(t,e,r){t.exports=function(){"use strict";var t=function(t){if(!t)throw new Error("No config object has been provided.");"boolean"!=typeof t.useTransform&&(t.useTransform=!0),"number"!=typeof t.gutter&&(t.gutter=25),t.container||e("container"),t.items||t.static||e("items or static")},e=function(t){throw new Error("Missing property '"+t+"' in MagicGrid config")},r=function(e){t(e),e.container instanceof HTMLElement?(this.container=e.container,this.containerClass=e.container.className):(this.containerClass=e.container,this.container=document.querySelector(e.container)),this.items=this.container.children,this.static=e.static||!1,this.size=e.items,this.gutter=e.gutter,this.maxColumns=e.maxColumns||!1,this.useMin=e.useMin||!1,this.useTransform=e.useTransform,this.animate=e.animate||!1,this.started=!1,this.init()};return r.prototype.init=function(){if(this.ready()&&!this.started){this.container.style.position="relative";for(var t=0;t<this.items.length;t++){var e=this.items[t].style;e.position="absolute",this.animate&&(e.transition=(this.useTransform?"transform":"top, left")+" 0.2s ease")}this.started=!0}},r.prototype.colWidth=function(){return this.items[0].getBoundingClientRect().width+this.gutter},r.prototype.setup=function(){var t=this.container.getBoundingClientRect().width,e=this.colWidth(),i=Math.floor(t/e)||1,r=[];this.maxColumns&&i>this.maxColumns&&(i=this.maxColumns);for(var s=0;s<i;s++)r[s]={height:0,index:s};return{cols:r,wSpace:t-i*e+this.gutter}},r.prototype.nextCol=function(t,e){return this.useMin?function(t){var e=t[0];for(var i of t)i.height<e.height&&(e=i);return e}(t):t[e%t.length]},r.prototype.positionItems=function(){var t=this.setup(),e=t.cols,i=t.wSpace,r=0,s=this.colWidth();i=Math.floor(i/2);for(var l=0;l<this.items.length;l++){var n=this.nextCol(e,l),a=this.items[l],o=n.height?this.gutter:0,c=n.index*s+i+"px",u=n.height+o+"px";this.useTransform?a.style.transform="translate("+c+", "+u+")":(a.style.top=u,a.style.left=c),n.height+=a.getBoundingClientRect().height+o,n.height>r&&(r=n.height)}this.container.style.height=r+"px"},r.prototype.ready=function(){return!!this.static||this.items.length>=this.size},r.prototype.getReady=function(){var t=this,e=setInterval((function(){t.container=document.querySelector(t.containerClass),t.items=t.container.children,t.ready()&&(clearInterval(e),t.init(),t.listen())}),100)},r.prototype.listen=function(){var t,e=this;this.ready()?(window.addEventListener("resize",(function(){t||(t=setTimeout((function(){e.positionItems(),t=null}),200))})),this.positionItems()):this.getReady()},r}()},266:function(t,e,r){"use strict";r.r(e);r(28);var l=r(5),n={asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("about").limit(5).fetch();case 3:return l=e.sent,e.abrupt("return",{articles:l});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{articles:[]}}},o=r(27),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container mx-auto mt-64 px-4 sm:px-16",attrs:{id:"about"}},[r("h1",{staticClass:"text-gray-900 font-bold text-3xl"},[t._v("About")]),t._v(" "),r("span",{staticClass:"text-blue-500"},[t._v("______")]),t._v(" "),r("ul",{staticClass:"rounded-3xl mt-20"},[r("li",[r("article",[r("div",{staticClass:"grid md:grid-cols-8 xl:grid-cols-9 items-start relative p-3 sm:p-5 xl:p-6 overflow-hidden"},[r("h3",{staticClass:"font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0"},[t._v("\n            Ph.D., Computer Engineering, Artificial Intelligence\n          ")]),t._v(" "),r("time",{staticClass:"md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0",attrs:{datetime:"2020-11-18T17:45:00.000Z"}},[r("svg",{staticClass:"w-3 h-3 mr-6 overflow-visible text-green-400",attrs:{viewBox:"0 0 12 12"}},[r("circle",{attrs:{cx:"6",cy:"6",r:"6",fill:"currentColor"}}),t._v(" "),r("circle",{attrs:{cx:"6",cy:"6",r:"11",fill:"none",stroke:"currentColor","stroke-width":"2"}}),t._v(" "),r("path",{staticClass:"text-gray-200",attrs:{d:"M 6 18 V 500",fill:"none","stroke-width":"2",stroke:"currentColor"}})]),t._v("2021")]),t._v(" "),r("div",{staticClass:"md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0"},[t._v("\n            ...\n          ")])])])]),t._v(" "),r("li",[r("article",[r("div",{staticClass:"grid md:grid-cols-8 xl:grid-cols-9 items-start relative p-3 sm:p-5 xl:p-6 overflow-hidden"},[r("h3",{staticClass:"font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0"},[t._v("\n            Full-stack developer\n          ")]),t._v(" "),r("time",{staticClass:"md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0",attrs:{datetime:"2020-10-07T13:00:00.000Z"}},[r("svg",{staticClass:"w-3 h-3 mr-6 overflow-visible text-gray-300",attrs:{viewBox:"0 0 12 12"}},[r("circle",{attrs:{cx:"6",cy:"6",r:"6",fill:"currentColor"}}),t._v(" "),r("path",{staticClass:"text-gray-200",attrs:{d:"M 6 -6 V -30",fill:"none","stroke-width":"2",stroke:"currentColor"}}),t._v(" "),r("path",{staticClass:"text-gray-200",attrs:{d:"M 6 18 V 500",fill:"none","stroke-width":"2",stroke:"currentColor"}})]),t._v("Oct 2016 ― Jun 2017\n          ")]),t._v(" "),t._m(0)])])]),t._v(" "),r("li",[r("article",[r("div",{staticClass:"grid md:grid-cols-8 xl:grid-cols-9 items-start relative p-3 sm:p-5 xl:p-6 overflow-hidden"},[r("h3",{staticClass:"font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0"},[t._v("\n            Contract developer\n          ")]),t._v(" "),r("time",{staticClass:"md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0",attrs:{datetime:"2020-10-07T13:00:00.000Z"}},[r("svg",{staticClass:"w-3 h-3 mr-6 overflow-visible text-gray-300",attrs:{viewBox:"0 0 12 12"}},[r("circle",{attrs:{cx:"6",cy:"6",r:"6",fill:"currentColor"}}),t._v(" "),r("path",{staticClass:"text-gray-200",attrs:{d:"M 6 -6 V -30",fill:"none","stroke-width":"2",stroke:"currentColor"}}),t._v(" "),r("path",{staticClass:"text-gray-200",attrs:{d:"M 6 18 V 500",fill:"none","stroke-width":"2",stroke:"currentColor"}})]),t._v("Oct 2016 ― Jun 2017\n          ")]),t._v(" "),t._m(1)])])]),t._v(" "),r("li",[r("article",[r("div",{staticClass:"grid md:grid-cols-8 xl:grid-cols-9 items-start relative p-3 sm:p-5 xl:p-6 overflow-hidden"},[r("h3",{staticClass:"font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0"},[t._v("\n            Drupal developer\n          ")]),t._v(" "),r("time",{staticClass:"md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0",attrs:{datetime:"2020-10-07T13:00:00.000Z"}},[r("svg",{staticClass:"w-3 h-3 mr-6 overflow-visible text-gray-300",attrs:{viewBox:"0 0 12 12"}},[r("circle",{attrs:{cx:"6",cy:"6",r:"6",fill:"currentColor"}}),t._v(" "),r("path",{staticClass:"text-gray-200",attrs:{d:"M 6 -6 V -30",fill:"none","stroke-width":"2",stroke:"currentColor"}}),t._v(" "),r("path",{staticClass:"text-gray-200",attrs:{d:"M 6 18 V 500",fill:"none","stroke-width":"2",stroke:"currentColor"}})]),t._v("Oct 2016 ― Jun 2017\n          ")]),t._v(" "),t._m(2)])])]),t._v(" "),r("li",[r("article",[r("div",{staticClass:"grid md:grid-cols-8 xl:grid-cols-9 items-start relative p-3 sm:p-5 xl:p-6 overflow-hidden"},[r("h3",{staticClass:"font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0"},[t._v("\n            Full-stack developer\n          ")]),t._v(" "),r("time",{staticClass:"md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0",attrs:{datetime:"2020-10-07T13:00:00.000Z"}},[r("svg",{staticClass:"w-3 h-3 mr-6 overflow-visible text-gray-300",attrs:{viewBox:"0 0 12 12"}},[r("circle",{attrs:{cx:"6",cy:"6",r:"6",fill:"currentColor"}}),t._v(" "),r("path",{staticClass:"text-gray-200",attrs:{d:"M 6 -6 V -30",fill:"none","stroke-width":"2",stroke:"currentColor"}}),t._v(" "),r("path",{staticClass:"text-gray-200",attrs:{d:"M 6 18 V 500",fill:"none","stroke-width":"2",stroke:"currentColor"}})]),t._v("Oct 2016 ― Jun 2017\n          ")]),t._v(" "),t._m(3)])])]),t._v(" "),r("li",[r("article",[r("div",{staticClass:"grid md:grid-cols-8 xl:grid-cols-9 items-start relative p-3 sm:p-5 xl:p-6 overflow-hidden"},[r("h3",{staticClass:"font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0"},[t._v("\n            MSc, Information Technology Engineering, Multimedia Systems,\n            Shahid Beheshti University, Tehran, Iran\n          ")]),t._v(" "),r("time",{staticClass:"md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0",attrs:{datetime:"2020-10-07T13:00:00.000Z"}},[r("svg",{staticClass:"w-3 h-3 mr-6 overflow-visible text-gray-300",attrs:{viewBox:"0 0 12 12"}},[r("circle",{attrs:{cx:"6",cy:"6",r:"6",fill:"currentColor"}}),t._v(" "),r("path",{staticClass:"text-gray-200",attrs:{d:"M 6 -6 V -30",fill:"none","stroke-width":"2",stroke:"currentColor"}}),t._v(" "),r("path",{staticClass:"text-gray-200",attrs:{d:"M 6 18 V 500",fill:"none","stroke-width":"2",stroke:"currentColor"}})]),t._v("2016 ― 2019")]),t._v(" "),t._m(4)])])]),t._v(" "),r("li",[r("article",[r("div",{staticClass:"grid md:grid-cols-8 xl:grid-cols-9 items-start relative p-3 sm:p-5 xl:p-6 overflow-hidden"},[r("h3",{staticClass:"font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0"},[t._v("\n            Volunteer WordPress Developer, American Myalgic Encephalomyelitis\n            and Chronic Fatigue Syndrome Society, USA, Remote\n          ")]),t._v(" "),r("time",{staticClass:"md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0",attrs:{datetime:"2020-10-07T13:00:00.000Z"}},[r("svg",{staticClass:"w-3 h-3 mr-6 overflow-visible text-gray-300",attrs:{viewBox:"0 0 12 12"}},[r("circle",{attrs:{cx:"6",cy:"6",r:"6",fill:"currentColor"}}),t._v(" "),r("path",{staticClass:"text-gray-200",attrs:{d:"M 6 -6 V -30",fill:"none","stroke-width":"2",stroke:"currentColor"}}),t._v(" "),r("path",{staticClass:"text-gray-200",attrs:{d:"M 6 18 V 500",fill:"none","stroke-width":"2",stroke:"currentColor"}})]),t._v("Jan 2016 ― Dec 2016 (12 mos)")]),t._v(" "),t._m(5)])])]),t._v(" "),r("li",[r("article",[r("div",{staticClass:"grid md:grid-cols-8 xl:grid-cols-9 items-start relative p-3 sm:p-5 xl:p-6 overflow-hidden"},[r("h3",{staticClass:"font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0"},[t._v("\n            Intern WordPress Developer - Local Startup\n          ")]),t._v(" "),r("time",{staticClass:"md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0",attrs:{datetime:"2020-10-07T13:00:00.000Z"}},[r("svg",{staticClass:"w-3 h-3 mr-6 overflow-visible text-gray-300",attrs:{viewBox:"0 0 12 12"}},[r("circle",{attrs:{cx:"6",cy:"6",r:"6",fill:"currentColor"}}),t._v(" "),r("path",{staticClass:"text-gray-200",attrs:{d:"M 6 -6 V -30",fill:"none","stroke-width":"2",stroke:"currentColor"}}),t._v(" "),r("path",{staticClass:"text-gray-200",attrs:{d:"M 6 18 V 500",fill:"none","stroke-width":"2",stroke:"currentColor"}})]),t._v("Jul 2015 ― Sep 2015")]),t._v(" "),t._m(6)])])]),t._v(" "),r("li",[r("article",[r("div",{staticClass:"grid md:grid-cols-8 xl:grid-cols-9 items-start relative p-3 sm:p-5 xl:p-6 overflow-hidden"},[r("h3",{staticClass:"font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0"},[t._v("\n            BSc, Computer Software Engineering - Kashan University\n          ")]),t._v(" "),r("time",{staticClass:"md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0",attrs:{datetime:"2020-10-06T18:30:00.000Z"}},[r("svg",{staticClass:"w-3 h-3 mr-6 overflow-visible text-gray-300",attrs:{viewBox:"0 0 12 12"}},[r("circle",{attrs:{cx:"6",cy:"6",r:"6",fill:"currentColor"}}),t._v(" "),r("path",{staticClass:"text-gray-200",attrs:{d:"M 6 -6 V -30",fill:"none","stroke-width":"2",stroke:"currentColor"}})]),t._v("2011-2016")]),t._v(" "),t._m(7)])]),t._v("\n      "+t._s(t.articles)+"\n    ")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0"},[e("p",[this._v("\n              ― Laravel/Vue.js taxi service backend and admin ― Larvel/Vue.js\n              digital products e-commerce\n            ")]),this._v(" "),e("p",[this._v("GPA: 3.35 / 4")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0"},[e("p",[this._v("\n              ― Laravel/Vue.js taxi service backend and admin ― Larvel/Vue.js\n              digital products e-commerce\n            ")]),this._v(" "),e("p",[this._v("GPA: 3.35 / 4")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0"},[e("p",[this._v("\n              ― Laravel/Vue.js taxi service backend and admin ― Larvel/Vue.js\n              digital products e-commerce\n            ")]),this._v(" "),e("p",[this._v("GPA: 3.35 / 4")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0"},[e("p",[this._v("\n              ― Laravel/Vue.js taxi service backend and admin ― Larvel/Vue.js\n              digital products e-commerce\n            ")]),this._v(" "),e("p",[this._v("GPA: 3.35 / 4")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0"},[e("p",[this._v("\n              Final thesis on data collection and visualization collaboration\n              using Python\n            ")]),this._v(" "),e("p",[this._v("GPA: 3.35 / 4")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0"},[e("p",[this._v("WordPress theme development")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0"},[e("p",[this._v("WordPress theme development")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0"},[e("p",[this._v("\n              Final thesis on recommender systems and e-commerce using PHP\n            ")]),this._v(" "),e("p",[this._v("GPA: 2.81 / 4")])])}],!1,null,null,null);e.default=component.exports},267:function(t,e,r){"use strict";r.r(e);r(35),r(33),r(43),r(8),r(34),r(36);var l=r(255),n=r.n(l),o={data:function(){return{magicGrid:null,loadingGrid:!0}},mounted:function(){var t=this,e=new n.a({container:".magic-grid",animate:!0,gutter:20,items:1,useMin:!0,maxColumns:6});e.listen(),Promise.all(Array.from(document.images).filter((function(img){return!img.complete})).map((function(img){return new Promise((function(t){img.onload=img.onerror=t}))}))).then((function(){e.positionItems(),t.loadingGrid=!1}))}},c=r(27),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"arts"}},[this._m(0),this._v(" "),e("div",{staticClass:"magic-grid mx-auto mb-64 mt-16"},this._l(Array(1),(function(img,t){return e("div",{key:t,staticClass:"flex justify-center items-center w-64"},[e("img",{staticClass:"rounded-md shadow-md",attrs:{src:"https://source.unsplash.com/random/"+(t+1)}})])})),0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container mx-auto mt-64 mb-8 px-4 sm:px-16"},[e("h1",{staticClass:"text-gray-900 font-bold text-3xl"},[this._v("Arts")]),this._v(" "),e("span",{staticClass:"text-blue-500"},[this._v("______")])])}],!1,null,null,null);e.default=component.exports},268:function(t,e,r){"use strict";r.r(e);r(253);var l=r(27),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container mx-auto px-4 sm:px-16 -mt-20 flex min-h-screen justify-items-center justify-center items-center",attrs:{id:"hello"}},[e("div",{staticClass:"space-y-14"},[e("div",{staticClass:"flex justify-center"},[e("svg",{staticClass:"w-24 h-24 hand-shake",attrs:{id:"emoji",viewBox:"0 0 72 72",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{id:"color"}}),this._v(" "),e("g",{attrs:{id:"hair"}}),this._v(" "),e("g",{attrs:{id:"skin"}},[e("path",{attrs:{fill:"#fcea2b",stroke:"none",d:"M30.6145,13.7375c0.284-1.9293-1.0499-3.7236-2.9792-4.0075s-3.7236,1.0498-4.0075,2.9792 c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336L23.358,32.641l0.0217,4.3248l0.1759-12.9988 c0.284-1.9293-1.0499-3.7236-2.9792-4.0075s-3.7236,1.0498-4.0075,2.9792c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336 l-0.1759,12.9988l0.0526,10.0853c0.4248,8.3102,7.7518,13.6293,16.06,13.2046c4.7918-0.2654,9.32-2.2781,12.7278-5.6572 c2.9178-3.0904,10.0855-11.5349,10.0855-11.5349c1.4629-2.1582,0.3282-5.4939-0.8007-4.6726l-9.8756,4.6509l-0.0389-5.3996 l0.0389,5.3996l-0.0389-5.3996l0.0395-21.8505c0.284-1.9293-1.0499-3.7236-2.9792-4.0075s-3.7236,1.0498-4.0075,2.9792 c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336l-0.0947,6.9994l-0.1861,10.6365l0.3671-22.1928 c0.284-1.9293-1.0499-3.7236-2.9792-4.0075c-1.9293-0.284-3.7236,1.0498-4.0075,2.9792c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336 l-0.2064,24.016"}})]),this._v(" "),e("g",{attrs:{id:"skin-shadow"}}),this._v(" "),e("g",{attrs:{id:"line"}},[e("path",{attrs:{fill:"none",stroke:"#000000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M30.6145,13.7375 c0.284-1.9293-1.0499-3.7236-2.9792-4.0075s-3.7236,1.0498-4.0075,2.9792c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336 L23.358,32.641l0.0048,0.9513l0.1928-9.6253c0.284-1.9293-1.0499-3.7236-2.9792-4.0075s-3.7236,1.0498-4.0075,2.9792 c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336l-0.1759,12.9988l0.0526,10.0853c0.4248,8.3102,7.7518,13.6293,16.06,13.2046 c4.7918-0.2654,9.32-2.2781,12.7278-5.6572c2.9178-3.0904,10.0855-11.5349,10.0855-11.5349 c1.4629-2.1582,0.3282-5.4939-0.8007-4.6726l-9.8756,4.6509l-0.0389-5.3996l0.0389,5.3996l-0.0389-5.3996l0.0395-21.8505 c0.284-1.9293-1.0499-3.7236-2.9792-4.0075s-3.7236,1.0498-4.0075,2.9792c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336 l-0.0947,6.9994l-0.1861,10.6365l0.3671-22.1928c0.284-1.9293-1.0499-3.7236-2.9792-4.0075 c-1.9293-0.284-3.7236,1.0498-4.0075,2.9792c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336l-0.1758,20.4538"}})])])]),this._v(" "),e("h1",{staticClass:"text-6xl w-full font-heading bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"},[this._t("default")],2)])])}),[],!1,null,"4c5e6c0b",null);e.default=component.exports},269:function(t,e,r){"use strict";r.r(e);var l=r(27),component=Object(l.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container mx-auto my-16 px-4 sm:px-16",attrs:{id:"blog"}},[r("h1",{staticClass:"text-gray-900 font-bold text-3xl"},[t._v("Blog")]),t._v(" "),r("span",{staticClass:"text-blue-500"},[t._v("______")]),t._v(" "),r("ul",{staticClass:"mt-16"},[r("li",{staticClass:"capitalize mb-16"},[t._v("\n      A sample post "),r("span",{staticClass:"text-gray-900"},[t._v("→")])]),t._v(" "),r("li",{staticClass:"capitalize mb-16"},[t._v("\n      A sample post "),r("span",{staticClass:"text-gray-900"},[t._v("→")])]),t._v(" "),r("li",{staticClass:"capitalize mb-16"},[t._v("\n      A sample post "),r("span",{staticClass:"text-gray-900"},[t._v("→")])]),t._v(" "),r("li",{staticClass:"capitalize mb-16"},[t._v("\n      A sample post "),r("span",{staticClass:"text-gray-900"},[t._v("→")])])])])}],!1,null,null,null);e.default=component.exports},270:function(t,e,r){"use strict";r.r(e);var l=r(27),component=Object(l.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container mx-auto mt-64 px-4 sm:px-16",attrs:{id:"projects"}},[r("h1",{staticClass:"text-gray-900 font-bold text-3xl"},[t._v("Projects")]),t._v(" "),r("span",{staticClass:"text-blue-500"},[t._v("______")]),t._v(" "),r("ul",{staticClass:"mt-16"},[r("li",{staticClass:"uppercase mb-16"},[r("h2",{staticClass:"font-bold text-sm"},[t._v("A sample post")]),t._v(" "),r("span",{staticClass:"block text-gray-600 font-bold text-xs"},[t._v("2018 - 2020")]),t._v(" "),r("p",{staticClass:"text-gray-900 mt-4"},[t._v("\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, modi\n        asperiores. Quos id aspernatur nesciunt dolorum voluptas? Deleniti\n        enim unde quas impedit aspernatur consequatur quis quibusdam dolorum,\n        hic nobis nihil.\n      ")])]),t._v(" "),r("li",{staticClass:"uppercase mb-16"},[r("h2",{staticClass:"font-bold text-sm"},[t._v("A sample post")]),t._v(" "),r("span",{staticClass:"block text-gray-600 font-bold text-xs"},[t._v("2018 - 2020")]),t._v(" "),r("p",{staticClass:"text-gray-900 mt-4"},[t._v("\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, modi\n        asperiores. Quos id aspernatur nesciunt dolorum voluptas? Deleniti\n        enim unde quas impedit aspernatur consequatur quis quibusdam dolorum,\n        hic nobis nihil.\n      ")])]),t._v(" "),r("li",{staticClass:"uppercase mb-16"},[r("h2",{staticClass:"font-bold text-sm"},[t._v("A sample post")]),t._v(" "),r("span",{staticClass:"block text-gray-600 font-bold text-xs"},[t._v("2018 - 2020")]),t._v(" "),r("p",{staticClass:"text-gray-900 mt-4"},[t._v("\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, modi\n        asperiores. Quos id aspernatur nesciunt dolorum voluptas? Deleniti\n        enim unde quas impedit aspernatur consequatur quis quibusdam dolorum,\n        hic nobis nihil.\n      ")])]),t._v(" "),r("li",{staticClass:"uppercase mb-16"},[r("h2",{staticClass:"font-bold text-sm"},[t._v("A sample post")]),t._v(" "),r("span",{staticClass:"block text-gray-600 font-bold text-xs"},[t._v("2018 - 2020")]),t._v(" "),r("p",{staticClass:"text-gray-900 mt-4"},[t._v("\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, modi\n        asperiores. Quos id aspernatur nesciunt dolorum voluptas? Deleniti\n        enim unde quas impedit aspernatur consequatur quis quibusdam dolorum,\n        hic nobis nihil.\n      ")])])])])}],!1,null,null,null);e.default=component.exports},271:function(t,e,r){"use strict";r.r(e);var l=r(27),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container mx-auto my-64 px-4 sm:px-16",attrs:{id:"books"}},[r("h1",{staticClass:"text-gray-900 font-bold text-3xl"},[t._v("Books")]),t._v(" "),r("span",{staticClass:"text-blue-500"},[t._v("______")]),t._v(" "),r("div",{staticClass:"my-16 flex space-x-8"},[r("div",{},[r("img",{staticClass:"rounded-lg shadow-lg mb-4",attrs:{src:"http://amirmasoud.me/wp-content/uploads/2020/06/x43190966._SX318_.jpg.pagespeed.ic.-8klxNR3cy.webp"}}),t._v(" "),r("div",{staticClass:"mb-8"},[r("badge",[t._v("WEB")])],1),t._v(" "),r("h2",{staticClass:"font-bold text-base"},[t._v("A sample book")]),t._v(" "),r("p",{staticClass:"text-gray-500 mt-4"},[t._v("\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, modi\n        asperiores. Quos id aspernatur nesciunt dolorum voluptas? Deleniti\n        enim unde quas impedit aspernatur consequatur quis quibusdam dolorum,\n        hic nobis nihil.\n      ")])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("img",{staticClass:"rounded-lg shadow-lg mb-4",attrs:{src:"http://amirmasoud.me/wp-content/uploads/2020/06/x43190966._SX318_.jpg.pagespeed.ic.-8klxNR3cy.webp"}}),this._v(" "),e("div",{staticClass:"mb-8"},[e("span",{staticClass:"px-2 py-1 rounded-md text-xs uppercase bg-gray-100 text-gray-400 border-gray-100 hover:bg-blue-100 hover:text-blue-400 hover:border-blue-100 shadow-xs border"},[this._v("web")])]),this._v(" "),e("h2",{staticClass:"font-bold text-base"},[this._v("A sample book")]),this._v(" "),e("p",{staticClass:"text-gray-500 mt-4"},[this._v("\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, modi\n        asperiores. Quos id aspernatur nesciunt dolorum voluptas? Deleniti\n        enim unde quas impedit aspernatur consequatur quis quibusdam dolorum,\n        hic nobis nihil.\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("img",{staticClass:"rounded-lg shadow-lg mb-4",attrs:{src:"http://amirmasoud.me/wp-content/uploads/2020/06/x43190966._SX318_.jpg.pagespeed.ic.-8klxNR3cy.webp"}}),this._v(" "),e("div",{staticClass:"mb-8"},[e("span",{staticClass:"px-2 py-1 rounded-md text-xs uppercase bg-gray-100 text-gray-400 border-gray-100 hover:bg-blue-100 hover:text-blue-400 hover:border-blue-100 shadow-xs border"},[this._v("web")])]),this._v(" "),e("h2",{staticClass:"font-bold text-base"},[this._v("A sample book")]),this._v(" "),e("p",{staticClass:"text-gray-500 mt-4"},[this._v("\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, modi\n        asperiores. Quos id aspernatur nesciunt dolorum voluptas? Deleniti\n        enim unde quas impedit aspernatur consequatur quis quibusdam dolorum,\n        hic nobis nihil.\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("img",{staticClass:"rounded-lg shadow-lg mb-4",attrs:{src:"http://amirmasoud.me/wp-content/uploads/2020/06/x43190966._SX318_.jpg.pagespeed.ic.-8klxNR3cy.webp"}}),this._v(" "),e("div",{staticClass:"mb-8"},[e("span",{staticClass:"px-2 py-1 rounded-md text-xs uppercase bg-gray-100 text-gray-400 border-gray-100 hover:bg-blue-100 hover:text-blue-400 hover:border-blue-100 shadow-xs border"},[this._v("web")])]),this._v(" "),e("h2",{staticClass:"font-bold text-base"},[this._v("A sample book")]),this._v(" "),e("p",{staticClass:"text-gray-500 mt-4"},[this._v("\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, modi\n        asperiores. Quos id aspernatur nesciunt dolorum voluptas? Deleniti\n        enim unde quas impedit aspernatur consequatur quis quibusdam dolorum,\n        hic nobis nihil.\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("img",{staticClass:"rounded-lg shadow-lg mb-4",attrs:{src:"http://amirmasoud.me/wp-content/uploads/2020/06/x43190966._SX318_.jpg.pagespeed.ic.-8klxNR3cy.webp"}}),this._v(" "),e("div",{staticClass:"mb-8"},[e("span",{staticClass:"px-2 py-1 rounded-md text-xs uppercase bg-gray-100 text-gray-400 border-gray-100 hover:bg-blue-100 hover:text-blue-400 hover:border-blue-100 shadow-xs border"},[this._v("web")])]),this._v(" "),e("h2",{staticClass:"font-bold text-base"},[this._v("A sample book")]),this._v(" "),e("p",{staticClass:"text-gray-500 mt-4"},[this._v("\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, modi\n        asperiores. Quos id aspernatur nesciunt dolorum voluptas? Deleniti\n        enim unde quas impedit aspernatur consequatur quis quibusdam dolorum,\n        hic nobis nihil.\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Badge:r(252).default})},272:function(t,e,r){"use strict";r.r(e);var l=r(27),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container mx-auto py-16 px-4 sm:px-16",attrs:{id:"connect"}},[e("h1",{staticClass:"text-gray-900 font-bold text-3xl"},[this._v("Connect")]),this._v(" "),e("span",{staticClass:"text-blue-500"},[this._v("______")]),this._v(" "),e("div",{staticClass:"flex justify-center space-x-12 mt-16"},[e("a",{attrs:{href:"https://github.com/amirmasoud"}},[e("svg",{staticClass:"flex-none text-gray-900 w-12 h-12",attrs:{fill:"currentColor"}},[e("rect",{attrs:{width:"48",height:"48",rx:"12"}}),this._v(" "),e("path",{staticClass:"text-gray-50",attrs:{d:"M23.997 12a12 12 0 00-3.792 23.388c.6.12.816-.264.816-.576l-.012-2.04c-3.336.72-4.044-1.608-4.044-1.608-.552-1.392-1.332-1.764-1.332-1.764-1.08-.744.084-.72.084-.72 1.2.084 1.836 1.236 1.836 1.236 1.08 1.824 2.808 1.296 3.492.996.12-.78.42-1.308.756-1.608-2.664-.3-5.46-1.332-5.46-5.928 0-1.32.468-2.388 1.236-3.228a4.32 4.32 0 01.12-3.168s1.008-.324 3.3 1.224a11.496 11.496 0 016 0c2.292-1.56 3.3-1.224 3.3-1.224.66 1.644.24 2.88.12 3.168.768.84 1.236 1.92 1.236 3.228 0 4.608-2.808 5.616-5.484 5.916.432.372.816 1.104.816 2.22l-.012 3.3c0 .312.216.696.828.576A12 12 0 0023.997 12z",fill:"currentColor"}})])]),this._v(" "),e("a",{attrs:{href:"https://twitter.com/AmirmasoudShey1"}},[e("svg",{staticClass:"flex-none text-blue-400 w-12 h-12",attrs:{fill:"currentColor"}},[e("rect",{attrs:{width:"48",height:"48",rx:"12"}}),this._v(" "),e("path",{staticClass:"text-white",attrs:{d:"M37.127 15.989h-.001a11.04 11.04 0 01-3.093.836 5.336 5.336 0 002.37-2.932 10.815 10.815 0 01-3.421 1.284 5.42 5.42 0 00-3.933-1.679c-2.976 0-5.385 2.373-5.385 5.3-.003.406.044.812.138 1.207a15.351 15.351 0 01-11.102-5.54 5.235 5.235 0 00-.733 2.663c0 1.837.959 3.461 2.406 4.413a5.338 5.338 0 01-2.449-.662v.066c0 2.57 1.86 4.708 4.32 5.195a5.55 5.55 0 01-1.418.186c-.34 0-.68-.033-1.013-.099.684 2.106 2.676 3.637 5.034 3.68a10.918 10.918 0 01-6.69 2.269 11.21 11.21 0 01-1.285-.077 15.237 15.237 0 008.242 2.394c9.918 0 15.337-8.077 15.337-15.083 0-.23-.006-.459-.017-.683a10.864 10.864 0 002.686-2.746l.007.008z",fill:"currentColor"}})])])])])}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,r){"use strict";r.r(e);var l=r(27),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-gray-50"},[e("app-hello",[this._v("Hello! My name is Amirmasood")]),this._v(" "),e("app-blog"),this._v(" "),e("app-about"),this._v(" "),e("app-projects"),this._v(" "),e("app-books"),this._v(" "),e("app-arts"),this._v(" "),e("app-connect")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppHello:r(268).default,AppBlog:r(269).default,AppAbout:r(266).default,AppProjects:r(270).default,AppBooks:r(271).default,AppArts:r(267).default,AppConnect:r(272).default})}}]);