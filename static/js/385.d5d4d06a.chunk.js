"use strict";(self.webpackChunkyour_pet_project_frontend=self.webpackChunkyour_pet_project_frontend||[]).push([[385],{7262:function(e,a,n){n(2791);a.Z=n.p+"static/media/sprite.958c9400be173773d1597ed271ca37d3.svg"},8385:function(e,a,n){n.r(a),n.d(a,{default:function(){return da}});var t=n(3433),r=n(1413),l=n(9439),s=n(2791),i=n(5987),o=n(5705),c="Input_field__DGQGZ",d="Input_label__mIGyx",u="Input_input__wo+Nj",m="Input_inputWrapper__0ZXqV",h=n(184),p=["label","name"],x=function(e){var a=e.label,n=e.name,t=(0,i.Z)(e,p);return(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)("label",{className:d,htmlFor:n,name:n,children:a}),(0,h.jsxs)("div",{className:m,children:[(0,h.jsx)(o.gN,(0,r.Z)({className:u,id:n,name:n},t)),(0,h.jsx)(o.Bc,{name:n,component:"p"})]})]})},_="File_fileWrapper__ViG08",f="File_fileContainer__Z6q+U",j="File_capture__+-ktb",b="File_input__zRCs2",v="File_labelFile__Uw3F6",y="File_thumbnail__EAOCT",N="File_inputWrapper__dDEiI",Z=["label","name","type","style"],g=function(e){var a=e.label,n=e.name,t=e.type,c=e.style,d=(0,i.Z)(e,Z),u=(0,o.u6)().setFieldValue,m=(0,s.useState)(null),p=(0,l.Z)(m,2),x=p[0],g=p[1];return(0,h.jsxs)("div",{className:_,children:[(0,h.jsxs)("div",{className:f+" "+c,children:[(0,h.jsx)("p",{className:j+" "+c,children:a}),(0,h.jsx)("label",{className:v,htmlFor:n,name:n,children:x?(0,h.jsx)("img",{src:x,alt:"Thumbnail",className:y}):null})]}),(0,h.jsxs)("div",{className:N,children:[(0,h.jsx)("input",(0,r.Z)({onChange:function(e){var a=e.currentTarget.files[0];if(a){var t=new FileReader;t.onload=function(){g(t.result),u(n,a)},t.readAsDataURL(a)}else g(null)},className:b,name:n,id:n,type:t},d)),(0,h.jsx)(o.Bc,{name:n,component:"p"})]})]})},P={input:"RadioButtonsOption_input__or7sU",buttonLabel:"RadioButtonsOption_buttonLabel__6gZDI"},w=["label","name","options","show"],T=function(e){var a=e.label,n=e.name,t=e.options,l=(e.show,(0,i.Z)(e,w));return(0,h.jsxs)("div",{className:P.radioWrapper,children:[(0,h.jsx)("label",{htmlFor:n,name:n,children:a}),(0,h.jsx)(o.gN,(0,r.Z)((0,r.Z)({name:n},l),{},{children:function(e){var a=e.field;return t.map((function(e){return(0,h.jsxs)(s.Fragment,{children:[(0,h.jsx)("input",(0,r.Z)((0,r.Z)({className:P.input,type:"radio",id:e.value},a),{},{value:e.value,checked:a.value===e.value||!a.value&&e===t[0]})),(0,h.jsx)("label",{className:P.buttonLabel,htmlFor:e.value,children:e.show})]},e.key)}))}})),(0,h.jsx)(o.Bc,{name:n,component:"p"})]})},q="RadioButtonsSex_radioWrapper__BOibR",S="RadioButtonsSex_commonLabel__xRzet",C="RadioButtonsSex_optionsWrapper__IHLXb",B="RadioButtonsSex_input__GYQaT",F="RadioButtonsSex_buttonLabel__U37Qt",k="RadioButtonsSex_icon__sLHey",D="RadioButtonsSex_male__tRJB0",A="RadioButtonsSex_inputWrapper__i-OI0",L=["label","name","options"],R=function(e){var a=e.label,n=e.name,t=e.options,l=(0,i.Z)(e,L);return(0,h.jsxs)("div",{className:q,children:[(0,h.jsx)("label",{className:S,htmlFor:n,name:n,children:a}),(0,h.jsx)("div",{className:C,children:(0,h.jsx)(o.gN,(0,r.Z)((0,r.Z)({name:n},l),{},{children:function(e){var a=e.field;return t.map((function(e){return(0,h.jsx)(s.Fragment,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)("input",(0,r.Z)((0,r.Z)({className:B,type:"radio",id:e.value},a),{},{value:e.value,checked:a.value===e.value||!a.value&&e===t[0]})),(0,h.jsxs)("label",{className:F,htmlFor:e.value,children:[(0,h.jsx)("svg",{className:"female"===e.key?k:k+" "+D,children:(0,h.jsx)("use",{href:e.icon})}),e.value]})]})},e.key)}))}}))}),(0,h.jsx)("div",{className:A,children:(0,h.jsx)(o.Bc,{name:n,component:"p"})})]})},Y="Textarea_label__XTjda",I="Textarea_input__HomPM",G="Textarea_textAreaWrapper__aYrl0",O=["label","name","style"],z=function(e){var a=e.label,n=e.name,t=e.style,l=(0,i.Z)(e,O);return(0,h.jsxs)("div",{className:G,children:[(0,h.jsx)("label",{className:Y,htmlFor:n,children:a}),(0,h.jsx)(o.gN,(0,r.Z)({className:I+" "+t,as:"textarea",id:n,name:n},l)),(0,h.jsx)(o.Bc,{name:n,component:"p"})]})},M=["control"],H=function(e){var a=e.control,n=(0,i.Z)(e,M);switch(a){case"input":return(0,h.jsx)(x,(0,r.Z)({},n));case"textarea":return(0,h.jsx)(z,(0,r.Z)({},n));case"radio":return(0,h.jsx)(T,(0,r.Z)({},n));case"sex":return(0,h.jsx)(R,(0,r.Z)({},n));case"file":return(0,h.jsx)(g,(0,r.Z)({},n));default:return null}},J="ButtonNext_button__uDInJ",V="ButtonNext_icon__lFxLm",$=["name","icon"],W=function(e){var a=e.name,n=e.icon;(0,i.Z)(e,$);return(0,h.jsxs)("button",{className:J,children:[a,(0,h.jsx)("svg",{className:V,children:(0,h.jsx)("use",{href:n})})]})},K="ButtonBack_button__ijjF6",U="ButtonBack_icon__jdzRf",E=function(e){var a=e.name,n=e.icon,t=e.onClick;return(0,h.jsxs)("button",{className:K,onClick:t,children:[(0,h.jsx)("svg",{className:U,children:(0,h.jsx)("use",{href:n})}),a]})},Q="ProgressBar_barWrapper__n1oBc",X="ProgressBar_barOption__NcT5v",ee="ProgressBar_barList__4yh3l",ae="ProgressBar_barItem__NiQ0K",ne="ProgressBar_current__WjsPC",te="ProgressBar_passed__nIYeH",re=function(e){var a=e.step,n="",t="",r="";return 1===a?(n="".concat(ae," ").concat(ne),t="".concat(ae),r="".concat(ae)):2===a?(n="".concat(ae," ").concat(te),t="".concat(ae," ").concat(ne),r="".concat(ae)):3===a&&(n="".concat(ae," ").concat(te),t="".concat(ae," ").concat(te),r="".concat(ae," ").concat(ne)),(0,h.jsx)("div",{className:Q,children:(0,h.jsxs)("ul",{className:ee,children:[(0,h.jsx)("li",{className:n,children:(0,h.jsx)("span",{className:X,children:"Choose option"})}),(0,h.jsx)("li",{className:t,children:(0,h.jsx)("span",{className:X,children:"Personal details"})}),(0,h.jsx)("li",{className:r,children:(0,h.jsx)("span",{className:X,children:"More info"})})]})})},le=n(6727),se=n(7262),ie="StepOne_header__q0l9V",oe="StepOne_buttonContainer__KUzn9",ce="StepOne_bgForm__efS4D",de=n(7689),ue=[{value:"your-pet",key:"yourPet",show:"your pet"},{value:"sell",key:"sell",show:"sell"},{value:"lost-found",key:"lostFound",show:"lost/found"},{value:"for-free",key:"inGoodHands",show:"in good hands"}],me=le.Ry({category:le.Z_().required("Choose a category in which you want to add an advertisement")}),he=function(e){var a,n=(0,de.s0)(),t=(null===(a=(0,de.TH)().state)||void 0===a?void 0:a.from)||"/";return(0,h.jsxs)("div",{className:ce,children:[(0,h.jsx)("h1",{className:ie,children:"Add pet"}),(0,h.jsx)(re,{step:1}),(0,h.jsx)(o.J9,{initialValues:e.data,onSubmit:function(a){e.next(a)},validationSchema:me,children:function(){return(0,h.jsxs)(o.l0,{children:[(0,h.jsx)(H,{control:"radio",label:"",name:"category",options:ue}),(0,h.jsxs)("div",{className:oe,children:[(0,h.jsx)(W,{type:"submit",name:"Next",icon:se.Z+"#paw-white"}),(0,h.jsx)(E,{type:"button",name:"Cancel",icon:se.Z+"#arrow-left",onClick:function(){return n(t)}})]})]})}})]})},pe={bgForm:"YourPet_bgForm__WwtSF",header:"YourPet_header__qswA7",buttonContainer:"YourPet_buttonContainer__bIAwM",buttonContainerSecond:"YourPet_buttonContainerSecond__e1TC7"},xe=le.Ry({name:le.Z_().required('The "Name" field is required').min(2,"Please enter a value between 2 and 16 characters in length").max(16,"Please enter a value between 2 and 16 characters in length").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,"Please enter only letters (no numbers or special characters) in this field"),date:le.Z_().required('The "Date of birth" field is required').matches(/^(\d{2})\.(\d{2})\.(\d{4})$/,"Please enter the date in the format DD.MM.YYYY (for example, 22.10.2022)").test("valid-date","The entered date is invalid",(function(e){if(!e)return!0;var a=e.split("."),n=(0,l.Z)(a,3),t=n[0],r=n[1],s=n[2];return!isNaN(Date.parse("".concat(s,"-").concat(r,"-").concat(t)))})),breed:le.Z_().required('The "Breed" field is required').min(2,"Please enter a value between 2 and 16 characters in length").max(16,"Please enter a value between 2 and 16 characters in length").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,"Please enter only letters (no numbers or special characters) in this field")}),_e=le.Ry({image:le.nK().required('The "Photo" field is required'),comments:le.Z_().notRequired().min(8,"Please enter a value between 8 and 120 characters in length").max(120,"Please enter a value between 8 and 120 characters in length")}),fe=function(e){return(0,h.jsxs)("div",{className:pe.bgForm,children:[(0,h.jsx)("h1",{className:pe.header,children:"Add pet for sale"}),(0,h.jsx)(re,{step:2}),(0,h.jsx)(o.J9,{initialValues:e.data,onSubmit:function(a){e.next(a)},validationSchema:xe,children:function(a){var n=a.values;return(0,h.jsxs)(o.l0,{children:[(0,h.jsx)(H,{control:"input",label:"Pet's name",name:"name",placeholder:"Type name pet"}),(0,h.jsx)(H,{control:"input",label:"Date of birth",name:"date",placeholder:"Type date of birth"}),(0,h.jsx)(H,{control:"input",label:"Breed",name:"breed",placeholder:"Type breed"}),(0,h.jsxs)("div",{className:pe.buttonContainer,children:[(0,h.jsx)(W,{type:"submit",name:"Next",icon:se.Z+"#paw-white"}),(0,h.jsx)(E,{type:"button",name:"Back",icon:se.Z+"#arrow-left",onClick:function(){return e.prev(n)}})]})]})}})]})},je=function(e){return(0,h.jsxs)("div",{className:pe.bgForm+" "+pe.bgFormMidle,children:[(0,h.jsx)("h1",{className:pe.header,children:"Add pet for sale"}),(0,h.jsx)(re,{step:3}),(0,h.jsx)(o.J9,{initialValues:e.data,onSubmit:function(a){e.next(a,!0)},validationSchema:_e,children:function(a){var n=a.values;return(0,h.jsxs)(o.l0,{children:[(0,h.jsxs)("div",{className:pe.formContainer,children:[(0,h.jsx)("div",{className:pe.firstChild,children:(0,h.jsx)(H,{style:pe.addPhoto,control:"file",label:"Load the pet`s image",name:"image",type:"file"})}),(0,h.jsx)(H,{style:pe.comments,control:"textarea",label:"Comments",name:"comments",placeholder:"Type comments"})]}),(0,h.jsxs)("div",{className:pe.buttonContainer,children:[(0,h.jsx)(W,{type:"submit",name:"Done",icon:se.Z+"#paw-white"}),(0,h.jsx)(E,{type:"button",name:"Back",icon:se.Z+"#arrow-left",onClick:function(){return e.prev(n)}})]})]})}})]})},be="Sell_bgForm__bBa7z",ve="Sell_header__tIjG2",ye="Sell_buttonContainer__wzjEv",Ne="Sell_bgFormMidle__7GsiL",Ze="Sell_formContainer__N6Dsm",ge="Sell_firstChild__S2bqe",Pe="Sell_secondChild__-qKfY",we="Sell_addPhoto__XdbW1",Te="Sell_comments__OCCBw",qe=le.Ry({name:le.Z_().required('The "Name" field is required').min(2,"Please enter a value between 2 and 16 characters in length").max(16,"Please enter a value between 2 and 16 characters in length").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,"Please enter only letters (no numbers or special characters) in this field"),date:le.Z_().required('The "Date of birth" field is required').matches(/^(\d{2})\.(\d{2})\.(\d{4})$/,"Please enter the date in the format DD.MM.YYYY (for example, 22.10.2022)").test("valid-date","The entered date is invalid",(function(e){if(!e)return!0;var a=e.split("."),n=(0,l.Z)(a,3),t=n[0],r=n[1],s=n[2];return!isNaN(Date.parse("".concat(s,"-").concat(r,"-").concat(t)))})),breed:le.Z_().required('The "Breed" field is required').min(2,"Please enter a value between 2 and 16 characters in length").max(16,"Please enter a value between 2 and 16 characters in length").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,"Please enter only letters (no numbers or special characters) in this field")}),Se=le.Ry({sex:le.Z_().required('The "Sex" field is required').oneOf(["male","female"],"Please choose one of the valid types: male or female"),image:le.nK().required('The "Photo" field is required'),location:le.Z_().required('The "Location" field is required').matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,'Please enter a string in the format "City". For example: Brovary, Kyiv, Akhtyrka, Sumy'),price:le.Rx().typeError("Please enter a numerical value").required('The "Price" field is required').positive("Please enter a number greater than 0"),comments:le.Z_().notRequired().min(8,"Please enter a value between 8 and 120 characters in length").max(120,"Please enter a value between 8 and 120 characters in length")}),Ce=[{value:"female",key:"female",icon:se.Z+"#female"},{value:"male",key:"male",icon:se.Z+"#male"}],Be=function(e){return(0,h.jsxs)("div",{className:be,children:[(0,h.jsx)("h1",{className:ve,children:"Add pet for sale"}),(0,h.jsx)(re,{step:2}),(0,h.jsx)(o.J9,{initialValues:e.data,onSubmit:function(a){e.next(a)},validationSchema:qe,children:function(a){var n=a.values;return(0,h.jsxs)(o.l0,{children:[(0,h.jsx)(H,{control:"input",label:"Title of add",name:"title",placeholder:"Type title to add"}),(0,h.jsx)(H,{control:"input",label:"Pet's name",name:"name",placeholder:"Type name pet"}),(0,h.jsx)(H,{control:"input",label:"Date of birth",name:"date",placeholder:"Type date of birth"}),(0,h.jsx)(H,{control:"input",label:"Breed",name:"breed",placeholder:"Type breed"}),(0,h.jsxs)("div",{className:ye,children:[(0,h.jsx)(W,{type:"submit",name:"Next",icon:se.Z+"#paw-white"}),(0,h.jsx)(E,{type:"button",name:"Back",icon:se.Z+"#arrow-left",onClick:function(){return e.prev(n)}})]})]})}})]})},Fe=function(e){return(0,h.jsxs)("div",{className:be+" "+Ne,children:[(0,h.jsx)("h1",{className:ve,children:"Add pet for sale"}),(0,h.jsx)(re,{step:3}),(0,h.jsx)(o.J9,{initialValues:e.data,onSubmit:function(a){e.next(a,!0)},validationSchema:Se,children:function(a){var n=a.values;return(0,h.jsxs)(o.l0,{children:[(0,h.jsxs)("div",{className:Ze,children:[(0,h.jsxs)("div",{className:ge,children:[(0,h.jsx)(H,{control:"sex",label:"The sex",name:"sex",options:Ce}),(0,h.jsx)(H,{style:we,control:"file",label:"Load the pet`s image",name:"image",type:"file"})]}),(0,h.jsxs)("div",{className:Pe,children:[(0,h.jsx)(H,{control:"input",label:"Location",name:"location",placeholder:"Type location"}),(0,h.jsx)(H,{control:"input",label:"Price",name:"price",placeholder:"Type price"}),(0,h.jsx)(H,{style:Te,control:"textarea",label:"Comments",name:"comments",placeholder:"Type comments"})]})]}),(0,h.jsxs)("div",{className:ye,children:[(0,h.jsx)(W,{type:"submit",name:"Done",icon:se.Z+"#paw-white"}),(0,h.jsx)(E,{type:"button",name:"Back",icon:se.Z+"#arrow-left",onClick:function(){return e.prev(n)}})]})]})}})]})},ke="LostFound_bgForm__8GYa9",De="LostFound_header__gKh5+",Ae="LostFound_buttonContainer__oWaJS",Le="LostFound_bgFormMidle__O+dwm",Re="LostFound_formContainer__7nMGN",Ye="LostFound_firstChild__j9fjY",Ie="LostFound_secondChild__uzajQ",Ge="LostFound_addPhoto__kZPVd",Oe="LostFound_comments__Sa693",ze=le.Ry({name:le.Z_().required('The "Name" field is required').min(2,"Please enter a value between 2 and 16 characters in length").max(16,"Please enter a value between 2 and 16 characters in length").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,"Please enter only letters (no numbers or special characters) in this field"),date:le.Z_().required('The "Date of birth" field is required').matches(/^(\d{2})\.(\d{2})\.(\d{4})$/,"Please enter the date in the format DD.MM.YYYY (for example, 22.10.2022)").test("valid-date","The entered date is invalid",(function(e){if(!e)return!0;var a=e.split("."),n=(0,l.Z)(a,3),t=n[0],r=n[1],s=n[2];return!isNaN(Date.parse("".concat(s,"-").concat(r,"-").concat(t)))})),breed:le.Z_().required('The "Breed" field is required').min(2,"Please enter a value between 2 and 16 characters in length").max(16,"Please enter a value between 2 and 16 characters in length").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,"Please enter only letters (no numbers or special characters) in this field")}),Me=le.Ry({sex:le.Z_().required('The "Sex" field is required').oneOf(["male","female"],"Please choose one of the valid types: male or female"),image:le.nK().required('The "Photo" field is required'),location:le.Z_().required('The "Location" field is required').matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,'Please enter a string in the format "City". For example: Brovary, Kyiv, Akhtyrka, Sumy'),comments:le.Z_().notRequired().min(8,"Please enter a value between 8 and 120 characters in length").max(120,"Please enter a value between 8 and 120 characters in length")}),He=[{value:"female",key:"female",icon:se.Z+"#female"},{value:"male",key:"male",icon:se.Z+"#male"}],Je=function(e){return(0,h.jsxs)("div",{className:ke,children:[(0,h.jsx)("h1",{className:De,children:"Add pet for sale"}),(0,h.jsx)(re,{step:2}),(0,h.jsx)(o.J9,{initialValues:e.data,onSubmit:function(a){e.next(a)},validationSchema:ze,children:function(a){var n=a.values;return(0,h.jsxs)(o.l0,{children:[(0,h.jsx)(H,{control:"input",label:"Title of add",name:"title",placeholder:"Type title to add"}),(0,h.jsx)(H,{control:"input",label:"Pet's name",name:"name",placeholder:"Type name pet"}),(0,h.jsx)(H,{control:"input",label:"Date of birth",name:"date",placeholder:"Type date of birth"}),(0,h.jsx)(H,{control:"input",label:"Breed",name:"breed",placeholder:"Type breed"}),(0,h.jsxs)("div",{className:Ae,children:[(0,h.jsx)(W,{type:"submit",name:"Next",icon:se.Z+"#paw-white"}),(0,h.jsx)(E,{type:"button",name:"Back",icon:se.Z+"#arrow-left",onClick:function(){return e.prev(n)}})]})]})}})]})},Ve=function(e){return(0,h.jsxs)("div",{className:ke+" "+Le,children:[(0,h.jsx)("h1",{className:De,children:"Add pet for sale"}),(0,h.jsx)(re,{step:3}),(0,h.jsx)(o.J9,{initialValues:e.data,onSubmit:function(a){e.next(a,!0)},validationSchema:Me,children:function(a){var n=a.values;return(0,h.jsxs)(o.l0,{children:[(0,h.jsxs)("div",{className:Re,children:[(0,h.jsxs)("div",{className:Ye,children:[(0,h.jsx)(H,{control:"sex",label:"The sex",name:"sex",options:He}),(0,h.jsx)(H,{style:Ge,control:"file",label:"Load the pet`s image",name:"image",type:"file"})]}),(0,h.jsxs)("div",{className:Ie,children:[(0,h.jsx)(H,{control:"input",label:"Location",name:"location",placeholder:"Type location"}),(0,h.jsx)(H,{style:Oe,control:"textarea",label:"Comments",name:"comments",placeholder:"Type comments"})]})]}),(0,h.jsxs)("div",{className:Ae,children:[(0,h.jsx)(W,{type:"submit",name:"Done",icon:se.Z+"#paw-white"}),(0,h.jsx)(E,{type:"button",name:"Back",icon:se.Z+"#arrow-left",onClick:function(){return e.prev(n)}})]})]})}})]})},$e="InGoodHands_bgForm__y8AFO",We="InGoodHands_header__UznGG",Ke="InGoodHands_buttonContainer__bJmeL",Ue="InGoodHands_bgFormMidle__SvdMU",Ee="InGoodHands_formContainer__4wivx",Qe="InGoodHands_firstChild__h6Dft",Xe="InGoodHands_secondChild__WwJf1",ea="InGoodHands_addPhoto__5V33J",aa="InGoodHands_comments__ypqZa",na=le.Ry({name:le.Z_().required('The "Name" field is required').min(2,"Please enter a value between 2 and 16 characters in length").max(16,"Please enter a value between 2 and 16 characters in length").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,"Please enter only letters (no numbers or special characters) in this field"),date:le.Z_().required('The "Date of birth" field is required').matches(/^(\d{2})\.(\d{2})\.(\d{4})$/,"Please enter the date in the format DD.MM.YYYY (for example, 22.10.2022)").test("valid-date","The entered date is invalid",(function(e){if(!e)return!0;var a=e.split("."),n=(0,l.Z)(a,3),t=n[0],r=n[1],s=n[2];return!isNaN(Date.parse("".concat(s,"-").concat(r,"-").concat(t)))})),breed:le.Z_().required('The "Breed" field is required').min(2,"Please enter a value between 2 and 16 characters in length").max(16,"Please enter a value between 2 and 16 characters in length").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,"Please enter only letters (no numbers or special characters) in this field")}),ta=le.Ry({sex:le.Z_().required('The "Sex" field is required').oneOf(["male","female"],"Please choose one of the valid types: male or female"),image:le.nK().required('The "Photo" field is required'),location:le.Z_().required('The "Location" field is required').matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,'Please enter a string in the format "City". For example: Brovary, Kyiv, Akhtyrka, Sumy'),comments:le.Z_().notRequired().min(8,"Please enter a value between 8 and 120 characters in length").max(120,"Please enter a value between 8 and 120 characters in length")}),ra=[{value:"female",key:"female",icon:se.Z+"#female"},{value:"male",key:"male",icon:se.Z+"#male"}],la=function(e){return(0,h.jsxs)("div",{className:$e,children:[(0,h.jsx)("h1",{className:We,children:"Add pet for sale"}),(0,h.jsx)(re,{step:2}),(0,h.jsx)(o.J9,{initialValues:e.data,onSubmit:function(a){e.next(a)},validationSchema:na,children:function(a){var n=a.values;return(0,h.jsxs)(o.l0,{children:[(0,h.jsx)(H,{control:"input",label:"Title of add",name:"title",placeholder:"Type title to add"}),(0,h.jsx)(H,{control:"input",label:"Pet's name",name:"name",placeholder:"Type name pet"}),(0,h.jsx)(H,{control:"input",label:"Date of birth",name:"date",placeholder:"Type date of birth"}),(0,h.jsx)(H,{control:"input",label:"Breed",name:"breed",placeholder:"Type breed"}),(0,h.jsxs)("div",{className:Ke,children:[(0,h.jsx)(W,{type:"submit",name:"Next",icon:se.Z+"#paw-white"}),(0,h.jsx)(E,{type:"button",name:"Back",icon:se.Z+"#arrow-left",onClick:function(){return e.prev(n)}})]})]})}})]})},sa=function(e){return(0,h.jsxs)("div",{className:$e+" "+Ue,children:[(0,h.jsx)("h1",{className:We,children:"Add pet for sale"}),(0,h.jsx)(re,{step:3}),(0,h.jsx)(o.J9,{initialValues:e.data,onSubmit:function(a){e.next(a,!0)},validationSchema:ta,children:function(a){var n=a.values;return(0,h.jsxs)(o.l0,{children:[(0,h.jsxs)("div",{className:Ee,children:[(0,h.jsxs)("div",{className:Qe,children:[(0,h.jsx)(H,{control:"sex",label:"The sex",name:"sex",options:ra}),(0,h.jsx)(H,{style:ea,control:"file",label:"Load the pet`s image",name:"image",type:"file"})]}),(0,h.jsxs)("div",{className:Xe,children:[(0,h.jsx)(H,{control:"input",label:"Location",name:"location",placeholder:"Type location"}),(0,h.jsx)(H,{style:aa,control:"textarea",label:"Comments",name:"comments",placeholder:"Type comments"})]})]}),(0,h.jsxs)("div",{className:Ke,children:[(0,h.jsx)(W,{type:"submit",name:"Done",icon:se.Z+"#paw-white"}),(0,h.jsx)(E,{type:"button",name:"Back",icon:se.Z+"#arrow-left",onClick:function(){return e.prev(n)}})]})]})}})]})};function ia(){var e=(0,s.useState)({category:"your-pet",sex:"male",name:"",date:"",breed:"",image:"",location:"",price:"",comments:"",title:""}),a=(0,l.Z)(e,2),n=a[0],i=a[1],o=(0,s.useState)(0),c=(0,l.Z)(o,2),d=c[0],u=c[1],m=(0,de.s0)(),p=function(){i({category:"your-pet",name:"",date:"",breed:"",image:"",sex:"",location:"",price:"",comments:"",title:""})},x=function(e){for(var a={},n=0,t=Object.keys(e);n<t.length;n++){var r=t[n];e[r]&&(a[r]=e[r])}a.category,console.log("Form submitted. Data:",a)},_=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(i((function(a){return(0,r.Z)((0,r.Z)({},a),e)})),a)return x(e),p(),void m(-1);u((function(e){return e+1}))},f=[(0,h.jsx)(he,{next:_,data:n})];return f.push.apply(f,(0,t.Z)(function(e,a,t){switch(e){case"your-pet":return[(0,h.jsx)(fe,{next:a,prev:t,data:n}),(0,h.jsx)(je,{next:a,prev:t,data:n})];case"sell":return[(0,h.jsx)(Be,{next:a,prev:t,data:n}),(0,h.jsx)(Fe,{next:a,prev:t,data:n})];case"lost-found":return[(0,h.jsx)(Je,{next:a,prev:t,data:n}),(0,h.jsx)(Ve,{next:a,prev:t,data:n})];case"for-free":return[(0,h.jsx)(la,{next:a,prev:t,data:n}),(0,h.jsx)(sa,{next:a,prev:t,data:n})];default:return[]}}(n.category,_,(function(e){i((function(a){return(0,r.Z)((0,r.Z)({},a),e)})),u((function(e){return e-1}))})))),(0,h.jsx)("div",{children:f[d]})}var oa="AddPetPage_overlay__ohq15",ca="AddPetPage_container__uPNGI",da=function(){return(0,h.jsx)("div",{className:oa,children:(0,h.jsx)("div",{className:ca,children:(0,h.jsx)(ia,{})})})}},5987:function(e,a,n){n.d(a,{Z:function(){return r}});var t=n(3366);function r(e,a){if(null==e)return{};var n,r,l=(0,t.Z)(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}}}]);
//# sourceMappingURL=385.d5d4d06a.chunk.js.map