(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7803],{45838:function(n,e,t){"use strict";t.d(e,{GZ:function(){return d},Vq:function(){return s},cE:function(){return f},cl:function(){return l},kA:function(){return u}});var r=t(9518),o=t(23831),i=t(37391),c=t(49125),l=r.default.div.withConfig({displayName:"indexstyle__TableContainerStyle",componentId:"sc-1wzfyed-0"})(["position:relative;overflow:auto;"," "," ",""],i.w5,(function(n){return n.minHeight&&"\n    min-height: ".concat(n.minHeight,"px;\n  ")}),(function(n){return n.overflowVisible&&"\n    overflow: visible;\n  "})),u=r.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-1"})(["contain:size;width:100%;",""],(function(n){return(n.columnBorders||n.borderCollapseSeparate)&&"\n    border-collapse: separate;\n  "})),s=r.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-2"})([""," ",""],(function(n){return n.highlightOnHover&&"\n    &:hover {\n      background: ".concat((n.theme.interactive||o.Z.interactive).rowHoverBackground,";\n    }\n  ")}),(function(n){return!n.noHover&&"\n    &:hover {\n      background: ".concat((n.theme.interactive||o.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),a=(0,r.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(n){return!n.alignTop&&"\n    vertical-align: middle;\n  "}),(function(n){return n.alignTop&&"\n    vertical-align: top;\n  "}),(function(n){return!n.noBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||o.Z.borders).light,";\n  ")}),(function(n){return n.compact&&"\n    padding: ".concat(c.iI/2,"px ").concat(c.iI,"px;\n  ")}),(function(n){return!n.compact&&"\n    padding: ".concat(c.iI,"px ").concat(2*c.iI,"px;\n  ")}),(function(n){return n.maxWidth&&"\n    max-width: ".concat(n.maxWidth,";\n  ")})),d=r.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-3"})([""," "," "," ",""],a,(function(n){return n.columnBorders&&"\n    border: 1px solid ".concat((n.theme.borders||o.Z.borders).light,";\n    border-right: none;\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||o.Z.borders).light,";\n  ")}),(function(n){return n.sticky&&"\n    background-color: ".concat((n.theme||o.Z).background.panel,";\n    border-bottom: 1px solid ").concat((n.theme.borders||o.Z.borders).medium,";\n    z-index: 2;\n    position: sticky;\n    top: 0;\n\n    &:first-child {\n      left: 0;\n      z-index: 2;\n    }\n  ")})),f=r.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-4"})([""," "," "," "," "," "," ",""],a,(function(n){return n.rowVerticalPadding&&"\n    padding-top: ".concat(n.rowVerticalPadding,"px;\n    padding-bottom: ").concat(n.rowVerticalPadding,"px;\n  ")}),(function(n){return n.columnBorders&&"\n    border-left: 1px solid ".concat((n.theme.borders||o.Z.borders).light,";\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||o.Z.borders).light,";\n  ")}),(function(n){return n.stickyFirstColumn&&"\n    background-color: ".concat((n.theme||o.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    left: 0;\n  ")}),(function(n){return n.selected&&"\n    background-color: ".concat((n.theme.interactive||o.Z.interactive).activeBorder,";\n  ")}),(function(n){return n.wrapColumns&&"\n    white-space: break-spaces;\n  "}))},87815:function(n,e,t){"use strict";var r=t(82394),o=t(12691),i=t.n(o),c=t(82684),l=t(67971),u=t(10919),s=t(86673),a=t(19711),d=t(46261),f=t(45838),p=t(28598);function v(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function m(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?v(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.Z=function(n){var e=n.alignTop,t=n.borderCollapseSeparate,r=n.buildLinkProps,o=n.buildRowProps,v=n.columnBorders,h=n.columnFlex,b=n.columnMaxWidth,x=n.columns,g=void 0===x?[]:x,j=n.compact,Z=n.highlightRowOnHover,y=n.isSelectedRow,k=n.noBorder,w=n.noHeader,_=n.onClickRow,I=n.onDoubleClickRow,P=n.rows,O=n.rowVerticalPadding,N=n.stickyFirstColumn,E=n.stickyHeader,C=n.uuid,M=n.wrapColumns,S=(0,c.useMemo)((function(){return h.reduce((function(n,e){return n+(e||0)}),0)}),[h]),V=(0,c.useCallback)((function(n){if(h[n]){var e=Math.round(h[n]/S*100);return"".concat(e,"%")}return null}),[h,S]),D=(0,c.useMemo)((function(){return null===P||void 0===P?void 0:P.map((function(n,t){var l,s=null===r||void 0===r?void 0:r(t),a=(null===o||void 0===o?void 0:o(t))||{renderCell:null,renderRow:null},d=a.renderCell,h=a.renderRow,x=[];if(n.forEach((function(r,o){var i;d&&(i=d(r,o)),i||(i=(0,p.jsx)(f.cE,{alignTop:e,columnBorders:v,compact:j,last:o===n.length-1,maxWidth:null===b||void 0===b?void 0:b(o),noBorder:k,rowVerticalPadding:O,selected:null===y||void 0===y?void 0:y(t),stickyFirstColumn:N&&0===o,width:V(o),wrapColumns:M,children:r},"".concat(C,"-row-").concat(t,"-cell-").concat(o))),x.push(i)})),h)l=h(x);else{l=(0,p.jsx)(f.Vq,{highlightOnHover:Z,noHover:!(s||_),onClick:_?function(n){return function(n,e){1===(null===e||void 0===e?void 0:e.detail)?_(n):I&&2===(null===e||void 0===e?void 0:e.detail)&&I(n)}(t,n)}:null,children:x},"".concat(C,"-row-").concat(t))}return s?(0,c.createElement)(i(),m(m({},s),{},{key:"".concat(C,"-row-link-").concat(t),passHref:!0}),(0,p.jsx)(u.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:l})):l}))}),[e,r,V,v,b,j,o,Z,y,k,_,I,O,P,N,C,M]);return(0,p.jsxs)(f.kA,{borderCollapseSeparate:t,columnBorders:v,children:[(null===g||void 0===g?void 0:g.length)>=1&&!w&&(0,p.jsx)(f.Vq,{noHover:!0,children:g.map((function(n,e){return(0,p.jsx)(f.GZ,{columnBorders:v,compact:j,last:e===g.length-1,noBorder:k,sticky:E,children:(0,p.jsxs)(l.Z,{alignItems:"center",justifyContent:n.center?"center":"flex-start",children:[(0,p.jsx)(a.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:n.label?n.label():n.uuid}),n.tooltipMessage&&(0,p.jsx)(s.Z,{ml:"4px",children:(0,p.jsx)(d.Z,{appearBefore:!0,label:(0,p.jsx)(a.ZP,{leftAligned:!0,children:n.tooltipMessage}),lightBackground:!0,primary:!0})})]})},"".concat(C,"-col-").concat(n.uuid,"-").concat(e))}))}),D]})}},66050:function(n,e,t){"use strict";var r;t.d(e,{V:function(){return r}}),function(n){n.CANCELLED="cancelled",n.COMPLETED="completed",n.FAILED="failed",n.INITIAL="initial",n.RUNNING="running"}(r||(r={}))},47409:function(n,e,t){"use strict";t.d(e,{D:function(){return c},V:function(){return i}});var r,o=t(82394),i=t(66050).V,c=(r={},(0,o.Z)(r,i.CANCELLED,"Cancelled"),(0,o.Z)(r,i.COMPLETED,"Done"),(0,o.Z)(r,i.FAILED,"Failed"),(0,o.Z)(r,i.INITIAL,"Ready"),(0,o.Z)(r,i.RUNNING,"Running"),r)},89745:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return cn}});var r=t(77837),o=t(38860),i=t.n(o),c=t(82684),l=t(2626),u=t(41788),s=t(75582),a=t(82394),d=t(93461),f=t(67971),p=t(87372),v=t(47409),m=t(86673),h=t(54283),b=t(19711),x=t(23831),g=t(10503),j=t(9518),Z=t(73942),y=t(2005),k=t(49125),w=t(31012),_=j.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-15svh8z-0"})(["border-radius:","px;margin:","px;overflow:hidden;"," "," "," "," "," "," &:hover{"," "," "," "," ","}"],Z.n_,k.cd*k.iI,(function(n){return"\n    background-color: ".concat((n.theme.background||x.Z.background).panel,";\n    border: 1px solid ").concat((n.theme.borders||x.Z.borders).dark,";\n\n    &:hover {\n      cursor: pointer;\n    }\n  ")}),(function(n){return n.selected&&n.danger&&"\n    border-color: ".concat((n.theme.accent||x.Z.accent).negative,";\n  ")}),(function(n){return n.selected&&n.primary&&"\n    border-color: ".concat((n.theme.interactive||x.Z.interactive).linkPrimary,";\n  ")}),(function(n){return n.selected&&n.default&&"\n    border-color: ".concat((n.theme.interactive||x.Z.interactive).focusBackground,";\n  ")}),(function(n){return n.selected&&n.success&&"\n    border-color: ".concat((n.theme.background||x.Z.background).success,";\n  ")}),(function(n){return n.selected&&n.warning&&"\n    border-color: ".concat((n.theme.accent||x.Z.accent).warning,";\n  ")}),(function(n){return n.danger&&"\n      border-color: ".concat((n.theme.accent||x.Z.accent).negative,";\n    ")}),(function(n){return n.primary&&"\n      border-color: ".concat((n.theme.interactive||x.Z.interactive).linkPrimary,";\n    ")}),(function(n){return n.default&&"\n      border-color: ".concat((n.theme.interactive||x.Z.interactive).focusBackground,";\n    ")}),(function(n){return n.success&&"\n      border-color: ".concat((n.theme.background||x.Z.background).success,";\n    ")}),(function(n){return n.warning&&"\n      border-color: ".concat((n.theme.accent||x.Z.accent).warning,";\n    ")})),I=(0,j.css)([""," "," "," "," ",""],(function(n){return n.danger&&"\n    background-color: ".concat((n.theme.accent||x.Z.accent).negative,";\n  ")}),(function(n){return n.primary&&"\n    background-color: ".concat((n.theme.interactive||x.Z.interactive).linkPrimary,";\n  ")}),(function(n){return n.default&&"\n    background-color: ".concat((n.theme.interactive||x.Z.interactive).defaultBackground,";\n  ")}),(function(n){return n.success&&"\n    background-color: ".concat((n.theme.background||x.Z.background).success,";\n  ")}),(function(n){return n.warning&&"\n    background-color: ".concat((n.theme.accent||x.Z.accent).warning,";\n  ")})),P=j.default.div.withConfig({displayName:"indexstyle__StatusStyle",componentId:"sc-15svh8z-1"})([""," ",";border-radius:","px;display:inline-block;font-family:",";padding:6px;"," "," "," "," "," ",""],I,w.iD,Z.D7,y.ry,(function(n){return n.danger&&"\n    color: ".concat((n.theme.content||x.Z.content).active,";\n  ")}),(function(n){return n.primary&&"\n    color: ".concat((n.theme.content||x.Z.content).active,";\n  ")}),(function(n){return(n.default||n.success)&&"\n  "}),(function(n){return n.default&&"\n    color: ".concat((n.theme.content||x.Z.content).default,";\n  ")}),(function(n){return n.success&&"\n    color: ".concat((n.theme.content||x.Z.content).inverted,";\n  ")}),(function(n){return n.warning&&"\n    color: ".concat((n.theme.content||x.Z.content).inverted,";\n  ")})),O=j.default.div.withConfig({displayName:"indexstyle__BarStyle",componentId:"sc-15svh8z-2"})([""," display:flex;height:auto;width:3px;",""],I,(function(n){return n.default&&"\n    background-color: ".concat((n.theme.interactive||x.Z.interactive).focusBackground,";\n  ")})),N=t(90211),E=t(92083),C=t.n(E),M=t(66050),S=t(24224);function V(n){var e;return Object.keys((null===n||void 0===n||null===(e=n.metrics)||void 0===e?void 0:e.blocks)||{}).sort()}function D(n){var e,t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=null,i=null,c=null,l=null,u={},a=(null===n||void 0===n?void 0:n.block_runs)||[],d=(null===n||void 0===n||null===(e=n.metrics)||void 0===e?void 0:e.blocks)||{},f=(null===n||void 0===n||null===(t=n.metrics)||void 0===t?void 0:t.pipeline)||{},p=A(n);return Object.entries(d).forEach((function(n){var e,t=(0,s.Z)(n,2),a=t[0],d=t[1];if(!r||r===a){var v,m=d||{},h=m.destinations,b=void 0===h?{records_affected:null,records_inserted:null,records_updated:null}:h,x=m.sources,g=void 0===x?{records:null}:x,j=p[a]||[];if(r&&r===a&&j.every((function(n){var e=n.status;return M.V.COMPLETED===e}))&&null===o&&(o=0),null!==f&&void 0!==f&&null!==(e=f[a])&&void 0!==e&&e.record_counts)null===o&&(o=0),o+=Number(null===f||void 0===f||null===(v=f[a])||void 0===v?void 0:v.record_counts);else null!==g&&void 0!==g&&g.records&&(null===o&&(o=0),o+=Number(g.records));null!==b&&void 0!==b&&b.records_updated?(null===c&&(c=0),c+=Number(b.records_updated),null===l&&(l=0),l+=Number(b.records_updated)):null!==b&&void 0!==b&&b.records_inserted?(null===c&&(c=0),c+=Number(b.records_inserted),null===i&&(i=0),i+=Number(b.records_inserted)):null!==b&&void 0!==b&&b.records_affected&&(null===c&&(c=0),c+=Number(b.records_affected)),["destinations","sources"].forEach((function(n){var e=d[n]||{};null!==e&&void 0!==e&&e.error&&(u[a]||(u[a]={}),u[a][n]={error:null===e||void 0===e?void 0:e.error,errors:null===e||void 0===e?void 0:e.errors,message:null===e||void 0===e?void 0:e.message})}))}})),null===a||void 0===a||a.forEach((function(n){var e=n.block_uuid,t=n.metrics,r=n.status;if(M.V.FAILED===r&&null!==t&&void 0!==t&&t.error&&e){var o=e.split(":"),i=(0,s.Z)(o,3),c=(i[0],i[1]);i[2];u[c]||(u[c]={}),u[c][""]=t.error}})),{errors:u,records:o,recordsInserted:i,recordsProcessed:c,recordsUpdated:l}}function A(n){var e=n.block_runs,t={};return null===e||void 0===e||e.forEach((function(n){var e=n.block_uuid.split(":"),r=(0,s.Z)(e,3),o=(r[0],r[1]);r[2];t[o]||(t[o]=[]),t[o].push(n)})),t}function L(n){var e=A(n),t={};return Object.entries(e).forEach((function(n){var e=(0,s.Z)(n,2),r=e[0],o=e[1],i=o.filter((function(n){var e=n.status;return M.V.COMPLETED===e})),c=i.map((function(n){var e=n.completed_at,t=n.started_at,r=C().utc(e),o=C().utc(t);return r.diff(o,"second")})),l=i.length,u=o.length;t[r]={completed:l,runtime:c.length>=1?(0,S.Sm)(c)/c.length:null,total:u}})),t}function T(n){var e=n.block_runs,t=(null===e||void 0===e?void 0:e.length)||1,r=function(n){var e=(null===n||void 0===n?void 0:n.block_runs)||[];return null===e||void 0===e?void 0:e.filter((function(n){var e=n.status;return M.V.COMPLETED===e}))}(n).length||0;return r/t}function R(n){var e=n.completed_at,t=n.block_runs,r=void 0===t?[]:t,o=n.status;if(null===r||void 0===r||!r.length)return 0;var i=C().utc();if(e)i=C().utc(e);else if([v.V.CANCELLED,v.V.FAILED].includes(o)){var c=(0,S.YC)(r,(function(n){return n.started_at}),{ascending:!1})[0];i=C().utc(c.updated_at)}var l=C().utc(n.created_at);return i.diff(l,"second")}function B(n,e){var t,r,o,i,c,l=A(n),u=L(n),s=(null===n||void 0===n?void 0:n.metrics)||{blocks:null,pipeline:null},a=s.blocks||{},d=s.pipeline||{},f=(a[e],d[e],u[e]||{completed:null,total:null}),p=f.completed,v=f.total,m=p&&v?p/v:0,h=l[e]||[],b=h.every((function(n){var e=n.status;return M.V.COMPLETED===e})),x=(0,S.YC)(h,(function(n){return n.updated_at}),{ascending:!1})[0],g=null===(t=(0,S.YC)(h,(function(n){return n.started_at}),{ascending:!0})[0])||void 0===t?void 0:t.started_at;b?r=null===(c=(0,S.YC)(h,(function(n){return n.completed_at}),{ascending:!1})[0])||void 0===c?void 0:c.completed_at:x&&(i=null===x||void 0===x?void 0:x.updated_at);var j=b?C().utc(r||i):C().utc(),Z=C().utc(g);return{completed:p,completedAt:r,done:b,progress:m,runtime:o=j.diff(Z,"second"),startedAt:g,status:null===x||void 0===x?void 0:x.status,timeText:(0,N.zf)(o),total:v,updatedAt:i}}var z=t(28598);function F(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function U(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?F(Object(t),!0).forEach((function(e){(0,a.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var H=function(n){var e=n.onSelect,t=n.pipelineRun,r=n.selected,o=(t.block_runs,t.created_at),i=t.status,l=(0,c.useMemo)((function(){return(null===t||void 0===t?void 0:t.metrics)||{blocks:{},destination:null,pipeline:{},source:null}}),[t]),u=((0,c.useMemo)((function(){return l.blocks||{}}),[l]),(0,c.useMemo)((function(){return l.pipeline||{}}),[l])),a=l.destination,j=l.source,Z=(0,c.useMemo)((function(){return Object.keys(u).length}),[u]),y=(0,c.useMemo)((function(){return D(t)}),[t]),w=y.errors,I=y.records,E=y.recordsProcessed,C=(0,c.useMemo)((function(){return T(t)}),[t]),M=(0,c.useMemo)((function(){return[v.V.COMPLETED].includes(i)}),[i]),S=(0,c.useMemo)((function(){return{danger:v.V.FAILED===i,default:v.V.INITIAL===i,primary:v.V.RUNNING===i,success:M,warning:v.V.CANCELLED===i}}),[M,i]),V=(0,c.useMemo)((function(){if(t){var n=R(t);return(0,N.zf)(n)}}),[t]);return(0,z.jsx)(_,U(U({},S),{},{onClick:function(){return e(r?null:t.id)},selected:r,children:(0,z.jsxs)(f.Z,{fullHeight:!0,justifyContent:"space-between",children:[(0,z.jsx)(O,U({},S)),(0,z.jsx)(d.Z,{flex:1,flexDirection:"column",children:(0,z.jsxs)(m.Z,{ml:3,py:3,children:[(0,z.jsx)(p.Z,{bold:!0,level:5,monospace:!0,children:o}),(0,z.jsx)(m.Z,{fullWidth:!1,mt:2,children:(0,z.jsx)(P,U(U({},S),{},{children:(0,z.jsxs)(f.Z,{alignItems:"center",children:[M&&(0,z.jsx)(g.Jr,{inverted:!0,size:2*k.iI}),[v.V.INITIAL,v.V.RUNNING].includes(i)&&(0,z.jsx)(h.Z,{color:v.V.INITIAL!==i?x.Z.monotone.white:null,inverted:v.V.INITIAL===i,small:!0}),"\xa0",v.V.RUNNING===i&&(0,z.jsxs)(z.Fragment,{children:["\xa0",Math.round(100*C),"%"]}),![v.V.INITIAL,v.V.RUNNING].includes(i)&&v.D[i],v.V.INITIAL===i&&"Starting"]})}))}),Object.values(w).length>=1&&(0,z.jsx)(m.Z,{mt:1,children:Object.entries(w).map((function(n,e){var t=(0,s.Z)(n,2),r=t[0];t[1];return(0,z.jsxs)(b.ZP,{monospace:!0,muted:!0,small:!0,children:[r," stream failed"]},r)}))})]})}),(0,z.jsxs)(d.Z,{flex:1,children:[(0,z.jsx)(d.Z,{flex:1,flexDirection:"column",children:(0,z.jsxs)(m.Z,{ml:3,py:3,children:[(0,z.jsxs)(m.Z,{mb:1,children:[(0,z.jsx)(b.ZP,{bold:!0,muted:!0,small:!0,children:"Rows processed"}),(0,z.jsx)(b.ZP,{monospace:!0,children:E>=1?(0,N.x6)(E):"-"})]}),(0,z.jsxs)(m.Z,{mb:1,children:[(0,z.jsx)(b.ZP,{bold:!0,muted:!0,small:!0,children:"Rows remaining"}),(0,z.jsx)(b.ZP,{monospace:!0,children:I>=1&&I>=E?(0,N.x6)(I-E):"-"})]}),v.V.RUNNING!==i&&(0,z.jsxs)(m.Z,{mb:1,children:[(0,z.jsx)(b.ZP,{bold:!0,muted:!0,small:!0,children:"Runtime"}),(0,z.jsx)(b.ZP,{monospace:!0,children:V})]})]})}),(0,z.jsx)(d.Z,{flex:1,flexDirection:"column",children:(0,z.jsxs)(m.Z,{ml:3,py:3,children:[(0,z.jsxs)(m.Z,{mb:1,children:[(0,z.jsx)(b.ZP,{bold:!0,muted:!0,small:!0,children:"Source"}),(0,z.jsx)(b.ZP,{monospace:!0,children:j||"-"})]}),(0,z.jsxs)(m.Z,{mb:1,children:[(0,z.jsx)(b.ZP,{bold:!0,muted:!0,small:!0,children:"Destination"}),(0,z.jsx)(b.ZP,{monospace:!0,children:a||"-"})]}),(0,z.jsxs)(m.Z,{mb:1,children:[(0,z.jsx)(b.ZP,{bold:!0,muted:!0,small:!0,children:"Streams"}),(0,z.jsx)(b.ZP,{monospace:!0,children:Z>=1?(0,N.x6)(Z):"-"})]})]})})]})]})}))},G=t(89565),W=t.n(G),Y=t(34376),q=t(60328),J=t(10919),X=t(87815),K=j.default.div.withConfig({displayName:"indexstyle__BarStyle",componentId:"sc-1thr560-0"})(["display:flex;flex:1;"," "," ",""],(function(n){return n.even&&n.fill&&"\n    background-color: ".concat((n.theme.accent||x.Z.accent).cyan,";\n  ")}),(function(n){return n.even&&!n.fill&&"\n    background-color: ".concat((n.theme.accent||x.Z.accent).cyanTransparent,";\n  ")}),(function(n){return"\n    height: ".concat((n.small?1:2)*k.iI,"px;\n  ")})),Q=t(66653);var $=function(n){var e=n.onClickRow,t=n.pipelineRun,r=n.selectedStream,o=(0,Y.useRouter)(),i=(0,c.useState)(null),l=i[0],u=i[1],a=(0,c.useState)(null),d=a[0],h=a[1],x=(0,c.useMemo)((function(){return t?A(t):{}}),[t]),j=(0,c.useMemo)((function(){return t?L(t):{}}),[t]),Z=(0,c.useMemo)((function(){var n=0,e=[],t=[];if(Object.entries(j).forEach((function(r){var o=(0,s.Z)(r,2),i=(o[0],o[1]),c=i.completed,l=i.runtime,u=i.total;null===l?t.push(i):(e.push(l),n+=l*(u-c))})),0===e.length)return null;var r=(0,S.Sm)(e)/e.length;return t.forEach((function(e){var t=e.completed,o=e.total;n+=r*(o-t)})),n}),[j]),y=(0,c.useMemo)((function(){return r?j[r]:null}),[j,r]),w=(0,c.useMemo)((function(){if(r&&j){var n=j[r]||{},e=n.completed,o=n.total;if(o>=1)return e/o}else if(t)return T(t);return 0}),[y,t,r]),_=(0,c.useMemo)((function(){return(0,z.jsx)(f.Z,{children:(0,S.w6)(101).map((function(n,e){return(0,z.jsx)(K,{even:e%2===0,fill:w>0&&Math.round(100*w)>=e},e)}))})}),[w]),I=(0,c.useMemo)((function(){if(r){var n=x[r]||[],e=n.every((function(n){var e=n.status;return M.V.COMPLETED===e})),o=(0,S.YC)(n,(function(n){return n.updated_at}),{ascending:!1})[0],i=null===o||void 0===o?void 0:o.status,c=y||{},l=c.completed,u=c.runtime,s=c.total;if(e)return"Sync complete for ".concat(r);if([M.V.CANCELLED,M.V.FAILED].includes(i))return v.D[i];if(u&&s>=1){var a=Math.ceil(u*(s-l)/60);return"".concat((0,N._6)("minute",a,!0)," to completion")}return"Estimating time remaining for stream..."}if(v.V.COMPLETED===(null===t||void 0===t?void 0:t.status))return"Sync complete";if(t){if([v.V.CANCELLED,v.V.FAILED].includes(null===t||void 0===t?void 0:t.status))return v.D[null===t||void 0===t?void 0:t.status];if(v.V.INITIAL===(null===t||void 0===t?void 0:t.status))return"Initializing sync (this can take several minutes)";if(null===Z)return"Estimating time remaining...";var d=Math.ceil(Z/60);return"".concat((0,N._6)("minute",d,!0)," to completion")}return"Select a sync"}),[x,Z,y,t,r]),P=(0,c.useMemo)((function(){return t&&r?B(t,r):{completed:null,completedAt:null,done:null,progress:null,runtime:null,startedAt:null,status:null,timeText:null,total:null,updatedAt:null}}),[t,r]);(0,c.useEffect)((function(){var n;if(t){var e=R(t);u(e),n=setInterval((function(){return u((function(n){return n+1}))}),1e3)}return function(){return clearInterval(n)}}),[t]),(0,c.useEffect)((function(){var n;if(t&&r&&P){var e=(null===P||void 0===P?void 0:P.runtime)||0;h(e),n=setInterval((function(){return h((function(n){return n+1}))}),1e3)}return function(){return clearInterval(n)}}),[t,r,P]);var O=(0,c.useMemo)((function(){if(t){if(r)return null===P||void 0===P?void 0:P.timeText;var n=R(t);return(0,N.zf)(n)}}),[t,r,P]),E=(0,c.useMemo)((function(){var n=Math.floor(l%86400/3600),e=Math.floor(l%3600/60),t=Math.floor(l%60/1);return[n>=10?String(n):"0".concat(n),e>=10?String(e):"0".concat(e),t>=10?String(t):"0".concat(t)].join(":")}),[l]),C=(0,c.useMemo)((function(){var n=Math.floor(d%86400/3600),e=Math.floor(d%3600/60),t=Math.floor(d%60/1);return[n>=10?String(n):"0".concat(n),e>=10?String(e):"0".concat(e),t>=10?String(t):"0".concat(t)].join(":")}),[d]),F=(0,c.useMemo)((function(){return t?D(t):{errors:null,records:null,recordsInserted:null,recordsProcessed:null,recordsUpdated:null}}),[t]),U=F.errors,H=F.records,G=F.recordsInserted,$=F.recordsProcessed,nn=F.recordsUpdated,en=(0,c.useMemo)((function(){return t&&r?D(t,r):{errors:null,records:null,recordsInserted:null,recordsProcessed:null,recordsUpdated:null}}),[t,r]),tn=(0,c.useMemo)((function(){var n=r?null===en||void 0===en?void 0:en.records:H,e=r?null===en||void 0===en?void 0:en.recordsInserted:G,t=r?null===en||void 0===en?void 0:en.recordsProcessed:$,o=r?null===en||void 0===en?void 0:en.recordsUpdated:nn,i=[{label:"Rows fetched",value:null===n?"-":(0,N.x6)(n)}];return null===e&&null===o?i.push({label:"Rows processed",value:null===t?"-":(0,N.x6)(t)}):null!==e?i.push({label:"Rows inserted",value:(0,N.x6)(e)}):null!==o&&i.push({label:"Rows updated",value:(0,N.x6)(o)}),i.map((function(n){var e=n.label,t=n.value;return(0,z.jsxs)("div",{children:[(0,z.jsx)(b.ZP,{bold:!0,large:!0,muted:!0,children:e}),(0,z.jsx)(b.ZP,{headline:!0,children:t})]},e)}))}),[H,en,G,$,nn,O,E,status]),rn=(0,c.useMemo)((function(){if(!t)return(0,z.jsx)("div",{});var n=V(t);return(0,z.jsx)(X.Z,{columnFlex:[null,null,null,null,null,null],columns:[{uuid:"Stream"},{uuid:"Start"},{uuid:"End"},{uuid:"Time"},{uuid:"Progress"},{uuid:"Logs"}],isSelectedRow:function(e){return r&&r===n[e]},onClickRow:e,rows:n.map((function(n){var e=B(t,n),r=(e.completed,e.completedAt),i=e.done,c=e.progress,l=e.startedAt,u=e.status,s=e.timeText,a=(e.total,!!U[n]);return[(0,z.jsx)(b.ZP,{danger:a,default:!a,monospace:!0,children:n},"stream"),(0,z.jsx)(b.ZP,{default:!0,monospace:!0,children:l?l.split(".")[0]:"-"},"started_at"),(0,z.jsx)(b.ZP,{default:!0,monospace:!0,children:r?r.split(".")[0]:"-"},"completed_at"),(0,z.jsx)(b.ZP,{default:!0,children:[M.V.INITIAL,M.V.RUNNING].includes(u)?"-":s},"runtime"),(0,z.jsxs)("div",{children:[i&&(0,z.jsx)(g.Jr,{default:!0,size:2*k.iI}),!i&&(0,z.jsx)(f.Z,{children:(0,S.w6)(51).map((function(n,e){return(0,z.jsx)(K,{fill:c>0&&Math.round(50*c)>=e,even:e%2===0,small:!0},e)}))})]},"progress"),(0,z.jsx)(q.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(n){o.push("/pipelines/".concat(t.pipeline_uuid,"/logs?pipeline_run_id[]=").concat(t.id)),(0,Q.j)(n)},children:(0,z.jsx)(g.B4,{default:!0,size:2*k.iI})},"logs")]})),uuid:"".concat(null===t||void 0===t?void 0:t.id,"-streams-table")})}),[U,j,t,r]),on=(0,c.useMemo)((function(){var n,e,o,i,c,l,u,a;if(t&&r){var d=(null===t||void 0===t?void 0:t.metrics)||{blocks:null,destination:null,pipeline:null,source:null},f=null===d||void 0===d||null===(n=d.pipeline)||void 0===n||null===(e=n[r])||void 0===e||null===(o=e.bookmarks)||void 0===o?void 0:o[r],p=null===d||void 0===d||null===(i=d.blocks)||void 0===i||null===(c=i[r])||void 0===c||null===(l=c.destinations)||void 0===l||null===(u=l.state)||void 0===u||null===(a=u.bookmarks)||void 0===a?void 0:a[r];if(f||p){var v=Array.from(new Set(Object.keys(f||{}).concat(Object.keys(p||{})))).sort(),m=[];v.forEach((function(n){var e=[(0,z.jsx)(b.ZP,{bold:!0,monospace:!0,muted:!0,small:!0,children:n},n)];[f,p].forEach((function(t,r){t&&e.push((0,z.jsx)(b.ZP,{monospace:!0,small:!0,children:t[n]},"".concat(n,"-").concat(r)))})),m.push(e)}));var h=[{label:function(){return""},uuid:"column"}];return[[null===d||void 0===d?void 0:d.source,"source",f],[null===d||void 0===d?void 0:d.destination,"destination",p]].forEach((function(n){var e=(0,s.Z)(n,3),t=e[0],r=e[1];e[2]&&h.push({uuid:"".concat(t," (").concat(r,")")})})),(0,z.jsx)(X.Z,{columnFlex:[null,1,1],columns:h,rows:m,uuid:"".concat(r,"-bookmark-table")})}}}),[t,r]),cn=(0,c.useMemo)((function(){var n,e,o,i,c,l;if(t&&r){var u=(null===t||void 0===t?void 0:t.metrics)||{blocks:null,destination:null,pipeline:null,source:null},a=null===u||void 0===u||null===(n=u.blocks)||void 0===n||null===(e=n[r])||void 0===e||null===(o=e.sources)||void 0===o?void 0:o.record,d=null===u||void 0===u||null===(i=u.blocks)||void 0===i||null===(c=i[r])||void 0===c||null===(l=c.destinations)||void 0===l?void 0:l.record;if(a||d){var f=Object.keys(d||a||{}).sort(),p=[];f.forEach((function(n){var e=[(0,z.jsx)(b.ZP,{bold:!0,monospace:!0,muted:!0,small:!0,children:n},n)];[a,d].forEach((function(t,r){if(t){var o=t[n],i="object"===typeof o;e.push((0,z.jsxs)(b.ZP,{monospace:!0,small:!0,textOverflow:!0,whiteSpaceNormal:!0,wordBreak:!0,children:[i&&(0,z.jsx)("pre",{children:JSON.stringify(o,null,2)}),!i&&o]},"".concat(n,"-").concat(r)))}})),p.push(e)}));var v=[{label:function(){return""},uuid:"column"}];return[[null===u||void 0===u?void 0:u.source,"source",a],[null===u||void 0===u?void 0:u.destination,"destination",d]].forEach((function(n){var e=(0,s.Z)(n,3),t=e[0],r=e[1];e[2]&&v.push({uuid:"".concat(t," (").concat(r,")")})})),(0,z.jsx)(X.Z,{columnFlex:[null,1,1],columns:v,rows:p.map((function(n){return n.map((function(n){return(0,z.jsx)(b.ZP,{default:!0,monospace:!0,children:n},n)}))})),uuid:"".concat(r,"-bookmark-table")})}}}),[t,r]),ln=(0,c.useMemo)((function(){var n,e,o,i,c,l,u=null===t||void 0===t||null===(n=t.metrics)||void 0===n||null===(e=n.blocks)||void 0===e?void 0:e[r];return(null===u||void 0===u||null===(o=u.sources)||void 0===o||null===(i=o.block_tags)||void 0===i?void 0:i.destination_table)||(null===u||void 0===u||null===(c=u.destinations)||void 0===c||null===(l=c.block_tags)||void 0===l?void 0:l.destination_table)}),[t,r]);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(m.Z,{p:3,children:[r&&(0,z.jsx)(m.Z,{mb:3,children:(0,z.jsxs)(f.Z,{alignItems:"center",children:[(0,z.jsx)(J.Z,{block:!0,onClick:function(){return o.push("/pipelines/".concat(t.pipeline_uuid,"/syncs?pipeline_run_id=").concat(t.id))},preventDefault:!0,children:(0,z.jsxs)(f.Z,{alignItems:"center",children:[(0,z.jsx)(g.Xd,{default:!0,size:1.5*k.iI}),(0,z.jsx)(m.Z,{mr:1}),(0,z.jsx)(b.ZP,{default:!0,children:"Syncs"})]})}),(0,z.jsx)(m.Z,{mx:1,children:(0,z.jsx)(b.ZP,{default:!0,monospace:!0,children:"/"})}),(0,z.jsx)(b.ZP,{bold:!0,monospace:!0,children:r})]})}),(0,z.jsxs)(f.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,z.jsx)(m.Z,{mr:2,my:1,children:(0,z.jsx)(p.Z,{level:5,muted:!t,children:I})}),t&&(0,z.jsx)(q.Z,{onClick:function(){return o.push("/pipelines/".concat(t.pipeline_uuid,"/logs?pipeline_run_id[]=").concat(t.id))},small:!0,children:"Logs"})]}),(0,z.jsx)(m.Z,{mt:2,children:_}),t&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(m.Z,{mt:3,children:(0,z.jsxs)(f.Z,{justifyContent:"space-between",children:[(0,z.jsxs)("div",{children:[(0,z.jsx)(b.ZP,{bold:!0,large:!0,muted:!0,children:"Runtime"}),(0,z.jsxs)(b.ZP,{headline:!0,children:[r&&[M.V.INITIAL,M.V.RUNNING].includes(null===P||void 0===P?void 0:P.status)&&C,r&&![M.V.INITIAL,M.V.RUNNING].includes(null===P||void 0===P?void 0:P.status)&&(null===P||void 0===P?void 0:P.timeText),!r&&[v.V.INITIAL,v.V.RUNNING].includes(null===t||void 0===t?void 0:t.status)&&E,!r&&![v.V.INITIAL,v.V.RUNNING].includes(null===t||void 0===t?void 0:t.status)&&O]})]}),tn]})}),Object.values(U).length>=1&&(0,z.jsxs)(m.Z,{mt:3,children:[(0,z.jsx)(p.Z,{level:5,muted:!0,children:"Errors"}),Object.entries(U).map((function(n,e){var t=(0,s.Z)(n,2),o=t[0],i=t[1];return(!r||r===o)&&(0,z.jsx)(m.Z,{mt:e>=1?1:0,children:Object.entries(i).map((function(n){var e=(0,s.Z)(n,2),t=e[0],r=e[1],i=r.error,c=r.errors,l=r.message,u=Array.isArray(i)?i.join(" "):i;return(0,z.jsxs)("div",{children:[(0,z.jsx)(m.Z,{mb:l||(null===c||void 0===c?void 0:c.length)>=1?2:0,children:(0,z.jsxs)(b.ZP,{monospace:!0,preWrap:!0,textOverflow:!0,children:[o,!!t&&(0,z.jsxs)(b.ZP,{inline:!0,monospace:!0,muted:!0,children:["\xa0(",t,")"]}),": ",(0,z.jsx)(b.ZP,{default:!0,inline:!0,monospace:!0,children:u&&(0,z.jsx)(W(),{children:u})})]})}),(0,z.jsx)(b.ZP,{default:!0,monospace:!0,preWrap:!0,small:!0,children:l}),c.map((function(n){return(0,z.jsx)(b.ZP,{default:!0,monospace:!0,preWrap:!0,small:!0,children:n},n)}))]},"".concat(o,"-").concat(t))}))},o)}))]})]})]}),t&&!r&&(0,z.jsx)(m.Z,{my:3,children:rn}),t&&r&&(0,z.jsxs)(z.Fragment,{children:[ln&&(0,z.jsx)(m.Z,{my:3,children:(0,z.jsxs)(m.Z,{px:3,children:[(0,z.jsx)(p.Z,{level:5,children:"Table name"}),(0,z.jsx)(m.Z,{mt:1,children:(0,z.jsx)(b.ZP,{default:!0,monospace:!0,children:ln})})]})}),on&&(0,z.jsxs)(m.Z,{my:3,children:[(0,z.jsx)(m.Z,{px:3,children:(0,z.jsx)(p.Z,{level:5,children:"Bookmarks"})}),(0,z.jsx)(m.Z,{px:1,children:on})]}),cn&&(0,z.jsxs)(m.Z,{my:3,children:[(0,z.jsx)(m.Z,{px:3,children:(0,z.jsx)(p.Z,{level:5,children:"Sample row"})}),(0,z.jsx)(m.Z,{px:1,children:cn})]})]})]})},nn=t(82531),en=t(59920),tn=t(33766),rn=t(59e3);function on(n){var e=n.pipeline,t=e.uuid,r=nn.ZP.pipeline_runs.list({_limit:20,_offset:0,pipeline_uuid:t},{refreshInterval:5e3}),o=r.data,i=(r.mutate,(0,c.useMemo)((function(){return(null===o||void 0===o?void 0:o.pipeline_runs)||[]}),[o])),u=(0,rn.iV)(),s=(0,c.useState)(null),a=s[0],d=s[1],f=(0,c.useState)(null),p=f[0],v=f[1];(0,c.useEffect)((function(){null!==u&&void 0!==u&&u.pipeline_run_id?v(null===i||void 0===i?void 0:i.find((function(n){return n.id===Number(u.pipeline_run_id)}))):p&&v(null),null!==u&&void 0!==u&&u.stream?d(u.stream):a&&d(null)}),[i,u,p,a]);var m=(0,c.useCallback)((function(){var n=p?V(p):[];return(0,z.jsx)($,{onClickRow:function(e){var t=n[e];(0,tn.u7)({stream:a===t?null:t})},pipelineRun:p,selectedStream:a})}),[p,a]),h=(0,c.useMemo)((function(){var n="/pipelines/".concat(t,"/syncs");p&&(n="".concat(n,"?pipeline_run_id=").concat(p.id));var e=[{label:function(){return"Syncs"},linkProps:a?{as:n,href:"/pipelines/[pipeline]/syncs"}:null}];return a&&e.push({label:function(){return a}}),e}),[p,a]);return(0,z.jsx)(l.Z,{breadcrumbs:h,buildSidekick:m,pageName:en.M.SYNCS,pipeline:e,title:function(n){var e=n.name;return"".concat(e," syncs")},uuid:"".concat(en.M.SYNCS,"_").concat(t),children:i.map((function(n){var e=(null===p||void 0===p?void 0:p.id)===n.id;return(0,z.jsx)(H,{onSelect:function(n){return(0,tn.u7)({pipeline_run_id:n,stream:null})},pipelineRun:n,selected:e},n.id)}))})}on.getInitialProps=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query.pipeline,n.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();var cn=(0,u.Z)(on)},33766:function(n,e,t){"use strict";t.d(e,{g_:function(){return f},u7:function(){return d}});var r=t(75582),o=t(82394),i=t(34376),c=t.n(i),l=t(59e3),u=t(24224);function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.replaceParams,i=t.pushHistory,u=o?{}:(0,l.iV)();e=window.location.pathname;var s=i?c().push:c().replace,d=a(a({},u),n);Object.entries(n).forEach((function(n){var e=(0,r.Z)(n,2),t=e[0],o=e[1];"undefined"!==typeof o&&null!==o||delete d[t]}));var f=(0,l.uM)(d);f.length>=1&&(f="?".concat(f));var p="".concat(e.split("?")[0]).concat(f);return s(c().router.pathname,p,{shallow:!0})}function f(n,e,t){var o=t.addingMultipleValues,i=t.isList,c=t.itemsPerPage,l=t.resetLimitParams,s=a({},n);o?Object.entries(e).forEach((function(n){var e=(0,r.Z)(n,2),t=e[0],o=e[1];if(Array.isArray(o)){var i="".concat(t,"[]");s[i]=o.map(String)}})):i?Object.entries(e).forEach((function(n){var e=(0,r.Z)(n,2),t=e[0],o=e[1],i=String(o),c="".concat(t,"[]"),l=s[c];l&&Array.isArray(l)?(l=l.map(String)).includes(i)?s[c]=(0,u.Od)(l,(function(n){return n===i})):s[c]=l.concat(i):s[c]=[i]})):s=a(a({},s),e),l&&(s._limit=c||20,s._offset=0),d(s)}},59416:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/syncs",function(){return t(89745)}])}},function(n){n.O(0,[3850,2083,9565,2344,9386,1830,2626,9774,2888,179],(function(){return e=59416,n(n.s=e);var e}));var e=n.O();_N_E=e}]);