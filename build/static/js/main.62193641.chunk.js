(this["webpackJsonpemail-sender"]=this["webpackJsonpemail-sender"]||[]).push([[0],{72:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),l=(n(72),n(32)),o=n.n(l),s=n(22),u=n(41),b=n(132),d=n(135),j=n(134),g=n(136),p=n(61),h=n.n(p),f=n(129),m=n(62),O=n.n(m),x=n(55),v=n(8),y=n(75),w=Object(f.a)((function(e){return{button:{margin:e.spacing(1)}}}));function C(e,t,n,a,r){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(o.a.mark((function e(t,n,a,r,c){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log(n),console.log(a),console.log(r),console.log(c),e.next=7,y.post("https://email-rocket.netlify.app/.netlify/functions/email",{email:t,password:n,subject:a,body:r,emailList:c});case 7:return i=e.sent,console.log(i),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=w(),i=Object(a.useState)(""),l=Object(s.a)(i,2),p=l[0],f=l[1],m=Object(a.useState)([]),y=Object(s.a)(m,2),S=y[0],T=y[1],k=Object(a.useState)(""),E=Object(s.a)(k,2),F=E[0],I=E[1],B=Object(a.useState)(""),D=Object(s.a)(B,2),L=D[0],P=D[1],R=Object(a.useState)(""),z=Object(s.a)(R,2),A=z[0],J=z[1],M=function(){return p.length>0&&S.length>0&&F.length>0&&L.length>0&&A.length>0&&A.length<1e3&&S.every((function(e){return x.validate(e)}))};return Object(v.jsxs)("div",{style:{textAlign:"center",marginTop:100},children:[Object(v.jsx)(b.a,{style:{color:"#fff",fontWeight:"bold",fontSize:112,fontFamily:"Brown Pro"},children:" Email Rocket "}),Object(v.jsx)(b.a,{variant:"subtitle1",style:{color:"#D3D3D3",fontSize:25},children:" Ever wanted to send the same email to multiple receivers? Email Rocket is here for you! "}),Object(v.jsx)(d.a,{style:{marginTop:20},id:"standard-basic",label:"Email",value:p,onChange:function(e){return f(e.target.value)}}),Object(v.jsx)("br",{}),Object(v.jsx)(d.a,{style:{marginTop:20},id:"standard-password-input",label:"Password",value:F,onChange:function(e){return I(e.target.value)},type:"password",autoComplete:"current-password"}),Object(v.jsx)("br",{}),Object(v.jsx)(d.a,{style:{marginTop:20},id:"standard-textarea",label:"Subject",value:L,onChange:function(e){return P(e.target.value)},multiline:!0}),Object(v.jsx)("br",{}),Object(v.jsx)(d.a,{style:{marginTop:10},id:"standard-textarea",label:"Message",value:A,onChange:function(e){return J(e.target.value)},multiline:!0,helperText:"Character count: ".concat(A.length),error:A.length>=1e3}),Object(v.jsx)("br",{}),Object(v.jsxs)(j.a,{elevation:3,style:{width:"30%",margin:"auto",marginTop:20,padding:20},children:[Object(v.jsx)(b.a,{variant:"subtitle1",children:"Upload .txt file of emails (format: an email per line)"}),Object(v.jsx)(g.a,{variant:"contained",color:"primary",className:c.button,startIcon:Object(v.jsx)(h.a,{}),onClick:function(){return document.getElementById("selectFile").click()},children:"Upload"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{id:"selectFile",hidden:!0,type:"file",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onload=function(e){T(e.target.result.split("\n").map((function(e){return e.trim()})))},n.readAsText(t)}}),S.length>0&&Object(v.jsx)(b.a,{variant:"subtitle2",style:{marginTop:20},children:M()?"Emails Loaded: ".concat(S.length):"Error parsing email"}),Object(v.jsx)(g.a,{variant:"contained",color:"primary",className:c.button,endIcon:Object(v.jsx)(O.a,{}),disabled:!M(),onClick:Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(p,F,L,A,S);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),value:n,onChange:function(e){return r(e.target.value)},children:"Send"}),Object(v.jsx)(b.a,{variant:"subtitle",children:n})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,138)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(T,{})}),document.getElementById("root")),k()}},[[99,1,2]]]);
//# sourceMappingURL=main.62193641.chunk.js.map