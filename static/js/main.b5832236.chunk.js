(this["webpackJsonpabz-testtask"]=this["webpackJsonpabz-testtask"]||[]).push([[0],{118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},144:function(e,t,n){},146:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){},170:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(0),s=n.n(o),i=n(10),r=n.n(i),c=(n(118),n(119),n(120),n(121),function(){return Object(a.jsxs)("div",{className:"firstsection",children:[Object(a.jsxs)("div",{className:"wrap",children:[Object(a.jsx)("h1",{className:"firstsection__title",children:"Test assigment for frontend developer position"}),Object(a.jsx)("h2",{className:"firstsection__description",children:"We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository."})]}),Object(a.jsx)("a",{className:"firstsection__button",href:"#form",children:"Sign up now"})]})}),l=(n(122),n.p+"static/media/man-laptop-v1.bdb026ef.svg"),u=function(){return Object(a.jsxs)("div",{className:"section2",children:[Object(a.jsx)("h1",{className:"section2__title",children:"Let's get acquainted"}),Object(a.jsx)("img",{className:"section2__img",src:l,alt:"man-with-laptop"}),Object(a.jsx)("h2",{className:"section2__topic",children:"I am cool frontend developer"}),Object(a.jsx)("p",{className:"section2__paragraph",children:"We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction."}),Object(a.jsx)("p",{className:"section2__paragraph",children:"If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P\u200bSD mockup\u200b into HTML5/CSS3."}),Object(a.jsx)("a",{className:"section2__signup",href:"#form",children:"Sign up now"})]})},d=n(20),m="GET_USERS",p="SAVE_DATA",j=n(49),f=n(45),b=n.n(f),h={get:b.a.get,post:b.a.post,put:b.a.put,delete:b.a.delete,patch:b.a.patch},x=function(e,t){return function(n){return e="undefined"!==typeof e?e:3,t="undefined"!==typeof t?t:"".concat(j.apiEndpoint,"/users?count=").concat(e),n({type:m,payload:!0}),h.get(t).then((function(e){n({type:p,payload:e.data}),n({type:m,payload:!1})}))}},O=n(200),g=n(220),v=Object(O.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},large:{width:70,height:70,marginBottom:20}}})),y=function(e){var t=e,n=v();return Object(a.jsx)(g.a,{alt:"user avatar",src:t.avatarUrl,className:n.large})},_=n(5),N=n(221),w=n(216),S=n(97),T=Object(O.a)((function(){return{root:{display:"flex",alignItems:"center",flexDirection:"column",width:216,marginBottom:41,backgroundColor:"#f9f9f3",whiteSpace:"nowrap"},avatar:{marginBottom:24},name:{whiteSpace:"normal",width:"100%",textAlign:"center",fontSize:24,marginBottom:24,color:"#212529"},position:{fontSize:16,marginBottom:14,color:"#4c4b4b"},email:{fontSize:16,marginBottom:12,width:"100%",textAlign:"center",color:"#4c4b4b"},phone:{fontSize:16,color:"#4c4b4b"}}})),k=Object(_.a)((function(e){return{tooltip:{backgroundColor:"rgb(45, 45, 45)",color:"#fff",boxShadow:e.shadows[1],fontSize:14}}}))(N.a),C=function(e){var t=e.name,n=e.email,o=e.phone,s=e.position,i=e.photo,r=T();return Object(a.jsxs)("div",{className:r.root,children:[Object(a.jsx)(y,{className:r.avatar,avatarUrl:i}),Object(a.jsx)(w.a,{className:r.name,children:t}),Object(a.jsx)(S.a,{className:r.position,children:s}),Object(a.jsx)(k,{className:r.tooltip,title:n,children:Object(a.jsx)(w.a,{className:r.email,textOverflow:"ellipsis",overflow:"hidden",component:"div",children:n})}),Object(a.jsx)(S.a,{className:r.phone,children:o})]})},L=(n(144),Object(d.b)((function(e){return{users:e.users.data.users,data:e.users.data}}))((function(e){var t=Object(d.c)(),n=e.users,o=e.data,s="undefined"!==typeof o?o:[],i="undefined"!==typeof n?n:[],r=i.map((function(e,t){return{user:e,index:t,value:e.registration_timestamp}}));r.sort((function(e,t){return e.value<t.value?1:-1}));var c=r.map((function(e){return i[e.index]}));return Object(a.jsxs)("div",{className:"users",children:[Object(a.jsx)("h1",{className:"users__title",children:"Our cheerful users"}),c.map((function(e){return Object(a.jsx)(C,{id:e.id,name:e.name,email:e.email,phone:e.phone,position:e.position,regtime:e.registration_timestamp,photo:e.photo},e.id)})),o.page!==o.total_pages&&Object(a.jsx)("button",{className:"users__button",onClick:function(){return t(function(e,t){return function(n){n(x(e,t))}}(3,s.links.next_url))},children:"Show more"})]})}))),z=n(48),E=n.n(z),I=n(62),R=n(41),F=n(212),B=n(222),M=n(215),P=(n(146),n(93)),A=n(211),D=n(223),G=n(213),U=n(217),X=n(210),J=n(16),q=n(95),V=n(219),$=n(205),Y=n(207),H=n(208),W=n(206),Q=n(89),Z=n.n(Q),K=Object(O.a)((function(){return{button:{width:"80px",height:"38px",borderRadius:"4px",backgroundColor:"#ef5b4c",color:"#fff",textTransform:"none",fontWeight:"600"}}})),ee=Object(_.a)((function(e){return{root:{margin:0,padding:e.spacing(2),fontSize:"24px",color:"#000000"},title:{fontFamily:"OpenSans, sans-serif"},closeButton:{width:"12px",height:"12px",position:"absolute",right:e.spacing(1),top:e.spacing(1),color:"#7b7b7b"}}}))((function(e){var t=e.children,n=e.classes,o=e.onClose,s=Object(q.a)(e,["children","classes","onClose"]);return Object(a.jsxs)($.a,Object(J.a)(Object(J.a)({disableTypography:!0,className:n.root},s),{},{children:[Object(a.jsx)(ne,{variant:"h6",className:n.title,children:t}),o?Object(a.jsx)(W.a,{"aria-label":"close",className:n.closeButton,onClick:o,children:Object(a.jsx)(Z.a,{})}):null]}))})),te=Object(_.a)((function(e){return{root:{padding:e.spacing(2)}}}))(Y.a),ne=Object(_.a)((function(e){return{root:{fontFamily:"OpenSans, sans-serif"},gutterBottom:{fontSize:"16px",color:"#4c4b4b"}}}))(S.a),ae=Object(_.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(H.a),oe=Object(d.b)((function(e){return{modalIsOpen:e.modal.modalIsOpen}}))((function(e){var t=e.modalIsOpen,n=e.text;console.log(e);var o=K(),s=Object(d.c)();return Object(a.jsx)("div",{children:Object(a.jsxs)(V.a,{onClose:function(){return s((function(e){e({type:"TOGGLE_MODAL",payload:!0})}))},"aria-labelledby":"customized-dialog-title",open:t,children:[Object(a.jsx)(ee,{id:"customized-dialog-title",onClose:function(){return s((function(e){e({type:"TOGGLE_MODAL",payload:!0})}))},children:""===n?"Congratulations":"Oops"}),Object(a.jsx)(te,{dividers:!0,children:Object(a.jsx)(ne,{gutterBottom:!0,children:""===n?"You have successfully passed the registration":n})}),Object(a.jsx)(ae,{children:Object(a.jsx)(X.a,{autoFocus:!0,onClick:function(){return s((function(e){e({type:"TOGGLE_MODAL",payload:!0})}))},color:"primary",className:o.button,children:""===n?"Great":"Try again"})})]})})})),se=/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,ie=/^[\+]{0,1}380([0-9]{9})$/,re=(Object(P.a)({palette:{primary:{main:"#000"}}}),Object(O.a)((function(e){return{root:{width:"330px","& .MuiTextField-root":{marginTop:"14px"},"& .Mui-focused":{borderColor:"red"},"& .MuiOutlinedInput-root":{"& fieldset":{border:"solid 1px #d4d9de"}},"& .MuiOutlinedInput-input":{"&::placeholder":{fontSize:"16px",color:"#b2b9c0",fontFamily:"PT Sans , sans-serif"},padding:"14px",height:"14px"},"& .MuiFormLabel-root":{fontFamily:"PT Sans , sans-serif",fontSize:"16px",color:"#212529"},"& .MuiFormGroup-root":{marginTop:"22px",marginBottom:"22px"},"& .MuiRadio-root":{color:"#adb5bd"},"& .MuiRadio-colorSecondary.Mui-checked":{color:"#007bff"},"& .MuiButton-contained":{marginTop:"14px",width:"83px",backgroundColor:"#f8f7f5",borderTopLeftRadius:0,borderBottomLeftRadius:0,borderTopRightRadius:4,borderBottomRightRadius:4,fontFamily:"PT Sans , sans-serif",textTransform:"none",boxShadow:"none",border:"solid 1px #d4d9de"}},field:{margin:"0 auto",marginBottom:"27px",width:"100%"},photo:{"& .MuiOutlinedInput-input":{padding:"14px 68px 10px 13px"},"& .MuiOutlinedInput-root":{"& fieldset":{borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0}}},inputfield:{"&$focused":{borderColor:e.palette.primary}}}}))),ce=Object(d.b)((function(e){return{positions:e.positions.positions,modalIsOpen:e.modal.modalIsOpen}}))((function(e){var t=e.positions,n=e.modalIsOpen,i=re(),r=Object(d.c)(),c="undefined"!==typeof t?t:[],l=Object(o.useRef)(""),u=s.a.useState(""),m=Object(R.a)(u,2),p=m[0],j=m[1],f=s.a.useState(""),b=Object(R.a)(f,2),h=b[0],O=b[1],g=function(e){O(e)},v=s.a.useState(""),y=Object(R.a)(v,2),_=y[0],N=y[1],w=s.a.useState(""),S=Object(R.a)(w,2),T=S[0],k=S[1],C=s.a.useState(""),L=Object(R.a)(C,2),z=L[0],P=L[1],J=s.a.useState(""),q=Object(R.a)(J,2),V=q[0],$=q[1],Y=document.getElementById("myForm");return Object(a.jsxs)(a.Fragment,{children:[n?Object(a.jsx)(oe,{text:h}):null,Object(a.jsxs)("div",{name:"form",id:"form",className:"formwrapper",children:[Object(a.jsx)("h1",{className:"formwrapper__title",children:"Register to get a work "}),Object(a.jsxs)("form",{className:i.root,onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("name",_),t.append("email",T.input),t.append("phone",z.input),t.append("position_id",+p),t.append("photo",l.current.files[0]),function(){var e=Object(I.a)(E.a.mark((function e(){var n,a,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token",{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,o=a.token,function(){var e=Object(I.a)(E.a.mark((function e(){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users",{method:"POST",headers:{Token:o},body:t});case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,e.prev=6,!0===a.success&&console.log(a.message),!0===a.success){e.next=10;break}throw a.message;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),g(e.t0);case 15:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(){return e.apply(this,arguments)}}()();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),setTimeout((function(){return function(e){var t=e.elements;e.reset();for(var n=0;n<t.length;n++)switch(t[n].type.toLowerCase()){case"text":case"password":case"textarea":case"hidden":$("");break;case"radio":p>0&&j("")}}(Y)}),2e3),setTimeout((function(){return r(x())}),1e3),setTimeout((function(){return r((function(e){e({type:"TOGGLE_MODAL",payload:!0})}))}),2e3)},autoComplete:"off",id:"myForm",children:[Object(a.jsxs)(B.a,{className:i.field,children:[Object(a.jsx)(A.a,{component:"legend",htmlFor:"name",children:"Name"}),Object(a.jsx)(M.a,{id:"name",minLength:"2",maxLength:"60",onChange:function(e){N(e.target.value)},placeholder:"Your name",required:!0,variant:"outlined",className:i.inputfield})]}),Object(a.jsxs)(B.a,{className:i.field,children:[Object(a.jsx)(A.a,{component:"legend",htmlFor:"email",children:"Email"}),Object(a.jsx)(M.a,{id:"email",minLength:"2",maxLength:"60",placeholder:"Your email",required:!0,variant:"outlined",onChange:function(e){var t=e.target.value.match(se);k(t)}})]}),Object(a.jsxs)(B.a,{className:i.field,children:[Object(a.jsx)(A.a,{component:"legend",htmlFor:"phone",children:"Phone number"}),Object(a.jsx)(M.a,{id:"phone",placeholder:"+380 XX XXX XX XX",variant:"outlined",onChange:function(e){var t=e.target.value.match(ie);P(t)},type:"tel"}),Object(a.jsx)(F.a,{children:"Enter phone number in open format"})]}),Object(a.jsxs)(B.a,{component:"fieldset",className:"form__field",children:[Object(a.jsx)(A.a,{component:"legend",children:"Select your position"}),Object(a.jsx)(D.a,{"aria-label":"position",name:"position",value:p,onChange:function(e){j(e.target.value)},children:c.map((function(e){return Object(a.jsx)(G.a,{value:e.id+"",control:Object(a.jsx)(U.a,{}),label:e.name},e.name)}))})]}),Object(a.jsxs)(B.a,{children:[Object(a.jsx)(A.a,{component:"legend",children:"Photo"}),Object(a.jsx)("input",{accept:"image/*",id:"image",type:"file",style:{display:"none"},ref:l,onChange:function(e){var t=void 0!==e.target.value?e.target.value.replace(/^.*[\\\/]/,""):"";$(t)}}),Object(a.jsxs)("div",{className:"photo-input",children:[Object(a.jsx)(M.a,{placeholder:"Upload you photo",disabled:!0,variant:"outlined",className:i.photo,id:"file",value:V}),Object(a.jsx)("label",{htmlFor:"image",children:Object(a.jsx)(X.a,{id:"image",component:"span",variant:"contained",children:"Browse"})})]})]}),Object(a.jsx)("button",{className:"button",type:"submit",children:"Sign up now"})]})]})]})})),le=function(){return Object(a.jsxs)("div",{className:"body",children:[Object(a.jsx)(c,{}),Object(a.jsx)(u,{}),Object(a.jsx)(L,{}),Object(a.jsx)(ce,{})]})},ue=n.p+"static/media/logo.d190168a.svg",de=(n(149),function(){return Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)("img",{src:ue,alt:"testlogo",className:"logo__testtask"})})}),me=n(214),pe=(n(150),n(90)),je=function(){return Object(a.jsx)("div",{className:"burgerwrapp",children:Object(a.jsxs)(pe.slide,{left:!0,children:[Object(a.jsx)(de,{}),Object(a.jsx)(me.a,{}),Object(a.jsx)("a",{className:"menu-item",href:"#form",children:"About me"}),Object(a.jsx)("a",{className:"menu-item",href:"#form",children:"Relationships"}),Object(a.jsx)("a",{className:"menu-item",href:"#form",children:"Users"}),Object(a.jsx)("a",{className:"menu-item",href:"#form",children:"Sign Up"}),Object(a.jsx)("a",{className:"menu-item",href:"#form",children:"Terms and Conditions"}),Object(a.jsx)(me.a,{}),Object(a.jsx)("a",{className:"menu-item",href:"#form",children:"How it works"}),Object(a.jsx)("a",{className:"menu-item",href:"#form",children:"Partnership"}),Object(a.jsx)("a",{className:"menu-item",href:"#form",children:"Help"}),Object(a.jsx)("a",{className:"menu-item",href:"#form",children:"Leave testimonial"}),Object(a.jsx)("a",{className:"menu-item",href:"#form",children:"Contact us"}),Object(a.jsx)(me.a,{}),Object(a.jsx)("a",{className:"menu-item",href:"#form",children:"Articles"}),Object(a.jsx)("a",{className:"menu-item",href:"#form",children:"Our news"}),Object(a.jsx)("a",{className:"menu-item",href:"#form",children:"Testimonials"}),Object(a.jsx)("a",{className:"menu-item",href:"#form",children:"Licenses"}),Object(a.jsx)("a",{className:"menu-item",href:"#form",children:"Privacy Policy"})]})})},fe=(n(166),function(){return Object(a.jsxs)("div",{className:"menu",children:[Object(a.jsx)("a",{className:"menu__item",href:"#form",children:"About me"}),Object(a.jsx)("a",{className:"menu__item",href:"#form",children:"Relationships"}),Object(a.jsx)("a",{className:"menu__item",href:"#form",children:"Requirments"}),Object(a.jsx)("a",{className:"menu__item",href:"#form",children:"Users"}),Object(a.jsx)("a",{className:"menu__item",href:"#form",children:"Sign up"})]})}),be=(n(167),function(){return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(de,{}),Object(a.jsx)(fe,{}),Object(a.jsx)(je,{})]})}),he="GET_POSITIONS",xe="SAVE_POSITIONS",Oe=(n(168),function(){return Object(a.jsx)("div",{className:"footer",children:Object(a.jsx)("p",{className:"footer__text",children:"\xa9 abz.agency specially for the test task"})})}),ge=n(91),ve=n.n(ge),ye=function(){return Object(a.jsx)("div",{className:ve.a.loader})},_e=Object(d.b)((function(e){return{data:e,loadingUsers:e.users.data.success,loadingPositions:e.positions.success}}),(function(e){return{getUsers:function(){return e(x())},getPositions:function(){return e((function(e){return e({type:he,payload:!0}),h.get("".concat(j.apiEndpoint,"/positions")).then((function(t){e({type:xe,payload:t.data}),e({type:he,payload:!1})}))}))}}}))((function(e){var t=e.getUsers,n=e.getPositions,s=e.loadingUsers,i=e.loadingPositions;return Object(o.useEffect)((function(){t(),n()}),[]),s&&i?Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(be,{}),Object(a.jsx)(le,{}),Object(a.jsx)(Oe,{})]}):Object(a.jsx)(ye,{})})),Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,225)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),s(e),i(e)}))},we=n(34),Se={modalIsOpen:!1},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_MODAL":return Object(J.a)(Object(J.a)({},e),{},{modalIsOpen:!e.modalIsOpen});default:return e}},ke={loading:!1},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he:return Object(J.a)(Object(J.a)({},e),{},{loading:t.payload});case xe:return Object(J.a)(Object(J.a)({},e),t.payload);default:return e}},Le={loading:!1,data:[]},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(J.a)(Object(J.a)({},e),{},{loading:t.payload});case p:return Object(J.a)(Object(J.a)({},e),{},{data:t.payload});default:return e}},Ee=Object(we.c)({users:ze,positions:Ce,modal:Te}),Ie=n(92),Re=window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e},Fe=Object(we.e)(Ee,Object(we.d)(Object(we.a)(Ie.a),Re)),Be=n(94);r.a.render(Object(a.jsx)(d.a,{store:Fe,children:Object(a.jsx)(Be.a,{children:Object(a.jsx)(_e,{})})}),document.getElementById("root")),Ne()},49:function(e){e.exports=JSON.parse('{"apiEndpoint":"https://frontend-test-assignment-api.abz.agency/api/v1"}')},91:function(e,t,n){e.exports={loader:"Loader_loader__2hZcM",animate:"Loader_animate__1gVIQ",animate2:"Loader_animate2__1qJ4J"}}},[[170,1,2]]]);
//# sourceMappingURL=main.b5832236.chunk.js.map