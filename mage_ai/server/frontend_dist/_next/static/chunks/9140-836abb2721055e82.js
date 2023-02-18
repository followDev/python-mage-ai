"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9140],{2850:function(e,n,t){t.d(n,{M:function(){return l},W:function(){return c}});var r=t(9518),o=t(23831),i=t(3055),c=34*t(49125).iI,l=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);",""],i.Mz,(function(e){return"\n    border-left: 1px solid ".concat((e.theme.borders||o.Z.borders).medium,";\n  ")}))},79585:function(e,n,t){t.d(n,{DQ:function(){return u},HY:function(){return i},SA:function(){return a},WH:function(){return o},eC:function(){return c},tC:function(){return l}});var r=t(9736),o="Workspace",i="Preferences",c="Users",l="Account",u="Profile",a=function(e){var n=e.owner,t=[{linkProps:{href:"/settings/workspace/preferences"},uuid:i}];n&&t.push({linkProps:{href:"/settings/workspace/users"},uuid:c});var a=[{items:t,uuid:o}];return(0,r.YB)()?a.concat([{items:[{linkProps:{href:"/settings/account/profile"},uuid:u}],uuid:l}]):a}},30775:function(e,n,t){t.d(n,{Z:function(){return Z}});var r=t(70434),o=t(82394),i=t(12691),c=t.n(i),l=t(10919),u=t(86673),a=t(19711),s=t(9518),d=t(23831),p=t(49125),f=t(90880),m=(p.iI,s.default.div.withConfig({displayName:"indexstyle__SectionTitleStyle",componentId:"sc-1y8dyue-0"})(["padding:","px ","px;"],1*p.iI,2.5*p.iI)),h=s.default.div.withConfig({displayName:"indexstyle__ItemStyle",componentId:"sc-1y8dyue-1"})([""," padding:","px ","px;"," ",""],(0,f.eR)(),1.5*p.iI,2.5*p.iI,(function(e){return!e.selected&&"\n    &:hover {\n      background-color: ".concat((e.theme.background||d.Z.background).codeArea,";\n    }\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.background||d.Z.background).codeTextarea,";\n  ")})),b=t(28598),v=t(82684);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var w=function(e){var n=e.isItemSelected,t=e.sections;return(0,b.jsx)(u.Z,{py:p.Gg,children:null===t||void 0===t?void 0:t.map((function(e){var t=e.items,r=e.title,o=e.uuid;return(0,b.jsxs)(u.Z,{children:[(0,b.jsx)(m,{children:(0,b.jsx)(a.ZP,{bold:!0,muted:!0,small:!0,uppercase:!0,children:r?r():o})}),null===t||void 0===t?void 0:t.map((function(e){var t=e.label,r=e.linkProps,i=e.onClick,u=e.uuid,a=t?t():u,s=(0,b.jsx)(h,{selected:null===n||void 0===n?void 0:n(g(g({},e),{},{uuidWorkspace:o})),children:a});return r?(0,v.createElement)(c(),g(g({},r),{},{key:u,passHref:!0}),(0,b.jsx)(l.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,sameColorAsText:!0,children:s})):(0,b.jsx)(l.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,onClick:i,preventDefault:!0,sameColorAsText:!0,children:s},u)}))]},o)}))})},O=t(2850),j=t(79585),x=t(9736);var Z=function(e){var n=e.after,t=e.afterHidden,o=e.children,i=e.uuidItemSelected,c=e.uuidWorkspaceSelected,l=((0,x.PR)()||{}).owner;return(0,b.jsx)(r.Z,{after:n,afterHidden:!n||t,afterWidth:n?50*p.iI:0,afterWidthOverride:!0,before:(0,b.jsx)(O.M,{children:(0,b.jsx)(w,{isItemSelected:function(e){var n=e.uuid,t=e.uuidWorkspace;return c===t&&i===n},sections:(0,j.SA)({owner:l})})}),beforeWidth:O.W,title:"Settings",uuid:"settings/index",children:o})}},63153:function(e,n,t){t.d(n,{Z3:function(){return r},ms:function(){return i},s7:function(){return o}});var r=[{autoComplete:"username",label:"Username",required:!0,uuid:"username"},{autoComplete:"email",disabled:!0,label:"Email",required:!0,type:"email",uuid:"email"}],o="password_current",i=[{autoComplete:"current-password",label:"Current password",type:"password",uuid:o},{autoComplete:"new-password",label:"New password",type:"password",uuid:"password"},{autoComplete:"new-password",label:"Confirm new password",type:"password",uuid:"password_confirmation"}]},67867:function(e,n,t){t.d(n,{Z:function(){return S}});var r,o,i=t(82394),c=t(21831),l=t(75582),u=t(21764),a=t(82684),s=t(83455),d=t(60328),p=t(67971),f=t(87372),m=t(55378),h=t(86673),b=t(82944);!function(e){e[e.ADMIN=1]="ADMIN",e[e.EDITOR=2]="EDITOR",e[e.VIEWER=4]="VIEWER"}(o||(o={}));var v=(r={},(0,i.Z)(r,o.ADMIN,"Admin"),(0,i.Z)(r,o.EDITOR,"Editor"),(0,i.Z)(r,o.VIEWER,"Viewer"),r),y=[o.VIEWER,o.EDITOR,o.ADMIN],g=t(82531),w=t(66166),O=t(63153),j=t(7715),x=t(96510),Z=t(28598);function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var S=function(e){var n=e.disabledFields,t=e.hideFields,r=e.newUser,o=e.onDeleteSuccess,I=e.onSaveSuccess,S=e.showDelete,C=e.title,k=e.user,_=(0,a.useState)(!0),N=_[0],D=_[1],E=(0,a.useState)({}),H=E[0],z=E[1],T=(0,a.useState)(null),A=T[0],M=T[1],R=(0,s.Db)(r?g.ZP.users.useCreate():g.ZP.users.useUpdate(null===k||void 0===k?void 0:k.id),{onSuccess:function(e){return(0,x.wD)(e,{callback:function(e){var n=e.user,t=(0,j.GL)(n,O.Z3.concat(O.ms).map((function(e){return e.uuid})));M(t),u.Am.success(r?"New user created successfully.":"User profile successfully updated.",{position:u.Am.POSITION.BOTTOM_RIGHT,toastId:"user-update-success-".concat(n.id)}),null===I||void 0===I||I(t)},onErrorCallback:function(e){var n=e.error,t=n.message,r=n.type;u.Am.error(t,{position:u.Am.POSITION.BOTTOM_RIGHT,toastId:r})}})}}),L=(0,l.Z)(R,2),W=L[0],q=L[1].isLoading,B=(0,s.Db)(g.ZP.users.useDelete(null===k||void 0===k?void 0:k.id),{onSuccess:function(e){return(0,x.wD)(e,{callback:function(){null===o||void 0===o||o()},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;alert(r),console.log(t)}})}}),U=(0,l.Z)(B,2),F=U[0],G=U[1].isLoading,Q=t?(0,c.Z)(t):[];r&&Q.push(O.s7);var V=!Q||!Q.includes(O.s7),Y=(0,w.Z)(k);return(0,a.useEffect)((function(){!k||A&&(null===Y||void 0===Y?void 0:Y.id)===(null===k||void 0===k?void 0:k.id)||M((0,j.GL)(k,O.Z3.concat(O.ms).map((function(e){return e.uuid})))),null!==A&&void 0!==A&&A.password||null!==A&&void 0!==A&&A.password_confirmation?(null===A||void 0===A?void 0:A.password)!==(null===A||void 0===A?void 0:A.password_confirmation)?z({password_confirmation:"Password confirmation does not match."}):!V||null!==A&&void 0!==A&&A.password_current?z(null):z({password_current:"This field is required."}):null!==A&&void 0!==A&&A.password_current&&V?null!==A&&void 0!==A&&A.password&&null!==A&&void 0!==A&&A.password_confirmation?z(null):z({password:"This field is required.",password_confirmation:"This field is required."}):null!==A&&void 0!==A&&A.password_current||null!==A&&void 0!==A&&A.password||null!==A&&void 0!==A&&A.password_confirmation||z(null)}),[A,V,k,Y]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(f.Z,{children:C||"Edit profile"}),(0,Z.jsxs)("form",{children:[O.Z3.filter((function(e){var n=e.uuid;return!Q||!Q.includes(n)})).map((function(e){var n=e.autoComplete,t=e.disabled,o=e.label,c=e.required,l=e.type,u=e.uuid;return(0,Z.jsx)(h.Z,{mt:2,children:(0,Z.jsx)(b.Z,{autoComplete:n,disabled:t&&!r,label:o,onChange:function(e){D(!1),M((function(n){return P(P({},n),{},(0,i.Z)({},u,e.target.value))}))},primary:!0,required:c,setContentOnMount:!0,type:l,value:(null===A||void 0===A?void 0:A[u])||""})},u)})),!(null!==k&&void 0!==k&&k.owner)&&(0,Z.jsx)(h.Z,{mt:2,children:(0,Z.jsxs)(m.Z,{disabled:null===n||void 0===n?void 0:n.includes("roles"),label:"Roles",onChange:function(e){D(!1),M((function(n){return P(P({},n),{},{roles:e.target.value})}))},primary:!0,setContentOnMount:!0,value:(null===A||void 0===A?void 0:A.roles)||(null===k||void 0===k?void 0:k.roles)||"",children:[(0,Z.jsx)("option",{value:""}),y.map((function(e){return(0,Z.jsx)("option",{value:e,children:v[e]},e)}))]})}),(0,Z.jsxs)(h.Z,{mt:5,children:[(0,Z.jsx)(f.Z,{children:r?"Password":"Change password"}),O.ms.filter((function(e){var n=e.uuid;return!Q||!Q.includes(n)})).map((function(e){var n=e.autoComplete,t=e.disabled,r=e.label,o=e.required,c=e.type,l=e.uuid;return(0,Z.jsx)(h.Z,{mt:2,children:(0,Z.jsx)(b.Z,{autoComplete:n,disabled:t,label:r,meta:{error:null===H||void 0===H?void 0:H[l],touched:!(null===H||void 0===H||!H[l])},onChange:function(e){D(!1),M((function(n){return P(P({},n),{},(0,i.Z)({},l,e.target.value))}))},primary:!0,required:o,setContentOnMount:!0,type:c,value:(null===A||void 0===A?void 0:A[l])||""})},l)}))]}),(0,Z.jsx)(h.Z,{mt:5,children:(0,Z.jsxs)(p.Z,{children:[(0,Z.jsx)(d.Z,{disabled:N||H&&!(0,j.Qr)(H),loading:q,onClick:function(){return W({user:A})},primary:!0,children:r?"Create new user":"Update user profile"}),S&&(0,Z.jsx)(h.Z,{ml:1,children:(0,Z.jsx)(d.Z,{danger:!0,loading:G,onClick:function(){window.confirm("Are you sure you want to delete ".concat(A.username||A.email,"?"))&&F()},children:"Delete user"})})]})})]})]})}},87372:function(e,n,t){var r,o,i,c,l,u,a,s,d=t(82394),p=t(26304),f=t(26653),m=t(9518),h=t(33591),b=t(23831),v=t(2005),y=t(31012),g=t(19711),w=t(49125),O=t(86673),j=t(28598),x=["children","condensed","inline","level","marketing","spacingBelow"];function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=(0,m.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," ",""],g.IH,(function(e){return e.color&&"\n    color: ".concat(e.color,"\n  ")}),(function(e){return e.yellow&&"\n    color: ".concat((e.theme.accent||b.Z.accent).yellow,";\n  ")}),(function(e){return e.center&&"\n    text-align: center;\n  "}),(function(e){return!e.monospace&&0===Number(e.weightStyle)&&"\n    font-family: ".concat(v.iI,";\n  ")}),(function(e){return!e.monospace&&1===Number(e.weightStyle)&&"\n    font-family: ".concat(v.LX,";\n  ")}),(function(e){return!e.monospace&&2===Number(e.weightStyle)&&"\n    font-family: ".concat(v.LX,";\n  ")}),(function(e){return!e.monospace&&3===Number(e.weightStyle)&&"\n    font-family: ".concat(v.ry,";\n  ")}),(function(e){return!e.monospace&&4===Number(e.weightStyle)&&"\n    font-family: ".concat(v.YC,";\n  ")}),(function(e){return!e.monospace&&5===Number(e.weightStyle)&&"\n    font-family: ".concat(v.nF,";\n  ")}),(function(e){return!e.monospace&&(6===Number(e.weightStyle)||e.bold)&&"\n    font-family: ".concat(v.nF,";\n  ")}),(function(e){return!e.monospace&&7===Number(e.weightStyle)&&"\n    font-family: ".concat(v.nF,";\n  ")}),(function(e){return!e.monospace&&8===Number(e.weightStyle)&&"\n    font-family: ".concat(v.nF,";\n  ")}),(function(e){return e.lineHeightAuto&&"\n    line-height: normal !important;\n  "})),S=m.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(e){return"\n    color: ".concat((e.theme.content||b.Z.content).active,";\n  ")})),C=m.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],P,h.media.md(r||(r=(0,f.Z)(["\n    ","\n  "])),y.aQ),h.media.lg(o||(o=(0,f.Z)(["\n    ","\n  "])),y.aQ),h.media.xl(i||(i=(0,f.Z)(["\n    ","\n  "])),y.aQ)),k=m.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],P,y.MJ),_=m.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],P,h.media.xs(c||(c=(0,f.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI),h.media.sm(l||(l=(0,f.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI),h.media.md(u||(u=(0,f.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI),h.media.lg(a||(a=(0,f.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI),h.media.xl(s||(s=(0,f.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI)),N=m.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],P,y.BL),D=m.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],P),E=m.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],P),H=m.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],P),z=m.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],P,(function(e){return 1===e.level&&"\n    ".concat(y.MJ,"\n  ")}),(function(e){return 2===e.level&&"\n    ".concat(y.BL,"\n  ")}),(function(e){return 3===e.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(e){return 4===e.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),T=function(e){var n,t=e.children,r=e.condensed,o=e.inline,i=e.level,c=e.marketing,l=e.spacingBelow,u=(0,p.Z)(e,x);o?n=z:0===Number(i)?n=C:1===Number(i)?n=c?_:k:2===Number(i)?n=N:3===Number(i)?n=D:4===Number(i)?n=E:5===Number(i)&&(n=H);var a=(0,j.jsxs)(n,I(I({},u),{},{level:i,children:[l&&(0,j.jsx)(O.Z,{mb:r?2:3,children:t}),!l&&t]}));return o?a:(0,j.jsx)(S,{children:a})};T.defaultProps={level:3,weightStyle:6},n.Z=T},55378:function(e,n,t){var r=t(82394),o=t(26304),i=t(82684),c=t(9518),l=t(69898),u=t(31969),a=t(49125),s=t(28598),d=["beforeIcon","children","label","placeholder"];function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=c.default.select.withConfig({displayName:"Select__SelectStyle",componentId:"sc-q6ezu2-0"})(["",' background-image:url("data:image/svg+xml;utf8,','");background-repeat:no-repeat;background-position:-webkit-calc(100% - ',"px) center;background-position:calc(100% - ","px) center;padding-right:","px;&:hover{cursor:pointer;}"," "," "," ",""],l.p,"\n  <svg width='12' height='12' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>\n    <path\n      clip-rule='evenodd'\n      d='M8.0015 11.7109L14.0022 5.71017L12.588 4.29597L7.99485 8.88914L3.40754 4.34482L2 5.76567L8.0015 11.7109Z'\n      fill='%23B4B8C0'\n      fill-rule='evenodd'\n    />\n  </svg>",a.iI,a.iI,2.5*a.iI,(function(e){return!e.hasContent&&!e.showPlaceholder&&"\n    color: ".concat((e.theme.content||u.Z.content).muted,";\n  ")}),(function(e){return e.backgroundColor&&"\n    background-color: ".concat(e.backgroundColor,";\n  ")}),(function(e){return e.color&&"\n    color: ".concat(e.color,";\n  ")}),(function(e){return e.showPlaceholder&&"\n    color: ".concat((e.theme.content||u.Z.content).inverted,";\n  ")})),h=function(e,n){var t=e.beforeIcon,r=e.children,i=e.label,c=e.placeholder,u=(0,o.Z)(e,d);return(0,s.jsx)(l.Z,f(f({},u),{},{beforeIcon:t,input:(0,s.jsxs)(m,f(f({},u),{},{children:[(i||c)&&(0,s.jsx)("option",{disabled:!0,selected:!0,value:"",children:i||c}),r]})),label:i,placeholder:c,ref:n,setContentOnMount:!0,showLabelRequirement:function(e){return!!e.content}}))};n.Z=i.forwardRef(h)},82944:function(e,n,t){var r=t(82394),o=t(91835),i=t(82684),c=t(9518),l=t(69898),u=t(28598);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=c.default.input.withConfig({displayName:"TextInput__TextInputStyle",componentId:"sc-1ii4qtc-0"})(["",""],l.p),p=function(e,n){var t=(0,o.Z)({},e);return(0,u.jsx)(l.Z,s(s({},t),{},{input:(0,u.jsx)(d,s({},t)),ref:n}))};n.Z=i.forwardRef(p)}}]);