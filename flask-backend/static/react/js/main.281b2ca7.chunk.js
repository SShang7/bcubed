(this.webpackJsonpfrontend_options=this.webpackJsonpfrontend_options||[]).push([[0],{17:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(26),i=n.n(a),l=(n(33),n(13)),r=n(9),j=(n(34),n(35),n(1)),o=["btn--medium","btn--large"],b=function(e){var t=e.children,n=e.type,c=e.onClick,s=(e.buttonStyle,e.buttonSize),a=o.includes(s)?s:o[0];return Object(j.jsx)(r.b,{to:"/signup",className:"btn-mobile",children:Object(j.jsx)("button",{className:"btn ".concat(a," ").concat(a),onClick:c,type:n,children:t})})},d=n(28);var u=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!0),i=Object(l.a)(a,2),o=i[0],u=i[1],h=function(){return s(!1)},O=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(c.useEffect)((function(){O()}),[]),window.addEventListener("resize",O),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("nav",{className:"navbar",children:Object(j.jsxs)("div",{className:"navbar-container",children:[Object(j.jsxs)(r.b,{to:"/",className:"navbar-logo",onClick:h,children:["bcubed",Object(j.jsx)(d.a,{})]}),Object(j.jsx)("div",{className:"menu-icon",onClick:function(){return s(!n)},children:Object(j.jsx)("i",{className:n?"fas fa-times":"fas fa-bars"})}),Object(j.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{to:"/",className:"nav-links",onClick:h,children:"home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{to:"/trends",className:"nav-links",onClick:h,children:"trends"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{to:"/opc",className:"nav-links",onClick:h,children:"options profit calc"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{to:"/aboutus",className:"nav-links",onClick:h,children:"about us"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{to:"/login",className:"nav-links-mobile",onClick:h,children:"sign up"})})]}),o&&Object(j.jsx)(b,{buttonStyle:"btn--outline",children:"sign up"})]})})})},h=n(6),O=(n(17),n(14));n(42);var m=function(){return Object(j.jsxs)("div",{className:"hero-container",children:[Object(j.jsx)("h1",{children:"welcome!"}),Object(j.jsx)("p",{children:"ready to make some money?"}),Object(j.jsxs)("div",{className:"hero-btns",children:[Object(j.jsx)(r.b,{to:"/login",className:"homelink",children:Object(j.jsx)(O.a,{block:!0,size:"lg",children:"sign in"})}),Object(j.jsx)(r.b,{to:"/trends",className:"homelink",children:Object(j.jsx)(O.a,{block:!0,size:"lg",children:"enter"})})]})]})};var x=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(m,{})})},v=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"title is-1",children:"This is the trends Page"}),Object(j.jsxs)("p",{children:[" My token = ",window.token]})]})};var g=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{className:"title is-1",children:"This is the OPC Page"})})};var p=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{className:"title is-1",children:"This is the about us Page"})})},f=n(8);n(43);function N(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(l.a)(a,2),o=i[0],b=i[1];return Object(j.jsx)("div",{className:"Login",align:"center",children:Object(j.jsxs)(f.a,{onSubmit:function(e){e.preventDefault()},children:[Object(j.jsx)("div",{className:"UserName",children:Object(j.jsxs)(f.a.Group,{size:"lg",controlId:"username",children:[Object(j.jsx)(f.a.Label,{children:"Username"}),Object(j.jsx)(f.a.Control,{autoFocus:!0,type:"username",value:n,onChange:function(e){return s(e.target.value)}})]})}),Object(j.jsx)("div",{className:"PW",children:Object(j.jsxs)(f.a.Group,{size:"lg",controlId:"password",children:[Object(j.jsx)(f.a.Label,{children:"Password"}),Object(j.jsx)(f.a.Control,{type:"password",value:o,onChange:function(e){return b(e.target.value)}})]})}),Object(j.jsx)("div",{className:"loginbutton",children:Object(j.jsx)(O.a,{block:!0,size:"lg",type:"submit",disabled:!(n.length>0&&o.length>0),children:"Login"})}),Object(j.jsx)("div",{className:"registerbutton",children:Object(j.jsx)(r.b,{to:"/signup",children:Object(j.jsx)(O.a,{children:"Register"})})})]})})}n(47);function k(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(l.a)(a,2),r=i[0],o=i[1],b=Object(c.useState)(""),d=Object(l.a)(b,2),u=d[0],h=d[1];return Object(j.jsx)("div",{className:"Login",align:"center",children:Object(j.jsxs)(f.a,{onSubmit:function(e){e.preventDefault()},children:[Object(j.jsx)("div",{classname:"Email",children:Object(j.jsxs)(f.a.Group,{size:"lg",controlId:"email",children:[Object(j.jsx)(f.a.Label,{children:"Email"}),Object(j.jsx)(f.a.Control,{autoFocus:!0,type:"email",value:n,onChange:function(e){return s(e.target.value)}})]})}),Object(j.jsx)("div",{className:"UserName",children:Object(j.jsxs)(f.a.Group,{size:"lg",controlId:"username",children:[Object(j.jsx)(f.a.Label,{children:"Username"}),Object(j.jsx)(f.a.Control,{type:"username",value:r,onChange:function(e){return o(e.target.value)}})]})}),Object(j.jsx)("div",{className:"PW",children:Object(j.jsxs)(f.a.Group,{size:"lg",controlId:"password",children:[Object(j.jsx)(f.a.Label,{children:"Password"}),Object(j.jsx)(f.a.Control,{type:"password",value:u,onChange:function(e){return h(e.target.value)}})]})}),Object(j.jsx)("div",{className:"loginbutton",children:Object(j.jsx)(O.a,{block:!0,size:"lg",type:"submit",disabled:!(n.length&&r.length>0&&u.length>0),children:"Create Account"})})]})})}var C=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(u,{}),Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{path:"/",exact:!0,component:x}),Object(j.jsx)(h.a,{path:"/trends",component:v}),Object(j.jsx)(h.a,{path:"/opc",component:g}),Object(j.jsx)(h.a,{path:"/aboutus",component:p}),Object(j.jsx)(h.a,{path:"/login",component:N}),Object(j.jsx)(h.a,{path:"/signup",component:k})]})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),w()}},[[48,1,2]]]);
//# sourceMappingURL=main.281b2ca7.chunk.js.map