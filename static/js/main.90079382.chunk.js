(this["webpackJsonptic-tak-game"]=this["webpackJsonptic-tak-game"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(6),i=(n(16),n(7)),a=n(4),s=n(0),l=function(e){return Object(s.jsx)("div",{onClick:e.onClick,style:{backgroundColor:"silver",border:"2.5px solid black",height:"100px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},className:"square",children:Object(s.jsx)("h2",{children:e.value})})};var o=function(){var e=Object(c.useState)(Array(9).fill(null)),t=Object(a.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(!0),j=Object(a.a)(o,2),u=j[0],b=j[1],d=function(){for(var e=0,t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];e<t.length;e++){var c=t[e],r=Object(a.a)(c,3),i=r[0],s=r[1],l=r[2];if(null!==n[i]&&n[i]===n[s]&&n[i]===n[l])return n[i]}return!1}(),O=function(e){var t=Object(i.a)(n);t[e]=u?"X":"0",r(t),b(!u)};return Object(s.jsx)("div",{className:"board-container",children:d?Object(s.jsxs)("h1",{className:"winner",children:[d," Won the game"]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"board-row",children:[Object(s.jsx)(l,{onClick:function(){return O(0)},value:n[0]}),Object(s.jsx)(l,{onClick:function(){return O(1)},value:n[1]}),Object(s.jsx)(l,{onClick:function(){return O(2)},value:n[2]})]}),Object(s.jsxs)("div",{className:"board-row",children:[Object(s.jsx)(l,{onClick:function(){return O(3)},value:n[3]}),Object(s.jsx)(l,{onClick:function(){return O(4)},value:n[4]}),Object(s.jsx)(l,{onClick:function(){return O(5)},value:n[5]})]}),Object(s.jsxs)("div",{className:"board-row",children:[Object(s.jsx)(l,{onClick:function(){return O(6)},value:n[6]}),Object(s.jsx)(l,{onClick:function(){return O(7)},value:n[7]}),Object(s.jsx)(l,{onClick:function(){return O(8)},value:n[8]})]})]})})};var j=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(o,{})})},u=document.getElementById("root");Object(r.createRoot)(u).render(Object(s.jsx)(c.StrictMode,{children:Object(s.jsx)(j,{})}))}},[[18,1,2]]]);
//# sourceMappingURL=main.90079382.chunk.js.map