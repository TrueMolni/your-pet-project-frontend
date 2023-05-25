"use strict";(self.webpackChunkyour_pet_project_frontend=self.webpackChunkyour_pet_project_frontend||[]).push([[405],{7262:function(e,t,n){n(2791);t.Z=n.p+"static/media/sprite.ea67adcb241711fe9b4a0f1b20ef5d17.svg"},872:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var s=n(2791),a="UserPage_container__qulzD",i=n(9439),o=n(4942),c="UserDataItem_input__zpY4n",l="UserDataItem_btnSave__dNfL8",r="UserDataItem_btnEdit__fvgWh",d="UserDataItem_inputLable__gamLY",u=n(184),m=function(e){var t=e.label,n=e.isEditing,a=e.onEditClick,m=e.onSaveClick,p=(0,s.useState)({photo:"",name:"",email:"",phone:"",birthday:"",city:""}),_=(0,i.Z)(p,2),h=_[0],v=_[1];return n?(0,u.jsx)("div",{children:(0,u.jsxs)("label",{className:d,children:[t,(0,u.jsx)("input",{className:c,variant:"filled",onChange:function(e){var t=e.currentTarget.value,n=e.currentTarget.name;v((0,o.Z)({},n,t)),console.table(h)},value:h.label,placeholder:t,type:t,name:t}),(0,u.jsxs)("button",{className:l,onClick:m,children:[(0,u.jsx)("span",{className:"css.confirm-icon"}),"Save"]})]})}):(0,u.jsx)("div",{children:(0,u.jsxs)("label",{className:d,children:[t,(0,u.jsx)("input",{className:c,variant:"filled",value:h.label,placeholder:t,type:t,name:t,readOnly:"readonly"})," ",(0,u.jsxs)("button",{className:r,onClick:a,children:[(0,u.jsx)("span",{className:"css.pencle-icon"}),"Edit"]})]})})},p="UserData_inputImg__Aw9fo",_="UserData_imgUser__bEPwb",h="UserData_formStyle__SLQ5D",v="UserData_avatarDiv__MLOUj",f="UserData_btnEditPhoto__T2H4M",x="UserData_divreverse__tK7JM",j=function(e){e.data;var t=(0,s.useState)(""),n=(0,i.Z)(t,2),a=n[0],o=n[1],c=(0,s.useState)(""),l=(0,i.Z)(c,2),r=l[0],d=l[1],j=function(e){d(e)},b=function(){d("")};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"My Information:"}),(0,u.jsxs)("div",{className:x,children:[(0,u.jsxs)("div",{className:v,children:[(0,u.jsx)("img",{className:_,src:a,alt:"",onClick:function(){o({photo:undefined})}}),(0,u.jsxs)("button",{id:"uploadButton",className:f,children:[(0,u.jsx)("span",{className:"css.camera-icon"}),"Edit photo"]}),(0,u.jsx)("input",{className:p,id:"fileInput",type:"file",accept:"image/*",onChange:function(){}})]}),(0,u.jsxs)("form",{className:h,autoComplete:"off",children:[" ",(0,u.jsx)(m,{label:"Name:",isEditing:"name"===r,onEditClick:function(){return j("name")},onSaveClick:b}),(0,u.jsx)(m,{label:"Email:",isEditing:"email"===r,onEditClick:function(){return j("email")},onSaveClick:b}),(0,u.jsx)(m,{label:"Phone:",isEditing:"phone"===r,onEditClick:function(){return j("phone")},onSaveClick:b}),(0,u.jsx)(m,{label:"Birthday:",isEditing:"birthday"===r,onEditClick:function(){return j("birthday")},onSaveClick:b}),(0,u.jsx)(m,{label:"City",isEditing:"city"===r,onEditClick:function(){return j("city")},onSaveClick:b})]})]})]})},b="Logout_logoutBtn__YeNeW",g=function(){return(0,u.jsxs)("button",{className:b,onClick:function(){},children:[(0,u.jsx)("span",{className:"css.logout-icon"}),"Logout"]})},N=n(4902),A="btnDeletePet_deleteBtn__XSXrN",y="btnDeletePet_iconTrash__ucI1G",k=n(7262),C=function(e){var t=e.onClick,n=e.name;return(0,u.jsx)("button",{className:A,name:n,type:"button",onClick:function(e){t(e)},children:(0,u.jsx)("svg",{width:24,height:24,className:y,children:(0,u.jsx)("use",{href:k.Z+"#trash"})})})},E="petsItem_box__tOvii",S="petsItem_wrapperPicDiv__oylIc",Z="petsItem_description__tQ0kV",B="petsItem_infoPet__HoNK-",I=function(e){var t=e.pet,n=t.name,s=t.date,a=t.breed,i=t.avatarURL,o=t.comments;return(0,u.jsxs)("div",{className:E,children:[(0,u.jsx)("div",{className:S,children:(0,u.jsx)("img",{src:i||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACvBAMAAAC1AP6EAAAAHlBMVEXNzc3////T09P5+fnx8fH8/Pzg4ODn5+f29vbU1NTpLY0FAAABbklEQVR42u3aQU7CQACF4QGBxuULlHWTeoHOCXShexMPoIkXmBvI0p0b72uZaBsligvTeZj/W7Ai4c+jlCZtAAAAAAAAAAAAAAAA/9PjrX52dx+mt9BRmzC9Kx13Gaa20i9sw9QWkuO3uJSOHdEPqsPUZtIfvIUssr79zNV1feOXdb6T9GyX9ape/eKWtdPek1nWStnWLGuhbGOWtVRWh9GqKZ/Vv2RhlGL5rMO1Kq2b4lmHx1aSYvGsg19iJe3ncjtvJfVi8azhLD+Olefy+k9MymKwuoKopI+5nK63kt5Fp6xKGuYyykoaRJ+sSqN1Y5OVpFEsn3XRjGONc5XOmndxGGsUS2e1eZpKn60LZ827PE3SF4Wz2nwkVfLK6sfqxWSW1WqvlldWP1ZmltXKMWveWWa1csyad5ZZZ7LMmpFFViCLrFO7XUDWKWeZ3uY0vSlsegvd9IED18czTB9mAQAAAAAAAAAAAAAAAFDQGxImZsGCDB7LAAAAAElFTkSuQmCC",alt:n})}),(0,u.jsxs)("div",{className:Z,children:[(0,u.jsx)(C,{style:{position:"absolute",right:"0"}}),(0,u.jsxs)("div",{className:B,children:[(0,u.jsx)("b",{children:" Name:"})," ",n||"No Info"]}),(0,u.jsxs)("div",{className:B,children:[(0,u.jsx)("b",{children:" Date of birth:"})," ",s||"No Info"]}),(0,u.jsxs)("div",{className:B,children:[(0,u.jsx)("b",{children:"Breed:"})," ",a||"No Info"]}),(0,u.jsxs)("div",{className:B,children:[(0,u.jsx)("b",{children:" Comments:"})," ",o||"No Info"]})]})]})},L=n.p+"static/media/cat.09fa650530f84169ed39.png",w={item:"petsList_item__h1v-a",imgContainer:"petsList_imgContainer__dLicX",imgEmpty:"petsList_imgEmpty__6ukFK"},D=JSON.parse('[{"_id":"64676fa5d0841686af8bcd2a","name":"Zeus","date":"19.05.2023","breed":"sphynx cat","comments":"selfish beast"," owner":"646e767193ea5da26f12a85c","__v":0,"avatarURL":"https://res.cloudinary.com/petsnode61/image/upload/v1684502888/wtpbwyyr30pidpe5az7w.jpg"},{"_id":"64677ecb0fabb4a7d090c7ef","name":"Richard","date":"16.05.2023","breed":"Staff terrier dog","comments":"Nice puppy","avatarURL":"https://res.cloudinary.com/petsnode61/image/upload/v1684229498/kylgjg4bdy4s2plc0ksw.jpg","owner":"646e767193ea5da26f12a85c","__v":0}]'),U=function(){var e=D,t=null===e||void 0===e?void 0:e.map((function(e){return(0,u.jsx)("li",{className:w.item,id:e._id,children:(0,u.jsx)(I,{pet:e})},e._id)}));return(0,u.jsxs)(u.Fragment,{children:[0===(null===e||void 0===e?void 0:e.length)&&(0,u.jsxs)("div",{className:w.imgContainer,children:[(0,u.jsx)("img",{className:w.imgEmpty,src:L,alt:"No pets were added"}),(0,u.jsx)("h3",{children:"No pets were added"})]}),(0,u.jsx)("ul",{className:w.list,children:t})]})},W="petsData_containerPetsDate__ArOtl",P="petsData_boxMessage__E3Yye",O="petsData_message__X2-Z+",K=n(5200),F=n(4245),G=n(3932),X={title:"modalApprooveActions_title__+W9BD",approoveBtn:"modalApprooveActions_approoveBtn__qo1OW",logout:"modalApprooveActions_logout__yOVdE",btnWrapper:"modalApprooveActions_btnWrapper__1hf3i"},R=function(){var e=(0,s.useState)(!0),t=(0,i.Z)(e,2),n=t[0],a=t[1],o=function(){a(!1)};return(0,u.jsx)("div",{className:X.backdrop,children:(0,u.jsxs)(F.Z,{isOpen:n,onClose:o,children:[(0,u.jsx)("h1",{className:X.title,children:"Already leaving?"}),(0,u.jsxs)("div",{className:X.btnWrapper,children:[(0,u.jsx)(G.Z,{customStyle:X.approoveBtn,buttonName:"Cancel",type:"button",onClick:o}),(0,u.jsx)(G.Z,{customStyle:X.approoveBtn,buttonName:"Yes",type:"button",buttonIcon:(0,u.jsx)("svg",{width:24,height:24,className:X.logout,children:(0,u.jsx)("use",{href:k.Z+"#logout"})})})]})]})})},M=function(e){var t=e.pets,n=e.onRemove,a=(e.onAdd,e.isLoadingPets,(0,s.useState)(null)),o=(0,i.Z)(a,2),c=o[0],l=o[1],r=(0,s.useState)(!1),d=(0,i.Z)(r,2),m=d[0],p=d[1];return(0,u.jsxs)("div",{className:W,children:[(0,u.jsxs)("div",{className:P,children:[(0,u.jsx)("h3",{className:O,children:"My pets:"}),(0,u.jsx)(K.Z,{})]}),(0,u.jsx)(U,{removeHandler:function(e){m(!m),l(e.currentTarget.name)},pets:t,onRemove:function(e){return n(e)}}),m&&(0,u.jsx)(R,{onRemove:function(e){return n(e)},id:c,onClose:function(){return p(!m)}})]})},q=n(9434),T=n(8724),V=n(7228),Y=function(){var e=(0,q.I0)();return(0,u.jsx)("section",{className:a,children:(0,u.jsxs)("div",{style:{fontWeight:800,fontSize:20,display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:[(0,u.jsx)(j,{}),(0,u.jsx)(g,{}),(0,u.jsx)(N.Z,{customStyle:V.Z.loginBtn,buttonName:"Logout",type:"button",onClick:function(){return e((0,T.kS)())}}),(0,u.jsx)(M,{})]})})}},5200:function(e,t,n){n.d(t,{Z:function(){return l}});var s=n(1087),a="add-pet-btn_Btn__l-mXc",i="add-pet-btn_icon__HnUFj",o=n(7262),c=n(184),l=function(){return(0,c.jsxs)(s.rU,{className:a,to:"/add-pet",children:["Add Pet",(0,c.jsx)("svg",{width:"24px",height:"24px",className:i,children:(0,c.jsx)("use",{href:o.Z+"#plus"})})]})}},3932:function(e,t,n){n.d(t,{Z:function(){return i}});var s="Button_button__urlvE",a=n(184),i=function(e){var t=e.customStyle,n=e.buttonName,i=e.buttonIcon,o=e.type,c=void 0===o?"button":o,l=e.onClick;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("button",{className:s+" "+t,type:c,onClick:l,children:[n,i]})})}},4902:function(e,t,n){var s=n(184);t.Z=function(e){var t=e.customStyle,n=e.buttonName,a=e.buttonIcon,i=e.type,o=void 0===i?"button":i,c=e.onClick;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("button",{className:t,type:o,onClick:c,children:[n,a]})})}},4245:function(e,t,n){n.d(t,{Z:function(){return l}});var s=n(2791),a=n(7262),i={backdrop:"modal_backdrop__KjkNO",modal:"modal_modal__Kap2h",closeButton:"modal_closeButton__Y2E7y",closeButtonIcon:"modal_closeButtonIcon__lqLv7"},o=n(184),c=function(){return(0,o.jsx)("svg",{width:24,height:24,className:i.closeButtonIcon,children:(0,o.jsx)("use",{href:a.Z+"#cross"})})},l=function(e){var t=e.isOpen,n=e.onClose,a=e.children,l=function(){n()};return(0,s.useEffect)((function(){var e=function(e){"Escape"===e.key&&l()},n=function(e){"backdrop"===e.target.className&&l()};return t?(document.body.style.overflow="hidden",document.addEventListener("keydown",e),document.addEventListener("click",n)):document.body.style.overflow="",function(){document.body.style.overflow="",document.removeEventListener("keydown",e),document.removeEventListener("click",n)}})),t?(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:i.backdrop,onClick:l}),(0,o.jsx)("div",{className:i.modal,children:(0,o.jsxs)("div",{className:i.modalContent,children:[(0,o.jsx)("button",{type:"button",className:i.closeButton,onClick:l,children:(0,o.jsx)(c,{className:i.closeButtonIcon})}),a]})})]}):null}},7228:function(e,t){t.Z={loginBtn:"auth-navigation_loginBtn__s2qiP",registerBtn:"auth-navigation_registerBtn__gNQYi",iconPaw:"auth-navigation_iconPaw__fqbqy"}}}]);
//# sourceMappingURL=405.1523d250.chunk.js.map