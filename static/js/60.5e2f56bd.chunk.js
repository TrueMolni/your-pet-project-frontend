"use strict";(self.webpackChunkyour_pet_project_frontend=self.webpackChunkyour_pet_project_frontend||[]).push([[60],{7262:function(e,t,n){n(2791);t.Z=n.p+"static/media/sprite.958c9400be173773d1597ed271ca37d3.svg"},4681:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(9434),a=n(8225),s=n(2285),i=n(4245),l={modalTopSide:"modalAdv_modalTopSide__ws8s-",modalImage:"modalAdv_modalImage__rBZGl",modalTitle:"modalAdv_modalTitle__Mqhwa",modalPetComments:"modalAdv_modalPetComments__ESKav",modalCommentSection:"modalAdv_modalCommentSection__cKG7B",modalMainInfo:"modalAdv_modalMainInfo__AcKMJ",modalButtons:"modalAdv_modalButtons__UHhtj",modalListInfo:"modalAdv_modalListInfo__JLvzI",modalListInfoEmail:"modalAdv_modalListInfoEmail__S-CPH",modalListInfoPhone:"modalAdv_modalListInfoPhone__d1jW+",modalPetInfoList:"modalAdv_modalPetInfoList__7K4x-",modalContact:"modalAdv_modalContact__IPeap",modalAddFavs:"modalAdv_modalAddFavs__+SkLs",modalImageContainer:"modalAdv_modalImageContainer__MdfkG",modalHeartSvg:"modalAdv_modalHeartSvg__kwmgt",modalPetPrice:"modalAdv_modalPetPrice__ZU+3G",modalContent:"modalAdv_modalContent__MTvXc"},c=n(7262),r=n(184),d=function(e){var t=e.isOpen,n=e.onClose,d=e.id,m=(0,o.I0)(),u=(0,o.v9)(a.OS);return(0,r.jsx)(i.Z,{isOpen:t,onClose:function(){return n()},children:u&&(0,r.jsx)("div",{className:l.modal,children:(0,r.jsx)("div",{className:l.modalContent,children:(0,r.jsxs)("div",{className:l.modalMainContent,children:[(0,r.jsxs)("div",{className:l.modalTopSide,children:[(0,r.jsxs)("div",{className:l.modalImageContainer,children:[(0,r.jsx)("img",{src:u.avatarURL,alt:u.breed,className:l.modalImage}),(0,r.jsx)("span",{className:l.modalPetPrice,children:u.category})]}),(0,r.jsxs)("div",{className:l.modalMainInfo,children:[(0,r.jsx)("h2",{className:l.modalTitle,children:u.title}),(0,r.jsxs)("ul",{className:l.modalPetInfoList,children:[(0,r.jsxs)("li",{children:["Name:",(0,r.jsx)("span",{className:l.modalListInfo,children:u.name})]}),(0,r.jsxs)("li",{children:["Birthday:",(0,r.jsx)("span",{className:l.modalListInfo,children:u.date})]}),(0,r.jsxs)("li",{children:["Breed:",(0,r.jsx)("span",{className:l.modalListInfo,children:u.breed})]}),(0,r.jsxs)("li",{children:["Place:",(0,r.jsx)("span",{className:l.modalListInfo,children:u.location})]}),(0,r.jsxs)("li",{children:["The sex:",(0,r.jsx)("span",{className:l.modalListInfo,children:u.sex})]}),(0,r.jsxs)("li",{children:["Email:",(0,r.jsx)("span",{className:"".concat(l.modalListInfo," ").concat(l.modalListInfoEmail),children:"user@mail.com"})]}),(0,r.jsxs)("li",{children:["Phone:",(0,r.jsx)("span",{className:"".concat(l.modalListInfo," ").concat(l.modalListInfoPhone),children:"+380971234567"})]})]})]})]}),(0,r.jsxs)("div",{className:l.modalBotSide,children:[(0,r.jsx)("div",{className:l.modalCommentSection,children:(0,r.jsxs)("p",{className:l.modalPetComments,children:["Comments:"," ",(0,r.jsx)("span",{className:l.modalPetComent,children:u.comments})]})}),(0,r.jsxs)("div",{className:l.modalButtons,children:[(0,r.jsxs)("button",{type:"button",className:l.modalAddFavs,onClick:function(){return m(s.Z.updateFavorite(d))},children:[(0,r.jsx)("span",{children:"Add to"}),(0,r.jsx)("svg",{width:"24",height:"24",className:l.modalHeartSvg,children:(0,r.jsx)("use",{xlinkHref:"".concat(c.Z,"#heart")})})]}),(0,r.jsx)("button",{type:"button",className:l.modalContact,children:(0,r.jsx)("span",{children:"Contact"})})]})]})]})})})})}},675:function(e,t,n){n.d(t,{Z:function(){return J}});var o=n(2791),a=n(9434),s=n(7689),i=n(9439),l=n(9869),c=n(2285),r=n(8225),d=n(4245),m="modal-delete-notice_modalWrapper__p1vrF",u="modal-delete-notice_titleModal__WDb1f",h="modal-delete-notice_textModal__0y+XH",f="modal-delete-notice_boldText__YX+29",_="modal-delete-notice_btnWrapper__rNVzQ",v="modal-delete-notice_btnCancel__N7tlZ",p="modal-delete-notice_btnYes__CoXwI",x=n(184),j=function(e){var t=e.isOpen,n=e.onClose,o=e.title,s=e.id,i=(0,a.I0)();return(0,x.jsx)(d.Z,{isOpen:t,onClose:function(){return n()},children:(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)("h2",{className:u,children:"Delete adverstiment?"}),(0,x.jsxs)("p",{className:h,children:["Are you sure you want to delete"," ",(0,x.jsxs)("span",{className:f,children:["\u201c",o,"\u201d? "]}),"You can`t undo this action."]}),(0,x.jsxs)("div",{className:_,children:[(0,x.jsx)("button",{className:v,onClick:function(){return n()},children:"Cancel"}),(0,x.jsx)("button",{className:p,onClick:function(){i(c.Z.deleteUserNotice(s)),n()},children:"Yes"})]})]})})},g=n(4681),N=n(2426),y=n.n(N),b=n(7262),C=n(1686),w=function(e){var t=y()(e,"DD-MM-YYYY").fromNow().split(" ").slice(0,2).join(" ");return t.includes("in")?"no inform":t},I=function(e){return"".concat(b.Z,"male"===e?"#male":"#female")},L="notice-category-item_li__sxIGU",k="notice-category-item_mainWrapper__lgTUH",Z="notice-category-item_positionWrapper__oyUKd",O="notice-category-item_petImage__lSJU-",P="notice-category-item_wrapperGategoryInform__f0-Bs",S="notice-category-item_category__iO4ds",A="notice-category-item_btnAddFavorite__8CMr0",B="notice-category-item_inFavorite__bjaB0",E="notice-category-item_btnDelete__w-5D5",M="notice-category-item_description__7NvyG",H="notice-category-item_itemDescription__X2F2e",T="notice-category-item_wrapperLearnMore__wB7-Q",F="notice-category-item_text__PoKDQ",D="notice-category-item_btnLearnMore__P72ZN",U=function(e){var t=e.id,n=e.avatarURL,s=e.title,d=e.place,m=e.date,u=e.category,h=e.sex,f=e.owner,_=(0,a.v9)(l.VN),v=(0,a.v9)(r.Tc),p=(0,a.v9)(l.Gt),N=(0,o.useState)(!1),y=(0,i.Z)(N,2),U=y[0],R=y[1],K=(0,o.useState)(!1),Y=(0,i.Z)(K,2),W=Y[0],G=Y[1],V=(0,a.v9)(l.y6),X=(0,a.I0)();return(0,o.useEffect)((function(){}),[]),(0,x.jsxs)("li",{className:L,children:[(0,x.jsxs)("div",{className:k,children:[(0,x.jsxs)("div",{className:Z,children:[(0,x.jsx)("img",{src:n,alt:"",className:O}),(0,x.jsxs)("div",{className:P,children:[(0,x.jsxs)("p",{className:S,children:["lost-found"===u?"lost/found":u.replace(/(\.|-|\/|\\| )/g," ")," "]}),(0,x.jsx)("button",{className:A,type:"button",onClick:function(){V?X(c.Z.updateFavorite(t)):C.Notify.info("You should be logged in to add to favorites",{timeout:2e3,clickToClose:!0,position:"right-top"})},children:(0,x.jsx)("svg",{width:"24",height:"24",className:_?v.length?v.includes(t)?B:"":p.includes(t)?B:"":"",children:(0,x.jsx)("use",{xlinkHref:"".concat(b.Z,"#heart")})})}),f===_&&(0,x.jsx)("button",{className:E,onClick:function(){R(!0)},children:(0,x.jsx)("svg",{width:"24",height:"24",children:(0,x.jsx)("use",{xlinkHref:"".concat(b.Z,"#trash")})})})]}),(0,x.jsxs)("div",{className:M,children:[(0,x.jsxs)("p",{className:H,children:[(0,x.jsx)("svg",{width:"24",height:"24",children:(0,x.jsx)("use",{xlinkHref:"".concat(b.Z,"#location")})}),(0,x.jsx)("span",{children:d.length>10?"".concat(d.slice(0,6),"..."):d})]}),(0,x.jsxs)("p",{className:H,children:[(0,x.jsx)("svg",{width:"24",height:"24",children:(0,x.jsx)("use",{xlinkHref:"".concat(b.Z,"#clock")})}),(0,x.jsx)("span",{children:w(m)})]}),(0,x.jsxs)("p",{className:H,children:[(0,x.jsx)("svg",{width:"24",height:"24",children:(0,x.jsx)("use",{xlinkHref:I(h)})}),(0,x.jsx)("span",{children:h})]})]})]}),(0,x.jsxs)("div",{className:T,children:[(0,x.jsx)("p",{className:F,children:s.length>28?"".concat(s.slice(0,28),"..."):s}),(0,x.jsx)("button",{className:D,onClick:function(){X(c.Z.getNoticeById(t)),G(!0)},children:"Learn more"})]})]}),(0,x.jsx)(j,{isOpen:U,onClose:function(){R(!1)},title:s,id:t}),(0,x.jsx)(g.Z,{isOpen:W,onClose:function(){G(!1)},id:t})]})},R="notices-category-list_petsListWrapper__k7XK+",K="notices-category-list_section__2ZLgQ",Y=n(6048),W=n.n(Y),G="Pagination_root__STeRp",V="Pagination_wrap__eKgoL",X=function(){return(0,x.jsx)("div",{className:V,children:(0,x.jsx)(W(),{className:G,breakLabel:"...",nextLabel:"\u2192",onPageChange:function(e){return console.log("event >>>>",e)},pageRangeDisplayed:5,pageCount:3,previousLabel:"\u2190",renderOnZeroPageCount:null})})},J=function(){var e,t=(0,a.I0)(),n=(0,s.TH)(),i=(0,a.v9)(r.gR),d=(0,a.v9)(r.Tc),m=(0,a.v9)(r._6),u=(0,a.v9)(r.kZ),h=(0,a.v9)(r.ND),f=(0,a.v9)(r.Rr),_=n.pathname.split("/")[2],v=(0,a.v9)(l.VN);switch(n.pathname){case"/notices/favorites":e=i;break;case"/notices/own":e=m;break;default:e=h.length>0?h:f}return(0,o.useEffect)((function(){switch(n.pathname){case"/notices/favorites":v&&d&&t(c.Z.getNoticeByFavorite());break;case"/notices/own":v&&t(c.Z.getUserNotices());break;default:t(c.Z.getNoticesByCategory({category:_}))}}),[t,_,d,v,n.pathname,u,h]),(0,x.jsxs)("div",{className:K,children:[(0,x.jsx)("ul",{className:R,children:e.map((function(e){var t=e._id,n=e.avatarURL,o=e.title,a=e.location,s=e.date,i=e.category,l=e.sex,c=e.owner;return(0,x.jsx)(U,{id:t,avatarURL:n,title:o,place:a,date:s,location:a,category:i,sex:l,owner:c},t)}))}),(0,x.jsx)(X,{})]})}},8225:function(e,t,n){n.d(t,{ND:function(){return c},OS:function(){return a},Rr:function(){return o},Tc:function(){return s},_6:function(){return i},gR:function(){return l},kZ:function(){return r}});var o=function(e){return e.notices.noticesByCategory},a=function(e){return e.notices.adDetails},s=function(e){return e.notices.favorite},i=function(e){return e.notices.userNotices},l=function(e){return e.notices.favoriteAds},c=function(e){return e.notices.foundNoticesTitle},r=function(e){return e.notices.deleted}},4245:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(2791),a=n(7262),s={backdrop:"modal_backdrop__KjkNO",modal:"modal_modal__Kap2h",closeButton:"modal_closeButton__Y2E7y",closeButtonIcon:"modal_closeButtonIcon__lqLv7"},i=n(184),l=function(){return(0,i.jsx)("svg",{width:24,height:24,className:s.closeButtonIcon,children:(0,i.jsx)("use",{href:a.Z+"#cross"})})},c=function(e){var t=e.isOpen,n=e.onClose,a=e.children,c=function(){n()};return(0,o.useEffect)((function(){var e=function(e){"Escape"===e.key&&c()},n=function(e){"backdrop"===e.target.className&&c()};return t?(document.body.style.overflow="hidden",document.addEventListener("keydown",e),document.addEventListener("click",n)):document.body.style.overflow="",function(){document.body.style.overflow="",document.removeEventListener("keydown",e),document.removeEventListener("click",n)}})),t?(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:s.backdrop,onClick:c}),(0,i.jsx)("div",{className:s.modal,children:(0,i.jsxs)("div",{className:s.modalContent,children:[(0,i.jsx)("button",{type:"button",className:s.closeButton,onClick:c,children:(0,i.jsx)(l,{className:s.closeButtonIcon})}),a]})})]}):null}},5780:function(e,t,n){n.d(t,{Z:function(){return O}});var o,a=n(4942),s=n(9439),i=n(5840),l="custom-search_wrapper__WvUi8",c="custom-search_title__dDZry",r="custom-search_search__S7Xgn",d="custom-search_activeSearch__jhNJe",m=n(9434),u=n(2791),h=["title","titleId"];function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function v(e,t){var n=e.title,a=e.titleId,s=_(e,h);return u.createElement("svg",f({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},s),n?u.createElement("title",{id:a},n):null,o||(o=u.createElement("path",{d:"M19 5L5 19M5.00004 5L19 19",stroke:"#FFC107",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var p,x=u.forwardRef(v),j=(n.p,["title","titleId"]);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},g.apply(this,arguments)}function N(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function y(e,t){var n=e.title,o=e.titleId,a=N(e,j);return u.createElement("svg",g({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},a),n?u.createElement("title",{id:o},n):null,p||(p=u.createElement("path",{d:"M19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L19.4697 20.5303ZM17.25 10.5C17.25 14.2279 14.2279 17.25 10.5 17.25V18.75C15.0563 18.75 18.75 15.0563 18.75 10.5H17.25ZM10.5 17.25C6.77208 17.25 3.75 14.2279 3.75 10.5H2.25C2.25 15.0563 5.94365 18.75 10.5 18.75V17.25ZM3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75V2.25C5.94365 2.25 2.25 5.94365 2.25 10.5H3.75ZM10.5 3.75C14.2279 3.75 17.25 6.77208 17.25 10.5H18.75C18.75 5.94365 15.0563 2.25 10.5 2.25V3.75ZM20.5303 19.4697L16.3428 15.2821L15.2821 16.3428L19.4697 20.5303L20.5303 19.4697Z",fill:"#54ADFF"})))}var b=u.forwardRef(y),C=(n.p,n(1694)),w=n.n(C),I=n(2285),L=n(184),k=(0,L.jsx)(x,{}),Z=(0,L.jsx)(b,{}),O=function(e){var t=e.title,n=e.onChange,o=e.onSearch,h=(0,m.I0)(),f=(0,u.useState)(!1),_=(0,s.Z)(f,2),v=_[0],p=_[1];return(0,L.jsxs)("div",{className:l,children:[t&&(0,L.jsx)("h1",{className:c,children:t}),(0,L.jsx)(i.Z,{className:w()(r,(0,a.Z)({},d,v)),placeholder:"Search",enterButton:Z,allowClear:{clearIcon:k},bordered:!1,onChange:function(e){if(n&&n(e),e.target.value&&""!==e.target.value)return p(!0);p(!1),h(I.Z.getAllNotices())},onSearch:function(e){o&&o(e)},maxLength:20})]})}},3317:function(e,t,n){var o=n(9439),a=n(5780),s=n(2791),i=n(9434),l=n(2285),c=n(184);t.Z=function(){var e=(0,s.useState)(""),t=(0,o.Z)(e,2),n=t[0],r=t[1],d=(0,i.I0)();return(0,s.useEffect)((function(){!function(){if(n)return d(l.Z.getNoticesByTitle(n));r("")}()}),[d,n]),(0,c.jsx)(a.Z,{title:"Find your favorite pet",onSearch:function(e){r(e)}})}}}]);
//# sourceMappingURL=60.5e2f56bd.chunk.js.map