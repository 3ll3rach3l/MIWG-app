(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,a){},27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),s=a.n(c),u=(a(32),a(3)),o=a.n(u),i=a(10),l=a(8),m=a(11),p=a(2),d=a(5),b=Object(d.a)(),E=a(15),f=a.n(E),v="auth/SET_USER",h=function(e){return e?{type:v,user:e}:{type:v,user:{}}},g=a(9);a(24);var O=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),d=u[0],b=u[1],E=Object(g.c)((function(e){return e.auth.id})),v=Object(g.b)(),O=function(e){e.preventDefault(),v(function(e,t){return function(){var a=Object(i.a)(o.a.mark((function a(n){var r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/api/session",{method:"post",headers:{"Content-Type":"application/json","XSRF-TOKEN":f.a.get("XSRF-TOKEN")},body:JSON.stringify({email:e,password:t})});case 2:return r=a.sent,a.next=5,r.json();case 5:return r.data=a.sent,r.ok&&n(h(r.data.user)),a.abrupt("return",r);case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(a,d))};return E?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",{className:"auth-container"},r.a.createElement("form",{className:"auth-form",onSubmit:O},r.a.createElement("div",{className:"errors-container"},r.a.createElement("ul",{className:"errors",id:"login-errors"})),r.a.createElement("div",{className:"signUpLabel"},r.a.createElement("input",{type:"text",className:"signup",placeholder:"Email",onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"signUpLabel"},r.a.createElement("input",{type:"password",className:"signup",placeholder:"Password",onChange:function(e){return b(e.target.value)}})),r.a.createElement("div",{className:"buttonDiv"},r.a.createElement("button",{className:"authButton",type:"submit",onClick:O},"Log in")),r.a.createElement("div",{className:"buttonDiv"},r.a.createElement("button",{className:"authButton",type:"submit",onClick:function(e){e.preventDefault(),v(function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/session",{method:"post",headers:{"Content-Type":"application/json","XSRF-TOKEN":f.a.get("XSRF-TOKEN")},body:JSON.stringify({email:"lauren@example.com",password:"password"})});case 2:return a=e.sent,e.next=5,a.json();case 5:return a.data=e.sent,a.ok&&t(h(a.data.user)),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Log in as demo user")),r.a.createElement("div",{className:"signUpOption"},r.a.createElement("span",null,"Not a member? ",r.a.createElement(m.b,{to:"/signup"},"Sign up")))))};var N=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),d=u[0],b=u[1],E=Object(n.useState)(""),v=Object(l.a)(E,2),O=v[0],N=v[1],j=Object(g.b)(),S=function(e){e.preventDefault(),j(function(e,t,a){return function(){var n=Object(i.a)(o.a.mark((function n(r){var c;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/users/signup",{method:"post",headers:{"Content-Type":"application/json","XSRF-TOKEN":f.a.get("XSRF-TOKEN")},body:JSON.stringify({username:e,email:t,password:a})});case 2:return c=n.sent,n.next=5,c.json();case 5:return c.data=n.sent,c.ok&&r(h(c.data.user)),n.abrupt("return",c);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(d,a,O))};return Object(g.c)((function(e){return e.auth.id}))?r.a.createElement(p.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"auth-container"},r.a.createElement("form",{className:"auth-form",onSubmit:S},r.a.createElement("div",{className:"errors-container"},r.a.createElement("ul",{className:"errors",id:"sign-up-errors"})),r.a.createElement("div",{className:"buttonDiv"},r.a.createElement("div",{className:"signUpLabel"},r.a.createElement("input",{type:"text",className:"signup",placeholder:"Username",onChange:function(e){return b(e.target.value)}}))),r.a.createElement("div",{className:"buttonDiv"},r.a.createElement("div",{className:"signUpLabel"},r.a.createElement("input",{type:"text",className:"signup",placeholder:"Email",id:"outlined-basic",onChange:function(e){return c(e.target.value)}}))),r.a.createElement("div",{className:"buttonDiv"},r.a.createElement("div",{className:"signUpLabel"},r.a.createElement("input",{type:"password",className:"signup",placeholder:"Password",id:"outlined-basic",onChange:function(e){return N(e.target.value)}}))),r.a.createElement("div",{className:"buttonDiv"},r.a.createElement("button",{className:"authButton",type:"submit",onClick:S},"Sign Up"),r.a.createElement("div",{className:"signUpOption"},r.a.createElement("span",null,"Already a member? ",r.a.createElement(m.b,{to:"/login"},"Log In")))))))};function j(){return r.a.createElement(p.c,{history:b},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/signup",component:N}),r.a.createElement(p.b,{path:"/login",component:O}),r.a.createElement(p.b,{path:"/"},r.a.createElement("h1",null,"My Home Page"))))}var S=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(g.b)();return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/session");case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:t.data=e.sent,s(h(t.data));case 8:c(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),a?null:(console.log("____Rendering app_____"),r.a.createElement(m.a,null,r.a.createElement(j,null)))},y=a(12),w=a(26);var _,x=Object(y.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return t.user;case"auth/LOGOUT_USER":return{};default:return e}}});_=Object(y.a)(w.a);var T,C=Object(y.d)(x,T,_);"production"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).Node_ENV&&(window.store=C),s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g.a,{store:C},r.a.createElement(S,null))),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.431b65ce.chunk.js.map