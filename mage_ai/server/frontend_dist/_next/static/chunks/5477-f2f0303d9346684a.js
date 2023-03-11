"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5477],{1210:function(e,n,t){t.d(n,{Z:function(){return P}});var r=t(82394),o=t(21831),i=t(82684),c=t(47999),l=t(28358),u=t(93461),s=t(57384),a=t(19767),d=t(72454),f=t(28598);function p(e,n){var t=e.children;return(0,f.jsx)(d.HS,{ref:n,children:t})}var h=i.forwardRef(p),m=t(32063),b=t(15270),v=t(82531),g=t(66166),y=t(3055),w=t(49125),j=t(91427),O=t(24141);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=function(e){var n,t=e.after,r=e.afterHidden,p=e.afterWidth,x=e.afterWidthOverride,P=e.before,S=e.beforeWidth,C=e.breadcrumbs,I=e.children,k=e.errors,_=e.headerMenuItems,N=e.navigationItems,D=e.setErrors,H=e.subheaderChildren,E=e.title,z=e.uuid,M=(0,O.i)().width,A="dashboard_after_width_".concat(z),T="dashboard_before_width_".concat(z),W=(0,i.useRef)(null),B=(0,i.useState)(x?p:(0,j.U2)(A,p)),L=B[0],R=B[1],q=(0,i.useState)(!1),U=q[0],F=q[1],G=(0,i.useState)(P?Math.max((0,j.U2)(T,S),13*w.iI):null),Q=G[0],Y=G[1],J=(0,i.useState)(!1),X=J[0],K=J[1],$=(0,i.useState)(null)[1],V=v.ZP.projects.list({},{revalidateOnFocus:!1}).data,ee=null===V||void 0===V?void 0:V.projects,ne=[];C?ne.push.apply(ne,(0,o.Z)(C)):(null===ee||void 0===ee?void 0:ee.length)>=1&&ne.push.apply(ne,[{label:function(){var e;return null===(e=ee[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},{bold:!0,label:function(){return E}}]),(0,i.useEffect)((function(){null===W||void 0===W||!W.current||U||X||null===$||void 0===$||$(W.current.getBoundingClientRect().width)}),[U,L,X,Q,W,$,M]),(0,i.useEffect)((function(){U||(0,j.t8)(A,L)}),[r,U,L,A]),(0,i.useEffect)((function(){X||(0,j.t8)(T,Q)}),[X,Q,T]);var te=(0,g.Z)(p);return(0,i.useEffect)((function(){x&&te!==p&&R(p)}),[x,p,te]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.Z,{title:E}),(0,f.jsx)(a.Z,{breadcrumbs:ne,menuItems:_,project:null===ee||void 0===ee?void 0:ee[0],version:null===ee||void 0===ee||null===(n=ee[0])||void 0===n?void 0:n.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===N||void 0===N?void 0:N.length)&&(0,f.jsx)(d.lm,{children:(0,f.jsx)(b.Z,{navigationItems:N})}),(0,f.jsx)(u.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(m.Z,{after:t,afterHeightOffset:y.Mz,afterHidden:r,afterMousedownActive:U,afterWidth:L,before:P,beforeHeightOffset:y.Mz,beforeMousedownActive:X,beforeWidth:d.k1+(P?Q:0),hideAfterCompletely:!0,leftOffset:P?d.k1:null,mainContainerRef:W,setAfterMousedownActive:F,setAfterWidth:R,setBeforeMousedownActive:K,setBeforeWidth:Y,children:[H&&(0,f.jsx)(h,{children:H}),I]})})]}),k&&(0,f.jsx)(c.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===D||void 0===D?void 0:D(null)},children:(0,f.jsx)(l.Z,Z(Z({},k),{},{onClose:function(){return null===D||void 0===D?void 0:D(null)}}))})]})}},2850:function(e,n,t){t.d(n,{M:function(){return l},W:function(){return c}});var r=t(9518),o=t(23831),i=t(3055),c=34*t(49125).iI,l=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);",""],i.Mz,(function(e){return"\n    border-left: 1px solid ".concat((e.theme.borders||o.Z.borders).medium,";\n  ")}))},79585:function(e,n,t){t.d(n,{B0:function(){return l},DQ:function(){return a},HY:function(){return c},SA:function(){return d},WH:function(){return i},eC:function(){return u},tC:function(){return s}});var r=t(81132),o=t(9736),i="Workspace",c="Preferences",l="Sync data",u="Users",s="Account",a="Profile",d=function(e){var n=e.owner,t=e.roles,d=[{linkProps:{href:"/settings/workspace/preferences"},uuid:c}];n&&d.push({linkProps:{href:"/settings/workspace/users"},uuid:u}),(!(0,o.YB)()||t<=r.No.EDITOR)&&d.push({linkProps:{href:"/settings/workspace/sync_data"},uuid:l});var f=[{items:d,uuid:i}];return(0,o.YB)()?f.concat([{items:[{linkProps:{href:"/settings/account/profile"},uuid:a}],uuid:s}]):f}},30775:function(e,n,t){t.d(n,{Z:function(){return Z}});var r=t(1210),o=t(82394),i=t(12691),c=t.n(i),l=t(10919),u=t(86673),s=t(19711),a=t(9518),d=t(23831),f=t(49125),p=t(90880),h=(f.iI,a.default.div.withConfig({displayName:"indexstyle__SectionTitleStyle",componentId:"sc-1y8dyue-0"})(["padding:","px ","px;"],1*f.iI,2.5*f.iI)),m=a.default.div.withConfig({displayName:"indexstyle__ItemStyle",componentId:"sc-1y8dyue-1"})([""," padding:","px ","px;"," ",""],(0,p.eR)(),1.5*f.iI,2.5*f.iI,(function(e){return!e.selected&&"\n    &:hover {\n      background-color: ".concat((e.theme.background||d.Z.background).codeArea,";\n    }\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.background||d.Z.background).codeTextarea,";\n  ")})),b=t(28598),v=t(82684);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var w=function(e){var n=e.isItemSelected,t=e.sections;return(0,b.jsx)(u.Z,{py:f.Gg,children:null===t||void 0===t?void 0:t.map((function(e){var t=e.items,r=e.title,o=e.uuid;return(0,b.jsxs)(u.Z,{children:[(0,b.jsx)(h,{children:(0,b.jsx)(s.ZP,{bold:!0,muted:!0,small:!0,uppercase:!0,children:r?r():o})}),null===t||void 0===t?void 0:t.map((function(e){var t=e.label,r=e.linkProps,i=e.onClick,u=e.uuid,s=t?t():u,a=(0,b.jsx)(m,{selected:null===n||void 0===n?void 0:n(y(y({},e),{},{uuidWorkspace:o})),children:s});return r?(0,v.createElement)(c(),y(y({},r),{},{key:u,passHref:!0}),(0,b.jsx)(l.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,sameColorAsText:!0,children:a})):(0,b.jsx)(l.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,onClick:i,preventDefault:!0,sameColorAsText:!0,children:a},u)}))]},o)}))})},j=t(2850),O=t(79585),x=t(9736);var Z=function(e){var n=e.after,t=e.afterHidden,o=e.children,i=e.uuidItemSelected,c=e.uuidWorkspaceSelected,l=(0,x.PR)()||{};return(0,b.jsx)(r.Z,{after:n,afterHidden:!n||t,afterWidth:n?50*f.iI:0,afterWidthOverride:!0,before:(0,b.jsx)(j.M,{children:(0,b.jsx)(w,{isItemSelected:function(e){var n=e.uuid,t=e.uuidWorkspace;return c===t&&i===n},sections:(0,O.SA)(l)})}),beforeWidth:j.W,title:"Settings",uuid:"settings/index",children:o})}},63153:function(e,n,t){t.d(n,{Z3:function(){return r},ms:function(){return i},s7:function(){return o}});var r=[{autoComplete:"username",label:"Username",required:!0,uuid:"username"},{autoComplete:"email",disabled:!0,label:"Email",required:!0,type:"email",uuid:"email"}],o="password_current",i=[{autoComplete:"current-password",label:"Current password",type:"password",uuid:o},{autoComplete:"new-password",label:"New password",type:"password",uuid:"password"},{autoComplete:"new-password",label:"Confirm new password",type:"password",uuid:"password_confirmation"}]},20582:function(e,n,t){var r=t(82394),o=t(21831),i=t(75582),c=t(21764),l=t(82684),u=t(83455),s=t(60328),a=t(67971),d=t(87372),f=t(55378),p=t(86673),h=t(82944),m=t(81132),b=t(82531),v=t(66166),g=t(63153),y=t(7715),w=t(96510),j=t(28598);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.disabledFields,t=e.hideFields,O=e.newUser,Z=e.onDeleteSuccess,P=e.onSaveSuccess,S=e.showDelete,C=e.title,I=e.user,k=(0,l.useState)(!0),_=k[0],N=k[1],D=(0,l.useState)({}),H=D[0],E=D[1],z=(0,l.useState)(null),M=z[0],A=z[1],T=(0,u.Db)(O?b.ZP.users.useCreate():b.ZP.users.useUpdate(null===I||void 0===I?void 0:I.id),{onSuccess:function(e){return(0,w.wD)(e,{callback:function(e){var n=e.user,t=(0,y.GL)(n,g.Z3.concat(g.ms).map((function(e){return e.uuid})));A(t),c.Am.success(O?"New user created successfully.":"User profile successfully updated.",{position:c.Am.POSITION.BOTTOM_RIGHT,toastId:"user-update-success-".concat(n.id)}),null===P||void 0===P||P(t)},onErrorCallback:function(e){var n=e.error,t=n.message,r=n.type;c.Am.error(t,{position:c.Am.POSITION.BOTTOM_RIGHT,toastId:r})}})}}),W=(0,i.Z)(T,2),B=W[0],L=W[1].isLoading,R=(0,u.Db)(b.ZP.users.useDelete(null===I||void 0===I?void 0:I.id),{onSuccess:function(e){return(0,w.wD)(e,{callback:function(){null===Z||void 0===Z||Z()},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;alert(r),console.log(t)}})}}),q=(0,i.Z)(R,2),U=q[0],F=q[1].isLoading,G=t?(0,o.Z)(t):[];O&&G.push(g.s7);var Q=!G||!G.includes(g.s7),Y=(0,v.Z)(I);return(0,l.useEffect)((function(){!I||M&&(null===Y||void 0===Y?void 0:Y.id)===(null===I||void 0===I?void 0:I.id)||A((0,y.GL)(I,g.Z3.concat(g.ms).map((function(e){return e.uuid})))),null!==M&&void 0!==M&&M.password||null!==M&&void 0!==M&&M.password_confirmation?(null===M||void 0===M?void 0:M.password)!==(null===M||void 0===M?void 0:M.password_confirmation)?E({password_confirmation:"Password confirmation does not match."}):!Q||null!==M&&void 0!==M&&M.password_current?E(null):E({password_current:"This field is required."}):null!==M&&void 0!==M&&M.password_current&&Q?null!==M&&void 0!==M&&M.password&&null!==M&&void 0!==M&&M.password_confirmation?E(null):E({password:"This field is required.",password_confirmation:"This field is required."}):null!==M&&void 0!==M&&M.password_current||null!==M&&void 0!==M&&M.password||null!==M&&void 0!==M&&M.password_confirmation||E(null)}),[M,Q,I,Y]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(d.Z,{children:C||"Edit profile"}),(0,j.jsxs)("form",{children:[g.Z3.filter((function(e){var n=e.uuid;return!G||!G.includes(n)})).map((function(e){var n=e.autoComplete,t=e.disabled,o=e.label,i=e.required,c=e.type,l=e.uuid;return(0,j.jsx)(p.Z,{mt:2,children:(0,j.jsx)(h.Z,{autoComplete:n,disabled:t&&!O,label:o,onChange:function(e){N(!1),A((function(n){return x(x({},n),{},(0,r.Z)({},l,e.target.value))}))},primary:!0,required:i,setContentOnMount:!0,type:c,value:(null===M||void 0===M?void 0:M[l])||""})},l)})),!(null!==I&&void 0!==I&&I.owner)&&(0,j.jsx)(p.Z,{mt:2,children:(0,j.jsxs)(f.Z,{disabled:null===n||void 0===n?void 0:n.includes("roles"),label:"Roles",onChange:function(e){N(!1),A((function(n){return x(x({},n),{},{roles:e.target.value})}))},primary:!0,setContentOnMount:!0,value:(null===M||void 0===M?void 0:M.roles)||(null===I||void 0===I?void 0:I.roles)||"",children:[(0,j.jsx)("option",{value:""}),m.K$.map((function(e){return(0,j.jsx)("option",{value:e,children:m.gG[e]},e)}))]})}),(0,j.jsxs)(p.Z,{mt:5,children:[(0,j.jsx)(d.Z,{children:O?"Password":"Change password"}),g.ms.filter((function(e){var n=e.uuid;return!G||!G.includes(n)})).map((function(e){var n=e.autoComplete,t=e.disabled,o=e.label,i=e.required,c=e.type,l=e.uuid;return(0,j.jsx)(p.Z,{mt:2,children:(0,j.jsx)(h.Z,{autoComplete:n,disabled:t,label:o,meta:{error:null===H||void 0===H?void 0:H[l],touched:!(null===H||void 0===H||!H[l])},onChange:function(e){N(!1),A((function(n){return x(x({},n),{},(0,r.Z)({},l,e.target.value))}))},primary:!0,required:i,setContentOnMount:!0,type:c,value:(null===M||void 0===M?void 0:M[l])||""})},l)}))]}),(0,j.jsx)(p.Z,{mt:5,children:(0,j.jsxs)(a.Z,{children:[(0,j.jsx)(s.Z,{disabled:_||H&&!(0,y.Qr)(H),loading:L,onClick:function(){return B({user:M})},primary:!0,children:O?"Create new user":"Update user profile"}),S&&(0,j.jsx)(p.Z,{ml:1,children:(0,j.jsx)(s.Z,{danger:!0,loading:F,onClick:function(){window.confirm("Are you sure you want to delete ".concat(M.username||M.email,"?"))&&U()},children:"Delete user"})})]})})]})]})}},87372:function(e,n,t){var r,o,i,c,l,u,s,a,d=t(82394),f=t(26304),p=t(26653),h=t(9518),m=t(33591),b=t(23831),v=t(2005),g=t(31012),y=t(19711),w=t(49125),j=t(86673),O=t(28598),x=["children","condensed","inline","level","marketing","spacingBelow"];function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var S=(0,h.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," ",""],y.IH,(function(e){return e.color&&"\n    color: ".concat(e.color,"\n  ")}),(function(e){return e.yellow&&"\n    color: ".concat((e.theme.accent||b.Z.accent).yellow,";\n  ")}),(function(e){return e.center&&"\n    text-align: center;\n  "}),(function(e){return!e.monospace&&0===Number(e.weightStyle)&&"\n    font-family: ".concat(v.iI,";\n  ")}),(function(e){return!e.monospace&&1===Number(e.weightStyle)&&"\n    font-family: ".concat(v.LX,";\n  ")}),(function(e){return!e.monospace&&2===Number(e.weightStyle)&&"\n    font-family: ".concat(v.LX,";\n  ")}),(function(e){return!e.monospace&&3===Number(e.weightStyle)&&"\n    font-family: ".concat(v.ry,";\n  ")}),(function(e){return!e.monospace&&4===Number(e.weightStyle)&&"\n    font-family: ".concat(v.YC,";\n  ")}),(function(e){return!e.monospace&&5===Number(e.weightStyle)&&"\n    font-family: ".concat(v.nF,";\n  ")}),(function(e){return!e.monospace&&(6===Number(e.weightStyle)||e.bold)&&"\n    font-family: ".concat(v.nF,";\n  ")}),(function(e){return!e.monospace&&7===Number(e.weightStyle)&&"\n    font-family: ".concat(v.nF,";\n  ")}),(function(e){return!e.monospace&&8===Number(e.weightStyle)&&"\n    font-family: ".concat(v.nF,";\n  ")}),(function(e){return e.lineHeightAuto&&"\n    line-height: normal !important;\n  "})),C=h.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(e){return"\n    color: ".concat((e.theme.content||b.Z.content).active,";\n  ")})),I=h.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],S,m.media.md(r||(r=(0,p.Z)(["\n    ","\n  "])),g.aQ),m.media.lg(o||(o=(0,p.Z)(["\n    ","\n  "])),g.aQ),m.media.xl(i||(i=(0,p.Z)(["\n    ","\n  "])),g.aQ)),k=h.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],S,g.MJ),_=h.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],S,m.media.xs(c||(c=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI),m.media.sm(l||(l=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI),m.media.md(u||(u=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI),m.media.lg(s||(s=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI),m.media.xl(a||(a=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI)),N=h.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],S,g.BL),D=h.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],S),H=h.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],S),E=h.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],S),z=h.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],S,(function(e){return 1===e.level&&"\n    ".concat(g.MJ,"\n  ")}),(function(e){return 2===e.level&&"\n    ".concat(g.BL,"\n  ")}),(function(e){return 3===e.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(e){return 4===e.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),M=function(e){var n,t=e.children,r=e.condensed,o=e.inline,i=e.level,c=e.marketing,l=e.spacingBelow,u=(0,f.Z)(e,x);o?n=z:0===Number(i)?n=I:1===Number(i)?n=c?_:k:2===Number(i)?n=N:3===Number(i)?n=D:4===Number(i)?n=H:5===Number(i)&&(n=E);var s=(0,O.jsxs)(n,P(P({},u),{},{level:i,children:[l&&(0,O.jsx)(j.Z,{mb:r?2:3,children:t}),!l&&t]}));return o?s:(0,O.jsx)(C,{children:s})};M.defaultProps={level:3,weightStyle:6},n.Z=M},55378:function(e,n,t){var r=t(82394),o=t(26304),i=t(82684),c=t(9518),l=t(69898),u=t(31969),s=t(49125),a=t(28598),d=["beforeIcon","children","label","multiple","placeholder"];function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h=c.default.select.withConfig({displayName:"Select__SelectStyle",componentId:"sc-q6ezu2-0"})(["",' background-image:url("data:image/svg+xml;utf8,','");background-repeat:no-repeat;background-position:-webkit-calc(100% - ',"px) center;background-position:calc(100% - ","px) center;padding-right:","px;&:hover{cursor:pointer;}"," "," "," ",""],l.p,"\n  <svg width='12' height='12' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>\n    <path\n      clip-rule='evenodd'\n      d='M8.0015 11.7109L14.0022 5.71017L12.588 4.29597L7.99485 8.88914L3.40754 4.34482L2 5.76567L8.0015 11.7109Z'\n      fill='%23B4B8C0'\n      fill-rule='evenodd'\n    />\n  </svg>",s.iI,s.iI,2.5*s.iI,(function(e){return!e.hasContent&&!e.showPlaceholder&&"\n    color: ".concat((e.theme.content||u.Z.content).muted,";\n  ")}),(function(e){return e.backgroundColor&&"\n    background-color: ".concat(e.backgroundColor,";\n  ")}),(function(e){return e.color&&"\n    color: ".concat(e.color,";\n  ")}),(function(e){return e.showPlaceholder&&"\n    color: ".concat((e.theme.content||u.Z.content).inverted,";\n  ")})),m=function(e,n){var t=e.beforeIcon,r=e.children,i=e.label,c=e.multiple,u=e.placeholder,s=(0,o.Z)(e,d);return(0,a.jsx)(l.Z,p(p({},s),{},{beforeIcon:t,input:(0,a.jsxs)(h,p(p({multiple:c},s),{},{children:[(i||u)&&(0,a.jsx)("option",{disabled:!0,selected:!0,value:"",children:i||u}),r]})),label:i,placeholder:u,ref:n,setContentOnMount:!0,showLabelRequirement:function(e){return!!e.content}}))};n.Z=i.forwardRef(m)},82944:function(e,n,t){var r=t(82394),o=t(91835),i=t(82684),c=t(9518),l=t(69898),u=t(28598);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=c.default.input.withConfig({displayName:"TextInput__TextInputStyle",componentId:"sc-1ii4qtc-0"})(["",""],l.p),f=function(e,n){var t=(0,o.Z)({},e);return(0,u.jsx)(l.Z,a(a({},t),{},{input:(0,u.jsx)(d,a({},t)),ref:n}))};n.Z=i.forwardRef(f)}}]);