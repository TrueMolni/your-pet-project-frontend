"use strict";(self.webpackChunkyour_pet_project_frontend=self.webpackChunkyour_pet_project_frontend||[]).push([[385],{7262:function(e,a,n){n(2791);a.Z=n.p+"static/media/sprite.958c9400be173773d1597ed271ca37d3.svg"},8385:function(e,a,n){n.r(a),n.d(a,{default:function(){return ua}});var t=n(1413),r=n(9439),l=n(2791),s=n(5987),i=n(5705),o="Input_field__DGQGZ",c="Input_label__mIGyx",d="Input_input__wo+Nj",u="Input_inputWrapper__0ZXqV",m=n(184),h=["label","name"],p=function(e){var a=e.label,n=e.name,r=(0,s.Z)(e,h);return(0,m.jsxs)("div",{className:o,children:[(0,m.jsx)("label",{className:c,htmlFor:n,name:n,children:a}),(0,m.jsxs)("div",{className:u,children:[(0,m.jsx)(i.gN,(0,t.Z)({className:d,id:n,name:n},r)),(0,m.jsx)(i.Bc,{name:n,component:"p"})]})]})},x="File_fileWrapper__ViG08",_="File_fileContainer__Z6q+U",f="File_capture__+-ktb",j="File_input__zRCs2",b="File_labelFile__Uw3F6",v="File_thumbnail__EAOCT",y="File_inputWrapper__dDEiI",N=["label","name","type","style"],Z=function(e){var a=e.label,n=e.name,o=e.type,c=e.style,d=(0,s.Z)(e,N),u=(0,i.u6)().setFieldValue,h=(0,l.useState)(null),p=(0,r.Z)(h,2),Z=p[0],g=p[1],P=(0,l.useState)(null),w=(0,r.Z)(P,2),T=w[0],q=w[1];return Z&&console.log(Z),(0,m.jsxs)("div",{className:x,children:[(0,m.jsxs)("div",{className:_+" "+c,children:[(0,m.jsx)("p",{className:f+" "+c,children:a}),(0,m.jsx)("label",{className:b,htmlFor:n,name:n,children:T?(0,m.jsx)("img",{src:T,alt:"Thumbnail",className:v}):null})]}),(0,m.jsxs)("div",{className:y,children:[(0,m.jsx)("input",(0,t.Z)({onChange:function(e){var a=e.currentTarget.files[0];if(g(a),a){var t=new FileReader;t.onload=function(){q(t.result),u(n,a)},t.readAsDataURL(a)}else q(null)},className:j,name:n,id:n,type:o},d)),(0,m.jsx)(i.Bc,{name:n,component:"p"})]})]})},g={input:"RadioButtonsOption_input__or7sU",buttonLabel:"RadioButtonsOption_buttonLabel__6gZDI"},P=["label","name","options","show"],w=function(e){var a=e.label,n=e.name,r=e.options,o=(e.show,(0,s.Z)(e,P));return(0,m.jsxs)("div",{className:g.radioWrapper,children:[(0,m.jsx)("label",{htmlFor:n,name:n,children:a}),(0,m.jsx)(i.gN,(0,t.Z)((0,t.Z)({name:n},o),{},{children:function(e){var a=e.field;return r.map((function(e){return(0,m.jsxs)(l.Fragment,{children:[(0,m.jsx)("input",(0,t.Z)((0,t.Z)({className:g.input,type:"radio",id:e.value},a),{},{value:e.value,checked:a.value===e.value||!a.value&&e===r[0]})),(0,m.jsx)("label",{className:g.buttonLabel,htmlFor:e.value,children:e.show})]},e.key)}))}})),(0,m.jsx)(i.Bc,{name:n,component:"p"})]})},T="RadioButtonsSex_radioWrapper__BOibR",q="RadioButtonsSex_commonLabel__xRzet",S="RadioButtonsSex_optionsWrapper__IHLXb",C="RadioButtonsSex_input__GYQaT",B="RadioButtonsSex_buttonLabel__U37Qt",F="RadioButtonsSex_icon__sLHey",k="RadioButtonsSex_male__tRJB0",D="RadioButtonsSex_inputWrapper__i-OI0",A=["label","name","options"],L=function(e){var a=e.label,n=e.name,r=e.options,o=(0,s.Z)(e,A);return(0,m.jsxs)("div",{className:T,children:[(0,m.jsx)("label",{className:q,htmlFor:n,name:n,children:a}),(0,m.jsx)("div",{className:S,children:(0,m.jsx)(i.gN,(0,t.Z)((0,t.Z)({name:n},o),{},{children:function(e){var a=e.field;return r.map((function(e){return(0,m.jsx)(l.Fragment,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)("input",(0,t.Z)((0,t.Z)({className:C,type:"radio",id:e.value},a),{},{value:e.value,checked:a.value===e.value||!a.value&&e===r[0]})),(0,m.jsxs)("label",{className:B,htmlFor:e.value,children:[(0,m.jsx)("svg",{className:"female"===e.key?F:F+" "+k,children:(0,m.jsx)("use",{href:e.icon})}),e.value]})]})},e.key)}))}}))}),(0,m.jsx)("div",{className:D,children:(0,m.jsx)(i.Bc,{name:n,component:"p"})})]})},R="Textarea_label__XTjda",I="Textarea_input__HomPM",Y="Textarea_textAreaWrapper__aYrl0",G=["label","name","style"],O=function(e){var a=e.label,n=e.name,r=e.style,l=(0,s.Z)(e,G);return(0,m.jsxs)("div",{className:Y,children:[(0,m.jsx)("label",{className:R,htmlFor:n,children:a}),(0,m.jsx)(i.gN,(0,t.Z)({className:I+" "+r,as:"textarea",id:n,name:n},l)),(0,m.jsx)(i.Bc,{name:n,component:"p"})]})},z=["control"],M=function(e){var a=e.control,n=(0,s.Z)(e,z);switch(a){case"input":return(0,m.jsx)(p,(0,t.Z)({},n));case"textarea":return(0,m.jsx)(O,(0,t.Z)({},n));case"radio":return(0,m.jsx)(w,(0,t.Z)({},n));case"sex":return(0,m.jsx)(L,(0,t.Z)({},n));case"file":return(0,m.jsx)(Z,(0,t.Z)({},n));default:return null}},H="ButtonNext_button__uDInJ",J="ButtonNext_icon__lFxLm",V=["name","icon"],$=function(e){var a=e.name,n=e.icon;(0,s.Z)(e,V);return(0,m.jsxs)("button",{className:H,children:[a,(0,m.jsx)("svg",{className:J,children:(0,m.jsx)("use",{href:n})})]})},W="ButtonBack_button__ijjF6",K="ButtonBack_icon__jdzRf",U=function(e){var a=e.name,n=e.icon,t=e.onClick;return(0,m.jsxs)("button",{className:W,onClick:t,children:[(0,m.jsx)("svg",{className:K,children:(0,m.jsx)("use",{href:n})}),a]})},E="ProgressBar_barWrapper__n1oBc",Q="ProgressBar_barOption__NcT5v",X="ProgressBar_barList__4yh3l",ee="ProgressBar_barItem__NiQ0K",ae="ProgressBar_current__WjsPC",ne="ProgressBar_passed__nIYeH",te=function(e){var a=e.step,n="",t="",r="";return 1===a?(n="".concat(ee," ").concat(ae),t="".concat(ee),r="".concat(ee)):2===a?(n="".concat(ee," ").concat(ne),t="".concat(ee," ").concat(ae),r="".concat(ee)):3===a&&(n="".concat(ee," ").concat(ne),t="".concat(ee," ").concat(ne),r="".concat(ee," ").concat(ae)),(0,m.jsx)("div",{className:E,children:(0,m.jsxs)("ul",{className:X,children:[(0,m.jsx)("li",{className:n,children:(0,m.jsx)("span",{className:Q,children:"Choose option"})}),(0,m.jsx)("li",{className:t,children:(0,m.jsx)("span",{className:Q,children:"Personal details"})}),(0,m.jsx)("li",{className:r,children:(0,m.jsx)("span",{className:Q,children:"More info"})})]})})},re=n(6727),le=n(7262),se="StepOne_header__q0l9V",ie="StepOne_buttonContainer__KUzn9",oe="StepOne_bgForm__efS4D",ce=n(7689),de=[{value:"your-pet",key:"yourPet",show:"your pet"},{value:"sell",key:"sell",show:"sell"},{value:"lost-found",key:"lostFound",show:"lost/found"},{value:"for-free",key:"inGoodHands",show:"in good hands"}],ue=re.Ry({category:re.Z_().required("Choose a category in which you want to add an advertisement")}),me=function(e){var a,n=(0,ce.s0)(),t=(null===(a=(0,ce.TH)().state)||void 0===a?void 0:a.from)||"/";return(0,m.jsxs)("div",{className:oe,children:[(0,m.jsx)("h1",{className:se,children:"Add pet"}),(0,m.jsx)(te,{step:1}),(0,m.jsx)(i.J9,{initialValues:e.data,onSubmit:function(a){e.next(a)},validationSchema:ue,children:function(){return(0,m.jsxs)(i.l0,{children:[(0,m.jsx)(M,{control:"radio",label:"",name:"category",options:de}),(0,m.jsxs)("div",{className:ie,children:[(0,m.jsx)($,{type:"submit",name:"Next",icon:le.Z+"#paw-white"}),(0,m.jsx)(U,{type:"button",name:"Cancel",icon:le.Z+"#arrow-left",onClick:function(){return n(t)}})]})]})}})]})},he={bgForm:"YourPet_bgForm__WwtSF",header:"YourPet_header__qswA7",buttonContainer:"YourPet_buttonContainer__bIAwM",buttonContainerSecond:"YourPet_buttonContainerSecond__e1TC7"},pe=re.Ry({name:re.Z_().required('The "Name" field is required').min(2,"Please enter a value between 2 and 16 characters in length").max(16,"Please enter a value between 2 and 16 characters in length").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,"Please enter only letters (no numbers or special characters) in this field"),date:re.Z_().required('The "Date of birth" field is required').matches(/^(\d{2})\.(\d{2})\.(\d{4})$/,"Please enter the date in the format DD.MM.YYYY (for example, 22.10.2022)").test("valid-date","The entered date is invalid",(function(e){if(!e)return!0;var a=e.split("."),n=(0,r.Z)(a,3),t=n[0],l=n[1],s=n[2];return!isNaN(Date.parse("".concat(s,"-").concat(l,"-").concat(t)))})),breed:re.Z_().required('The "Breed" field is required').min(2,"Please enter a value between 2 and 16 characters in length").max(16,"Please enter a value between 2 and 16 characters in length").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,"Please enter only letters (no numbers or special characters) in this field")}),xe=re.Ry({image:re.nK().required('The "Photo" field is required'),comments:re.Z_().notRequired().min(8,"Please enter a value between 8 and 120 characters in length").max(120,"Please enter a value between 8 and 120 characters in length")}),_e=function(e){return(0,m.jsxs)("div",{className:he.bgForm,children:[(0,m.jsx)("h1",{className:he.header,children:"Add pet for sale"}),(0,m.jsx)(te,{step:2}),(0,m.jsx)(i.J9,{initialValues:e.data,onSubmit:function(a){e.next(a)},validationSchema:pe,children:function(a){var n=a.values;return(0,m.jsxs)(i.l0,{children:[(0,m.jsx)(M,{control:"input",label:"Pet's name",name:"name",placeholder:"Type name pet"}),(0,m.jsx)(M,{control:"input",label:"Date of birth",name:"date",placeholder:"Type date of birth"}),(0,m.jsx)(M,{control:"input",label:"Breed",name:"breed",placeholder:"Type breed"}),(0,m.jsxs)("div",{className:he.buttonContainer,children:[(0,m.jsx)($,{type:"submit",name:"Next",icon:le.Z+"#paw-white"}),(0,m.jsx)(U,{type:"button",name:"Back",icon:le.Z+"#arrow-left",onClick:function(){return e.prev(n)}})]})]})}})]})},fe=function(e){return(0,m.jsxs)("div",{className:he.bgForm+" "+he.bgFormMidle,children:[(0,m.jsx)("h1",{className:he.header,children:"Add pet for sale"}),(0,m.jsx)(te,{step:3}),(0,m.jsx)(i.J9,{initialValues:e.data,onSubmit:function(a){e.next(a,!0)},validationSchema:xe,children:function(a){var n=a.values;return(0,m.jsxs)(i.l0,{children:[(0,m.jsxs)("div",{className:he.formContainer,children:[(0,m.jsx)("div",{className:he.firstChild,children:(0,m.jsx)(M,{style:he.addPhoto,control:"file",label:"Load the pet`s image",name:"image",type:"file"})}),(0,m.jsx)(M,{style:he.comments,control:"textarea",label:"Comments",name:"comments",placeholder:"Type comments"})]}),(0,m.jsxs)("div",{className:he.buttonContainer,children:[(0,m.jsx)($,{type:"submit",name:"Done",icon:le.Z+"#paw-white"}),(0,m.jsx)(U,{type:"button",name:"Back",icon:le.Z+"#arrow-left",onClick:function(){return e.prev(n)}})]})]})}})]})},je="Sell_bgForm__bBa7z",be="Sell_header__tIjG2",ve="Sell_buttonContainer__wzjEv",ye="Sell_bgFormMidle__7GsiL",Ne="Sell_formContainer__N6Dsm",Ze="Sell_firstChild__S2bqe",ge="Sell_secondChild__-qKfY",Pe="Sell_addPhoto__XdbW1",we="Sell_comments__OCCBw",Te=re.Ry({name:re.Z_().required('The "Name" field is required').min(2,"Please enter a value between 2 and 16 characters in length").max(16,"Please enter a value between 2 and 16 characters in length").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,"Please enter only letters (no numbers or special characters) in this field"),date:re.Z_().required('The "Date of birth" field is required').matches(/^(\d{2})\.(\d{2})\.(\d{4})$/,"Please enter the date in the format DD.MM.YYYY (for example, 22.10.2022)").test("valid-date","The entered date is invalid",(function(e){if(!e)return!0;var a=e.split("."),n=(0,r.Z)(a,3),t=n[0],l=n[1],s=n[2];return!isNaN(Date.parse("".concat(s,"-").concat(l,"-").concat(t)))})),breed:re.Z_().required('The "Breed" field is required').min(2,"Please enter a value between 2 and 16 characters in length").max(16,"Please enter a value between 2 and 16 characters in length").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,"Please enter only letters (no numbers or special characters) in this field")}),qe=re.Ry({sex:re.Z_().required('The "Sex" field is required').oneOf(["male","female"],"Please choose one of the valid types: male or female"),image:re.nK().required('The "Photo" field is required'),location:re.Z_().required('The "Location" field is required').matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,'Please enter a string in the format "City". For example: Brovary, Kyiv, Akhtyrka, Sumy'),price:re.Rx().typeError("Please enter a numerical value").required('The "Price" field is required').positive("Please enter a number greater than 0"),comments:re.Z_().notRequired().min(8,"Please enter a value between 8 and 120 characters in length").max(120,"Please enter a value between 8 and 120 characters in length")}),Se=[{value:"female",key:"female",icon:le.Z+"#female"},{value:"male",key:"male",icon:le.Z+"#male"}],Ce=function(e){return(0,m.jsxs)("div",{className:je,children:[(0,m.jsx)("h1",{className:be,children:"Add pet for sale"}),(0,m.jsx)(te,{step:2}),(0,m.jsx)(i.J9,{initialValues:e.data,onSubmit:function(a){e.next(a)},validationSchema:Te,children:function(a){var n=a.values;return(0,m.jsxs)(i.l0,{children:[(0,m.jsx)(M,{control:"input",label:"Title of add",name:"title",placeholder:"Type title to add"}),(0,m.jsx)(M,{control:"input",label:"Pet's name",name:"name",placeholder:"Type name pet"}),(0,m.jsx)(M,{control:"input",label:"Date of birth",name:"date",placeholder:"Type date of birth"}),(0,m.jsx)(M,{control:"input",label:"Breed",name:"breed",placeholder:"Type breed"}),(0,m.jsxs)("div",{className:ve,children:[(0,m.jsx)($,{type:"submit",name:"Next",icon:le.Z+"#paw-white"}),(0,m.jsx)(U,{type:"button",name:"Back",icon:le.Z+"#arrow-left",onClick:function(){return e.prev(n)}})]})]})}})]})},Be=function(e){return(0,m.jsxs)("div",{className:je+" "+ye,children:[(0,m.jsx)("h1",{className:be,children:"Add pet for sale"}),(0,m.jsx)(te,{step:3}),(0,m.jsx)(i.J9,{initialValues:e.data,onSubmit:function(a){e.next(a,!0)},validationSchema:qe,children:function(a){var n=a.values;return(0,m.jsxs)(i.l0,{children:[(0,m.jsxs)("div",{className:Ne,children:[(0,m.jsxs)("div",{className:Ze,children:[(0,m.jsx)(M,{control:"sex",label:"The sex",name:"sex",options:Se}),(0,m.jsx)(M,{style:Pe,control:"file",label:"Load the pet`s image",name:"image",type:"file"})]}),(0,m.jsxs)("div",{className:ge,children:[(0,m.jsx)(M,{control:"input",label:"Location",name:"location",placeholder:"Type location"}),(0,m.jsx)(M,{control:"input",label:"Price",name:"price",placeholder:"Type price"}),(0,m.jsx)(M,{style:we,control:"textarea",label:"Comments",name:"comments",placeholder:"Type comments"})]})]}),(0,m.jsxs)("div",{className:ve,children:[(0,m.jsx)($,{type:"submit",name:"Done",icon:le.Z+"#paw-white"}),(0,m.jsx)(U,{type:"button",name:"Back",icon:le.Z+"#arrow-left",onClick:function(){return e.prev(n)}})]})]})}})]})},Fe="LostFound_bgForm__8GYa9",ke="LostFound_header__gKh5+",De="LostFound_buttonContainer__oWaJS",Ae="LostFound_bgFormMidle__O+dwm",Le="LostFound_formContainer__7nMGN",Re="LostFound_firstChild__j9fjY",Ie="LostFound_secondChild__uzajQ",Ye="LostFound_addPhoto__kZPVd",Ge="LostFound_comments__Sa693",Oe=re.Ry({name:re.Z_().required('The "Name" field is required').min(2,"Please enter a value between 2 and 16 characters in length").max(16,"Please enter a value between 2 and 16 characters in length").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,"Please enter only letters (no numbers or special characters) in this field"),date:re.Z_().required('The "Date of birth" field is required').matches(/^(\d{2})\.(\d{2})\.(\d{4})$/,"Please enter the date in the format DD.MM.YYYY (for example, 22.10.2022)").test("valid-date","The entered date is invalid",(function(e){if(!e)return!0;var a=e.split("."),n=(0,r.Z)(a,3),t=n[0],l=n[1],s=n[2];return!isNaN(Date.parse("".concat(s,"-").concat(l,"-").concat(t)))})),breed:re.Z_().required('The "Breed" field is required').min(2,"Please enter a value between 2 and 16 characters in length").max(16,"Please enter a value between 2 and 16 characters in length").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,"Please enter only letters (no numbers or special characters) in this field")}),ze=re.Ry({sex:re.Z_().required('The "Sex" field is required').oneOf(["male","female"],"Please choose one of the valid types: male or female"),image:re.nK().required('The "Photo" field is required'),location:re.Z_().required('The "Location" field is required').matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,'Please enter a string in the format "City". For example: Brovary, Kyiv, Akhtyrka, Sumy'),comments:re.Z_().notRequired().min(8,"Please enter a value between 8 and 120 characters in length").max(120,"Please enter a value between 8 and 120 characters in length")}),Me=[{value:"female",key:"female",icon:le.Z+"#female"},{value:"male",key:"male",icon:le.Z+"#male"}],He=function(e){return(0,m.jsxs)("div",{className:Fe,children:[(0,m.jsx)("h1",{className:ke,children:"Add pet for sale"}),(0,m.jsx)(te,{step:2}),(0,m.jsx)(i.J9,{initialValues:e.data,onSubmit:function(a){e.next(a)},validationSchema:Oe,children:function(a){var n=a.values;return(0,m.jsxs)(i.l0,{children:[(0,m.jsx)(M,{control:"input",label:"Title of add",name:"title",placeholder:"Type title to add"}),(0,m.jsx)(M,{control:"input",label:"Pet's name",name:"name",placeholder:"Type name pet"}),(0,m.jsx)(M,{control:"input",label:"Date of birth",name:"date",placeholder:"Type date of birth"}),(0,m.jsx)(M,{control:"input",label:"Breed",name:"breed",placeholder:"Type breed"}),(0,m.jsxs)("div",{className:De,children:[(0,m.jsx)($,{type:"submit",name:"Next",icon:le.Z+"#paw-white"}),(0,m.jsx)(U,{type:"button",name:"Back",icon:le.Z+"#arrow-left",onClick:function(){return e.prev(n)}})]})]})}})]})},Je=function(e){return(0,m.jsxs)("div",{className:Fe+" "+Ae,children:[(0,m.jsx)("h1",{className:ke,children:"Add pet for sale"}),(0,m.jsx)(te,{step:3}),(0,m.jsx)(i.J9,{initialValues:e.data,onSubmit:function(a){e.next(a,!0)},validationSchema:ze,children:function(a){var n=a.values;return(0,m.jsxs)(i.l0,{children:[(0,m.jsxs)("div",{className:Le,children:[(0,m.jsxs)("div",{className:Re,children:[(0,m.jsx)(M,{control:"sex",label:"The sex",name:"sex",options:Me}),(0,m.jsx)(M,{style:Ye,control:"file",label:"Load the pet`s image",name:"image",type:"file"})]}),(0,m.jsxs)("div",{className:Ie,children:[(0,m.jsx)(M,{control:"input",label:"Location",name:"location",placeholder:"Type location"}),(0,m.jsx)(M,{style:Ge,control:"textarea",label:"Comments",name:"comments",placeholder:"Type comments"})]})]}),(0,m.jsxs)("div",{className:De,children:[(0,m.jsx)($,{type:"submit",name:"Done",icon:le.Z+"#paw-white"}),(0,m.jsx)(U,{type:"button",name:"Back",icon:le.Z+"#arrow-left",onClick:function(){return e.prev(n)}})]})]})}})]})},Ve="InGoodHands_bgForm__y8AFO",$e="InGoodHands_header__UznGG",We="InGoodHands_buttonContainer__bJmeL",Ke="InGoodHands_bgFormMidle__SvdMU",Ue="InGoodHands_formContainer__4wivx",Ee="InGoodHands_firstChild__h6Dft",Qe="InGoodHands_secondChild__WwJf1",Xe="InGoodHands_addPhoto__5V33J",ea="InGoodHands_comments__ypqZa",aa=re.Ry({name:re.Z_().required('The "Name" field is required').min(2,"Please enter a value between 2 and 16 characters in length").max(16,"Please enter a value between 2 and 16 characters in length").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,"Please enter only letters (no numbers or special characters) in this field"),date:re.Z_().required('The "Date of birth" field is required').matches(/^(\d{2})\.(\d{2})\.(\d{4})$/,"Please enter the date in the format DD.MM.YYYY (for example, 22.10.2022)").test("valid-date","The entered date is invalid",(function(e){if(!e)return!0;var a=e.split("."),n=(0,r.Z)(a,3),t=n[0],l=n[1],s=n[2];return!isNaN(Date.parse("".concat(s,"-").concat(l,"-").concat(t)))})),breed:re.Z_().required('The "Breed" field is required').min(2,"Please enter a value between 2 and 16 characters in length").max(16,"Please enter a value between 2 and 16 characters in length").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,"Please enter only letters (no numbers or special characters) in this field")}),na=re.Ry({sex:re.Z_().required('The "Sex" field is required').oneOf(["male","female"],"Please choose one of the valid types: male or female"),image:re.nK().required('The "Photo" field is required'),location:re.Z_().required('The "Location" field is required').matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\s]+$/,'Please enter a string in the format "City". For example: Brovary, Kyiv, Akhtyrka, Sumy'),comments:re.Z_().notRequired().min(8,"Please enter a value between 8 and 120 characters in length").max(120,"Please enter a value between 8 and 120 characters in length")}),ta=[{value:"female",key:"female",icon:le.Z+"#female"},{value:"male",key:"male",icon:le.Z+"#male"}],ra=function(e){return(0,m.jsxs)("div",{className:Ve,children:[(0,m.jsx)("h1",{className:$e,children:"Add pet for sale"}),(0,m.jsx)(te,{step:2}),(0,m.jsx)(i.J9,{initialValues:e.data,onSubmit:function(a){e.next(a)},validationSchema:aa,children:function(a){var n=a.values;return(0,m.jsxs)(i.l0,{children:[(0,m.jsx)(M,{control:"input",label:"Title of add",name:"title",placeholder:"Type title to add"}),(0,m.jsx)(M,{control:"input",label:"Pet's name",name:"name",placeholder:"Type name pet"}),(0,m.jsx)(M,{control:"input",label:"Date of birth",name:"date",placeholder:"Type date of birth"}),(0,m.jsx)(M,{control:"input",label:"Breed",name:"breed",placeholder:"Type breed"}),(0,m.jsxs)("div",{className:We,children:[(0,m.jsx)($,{type:"submit",name:"Next",icon:le.Z+"#paw-white"}),(0,m.jsx)(U,{type:"button",name:"Back",icon:le.Z+"#arrow-left",onClick:function(){return e.prev(n)}})]})]})}})]})},la=function(e){return(0,m.jsxs)("div",{className:Ve+" "+Ke,children:[(0,m.jsx)("h1",{className:$e,children:"Add pet for sale"}),(0,m.jsx)(te,{step:3}),(0,m.jsx)(i.J9,{initialValues:e.data,onSubmit:function(a){e.next(a,!0)},validationSchema:na,children:function(a){var n=a.values;return(0,m.jsxs)(i.l0,{children:[(0,m.jsxs)("div",{className:Ue,children:[(0,m.jsxs)("div",{className:Ee,children:[(0,m.jsx)(M,{control:"sex",label:"The sex",name:"sex",options:ta}),(0,m.jsx)(M,{style:Xe,control:"file",label:"Load the pet`s image",name:"image",type:"file"})]}),(0,m.jsxs)("div",{className:Qe,children:[(0,m.jsx)(M,{control:"input",label:"Location",name:"location",placeholder:"Type location"}),(0,m.jsx)(M,{style:ea,control:"textarea",label:"Comments",name:"comments",placeholder:"Type comments"})]})]}),(0,m.jsxs)("div",{className:We,children:[(0,m.jsx)($,{type:"submit",name:"Done",icon:le.Z+"#paw-white"}),(0,m.jsx)(U,{type:"button",name:"Back",icon:le.Z+"#arrow-left",onClick:function(){return e.prev(n)}})]})]})}})]})},sa=n(9434),ia=n(2285);function oa(){var e,a=(0,sa.I0)(),n=(0,l.useState)({category:"your-pet",name:"",date:"",breed:"",image:"",sex:"",location:"",price:"",comments:"",title:""}),s=(0,r.Z)(n,2),i=s[0],o=s[1],c=(0,l.useState)(0),d=(0,r.Z)(c,2),u=d[0],h=d[1],p=(0,ce.s0)(),x=(null===(e=(0,ce.TH)().state)||void 0===e?void 0:e.from)||"/",_=function(){o({category:"your-pet",name:"",date:"",breed:"",image:"",sex:"",location:"",price:"",comments:"",title:""})},f=function(e){a(ia.Z.addNoticeByCategory(e)),p(x)},j=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o((function(a){return(0,t.Z)((0,t.Z)({},a),e)})),a)return f(e),void _();h((function(e){return e+1}))},b=function(e){o((function(a){return(0,t.Z)((0,t.Z)({},a),e)})),h((function(e){return e-1}))},v=[(0,m.jsx)(me,{next:j,data:i})];return"your-pet"===i.category&&0!==u&&v.push((0,m.jsx)(_e,{next:j,prev:b,data:i}),(0,m.jsx)(fe,{next:j,prev:b,data:i})),"sell"===i.category&&0!==u&&v.push((0,m.jsx)(Ce,{next:j,prev:b,data:i}),(0,m.jsx)(Be,{next:j,prev:b,data:i})),"lost-found"===i.category&&0!==u&&v.push((0,m.jsx)(He,{next:j,prev:b,data:i}),(0,m.jsx)(Je,{next:j,prev:b,data:i})),"for-free"===i.category&&0!==u&&v.push((0,m.jsx)(ra,{next:j,prev:b,data:i}),(0,m.jsx)(la,{next:j,prev:b,data:i})),(0,m.jsx)("div",{children:v[u]})}var ca="AddPetPage_overlay__ohq15",da="AddPetPage_container__uPNGI",ua=function(){return(0,m.jsx)("div",{className:ca,children:(0,m.jsx)("div",{className:da,children:(0,m.jsx)(oa,{})})})}},5987:function(e,a,n){n.d(a,{Z:function(){return r}});var t=n(3366);function r(e,a){if(null==e)return{};var n,r,l=(0,t.Z)(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}}}]);
//# sourceMappingURL=385.b9a7ec8c.chunk.js.map