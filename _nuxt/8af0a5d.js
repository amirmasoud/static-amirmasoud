(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{251:function(t,e,n){var content=n(253);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("d8dddb64",content,!0,{sourceMap:!1})},252:function(t,e,n){"use strict";n(251)},253:function(t,e,n){(e=n(65)(!1)).push([t.i,"@-webkit-keyframes hand-shake-data-v-5bd8e266{0%{transform:rotate(0);transform-origin:60% 75%}to{transform:rotate(-45deg);transform-origin:60% 75%}}@keyframes hand-shake-data-v-5bd8e266{0%{transform:rotate(0);transform-origin:60% 75%}to{transform:rotate(-45deg);transform-origin:60% 75%}}.hand-shake[data-v-5bd8e266]{-webkit-animation:hand-shake-data-v-5bd8e266 .7s ease-in-out infinite alternate both;animation:hand-shake-data-v-5bd8e266 .7s ease-in-out infinite alternate both}",""]),t.exports=e},254:function(t,e,n){t.exports=function(){"use strict";var t=function(t){if(!t)throw new Error("No config object has been provided.");"boolean"!=typeof t.useTransform&&(t.useTransform=!0),"number"!=typeof t.gutter&&(t.gutter=25),t.container||e("container"),t.items||t.static||e("items or static")},e=function(t){throw new Error("Missing property '"+t+"' in MagicGrid config")},n=function(e){t(e),e.container instanceof HTMLElement?(this.container=e.container,this.containerClass=e.container.className):(this.containerClass=e.container,this.container=document.querySelector(e.container)),this.items=this.container.children,this.static=e.static||!1,this.size=e.items,this.gutter=e.gutter,this.maxColumns=e.maxColumns||!1,this.useMin=e.useMin||!1,this.useTransform=e.useTransform,this.animate=e.animate||!1,this.started=!1,this.init()};return n.prototype.init=function(){if(this.ready()&&!this.started){this.container.style.position="relative";for(var t=0;t<this.items.length;t++){var e=this.items[t].style;e.position="absolute",this.animate&&(e.transition=(this.useTransform?"transform":"top, left")+" 0.2s ease")}this.started=!0}},n.prototype.colWidth=function(){return this.items[0].getBoundingClientRect().width+this.gutter},n.prototype.setup=function(){var t=this.container.getBoundingClientRect().width,e=this.colWidth(),i=Math.floor(t/e)||1,n=[];this.maxColumns&&i>this.maxColumns&&(i=this.maxColumns);for(var s=0;s<i;s++)n[s]={height:0,index:s};return{cols:n,wSpace:t-i*e+this.gutter}},n.prototype.nextCol=function(t,e){return this.useMin?function(t){var e=t[0];for(var i of t)i.height<e.height&&(e=i);return e}(t):t[e%t.length]},n.prototype.positionItems=function(){var t=this.setup(),e=t.cols,i=t.wSpace,n=0,s=this.colWidth();i=Math.floor(i/2);for(var r=0;r<this.items.length;r++){var o=this.nextCol(e,r),a=this.items[r],l=o.height?this.gutter:0,c=o.index*s+i+"px",u=o.height+l+"px";this.useTransform?a.style.transform="translate("+c+", "+u+")":(a.style.top=u,a.style.left=c),o.height+=a.getBoundingClientRect().height+l,o.height>n&&(n=o.height)}this.container.style.height=n+"px"},n.prototype.ready=function(){return!!this.static||this.items.length>=this.size},n.prototype.getReady=function(){var t=this,e=setInterval((function(){t.container=document.querySelector(t.containerClass),t.items=t.container.children,t.ready()&&(clearInterval(e),t.init(),t.listen())}),100)},n.prototype.listen=function(){var t,e=this;this.ready()?(window.addEventListener("resize",(function(){t||(t=setTimeout((function(){e.positionItems(),t=null}),200))})),this.positionItems()):this.getReady()},n}()},265:function(t,e,n){"use strict";n.r(e);var r={props:{content:{type:Object,default:function(){}}}},o=(n(252),n(27)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container mx-auto px-4 sm:px-16 -mt-20 flex min-h-screen justify-items-center justify-center items-center",attrs:{id:"hello"}},[e("div",{staticClass:"space-y-14"},[e("div",{staticClass:"flex justify-center"},[e("svg",{staticClass:"w-24 h-24 hand-shake",attrs:{id:"emoji",viewBox:"0 0 72 72",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{id:"color"}}),this._v(" "),e("g",{attrs:{id:"hair"}}),this._v(" "),e("g",{attrs:{id:"skin"}},[e("path",{attrs:{fill:"#fcea2b",stroke:"none",d:"M30.6145,13.7375c0.284-1.9293-1.0499-3.7236-2.9792-4.0075s-3.7236,1.0498-4.0075,2.9792 c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336L23.358,32.641l0.0217,4.3248l0.1759-12.9988 c0.284-1.9293-1.0499-3.7236-2.9792-4.0075s-3.7236,1.0498-4.0075,2.9792c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336 l-0.1759,12.9988l0.0526,10.0853c0.4248,8.3102,7.7518,13.6293,16.06,13.2046c4.7918-0.2654,9.32-2.2781,12.7278-5.6572 c2.9178-3.0904,10.0855-11.5349,10.0855-11.5349c1.4629-2.1582,0.3282-5.4939-0.8007-4.6726l-9.8756,4.6509l-0.0389-5.3996 l0.0389,5.3996l-0.0389-5.3996l0.0395-21.8505c0.284-1.9293-1.0499-3.7236-2.9792-4.0075s-3.7236,1.0498-4.0075,2.9792 c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336l-0.0947,6.9994l-0.1861,10.6365l0.3671-22.1928 c0.284-1.9293-1.0499-3.7236-2.9792-4.0075c-1.9293-0.284-3.7236,1.0498-4.0075,2.9792c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336 l-0.2064,24.016"}})]),this._v(" "),e("g",{attrs:{id:"skin-shadow"}}),this._v(" "),e("g",{attrs:{id:"line"}},[e("path",{attrs:{fill:"none",stroke:"#000000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M30.6145,13.7375 c0.284-1.9293-1.0499-3.7236-2.9792-4.0075s-3.7236,1.0498-4.0075,2.9792c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336 L23.358,32.641l0.0048,0.9513l0.1928-9.6253c0.284-1.9293-1.0499-3.7236-2.9792-4.0075s-3.7236,1.0498-4.0075,2.9792 c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336l-0.1759,12.9988l0.0526,10.0853c0.4248,8.3102,7.7518,13.6293,16.06,13.2046 c4.7918-0.2654,9.32-2.2781,12.7278-5.6572c2.9178-3.0904,10.0855-11.5349,10.0855-11.5349 c1.4629-2.1582,0.3282-5.4939-0.8007-4.6726l-9.8756,4.6509l-0.0389-5.3996l0.0389,5.3996l-0.0389-5.3996l0.0395-21.8505 c0.284-1.9293-1.0499-3.7236-2.9792-4.0075s-3.7236,1.0498-4.0075,2.9792c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336 l-0.0947,6.9994l-0.1861,10.6365l0.3671-22.1928c0.284-1.9293-1.0499-3.7236-2.9792-4.0075 c-1.9293-0.284-3.7236,1.0498-4.0075,2.9792c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336l-0.1758,20.4538"}})])])]),this._v(" "),e("h1",{staticClass:"text-6xl w-full font-heading bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"},[e("nuxt-content",{attrs:{document:this.content}})],1)])])}),[],!1,null,"5bd8e266",null);e.default=component.exports},266:function(t,e,n){"use strict";n.r(e);var r={props:{content:{type:Array,default:function(){return[]}}}},o=n(27),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mx-auto my-16 px-4 sm:px-16",attrs:{id:"blog"}},[n("h1",{staticClass:"text-gray-900 font-bold text-3xl"},[t._v("Blog")]),t._v(" "),n("span",{staticClass:"text-blue-500"},[t._v("______")]),t._v(" "),n("ul",{staticClass:"mt-16"},t._l(t.content,(function(e){return n("li",{key:e.slug,staticClass:"capitalize mb-16"},[t._v("\n      "+t._s(e.title)+" "),n("span",{staticClass:"text-gray-900"},[t._v("→")])])})),0)])}),[],!1,null,null,null);e.default=component.exports},267:function(t,e,n){"use strict";n.r(e);var r={props:{content:{type:Array,default:function(){return[]}},welcome:{type:Object,default:function(){}}}},o=n(27),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mx-auto mt-64 px-4 sm:px-16",attrs:{id:"about"}},[n("h1",{staticClass:"text-gray-900 font-bold text-3xl"},[t._v("About")]),t._v(" "),n("span",{staticClass:"text-blue-500"},[t._v("______")]),t._v(" "),n("nuxt-content",{staticClass:"about-welcome prose mt-16",attrs:{document:t.welcome}}),t._v(" "),n("ul",{staticClass:"rounded-3xl mt-20"},t._l(t.content,(function(e,r){return n("li",{key:e.slug},[n("article",[n("div",{staticClass:"grid md:grid-cols-8 xl:grid-cols-9 items-start relative p-3 sm:p-5 xl:p-6 overflow-hidden"},[n("h3",{staticClass:"font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("time",{staticClass:"md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0",attrs:{datetime:"2020-10-07T13:00:00.000Z"}},[0==r?n("svg",{staticClass:"w-3 h-3 mr-6 overflow-visible text-green-400",attrs:{viewBox:"0 0 12 12"}},[n("circle",{attrs:{cx:"6",cy:"6",r:"6",fill:"currentColor"}}),t._v(" "),n("circle",{attrs:{cx:"6",cy:"6",r:"11",fill:"none",stroke:"currentColor","stroke-width":"2"}}),t._v(" "),t.content.length-1?n("path",{staticClass:"text-gray-200",attrs:{d:"M 6 18 V 500",fill:"none","stroke-width":"2",stroke:"currentColor"}}):t._e()]):r==t.content.length-1?n("svg",{staticClass:"w-3 h-3 mr-6 overflow-visible text-gray-300",attrs:{viewBox:"0 0 12 12"}},[n("circle",{attrs:{cx:"6",cy:"6",r:"6",fill:"currentColor"}}),t._v(" "),n("path",{staticClass:"text-gray-200",attrs:{d:"M 6 -6 V -30",fill:"none","stroke-width":"2",stroke:"currentColor"}})]):n("svg",{staticClass:"w-3 h-3 mr-6 overflow-visible text-gray-300",attrs:{viewBox:"0 0 12 12"}},[n("circle",{attrs:{cx:"6",cy:"6",r:"6",fill:"currentColor"}}),t._v(" "),n("path",{staticClass:"text-gray-200",attrs:{d:"M 6 -6 V -30",fill:"none","stroke-width":"2",stroke:"currentColor"}}),t._v(" "),n("path",{staticClass:"text-gray-200",attrs:{d:"M 6 18 V 500",fill:"none","stroke-width":"2",stroke:"currentColor"}})]),t._v(t._s(e.from)+" ― "+t._s(e.to))]),t._v(" "),n("div",{staticClass:"md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0"},[n("nuxt-content",{attrs:{document:e}})],1)])])])})),0)],1)}),[],!1,null,null,null);e.default=component.exports},268:function(t,e,n){"use strict";n.r(e);var r={props:{content:{type:Array,default:function(){return[]}}}},o=n(27),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mx-auto mt-64 px-4 sm:px-16",attrs:{id:"projects"}},[n("h1",{staticClass:"text-gray-900 font-bold text-3xl"},[t._v("Projects")]),t._v(" "),n("span",{staticClass:"text-blue-500"},[t._v("______")]),t._v(" "),n("ul",{staticClass:"mt-16"},t._l(t.content,(function(e){return n("li",{key:e.slug,staticClass:"mb-16"},[n("h2",{staticClass:"font-bold"},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticClass:"block text-gray-600 font-bold text-xs"},[t._v(t._s(e.from)+" - "+t._s(e.to))]),t._v(" "),n("nuxt-content",{staticClass:"mt-4 text-gray-600",attrs:{document:e}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,n){"use strict";n.r(e);var r={props:{content:{type:Array,default:function(){return[]}}}},o=n(27),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mx-auto my-64 px-4 sm:px-16",attrs:{id:"books"}},[n("h1",{staticClass:"text-gray-900 font-bold text-3xl"},[t._v("Books")]),t._v(" "),n("span",{staticClass:"text-blue-500"},[t._v("______")]),t._v(" "),n("div",{staticClass:"my-16 flex space-x-8"},t._l(t.content,(function(e){return n("div",{key:e.slug},[n("img",{staticClass:"rounded-lg shadow-lg mb-4",attrs:{src:e.cover}}),t._v(" "),n("div",{staticClass:"mb-8"},[n("span",{staticClass:"px-2 py-1 rounded-md text-xs uppercase bg-gray-100 text-gray-400 border-gray-100 hover:bg-blue-100 hover:text-blue-400 hover:border-blue-100 shadow-xs border"},[t._v(t._s(e.tags))])]),t._v(" "),n("h2",{staticClass:"font-bold text-base"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"text-gray-500 mt-4"},[t._v("\n        "+t._s(e.description)+"\n      ")])])})),0)])}),[],!1,null,null,null);e.default=component.exports},270:function(t,e,n){"use strict";n.r(e);n(35),n(33),n(43),n(8),n(34),n(36);var r=n(254),o=n.n(r),l={data:function(){return{magicGrid:null,loadingGrid:!0}},mounted:function(){var t=this,e=new o.a({container:".magic-grid",animate:!0,gutter:20,items:1,useMin:!0,maxColumns:6});e.listen(),Promise.all(Array.from(document.images).filter((function(img){return!img.complete})).map((function(img){return new Promise((function(t){img.onload=img.onerror=t}))}))).then((function(){e.positionItems(),t.loadingGrid=!1}))}},c=n(27),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"arts"}},[this._m(0),this._v(" "),e("div",{staticClass:"magic-grid mx-auto mb-64 mt-16"},this._l(Array(1),(function(img,t){return e("div",{key:t,staticClass:"flex justify-center items-center w-64"},[e("img",{staticClass:"rounded-md shadow-md",attrs:{src:"https://source.unsplash.com/random/"+(t+1)}})])})),0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container mx-auto mt-64 mb-8 px-4 sm:px-16"},[e("h1",{staticClass:"text-gray-900 font-bold text-3xl"},[this._v("Arts")]),this._v(" "),e("span",{staticClass:"text-blue-500"},[this._v("______")])])}],!1,null,null,null);e.default=component.exports},271:function(t,e,n){"use strict";n.r(e);var r={props:{content:{type:Array,default:function(){return[]}}}},o=n(27),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container mx-auto py-16 px-4 sm:px-16",attrs:{id:"connect"}},[e("h1",{staticClass:"text-gray-900 font-bold text-3xl"},[this._v("Connect")]),this._v(" "),e("span",{staticClass:"text-blue-500"},[this._v("______")]),this._v(" "),e("div",{staticClass:"flex justify-center space-x-12 mt-16"},this._l(this.content,(function(t){return e("a",{key:t.slug,attrs:{href:"https://github.com/amirmasoud"}},[e("icon-"+t.icon,{tag:"component"})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},276:function(t,e,n){"use strict";n.r(e);n(28);var r=n(5),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c,h,d,f,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("hello-welcome").fetch();case 3:return r=e.sent,e.next=6,n("about").fetch();case 6:return o=e.sent,e.next=9,n("projects").fetch();case 9:return l=e.sent,e.next=12,n("blog").fetch();case 12:return c=e.sent,e.next=15,n("books").fetch();case 15:return h=e.sent,e.next=18,n("arts").fetch();case 18:return d=e.sent,e.next=21,n("connects").fetch();case 21:return f=e.sent,e.next=24,n("about-welcome").fetch();case 24:return m=e.sent,e.abrupt("return",{about:o,projects:l,blog:c,books:h,arts:d,connects:f,hello:r,aboutWelcome:m});case 26:case"end":return e.stop()}}),e)})))()}},l=n(27),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-50"},[n("app-hello",{attrs:{content:t.hello}}),t._v(" "),n("app-blog",{attrs:{content:t.blog}}),t._v(" "),n("app-about",{attrs:{content:t.about,welcome:t.aboutWelcome}}),t._v(" "),n("app-projects",{attrs:{content:t.projects}}),t._v(" "),n("app-books",{attrs:{content:t.books}}),t._v(" "),n("app-arts",{attrs:{content:t.arts}}),t._v(" "),n("app-connect",{attrs:{content:t.connects}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppHello:n(265).default,AppBlog:n(266).default,AppAbout:n(267).default,AppProjects:n(268).default,AppBooks:n(269).default,AppArts:n(270).default,AppConnect:n(271).default})}}]);