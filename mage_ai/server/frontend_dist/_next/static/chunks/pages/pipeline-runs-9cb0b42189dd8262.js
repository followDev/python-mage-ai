(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1009],{66757:function(n,e,t){"use strict";var r=t(19319),o=t(94178),i=t(67240),c="localStorage"in t.g&&t.g.localStorage?t.g.localStorage:r;function u(n,e){return 1===arguments.length?l(n):a(n,e)}function l(n){const e=c.getItem(n);return o(e)}function a(n,e){try{return c.setItem(n,JSON.stringify(e)),!0}catch(t){return!1}}u.set=a,u.get=l,u.remove=function(n){return c.removeItem(n)},u.clear=function(){return c.clear()},u.backend=function(n){return n&&(c=n),c},u.on=i.on,u.off=i.off,n.exports=u},94178:function(n){"use strict";n.exports=function(n){const e=function(n){try{return JSON.parse(n)}catch(e){return n}}(n);return void 0===e?null:e}},19319:function(n){"use strict";var e={};n.exports={getItem:function(n){return n in e?e[n]:null},setItem:function(n,t){return e[n]=t,!0},removeItem:function(n){return!!(n in e)&&delete e[n]},clear:function(){return e={},!0}}},67240:function(n,e,t){"use strict";var r=t(94178),o={};function i(n){n||(n=t.g.event);var e=o[n.key];e&&e.forEach((function(e){e(r(n.newValue),r(n.oldValue),n.url||n.uri)}))}n.exports={on:function(n,e){o[n]?o[n].push(e):o[n]=[e],t.g.addEventListener?t.g.addEventListener("storage",i,!1):t.g.attachEvent?t.g.attachEvent("onstorage",i):t.g.onstorage=i},off:function(n,e){var t=o[n];t.length>1?t.splice(t.indexOf(e),1):o[n]=[]}}},72454:function(n,e,t){"use strict";t.d(e,{E7:function(){return h},HS:function(){return p},Nk:function(){return d},k1:function(){return s},lm:function(){return f}});var r=t(9518),o=t(23831),i=t(73942),c=t(3055),u=t(49125),l=t(37391),a=t(90880),s=u.cd*u.iI+5*u.iI+u.cd*u.iI,d=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-ecogjt-0"})(["display:flex;flex-direction:row;height:calc(100vh - ","px);position:fixed;top:","px;width:100%;",""],c.Mz,c.Mz,(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).page,";\n  ")})),f=r.default.div.withConfig({displayName:"indexstyle__VerticalNavigationStyle",componentId:"sc-ecogjt-1"})(["padding:","px;",""],u.cd*u.iI,(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).panel,";\n    border-right: 1px solid ").concat((n.theme.borders||o.Z.borders).medium,";\n  ")})),p=r.default.div.withConfig({displayName:"indexstyle__SubheaderStyle",componentId:"sc-ecogjt-2"})(["width:fit-content;padding:","px;position:relative;z-index:2;",""],u.cd*u.iI,(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.borders||o.Z.borders).medium,";\n  ")})),h=(r.default.div.withConfig({displayName:"indexstyle__ContentStyle",componentId:"sc-ecogjt-3"})([""," overflow:auto;",""],l.w5,(function(n){return"\n    height: calc(100vh - ".concat(c.Mz+(n.heightOffset||0),"px);\n  ")})),r.default.div.withConfig({displayName:"indexstyle__NavigationItemStyle",componentId:"sc-ecogjt-4"})(["display:flex;align-items:center;justify-content:center;padding:","px;border-radius:","px;",""],u.iI,i.n_,(function(n){return n.primary&&"\n    ".concat((0,a.eR)(),"\n    background: ").concat((n.theme||o.Z).chart.backgroundPrimary,";\n    border: 1px solid ").concat((n.theme||o.Z).feature.active,";\n\n    &:hover {\n      background-color: ").concat((n.theme||o.Z).interactive.linkSecondary,";\n    }\n  ")})))},51404:function(n,e,t){"use strict";t.d(e,{Z:function(){return V}});var r=t(77555),o=t(82684),i=t(93461),c=t(57384),u=t(19767),l=t(72454),a=t(28598);function s(n,e){var t=n.children;return(0,a.jsx)(l.HS,{ref:e,children:t})}var d=o.forwardRef(s),f=t(32063),p=t(34376),h=t(61519),v=t(57639),g=t(882),m=t(31866);var b=function(n){var e=n.size;return(0,a.jsxs)("svg",{width:e,height:e,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.86364 2.5H4.13636C3.68449 2.5 3.31818 2.94772 3.31818 3.5V7.5C3.31818 8.05228 3.68449 8.5 4.13636 8.5H9.86364C10.3155 8.5 10.6818 8.05228 10.6818 7.5V3.5C10.6818 2.94772 10.3155 2.5 9.86364 2.5ZM4.13636 1.5C3.23263 1.5 2.5 2.39543 2.5 3.5V7.5C2.5 8.60457 3.23263 9.5 4.13636 9.5H5.5V16.1667V16.5H4.13636C3.23263 16.5 2.5 17.3954 2.5 18.5V22.5C2.5 23.6046 3.23263 24.5 4.13636 24.5H9.86364C10.7674 24.5 11.5 23.6046 11.5 22.5V18.5C11.5 17.3954 10.7674 16.5 9.86364 16.5H6.5V16.1667C6.5 14.9394 7.61929 13.9444 9 13.9444H16C17.933 13.9444 19.5 12.5516 19.5 10.8333V9.5H21.8636C22.7674 9.5 23.5 8.60457 23.5 7.5V3.5C23.5 2.39543 22.7674 1.5 21.8636 1.5H16.1364C15.2326 1.5 14.5 2.39543 14.5 3.5V7.5C14.5 8.60457 15.2326 9.5 16.1364 9.5H18.5V10.8333C18.5 12.0606 17.3807 13.0556 16 13.0556H9C8.02066 13.0556 7.13526 13.4131 6.5 13.9893V9.5H9.86364C10.7674 9.5 11.5 8.60457 11.5 7.5V3.5C11.5 2.39543 10.7674 1.5 9.86364 1.5H4.13636ZM9.86364 17.5H6.5H5.5H4.13636C3.68449 17.5 3.31818 17.9477 3.31818 18.5V22.5C3.31818 23.0523 3.68449 23.5 4.13636 23.5H9.86364C10.3155 23.5 10.6818 23.0523 10.6818 22.5V18.5C10.6818 17.9477 10.3155 17.5 9.86364 17.5ZM16.1364 2.5H21.8636C22.3155 2.5 22.6818 2.94772 22.6818 3.5V7.5C22.6818 8.05228 22.3155 8.5 21.8636 8.5H16.1364C15.6845 8.5 15.3182 8.05228 15.3182 7.5V3.5C15.3182 2.94772 15.6845 2.5 16.1364 2.5Z",fill:"url(#paint0_linear_2738_141228)"}),(0,a.jsx)("defs",{children:(0,a.jsxs)("linearGradient",{id:"paint0_linear_2738_141228",x1:"2.5",y1:"13",x2:"23.5",y2:"13",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{offset:"0.28125",stopColor:"#7D55EC"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]})})]})},x=t(86673),y=t(19711),j=t(46261),w=t(10503),C=t(99994),O=t(49125),Z=3*O.iI;var H=function(n){var e=n.navigationItems,t=(0,p.useRouter)().pathname,r=(0,o.useMemo)((function(){return(e||[{Icon:w.rV,IconSelected:b,id:"pipelines",label:function(){return"Pipelines"},linkProps:{href:"/pipelines"}},{Icon:w.pd,IconSelected:h.Z,id:"pipeline-runs",label:function(){return"Pipelines runs"},linkProps:{href:"/pipeline-runs"}}]).map((function(n,e){var r=n.Icon,o=n.IconSelected,i=n.id,c=n.isSelected,u=n.label,s=n.linkProps,d=c?c(t):!!t.match(new RegExp("^/".concat(i,"[/]*"))),f=d&&o?o:r;return(0,a.jsx)(x.Z,{mt:e>=1?O.cd:0,children:(0,a.jsxs)(j.Z,{height:5*O.iI,label:u(),size:null,widthFitContent:!0,children:[d&&o&&(0,a.jsx)(g.Z,{backgroundGradient:C.yr,backgroundPanel:!0,basic:!0,borderWidth:2,linkProps:s,paddingUnits:1,children:(0,a.jsx)("div",{style:{height:Z,width:Z},children:(0,a.jsx)(f,{muted:!0,size:Z})})}),!d&&(0,a.jsx)(m.ZP,{block:!0,noHoverUnderline:!0,noPadding:!0,linkProps:s,sameColorAsText:!0,uuid:"VerticalNavigation/".concat(i),children:(0,a.jsx)(l.E7,{primary:!f,children:f?(0,a.jsx)(f,{muted:!0,size:Z}):(0,a.jsx)(y.ZP,{children:"Edit"})})})]})},"button-".concat(i))}))}),[e,t]);return(0,a.jsx)(v.Z,{children:r})},_=t(41374),k=t(3055),P=t(91427),I=t(24141);var V=function(n){var e,t=n.after,s=n.afterHidden,p=n.afterWidth,h=n.before,v=n.beforeWidth,g=n.breadcrumbs,m=n.children,b=n.headerMenuItems,x=n.navigationItems,y=n.subheaderChildren,j=n.title,w=n.uuid,C=(0,I.i)().width,O="dashboard_after_width_".concat(w),Z="dashboard_before_width_".concat(w),V=(0,o.useRef)(null),M=(0,o.useState)((0,P.U2)(O,p)),S=M[0],E=M[1],N=(0,o.useState)(!1),B=N[0],D=N[1],A=(0,o.useState)((0,P.U2)(Z,v)),z=A[0],R=A[1],T=(0,o.useState)(!1),W=T[0],F=T[1],U=(0,o.useState)(null),L=(U[0],U[1]),G=_.ZP.projects.list().data,J=null===G||void 0===G?void 0:G.projects,K=[];return g?K.push.apply(K,(0,r.Z)(g)):(null===J||void 0===J?void 0:J.length)>=1&&K.push.apply(K,[{label:function(){var n;return null===(n=J[0])||void 0===n?void 0:n.name},linkProps:{href:"/"}},{bold:!0,label:function(){return j}}]),(0,o.useEffect)((function(){null===V||void 0===V||!V.current||B||W||null===L||void 0===L||L(V.current.getBoundingClientRect().width)}),[B,S,W,z,null===V||void 0===V?void 0:V.current,L,C]),(0,o.useEffect)((function(){B||(0,P.t8)(O,S)}),[s,B,S]),(0,o.useEffect)((function(){W||(0,P.t8)(Z,z)}),[W,z]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{title:j}),(0,a.jsx)(u.Z,{breadcrumbs:K,menuItems:b,project:null===J||void 0===J?void 0:J[0],version:null===J||void 0===J||null===(e=J[0])||void 0===e?void 0:e.version}),(0,a.jsxs)(l.Nk,{children:[0!==(null===x||void 0===x?void 0:x.length)&&(0,a.jsx)(l.lm,{children:(0,a.jsx)(H,{navigationItems:x})}),(0,a.jsx)(i.Z,{flex:1,flexDirection:"column",children:(0,a.jsxs)(f.Z,{after:t,afterHeightOffset:k.Mz,afterHidden:s,afterMousedownActive:B,afterWidth:S,before:h,beforeHeightOffset:k.Mz,beforeMousedownActive:W,beforeWidth:l.k1+(h?z:0),hideAfterCompletely:!0,leftOffset:h?l.k1:null,mainContainerRef:V,setAfterMousedownActive:D,setAfterWidth:E,setBeforeMousedownActive:F,setBeforeWidth:R,children:[y&&(0,a.jsx)(d,{children:y}),m]})})]})]})}},17903:function(n,e,t){"use strict";t.d(e,{Z:function(){return C}});var r=t(82394),o=t(12691),i=t.n(o),c=t(82684),u=t(67971),l=t(10919),a=t(86673),s=t(19711),d=t(46261),f=t(9518),p=t(23831),h=t(49125),v=f.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-0"})(["contain:size;width:100%;",""],(function(n){return n.columnBorders&&"\n    border-collapse: separate;\n  "})),g=f.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-1"})(["",""],(function(n){return!n.noHover&&"\n    &:hover {\n      background: ".concat((n.theme.interactive||p.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),m=(0,f.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(n){return!n.alignTop&&"\n    vertical-align: middle;\n  "}),(function(n){return n.alignTop&&"\n    vertical-align: top;\n  "}),(function(n){return!n.noBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.compact&&"\n    padding: ".concat(h.iI/2,"px ").concat(h.iI,"px;\n  ")}),(function(n){return!n.compact&&"\n    padding: ".concat(h.iI,"px ").concat(2*h.iI,"px;\n  ")}),(function(n){return n.maxWidth&&"\n    max-width: ".concat(n.maxWidth,";\n  ")})),b=f.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-2"})([""," "," "," ",""],m,(function(n){return n.columnBorders&&"\n    border: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n    border-right: none;\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.sticky&&"\n    background-color: ".concat((n.theme||p.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    top: 0;\n\n    &:first-child {\n      left: 0;\n      z-index: 2;\n    }\n  ")})),x=f.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-3"})([""," "," "," "," "," ",""],m,(function(n){return n.columnBorders&&"\n    border-left: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.stickyFirstColumn&&"\n    background-color: ".concat((n.theme||p.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    left: 0;\n  ")}),(function(n){return n.selected&&"\n    background-color: ".concat((n.theme.interactive||p.Z.interactive).activeBorder,";\n  ")}),(function(n){return n.wrapColumns&&"\n    white-space: break-spaces;\n  "})),y=t(28598);function j(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function w(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?j(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var C=function(n){var e=n.alignTop,t=n.buildLinkProps,r=n.columnBorders,o=n.columnFlex,f=n.columnMaxWidth,p=n.columns,h=void 0===p?[]:p,m=n.compact,j=n.isSelectedRow,C=n.noBorder,O=n.noHeader,Z=n.onClickRow,H=n.rows,_=n.stickyFirstColumn,k=n.stickyHeader,P=n.uuid,I=n.wrapColumns,V=(0,c.useMemo)((function(){return o.reduce((function(n,e){return n+(e||0)}),0)}),o),M=(0,c.useCallback)((function(n){if(o[n]){var e=Math.round(o[n]/V*100);return"".concat(e,"%")}return null}),[]),S=(0,c.useMemo)((function(){return null===H||void 0===H?void 0:H.map((function(n,o){var c=null===t||void 0===t?void 0:t(o),u=n.map((function(t,i){return(0,y.jsx)(x,{alignTop:e,columnBorders:r,compact:m,last:i===n.length-1,maxWidth:null===f||void 0===f?void 0:f(i),noBorder:C,selected:null===j||void 0===j?void 0:j(o),stickyFirstColumn:_&&0===i,width:M(i),wrapColumns:I,children:t},"".concat(P,"-row-").concat(o,"-cell-").concat(i))})),a=(0,y.jsx)(g,{noHover:!(c||Z),onClick:Z?function(){return Z(o)}:null,children:u},"".concat(P,"-row-").concat(o));return c?(0,y.jsx)(i(),w(w({},c),{},{passHref:!0,children:(0,y.jsx)(l.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:a})})):a}))}),[e,t,M,f,h,m,j,C,Z,H]);return(0,y.jsxs)(v,{columnBorders:r,children:[(null===h||void 0===h?void 0:h.length)>=1&&!O&&(0,y.jsx)(g,{noHover:!0,children:h.map((function(n,e){return(0,y.jsx)(b,{columnBorders:r,compact:m,last:e===h.length-1,noBorder:C,sticky:k,children:(0,y.jsxs)(u.Z,{alignItems:"center",children:[(0,y.jsx)(s.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:n.label?n.label():n.uuid}),n.tooltipMessage&&(0,y.jsx)(a.Z,{ml:"4px",children:(0,y.jsx)(d.Z,{appearBefore:!0,label:(0,y.jsx)(s.ZP,{leftAligned:!0,children:n.tooltipMessage}),lightBackground:!0,primary:!0})})]})},"".concat(P,"-col-").concat(n.uuid,"-").concat(e))}))}),S]})}},66050:function(n,e,t){"use strict";var r;t.d(e,{V:function(){return r}}),function(n){n.CANCELLED="cancelled",n.COMPLETED="completed",n.FAILED="failed",n.INITIAL="initial",n.RUNNING="running"}(r||(r={}))},61519:function(n,e,t){"use strict";var r=t(28598);e.Z=function(n){var e=n.size;return(0,r.jsxs)("svg",{width:e,height:e,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 3H9V9H3V3ZM10 2V9H17V16H24V24H17H16H10H9H2V17V16V10V9V2H10ZM16 23V17H10V23H16ZM17 23H23V17H17V23ZM16 16V10H10V16H16ZM9 10V16H3V10H9ZM9 17V23H3V17H9Z",fill:"url(#paint0_linear_2738_140355)"}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"paint0_linear_2738_140355",x1:"2",y1:"13",x2:"24",y2:"13",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{offset:"0.28125",stopColor:"#7D55EC"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]})})]})}},92597:function(n,e,t){"use strict";t.r(e);var r=t(82394),o=t(82684),i=t(34376),c=t(51404),u=t(67971),l=t(51099),a=t(97496),s=t(55378),d=t(86673),f=t(19711),p=t(41374),h=t(47409),v=t(66050),g=t(49125),m=t(33766),b=t(24224),x=t(59e3),y=t(28598);function j(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function w(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?j(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.default=function(){var n=(0,i.useRouter)(),e=(0,x.iV)(),t=null!==e&&void 0!==e&&e.page?e.page:0,r=p.ZP.pipelines.list().data,j={_limit:25,_offset:25*t};null!==e&&void 0!==e&&e.status&&(j.status=e.status);var C=p.ZP.pipeline_runs.list(j,{refreshInterval:3e3,revalidateOnFocus:!0}),O=C.data,Z=C.mutate,H=(0,o.useMemo)((function(){return(null===r||void 0===r?void 0:r.pipelines)||[]}),[r]),_=((0,o.useMemo)((function(){return(0,b.HK)(H,(function(n){return n.uuid}))}),[H]),(0,o.useMemo)((function(){return(null===O||void 0===O?void 0:O.pipeline_runs)||[]}),[O])),k=(0,o.useMemo)((function(){return(null===O||void 0===O?void 0:O.total_count)||[]}),[O]);return(0,y.jsxs)(c.Z,{title:"Pipeline runs",uuid:"pipeline_runs/index",children:[(0,y.jsx)(d.Z,{mx:2,my:1,children:(0,y.jsxs)(u.Z,{alignItems:"center",children:[(0,y.jsx)(f.ZP,{bold:!0,default:!0,large:!0,children:"Filter runs by status:"}),(0,y.jsx)(d.Z,{mr:1}),(0,y.jsxs)(s.Z,{compact:!0,defaultColor:!0,fitContent:!0,onChange:function(e){e.preventDefault(),"all"===e.target.value?n.push("/pipeline-runs"):(0,m.u)({page:0,status:e.target.value})},paddingRight:4*g.iI,placeholder:"Select run status",value:(null===e||void 0===e?void 0:e.status)||"all",children:[(0,y.jsx)("option",{value:"all",children:"All statuses"},"all_statuses"),Object.values(v.V).map((function(n){return(0,y.jsx)("option",{value:n,children:h.D[n]},n)}))]})]})}),(0,y.jsx)(a.Z,{fetchPipelineRuns:Z,pipelineRuns:_}),(0,y.jsx)(d.Z,{p:2,children:(0,y.jsx)(l.Z,{maxPages:9,onUpdate:function(t){var r=Number(t),o=w(w({},e),{},{page:r>=0?r:0});n.push("/pipeline-runs","/pipeline-runs?".concat((0,x.uM)(o)))},page:Number(t),totalPages:Math.ceil(k/25)})})]})}},24224:function(n,e,t){"use strict";t.d(e,{CE:function(){return a},HK:function(){return l},IN:function(){return j},Od:function(){return p},Qj:function(){return m},Sm:function(){return y},YC:function(){return s},fS:function(){return v},m5:function(){return x},mp:function(){return w},mr:function(){return d},oM:function(){return h},ry:function(){return f},sE:function(){return u},tS:function(){return g},w6:function(){return b}});var r=t(82394),o=t(7715);function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){return null===n||void 0===n?void 0:n.find(e)}function l(n,e){return null===n||void 0===n?void 0:n.reduce((function(n,t){return c(c({},n),{},(0,r.Z)({},e(t),t))}),{})}function a(n,e){return null===n||void 0===n?void 0:n.reduce((function(n,t){return e(t)>e(n)?t:n}),n[0])}function s(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.ascending,i=void 0===r||r,c=t.absoluteValue,u=void 0!==c&&c,l="string"===typeof e||"number"===typeof e?function(n){return u?Math.abs((0,o.t2)(n,e)):(0,o.t2)(n,e)}:function(n){return u?Math.abs(e(n)):e(n)};return n.sort((function(n,e){var t=0;return l(n)>l(e)?t=i?1:-1:l(n)<l(e)&&(t=i?-1:1),t}))}function d(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.ascending,r=void 0===t||t;return n.sort((function(n,e){var t=0;return n[0]>e[0]?t=r?1:-1:n[0]<e[0]&&(t=r?-1:1),t}))}function f(n,e){for(var t=-1,r=n.length;1+t<r;){var o=t+(r-t>>1);e(n[o])?t=o:r=o}return r}function p(n,e){var t=n.findIndex(e);return h(n,t)}function h(n,e){return n.slice(0,e).concat(n.slice(e+1,n.length))}function v(n,e){return n.map((function(n){return String(n)})).join()===e.map((function(n){return String(n)})).join()}function g(n,e){return n>e}function m(n,e){return n<e}function b(n){return Array(n).fill(0)}function x(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=Array.from(Array(n).keys());return 0!==e&&(t=t.map((function(n){return n+e}))),t}function y(n){return n.reduce((function(n,e){return n+e}),0)}function j(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=n.reduce((function(n,e){return n+e}),0)/n.length;return Math.sqrt(n.reduce((function(n,e){return n.concat(Math.pow(e-t,2))}),[]).reduce((function(n,e){return n+e}),0)/(n.length-(e?0:1)))}function w(n){return n[Math.floor(Math.random()*n.length)]}},60710:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipeline-runs",function(){return t(92597)}])}},function(n){n.O(0,[4259,2212,7689,1374,714,4247,9898,4846,9774,2888,179],(function(){return e=60710,n(n.s=e);var e}));var e=n.O();_N_E=e}]);