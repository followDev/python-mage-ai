(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8450],{66757:function(e,n,t){"use strict";var r=t(19319),o=t(94178),i=t(67240),c="localStorage"in t.g&&t.g.localStorage?t.g.localStorage:r;function u(e,n){return 1===arguments.length?l(e):a(e,n)}function l(e){const n=c.getItem(e);return o(n)}function a(e,n){try{return c.setItem(e,JSON.stringify(n)),!0}catch(t){return!1}}u.set=a,u.get=l,u.remove=function(e){return c.removeItem(e)},u.clear=function(){return c.clear()},u.backend=function(e){return e&&(c=e),c},u.on=i.on,u.off=i.off,e.exports=u},94178:function(e){"use strict";e.exports=function(e){const n=function(e){try{return JSON.parse(e)}catch(n){return e}}(e);return void 0===n?null:n}},19319:function(e){"use strict";var n={};e.exports={getItem:function(e){return e in n?n[e]:null},setItem:function(e,t){return n[e]=t,!0},removeItem:function(e){return!!(e in n)&&delete n[e]},clear:function(){return n={},!0}}},67240:function(e,n,t){"use strict";var r=t(94178),o={};function i(e){e||(e=t.g.event);var n=o[e.key];n&&n.forEach((function(n){n(r(e.newValue),r(e.oldValue),e.url||e.uri)}))}e.exports={on:function(e,n){o[e]?o[e].push(n):o[e]=[n],t.g.addEventListener?t.g.addEventListener("storage",i,!1):t.g.attachEvent?t.g.attachEvent("onstorage",i):t.g.onstorage=i},off:function(e,n){var t=o[e];t.length>1?t.splice(t.indexOf(n),1):o[e]=[]}}},19395:function(e,n,t){"use strict";t.d(n,{IJ:function(){return s},Vx:function(){return f},eI:function(){return d},gU:function(){return m},tL:function(){return p},vJ:function(){return b}});var r,o,i=t(82394),c=t(92083),u=t.n(c);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){var t=n.block_uuid,r=n.completed_at,o=n.started_at,c=n.status,l=null;o&&r&&(l=u()(r).valueOf()-u()(o).valueOf());return a(a({},e),{},(0,i.Z)({},t,{runtime:l,status:c}))}),{})}function d(e){if(!e)return null;var n=new Date(u()(e).valueOf()),t=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds());return new Date(t)}function f(e){return d(e).toISOString().split(".")[0]}!function(e){e.DAY="day",e.HOUR="hour",e.MINUTE="minute",e.SECOND="second"}(o||(o={}));var p=(r={},(0,i.Z)(r,o.DAY,86400),(0,i.Z)(r,o.HOUR,3600),(0,i.Z)(r,o.MINUTE,60),(0,i.Z)(r,o.SECOND,1),r);function m(e){var n=o.SECOND,t=e;return e%86400===0?(t/=86400,n=o.DAY):e%3600===0?(t/=3600,n=o.HOUR):e%60===0&&(t/=60,n=o.MINUTE),{time:t,unit:n}}function b(e,n){return e*p[n]}},17903:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(82394),o=t(12691),i=t.n(o),c=t(82684),u=t(67971),l=t(10919),a=t(86673),s=t(19711),d=t(46261),f=t(9518),p=t(23831),m=t(49125),b=f.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-0"})(["contain:size;width:100%;",""],(function(e){return(e.columnBorders||e.borderCollapseSeparate)&&"\n    border-collapse: separate;\n  "})),h=f.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-1"})(["",""],(function(e){return!e.noHover&&"\n    &:hover {\n      background: ".concat((e.theme.interactive||p.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),v=(0,f.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(e){return!e.alignTop&&"\n    vertical-align: middle;\n  "}),(function(e){return e.alignTop&&"\n    vertical-align: top;\n  "}),(function(e){return!e.noBorder&&"\n    border-bottom: 1px solid ".concat((e.theme.borders||p.Z.borders).light,";\n  ")}),(function(e){return e.compact&&"\n    padding: ".concat(m.iI/2,"px ").concat(m.iI,"px;\n  ")}),(function(e){return!e.compact&&"\n    padding: ".concat(m.iI,"px ").concat(2*m.iI,"px;\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,";\n  ")})),g=f.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-2"})([""," "," "," ",""],v,(function(e){return e.columnBorders&&"\n    border: 1px solid ".concat((e.theme.borders||p.Z.borders).light,";\n    border-right: none;\n  ")}),(function(e){return e.columnBorders&&e.last&&"\n    border-right: 1px solid ".concat((e.theme.borders||p.Z.borders).light,";\n  ")}),(function(e){return e.sticky&&"\n    background-color: ".concat((e.theme||p.Z).background.panel,";\n    border-bottom: 1px solid ").concat((e.theme.borders||p.Z.borders).medium,";\n    z-index: 1;\n    position: sticky;\n    top: 0;\n\n    &:first-child {\n      left: 0;\n      z-index: 2;\n    }\n  ")})),O=f.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-3"})([""," "," "," "," "," ",""],v,(function(e){return e.columnBorders&&"\n    border-left: 1px solid ".concat((e.theme.borders||p.Z.borders).light,";\n  ")}),(function(e){return e.columnBorders&&e.last&&"\n    border-right: 1px solid ".concat((e.theme.borders||p.Z.borders).light,";\n  ")}),(function(e){return e.stickyFirstColumn&&"\n    background-color: ".concat((e.theme||p.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    left: 0;\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.interactive||p.Z.interactive).activeBorder,";\n  ")}),(function(e){return e.wrapColumns&&"\n    white-space: break-spaces;\n  "})),y=t(28598);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var x=function(e){var n=e.alignTop,t=e.borderCollapseSeparate,r=e.buildLinkProps,o=e.columnBorders,f=e.columnFlex,p=e.columnMaxWidth,m=e.columns,v=void 0===m?[]:m,k=e.compact,x=e.isSelectedRow,j=e.noBorder,P=e.noHeader,Z=e.onClickRow,E=e.rows,C=e.stickyFirstColumn,_=e.stickyHeader,I=e.uuid,S=e.wrapColumns,D=(0,c.useMemo)((function(){return f.reduce((function(e,n){return e+(n||0)}),0)}),f),N=(0,c.useCallback)((function(e){if(f[e]){var n=Math.round(f[e]/D*100);return"".concat(n,"%")}return null}),[]),B=(0,c.useMemo)((function(){return null===E||void 0===E?void 0:E.map((function(e,t){var u=null===r||void 0===r?void 0:r(t),a=e.map((function(r,i){return(0,y.jsx)(O,{alignTop:n,columnBorders:o,compact:k,last:i===e.length-1,maxWidth:null===p||void 0===p?void 0:p(i),noBorder:j,selected:null===x||void 0===x?void 0:x(t),stickyFirstColumn:C&&0===i,width:N(i),wrapColumns:S,children:r},"".concat(I,"-row-").concat(t,"-cell-").concat(i))})),s=(0,y.jsx)(h,{noHover:!(u||Z),onClick:Z?function(){return Z(t)}:null,children:a},"".concat(I,"-row-").concat(t));return u?(0,c.createElement)(i(),w(w({},u),{},{key:"".concat(I,"-row-link-").concat(t),passHref:!0}),(0,y.jsx)(l.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:s})):s}))}),[n,r,N,p,v,k,x,j,Z,E]);return(0,y.jsxs)(b,{borderCollapseSeparate:t,columnBorders:o,children:[(null===v||void 0===v?void 0:v.length)>=1&&!P&&(0,y.jsx)(h,{noHover:!0,children:v.map((function(e,n){return(0,y.jsx)(g,{columnBorders:o,compact:k,last:n===v.length-1,noBorder:j,sticky:_,children:(0,y.jsxs)(u.Z,{alignItems:"center",children:[(0,y.jsx)(s.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:e.label?e.label():e.uuid}),e.tooltipMessage&&(0,y.jsx)(a.Z,{ml:"4px",children:(0,y.jsx)(d.Z,{appearBefore:!0,label:(0,y.jsx)(s.ZP,{leftAligned:!0,children:e.tooltipMessage}),lightBackground:!0,primary:!0})})]})},"".concat(I,"-col-").concat(e.uuid,"-").concat(n))}))}),B]})}},43526:function(e,n,t){"use strict";t.d(n,{IB:function(){return l},VV:function(){return i},_7:function(){return c},rn:function(){return u}});var r,o=t(66050),i="datetime",c="code",u=o.V;!function(e){e.SECOND="second",e.MINUTE="minute",e.HOUR="hour",e.DAY="day",e.WEEK="week",e.MONTH="month",e.YEAR="year",e.CUSTOM="custom"}(r||(r={}));var l=[r.SECOND,r.MINUTE,r.HOUR,r.DAY,r.WEEK,r.MONTH,r.YEAR,r.CUSTOM]},66050:function(e,n,t){"use strict";var r;t.d(n,{V:function(){return r}}),function(e){e.CANCELLED="cancelled",e.COMPLETED="completed",e.FAILED="failed",e.INITIAL="initial",e.RUNNING="running"}(r||(r={}))},30206:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return D}});var r=t(77837),o=t(12757),i=t(38860),c=t.n(i),u=t(82684),l=t(83455),a=t(34376),s=t(12691),d=t.n(s),f=t(43526),p=t(60328),m=t(10919),b=t(17903),h=t(19711),v=t(10503),g=t(49125),O=t(19395),y=t(28598);var k=function(e){var n=e.models,t=e.onClickRow,r=e.pipeline,o=e.selectedRow,i=null===r||void 0===r?void 0:r.uuid;return(0,y.jsx)(b.Z,{columnFlex:[null,1,null,null,null,1,1,null],columns:[{uuid:"Status"},{uuid:"Name"},{uuid:"Type"},{uuid:"Runs"},{uuid:"Backfill"},{uuid:"Started at"},{uuid:"Completed at"},{label:function(){return""},uuid:"edit"}],isSelectedRow:function(e){return n[e].id===(null===o||void 0===o?void 0:o.id)},onClickRow:function(e){return t(n[e])},rows:n.map((function(e){var n=e.block_uuid,t=e.completed_at,r=e.end_datetime,o=e.id,c=e.name,u=e.start_datetime,l=e.started_at,a=e.status;return[(0,y.jsx)(h.ZP,{default:!0,monospace:!0,children:a||"inactive"},"status"),(0,y.jsx)(d(),{as:"/pipelines/".concat(i,"/backfills/").concat(o),href:"/pipelines/[pipeline]/backfills/[...slug]",passHref:!0,children:(0,y.jsx)(m.Z,{bold:!0,sameColorAsText:!0,children:c})},"name"),(0,y.jsx)(h.ZP,{default:!0,monospace:!0,children:n?f._7:f.VV},"type"),(0,y.jsx)(h.ZP,{default:!0,monospace:!0,children:0},"runs"),(0,y.jsxs)(h.ZP,{default:!0,monospace:!0,children:[u&&r&&(0,y.jsxs)(y.Fragment,{children:[(0,O.Vx)(u),"\xa0-\xa0",(0,O.Vx)(r)]}),!(u&&r)&&"-"]},"backfill"),(0,y.jsx)(h.ZP,{default:!0,monospace:!0,children:l?(0,O.Vx)(l):"-"},"started_at"),(0,y.jsx)(h.ZP,{default:!0,monospace:!0,children:t?(0,O.Vx)(t):"-"},"completed_at"),(0,y.jsx)(p.Z,{default:!0,iconOnly:!0,noBackground:!0,linkProps:{as:"/pipelines/".concat(i,"/backfills/").concat(o,"/edit"),href:"/pipelines/[pipeline]/backfills/[...slug]"},title:"Edit",children:(0,y.jsx)(v.I8,{default:!0,size:2*g.iI})})]})),uuid:"pipeline-runs"})},w=t(31866),x=t(76623),j=t(86673),P=t(41374),Z=t(59920),E=t(33766),C=t(96510),_=t(59e3),I=t(90211);function S(e){var n=e.pipeline,t=(0,a.useRouter)(),r=n.uuid,i=P.ZP.backfills.list({_limit:20,_offset:0,pipeline_uuid:r},{refreshInterval:6e4}),c=i.data,s=(i.mutate,(0,u.useMemo)((function(){return(null===c||void 0===c?void 0:c.backfills)||[]}),[c])),d=(0,_.iV)(),f=(0,u.useState)(null),p=f[0],m=f[1];(0,u.useEffect)((function(){null!==d&&void 0!==d&&d.backfill_id?m(null===s||void 0===s?void 0:s.find((function(e){return e.id===Number(d.backfill_id)}))):p&&m(null)}),[s,d,p]);var b=(0,u.useMemo)((function(){var e="/pipelines/".concat(r,"/backfills"),n=[{label:function(){return"Backfills"},linkProps:p?{as:e,href:"/pipelines/[pipeline]/backfills"}:null}];return p&&n.push({label:function(){return p.name}}),n}),[p]),O=(0,l.Db)(P.ZP.backfills.pipelines.useCreate(r),{onSuccess:function(e){return(0,C.wD)(e,{callback:function(e){var n=e.backfill.id;t.push("/pipelines/[pipeline]/backfills/[...slug]","/pipelines/".concat(r,"/backfills/").concat(n,"/edit"))},onErrorCallback:function(e){var n=e.error,t=(n.errors,n.message);alert(t)}})}}),S=(0,o.Z)(O,2),D=S[0],N=S[1].isLoading;return(0,y.jsxs)(x.Z,{breadcrumbs:b,pageName:Z.M.BACKFILLS,pipeline:n,title:function(e){var n=e.name;return"".concat(n," backfills")},uuid:"".concat(Z.M.BACKFILLS,"_").concat(r),children:[(0,y.jsx)(j.Z,{p:g.cd,children:(0,y.jsx)(w.ZP,{beforeElement:(0,y.jsx)(v.mm,{size:2.5*g.iI}),blackBorder:!0,inline:!0,loading:N,noHoverUnderline:!0,onClick:function(){return D({backfill:{name:(0,I.Y6)()}})},sameColorAsText:!0,uuid:"PipelineDetailPage/Backfills/add_new_backfill",children:"Create new backfill"})}),s&&0===s.length&&(0,y.jsx)(j.Z,{p:g.cd,children:(0,y.jsx)(h.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:"No backfills"})}),(null===s||void 0===s?void 0:s.length)>=1&&(0,y.jsx)(k,{models:s,onClickRow:function(e){var n=e.id;return(0,E.u)({backfill_id:n})},pipeline:n,selectedRow:p})]})}S.getInitialProps=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var D=S},33766:function(e,n,t){"use strict";t.d(n,{u:function(){return s}});var r=t(12757),o=t(82394),i=t(34376),c=t.n(i),u=t(59e3);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.replaceParams,i=t.pushHistory,l=o?{}:(0,u.iV)();n=window.location.pathname;var s=i?c().push:c().replace,d=a(a({},l),e);Object.entries(e).forEach((function(e){var n=(0,r.Z)(e,2),t=n[0],o=n[1];"undefined"!==typeof o&&null!==o||delete d[t]}));var f=(0,u.uM)(d);f.length>=1&&(f="?".concat(f));var p="".concat(n.split("?")[0]).concat(f);return s(c().router.pathname,p,{shallow:!0})}},37459:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/backfills",function(){return t(30206)}])}},function(e){e.O(0,[4259,2212,7689,1374,714,4247,7343,6623,9774,2888,179],(function(){return n=37459,e(e.s=n);var n}));var n=e.O();_N_E=n}]);