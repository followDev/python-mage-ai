(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8662],{62976:function(e,n,t){"use strict";t.d(n,{Z:function(){return N}});var r=t(82394),i=t(77555),o=t(82684),u=t(10919),l=t(12691),c=t.n(l),d=t(34376),a=t.n(d),s=t(46313),p=t(63068),f=t(44628),h=t(6508),m=t(67971),v=t(19711),g=t(23831),b=t(31969),y=function(){var e=document.createElement("div");e.setAttribute("style","width: 100px; height: 100px; overflow: scroll; position:absolute; top:-9999px;"),document.body.appendChild(e);var n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),n},x=t(2005),j=t(31012),w=t(37391),O=t(6753),k=t(49125),P=t(69345),Z=t(24224),_=t(28598);function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var H=2*k.iI+j.dN,I=20*k.iI,R=s.default.div.withConfig({displayName:"DataTable__Styles",componentId:"sc-1arr863-0"})([""," "," "," .body > div{","}.table{border-spacing:0;display:inline-block;"," "," "," "," .tr{.td.td-index-column{","}}.th{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;","}.th,.td{"," font-family:",";margin:0;","}.td{padding:","px;}&.sticky{overflow:auto;}.header{overflow:hidden;}}"],(function(e){return e.disableScrolling&&"\n    overflow: hidden;\n  "}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,"px;\n  ")}),w.w5,(function(e){return!e.noBorderBottom&&"\n      border-bottom: 1px solid ".concat((e.theme.borders||b.Z.borders).medium,";\n    ")}),(function(e){return!e.noBorderLeft&&"\n      border-left: 1px solid ".concat((e.theme.borders||b.Z.borders).medium,";\n    ")}),(function(e){return!e.noBorderRight&&"\n      border-right: 1px solid ".concat((e.theme.borders||b.Z.borders).medium,";\n    ")}),(function(e){return!e.noBorderTop&&"\n      border-top: 1px solid ".concat((e.theme.borders||b.Z.borders).medium,";\n    ")}),(function(e){return"\n          color: ".concat((e.theme.content||b.Z.content).default,";\n        ")}),(function(e){return"\n        height: ".concat(e.columnHeaderHeight||H,"px;\n      ")}),j.iD,x.ry,(function(e){return"\n        background-color: ".concat((e.theme.background||b.Z.background).table,";\n        border-bottom: 1px solid ").concat((e.theme.borders||b.Z.borders).medium,";\n        border-right: 1px solid ").concat((e.theme.borders||b.Z.borders).medium,";\n      ")}),1*k.iI);function E(e){var n=e.original,t=8.5*Math.max.apply(Math,(0,i.Z)(n.map((function(e){return(null===e||void 0===e?void 0:e.length)||0})))),r=Math.ceil(t/(I-2*k.iI));return Math.max(r,1)*j.dN+2*k.iI}function B(e){var n=e.columnHeaderHeight,t=e.columns,r=e.data,l=e.disableScrolling,d=e.height,j=e.index,w=e.invalidValues,C=e.maxHeight,R=e.numberOfIndexes,B=e.previewIndexes,N=e.renderColumnHeader,D=e.width,M=(0,o.useContext)(s.ThemeContext),T=(0,o.useRef)(null),A=(0,o.useRef)(null);(0,o.useEffect)((function(){var e=function(e){var n;null===T||void 0===T||null===(n=T.current)||void 0===n||n.scroll(e.target.scrollLeft,0)};return A&&A.current.addEventListener("scroll",e),function(){var n;null===A||void 0===A||null===(n=A.current)||void 0===n||n.removeEventListener("scroll",e)}}),[T,A]);var L=(0,o.useMemo)((function(){return j&&r&&j.length===r.length}),[r,j]),V=(0,o.useMemo)((function(){var e=[];return(0,Z.w6)(R).forEach((function(n,t){var o=8.7*String(null===r||void 0===r?void 0:r.length).length;if(L){var u=j.map((function(e){return R>=2?String(e[t]).length:String(e).length}));o=8.7*Math.max.apply(Math,(0,i.Z)(u))}e.push(o+2*k.iI)})),e}),[r,j,R,L]),F=t.map((function(e){return null===e||void 0===e?void 0:e.Header})).slice(1),W=(0,o.useMemo)((function(){return y()}),[]),q=(0,o.useMemo)((function(){var e=D-(Math.max.apply(Math,(0,i.Z)(V))+1.5*k.iI+W),n=t.length-1,r=I;return r*n<e&&(r=e/n),{width:r}}),[t,V,W,D]),z=(0,f.useTable)({columns:t,data:r,defaultColumn:q},f.useBlockLayout,h.useSticky),G=z.getTableBodyProps,U=z.getTableProps,X=z.headerGroups,J=z.prepareRow,K=z.rows,$=a().query.slug,Q=void 0===$?[]:$,Y=new Set((null===B||void 0===B?void 0:B.removedRows)||[]),ee=(0,o.useCallback)((function(e){var n=e.index,t=e.style,r=K[n];J(r);var i=r.original,l=Y.has(n);return(0,_.jsx)("div",S(S({},r.getRowProps({style:S(S({},t),{},{width:"auto"})})),{},{className:"tr",children:r.cells.map((function(e,t){var r,d=t<=R-1,a=e.getCellProps(),s=e.column.id,p=null===w||void 0===w||null===(r=w[s])||void 0===r?void 0:r.includes(n),f=S({},a.style);d&&(f.fontFamily=x.Vp,f.left=0,f.position="sticky",f.textAlign=j?"right":"center",f.width=V[t]);var h,g=i[t-R],y=F.indexOf(s);if(p&&(f.color=b.Z.interactive.dangerBorder),l&&(f.backgroundColor=b.Z.background.danger),Array.isArray(g)||"object"===typeof g)try{g=JSON.stringify(g)}catch(k){g="Error: cannot display value"}return d&&(L?(h=j[n],Array.isArray(h)&&(h=h[t])):h=e.render("Cell")),(0,o.createElement)("div",S(S({},a),{},{className:"td ".concat(d?"td-index-column":""),key:"".concat(t,"-").concat(g),style:f}),h,!d&&(0,_.jsxs)(m.Z,{justifyContent:"space-between",children:[(0,_.jsxs)(v.ZP,{danger:p,default:!0,wordBreak:!0,children:[!0===g&&"true",!1===g&&"false",(null===g||"null"===g)&&"null",!0!==g&&!1!==g&&null!==g&&"null"!==g&&g]}),p&&(0,_.jsx)(c(),{as:(0,P.o_)(O.mW,y),href:"/datasets/[...slug]",passHref:!0,children:(0,_.jsx)(u.Z,{danger:!0,children:"View all"})})]}))}))}))}),[j,w,V,R,J,K,Q]),ne=(0,o.useMemo)((function(){var e;return C?(e=(0,Z.Sm)(K.map(E)),e+=n||H):(e=d,e-=n||H),e}),[n,E,d,C,K]);return(0,_.jsx)("div",S(S({},U()),{},{className:"table sticky",style:{width:D},children:(0,_.jsxs)("div",S(S({},G()),{},{className:"body",children:[(0,_.jsx)("div",{className:"header",ref:T,children:X.map((function(e,n){return(0,o.createElement)("div",S(S({},e.getHeaderGroupProps()),{},{className:"tr",key:"".concat(e.id,"_").concat(n)}),e.headers.map((function(e,n){var t,r=n<=R-1,i=e.getHeaderProps(),u=S({},i.style);return r?(u.fontFamily=x.Vp,u.left=0,u.position="sticky",u.textAlign="center",u.width=V[n],u.minWidth=V[n]):N?t=N(e,n-R,{width:q.width}):(t=e.render("Header"),u.color=(M||g.Z).content.default,u.padding=1*k.iI,u.minWidth=q.width),(0,o.createElement)("div",S(S({},i),{},{className:"th",key:e.id,style:u,title:r?"Row number":void 0}),t)})))}))}),(0,_.jsx)(p.S_,{estimatedItemSize:H,height:ne,itemCount:null===K||void 0===K?void 0:K.length,itemSize:function(e){return E(K[e])},outerRef:A,style:{maxHeight:C,pointerEvents:l?"none":null},children:ee})]}))}))}var N=function(e){var n=e.columnHeaderHeight,t=e.columns,i=e.disableScrolling,u=e.height,l=e.index,c=e.invalidValues,d=e.maxHeight,a=e.noBorderBottom,s=e.noBorderLeft,p=e.noBorderRight,f=e.noBorderTop,h=e.previewIndexes,m=e.renderColumnHeader,v=e.rows,g=e.width,b=(0,o.useMemo)((function(){return null!==l&&void 0!==l&&l.length&&Array.isArray(l[0])?l[0].length:1}),[l]),y=(0,o.useMemo)((function(){return(0,Z.w6)(b).map((function(e,n){return{Header:(0,Z.w6)(n+1).map((function(){return" "})).join(" "),accessor:function(e,n){return n},sticky:"left"}})).concat(null===t||void 0===t?void 0:t.map((function(e){return{Header:String(e),accessor:String(e)}})))}),[t,b]);return(0,o.useMemo)((function(){return null===v||void 0===v?void 0:v.map((function(e){return e.reduce((function(e,n,i){return S(S({},e),{},(0,r.Z)({},t[i],n))}),{})}))}),[t,v]),(0,_.jsx)(R,{columnHeaderHeight:n,disableScrolling:i,height:u,maxHeight:d,noBorderBottom:a,noBorderLeft:s,noBorderRight:p,noBorderTop:f,children:(0,_.jsx)(B,{columnHeaderHeight:n,columns:y,data:v,disableScrolling:i,height:u,index:l,invalidValues:c,maxHeight:d,numberOfIndexes:b,previewIndexes:h,renderColumnHeader:m,width:g})})}},27125:function(e,n,t){"use strict";var r=t(82684),i=t(12691),o=t.n(i),u=t(34376),l=t.n(u),c=t(46313),d=t(66050),a=t(60328),s=t(16634),p=t(10919),f=t(86673),h=t(17903),m=t(19711),v=t(10503),g=t(49125),b=t(44162),y=t(24224),x=t(28598);n.Z=function(e){var n=e.blockRuns,t=e.onClickRow,i=e.pipeline,u=e.selectedRun,j=(0,r.useContext)(c.ThemeContext),w=(i||{}).uuid,O=(0,r.useMemo)((function(){return i.blocks||[]}),[i]),k=(0,r.useMemo)((function(){return(0,y.HK)(O,(function(e){return e.uuid}))}),[O]);return(0,x.jsx)(h.Z,{columnFlex:[null,1,3,2,null,null],columns:[{uuid:"Date"},{uuid:"Status"},{uuid:"Trigger"},{uuid:"Block"},{uuid:"Completed"},{uuid:"Logs"}],isSelectedRow:function(e){return n[e].id===(null===u||void 0===u?void 0:u.id)},onClickRow:t,rows:null===n||void 0===n?void 0:n.map((function(e){var n,t=e.block_uuid,r=e.completed_at,i=e.created_at,u=e.id,c=e.pipeline_schedule_id,h=e.pipeline_schedule_name,y=e.status;return[(0,x.jsx)(m.ZP,{monospace:!0,default:!0,children:i}),(0,x.jsx)(m.ZP,{danger:d.V.FAILED===y,default:d.V.CANCELLED===y,info:d.V.INITIAL===y,monospace:!0,success:d.V.COMPLETED===y,warning:d.V.RUNNING===y,children:y}),(0,x.jsx)(o(),{as:"/pipelines/".concat(w,"/triggers/").concat(c),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,x.jsx)(p.Z,{bold:!0,sameColorAsText:!0,children:h})}),(0,x.jsx)(o(),{as:"/pipelines/".concat(w,"/edit?block_uuid=").concat(t),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,x.jsxs)(p.Z,{bold:!0,sameColorAsText:!0,verticalAlignContent:!0,children:[(0,x.jsx)(s.Z,{color:(0,b.qn)(null===(n=k[t])||void 0===n?void 0:n.type,{theme:j}).accent,size:1.5*g.iI,square:!0}),(0,x.jsx)(f.Z,{mr:1}),(0,x.jsx)(m.ZP,{monospace:!0,children:t})]})}),(0,x.jsx)(m.ZP,{monospace:!0,default:!0,children:r||"-"}),(0,x.jsx)(a.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return l().push("/pipelines/".concat(w,"/logs?block_run_id[]=").concat(u))},children:(0,x.jsx)(v.B4,{default:!0,size:2*g.iI})})]})),uuid:"block-runs"})}},64155:function(e,n,t){"use strict";t.d(n,{Eh:function(){return c},ht:function(){return a},t0:function(){return d}});var r=t(46313),i=t(82386),o=t(32151),u=t(31012),l=t(49125),c=(l.iI,o.O$+3*l.iI+u.dN),d=r.default.div.withConfig({displayName:"indexstyle__SidekickContainerStyle",componentId:"sc-15ofupc-0"})(["position:relative;width:fit-content;"," ",""],(function(e){return"\n    height: calc(100vh - ".concat(i.uX,"px - ").concat(e.heightOffset,"px);\n  ")}),(function(e){return e.fullWidth&&"\n    width: 100%;\n  "})),a=r.default.div.withConfig({displayName:"indexstyle__PaddingContainerStyle",componentId:"sc-15ofupc-1"})(["padding:","px;",""],2*l.iI,(function(e){return e.noPadding&&"\n    padding: 0;\n  "}))},19395:function(e,n,t){"use strict";t.d(n,{I:function(){return c},e:function(){return d}});var r=t(82394),i=t(92083),o=t.n(i);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){var t=n.block_uuid,i=n.completed_at,u=n.started_at,c=n.status,d=null;u&&i&&(d=o()(i).valueOf()-o()(u).valueOf());return l(l({},e),{},(0,r.Z)({},t,{runtime:d,status:c}))}),{})}function d(e){return e?new Date(o()(e).valueOf()):null}},23588:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var r=t(77837),i=t(82394),o=t(38860),u=t.n(o),l=t(82684),c=t(27125),d=t(38965),a=t(41374),s=t(26304),p=t(62976),f=t(86532),h=t(67971),m=t(87372),v=t(86673),g=t(54283),b=t(19711),y=t(64155),x=t(19395),j=t(28598),w=["blockRuns","columns","height","heightOffset","loadingData","pipeline","renderColumnHeader","rows","selectedRun"];function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=t(59920);function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function C(e){var n,t=e.pipeline,r=e.pipelineRun,i=(0,l.useState)(),o=i[0],u=i[1],O=t.uuid,Z=a.ZP.pipelines.detail(O).data,C=(0,l.useMemo)((function(){return _(_({},null===Z||void 0===Z?void 0:Z.pipeline),{},{uuid:O})}),[Z,O]),S=a.ZP.pipeline_runs.detail(r.id).data,H=(0,l.useMemo)((function(){return null===S||void 0===S?void 0:S.pipeline_run}),[S]),I=a.ZP.outputs.block_runs.list(null===o||void 0===o?void 0:o.id),R=I.data,E=I.loading,B=(I.mutate,((null===R||void 0===R||null===(n=R.outputs)||void 0===n?void 0:n[0])||{}).sample_data),N=(0,l.useMemo)((function(){return null===H||void 0===H?void 0:H.block_runs}),[H]),D=((null===B||void 0===B?void 0:B.columns)||[]).slice(0,40),M=(null===B||void 0===B?void 0:B.rows)||[],T=(0,l.useMemo)((function(){return(0,j.jsx)(c.Z,{blockRuns:N,onClickRow:function(e){return u((function(n){var t=N[e];return(null===n||void 0===n?void 0:n.id)!==t.id?t:null}))},pipeline:C,selectedRun:o})}),[N,C,o]);return(0,j.jsx)(d.Z,{buildSidekick:function(e){return function(e){var n=e.blockRuns,t=e.columns,r=e.height,i=e.heightOffset,o=e.loadingData,u=e.pipeline,c=e.renderColumnHeader,d=e.rows,a=e.selectedRun,O=k({},(0,s.Z)(e,w));O.blockStatus=(0,x.I)(n);var P=(0,l.useMemo)((function(){return(0,j.jsx)(j.Fragment,{children:d&&d.length>0?(0,j.jsx)(p.Z,{columnHeaderHeight:c?y.Eh:0,columns:t,height:r-i-90,noBorderBottom:!0,noBorderLeft:!0,noBorderRight:!0,renderColumnHeader:c,rows:d}):(0,j.jsx)(v.Z,{ml:2,children:(0,j.jsx)(b.ZP,{children:"This block run has no output"})})})}),[t,r,i,c,d]);return(0,j.jsxs)(j.Fragment,{children:[!a&&(0,j.jsx)(f.Z,k(k({},O),{},{height:r,heightOffset:i||0,pipeline:u})),a&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(v.Z,{pl:2,py:3,style:{position:"fixed"},children:(0,j.jsx)(m.Z,{level:4,muted:!0,children:"Block Output"})}),(0,j.jsxs)("div",{style:{position:"relative",top:"75px"},children:[o&&(0,j.jsx)(v.Z,{mt:2,children:(0,j.jsx)(h.Z,{alignItems:"center",fullWidth:!0,justifyContent:"center",children:(0,j.jsx)(g.Z,{color:"white",large:!0})})}),!o&&P]})]})]})}(_(_({},e),{},{blockRuns:N,columns:D,loadingData:E,rows:M,selectedRun:o}))},breadcrumbs:[{label:function(){return"Runs"},linkProps:{as:"/pipelines/".concat(O,"/runs"),href:"/pipelines/[pipeline]/runs"}},{label:function(){return null===H||void 0===H?void 0:H.execution_date}}],pageName:P.M.RUNS,pipeline:C,title:function(e){var n=e.name;return"".concat(n," runs")},uuid:"".concat(P.M.RUNS,"_").concat(O,"_").concat(null===H||void 0===H?void 0:H.id),children:T})}C.getInitialProps=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query,r=t.pipeline,i=t.run,e.abrupt("return",{pipeline:{uuid:r},pipelineRun:{id:i}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var S=C},39525:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/runs/[run]",function(){return t(23588)}])}},function(e){e.O(0,[4259,2740,6674,1774,4804,3668,2125,2874,1374,6182,1404,8965,2151,5703,9774,2888,179],(function(){return n=39525,e(e.s=n);var n}));var n=e.O();_N_E=n}]);