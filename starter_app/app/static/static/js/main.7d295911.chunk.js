(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{130:function(e,a,t){e.exports=t(149)},142:function(e,a,t){},143:function(e,a,t){},145:function(e,a,t){},146:function(e,a,t){},147:function(e,a,t){},148:function(e,a,t){},149:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(9),l=t.n(i),o=(t(95),t(10)),c=t.n(o),s=t(19),u=t(16),m=t(49),d=t(18),p=t(26),f=Object(p.a)(),g=t(46),b=t.n(g),h="auth/SET_USER",v=function(e){return e?{type:h,user:e}:{type:h,user:{}}},E=t(12),y=t(211),O=t(193),j=t(192),S=t(189),x=t(194),w=t(206),C=t(73),N=t.n(C),k=t(61),T=t(190),I=t(191),M=t(107);function _(){return r.a.createElement(k.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(S.a,{color:"inherit",href:"https://github.com/3ll3rach3l/MIWG-app//"},"Lauren Beard")," ",(new Date).getFullYear(),".")}var R=Object(T.a)((function(e){return{body:{backgroundColor:"black"},paper:{margin:e.spacing(5),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(3),width:"100%"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function A(){var e=R(),a=Object(n.useState)(""),t=Object(u.a)(a,2),i=t[0],l=t[1],o=Object(n.useState)(""),m=Object(u.a)(o,2),p=m[0],f=m[1],g=Object(E.c)((function(e){return e.auth.id})),h=Object(E.b)();return g?r.a.createElement(d.a,{to:"/"}):r.a.createElement(I.a,{component:"main",maxWidth:"xs"},r.a.createElement(M.a,{className:e.paper},r.a.createElement(y.a,{className:e.avatar},r.a.createElement(N.a,null)),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return l(e.target.value)},autoFocus:!0}),r.a.createElement(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return f(e.target.value)}}),r.a.createElement(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:e.submit,onClick:function(e){e.preventDefault(),h(function(e,a){return function(){var t=Object(s.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/session",{method:"post",headers:{"Content-Type":"application/json","XSRF-TOKEN":b.a.get("XSRF-TOKEN")},body:JSON.stringify({email:e,password:a})});case 2:return r=t.sent,t.next=5,r.json();case 5:return r.data=t.sent,r.ok&&n(v(r.data.user)),t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(i,p))}},"Sign In"),r.a.createElement(x.a,{container:!0},r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(S.a,{href:"#",variant:"body2",onClick:function(e){e.preventDefault(),h(function(){var e=Object(s.a)(c.a.mark((function e(a){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/session",{method:"post",headers:{"Content-Type":"application/json","XSRF-TOKEN":b.a.get("XSRF-TOKEN")},body:JSON.stringify({email:"lauren@example.com",password:"password"})});case 2:return t=e.sent,e.next=5,t.json();case 5:return t.data=e.sent,t.ok&&a(v(t.data.user)),e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}},"Demo Sign In")),r.a.createElement(x.a,{item:!0},r.a.createElement(S.a,{href:"/signup",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(w.a,{mt:8},r.a.createElement(_,null)))}t(142);function D(){return r.a.createElement(k.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(S.a,{color:"inherit",href:"https://github.com/3ll3rach3l/MIWG-app//"},"Lauren Beard")," ",(new Date).getFullYear(),".")}var L=Object(T.a)((function(e){return{root:{backgroundColor:"black"},paper:{margin:e.spacing(5),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(3),width:"100%"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function F(){var e=L(),a=Object(n.useState)(""),t=Object(u.a)(a,2),i=t[0],l=t[1],o=Object(n.useState)(""),m=Object(u.a)(o,2),p=m[0],f=m[1],g=Object(n.useState)(""),h=Object(u.a)(g,2),C=h[0],k=h[1],T=Object(E.b)(),_=function(e){e.preventDefault(),T(function(e,a,t){return function(){var n=Object(s.a)(c.a.mark((function n(r){var i;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/users/signup",{method:"post",headers:{"Content-Type":"application/json","XSRF-TOKEN":b.a.get("XSRF-TOKEN")},body:JSON.stringify({username:e,email:a,password:t})});case 2:return i=n.sent,n.next=5,i.json();case 5:return i.data=n.sent,i.ok&&r(v(i.data.user)),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(p,i,C))};return Object(E.c)((function(e){return e.auth.id}))?r.a.createElement(d.a,{to:"/"}):r.a.createElement(I.a,{component:"main",maxWidth:"xs"},r.a.createElement(M.a,{className:e.paper},r.a.createElement(y.a,{className:e.avatar},r.a.createElement(N.a,null)),r.a.createElement("form",{className:e.form,onSubmit:_},r.a.createElement(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"text",id:"username",label:"Username",autoFocus:!0,onChange:function(e){return f(e.target.value)}}),r.a.createElement(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"text",id:"emailSignup",label:"Email",autoFocus:!0,onChange:function(e){return l(e.target.value)}}),r.a.createElement(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"passwordSignup",onChange:function(e){return k(e.target.value)}}),r.a.createElement(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:e.submit,onClick:_},"Sign Up"),r.a.createElement(x.a,{container:!0},r.a.createElement(x.a,{item:!0},r.a.createElement(S.a,{href:"/login",variant:"body2"},"Already a member? Sign In"))))),r.a.createElement(w.a,{mt:8},r.a.createElement(D,null)))}var G=t(153),P=t(155),W=t(210),B=t(195),K=t(208);var U=t(154),X=t(159),q=t(213),z=t(156);var V=t(209);var J=t(24),H=t(205),Y=t(105);var Z=t(79),Q=Object(T.a)((function(e){return{root:{margin:e.spacing(.5)},label:{textTransform:"none"}}}));var $=Object(T.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));var ee={Input:function(e){var a=e.name,t=e.label,n=e.value,i=e.error,l=void 0===i?null:i,o=e.onChange;return r.a.createElement(j.a,Object.assign({variant:"outlined",label:t,name:a,value:n,onChange:o},l&&{error:!0,helperText:l}))},RadioGroup:function(e){var a=e.name,t=e.label,n=e.value,i=e.onChange,l=e.items;return r.a.createElement(G.a,null,r.a.createElement(P.a,null,t),r.a.createElement(W.a,{row:!0,name:a,value:n,onChange:i},l.map((function(e){return r.a.createElement(B.a,{key:e.id,value:e.id,control:r.a.createElement(K.a,null),label:e.title})}))))},Select:function(e){var a=e.name,t=e.label,n=e.value,i=e.error,l=void 0===i?null:i,o=e.onChange,c=e.options;return r.a.createElement(G.a,Object.assign({variant:"outlined"},l&&{error:!0}),r.a.createElement(U.a,null,t),r.a.createElement(X.a,{label:t,name:a,value:n,onChange:o},r.a.createElement(q.a,{value:""},"None"),c.map((function(e){return r.a.createElement(q.a,{key:e.id,value:e.id},e.title)}))),l&&r.a.createElement(z.a,null,l))},Checkbox:function(e){var a=e.name,t=e.label,n=e.value,i=e.onChange;return r.a.createElement(G.a,null,r.a.createElement(B.a,{control:r.a.createElement(V.a,{name:a,color:"primary",checked:n,onChange:function(e){return i(function(e,a){return{target:{name:e,value:a}}}(a,e.target.checked))}}),label:t}))},DatePicker:function(e){var a=e.name,t=e.label,n=e.value,i=e.onChange;return r.a.createElement(J.a,{utils:Y.a},r.a.createElement(H.a,{disableToolbar:!0,variant:"inline",inputVariant:"outlined",label:t,format:"MMM/dd/yyyy",name:a,value:n,onChange:function(e){return i(function(e,a){return{target:{name:e,value:a}}}(a,e))}}))},Button:function(e){var a=e.text,t=e.size,n=e.color,i=e.variant,l=e.onClick,o=Object(Z.a)(e,["text","size","color","variant","onClick"]),c=Q();return r.a.createElement(O.a,Object.assign({variant:i||"contained",size:t||"large",color:n||"secondary",onClick:l},o,{classes:{root:c.root,label:c.label}}),a)},Details:function(e){$();var a=e.name,t=e.label,n=e.value,i=e.error,l=void 0===i?null:i,o=e.onChange;return r.a.createElement(j.a,Object.assign({rows:4,multiline:!0,variant:"outlined",label:t,name:a,value:n,onChange:o},l&&{error:!0,helperText:l}))}},ae=(t(143),Object(T.a)((function(e){return{paper:{margin:e.spacing(5),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(5),width:"80%",color:"red",opacity:.8},buttons:{padding:"10px",width:"100%"}}})));function te(){var e=Object(E.c)((function(e){return!!e.auth.id})),a=ae();return e?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(I.a,{component:"main",maxWidth:"xs ",elevation:3},r.a.createElement(M.a,{className:a.paper},r.a.createElement(k.a,{variant:"h3"},"In various tribes, red is known to be the only color spirits see. It is hoped that by wearing red, we can call back the missing spirits of our women and children so we can lay them to rest..."),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement(ee.Button,{type:"submit",text:"Map",className:a.buttons,onClick:function(){return f.push("/map")}}),r.a.createElement(ee.Button,{text:"Missing",className:a.buttons,color:"default",onClick:function(){return f.push("/missing")}})))))):r.a.createElement(d.a,{to:"/login"})}var ne=t(66),re=function(){return function(){var e=Object(s.a)(c.a.mark((function e(a){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/missing");case 2:return t=e.sent,e.next=5,t.json();case 5:return t.data=e.sent,t.ok&&a({type:"GET_MISSING",missing:t.data.missings}),e.abrupt("return",t.data);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},ie=function(e,a,t,n,r,i,l,o,u,m){var d={fullName:e,age:a,tribalAffiliation:t,location:n,dateLastSeen:r,details:i,status:l,userId:o,lat:u,lng:m};return console.log("this is the body",d),function(){var d=Object(s.a)(c.a.mark((function s(d){var p;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return console.log("hello"),c.next=3,fetch("/api/missing/new",{method:"post",headers:{"Content-Type":"application/json","XSRF-TOKEN":b.a.get("XSRF-TOKEN")},body:JSON.stringify({fullName:e,age:a,tribalAffiliation:t,location:n,dateLastSeen:r,details:i,status:l,userId:o,lat:u,lng:m})});case 3:return p=c.sent,console.log("this is lat lng",u,m),console.log("res",p),c.next=8,p.json();case 8:p.data=c.sent,console.log("this is res.data",p.data.newMissing),p.ok&&d({type:"POST_MISSING",missing:p.data.newMissing});case 11:case"end":return c.stop()}}),s)})));return function(e){return d.apply(this,arguments)}}()},le=t(55),oe=t(65);t(144),t(145);function ce(e){var a=e.panTo,t=Object(le.a)({requestOptions:{location:{lat:function(){return 39.099728},lng:function(){return-94.578568}},radius:1e5}}),n=t.ready,i=t.value,l=t.suggestions,o=l.status,u=l.data,m=t.setValue,d=t.clearSuggestions;return r.a.createElement("div",{className:"search"},r.a.createElement(oe.a,{onSelect:function(){var e=Object(s.a)(c.a.mark((function e(t){var n,r,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(t,!1),d(),e.prev=2,e.next=5,Object(le.b)({address:t});case 5:return n=e.sent,e.next=8,Object(le.c)(n[0]);case 8:r=e.sent,i=r.lat,l=r.lng,a({lat:i,lng:l}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),console.error("error!"),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(a){return e.apply(this,arguments)}}()},r.a.createElement(oe.b,{value:i,onChange:function(e){m(e.target.value)},disabled:!n,placeholder:"Enter a city"}),r.a.createElement(oe.d,null,"OK"===o&&u.map((function(e){var a=e.id,t=e.description;return r.a.createElement(oe.c,{key:a,value:t})})))))}var se=t(197),ue=t(196),me=t(157),de=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],r=a[1];return{isShowing:t,toggle:function(){r(!t)}}},pe=t(30),fe=t(54);var ge=Object(T.a)((function(e){return{root:{"& .MuiFormControl-root":{width:"60%",margin:e.spacing(1)}}}}));function be(e){var a=ge(),t=(e.children,Object(Z.a)(e,["children"]));return r.a.createElement("form",Object.assign({className:a.root,autoComplete:"off"},t),e.children)}var he=[{id:"missing",title:"Missing"},{id:"found",title:"Found"},{id:"deceased",title:"Deceased"}];function ve(){var e=Object(E.b)(),a=Object(E.c)((function(e){return e.auth.id})),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,a=Object(pe.a)({},o);if("fullName"in e&&(a.fullName=e.fullName?"":"Please enter full name."),"age"in e&&(a.age=e.age?"":"Please enter an age."),"tribalAffiliation"in e&&(a.tribalAffiliation=e.tribalAffiliation?"":"Please enter tribal affiliation."),"location"in e&&(a.location=e.location?"":"Please enter a location"),m(Object(pe.a)({},a)),e===l)return Object.values(a).every((function(e){return""===e}))},i=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2?arguments[2]:void 0,r=Object(n.useState)(e),i=Object(u.a)(r,2),l=i[0],o=i[1],c=Object(n.useState)({}),s=Object(u.a)(c,2),m=s[0],d=s[1],p=function(e){var n=e.target,r=n.name,i=n.value;o(Object(pe.a)(Object(pe.a)({},l),{},Object(fe.a)({},r,i))),a&&t(Object(fe.a)({},r,i))},f=function(){o(e),d({})};return{values:l,setValues:o,errors:m,setErrors:d,handleInputChange:p,resetForm:f}}({id:0,fullName:"",age:"",tribalAffiliation:"",location:"",dateLastSeen:new Date,details:"",status:"missing",userId:a},!0,t),l=i.values,o=(i.setValues,i.errors),m=i.setErrors,d=i.handleInputChange,p=i.resetForm,g=function(){var a=Object(s.a)(c.a.mark((function a(){var t,n,r,i,o,s,u,m,d,p,g,b;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=l.location,n=l.fullName,r=l.age,i=l.tribalAffiliation,o=l.dateLastSeen,s=l.details,u=l.status,m=l.userId,a.prev=8,a.next=11,Object(le.b)({address:t});case 11:return d=a.sent,a.next=14,Object(le.c)(d[0]);case 14:return p=a.sent,g=p.lat,b=p.lng,console.log("these are coords",{lat:g,lng:b}),e(ie(n,r,i,t,o,s,u,m,g,b)),a.abrupt("return",f.push("/map"));case 22:a.prev=22,a.t0=a.catch(8),console.log(a.t0);case 25:case 26:case"end":return a.stop()}}),a,null,[[8,22]])})));return function(){return a.apply(this,arguments)}}();return r.a.createElement(be,{onSubmit:function(e){e.preventDefault(),t()&&(g(),p(),alert("Submitted"))}},r.a.createElement(x.a,{container:!0},r.a.createElement(x.a,{item:!0,xs:6},r.a.createElement(ee.Input,{name:"fullName",label:"Full Name",value:l.fullName,onChange:d,error:o.fullName}),r.a.createElement(ee.Input,{label:"Age",name:"age",value:l.age,onChange:d,error:o.age}),r.a.createElement(ee.Input,{label:"Tribal Affiliation",name:"tribalAffiliation",value:l.tribalAffiliation,onChange:d,error:o.tribalAffiliation}),r.a.createElement(ee.Input,{label:"City, ST last seen",name:"location",value:l.location,onChange:d,error:o.location})),r.a.createElement(x.a,{item:!0,xs:6},r.a.createElement(ee.DatePicker,{name:"dateLastSeen",label:"Date last seen",value:l.dateLastSeen,onChange:d}),r.a.createElement(ee.Details,{name:"details",label:"Additional details",value:l.details,onChange:d}),r.a.createElement(ee.RadioGroup,{name:"status",label:"Status",value:l.status,onChange:d,items:he}),r.a.createElement("div",null,r.a.createElement(ee.Button,{type:"submit",text:"Submit"}),r.a.createElement(ee.Button,{text:"Reset",color:"default",onClick:p})))))}t(146);var Ee=Object(T.a)((function(e){return{pageContent:{margin:e.spacing(5),padding:e.spacing(3),opacity:.9}}})),ye=function(e){var a=e.isShowing,t=e.hide,n=Ee();return r.a.createElement("div",{className:"modal"},a?l.a.createPortal(r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal-overlay"}),r.a.createElement("div",{className:"modal-wrapper","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},r.a.createElement("div",{className:"modal"},r.a.createElement(M.a,{className:n.pageContent},r.a.createElement(ve,null),r.a.createElement("div",{className:"modal-header"},r.a.createElement("button",{type:"button",className:"modal-close-button","data-dismiss":"modal","aria-label":"Close",onClick:t},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))))),document.body):null)},Oe=Object(T.a)((function(e){return{root:{flexGrow:1},logoutButton:{marginRight:e.spacing(10),marginLeft:e.spacing(20)}}}));var je=function(){var e=Object(E.b)(),a=Oe(),t=function(){var a=Object(s.a)(c.a.mark((function a(){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(function(){var e=Object(s.a)(c.a.mark((function e(a){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/session",{method:"delete",headers:{}});case 2:return(t=e.sent).ok&&a({type:"auth/LOGOUT_USER"}),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}());case 2:a.sent.ok&&(b.a.remove("token"),f.push("/login"));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",{id:"logout-button"},r.a.createElement(O.a,{variant:"contained",className:a.logoutButton,onClick:t}," Log Out"))},Se=Object(T.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(1),marginLeft:e.spacing(-30)},title:{flexGrow:1},homeButton:{marginRight:e.spacing(1),marginLeft:e.spacing(10),width:"25%"}}}));function xe(){var e=Se(),a=de(),t=a.isShowing,n=a.toggle,i=r.a.useState(null),l=Object(u.a)(i,2),o=(l[0],l[1],Object(E.c)((function(e){return e.auth.id})));console.log(o);return r.a.createElement("div",{className:e.root},r.a.createElement(se.a,{position:"fixed"},r.a.createElement(ue.a,null,r.a.createElement(me.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(O.a,{className:e.homeButton,variant:"contained",onClick:function(){return f.push("/")}}," Home "),r.a.createElement(q.a,{onClick:function(){return f.push("/missing")}},"View Missing")),o?r.a.createElement(O.a,{variant:"contained",color:"secondary",onClick:n},r.a.createElement(k.a,{variant:"h8",className:e.title},"Report Missing")," "):r.a.createElement(O.a,{variant:"contained",color:"secondary",onClick:n,disabled:!0},r.a.createElement(k.a,{variant:"h8",className:e.title},"Report Missing")),r.a.createElement(ye,{isShowing:t,hide:n}),o?r.a.createElement(je,null):null)))}t(147);var we=["places"],Ce={width:"100vs",height:"100vh"},Ne={lat:39.099728,lng:-94.578568},ke={styles:[{stylers:[{visibility:"on"},{saturation:-100},{gamma:.54}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{color:"#4d4946"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"simplified"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{visibility:"simplified"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{gamma:.48}]},{featureType:"transit.station",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{gamma:7.18}]}],disableDefaultUI:!0};function Te(){var e=Object(ne.d)({googleMapsApiKey:"AIzaSyCN3q2wKf6rz4IotGPW1pDXwHhcpflU6Ac",libraries:we}),a=e.isLoaded,t=e.loadError,i=Object(E.b)(),l=Object(E.c)((function(e){return e.missingReducer.missing})),o=r.a.useState([]),m=Object(u.a)(o,2),d=(m[0],m[1]),p=r.a.useState(null),f=Object(u.a)(p,2),g=f[0],b=f[1];Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(re());case 2:a=e.sent,console.log("this is inside the missingObj",a),d(a.missings);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i]);var h=r.a.useRef(),v=r.a.useCallback((function(e){h.current=e}),[]),y=r.a.useCallback((function(e){var a=e.lat,t=e.lng;h.current.panTo({lat:a,lng:t}),h.current.setZoom(8)}),[]);return t?"Error loading maps":a?l?r.a.createElement("div",{className:"googleMap",style:{width:"100vw",height:"100vh"}},r.a.createElement(ce,{panTo:y}),r.a.createElement(xe,null),r.a.createElement(ne.a,{mapContainerStyle:Ce,zoom:4.5,center:Ne,options:ke,onLoad:v},l.map((function(e){return r.a.createElement(ne.c,{key:e.location,position:{lat:e.lat,lng:e.lng},onClick:function(){b(e)}})})),g?r.a.createElement(ne.b,{position:{lat:g.lat,lng:g.lng},onCloseClick:function(){b(null)}},r.a.createElement("div",null,r.a.createElement("h2",null,g.fullName),r.a.createElement("h2",null,g.status),r.a.createElement("h3",null,"Tribal Affiliation: ",g.tribalAffiliation),r.a.createElement("h3",null,"Last Seen: ",g.dateLastSeen),r.a.createElement("h4",null,"Details: ",g.details))):null)):"loading missing":"Loading Maps"}var Ie=t(3),Me=t(198),_e=t(199),Re=t(200),Ae=t(201),De=t(202),Le=t(203),Fe=t(80),Ge=t(103),Pe=t.n(Ge),We=Object(T.a)((function(e){return{root:{minWidth:200},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{image:"/red-hand.svg",backgroundColor:Fe.a[500]},pos:{marginBotton:12},gridContainer:{paddingTop:"10px",paddingLeft:"40px",paddingRight:"40px"}}}));function Be(){var e=Object(E.b)(),a=We(),t=r.a.useState([]),i=Object(u.a)(t,2),l=(i[0],i[1]),o=r.a.useState(!1),m=Object(u.a)(o,2),d=m[0],p=m[1],f=(Object(E.c)((function(e){return e.auth.id})),Object(E.c)((function(e){return e.missingReducer.missing})));Object(n.useEffect)((function(){function a(){return(a=Object(s.a)(c.a.mark((function a(){var t;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(re());case 2:return t=a.sent,a.next=5,l(t.missings);case 5:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[e]);var g=function(){p(!d)};return f?r.a.createElement(x.a,{container:!0,spacing:4,className:a.gridContainer,justify:"center"},f.map((function(e){return r.a.createElement(x.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(Me.a,{key:e.id,className:a.root},r.a.createElement(_e.a,{avatar:r.a.createElement(y.a,{className:a.avatar},"M"),title:e.fullName,subheader:e.status}),r.a.createElement(Re.a,{className:a.media,image:"/MMIW-BLOG.png",title:"Recent Photo"}),r.a.createElement(Ae.a,{disableSpacing:!0},r.a.createElement(k.a,{paragraph:!0},"More Info:"),r.a.createElement(me.a,{className:Object(Ie.a)(a.expand,Object(fe.a)({},a.expandOpen,d)),onClick:g,"aria-expanded":d,"aria-label":"show more"},r.a.createElement(Pe.a,null))),r.a.createElement(De.a,{in:d,timeout:"auto",unmountOnExit:!0},r.a.createElement(Le.a,null,r.a.createElement(k.a,{paragraph:!0},"Age: ",e.age," "),r.a.createElement(k.a,{paragraph:!0},"Tribal Afilliiation: ",e.tribalAffiliation," "),r.a.createElement(k.a,{paragraph:!0},"Date Last Seen: ",e.dateLastSeen),r.a.createElement(k.a,{paragraph:!0},"City Last Seen: ",e.location),r.a.createElement(k.a,{paragraph:!0}," Details:"),r.a.createElement(k.a,{paragraph:!0},e.details)))))}))):"loading cards..."}t(148);function Ke(){var e=Object(E.b)();return Object(n.useEffect)((function(){e(re())}),[e]),r.a.createElement("div",{className:"cardContainer"},r.a.createElement(xe,null),r.a.createElement("div",{className:"spacer"}),r.a.createElement(Be,null))}function Ue(){return r.a.createElement(d.c,{history:f},r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/missing",component:Ke}),r.a.createElement(d.b,{path:"/map",component:Te}),r.a.createElement(d.b,{path:"/signup",component:F}),r.a.createElement(d.b,{path:"/login",component:A}),r.a.createElement(d.b,{path:"/",component:te})))}var Xe=t(204);var qe=function(){var e=Object(n.useState)(!0),a=Object(u.a)(e,2),t=a[0],i=a[1],l=Object(E.b)();return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/session/current");case 2:if(!(a=e.sent).ok){e.next=8;break}return e.next=6,a.json();case 6:a.data=e.sent,l(v(a.data));case 8:i(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),t?null:(console.log("____Rendering app_____"),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(Xe.a,null),r.a.createElement(Ue,null))))},ze=t(50),Ve=t(104);var Je,He=Object(ze.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case h:return a.user;case"auth/LOGOUT_USER":return{};default:return e}},missingReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_MISSING":return Object(pe.a)(Object(pe.a)({},e),{},{missing:a.missing});case"GET_ONE_MISSING":return Object(pe.a)(Object(pe.a)({},e),{},{oneMissing:a.oneMissing});case"POST_MISSING":return Object(pe.a)(Object(pe.a)({},e),{},{newMissingPerson:a.missing});default:return e}}});Je=Object(ze.a)(Ve.a);var Ye,Ze=Object(ze.d)(He,Ye,Je);"production"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GOOGLE_KEY:"AIzaSyCN3q2wKf6rz4IotGPW1pDXwHhcpflU6Ac"}).Node_ENV&&(window.store=Ze),l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E.a,{store:Ze},r.a.createElement(qe,null))),document.getElementById("root"))},95:function(e,a,t){}},[[130,1,2]]]);
//# sourceMappingURL=main.7d295911.chunk.js.map