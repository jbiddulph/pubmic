(window.webpackJsonp=window.webpackJsonp||[]).push([[37,10,15,16,17],{550:function(t,n,e){var content=e(554);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(75).default)("5578cc91",content,!0,{sourceMap:!1})},551:function(t,n,e){var content=e(556);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(75).default)("ac7e6708",content,!0,{sourceMap:!1})},552:function(t,n,e){t.exports=e.p+"img/logo.b64fdbc.png"},553:function(t,n,e){"use strict";e(550)},554:function(t,n,e){var r=e(74)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\n.start[data-v-b9b561a2]{\n  margin-top:40px!important\n}\n.container[data-v-b9b561a2]{\n  max-width:1140px;\n  margin:0 auto\n}\nh1[data-v-b9b561a2]{\n  font-size:2.3rem;\n  font-weight:700\n}\nh2[data-v-b9b561a2]{\n  font-size:1.6rem;\n  line-height:28px\n}\n.v-date-picker-table.v-btn.v-btn--active[data-v-b9b561a2]{\n  color:#8c0099!important\n}\nh1[data-v-b9b561a2],h2[data-v-b9b561a2],h3[data-v-b9b561a2],h4[data-v-b9b561a2],h5[data-v-b9b561a2],h6[data-v-b9b561a2]{\n  font-family:"Raleway",sans-serif\n}\nbody[data-v-b9b561a2]{\n  font-family:"Montserrat",sans-serif\n}\n.navbar-brand a[data-v-b9b561a2]{\n  padding:0!important\n}\n.navbar-brand a img[data-v-b9b561a2]{\n  max-height:3rem!important\n}\n.main-menu[data-v-b9b561a2]{\n  display:flex;\n  flex-direction:column\n}\n.nav-bar-holder[data-v-b9b561a2]{\n  height:36px\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},555:function(t,n,e){"use strict";e(551)},556:function(t,n,e){var r=e(74)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\n.start[data-v-e90938ba]{\n  margin-top:40px!important\n}\n.container[data-v-e90938ba]{\n  max-width:1140px;\n  margin:0 auto\n}\nh1[data-v-e90938ba]{\n  font-size:2.3rem;\n  font-weight:700\n}\nh2[data-v-e90938ba]{\n  font-size:1.6rem;\n  line-height:28px\n}\n.v-date-picker-table.v-btn.v-btn--active[data-v-e90938ba]{\n  color:#8c0099!important\n}\nh1[data-v-e90938ba],h2[data-v-e90938ba],h3[data-v-e90938ba],h4[data-v-e90938ba],h5[data-v-e90938ba],h6[data-v-e90938ba]{\n  font-family:"Raleway",sans-serif\n}\nbody[data-v-e90938ba]{\n  font-family:"Montserrat",sans-serif\n}\n.v-bottom-navigation[data-v-e90938ba]{\n  position:fixed;\n  bottom:0\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},557:function(t,n,e){"use strict";e.r(n);e(39),e(30),e(29),e(64),e(28),e(65);var r=e(20),o=e(2),l=(e(50),e(66));function c(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var v={props:{username:String,loggedIn:Boolean},data:function(){return{token:{},showNav:!1}},methods:{logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$auth.logout();case 2:case"end":return n.stop()}}),n)})))()}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},Object(l.c)({isAuthenticated:"auth/isAuthenticated",loggedInUser:"auth/loggedInUser"}))},d=(e(553),e(86)),component=Object(d.a)(v,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"nav-bar-holder is-paddingless"},[r("nav",{class:t.isAuthenticated?"navbar is-warning is-fixed-top":"navbar is-light is-fixed-top"},[r("div",{staticClass:"navbar-brand"},[r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[r("img",{attrs:{src:e(552),alt:"Logo"}})]),t._v(" "),r("div",{staticClass:"navbar-burger",class:{"is-active":t.showNav},attrs:{"data-target":"navMenu"},on:{click:function(n){t.showNav=!t.showNav}}},[r("span"),t._v(" "),r("span"),t._v(" "),r("span")])],1),t._v(" "),r("div",{staticClass:"navbar-menu",class:{"is-active":t.showNav},attrs:{id:"navMenu"}},[r("div",{staticClass:"navbar-start"},[t.isAuthenticated?t._e():r("div",{staticClass:"main-menu"},[r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/events"}},[t._v("Events")]),t._v(" "),r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/venues"}},[t._v("Venues")])],1),t._v(" "),t.isAuthenticated?r("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[r("a",{staticClass:"navbar-link"},[t._v("\n            Events\n          ")]),t._v(" "),r("div",{staticClass:"navbar-dropdown"},[r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/admin/events/add"}},[t._v("Add Event")]),t._v(" "),r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/admin/events"}},[t._v("Events")])],1)]):t._e(),t._v(" "),t.isAuthenticated?r("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[r("a",{staticClass:"navbar-link"},[t._v("\n            Venues\n          ")]),t._v(" "),r("div",{staticClass:"navbar-dropdown"},[r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/admin/venues/add"}},[t._v("Add Venue")]),t._v(" "),r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/admin/venues"}},[t._v("Venues")])],1)]):t._e(),t._v(" "),t.isAuthenticated?r("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[r("a",{staticClass:"navbar-link"},[t._v("\n            Users\n          ")]),t._v(" "),r("div",{staticClass:"navbar-dropdown"},[r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/admin/users/add"}},[t._v("Add User")]),t._v(" "),r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/admin/users"}},[t._v("Users")])],1)]):t._e()]),t._v(" "),r("div",{staticClass:"navbar-end"},[r("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[r("a",{staticClass:"navbar-link"},[t._v("\n            Admin\n          ")]),t._v(" "),t.isAuthenticated?r("div",{staticClass:"navbar-dropdown"},[r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/auth/user"}},[t._v(t._s(t.loggedInUser.name))]),t._v(" "),r("a",{staticClass:"navbar-item has-text-danger",on:{click:t.logout}},[t._v("Logout")])],1):r("div",{staticClass:"navbar-dropdown"},[r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/auth/register"}},[t._v("Register")]),t._v(" "),r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/auth/login"}},[t._v("Log In")])],1)])])])])])}),[],!1,null,"b9b561a2",null);n.default=component.exports},558:function(t,n,e){"use strict";e.r(n);var r={},o=(e(555),e(86)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,"e90938ba",null);n.default=component.exports},602:function(t,n,e){"use strict";e.r(n);var r={name:"Notification",props:["message"]},o=e(86),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"notification is-danger"},[t._v("\n  "+t._s(t.message)+"\n")])}),[],!1,null,null,null);n.default=component.exports},660:function(t,n,e){"use strict";e.r(n);var r=e(2),o=(e(50),e(22),{middleware:"guest",data:function(){return{name:"",email:"",password:"",password_confirmation:"",error:null}},methods:{register:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.post("auth/register",{name:t.name,email:t.email,password:t.password,password_confirmation:t.password_confirmation});case 3:return n.next=5,t.$auth.loginWith("local",{data:{email:t.email,password:t.password}});case 5:t.$router.push("/auth/user"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),t.error=n.t0.response.data.message;case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}}}),l=e(86),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-4 is-offset-4"},[e("h2",{staticClass:"title has-text-centered"},[t._v("Register!")]),t._v(" "),t.error?e("Notification",{attrs:{message:t.error}}):t._e(),t._v(" "),e("form",{attrs:{method:"post"},on:{submit:function(n){return n.preventDefault(),t.register.apply(null,arguments)}}},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Name")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",name:"Name",required:""},domProps:{value:t.name},on:{input:function(n){n.target.composing||(t.name=n.target.value)}}})])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Email")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",name:"email",required:""},domProps:{value:t.email},on:{input:function(n){n.target.composing||(t.email=n.target.value)}}})])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Password")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",name:"password",required:""},domProps:{value:t.password},on:{input:function(n){n.target.composing||(t.password=n.target.value)}}})])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Password")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password_confirmation,expression:"password_confirmation"}],staticClass:"input",attrs:{type:"password",name:"password_confirmation",required:""},domProps:{value:t.password_confirmation},on:{input:function(n){n.target.composing||(t.password_confirmation=n.target.value)}}})])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"has-text-centered",staticStyle:{"margin-top":"20px"}},[t._v("\n            Already got an account? "),e("nuxt-link",{attrs:{to:"/auth/login"}},[t._v("Login")])],1)],1)])])])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"control"},[e("button",{staticClass:"button is-dark is-fullwidth",attrs:{type:"submit"}},[t._v("Register")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Notification:e(602).default})},723:function(t,n,e){"use strict";e.r(n);var r={},o=e(86),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("LayoutNavbar"),t._v(" "),e("AuthRegister"),t._v(" "),e("LayoutFooter")],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{LayoutNavbar:e(557).default,AuthRegister:e(660).default,LayoutFooter:e(558).default})}}]);