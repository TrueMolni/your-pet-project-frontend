"use strict";(self.webpackChunkyour_pet_project_frontend=self.webpackChunkyour_pet_project_frontend||[]).push([[889],{7262:function(e,t,n){n(2791);t.Z=n.p+"static/media/sprite.ea67adcb241711fe9b4a0f1b20ef5d17.svg"},6057:function(e,t,n){var s=n(7262),a=n(7228),o=n(184);t.Z=function(){return(0,o.jsx)("svg",{width:24,height:24,className:a.Z.iconPaw,children:(0,o.jsx)("use",{href:s.Z+"#paw-white"})})}},8923:function(e,t,n){n.r(t),n.d(t,{default:function(){return ce}});var s=n(2791),a="UserPage_container__qulzD",o=n(5861),i=n(9439),c=n(4687),r=n.n(c),l=n(4942),d="UserDataItem_input__zpY4n",u="UserDataItem_btnSaved__831Wv",m="UserDataItem_btnSave__dNfL8",p="UserDataItem_btnEdit__fvgWh",h="UserDataItem_inputLable__gamLY",_=n(1243);_.Z.defaults.baseURL="http://localhost:3030";var f=function(){var e=(0,o.Z)(r().mark((function e(t,n){var s,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _.Z.defaults.headers.common.Authorization="Bearer ".concat(n),(s=new FormData).append("photo",t),e.next=5,_.Z.post("/api/users/user",s);case 5:return a=e.sent,e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=n(9434),x=n(9869),j=n(184),b=function(e){var t=e.label,n=(0,v.v9)(x.v0).token,a=(0,s.useState)({photo:"",name:"",email:"",phone:"",birthday:"",city:""}),o=(0,i.Z)(a,2),c=o[0],r=o[1],_=(0,s.useState)("edit"),b=(0,i.Z)(_,2),g=b[0],N=b[1],A=function(e){var t=e.currentTarget.value,n=e.currentTarget.name;r((0,l.Z)({},n,t))};return(0,j.jsxs)(j.Fragment,{children:["edit"===g&&(0,j.jsx)("div",{children:(0,j.jsxs)("label",{className:h,children:[t,(0,j.jsx)("input",{className:d,variant:"filled",value:c.label,placeholder:t,type:t,name:t,readOnly:"readonly"})," ",(0,j.jsxs)("button",{className:p,onClick:function(){console.log("edit click"),N("editing")},children:[(0,j.jsx)("span",{className:"css.pencle-icon"}),"Edit"]})]})}),"editing"===g&&(0,j.jsx)("div",{children:(0,j.jsxs)("label",{className:h,children:[t,(0,j.jsx)("input",{className:d,variant:"filled",onChange:A,value:c.label,placeholder:t,type:t,name:t}),(0,j.jsxs)("button",{className:u,children:[(0,j.jsx)("span",{className:"css.confirm-icon"}),"Save"]})]})}),"edited"===g&&(0,j.jsx)("div",{children:(0,j.jsxs)("label",{className:h,children:[t,(0,j.jsx)("input",{className:d,variant:"filled",onChange:A,value:c.label,placeholder:t,type:t,name:t}),(0,j.jsxs)("button",{className:m,onClick:function(){console.log("editing click"),N("edited"),f(c,n),N("edit")},children:[(0,j.jsx)("span",{className:"css.confirm-icon"}),"Save"]})]})})]})},g="UserData_inputImg__Aw9fo",N="UserData_loading__qa2qX",A="UserData_imgUser__bEPwb",y="UserData_formStyle__SLQ5D",k="UserData_avatarDiv__MLOUj",C="UserData_btnEditPhoto__T2H4M",Z="UserData_btnIsConfirmPhoto__oaJ+r",I="UserData_btnConfirmPhoto__Xn2JH",w="UserData_divreverse__tK7JM",S=function(e){e.data;var t=(0,s.useState)(""),n=(0,i.Z)(t,2),a=n[0],c=n[1],l=(0,s.useState)("save"),d=(0,i.Z)(l,2),u=d[0],m=d[1],p=(0,v.v9)(x.v0).token,h=(0,s.useState)(""),_=(0,i.Z)(h,2),S=_[0],B=_[1],D=(0,s.useState)(!1),L=(0,i.Z)(D,2),U=L[0],E=L[1],P=function(){var e=(0,o.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),m("updated"),e.next=4,f(a,p).then((function(e){return B(e.avatar)}));case 4:E(!1),m("save");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h1",{children:"My Information:"}),(0,j.jsxs)("div",{className:w,children:[(0,j.jsxs)("div",{className:k,children:[(0,j.jsx)("img",{className:A,src:S,alt:""}),U&&(0,j.jsx)("h2",{className:N,children:"...LOADING..."}),"save"===u&&(0,j.jsxs)("button",{onClick:function(e){m("confirm"),document.getElementById("fileInput").click(),document.getElementById("fileInput").addEventListener("change",(function(e){c(e.target.files[0])}))},className:C,children:[(0,j.jsx)("span",{className:"css.camera-icon"}),"Edit photo"]}),"updated"===u&&(0,j.jsxs)("button",{className:I,children:[(0,j.jsx)("span",{className:"css.camera-icon"}),"Confirm"]}),"confirm"===u&&(0,j.jsxs)("button",{onClick:P,className:Z,children:[(0,j.jsx)("span",{className:"css.camera-icon"}),"Confirm"]}),(0,j.jsx)("input",{className:g,id:"fileInput",type:"file",accept:"image/*"})]}),(0,j.jsxs)("form",{className:y,autoComplete:"off",children:[" ",(0,j.jsx)(b,{label:"Name:"}),(0,j.jsx)(b,{label:"Email:"}),(0,j.jsx)(b,{label:"Phone:"}),(0,j.jsx)(b,{label:"Birthday:"}),(0,j.jsx)(b,{label:"City"})]})]})]})},B="Logout_logoutBtn__YeNeW",D=function(){return(0,j.jsxs)("button",{className:B,onClick:function(){},children:[(0,j.jsx)("span",{className:"css.logout-icon"}),"Logout"]})},L=n(4902),U="btnDeletePet_deleteBtn__XSXrN",E="btnDeletePet_iconTrash__ucI1G",P=n(7262),W=function(e){var t=e.onClick,n=e.name;return(0,j.jsx)("button",{className:U,name:n,type:"button",onClick:function(e){t(e)},children:(0,j.jsx)("svg",{width:24,height:24,className:E,children:(0,j.jsx)("use",{href:P.Z+"#trash"})})})},O="petsItem_box__tOvii",F="petsItem_wrapperPicDiv__oylIc",K="petsItem_description__tQ0kV",G="petsItem_infoPet__HoNK-",X=function(e){var t=e.pet,n=t.name,s=t.date,a=t.breed,o=t.avatarURL,i=t.comments;return(0,j.jsxs)("div",{className:O,children:[(0,j.jsx)("div",{className:F,children:(0,j.jsx)("img",{src:o||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACvBAMAAAC1AP6EAAAAHlBMVEXNzc3////T09P5+fnx8fH8/Pzg4ODn5+f29vbU1NTpLY0FAAABbklEQVR42u3aQU7CQACF4QGBxuULlHWTeoHOCXShexMPoIkXmBvI0p0b72uZaBsligvTeZj/W7Ai4c+jlCZtAAAAAAAAAAAAAAAA/9PjrX52dx+mt9BRmzC9Kx13Gaa20i9sw9QWkuO3uJSOHdEPqsPUZtIfvIUssr79zNV1feOXdb6T9GyX9ape/eKWtdPek1nWStnWLGuhbGOWtVRWh9GqKZ/Vv2RhlGL5rMO1Kq2b4lmHx1aSYvGsg19iJe3ncjtvJfVi8azhLD+Olefy+k9MymKwuoKopI+5nK63kt5Fp6xKGuYyykoaRJ+sSqN1Y5OVpFEsn3XRjGONc5XOmndxGGsUS2e1eZpKn60LZ827PE3SF4Wz2nwkVfLK6sfqxWSW1WqvlldWP1ZmltXKMWveWWa1csyad5ZZZ7LMmpFFViCLrFO7XUDWKWeZ3uY0vSlsegvd9IED18czTB9mAQAAAAAAAAAAAAAAAFDQGxImZsGCDB7LAAAAAElFTkSuQmCC",alt:n})}),(0,j.jsxs)("div",{className:K,children:[(0,j.jsx)(W,{style:{position:"absolute",right:"0"}}),(0,j.jsxs)("div",{className:G,children:[(0,j.jsx)("b",{children:" Name:"})," ",n||"No Info"]}),(0,j.jsxs)("div",{className:G,children:[(0,j.jsx)("b",{children:" Date of birth:"})," ",s||"No Info"]}),(0,j.jsxs)("div",{className:G,children:[(0,j.jsx)("b",{children:"Breed:"})," ",a||"No Info"]}),(0,j.jsxs)("div",{className:G,children:[(0,j.jsx)("b",{children:" Comments:"})," ",i||"No Info"]})]})]})},R=n.p+"static/media/cat.09fa650530f84169ed39.png",q={item:"petsList_item__h1v-a",imgContainer:"petsList_imgContainer__dLicX",imgEmpty:"petsList_imgEmpty__6ukFK"},T=JSON.parse('[{"_id":"64676fa5d0841686af8bcd2a","name":"Zeus","date":"19.05.2023","breed":"sphynx cat","comments":"selfish beast"," owner":"646e767193ea5da26f12a85c","__v":0,"avatarURL":"https://res.cloudinary.com/petsnode61/image/upload/v1684502888/wtpbwyyr30pidpe5az7w.jpg"},{"_id":"64677ecb0fabb4a7d090c7ef","name":"Richard","date":"16.05.2023","breed":"Staff terrier dog","comments":"Nice puppy","avatarURL":"https://res.cloudinary.com/petsnode61/image/upload/v1684229498/kylgjg4bdy4s2plc0ksw.jpg","owner":"646e767193ea5da26f12a85c","__v":0}]'),M=function(){var e=T,t=null===e||void 0===e?void 0:e.map((function(e){return(0,j.jsx)("li",{className:q.item,id:e._id,children:(0,j.jsx)(X,{pet:e})},e._id)}));return(0,j.jsxs)(j.Fragment,{children:[0===(null===e||void 0===e?void 0:e.length)&&(0,j.jsxs)("div",{className:q.imgContainer,children:[(0,j.jsx)("img",{className:q.imgEmpty,src:R,alt:"No pets were added"}),(0,j.jsx)("h3",{children:"No pets were added"})]}),(0,j.jsx)("ul",{className:q.list,children:t})]})},Y="petsData_containerPetsDate__ArOtl",z="petsData_boxMessage__E3Yye",H="petsData_message__X2-Z+",Q=n(5200),V=n(4245),J=n(3932),$={title:"modalApprooveActions_title__+W9BD",approoveBtn:"modalApprooveActions_approoveBtn__qo1OW",logout:"modalApprooveActions_logout__yOVdE",btnWrapper:"modalApprooveActions_btnWrapper__1hf3i"},ee=function(){var e=(0,s.useState)(!0),t=(0,i.Z)(e,2),n=t[0],a=t[1],o=function(){a(!1)};return(0,j.jsx)("div",{className:$.backdrop,children:(0,j.jsxs)(V.Z,{isOpen:n,onClose:o,children:[(0,j.jsx)("h1",{className:$.title,children:"Already leaving?"}),(0,j.jsxs)("div",{className:$.btnWrapper,children:[(0,j.jsx)(J.Z,{customStyle:$.approoveBtn,buttonName:"Cancel",type:"button",onClick:o}),(0,j.jsx)(J.Z,{customStyle:$.approoveBtn,buttonName:"Yes",type:"button",buttonIcon:(0,j.jsx)("svg",{width:24,height:24,className:$.logout,children:(0,j.jsx)("use",{href:P.Z+"#logout"})})})]})]})})},te=function(e){var t=e.pets,n=e.onRemove,a=(e.onAdd,e.isLoadingPets,(0,s.useState)(null)),o=(0,i.Z)(a,2),c=o[0],r=o[1],l=(0,s.useState)(!1),d=(0,i.Z)(l,2),u=d[0],m=d[1];return(0,j.jsxs)("div",{className:Y,children:[(0,j.jsxs)("div",{className:z,children:[(0,j.jsx)("h3",{className:H,children:"My pets:"}),(0,j.jsx)(Q.Z,{})]}),(0,j.jsx)(M,{removeHandler:function(e){u(!u),r(e.currentTarget.name)},pets:t,onRemove:function(e){return n(e)}}),u&&(0,j.jsx)(ee,{onRemove:function(e){return n(e)},id:c,onClose:function(){return m(!u)}})]})},ne=n(8724),se=n(7228),ae=n(6057),oe={title:"modalCongrats_title__K++-Q",text:"modalCongrats_text__gRUaD",succesBtn:"modalCongrats_succesBtn__6AAvt",iconPaw:"modalCongrats_iconPaw__k-H6h"},ie=function(){var e=(0,s.useState)(!0),t=(0,i.Z)(e,2),n=t[0],a=t[1],o=function(){a(!1),console.log("closed")};return(0,j.jsx)("div",{className:oe.backdrop,children:(0,j.jsxs)(V.Z,{isOpen:n,onClose:o,children:[(0,j.jsx)("h1",{className:oe.title,children:"Congrats!"}),(0,j.jsx)("h2",{className:oe.text,children:"Youre registration is success"}),(0,j.jsx)(J.Z,{customStyle:oe.succesBtn,buttonName:"go to profile",buttonIcon:(0,j.jsx)(ae.Z,{}),type:"button",onClick:o})]})})},ce=function(){var e=(0,v.v9)(x.gP),t=(0,v.I0)();return(0,s.useEffect)((function(){if(!e){var n=setTimeout((function(){t((0,ne.h7)())}));return function(){clearTimeout(n)}}}),[t,e]),(0,j.jsxs)(j.Fragment,{children:[e&&(0,j.jsx)(ie,{}),(0,j.jsx)("section",{className:a,children:(0,j.jsxs)("div",{style:{fontWeight:800,fontSize:20,display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:[(0,j.jsx)(S,{}),(0,j.jsx)(D,{onClick:function(){return t((0,ne.kS)())}}),(0,j.jsx)(L.Z,{customStyle:se.Z.loginBtn,buttonName:"Logout",type:"button",onClick:function(){return t((0,ne.kS)())}}),(0,j.jsx)(te,{})]})})]})}},5200:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(1087),a="add-pet-btn_Btn__l-mXc",o="add-pet-btn_icon__HnUFj",i=n(7262),c=n(184),r=function(){return(0,c.jsxs)(s.rU,{className:a,to:"/add-pet",children:["Add Pet",(0,c.jsx)("svg",{width:"24px",height:"24px",className:o,children:(0,c.jsx)("use",{href:i.Z+"#plus"})})]})}},3932:function(e,t,n){n.d(t,{Z:function(){return o}});var s="Button_button__urlvE",a=n(184),o=function(e){var t=e.customStyle,n=e.buttonName,o=e.buttonIcon,i=e.type,c=void 0===i?"button":i,r=e.onClick;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("button",{className:s+" "+t,type:c,onClick:r,children:[n,o]})})}},4902:function(e,t,n){var s=n(184);t.Z=function(e){var t=e.customStyle,n=e.buttonName,a=e.buttonIcon,o=e.type,i=void 0===o?"button":o,c=e.onClick;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("button",{className:t,type:i,onClick:c,children:[n,a]})})}},4245:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(2791),a=n(7262),o={backdrop:"modal_backdrop__KjkNO",modal:"modal_modal__Kap2h",closeButton:"modal_closeButton__Y2E7y",closeButtonIcon:"modal_closeButtonIcon__lqLv7"},i=n(184),c=function(){return(0,i.jsx)("svg",{width:24,height:24,className:o.closeButtonIcon,children:(0,i.jsx)("use",{href:a.Z+"#cross"})})},r=function(e){var t=e.isOpen,n=e.onClose,a=e.children,r=function(){n()};return(0,s.useEffect)((function(){var e=function(e){"Escape"===e.key&&r()},n=function(e){"backdrop"===e.target.className&&r()};return t?(document.body.style.overflow="hidden",document.addEventListener("keydown",e),document.addEventListener("click",n)):document.body.style.overflow="",function(){document.body.style.overflow="",document.removeEventListener("keydown",e),document.removeEventListener("click",n)}})),t?(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:o.backdrop,onClick:r}),(0,i.jsx)("div",{className:o.modal,children:(0,i.jsxs)("div",{className:o.modalContent,children:[(0,i.jsx)("button",{type:"button",className:o.closeButton,onClick:r,children:(0,i.jsx)(c,{className:o.closeButtonIcon})}),a]})})]}):null}},7228:function(e,t){t.Z={loginBtn:"auth-navigation_loginBtn__s2qiP",registerBtn:"auth-navigation_registerBtn__gNQYi",iconPaw:"auth-navigation_iconPaw__fqbqy"}}}]);
//# sourceMappingURL=889.a79e1aa4.chunk.js.map