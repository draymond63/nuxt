(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{203:function(e,t,o){var content=o(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(79).default)("0ce30756",content,!0,{sourceMap:!1})},223:function(e,t,o){"use strict";o(203)},224:function(e,t,o){var n=o(78)(!1);n.push([e.i,"#navbar[data-v-44fdc211]{width:100%}.desktop[data-v-44fdc211]{z-index:1;position:fixed;width:100vw;background:var(--main-color-1)}.desktop>.links[data-v-44fdc211]{display:flex;justify-content:space-around;max-width:var(--max-content-width);margin:auto}a[data-v-44fdc211]{color:var(--background-color-1);padding:1rem;text-decoration:none;font-size:1.5em;font-weight:500}.mobile[data-v-44fdc211]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:var(--background-color-1);display:flex;flex-direction:column}.mobile>a[data-v-44fdc211]{color:var(--text-color)}.mobile>a[data-v-44fdc211]:not(:last-child){border-bottom:1px solid var(--main-color-1)}button[data-v-44fdc211]{position:absolute;top:1.5rem;right:1.5rem;z-index:1;background:var(--main-color-1);border-radius:.7rem;padding:.4rem;font-size:2em;color:var(--background-color-1);font-weight:700}button>p[data-v-44fdc211]{line-height:1em}",""]),e.exports=n},231:function(e,t,o){"use strict";o.r(t);var n=o(1).a.extend({name:"NavBar",data:function(){return{isMobile:!1,mobileMenu:!1}},methods:{handleResize:function(){this.isMobile=window.innerWidth<850}},beforeMount:function(){var e=this;this.handleResize(),window.addEventListener("resize",(function(){return e.handleResize()}))}}),r=(o(223),o(34)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"navbar"}},[e.isMobile?o("button",{on:{click:function(t){e.mobileMenu=!0}}},[o("p",[e._v("☰")]),e._v(" "),e.mobileMenu?o("nav",{staticClass:"mobile"},[o("a",{attrs:{href:"#aboutme"},on:{click:function(t){e.mobileMenu=!1}}},[e._v("About Me")]),e._v(" "),o("a",{attrs:{href:"#experience"},on:{click:function(t){e.mobileMenu=!1}}},[e._v("Experience")]),e._v(" "),o("a",{attrs:{target:"_blank",href:"/resume.pdf"}},[e._v("Resume")])]):e._e()]):o("nav",{staticClass:"desktop"},[o("div",{staticClass:"links"},[o("NuxtLink",{attrs:{to:"/"}},[e._v("Daniel Raymond")]),e._v(" "),o("a",{attrs:{id:"about-link",href:"#about"}},[e._v("About Me")]),e._v(" "),o("a",{attrs:{id:"experience-link",href:"#experience"}},[e._v("Experience")]),e._v(" "),o("a",{attrs:{target:"_blank",href:"/resume.pdf"}},[e._v("Resume")])],1)])])}),[],!1,null,"44fdc211",null);t.default=component.exports}}]);