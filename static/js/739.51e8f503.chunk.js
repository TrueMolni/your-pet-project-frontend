"use strict";(self.webpackChunkyour_pet_project_frontend=self.webpackChunkyour_pet_project_frontend||[]).push([[739],{7262:function(n,e,t){t(2791);e.Z=t.p+"static/media/sprite.ea67adcb241711fe9b4a0f1b20ef5d17.svg"},9739:function(n,e,t){t.d(e,{Z:function(){return D}});var i=t(9439),a=t(2791),r=t(9434),s="nav-container_headerContainer__gC4n9",o="nav-container_navContainer__nKDs1",c="nav-container_navList__slVWw",u="nav-container_navLink__F7Ovv",l="nav-container_authNavList__xYqel",d="nav-container_userIconContainer__M5jkq",_="nav-container_userName__0P0Ue",v="nav-container_burgerMenu__eApW0",h=t(7262),m=t(1087);var x=t.p+"static/media/logo.6e2f51eeb062dc6472f5e4aa1de019f4.svg",g="Logo_logo__ozAky",f=t(184),j=function(){return(0,f.jsx)(m.rU,{to:"/",className:g,children:(0,f.jsx)("img",{src:x,alt:"Logo"})})},p=function(n){var e=n.btnStyle,t=n.btnIcon,i=n.handleClick;return(0,f.jsx)("button",{type:"button",className:e,onClick:i,children:(0,f.jsx)("svg",{width:24,height:24,children:(0,f.jsx)("use",{href:t})})})},y=t(5984),N=[{id:(0,y.x0)(),text:"News",link:"/news"},{id:(0,y.x0)(),text:"Find pet",link:"/notices/sell"},{id:(0,y.x0)(),text:"Our friends",link:"/friends"}],b=function(n){var e=n.navListStyle,t=n.navLinkStyle,i=N.map((function(n){var e=n.id,i=n.text,a=n.link;return(0,f.jsx)("li",{children:(0,f.jsx)(m.OL,{className:t,to:a,children:i})},e)}));return(0,f.jsx)("nav",{children:(0,f.jsx)("ul",{className:e,children:i})})},k=t(9869),S=function(n){var e=n.userNameStyle,t=n.userIconContainer,s=(0,a.useState)(""),o=(0,i.Z)(s,2),c=o[0],u=o[1],l=(0,r.v9)(k.PR),d=(0,r.v9)(k.gV);return(0,a.useEffect)((function(){l?u(l):d&&u(d)}),[l,d]),(0,f.jsxs)(m.OL,{to:"/user",className:t,children:[(0,f.jsx)("svg",{width:28,height:28,children:(0,f.jsx)("use",{href:h.Z+"#user"})}),(0,f.jsx)("p",{className:e,children:c})]})},C=t(7689),L=t(7228),w=t(4902),Z=function(){return(0,f.jsx)("svg",{width:24,height:24,className:L.Z.iconPaw,children:(0,f.jsx)("use",{href:h.Z+"#paw-white"})})},I=function(n){var e=n.listStyle,t=(0,C.s0)();return(0,f.jsxs)("ul",{className:e,children:[(0,f.jsx)("li",{children:(0,f.jsx)(w.Z,{customStyle:L.Z.loginBtn,buttonName:"Log IN",buttonIcon:(0,f.jsx)(Z,{}),type:"button",onClick:function(){return t("/login")}})}),(0,f.jsx)("li",{children:(0,f.jsx)(w.Z,{customStyle:L.Z.registerBtn,buttonName:"Registration",type:"button",onClick:function(){return t("/register")}})})]})},B="menu-page_backdrop__1oNkd",O="menu-page_menuWrapper__qaHGp",P="menu-page_menuHeader__KDfBZ",q="menu-page_navContainer__17TxK",T="menu-page_btnListStyle__NWLQ-",U="menu-page_userIconContainer__ObbAw",A="menu-page_userName__RyPHI",F="menu-page_navList__P63Bd",R="menu-page_navLink__DgOh7",W=function(n){var e=n.close,t=(0,r.v9)(k.y6);return(0,a.useEffect)((function(){return document.body.style.overflow="hidden",function(){document.body.style.overflow="auto"}})),(0,f.jsx)("div",{className:B,onClick:e,children:(0,f.jsxs)("div",{className:O,children:[(0,f.jsxs)("div",{className:P,children:[(0,f.jsx)(j,{}),(0,f.jsx)(p,{btnIcon:h.Z+"#close",handleClick:e})]}),(0,f.jsxs)("div",{className:q,children:[t?(0,f.jsx)(S,{userIconContainer:U,userNameStyle:A}):(0,f.jsx)(I,{listStyle:T}),(0,f.jsx)(b,{navListStyle:F,navLinkStyle:R})]})]})})},D=function(){var n=(0,a.useState)(!1),e=(0,i.Z)(n,2),t=e[0],m=e[1],x=(0,r.v9)(k.y6);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:s,children:[(0,f.jsx)(j,{}),(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)(b,{navListStyle:c,navLinkStyle:u}),x?(0,f.jsx)(S,{userIconContainer:d,userNameStyle:_}):(0,f.jsx)(I,{listStyle:l}),(0,f.jsx)(p,{btnStyle:v,btnIcon:h.Z+"#menu-hamburger",handleClick:function(n){n&&m(!0)}})]})]}),t&&(0,f.jsx)(W,{close:function(n){"BUTTON"!==n.target.nodeName&&"A"!==n.target.nodeName&&"BUTTON"!==n.currentTarget.nodeName||m(!1)}})]})}},4902:function(n,e,t){var i=t(184);e.Z=function(n){var e=n.customStyle,t=n.buttonName,a=n.buttonIcon,r=n.type,s=void 0===r?"button":r,o=n.onClick;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("button",{className:e,type:s,onClick:o,children:[t,a]})})}},7228:function(n,e){e.Z={loginBtn:"auth-navigation_loginBtn__s2qiP",registerBtn:"auth-navigation_registerBtn__gNQYi",iconPaw:"auth-navigation_iconPaw__fqbqy"}},5984:function(n,e,t){t.d(e,{x0:function(){return i}});var i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=739.51e8f503.chunk.js.map