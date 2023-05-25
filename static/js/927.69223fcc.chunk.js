(self.webpackChunkyour_pet_project_frontend=self.webpackChunkyour_pet_project_frontend||[]).push([[927],{8927:function(r,t,e){"use strict";e.r(t),e.d(t,{default:function(){return v}});var n=e(9439),s=e(2791),o=e(1087),i=e(3746),a=e(165),u=e(5705),c=e(3118),l=e(5557),d=e(3932),_=e(1017),m=e(6429),p=e.n(m),f=e(9434),h=e(8724),w=e(184),x=function(r){var t=(0,s.useState)(!1),e=(0,n.Z)(t,2),m=e[0],x=e[1],v=(0,s.useState)(!1),Z=(0,n.Z)(v,2),g=Z[0],j=Z[1],b=(0,f.I0)(),y=p().generate(),q=p().generate(),N=p().generate();return(0,w.jsx)("div",{className:l.Z.container,children:(0,w.jsx)(u.J9,{onSubmit:function(r,t){var e=t.resetForm;b((0,h.IU)(r)),e()},validationSchema:_.E.ch,initialValues:{email:"",password:"",confirmPassword:""},children:(0,w.jsxs)(u.l0,{className:l.Z.form,children:[(0,w.jsx)("h2",{className:l.Z.title,children:r.title}),(0,w.jsxs)("div",{className:l.Z.input__wrapper,children:[(0,w.jsx)(c.M,{autofocus:"autofocus",name:"email",type:"email",id:y,placeholder:"Email"}),(0,w.jsx)(u.Bc,{name:"email",component:"p",className:l.Z.error})]}),(0,w.jsxs)("div",{className:l.Z.input__wrapper,children:[(0,w.jsx)(c.M,{name:"password",type:m?"text":"password",id:q,placeholder:"Password"}),(0,w.jsx)("span",{id:"visibilityBtn",className:l.Z.IconPassword,onClick:function(){return x((function(r){return!r}))},children:m?(0,w.jsx)(i.Z,{}):(0,w.jsx)(a.Z,{})}),(0,w.jsx)(u.Bc,{name:"password",component:"p",className:l.Z.error__password})]}),(0,w.jsxs)("div",{className:l.Z.input__wrapper_last,children:[(0,w.jsx)(c.M,{name:"confirmPassword",type:g?"text":"password",placeholder:"Confirm Password",id:N}),(0,w.jsx)("span",{id:"visibilityBtn",className:l.Z.IconPassword,onClick:function(){return j((function(r){return!r}))},children:g?(0,w.jsx)(i.Z,{}):(0,w.jsx)(a.Z,{})}),(0,w.jsx)(u.Bc,{name:"confirmPassword",component:"p",className:l.Z.error__password})]}),(0,w.jsx)("div",{className:l.Z.button__container,children:(0,w.jsx)(d.Z,{type:"submit",className:l.Z.button__auth,buttonName:"Register"})}),(0,w.jsxs)("p",{className:l.Z.redirect__auth,children:["Already have an account?",(0,w.jsx)(o.rU,{to:"/login",className:l.Z.redirect_link__auth,children:"Login"})]})]})})})},v=function(){return(0,w.jsx)("div",{children:(0,w.jsx)(x,{title:"Register"})})}},1017:function(r,t,e){"use strict";e.d(t,{E:function(){return n}});var n={};e.r(n),e.d(n,{k:function(){return i},ch:function(){return o}});var s=e(6727),o=s.Ry({email:s.Z_().required("Email is required").matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Correct format: mail@ukr.net").test("is-valid",(function(r){return"".concat(r.path," is invalid")}),(function(r,t){return!r||"ru"!==r.substr(-2,2)||t.createError({message:"russia is a terorist state"})})),password:s.Z_().required("Password is required").min(7),confirmPassword:s.Z_().oneOf([s.iH("password"),null],"Passwords must match").required("Confirm password is required")}),i=(s.Ry({name:s.Z_().min(2,"Too Short!").max(70,"Too Long!").required("Name is required").label("Name").matches(/^[a-zA-Z]+$/,"In Latin letters"),city:s.Z_().label("City").required("City, region is required").matches(/^[?!,.a-zA-Z0-9\s]+$/,"In Latin letters"),phone:s.Z_().required("Mobile phone is required").label("Mobile phone").matches(/^\+380\d{9}$/,"Correct format: +380981234567")}),s.Ry({email:s.Z_().required("Email is required").matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Correct format: mail@ukr.net").test("is-valid",(function(r){return"".concat(r.path," is invalid")}),(function(r,t){return!r||"ru"!==r.substr(-2,2)||t.createError({message:"russia is a terorist state"})})),password:s.Z_().required("Password is required")}));s.Ry({email:s.Z_().required("Email is required").matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Correct format: mail@ukr.net").test("is-valid",(function(r){return"".concat(r.path," is invalid")}),(function(r,t){return!r||"ru"!==r.substr(-2,2)||t.createError({message:"russia is a terorist state"})}))}),s.Ry({password:s.Z_().required("Password is required").min(7),confirmPassword:s.Z_().oneOf([s.iH("password"),null],"Passwords must match").required("Confirm password is required")})},3932:function(r,t,e){"use strict";e.d(t,{Z:function(){return o}});var n="Button_button__urlvE",s=e(184),o=function(r){var t=r.customStyle,e=r.buttonName,o=r.buttonIcon,i=r.type,a=void 0===i?"button":i,u=r.onClick;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("button",{className:n+" "+t,type:a,onClick:u,children:[e,o]})})}},3118:function(r,t,e){"use strict";e.d(t,{M:function(){return i}});var n=e(5705),s="Input_input__2SVdu",o=e(184),i=function(r){var t=r.type,e=void 0===t?"text":t,i=r.name,a=r.customStyle,u=r.placeholder,c=r.autofocus,l=r.autoComplete,d=r.as;return(0,o.jsx)(n.gN,{className:"".concat(s," ").concat(a),name:i,type:e,placeholder:u,autoFocus:c,autoComplete:l,as:d})}},6429:function(r,t,e){"use strict";r.exports=e(5274)},8857:function(r,t,e){"use strict";var n,s,o,i=e(5408),a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function u(){o=!1}function c(r){if(r){if(r!==n){if(r.length!==a.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. You submitted "+r.length+" characters: "+r);var t=r.split("").filter((function(r,t,e){return t!==e.lastIndexOf(r)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. These characters were not unique: "+t.join(", "));n=r,u()}}else n!==a&&(n=a,u())}function l(){return o||(o=function(){n||c(a);for(var r,t=n.split(""),e=[],s=i.nextValue();t.length>0;)s=i.nextValue(),r=Math.floor(s*t.length),e.push(t.splice(r,1)[0]);return e.join("")}())}r.exports={get:function(){return n||a},characters:function(r){return c(r),n},seed:function(r){i.seed(r),s!==r&&(u(),s=r)},lookup:function(r){return l()[r]},shuffled:l}},7098:function(r,t,e){"use strict";var n,s,o=e(2226);e(8857);r.exports=function(r){var t="",e=Math.floor(.001*(Date.now()-1567752802062));return e===s?n++:(n=0,s=e),t+=o(7),t+=o(r),n>0&&(t+=o(n)),t+=o(e)}},2226:function(r,t,e){"use strict";var n=e(8857),s=e(9139),o=e(2483);r.exports=function(r){for(var t,e=0,i="";!t;)i+=o(s,n.get(),1),t=r<Math.pow(16,e+1),e++;return i}},5274:function(r,t,e){"use strict";var n=e(8857),s=e(7098),o=e(6046),i=e(5347)||0;function a(){return s(i)}r.exports=a,r.exports.generate=a,r.exports.seed=function(t){return n.seed(t),r.exports},r.exports.worker=function(t){return i=t,r.exports},r.exports.characters=function(r){return void 0!==r&&n.characters(r),n.shuffled()},r.exports.isValid=o},6046:function(r,t,e){"use strict";var n=e(8857);r.exports=function(r){return!(!r||"string"!==typeof r||r.length<6)&&!new RegExp("[^"+n.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(r)}},9139:function(r){"use strict";var t,e="object"===typeof window&&(window.crypto||window.msCrypto);t=e&&e.getRandomValues?function(r){return e.getRandomValues(new Uint8Array(r))}:function(r){for(var t=[],e=0;e<r;e++)t.push(Math.floor(256*Math.random()));return t},r.exports=t},5408:function(r){"use strict";var t=1;r.exports={nextValue:function(){return(t=(9301*t+49297)%233280)/233280},seed:function(r){t=r}}},5347:function(r){"use strict";r.exports=0},2483:function(r){r.exports=function(r,t,e){for(var n=(2<<Math.log(t.length-1)/Math.LN2)-1,s=-~(1.6*n*e/t.length),o="";;)for(var i=r(s),a=s;a--;)if((o+=t[i[a]&n]||"").length===+e)return o}},5557:function(r,t){"use strict";t.Z={container:"AuthForm_container__TRNvn",form:"AuthForm_form__+kOAL",title:"AuthForm_title__Err7k",button__container:"AuthForm_button__container__Ty8Kg",redirect__auth:"AuthForm_redirect__auth__PoyHw",redirect_link__auth:"AuthForm_redirect_link__auth__oDDxY",input__wrapper:"AuthForm_input__wrapper__WAgX4",input__wrapper_last:"AuthForm_input__wrapper_last__PgMz9",IconPassword:"AuthForm_IconPassword__06FVd",error:"AuthForm_error__3P1ri",error__password:"AuthForm_error__password__cavNi",error__login:"AuthForm_error__login__ILaX-"}}}]);
//# sourceMappingURL=927.69223fcc.chunk.js.map