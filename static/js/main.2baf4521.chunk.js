(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(8),r=n.n(o),i=(n(14),n(9)),a=n(4),u=n(7),l=n(5),j=(n(15),n(0)),b=0,d=[{username:"",id:b}];var O=function(){var e=Object(c.useState)({username:""}),t=Object(l.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(!1),r=Object(l.a)(o,2),O=r[0],m=r[1],h=Object(c.useState)([]),f=Object(l.a)(h,2),x=f[0],v=f[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Todo List"}),Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:function(e){b++,e.preventDefault(),console.log(x),d=[].concat(Object(i.a)(d),[{username:n.username,id:b}]),console.log(d),v(d),m(!0),console.log(n.username),s({username:""})},children:[Object(j.jsx)("input",{type:"text",name:"username",value:n.username,onChange:function(e){var t=e.target,c=t.name,o=t.value;s(Object(u.a)(Object(u.a)({},n),{},Object(a.a)({},c,o)))}}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})}),Object(j.jsx)("ul",{children:O&&x.map((function(e){return Object(j.jsx)("div",{children:""!=e.username&&Object(j.jsxs)("li",{children:[Object(j.jsx)("h1",{children:""!=e.username?e.username:null}),Object(j.jsxs)("h1",{onClick:function(){return function(e){console.log("id =>",e);var t=x.filter((function(t){if(t.id!=e)return console.log("stored id =>",t.id),!0}));console.log("store =>",t),v(t)}(e.id)},children:[" ",""!=e.username?"Delete":null]})]})})}))})]})};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2baf4521.chunk.js.map