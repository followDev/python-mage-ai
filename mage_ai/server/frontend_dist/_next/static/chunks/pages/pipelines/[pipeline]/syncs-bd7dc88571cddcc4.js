(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7803],{17903:function(n,e,r){"use strict";r.d(e,{Z:function(){return k}});var t=r(82394),o=r(12691),i=r.n(o),l=r(82684),c=r(67971),u=r(10919),s=r(86673),d=r(19711),a=r(46261),f=r(9518),p=r(23831),m=r(49125),v=f.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-0"})(["contain:size;width:100%;",""],(function(n){return(n.columnBorders||n.borderCollapseSeparate)&&"\n    border-collapse: separate;\n  "})),h=f.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-1"})(["",""],(function(n){return!n.noHover&&"\n    &:hover {\n      background: ".concat((n.theme.interactive||p.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),b=(0,f.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(n){return!n.alignTop&&"\n    vertical-align: middle;\n  "}),(function(n){return n.alignTop&&"\n    vertical-align: top;\n  "}),(function(n){return!n.noBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.compact&&"\n    padding: ".concat(m.iI/2,"px ").concat(m.iI,"px;\n  ")}),(function(n){return!n.compact&&"\n    padding: ".concat(m.iI,"px ").concat(2*m.iI,"px;\n  ")}),(function(n){return n.maxWidth&&"\n    max-width: ".concat(n.maxWidth,";\n  ")})),x=f.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-2"})([""," "," "," ",""],b,(function(n){return n.columnBorders&&"\n    border: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n    border-right: none;\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.sticky&&"\n    background-color: ".concat((n.theme||p.Z).background.panel,";\n    border-bottom: 1px solid ").concat((n.theme.borders||p.Z.borders).medium,";\n    z-index: 1;\n    position: sticky;\n    top: 0;\n\n    &:first-child {\n      left: 0;\n      z-index: 2;\n    }\n  ")})),j=f.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-3"})([""," "," "," "," "," ",""],b,(function(n){return n.columnBorders&&"\n    border-left: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.stickyFirstColumn&&"\n    background-color: ".concat((n.theme||p.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    left: 0;\n  ")}),(function(n){return n.selected&&"\n    background-color: ".concat((n.theme.interactive||p.Z.interactive).activeBorder,";\n  ")}),(function(n){return n.wrapColumns&&"\n    white-space: break-spaces;\n  "})),g=r(28598);function Z(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function y(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(r),!0).forEach((function(e){(0,t.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}var k=function(n){var e=n.alignTop,r=n.borderCollapseSeparate,t=n.buildLinkProps,o=n.columnBorders,f=n.columnFlex,p=n.columnMaxWidth,m=n.columns,b=void 0===m?[]:m,Z=n.compact,k=n.isSelectedRow,w=n.noBorder,I=n.noHeader,_=n.onClickRow,P=n.rows,N=n.stickyFirstColumn,O=n.stickyHeader,E=n.uuid,C=n.wrapColumns,M=(0,l.useMemo)((function(){return f.reduce((function(n,e){return n+(e||0)}),0)}),f),S=(0,l.useCallback)((function(n){if(f[n]){var e=Math.round(f[n]/M*100);return"".concat(e,"%")}return null}),[]),D=(0,l.useMemo)((function(){return null===P||void 0===P?void 0:P.map((function(n,r){var c=null===t||void 0===t?void 0:t(r),s=n.map((function(t,i){return(0,g.jsx)(j,{alignTop:e,columnBorders:o,compact:Z,last:i===n.length-1,maxWidth:null===p||void 0===p?void 0:p(i),noBorder:w,selected:null===k||void 0===k?void 0:k(r),stickyFirstColumn:N&&0===i,width:S(i),wrapColumns:C,children:t},"".concat(E,"-row-").concat(r,"-cell-").concat(i))})),d=(0,g.jsx)(h,{noHover:!(c||_),onClick:_?function(){return _(r)}:null,children:s},"".concat(E,"-row-").concat(r));return c?(0,l.createElement)(i(),y(y({},c),{},{key:"".concat(E,"-row-link-").concat(r),passHref:!0}),(0,g.jsx)(u.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:d})):d}))}),[e,t,S,p,b,Z,k,w,_,P]);return(0,g.jsxs)(v,{borderCollapseSeparate:r,columnBorders:o,children:[(null===b||void 0===b?void 0:b.length)>=1&&!I&&(0,g.jsx)(h,{noHover:!0,children:b.map((function(n,e){return(0,g.jsx)(x,{columnBorders:o,compact:Z,last:e===b.length-1,noBorder:w,sticky:O,children:(0,g.jsxs)(c.Z,{alignItems:"center",children:[(0,g.jsx)(d.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:n.label?n.label():n.uuid}),n.tooltipMessage&&(0,g.jsx)(s.Z,{ml:"4px",children:(0,g.jsx)(a.Z,{appearBefore:!0,label:(0,g.jsx)(d.ZP,{leftAligned:!0,children:n.tooltipMessage}),lightBackground:!0,primary:!0})})]})},"".concat(E,"-col-").concat(n.uuid,"-").concat(e))}))}),D]})}},66050:function(n,e,r){"use strict";var t;r.d(e,{V:function(){return t}}),function(n){n.CANCELLED="cancelled",n.COMPLETED="completed",n.FAILED="failed",n.INITIAL="initial",n.RUNNING="running"}(t||(t={}))},47409:function(n,e,r){"use strict";r.d(e,{D:function(){return l},V:function(){return i}});var t,o=r(82394),i=r(66050).V,l=(t={},(0,o.Z)(t,i.CANCELLED,"Cancelled"),(0,o.Z)(t,i.COMPLETED,"Done"),(0,o.Z)(t,i.FAILED,"Failed"),(0,o.Z)(t,i.INITIAL,"Ready"),(0,o.Z)(t,i.RUNNING,"Running"),t)},89745:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return ln}});var t=r(77837),o=r(38860),i=r.n(o),l=r(82684),c=r(76623),u=r(41788),s=r(75582),d=r(82394),a=r(93461),f=r(67971),p=r(87372),m=r(47409),v=r(86673),h=r(54283),b=r(19711),x=r(23831),j=r(10503),g=r(9518),Z=r(73942),y=r(2005),k=r(49125),w=r(31012),I=g.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-15svh8z-0"})(["border-radius:","px;margin:","px;overflow:hidden;"," "," "," "," "," "," &:hover{"," "," "," "," ","}"],Z.n_,k.cd*k.iI,(function(n){return"\n    background-color: ".concat((n.theme.background||x.Z.background).panel,";\n    border: 1px solid ").concat((n.theme.borders||x.Z.borders).dark,";\n\n    &:hover {\n      cursor: pointer;\n    }\n  ")}),(function(n){return n.selected&&n.danger&&"\n    border-color: ".concat((n.theme.accent||x.Z.accent).negative,";\n  ")}),(function(n){return n.selected&&n.primary&&"\n    border-color: ".concat((n.theme.interactive||x.Z.interactive).linkPrimary,";\n  ")}),(function(n){return n.selected&&n.default&&"\n    border-color: ".concat((n.theme.interactive||x.Z.interactive).focusBackground,";\n  ")}),(function(n){return n.selected&&n.success&&"\n    border-color: ".concat((n.theme.background||x.Z.background).success,";\n  ")}),(function(n){return n.selected&&n.warning&&"\n    border-color: ".concat((n.theme.accent||x.Z.accent).warning,";\n  ")}),(function(n){return n.danger&&"\n      border-color: ".concat((n.theme.accent||x.Z.accent).negative,";\n    ")}),(function(n){return n.primary&&"\n      border-color: ".concat((n.theme.interactive||x.Z.interactive).linkPrimary,";\n    ")}),(function(n){return n.default&&"\n      border-color: ".concat((n.theme.interactive||x.Z.interactive).focusBackground,";\n    ")}),(function(n){return n.success&&"\n      border-color: ".concat((n.theme.background||x.Z.background).success,";\n    ")}),(function(n){return n.warning&&"\n      border-color: ".concat((n.theme.accent||x.Z.accent).warning,";\n    ")})),_=(0,g.css)([""," "," "," "," ",""],(function(n){return n.danger&&"\n    background-color: ".concat((n.theme.accent||x.Z.accent).negative,";\n  ")}),(function(n){return n.primary&&"\n    background-color: ".concat((n.theme.interactive||x.Z.interactive).linkPrimary,";\n  ")}),(function(n){return n.default&&"\n    background-color: ".concat((n.theme.interactive||x.Z.interactive).defaultBackground,";\n  ")}),(function(n){return n.success&&"\n    background-color: ".concat((n.theme.background||x.Z.background).success,";\n  ")}),(function(n){return n.warning&&"\n    background-color: ".concat((n.theme.accent||x.Z.accent).warning,";\n  ")})),P=g.default.div.withConfig({displayName:"indexstyle__StatusStyle",componentId:"sc-15svh8z-1"})([""," ",";border-radius:","px;display:inline-block;font-family:",";padding:6px;"," "," "," "," "," ",""],_,w.iD,Z.D7,y.ry,(function(n){return n.danger&&"\n    color: ".concat((n.theme.content||x.Z.content).active,";\n  ")}),(function(n){return n.primary&&"\n    color: ".concat((n.theme.content||x.Z.content).active,";\n  ")}),(function(n){return(n.default||n.success)&&"\n  "}),(function(n){return n.default&&"\n    color: ".concat((n.theme.content||x.Z.content).default,";\n  ")}),(function(n){return n.success&&"\n    color: ".concat((n.theme.content||x.Z.content).inverted,";\n  ")}),(function(n){return n.warning&&"\n    color: ".concat((n.theme.content||x.Z.content).inverted,";\n  ")})),N=g.default.div.withConfig({displayName:"indexstyle__BarStyle",componentId:"sc-15svh8z-2"})([""," display:flex;height:auto;width:3px;",""],_,(function(n){return n.default&&"\n    background-color: ".concat((n.theme.interactive||x.Z.interactive).focusBackground,";\n  ")})),O=r(90211),E=r(92083),C=r.n(E),M=r(66050),S=r(24224);function D(n){var e;return Object.keys((null===n||void 0===n||null===(e=n.metrics)||void 0===e?void 0:e.blocks)||{}).sort()}function L(n){var e,r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=null,i=null,l=null,c=null,u={},d=(null===n||void 0===n?void 0:n.block_runs)||[],a=(null===n||void 0===n||null===(e=n.metrics)||void 0===e?void 0:e.blocks)||{},f=(null===n||void 0===n||null===(r=n.metrics)||void 0===r?void 0:r.pipeline)||{},p=V(n);return Object.entries(a).forEach((function(n){var e,r=(0,s.Z)(n,2),d=r[0],a=r[1];if(!t||t===d){var m,v=a||{},h=v.destinations,b=void 0===h?{records_affected:null,records_inserted:null,records_updated:null}:h,x=v.sources,j=void 0===x?{records:null}:x,g=p[d]||[];if(t&&t===d&&g.every((function(n){var e=n.status;return M.V.COMPLETED===e}))&&null===o&&(o=0),null!==f&&void 0!==f&&null!==(e=f[d])&&void 0!==e&&e.record_counts)null===o&&(o=0),o+=Number(null===f||void 0===f||null===(m=f[d])||void 0===m?void 0:m.record_counts);else null!==j&&void 0!==j&&j.records&&(null===o&&(o=0),o+=Number(j.records));null!==b&&void 0!==b&&b.records_updated?(null===l&&(l=0),l+=Number(b.records_updated),null===c&&(c=0),c+=Number(b.records_updated)):null!==b&&void 0!==b&&b.records_inserted?(null===l&&(l=0),l+=Number(b.records_inserted),null===i&&(i=0),i+=Number(b.records_inserted)):null!==b&&void 0!==b&&b.records_affected&&(null===l&&(l=0),l+=Number(b.records_affected)),["destinations","sources"].forEach((function(n){var e=a[n]||{};null!==e&&void 0!==e&&e.error&&(u[d]||(u[d]={}),u[d][n]={error:null===e||void 0===e?void 0:e.error,errors:null===e||void 0===e?void 0:e.errors,message:null===e||void 0===e?void 0:e.message})}))}})),null===d||void 0===d||d.forEach((function(n){var e=n.block_uuid,r=n.metrics,t=n.status;if(M.V.FAILED===t&&null!==r&&void 0!==r&&r.error&&e){var o=e.split(":"),i=(0,s.Z)(o,3),l=(i[0],i[1]);i[2];u[l]||(u[l]={}),u[l][""]=r.error}})),{errors:u,records:o,recordsInserted:i,recordsProcessed:l,recordsUpdated:c}}function V(n){var e=n.block_runs,r={};return null===e||void 0===e||e.forEach((function(n){var e=n.block_uuid.split(":"),t=(0,s.Z)(e,3),o=(t[0],t[1]);t[2];r[o]||(r[o]=[]),r[o].push(n)})),r}function A(n){var e=V(n),r={};return Object.entries(e).forEach((function(n){var e=(0,s.Z)(n,2),t=e[0],o=e[1],i=o.filter((function(n){var e=n.status;return M.V.COMPLETED===e})),l=i.map((function(n){var e=n.completed_at,r=n.started_at,t=C().utc(e),o=C().utc(r);return t.diff(o,"second")})),c=i.length,u=o.length;r[t]={completed:c,runtime:l.length>=1?(0,S.Sm)(l)/l.length:null,total:u}})),r}function T(n){var e=n.block_runs,r=(null===e||void 0===e?void 0:e.length)||1,t=function(n){var e=(null===n||void 0===n?void 0:n.block_runs)||[];return null===e||void 0===e?void 0:e.filter((function(n){var e=n.status;return M.V.COMPLETED===e}))}(n).length||0;return t/r}function R(n){var e=n.completed_at,r=n.block_runs,t=void 0===r?[]:r,o=n.status;if(null===t||void 0===t||!t.length)return 0;var i=C().utc();if(e)i=C().utc(e);else if([m.V.CANCELLED,m.V.FAILED].includes(o)){var l=(0,S.YC)(t,(function(n){return n.started_at}),{ascending:!1})[0];i=C().utc(l.updated_at)}var c=C().utc(n.created_at);return i.diff(c,"second")}function B(n,e){var r,t,o,i,l,c=V(n),u=A(n),s=(null===n||void 0===n?void 0:n.metrics)||{blocks:null,pipeline:null},d=s.blocks||{},a=s.pipeline||{},f=(d[e],a[e],u[e]||{completed:null,total:null}),p=f.completed,m=f.total,v=p&&m?p/m:0,h=c[e]||[],b=h.every((function(n){var e=n.status;return M.V.COMPLETED===e})),x=(0,S.YC)(h,(function(n){return n.updated_at}),{ascending:!1})[0],j=null===(r=(0,S.YC)(h,(function(n){return n.started_at}),{ascending:!0})[0])||void 0===r?void 0:r.started_at;b?t=null===(l=(0,S.YC)(h,(function(n){return n.completed_at}),{ascending:!1})[0])||void 0===l?void 0:l.completed_at:x&&(i=null===x||void 0===x?void 0:x.updated_at);var g=b?C().utc(t||i):C().utc(),Z=C().utc(j);return{completed:p,completedAt:t,done:b,progress:v,runtime:o=g.diff(Z,"second"),startedAt:j,status:null===x||void 0===x?void 0:x.status,timeText:(0,O.zf)(o),total:m,updatedAt:i}}var z=r(28598);function F(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function U(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){(0,d.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}var G=function(n){var e=n.onSelect,r=n.pipelineRun,t=n.selected,o=(r.block_runs,r.created_at),i=r.status,c=(0,l.useMemo)((function(){return(null===r||void 0===r?void 0:r.metrics)||{blocks:{},destination:null,pipeline:{},source:null}}),[r]),u=((0,l.useMemo)((function(){return c.blocks||{}}),[c]),(0,l.useMemo)((function(){return c.pipeline||{}}),[c])),d=c.destination,g=c.source,Z=(0,l.useMemo)((function(){return Object.keys(u).length}),[u]),y=(0,l.useMemo)((function(){return L(r)}),[r]),w=y.errors,_=y.records,E=y.recordsProcessed,C=(0,l.useMemo)((function(){return T(r)}),[r]),M=(0,l.useMemo)((function(){return[m.V.COMPLETED].includes(i)}),[i]),S=(0,l.useMemo)((function(){return{danger:m.V.FAILED===i,default:m.V.INITIAL===i,primary:m.V.RUNNING===i,success:M,warning:m.V.CANCELLED===i}}),[M,i]),D=(0,l.useMemo)((function(){if(r){var n=R(r);return(0,O.zf)(n)}}),[r]);return(0,z.jsx)(I,U(U({},S),{},{onClick:function(){return e(t?null:r.id)},selected:t,children:(0,z.jsxs)(f.Z,{fullHeight:!0,justifyContent:"space-between",children:[(0,z.jsx)(N,U({},S)),(0,z.jsx)(a.Z,{flex:1,flexDirection:"column",children:(0,z.jsxs)(v.Z,{ml:3,py:3,children:[(0,z.jsx)(p.Z,{bold:!0,level:5,monospace:!0,children:o}),(0,z.jsx)(v.Z,{fullWidth:!1,mt:2,children:(0,z.jsx)(P,U(U({},S),{},{children:(0,z.jsxs)(f.Z,{alignItems:"center",children:[M&&(0,z.jsx)(j.Jr,{inverted:!0,size:2*k.iI}),[m.V.INITIAL,m.V.RUNNING].includes(i)&&(0,z.jsx)(h.Z,{color:m.V.INITIAL!==i?x.Z.monotone.white:null,inverted:m.V.INITIAL===i,small:!0}),"\xa0",m.V.RUNNING===i&&(0,z.jsxs)(z.Fragment,{children:["\xa0",Math.round(100*C),"%"]}),![m.V.INITIAL,m.V.RUNNING].includes(i)&&m.D[i],m.V.INITIAL===i&&"Starting"]})}))}),Object.values(w).length>=1&&(0,z.jsx)(v.Z,{mt:1,children:Object.entries(w).map((function(n,e){var r=(0,s.Z)(n,2),t=r[0];r[1];return(0,z.jsxs)(b.ZP,{monospace:!0,muted:!0,small:!0,children:[t," stream failed"]},t)}))})]})}),(0,z.jsxs)(a.Z,{flex:1,children:[(0,z.jsx)(a.Z,{flex:1,flexDirection:"column",children:(0,z.jsxs)(v.Z,{ml:3,py:3,children:[(0,z.jsxs)(v.Z,{mb:1,children:[(0,z.jsx)(b.ZP,{bold:!0,muted:!0,small:!0,children:"Rows processed"}),(0,z.jsx)(b.ZP,{monospace:!0,children:E>=1?(0,O.x6)(E):"-"})]}),(0,z.jsxs)(v.Z,{mb:1,children:[(0,z.jsx)(b.ZP,{bold:!0,muted:!0,small:!0,children:"Rows remaining"}),(0,z.jsx)(b.ZP,{monospace:!0,children:_>=1&&_>=E?(0,O.x6)(_-E):"-"})]}),m.V.RUNNING!==i&&(0,z.jsxs)(v.Z,{mb:1,children:[(0,z.jsx)(b.ZP,{bold:!0,muted:!0,small:!0,children:"Runtime"}),(0,z.jsx)(b.ZP,{monospace:!0,children:D})]})]})}),(0,z.jsx)(a.Z,{flex:1,flexDirection:"column",children:(0,z.jsxs)(v.Z,{ml:3,py:3,children:[(0,z.jsxs)(v.Z,{mb:1,children:[(0,z.jsx)(b.ZP,{bold:!0,muted:!0,small:!0,children:"Source"}),(0,z.jsx)(b.ZP,{monospace:!0,children:g||"-"})]}),(0,z.jsxs)(v.Z,{mb:1,children:[(0,z.jsx)(b.ZP,{bold:!0,muted:!0,small:!0,children:"Destination"}),(0,z.jsx)(b.ZP,{monospace:!0,children:d||"-"})]}),(0,z.jsxs)(v.Z,{mb:1,children:[(0,z.jsx)(b.ZP,{bold:!0,muted:!0,small:!0,children:"Streams"}),(0,z.jsx)(b.ZP,{monospace:!0,children:Z>=1?(0,O.x6)(Z):"-"})]})]})})]})]})}))},H=r(89565),W=r.n(H),Y=r(34376),J=r(60328),X=r(10919),q=r(17903),K=g.default.div.withConfig({displayName:"indexstyle__BarStyle",componentId:"sc-1thr560-0"})(["display:flex;flex:1;"," "," ",""],(function(n){return n.even&&n.fill&&"\n    background-color: ".concat((n.theme.accent||x.Z.accent).cyan,";\n  ")}),(function(n){return n.even&&!n.fill&&"\n    background-color: ".concat((n.theme.accent||x.Z.accent).cyanTransparent,";\n  ")}),(function(n){return"\n    height: ".concat((n.small?1:2)*k.iI,"px;\n  ")})),Q=r(66653);var $=function(n){var e=n.onClickRow,r=n.pipelineRun,t=n.selectedStream,o=(0,Y.useRouter)(),i=(0,l.useState)(null),c=i[0],u=i[1],d=(0,l.useState)(null),a=d[0],h=d[1],x=(0,l.useMemo)((function(){return r?V(r):{}}),[r]),g=(0,l.useMemo)((function(){return r?A(r):{}}),[r]),Z=(0,l.useMemo)((function(){var n=0,e=[],r=[];if(Object.entries(g).forEach((function(t){var o=(0,s.Z)(t,2),i=(o[0],o[1]),l=i.completed,c=i.runtime,u=i.total;null===c?r.push(i):(e.push(c),n+=c*(u-l))})),0===e.length)return null;var t=(0,S.Sm)(e)/e.length;return r.forEach((function(e){var r=e.completed,o=e.total;n+=t*(o-r)})),n}),[g]),y=(0,l.useMemo)((function(){return t?g[t]:null}),[g,t]),w=(0,l.useMemo)((function(){if(t&&g){var n=g[t]||{},e=n.completed,o=n.total;if(o>=1)return e/o}else if(r)return T(r);return 0}),[y,r,t]),I=(0,l.useMemo)((function(){return(0,z.jsx)(f.Z,{children:(0,S.w6)(101).map((function(n,e){return(0,z.jsx)(K,{fill:w>0&&Math.round(100*w)>=e,even:e%2===0},e)}))})}),[w]),_=(0,l.useMemo)((function(){if(t){var n=x[t]||[],e=n.every((function(n){var e=n.status;return M.V.COMPLETED===e})),o=(0,S.YC)(n,(function(n){return n.updated_at}),{ascending:!1})[0],i=null===o||void 0===o?void 0:o.status,l=y||{},c=l.completed,u=l.runtime,s=l.total;if(e)return"Sync complete for ".concat(t);if([M.V.CANCELLED,M.V.FAILED].includes(i))return m.D[i];if(u&&s>=1){var d=Math.ceil(u*(s-c)/60);return"".concat((0,O._6)("minute",d,!0)," to completion")}return"Estimating time remaining for stream..."}if(m.V.COMPLETED===(null===r||void 0===r?void 0:r.status))return"Sync complete";if(r){if([m.V.CANCELLED,m.V.FAILED].includes(null===r||void 0===r?void 0:r.status))return m.D[null===r||void 0===r?void 0:r.status];if(m.V.INITIAL===(null===r||void 0===r?void 0:r.status))return"Initializing sync (this can take several minutes)";if(null===Z)return"Estimating time remaining...";var a=Math.ceil(Z/60);return"".concat((0,O._6)("minute",a,!0)," to completion")}return"Select a sync"}),[x,Z,y,r,t]),P=(0,l.useMemo)((function(){return r&&t?B(r,t):{completed:null,completedAt:null,done:null,progress:null,runtime:null,startedAt:null,status:null,timeText:null,total:null,updatedAt:null}}),[r,t]);(0,l.useEffect)((function(){var n;if(r){var e=R(r);u(e),n=setInterval((function(){return u((function(n){return n+1}))}),1e3)}return function(){return clearInterval(n)}}),[r]),(0,l.useEffect)((function(){var n;if(r&&t&&P){var e=null===P||void 0===P?void 0:P.runtime;h(e),n=setInterval((function(){return h((function(n){return n+1}))}),1e3)}return function(){return clearInterval(n)}}),[r,t,P]);var N=(0,l.useMemo)((function(){if(r){if(t)return null===P||void 0===P?void 0:P.timeText;var n=R(r);return(0,O.zf)(n)}}),[r,t,P]),E=(0,l.useMemo)((function(){var n=Math.floor(c%86400/3600),e=Math.floor(c%3600/60),r=Math.floor(c%60/1);return[n>=10?String(n):"0".concat(n),e>=10?String(e):"0".concat(e),r>=10?String(r):"0".concat(r)].join(":")}),[c]),C=(0,l.useMemo)((function(){var n=Math.floor(a%86400/3600),e=Math.floor(a%3600/60),r=Math.floor(a%60/1);return[n>=10?String(n):"0".concat(n),e>=10?String(e):"0".concat(e),r>=10?String(r):"0".concat(r)].join(":")}),[a]),F=(0,l.useMemo)((function(){return r?L(r):{errors:null,records:null,recordsInserted:null,recordsProcessed:null,recordsUpdated:null}}),[r]),U=F.errors,G=F.records,H=F.recordsInserted,$=F.recordsProcessed,nn=F.recordsUpdated,en=(0,l.useMemo)((function(){return r&&t?L(r,t):{errors:null,records:null,recordsInserted:null,recordsProcessed:null,recordsUpdated:null}}),[r,t]),rn=(0,l.useMemo)((function(){var n=t?null===en||void 0===en?void 0:en.records:G,e=t?null===en||void 0===en?void 0:en.recordsInserted:H,r=t?null===en||void 0===en?void 0:en.recordsProcessed:$,o=t?null===en||void 0===en?void 0:en.recordsUpdated:nn,i=[{label:"Rows fetched",value:null===n?"-":(0,O.x6)(n)}];return null===e&&null===o?i.push({label:"Rows processed",value:null===r?"-":(0,O.x6)(r)}):null!==e?i.push({label:"Rows inserted",value:(0,O.x6)(e)}):null!==o&&i.push({label:"Rows updated",value:(0,O.x6)(o)}),i.map((function(n){var e=n.label,r=n.value;return(0,z.jsxs)("div",{children:[(0,z.jsx)(b.ZP,{bold:!0,large:!0,muted:!0,children:e}),(0,z.jsx)(b.ZP,{headline:!0,children:r})]},e)}))}),[G,en,H,$,nn,N,E,status]),tn=(0,l.useMemo)((function(){if(!r)return(0,z.jsx)("div",{});var n=(null===r||void 0===r?void 0:r.metrics)||{blocks:null,pipeline:null},i=(n.blocks,n.pipeline,D(r));return(0,z.jsx)(q.Z,{columnFlex:[null,null,null,null,null,null],columns:[{uuid:"Stream"},{uuid:"Start"},{uuid:"End"},{uuid:"Time"},{uuid:"Progress"},{uuid:"Logs"}],isSelectedRow:function(n){return t&&t===i[n]},onClickRow:e,rows:i.map((function(n){var e=B(r,n),t=(e.completed,e.completedAt),i=e.done,l=e.progress,c=e.startedAt,u=e.status,s=e.timeText,d=(e.total,!!U[n]);return[(0,z.jsx)(b.ZP,{danger:d,default:!d,monospace:!0,children:n},"stream"),(0,z.jsx)(b.ZP,{default:!0,monospace:!0,children:c?c.split(".")[0]:"-"},"started_at"),(0,z.jsx)(b.ZP,{default:!0,monospace:!0,children:t?t.split(".")[0]:"-"},"completed_at"),(0,z.jsx)(b.ZP,{default:!0,children:[M.V.INITIAL,M.V.RUNNING].includes(u)?"-":s},"runtime"),(0,z.jsxs)("div",{children:[i&&(0,z.jsx)(j.Jr,{default:!0,size:2*k.iI}),!i&&(0,z.jsx)(f.Z,{children:(0,S.w6)(51).map((function(n,e){return(0,z.jsx)(K,{fill:l>0&&Math.round(50*l)>=e,even:e%2===0,small:!0},e)}))})]},"progress"),(0,z.jsx)(J.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(n){o.push("/pipelines/".concat(r.pipeline_uuid,"/logs?pipeline_run_id[]=").concat(r.id)),(0,Q.j)(n)},children:(0,z.jsx)(j.B4,{default:!0,size:2*k.iI})},"logs")]})),uuid:"{pipelineRun?.id}-streams-table"})}),[U,g,r,t]),on=(0,l.useMemo)((function(){var n,e,o,i,l,c,u,d;if(r&&t){var a=(null===r||void 0===r?void 0:r.metrics)||{blocks:null,destination:null,pipeline:null,source:null},f=null===a||void 0===a||null===(n=a.pipeline)||void 0===n||null===(e=n[t])||void 0===e||null===(o=e.bookmarks)||void 0===o?void 0:o[t],p=null===a||void 0===a||null===(i=a.blocks)||void 0===i||null===(l=i[t])||void 0===l||null===(c=l.destinations)||void 0===c||null===(u=c.state)||void 0===u||null===(d=u.bookmarks)||void 0===d?void 0:d[t];if(f||p){var m=Array.from(new Set(Object.keys(f||{}).concat(Object.keys(p||{})))).sort(),v=[];m.forEach((function(n){var e=[(0,z.jsx)(b.ZP,{bold:!0,monospace:!0,muted:!0,small:!0,children:n},n)];[f,p].forEach((function(r,t){r&&e.push((0,z.jsx)(b.ZP,{monospace:!0,small:!0,children:r[n]},"".concat(n,"-").concat(t)))})),v.push(e)}));var h=[{label:function(){return""},uuid:"column"}];return[[null===a||void 0===a?void 0:a.source,"source",f],[null===a||void 0===a?void 0:a.destination,"destination",p]].forEach((function(n){var e=(0,s.Z)(n,3),r=e[0],t=e[1];e[2]&&h.push({uuid:"".concat(r," (").concat(t,")")})})),(0,z.jsx)(q.Z,{columnFlex:[null,1,1],columns:h,rows:v,uuid:"".concat(t,"-bookmark-table")})}}}),[r,t]),ln=(0,l.useMemo)((function(){var n,e,o,i,l,c;if(r&&t){var u=(null===r||void 0===r?void 0:r.metrics)||{blocks:null,destination:null,pipeline:null,source:null},d=null===u||void 0===u||null===(n=u.blocks)||void 0===n||null===(e=n[t])||void 0===e||null===(o=e.sources)||void 0===o?void 0:o.record,a=null===u||void 0===u||null===(i=u.blocks)||void 0===i||null===(l=i[t])||void 0===l||null===(c=l.destinations)||void 0===c?void 0:c.record;if(d||a){var f=Object.keys(a||d||{}).sort(),p=[];f.forEach((function(n){var e=[(0,z.jsx)(b.ZP,{bold:!0,monospace:!0,muted:!0,small:!0,children:n},n)];[d,a].forEach((function(r,t){if(r){var o=r[n],i="object"===typeof o;e.push((0,z.jsxs)(b.ZP,{monospace:!0,small:!0,textOverflow:!0,whiteSpaceNormal:!0,wordBreak:!0,children:[i&&(0,z.jsx)("pre",{children:JSON.stringify(o,null,2)}),!i&&o]},"".concat(n,"-").concat(t)))}})),p.push(e)}));var m=[{label:function(){return""},uuid:"column"}];return[[null===u||void 0===u?void 0:u.source,"source",d],[null===u||void 0===u?void 0:u.destination,"destination",a]].forEach((function(n){var e=(0,s.Z)(n,3),r=e[0],t=e[1];e[2]&&m.push({uuid:"".concat(r," (").concat(t,")")})})),(0,z.jsx)(q.Z,{columnFlex:[null,1,1],columns:m,rows:p.map((function(n){return n.map((function(n){return(0,z.jsx)(b.ZP,{default:!0,monospace:!0,children:n},n)}))})),uuid:"".concat(t,"-bookmark-table")})}}}),[r,t]),cn=(0,l.useMemo)((function(){var n,e,o,i,l,c,u=null===r||void 0===r||null===(n=r.metrics)||void 0===n||null===(e=n.blocks)||void 0===e?void 0:e[t];return(null===u||void 0===u||null===(o=u.sources)||void 0===o||null===(i=o.block_tags)||void 0===i?void 0:i.destination_table)||(null===u||void 0===u||null===(l=u.destinations)||void 0===l||null===(c=l.block_tags)||void 0===c?void 0:c.destination_table)}),[r,t]);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(v.Z,{p:3,children:[t&&(0,z.jsx)(v.Z,{mb:3,children:(0,z.jsxs)(f.Z,{alignItems:"center",children:[(0,z.jsx)(X.Z,{block:!0,onClick:function(){return o.push("/pipelines/".concat(r.pipeline_uuid,"/syncs?pipeline_run_id=").concat(r.id))},preventDefault:!0,children:(0,z.jsxs)(f.Z,{alignItems:"center",children:[(0,z.jsx)(j.Xd,{default:!0,size:1.5*k.iI}),(0,z.jsx)(v.Z,{mr:1}),(0,z.jsx)(b.ZP,{default:!0,children:"Syncs"})]})}),(0,z.jsx)(v.Z,{mx:1,children:(0,z.jsx)(b.ZP,{default:!0,monospace:!0,children:"/"})}),(0,z.jsx)(b.ZP,{bold:!0,monospace:!0,children:t})]})}),(0,z.jsxs)(f.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,z.jsx)(v.Z,{my:1,mr:2,children:(0,z.jsx)(p.Z,{level:5,muted:!r,children:_})}),r&&(0,z.jsx)(J.Z,{small:!0,onClick:function(){return o.push("/pipelines/".concat(r.pipeline_uuid,"/logs?pipeline_run_id[]=").concat(r.id))},children:"Logs"})]}),(0,z.jsx)(v.Z,{mt:2,children:I}),r&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(v.Z,{mt:3,children:(0,z.jsxs)(f.Z,{justifyContent:"space-between",children:[(0,z.jsxs)("div",{children:[(0,z.jsx)(b.ZP,{bold:!0,large:!0,muted:!0,children:"Runtime"}),(0,z.jsxs)(b.ZP,{headline:!0,children:[t&&[M.V.INITIAL,M.V.RUNNING].includes(null===P||void 0===P?void 0:P.status)&&C,t&&![M.V.INITIAL,M.V.RUNNING].includes(null===P||void 0===P?void 0:P.status)&&(null===P||void 0===P?void 0:P.timeText),!t&&[m.V.INITIAL,m.V.RUNNING].includes(null===r||void 0===r?void 0:r.status)&&E,!t&&![m.V.INITIAL,m.V.RUNNING].includes(null===r||void 0===r?void 0:r.status)&&N]})]}),rn]})}),Object.values(U).length>=1&&(0,z.jsxs)(v.Z,{mt:3,children:[(0,z.jsx)(p.Z,{level:5,muted:!0,children:"Errors"}),Object.entries(U).map((function(n,e){var r=(0,s.Z)(n,2),o=r[0],i=r[1];return(!t||t===o)&&(0,z.jsx)(v.Z,{mt:e>=1?1:0,children:Object.entries(i).map((function(n){var e=(0,s.Z)(n,2),r=e[0],t=e[1],i=t.error,l=t.errors,c=t.message,u=Array.isArray(i)?i.join(" "):i;return(0,z.jsxs)("div",{children:[(0,z.jsx)(v.Z,{mb:c||(null===l||void 0===l?void 0:l.length)>=1?2:0,children:(0,z.jsxs)(b.ZP,{monospace:!0,preWrap:!0,textOverflow:!0,children:[o,!!r&&(0,z.jsxs)(b.ZP,{inline:!0,monospace:!0,muted:!0,children:["\xa0(",r,")"]}),": ",(0,z.jsx)(b.ZP,{default:!0,inline:!0,monospace:!0,children:u&&(0,z.jsx)(W(),{children:u})})]})}),(0,z.jsx)(b.ZP,{default:!0,monospace:!0,preWrap:!0,small:!0,children:c}),l.map((function(n){return(0,z.jsx)(b.ZP,{default:!0,monospace:!0,preWrap:!0,small:!0,children:n},n)}))]},"".concat(o,"-").concat(r))}))},o)}))]})]})]}),r&&!t&&(0,z.jsx)(v.Z,{my:3,children:tn}),r&&t&&(0,z.jsxs)(z.Fragment,{children:[cn&&(0,z.jsx)(v.Z,{my:3,children:(0,z.jsxs)(v.Z,{px:3,children:[(0,z.jsx)(p.Z,{level:5,children:"Table name"}),(0,z.jsx)(v.Z,{mt:1,children:(0,z.jsx)(b.ZP,{default:!0,monospace:!0,children:cn})})]})}),on&&(0,z.jsxs)(v.Z,{my:3,children:[(0,z.jsx)(v.Z,{px:3,children:(0,z.jsx)(p.Z,{level:5,children:"Bookmarks"})}),(0,z.jsx)(v.Z,{px:1,children:on})]}),ln&&(0,z.jsxs)(v.Z,{my:3,children:[(0,z.jsx)(v.Z,{px:3,children:(0,z.jsx)(p.Z,{level:5,children:"Sample row"})}),(0,z.jsx)(v.Z,{px:1,children:ln})]})]})]})},nn=r(55170),en=r(59920),rn=r(33766),tn=r(59e3);function on(n){var e=n.pipeline,r=e.uuid,t=nn.ZP.pipeline_runs.list({_limit:20,_offset:0,pipeline_uuid:r},{refreshInterval:5e3}),o=t.data,i=(t.mutate,(0,l.useMemo)((function(){return(null===o||void 0===o?void 0:o.pipeline_runs)||[]}),[o])),u=(0,tn.iV)(),s=(0,l.useState)(null),d=s[0],a=s[1],f=(0,l.useState)(null),p=f[0],m=f[1];(0,l.useEffect)((function(){null!==u&&void 0!==u&&u.pipeline_run_id?m(null===i||void 0===i?void 0:i.find((function(n){return n.id===Number(u.pipeline_run_id)}))):p&&m(null),null!==u&&void 0!==u&&u.stream?a(u.stream):d&&a(null)}),[i,u,p,d]);var v=(0,l.useCallback)((function(){var n=p?D(p):[];return(0,z.jsx)($,{onClickRow:function(e){var r=n[e];(0,rn.u)({stream:d===r?null:r})},pipelineRun:p,selectedStream:d})}),[p,d]),h=(0,l.useMemo)((function(){var n="/pipelines/".concat(r,"/syncs");p&&(n="".concat(n,"?pipeline_run_id=").concat(p.id));var e=[{label:function(){return"Syncs"},linkProps:d?{as:n,href:"/pipelines/[pipeline]/syncs"}:null}];return d&&e.push({label:function(){return d}}),e}),[p,d]);return(0,z.jsx)(c.Z,{breadcrumbs:h,buildSidekick:v,pageName:en.M.SYNCS,pipeline:e,title:function(n){var e=n.name;return"".concat(e," syncs")},uuid:"".concat(en.M.SYNCS,"_").concat(r),children:i.map((function(n){var e=(null===p||void 0===p?void 0:p.id)===n.id;return(0,z.jsx)(G,{onSelect:function(n){return(0,rn.u)({pipeline_run_id:n,stream:null})},pipelineRun:n,selected:e},n.id)}))})}on.getInitialProps=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.query.pipeline,n.abrupt("return",{pipeline:{uuid:r}});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();var ln=(0,u.Z)(on)},33766:function(n,e,r){"use strict";r.d(e,{u:function(){return d}});var t=r(75582),o=r(82394),i=r(34376),l=r.n(i),c=r(59e3);function u(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function s(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){(0,o.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function d(n){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.replaceParams,i=r.pushHistory,u=o?{}:(0,c.iV)();e=window.location.pathname;var d=i?l().push:l().replace,a=s(s({},u),n);Object.entries(n).forEach((function(n){var e=(0,t.Z)(n,2),r=e[0],o=e[1];"undefined"!==typeof o&&null!==o||delete a[r]}));var f=(0,c.uM)(a);f.length>=1&&(f="?".concat(f));var p="".concat(e.split("?")[0]).concat(f);return d(l().router.pathname,p,{shallow:!0})}},59416:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/syncs",function(){return r(89745)}])}},function(n){n.O(0,[77,5823,7689,9565,5170,9767,4393,1830,6623,9774,2888,179],(function(){return e=59416,n(n.s=e);var e}));var e=n.O();_N_E=e}]);