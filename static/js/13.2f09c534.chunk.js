"use strict";(self.webpackChunkyour_pet_project_frontend=self.webpackChunkyour_pet_project_frontend||[]).push([[13],{7262:function(e,t,n){n(2791);t.Z=n.p+"static/media/sprite.ea67adcb241711fe9b4a0f1b20ef5d17.svg"},5740:function(e,t,n){n.d(t,{Z:function(){return K}});var r=n(2791),o=n(9434),c=n(7689),i=n(9439),a=n(9869),s=n(2285),l=function(e){return e.notices.noticesByCategory},d=function(e){return e.notices.favorite},u=function(e){return e.notices.favoriteAds},h=n(4245),f="modal-delete-notice_modalWrapper__p1vrF",m="modal-delete-notice_titleModal__WDb1f",_="modal-delete-notice_textModal__0y+XH",p="modal-delete-notice_boldText__YX+29",v="modal-delete-notice_btnWrapper__rNVzQ",g="modal-delete-notice_btnCancel__N7tlZ",x="modal-delete-notice_btnYes__CoXwI",j=n(184),y=function(e){var t=e.isOpen,n=e.onClose,r=e.title,c=e.id,i=(0,o.I0)();return(0,j.jsx)(h.Z,{isOpen:t,onClose:function(){return n()},children:(0,j.jsxs)("div",{className:f,children:[(0,j.jsx)("h2",{className:m,children:"Delete adverstiment?"}),(0,j.jsxs)("p",{className:_,children:["Are you sure you want to delete"," ",(0,j.jsxs)("span",{className:p,children:["\u201c",r,"\u201d? "]}),"You can`t undo this action."]}),(0,j.jsxs)("div",{className:v,children:[(0,j.jsx)("button",{className:g,onClick:function(){return n()},children:"Cancel"}),(0,j.jsx)("button",{className:x,onClick:function(){i(s.Z.deleteUserNotice(c)),n()},children:"Yes"})]})]})})},b=n(2426),N=n.n(b),w=n(7262),k=n(1686),C=function(e){var t=N()(e,"DD-MM-YYYY").fromNow().split(" ").slice(0,2).join(" ");return t.includes("in")?"no inform":t},Z=function(e){return"".concat(w.Z,"male"===e?"#male":"#female")},O="notice-category-item_mainWrapper__lgTUH",L="notice-category-item_positionWrapper__oyUKd",E="notice-category-item_petImage__lSJU-",I="notice-category-item_wrapperGategoryInform__f0-Bs",B="notice-category-item_category__iO4ds",M="notice-category-item_btnAddFavorite__8CMr0",S="notice-category-item_inFavorite__bjaB0",H="notice-category-item_btnDelete__w-5D5",F="notice-category-item_description__7NvyG",D="notice-category-item_itemDescription__X2F2e",Y="notice-category-item_wrapperLearnMore__wB7-Q",P="notice-category-item_text__PoKDQ",U="notice-category-item_btnLearnMore__P72ZN",W=function(e){var t=e.id,n=e.avatarURL,c=e.title,l=e.place,u=e.date,h=e.category,f=e.sex,m=e.owner,_=(0,o.v9)(a.VN),p=(0,o.v9)(d),v=(0,o.v9)(a.Gt),g=(0,r.useState)(!1),x=(0,i.Z)(g,2),b=x[0],N=x[1],W=(0,o.v9)(a.y6),V=(0,o.I0)();return(0,r.useEffect)((function(){}),[]),(0,j.jsxs)("li",{children:[(0,j.jsxs)("div",{className:O,children:[(0,j.jsxs)("div",{className:L,children:[(0,j.jsx)("img",{src:n,alt:"",className:E}),(0,j.jsxs)("div",{className:I,children:[(0,j.jsxs)("p",{className:B,children:["lost-found"===h?"lost/found":h.replace(/(\.|-|\/|\\| )/g," ")," "]}),(0,j.jsx)("button",{className:M,type:"button",onClick:function(){W?V(s.Z.updateFavorite(t)):k.Notify.info("You should be logged in to add to favorites",{timeout:2e3,clickToClose:!0,position:"right-top"})},children:(0,j.jsx)("svg",{width:"24",height:"24",className:_?p.length?p.includes(t)?S:"":v.includes(t)?S:"":"",children:(0,j.jsx)("use",{xlinkHref:"".concat(w.Z,"#heart")})})}),m===_&&(0,j.jsx)("button",{className:H,onClick:function(){N(!0)},children:(0,j.jsx)("svg",{width:"24",height:"24",children:(0,j.jsx)("use",{xlinkHref:"".concat(w.Z,"#trash")})})})]}),(0,j.jsxs)("div",{className:F,children:[(0,j.jsxs)("p",{className:D,children:[(0,j.jsx)("svg",{width:"24",height:"24",children:(0,j.jsx)("use",{xlinkHref:"".concat(w.Z,"#location")})}),(0,j.jsx)("span",{children:l.length>10?"".concat(l.slice(0,6),"..."):l})]}),(0,j.jsxs)("p",{className:D,children:[(0,j.jsx)("svg",{width:"24",height:"24",children:(0,j.jsx)("use",{xlinkHref:"".concat(w.Z,"#clock")})}),(0,j.jsx)("span",{children:C(u)})]}),(0,j.jsxs)("p",{className:D,children:[(0,j.jsx)("svg",{width:"24",height:"24",children:(0,j.jsx)("use",{xlinkHref:Z(f)})}),(0,j.jsx)("span",{children:f})]})]})]}),(0,j.jsxs)("div",{className:Y,children:[(0,j.jsx)("p",{className:P,children:c.length>28?"".concat(c.slice(0,28),"..."):c}),(0,j.jsx)("button",{className:U,children:"Learn more"})]})]}),(0,j.jsx)(y,{isOpen:b,onClose:function(){N(!1)},title:c,id:t})]})},V="notices-category-list_petsListWrapper__k7XK+",X="notices-category-list_section__2ZLgQ",K=function(){var e=(0,o.I0)(),t=(0,c.TH)(),n=(0,o.v9)(u),i=(0,o.v9)(d),a=(0,o.v9)(l),h=t.pathname.split("/")[2],f="/notices/favorites"===t.pathname?n:a;return(0,r.useEffect)((function(){e(s.Z.getNoticesByCategory({category:h})),e(s.Z.getNoticeByFavorite())}),[e,h,i]),(0,j.jsx)("div",{className:X,children:(0,j.jsx)("ul",{className:V,children:f.map((function(e){var t=e._id,n=e.avatarURL,r=e.title,o=e.location,c=e.date,i=e.category,a=e.sex,s=e.owner;return(0,j.jsx)(W,{id:t,avatarURL:n,title:r,place:o,date:c,location:o,category:i,sex:a,owner:s},t)}))})})}},4245:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(2791),o=n(7262),c={backdrop:"modal_backdrop__KjkNO",modal:"modal_modal__Kap2h",closeButton:"modal_closeButton__Y2E7y",closeButtonIcon:"modal_closeButtonIcon__lqLv7"},i=n(184),a=function(){return(0,i.jsx)("svg",{width:24,height:24,className:c.closeButtonIcon,children:(0,i.jsx)("use",{href:o.Z+"#cross"})})},s=function(e){var t=e.isOpen,n=e.onClose,o=e.children,s=function(){n()};return(0,r.useEffect)((function(){var e=function(e){"Escape"===e.key&&s()},n=function(e){"backdrop"===e.target.className&&s()};return t?(document.body.style.overflow="hidden",document.addEventListener("keydown",e),document.addEventListener("click",n)):document.body.style.overflow="",function(){document.body.style.overflow="",document.removeEventListener("keydown",e),document.removeEventListener("click",n)}})),t?(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:c.backdrop,onClick:s}),(0,i.jsx)("div",{className:c.modal,children:(0,i.jsxs)("div",{className:c.modalContent,children:[(0,i.jsx)("button",{type:"button",className:c.closeButton,onClick:s,children:(0,i.jsx)(a,{className:c.closeButtonIcon})}),o]})})]}):null}},6774:function(e,t,n){n.d(t,{Z:function(){return I}});var r,o=n(1413),c=n(9439),i=n(4942),a=n(5840),s="custom-search_wrapper__WvUi8",l="custom-search_title__dDZry",d="custom-search_search__S7Xgn",u="custom-search_activeSearch__jhNJe",h=n(2791),f=["title","titleId"];function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){var n=e.title,o=e.titleId,c=_(e,f);return h.createElement("svg",m({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},c),n?h.createElement("title",{id:o},n):null,r||(r=h.createElement("path",{d:"M19 5L5 19M5.00004 5L19 19",stroke:"#FFC107",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var v,g=h.forwardRef(p),x=(n.p,["title","titleId"]);function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){var n=e.title,r=e.titleId,o=y(e,x);return h.createElement("svg",j({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},o),n?h.createElement("title",{id:r},n):null,v||(v=h.createElement("path",{d:"M19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L19.4697 20.5303ZM17.25 10.5C17.25 14.2279 14.2279 17.25 10.5 17.25V18.75C15.0563 18.75 18.75 15.0563 18.75 10.5H17.25ZM10.5 17.25C6.77208 17.25 3.75 14.2279 3.75 10.5H2.25C2.25 15.0563 5.94365 18.75 10.5 18.75V17.25ZM3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75V2.25C5.94365 2.25 2.25 5.94365 2.25 10.5H3.75ZM10.5 3.75C14.2279 3.75 17.25 6.77208 17.25 10.5H18.75C18.75 5.94365 15.0563 2.25 10.5 2.25V3.75ZM20.5303 19.4697L16.3428 15.2821L15.2821 16.3428L19.4697 20.5303L20.5303 19.4697Z",fill:"#54ADFF"})))}var N=h.forwardRef(b),w=(n.p,n(1694)),k=n.n(w),C=n(184),Z=(0,C.jsx)(g,{}),O=(0,C.jsx)(N,{}),L=function(e){var t=e.title,n=e.onChange,r=e.onSearch,o=(0,h.useState)(!1),f=(0,c.Z)(o,2),m=f[0],_=f[1];return(0,C.jsxs)("div",{className:s,children:[t&&(0,C.jsx)("h1",{className:l,children:t}),(0,C.jsx)(a.Z,{className:k()(d,(0,i.Z)({},u,m)),placeholder:"Search",enterButton:O,allowClear:{clearIcon:Z},bordered:!1,onChange:function(e){if(n&&n(e),e.target.value&&""!==e.target.value)return _(!0);_(!1)},onSearch:function(e){r&&r(e)},maxLength:20})]})},E=n(1087),I=function(){var e=(0,E.lr)(),t=(0,c.Z)(e,2),n=t[0],r=t[1];return(0,C.jsx)(L,{title:"Find your favorite pet",onSearch:function(e){var t=(0,o.Z)({},n);e?t=(0,o.Z)((0,o.Z)({},t),{},{search:e.trim()}):delete t.search,r(t)}})}}}]);
//# sourceMappingURL=13.2f09c534.chunk.js.map