(this.webpackJsonpexpense_tracker=this.webpackJsonpexpense_tracker||[]).push([[1],{138:function(e,t,a){},216:function(e,t,a){},218:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),o=a.n(r),s=a(21),i=a(14),u=a(262),l=a(264),d=a(265),j=a(61),b=a(144),p=a(259),O=Object(p.a)((function(){return{income:{borderBottom:"10px solid rgba(0, 255, 0, 0.5)"},expense:{borderBottom:"10px solid rgba(255, 0, 0, 0.5)"}}})),f=a(1),m=a(4),x=a(18),h=a(19),g=function(e,t){switch(t.type){case"GET_TRANSACTIONS":return t.payload;case"DELETE_TRANSACTION":return e.filter((function(e){return e._id!==t.payload}));case"ADD_TRANSACTION":return[t.payload].concat(Object(h.a)(e));case"TRANSACTION_ERROR":return Object(x.a)(Object(x.a)({},e),{},{error:t.payload});default:return e}},y=a(102),v=a.n(y),C=a(11),I=[],T=Object(n.createContext)(I),N=function(e){var t=Object(n.useReducer)(g,I),a=Object(i.a)(t,2),c=a[0],r=a[1];function o(){return(o=Object(m.a)(Object(f.a)().mark((function e(t){var a;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/v1/transactions");case 3:(a=e.sent).data.data=a.data.data.filter((function(e){return e.userId===t})),r({type:"GET_TRANSACTIONS",payload:a.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function s(){return(s=Object(m.a)(Object(f.a)().mark((function e(t){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.delete("/api/v1/transactions/".concat(t));case 3:r({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),r({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function u(){return(u=Object(m.a)(Object(f.a)().mark((function e(t){var a,n;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,v.a.post("/api/v1/transactions",t,a);case 4:n=e.sent,r({type:"ADD_TRANSACTION",payload:n.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var l=c.reduce((function(e,t){return"Expense"===t.type?e-t.amount:e+t.amount}),0);return Object(C.jsx)(T.Provider,{value:{getTransactions:function(e){return o.apply(this,arguments)},deleteTransaction:function(e){return s.apply(this,arguments)},addTransaction:function(e){return u.apply(this,arguments)},transactions:c,balance:l},children:e.children})},E=["#123123","#154731","#165f40","#16784f","#14915f","#10ac6e","#0bc77e","#04e38d","#00ff9d"],S=["#b50d12","#bf2f1f","#c9452c","#d3583a","#dc6a48","#e57c58","#ee8d68","#f79d79","#ffae8a","#cc474b","#f55b5f"],k=[{type:"Business",amount:0,color:E[0]},{type:"Investments",amount:0,color:E[1]},{type:"Extra income",amount:0,color:E[2]},{type:"Deposits",amount:0,color:E[3]},{type:"Lottery",amount:0,color:E[4]},{type:"Gifts",amount:0,color:E[5]},{type:"Salary",amount:0,color:E[6]},{type:"Savings",amount:0,color:E[7]},{type:"Rental income",amount:0,color:E[8]}],w=[{type:"Bills",amount:0,color:S[0]},{type:"Car",amount:0,color:S[1]},{type:"Clothes",amount:0,color:S[2]},{type:"Travel",amount:0,color:S[3]},{type:"Food",amount:0,color:S[4]},{type:"Shopping",amount:0,color:S[5]},{type:"House",amount:0,color:S[6]},{type:"Entertainment",amount:0,color:S[7]},{type:"Phone",amount:0,color:S[8]},{type:"Pets",amount:0,color:S[9]},{type:"Other",amount:0,color:S[10]}],A=function(e){k.forEach((function(e){return e.amount=0})),w.forEach((function(e){return e.amount=0}));var t=Object(n.useContext)(T).transactions,a=0,c="Income"===e?k:w;t.forEach((function(e){var t=c.find((function(t){return t.type===e.category}));t&&(t.amount+=+e.amount)}));var r=c.filter((function(e){return e.amount>0}));r.forEach((function(e){return a+=e.amount}));var o={labels:r.map((function(e){return e.type})),datasets:[{data:r.map((function(e){return e.amount})),backgroundColor:r.map((function(e){return e.color}))}]};return{filteredCategories:r,total:a,chartData:o}};function R(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var _=a(36),P=a(40);var B=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],o=O(),s=e.title,p=A(s),f=p.total,m=p.chartData,x=Object(n.useContext)(P.b),h=x.currentUser,g=x.lastLoggedInUser,y=Object(n.useCallback)((function(e){_.b.collection("users").doc(e).get().then((function(e){var t=e._delegate._document.data.value.mapValue.fields.currency;r(t.stringValue)}))}),[]);return Object(n.useEffect)((function(){y(h?h.uid:g.uid)}),[]),Object(C.jsx)("div",{children:Object(C.jsxs)(u.a,{className:"Income"===s?o.income:o.expense,children:[Object(C.jsx)(l.a,{title:s}),Object(C.jsxs)(d.a,{children:[Object(C.jsxs)(j.a,{variant:"h5",children:[c," ",R(f)]}),Object(C.jsx)(b.a,{data:m})]})]})})},U=a(268),L=Object(p.a)((function(){return{income:{borderBottom:"10px solid rgba(0, 255, 0, 0.5)"},expense:{borderBottom:"10px solid rgba(255, 0, 0, 0.5)"}}})),D=a(281),V=Object(p.a)((function(){return{radioGroup:{display:"flex",justifyContent:"center",marginBottom:"-10px"},button:{marginTop:"20px",border:"2px solid grey"}}})),z=a(269),W=a(288),G=a(285),F=a(273),M=a(290),H=a(274),J=Object(p.a)((function(){return{radioGroup:{display:"flex",justifyContent:"center",marginBottom:"-10px"},button:{marginTop:"20px",border:"2px solid grey"}}})),K=a(286),$=function(e){var t=new Date(e),a="".concat(t.getMonth()+1),n="".concat(t.getDate()),c=t.getFullYear();return a.length<2&&(a="0".concat(a)),n.length<2&&(n="0".concat(n)),[c,a,n].join("-")},Y=a(45),q=a(287),Q=a(284),X=Object(p.a)((function(e){return{root:{width:"100%",overflow:"hidden","& > * + *":{marginTop:e.spacing(2)}}}})),Z=function(e){var t=e.open,a=e.setOpen,n=X(),c=function(e,t){"clickaway"!==t&&a(!1)};return Object(C.jsx)("div",{className:n.root,children:Object(C.jsx)(q.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:t,autoHideDuration:6e3,onClose:c,children:Object(C.jsx)(Q.a,{onClose:c,severity:"success",elevation:6,variant:"filled",children:"Transaction successfully created."})})})},ee={userId:"",amount:"",category:"",type:"Income",date:$(new Date)};var te=function(){var e=J(),t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],r=a[1],o=Object(n.useContext)(T).addTransaction,s=Object(n.useState)(ee),u=Object(i.a)(s,2),l=u[0],d=u[1],b=Object(Y.useSpeechContext)().segment,p=Object(n.useState)(!1),O=Object(i.a)(p,2),f=O[0],m=O[1],h=Object(n.useContext)(P.b),g=h.currentUser,y=h.lastLoggedInUser,v=Object(n.useCallback)((function(){var e=!Number.isNaN(Number(l.amount)),t=!(0===l.amount.trim().length),a=!(0===l.category.length);r(e&&t&&a)}),[l.amount,l.category]),I=Object(n.useCallback)((function(){var e="";e=g?g.uid:y.uid,m(!0),o(Object(x.a)(Object(x.a)({},l),{},{amount:Number(l.amount),id:Object(K.a)(),userId:e})),d(ee)}));Object(n.useEffect)((function(){if(b){if("add_expense"===b.intent.intent)d(Object(x.a)(Object(x.a)({},l),{},{type:"Expense"}));else if("add_income"===b.intent.intent)d(Object(x.a)(Object(x.a)({},l),{},{type:"Income"}));else{if(b.isFinal&&"create_transaction"===b.intent.intent)return I();if(b.isFinal&&"cancel_transaction"===b.intent.intent)return d(ee)}b.entities.forEach((function(e){var t="".concat(e.value.charAt(0)).concat(e.value.slice(1).toLowerCase());switch(e.type){case"amount":d(Object(x.a)(Object(x.a)({},l),{},{amount:e.value}));break;case"category":k.map((function(e){return e.type})).includes(t)?d(Object(x.a)(Object(x.a)({},l),{},{type:"Income",category:t})):w.map((function(e){return e.type})).includes(t)&&d(Object(x.a)(Object(x.a)({},l),{},{type:"Expense",category:t}));break;case"date":d(Object(x.a)(Object(x.a)({},l),{},{date:$(e.value)}))}})),b.isFinal&&l.amount&&l.category&&l.type&&I()}}),[b,l,I]),Object(n.useEffect)((function(){v()}),[l.amount,v]);var N="Income"===l.type?k:w;return Object(C.jsxs)(U.a,{container:!0,spacing:2,children:[Object(C.jsx)(Z,{open:f,setOpen:m}),Object(C.jsx)(U.a,{item:!0,xs:12,children:Object(C.jsx)(j.a,{align:"center",variant:"subtitle2",gutterBottom:!0,children:b?Object(C.jsx)(C.Fragment,{children:b.words.map((function(e){return e.value})).join(" ")}):null})}),Object(C.jsx)(U.a,{item:!0,xs:6,children:Object(C.jsxs)(z.a,{fullWidth:!0,children:[Object(C.jsx)(W.a,{children:"Type"}),Object(C.jsxs)(G.a,{value:l.type,onChange:function(e){"Income"===e.target.value?d(Object(x.a)(Object(x.a)({},l),{},{type:e.target.value,category:k})):"Expense"===e.target.value&&d(Object(x.a)(Object(x.a)({},l),{},{type:e.target.value,category:w}))},children:[Object(C.jsx)(F.a,{value:"Income",children:"Income"}),Object(C.jsx)(F.a,{value:"Expense",children:"Expense"})]})]})}),Object(C.jsx)(U.a,{item:!0,xs:6,children:Object(C.jsxs)(z.a,{fullWidth:!0,children:[Object(C.jsx)(W.a,{children:"Category"}),Object(C.jsx)(G.a,{value:l.category,onChange:function(e){return d(Object(x.a)(Object(x.a)({},l),{},{category:e.target.value}))},children:N.map((function(e){return Object(C.jsx)(F.a,{value:e.type,children:e.type},e.type)}))})]})}),Object(C.jsx)(U.a,{item:!0,xs:6,children:Object(C.jsx)(M.a,{type:"number",label:"Amount",InputProps:{inputProps:{min:0}},fullWidth:!0,value:l.amount,onChange:function(e){return d(Object(x.a)(Object(x.a)({},l),{},{amount:e.target.value}))}})}),Object(C.jsx)(U.a,{item:!0,xs:6,children:Object(C.jsx)(M.a,{type:"date",label:"Date",fullWidth:!0,value:l.date,onChange:function(e){return d(Object(x.a)(Object(x.a)({},l),{},{date:$(e.target.value)}))}})}),Object(C.jsx)(H.a,{className:e.button,variant:"outlined",color:"primary",fullWidth:!0,onClick:I,disabled:!c,children:"Create"})]})},ae=a(272),ne=a(275),ce=a(221),re=a(276),oe=a(291),se=a(278),ie=a(279),ue=a(267),le=a(277),de=a(280),je=a(101),be=a(100),pe=Object(p.a)((function(e){return{avatarIncome:{color:"#fff",backgroundColor:je.a[500]},avatarExpense:{color:e.palette.getContrastText(be.a[500]),backgroundColor:be.a[500]},list:{maxHeight:"150px",overflow:"auto"}}})),Oe=a(136);var fe=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useContext)(P.b),o=r.currentUser,s=r.lastLoggedInUser,u=pe(),l=Object(n.useContext)(T),d=l.deleteTransaction,j=l.transactions,b=l.getTransactions,p=Object(n.useCallback)((function(e){_.b.collection("users").doc(e).get().then((function(e){var t=e._delegate._document.data.value.mapValue.fields.currency;c(t.stringValue)}))}),[]);Object(n.useEffect)((function(){o?(p(o.uid),b(o.uid)):(p(s.uid),b(s.uid))}),[]);var O={fileName:"Report.csv",headers:[{label:"Type",key:"type"},{label:"Amount",key:"amount"},{label:"Category",key:"category"},{label:"Date",key:"date"}],data:j};return Object(C.jsxs)("div",{children:[Object(C.jsx)(ae.a,{dense:!1,className:u.list,children:j.map((function(e){return Object(C.jsx)(ne.a,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:Object(C.jsxs)(ce.a,{children:[Object(C.jsx)(re.a,{children:Object(C.jsx)(oe.a,{className:"Income"===e.type?u.avatarIncome:u.avatarExpense,children:Object(C.jsx)(le.a,{})})}),Object(C.jsx)(se.a,{primary:e.category,secondary:"".concat(a,"  ").concat(R(e.amount),"\n                    - ").concat($(e.date))}),Object(C.jsx)(ie.a,{children:Object(C.jsx)(ue.a,{edge:"end","aria-label":"details",onClick:function(){d(e._id)},children:Object(C.jsx)(de.a,{})})})]})},e.id)}))}),Object(C.jsx)(Oe.CSVLink,Object(x.a)(Object(x.a)({style:{margin:"0 100px"}},O),{},{children:"Export to CSV"}))]})},me=Math.round(Math.random());var xe=function(){return Object(C.jsxs)("div",{styles:{textAlign:"center",padding:"0 10%"},children:["Try saying: ",Object(C.jsx)("br",{}),"Add ",me?"Income ":"Expense ","for ",me?"$100 ":"$50 ","in Category ",me?"Business ":"House ","for ",me?"Monday ":"Tuesday "," ..."]})};var he=function(){var e=V(),t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],o=Object(n.useContext)(T).balance,s=Object(n.useContext)(P.b),b=s.currentUser,p=s.lastLoggedInUser,O=Object(n.useCallback)((function(e){_.b.collection("users").doc(e).get().then((function(e){var t=e._delegate._document.data.value.mapValue.fields.currency;r(t.stringValue)}))}),[]);return Object(n.useEffect)((function(){O(b?b.uid:p.uid)}),[]),Object(C.jsx)("div",{children:Object(C.jsxs)(u.a,{className:e.root,children:[Object(C.jsx)(l.a,{title:"Expense Tracker",subheader:"Powered by Speechly"}),Object(C.jsxs)(d.a,{children:[Object(C.jsxs)(j.a,{align:"center",variant:"h5",children:["Total Balance ",c," ",R(o)]}),Object(C.jsx)(j.a,{variant:"subtitle1",style:{lineHeight:"1.5em",marginTop:"20px"},children:Object(C.jsx)(xe,{})}),Object(C.jsx)(D.a,{className:e.divider}),Object(C.jsx)(te,{})]}),Object(C.jsx)(d.a,{className:e.CardContent,children:Object(C.jsx)(U.a,{container:!0,spacing:2,children:Object(C.jsx)(U.a,{item:!0,xs:12,children:Object(C.jsx)(fe,{})})})})]})})},ge=a(282),ye=a(283),ve=a(137),Ce=a.n(ve),Ie=a(143),Te=a(62),Ne=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function Ee(){var e=Ne(),t=Object(n.useContext)(P.b),a=t.currentUser,r=t.logout,o=t.lastLoggedInUser,s=Object(n.useState)(""),u=Object(i.a)(s,2),l=u[0],d=u[1],b=c.a.useState(null),p=Object(i.a)(b,2),O=p[0],f=p[1],m=Boolean(O);return Object(n.useEffect)((function(){a?_.b.collection("users").doc(a.uid).get().then((function(e){var t=e._delegate;console.log(t);var a=t._document.data.value.mapValue.fields,n=a.firstName,c=a.lastName;d("".concat(n.stringValue," ").concat(c.stringValue))})):_.b.collection("users").doc(o.uid).get().then((function(e){var t=e._delegate;console.log(t);var a=t._document.data.value.mapValue.fields,n=a.firstName,c=a.lastName;d("".concat(n.stringValue," ").concat(c.stringValue))}))}),[]),Object(C.jsx)("div",{style:{width:"100vw",overflow:"hidden"},children:Object(C.jsx)(ge.a,{position:"static",children:Object(C.jsxs)(ye.a,{style:{backgroundColor:"#32a88f"},children:[l&&Object(C.jsxs)(j.a,{variant:"h6",className:e.title,children:["Welcome Back, ",l]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(ue.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){f(e.currentTarget)},color:"inherit",children:Object(C.jsx)(Ce.a,{})}),Object(C.jsxs)(Ie.a,{id:"menu-appbar",anchorEl:O,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:function(){f(null)},children:[Object(C.jsx)(F.a,{children:Object(C.jsx)(Te.b,{to:"/update-profile",children:"Update Profile"})}),Object(C.jsx)(F.a,{onClick:function(){r()},children:Object(C.jsx)(Te.b,{children:"Log Out"})})]})]})]})})})}var Se=a(138),ke=a.n(Se),we=a(98),Ae=function(){var e=L(),t=Object(Y.useSpeechContext)().speechState,a=Object(n.useRef)(null);return Object(n.useEffect)((function(){"Done"===t&&a.current.scrollIntoView()}),[t]),Object(C.jsxs)("div",{className:ke.a.setter,children:[Object(C.jsx)(Ee,{}),Object(C.jsxs)(U.a,{id:"setter",className:e.grid,container:!0,spacing:2,alignItems:"center",justify:"center",style:{width:"100vw",marginTop:8},children:[Object(C.jsx)(U.a,{item:!0,xs:12,sm:4,className:e.mobile,children:Object(C.jsx)(B,{title:"Income"})}),Object(C.jsx)(U.a,{ref:a,item:!0,xs:12,sm:3,className:e.main,children:Object(C.jsx)(he,{})}),Object(C.jsx)(U.a,{item:!0,xs:12,sm:4,className:e.desktop,children:Object(C.jsx)(B,{title:"Expense"})})]}),Object(C.jsx)(we.PushToTalkButtonContainer,{children:Object(C.jsx)(we.PushToTalkButton,{})})]})},Re=a(142);function _e(e){var t=e.children,a=JSON.parse(localStorage.getItem("isLoggedIn")),c=Object(n.useContext)(P.b).currentUser;return c?c?t:Object(C.jsx)(s.a,{to:"/login"}):a?t:Object(C.jsx)(s.a,{to:"/login"})}var Pe=c.a.lazy((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,306))})),Be=c.a.lazy((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,308))})),Ue=c.a.lazy((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,309))})),Le=c.a.lazy((function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,310))})),De=function(){return Object(C.jsx)("div",{children:Object(C.jsx)(n.Suspense,{fallback:Object(C.jsx)(Re.a,{height:"70vh",width:"100vw",color:"#42f5a1",wrapperStyle:{marginTop:100},wrapperClass:"",visible:!0,outerCircleColor:"",innerCircleColor:"",barColor:"",ariaLabel:"circles-with-bar-loading"}),children:Object(C.jsxs)(s.d,{children:[Object(C.jsx)(s.b,{path:"/",element:Object(C.jsx)(_e,{children:Object(C.jsx)(Ae,{})})}),Object(C.jsx)(s.b,{path:"/signUp",element:Object(C.jsx)(Ue,{})}),Object(C.jsx)(s.b,{path:"/login",element:Object(C.jsx)(Le,{})}),Object(C.jsx)(s.b,{path:"/forgot-password",element:Object(C.jsx)(Pe,{})}),Object(C.jsx)(s.b,{path:"/update-profile",element:Object(C.jsx)(Be,{})}),Object(C.jsx)(s.b,{path:"*",element:Object(C.jsx)(Le,{})})]})})})};a(216),a(217);o.a.render(Object(C.jsx)(Y.SpeechProvider,{appId:"a770ce0a-f365-4f60-9d76-0af816d82c0c",language:"en-US",children:Object(C.jsx)(P.a,{children:Object(C.jsx)(N,{children:Object(C.jsx)(Te.a,{children:Object(C.jsx)(De,{})})})})}),document.getElementById("root"))},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return o}));var n=a(109),c=(a(177),a(220),n.a.initializeApp({apiKey:"AIzaSyBilfGfooKCUeHPrP_sWmexFbM5Mrt-wBk",authDomain:"expense-tracker-ashrey.firebaseapp.com",databaseURL:"https://expense-tracker-ashrey-default-rtdb.firebaseio.com",projectId:"expense-tracker-ashrey",storageBucket:"expense-tracker-ashrey.appspot.com",messagingSenderId:"694771305427",appId:"1:694771305427:web:225415dd634499c30b7d26"})),r=c.auth(),o=n.a.firestore()},40:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(14),c=a(0),r=a.n(c),o=a(36),s=a(11),i=r.a.createContext();function u(e){var t=Object(c.useState)(),a=Object(n.a)(t,2),r=a[0],u=a[1],l=Object(c.useState)(!0),d=Object(n.a)(l,2),j=d[0],b=d[1],p=JSON.parse(localStorage.getItem("isLoggedIn"));Object(c.useEffect)((function(){var e=o.a.onAuthStateChanged((function(e){localStorage.setItem("isLoggedIn",JSON.stringify(e)),u(e)}));return b(!1),e}),[]);var O={currentUser:r,signUp:function(e,t,a,n,c){var r=o.a.createUserWithEmailAndPassword(e,t);return r.then((function(e){return o.b.collection("users").doc(e.user.uid).set({firstName:a,lastName:n,currency:c})})),r},login:function(e,t){return o.a.signInWithEmailAndPassword(e,t)},logout:function(){return localStorage.removeItem("isLoggedIn"),o.a.signOut()},resetPassword:function(e){return o.a.sendPasswordResetEmail(e)},updateEmail:function(e){return r.updateEmail(e)},updatePassword:function(e){return r.updatePassword(e)},lastLoggedInUser:p};return Object(s.jsx)(i.Provider,{value:O,children:!j&&e.children})}t.b=i}},[[218,2,3]]]);
//# sourceMappingURL=main.bf6046e0.chunk.js.map