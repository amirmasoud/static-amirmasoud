(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3,4,8],{256:function(t,e,n){var content=n(262);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("2eb3530f",content,!0,{sourceMap:!1})},258:function(t,e,n){"use strict";n.r(e);var r=n(27),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}}),this._v(" "),e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"}})])}),[],!1,null,null,null);e.default=component.exports},259:function(t,e,n){"use strict";n.r(e);var r=n(27),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})])}),[],!1,null,null,null);e.default=component.exports},260:function(t,e,n){"use strict";n.r(e);var r=n(27),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"}})])}),[],!1,null,null,null);e.default=component.exports},261:function(t,e,n){"use strict";n(256)},262:function(t,e,n){(e=n(63)(!1)).push([t.i,".language-active{--tw-border-opacity:1;border-color:rgba(96,165,250,var(--tw-border-opacity));border-bottom-width:8px;--tw-text-opacity:1;color:rgba(30,58,138,var(--tw-text-opacity))}",""]),t.exports=e},263:function(t,e,n){t.exports=function(){"use strict";var t=function(t){if(!t)throw new Error("No config object has been provided.");"boolean"!=typeof t.useTransform&&(t.useTransform=!0),"number"!=typeof t.gutter&&(t.gutter=25),t.container||e("container"),t.items||t.static||e("items or static")},e=function(t){throw new Error("Missing property '"+t+"' in MagicGrid config")},n=function(e){t(e),e.container instanceof HTMLElement?(this.container=e.container,this.containerClass=e.container.className):(this.containerClass=e.container,this.container=document.querySelector(e.container)),this.items=this.container.children,this.static=e.static||!1,this.size=e.items,this.gutter=e.gutter,this.maxColumns=e.maxColumns||!1,this.useMin=e.useMin||!1,this.useTransform=e.useTransform,this.animate=e.animate||!1,this.started=!1,this.init()};return n.prototype.init=function(){if(this.ready()&&!this.started){this.container.style.position="relative";for(var t=0;t<this.items.length;t++){var e=this.items[t].style;e.position="absolute",this.animate&&(e.transition=(this.useTransform?"transform":"top, left")+" 0.2s ease")}this.started=!0}},n.prototype.colWidth=function(){return this.items[0].getBoundingClientRect().width+this.gutter},n.prototype.setup=function(){var t=this.container.getBoundingClientRect().width,e=this.colWidth(),i=Math.floor(t/e)||1,n=[];this.maxColumns&&i>this.maxColumns&&(i=this.maxColumns);for(var s=0;s<i;s++)n[s]={height:0,index:s};return{cols:n,wSpace:t-i*e+this.gutter}},n.prototype.nextCol=function(t,e){return this.useMin?function(t){var e=t[0];for(var i of t)i.height<e.height&&(e=i);return e}(t):t[e%t.length]},n.prototype.positionItems=function(){var t=this.setup(),e=t.cols,i=t.wSpace,n=0,s=this.colWidth();i=Math.floor(i/2);for(var r=0;r<this.items.length;r++){var o=this.nextCol(e,r),a=this.items[r],l=o.height?this.gutter:0,c=o.index*s+i+"px",u=o.height+l+"px";this.useTransform?a.style.transform="translate("+c+", "+u+")":(a.style.top=u,a.style.left=c),o.height+=a.getBoundingClientRect().height+l,o.height>n&&(n=o.height)}this.container.style.height=n+"px"},n.prototype.ready=function(){return!!this.static||this.items.length>=this.size},n.prototype.getReady=function(){var t=this,e=setInterval((function(){t.container=document.querySelector(t.containerClass),t.items=t.container.children,t.ready()&&(clearInterval(e),t.init(),t.listen())}),100)},n.prototype.listen=function(){var t,e=this;this.ready()?(window.addEventListener("resize",(function(){t||(t=setTimeout((function(){e.positionItems(),t=null}),200))})),this.positionItems()):this.getReady()},n}()},276:function(t,e,n){"use strict";n.r(e);var r={props:{content:{type:Object,default:function(){}}}},o=n(27),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container mx-auto px-4 sm:px-16 -mt-20 flex min-h-screen justify-items-center justify-center items-center",attrs:{id:"hello"}},[e("div",{staticClass:"space-y-14"},[e("div",{staticClass:"flex justify-center"},[e("icon-shake-svg")],1),this._v(" "),e("h1",{staticClass:"text-6xl w-full font-heading bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"},[e("nuxt-content",{attrs:{document:this.content}})],1)])])}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,n){"use strict";n.r(e);var r={props:{content:{type:Object,default:function(){}}}},o=n(27),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container mx-auto px-4 sm:px-16 prose mt-16 pb-64",attrs:{id:"bio"}},[e("nuxt-content",{attrs:{document:this.content}})],1)}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,n){"use strict";n.r(e);var r={props:{content:{type:Array,default:function(){return[]}}},methods:{tagColor:function(t){return"DevOps Tips"===t?"bg-gradient-to-br from-pink-400 to-pink-700 text-pink-50":"Backend Tips"===t?"bg-gradient-to-br from-orange-400 to-orange-700 text-orange-50":"Frontend Tips"===t?"bg-gradient-to-br from-purple-400 to-purple-700 text-purple-50":void 0}}},o=n(27),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mx-auto my-16 px-4 sm:px-16",attrs:{id:"blog"}},[n("h1",{staticClass:"text-gray-900 font-bold text-3xl"},[t._v("Blog")]),t._v(" "),n("span",{staticClass:"text-blue-500"},[t._v("______")]),t._v(" "),n("ul",{staticClass:"mt-16"},t._l(t.content,(function(e){return n("li",{key:e.slug,staticClass:"capitalize mb-4 flex"},[n("div",{class:"flex-shrink w-1/12 text-center self-start p-1 mt-1 rounded-md text-xs mr-4 "+t.tagColor(e.tags)},[t._v("\n        "+t._s(e.tags)+"\n      ")]),t._v(" "),n("div",{staticClass:"flex-grow"},[t._v("\n        "+t._s(e.title)+" →\n        "),n("time",{staticClass:"text-gray-400 block"},[t._v("\n          "+t._s(t.$moment(e.createdAt,"YYYY-MM-DDTHH:mm:ssZ").fromNow())+"\n        ")])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},279:function(t,e,n){"use strict";n.r(e);n(33);var r={props:{content:{type:Array,default:function(){return[]}},welcome:{type:Object,default:function(){}}},data:function(){return{detail:0}},computed:{filteredContent:function(){return this.detail?this.content:this.content.filter((function(t){return!1!==t.show}))}},methods:{formatDate:function(t){return this.$moment(t,"MMM YYYY").format("YYYY-MM")}}},o=n(27),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mx-auto mt-64 px-4 sm:px-16",attrs:{id:"about"}},[n("h1",{staticClass:"text-gray-900 font-bold text-3xl"},[t._v("About")]),t._v(" "),n("span",{staticClass:"text-blue-500"},[t._v("______")]),t._v(" "),n("nuxt-content",{staticClass:"about-welcome prose mt-16",attrs:{document:t.welcome}}),t._v(" "),n("ul",{staticClass:"rounded-3xl mt-20"},t._l(t.filteredContent,(function(e,r){return n("li",{key:e.slug},[n("article",[n("div",{staticClass:"grid md:grid-cols-8 xl:grid-cols-9 items-start relative p-3 sm:p-5 xl:p-6 overflow-hidden"},[n("h3",{staticClass:"font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("time",{staticClass:"md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0",attrs:{datetime:t.formatDate(e.from)}},[0==r?n("svg",{staticClass:"w-3 h-3 mr-6 overflow-visible text-green-400",attrs:{viewBox:"0 0 12 12"}},[n("circle",{attrs:{cx:"6",cy:"6",r:"6",fill:"currentColor"}}),t._v(" "),n("circle",{attrs:{cx:"6",cy:"6",r:"11",fill:"none",stroke:"currentColor","stroke-width":"2"}}),t._v(" "),t.filteredContent.length-1?n("path",{staticClass:"text-gray-200",attrs:{d:"M 6 18 V 500",fill:"none","stroke-width":"2",stroke:"currentColor"}}):t._e()]):r==t.filteredContent.length-1?n("svg",{staticClass:"w-3 h-3 mr-6 overflow-visible text-gray-300",attrs:{viewBox:"0 0 12 12"}},[n("circle",{attrs:{cx:"6",cy:"6",r:"6",fill:"currentColor"}}),t._v(" "),n("path",{staticClass:"text-gray-200",attrs:{d:"M 6 -6 V -30",fill:"none","stroke-width":"2",stroke:"currentColor"}})]):n("svg",{staticClass:"w-3 h-3 mr-6 overflow-visible text-gray-300",attrs:{viewBox:"0 0 12 12"}},[n("circle",{attrs:{cx:"6",cy:"6",r:"6",fill:"currentColor"}}),t._v(" "),n("path",{staticClass:"text-gray-200",attrs:{d:"M 6 -6 V -30",fill:"none","stroke-width":"2",stroke:"currentColor"}}),t._v(" "),n("path",{staticClass:"text-gray-200",attrs:{d:"M 6 18 V 500",fill:"none","stroke-width":"2",stroke:"currentColor"}})]),t._v(t._s(e.from)+" "),e.to?n("span",{staticClass:"px-1"},[t._v("―")]):t._e(),t._v("\n            "+t._s(e.to))]),t._v(" "),n("div",{staticClass:"md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0"},[n("div",{staticClass:"flex flex-wrap mb-2 mt-2"},[n("icon-location",{staticClass:"w-6 h-6 p-1 bg-gradient-to-br from-indigo-400 to-indigo-700 rounded-md text-indigo-50"}),t._v(" "),n("span",{staticClass:"px-2 text-sm text-gray-500 flex self-center"},[t._v(t._s(e.location))])],1),t._v(" "),e.company?n("div",{staticClass:"flex flex-wrap mb-4"},[n("icon-briefcase",{staticClass:"w-6 h-6 p-1 bg-gradient-to-br from-blue-400 to-blue-700 rounded-md text-blue-50"}),t._v(" "),n("span",{staticClass:"px-2 text-sm text-gray-500 flex self-center"},[t._v(t._s(e.company))])],1):t._e(),t._v(" "),e.university?n("div",{staticClass:"flex flex-wrap mb-4"},[n("icon-academic",{staticClass:"w-6 h-6 p-1 bg-gradient-to-br from-green-400 to-green-700 rounded-md text-green-50"}),t._v(" "),n("span",{staticClass:"px-2 text-sm text-gray-500 flex self-center"},[t._v(t._s(e.university))])],1):t._e(),t._v(" "),n("nuxt-content",{staticClass:"prose",attrs:{document:e}})],1)])])])})),0),t._v(" "),0==t.detail?n("button",{staticClass:"bg-blue-500 px-4 py-2 rounded-full text-white text-sm mx-auto block mt-16",attrs:{type:"button"},on:{click:function(e){t.detail=1}}},[t._v("\n    I can show you more positions!\n  ")]):t._e(),t._v(" "),1==t.detail?n("button",{staticClass:"bg-blue-500 px-4 py-2 rounded-full text-white text-sm mx-auto block mt-16",attrs:{type:"button"},on:{click:function(e){t.detail=2}}},[t._v("\n    Down for even more details?!\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconLocation:n(258).default,IconBriefcase:n(259).default,IconAcademic:n(260).default})},280:function(t,e,n){"use strict";n.r(e);var r={props:{content:{type:Array,default:function(){return[]}},welcome:{type:Object,default:function(){}}}},o=n(27),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mx-auto mt-64 px-4 sm:px-16",attrs:{id:"projects"}},[n("h1",{staticClass:"text-gray-900 font-bold text-3xl"},[t._v("Projects")]),t._v(" "),n("span",{staticClass:"text-blue-500"},[t._v("______")]),t._v(" "),n("nuxt-content",{staticClass:"prose mt-12",attrs:{document:t.welcome}}),t._v(" "),n("ul",{staticClass:"mt-16"},t._l(t.content,(function(e){return n("li",{key:e.slug,staticClass:"mb-16"},[n("h2",{staticClass:"font-bold"},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticClass:"block text-gray-600 font-bold text-xs"},[t._v(t._s(e.from)+" - "+t._s(e.to))]),t._v(" "),n("nuxt-content",{staticClass:"mt-4 text-gray-600",attrs:{document:e}})],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports},281:function(t,e,n){"use strict";n.r(e);n(33);var r={props:{content:{type:Array,default:function(){return[]}}},data:function(){return{language:"en"}},computed:{filteredContent:function(){var t=this;return this.content.filter((function(e){return e.language===t.language}))}}},o=(n(261),n(27)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mx-auto my-64 px-4 sm:px-16",attrs:{id:"books"}},[n("h1",{staticClass:"text-gray-900 font-bold text-3xl"},[t._v("Books")]),t._v(" "),n("span",{staticClass:"text-blue-500"},[t._v("______")]),t._v(" "),n("div",{staticClass:"text-center space-x-12"},[n("button",{class:{"language-active":"en"===t.language},attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.language="en"}}},[t._v("\n      English\n    ")]),t._v(" "),n("button",{class:{"language-active":"fa"===t.language},attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.language="fa"}}},[t._v("\n      فارسی\n    ")])]),t._v(" "),n("div",{staticClass:"my-16 flex space-x-8"},t._l(t.filteredContent,(function(e){return n("div",{key:e.slug},[n("img",{staticClass:"rounded-lg shadow-lg mb-4",attrs:{src:e.cover}}),t._v(" "),n("div",{staticClass:"mb-8"},[n("span",{staticClass:"px-2 py-1 rounded-md text-xs uppercase bg-gray-100 text-gray-400 border-gray-100 hover:bg-blue-100 hover:text-blue-400 hover:border-blue-100 shadow-xs border"},[t._v(t._s(e.tags))])]),t._v(" "),n("h2",{staticClass:"font-bold text-base"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"text-gray-500 mt-4"},[t._v("\n        "+t._s(e.description)+"\n      ")])])})),0)])}),[],!1,null,null,null);e.default=component.exports},282:function(t,e,n){"use strict";n.r(e);n(33),n(34),n(43),n(8),n(35),n(36);var r=n(263),o=n.n(r),l={props:{content:{type:Array,default:function(){return[]}},welcome:{type:Object,default:function(){}}},data:function(){return{magicGrid:null,loadingGrid:!0}},mounted:function(){var t=this,e=new o.a({container:".magic-grid",animate:!0,gutter:20,items:1,useMin:!0,maxColumns:6});e.listen(),Promise.all(Array.from(document.images).filter((function(img){return!img.complete})).map((function(img){return new Promise((function(t){img.onload=img.onerror=t}))}))).then((function(){e.positionItems(),t.loadingGrid=!1}))}},c=n(27),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"arts"}},[e("div",{staticClass:"container mx-auto mt-64 mb-8 px-4 sm:px-16"},[e("h1",{staticClass:"text-gray-900 font-bold text-3xl"},[this._v("Arts")]),this._v(" "),e("span",{staticClass:"text-blue-500"},[this._v("______")]),this._v(" "),e("nuxt-content",{staticClass:"my-16",attrs:{document:this.welcome}})],1),this._v(" "),e("div",{staticClass:"magic-grid mx-auto mb-64 mt-16"},this._l(Array(1),(function(img,t){return e("div",{key:t,staticClass:"flex justify-center items-center w-64"},[e("img",{staticClass:"rounded-md shadow-md",attrs:{src:"https://source.unsplash.com/random/"+(t+1)}})])})),0)])}),[],!1,null,null,null);e.default=component.exports},283:function(t,e,n){"use strict";n.r(e);var r={props:{content:{type:Array,default:function(){return[]}}}},o=n(27),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container mx-auto py-16 px-4 sm:px-16",attrs:{id:"connect"}},[e("h1",{staticClass:"text-gray-900 font-bold text-3xl"},[this._v("Connect")]),this._v(" "),e("span",{staticClass:"text-blue-500"},[this._v("______")]),this._v(" "),e("div",{staticClass:"flex justify-center space-x-12 mt-16"},this._l(this.content,(function(t){return e("a",{key:t.slug,attrs:{href:"https://github.com/amirmasoud"}},[e("icon-"+t.icon,{tag:"component"})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,n){"use strict";n.r(e);n(28);var r=n(5),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c,f,d,m,h,x,v,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("hello-welcome").fetch();case 3:return r=e.sent,e.next=6,n("about").sortBy("slug","desc").fetch();case 6:return o=e.sent,e.next=9,n("projects").fetch();case 9:return l=e.sent,e.next=12,n("blog").fetch();case 12:return c=e.sent,e.next=15,n("books").fetch();case 15:return f=e.sent,e.next=18,n("arts").fetch();case 18:return d=e.sent,e.next=21,n("connects").fetch();case 21:return m=e.sent,e.next=24,n("bio").fetch();case 24:return h=e.sent,e.next=27,n("about-welcome").fetch();case 27:return x=e.sent,e.next=30,n("arts-welcome").fetch();case 30:return v=e.sent,e.next=33,n("projects-welcome").fetch();case 33:return _=e.sent,e.abrupt("return",{about:o,projects:l,blog:c,books:f,arts:d,connects:m,hello:r,bio:h,aboutWelcome:x,artsWelcome:v,ProjectsWelcome:_});case 35:case"end":return e.stop()}}),e)})))()}},l=n(27),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-50"},[n("app-hello",{attrs:{content:t.hello}}),t._v(" "),n("app-bio",{attrs:{content:t.bio}}),t._v(" "),n("app-blog",{attrs:{content:t.blog}}),t._v(" "),n("app-about",{attrs:{content:t.about,welcome:t.aboutWelcome}}),t._v(" "),n("app-projects",{attrs:{content:t.projects,welcome:t.ProjectsWelcome}}),t._v(" "),n("app-books",{attrs:{content:t.books}}),t._v(" "),n("app-arts",{attrs:{content:t.arts,welcome:t.artsWelcome}}),t._v(" "),n("app-connect",{attrs:{content:t.connects}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppHello:n(276).default,AppBio:n(277).default,AppBlog:n(278).default,AppAbout:n(279).default,AppProjects:n(280).default,AppBooks:n(281).default,AppArts:n(282).default,AppConnect:n(283).default})}}]);