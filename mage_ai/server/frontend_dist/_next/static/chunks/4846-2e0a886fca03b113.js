"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4846],{65597:function(e,n,r){r.d(n,{c:function(){return u},f:function(){return s}});var t=r(46313),i=r(23831),o=r(49125),c=r(73942),l=r(37391),u=t.default.div.withConfig({displayName:"Tablestyle__TableContainerStyle",componentId:"sc-8ammqd-0"})(["position:relative;overflow:auto;"," ",""],l.w5,(function(e){return e.minHeight&&"\n    min-height: ".concat(e.minHeight,"px;\n  ")})),s=t.default.div.withConfig({displayName:"Tablestyle__PopupContainerStyle",componentId:"sc-8ammqd-1"})(["position:absolute;max-height:","px;z-index:10;border-radius:","px;padding:","px;"," "," "," ",""],58*o.iI,c.TR,2*o.iI,(function(e){return"\n    box-shadow: ".concat((e.theme.shadow||i.Z.shadow).popup,";\n    background-color: ").concat((e.theme.interactive||i.Z.interactive).defaultBackground,";\n  ")}),(function(e){return e.leftOffset&&"\n    left: ".concat(e.leftOffset,"px;\n  ")}),(function(e){return e.topOffset&&"\n    top: ".concat(e.topOffset,"px;\n  ")}),(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")}))},97496:function(e,n,r){var t=r(82394),i=r(12757),o=r(12691),c=r.n(o),l=r(34376),u=r.n(l),s=r(82684),a=r(83455),d=r(60328),p=r(47999),f=r(93461),h=r(67971),b=r(10919),j=r(47409),g=r(86673),x=r(54283),m=r(17903),O=r(19711),v=r(41374),Z=r(73942),w=r(10503),y=r(65597),_=r(49125),C=r(19395),P=r(96510),k=r(28598);function I(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function D(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?I(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function E(e){var n=e.onCancel,r=e.onSuccess,t=e.pipelineRun,o=t.status,c=(0,a.Db)(v.ZP.pipeline_runs.pipeline_schedules.useCreate(null===t||void 0===t?void 0:t.pipeline_schedule_id),{onSuccess:function(e){return(0,P.wD)(e,{callback:function(){r()},onErrorCallback:function(e){var n=e.error,r=n.errors,t=n.message;console.log(r,t)}})}}),l=(0,i.Z)(c,1)[0],u=(0,s.useState)(),f=u[0],b=u[1],m=(0,s.useCallback)((function(){b(!1),l({pipeline_run:{execution_date:null===t||void 0===t?void 0:t.execution_date,pipeline_schedule_id:null===t||void 0===t?void 0:t.pipeline_schedule_id,pipeline_uuid:null===t||void 0===t?void 0:t.pipeline_uuid,variables:null===t||void 0===t?void 0:t.variables}})}),[t]),C=(0,s.useCallback)((function(){b(!1),n(D(D({},t),{},{status:j.V.CANCELLED}))}),[t]);return(0,k.jsxs)("div",{style:{position:"relative"},children:[(0,k.jsx)(d.Z,{beforeIcon:j.V.INITIAL!==o&&(0,k.jsxs)(k.Fragment,{children:[j.V.COMPLETED===o&&(0,k.jsx)(w.Jr,{size:2*_.iI}),[j.V.FAILED,j.V.CANCELLED].includes(o)&&(0,k.jsx)(w.Py,{size:2*_.iI,inverted:j.V.CANCELLED===o}),[j.V.RUNNING].includes(o)&&(0,k.jsx)(x.Z,{color:"white",small:!0})]}),borderRadius:Z.D7,danger:j.V.FAILED===o,default:j.V.INITIAL===o,onClick:function(){return b(!0)},padding:"6px",primary:j.V.RUNNING===o,warning:j.V.CANCELLED===o,children:j.D[o]}),(0,k.jsx)(p.Z,{onClickOutside:function(){return b(!1)},open:f,children:(0,k.jsxs)(y.f,{children:[[j.V.RUNNING,j.V.INITIAL].includes(o)&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(O.ZP,{bold:!0,color:"#9ECBFF",children:"Run is in progress"}),(0,k.jsx)(g.Z,{mb:1}),(0,k.jsxs)(O.ZP,{children:["This pipeline run is currently ongoing. Retrying will cancel",(0,k.jsx)("br",{}),"the current pipeline run."]}),(0,k.jsx)(O.ZP,{}),(0,k.jsx)(g.Z,{mt:1,children:(0,k.jsxs)(h.Z,{children:[(0,k.jsx)(d.Z,{onClick:function(){C(),m()},children:"Retry run"}),(0,k.jsx)(g.Z,{ml:1}),(0,k.jsx)(d.Z,{onClick:C,children:"Cancel run"})]})})]}),[j.V.CANCELLED,j.V.FAILED,j.V.COMPLETED].includes(o)&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(O.ZP,{bold:!0,color:"#9ECBFF",children:["Run ",o]}),(0,k.jsx)(g.Z,{mb:1}),(0,k.jsx)(O.ZP,{children:"Retry the run with changes you have made to the pipeline."}),(0,k.jsx)(g.Z,{mb:1}),(0,k.jsx)(d.Z,{onClick:m,children:"Retry run"})]})]})})]})}n.Z=function(e){var n=e.fetchPipelineRuns,r=e.onClickRow,t=e.pipelineRuns,o=e.selectedRun,l=(0,a.Db)((function(e){return v.ZP.pipeline_runs.useUpdate(e.id)({pipeline_run:e})}),{onSuccess:function(e){return(0,P.wD)(e,{callback:function(){n()},onErrorCallback:function(e){var n=e.error,r=n.errors,t=n.message;console.log(r,t)}})}}),s=(0,i.Z)(l,1)[0],p=[null,1,2,1,1,null],x=[{uuid:"Status"},{uuid:"Pipeline UUID"},{uuid:"Date"},{uuid:"Trigger"},{uuid:"Block runs"},{uuid:"Completed"},{uuid:"Logs"}];return r&&(p.push(null),x.push({label:function(){return""},uuid:"action"})),(0,k.jsx)(y.c,{minHeight:30*_.iI,children:0===t.length?(0,k.jsx)(g.Z,{px:3,py:1,children:(0,k.jsx)(O.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:"No runs available"})}):(0,k.jsx)(m.Z,{columnFlex:p,columns:x,isSelectedRow:function(e){return t[e].id===(null===o||void 0===o?void 0:o.id)},onClickRow:r,rows:t.map((function(e,i){var o=e.block_runs_count,l=e.completed_at,a=e.execution_date,p=e.id,x=e.pipeline_schedule_id,m=e.pipeline_schedule_name,v=e.pipeline_uuid,y=e.status,P=[];return P=i>0&&t[i-1].execution_date===e.execution_date&&t[i-1].pipeline_schedule_id===e.pipeline_schedule_id?[(0,k.jsx)(g.Z,{ml:1,children:(0,k.jsxs)(h.Z,{alignItems:"center",children:[(0,k.jsx)(w.TT,{size:2*_.iI,useStroke:!0}),(0,k.jsx)(d.Z,{borderRadius:Z.D7,notClickable:!0,padding:"6px",children:(0,k.jsx)(O.ZP,{muted:!0,children:j.D[y]})})]})},"row_status"),(0,k.jsx)(O.ZP,{default:!0,monospace:!0,muted:!0,children:v},"row_pipeline_uuid"),(0,k.jsx)(O.ZP,{default:!0,monospace:!0,muted:!0,children:"-"},"row_date_retry"),(0,k.jsx)(O.ZP,{default:!0,monospace:!0,muted:!0,children:"-"},"row_trigger_retry"),(0,k.jsx)(c(),{as:"/pipelines/".concat(v,"/runs/").concat(p),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,k.jsx)(b.Z,{bold:!0,muted:!0,children:"See block runs (".concat(o,")")})},"row_block_runs"),(0,k.jsx)(O.ZP,{monospace:!0,muted:!0,children:l&&(0,C.eI)(l).toISOString().split(".")[0]||"-"},"row_completed"),(0,k.jsx)(d.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return u().push("/pipelines/".concat(v,"/logs?pipeline_run_id[]=").concat(p))},children:(0,k.jsx)(w.B4,{default:!0,size:2*_.iI})},"row_logs")]:[(0,k.jsx)(E,{onCancel:s,onSuccess:n,pipelineRun:e},"row_retry_button"),(0,k.jsx)(O.ZP,{default:!0,monospace:!0,children:v},"row_pipeline_uuid"),(0,k.jsx)(O.ZP,{default:!0,monospace:!0,children:a&&(0,C.eI)(a).toISOString().split(".")[0]||"-"},"row_date"),(0,k.jsx)(c(),{as:"/pipelines/".concat(v,"/triggers/").concat(x),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,k.jsx)(b.Z,{bold:!0,sameColorAsText:!0,children:m})},"row_trigger"),(0,k.jsx)(c(),{as:"/pipelines/".concat(v,"/runs/").concat(p),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,k.jsx)(b.Z,{bold:!0,sameColorAsText:!0,children:"See block runs (".concat(o,")")})},"row_block_runs"),(0,k.jsx)(O.ZP,{default:!0,monospace:!0,children:l&&(0,C.eI)(l).toISOString().split(".")[0]||"-"},"row_completed"),(0,k.jsx)(d.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return u().push("/pipelines/".concat(v,"/logs?pipeline_run_id[]=").concat(p))},children:(0,k.jsx)(w.B4,{default:!0,size:2*_.iI})},"row_item_13")],r&&P.push((0,k.jsx)(f.Z,{flex:1,justifyContent:"flex-end",children:(0,k.jsx)(w._Q,{default:!0,size:2*_.iI})})),P})),uuid:"pipeline-runs"})})}},19395:function(e,n,r){r.d(n,{IJ:function(){return a},eI:function(){return d},gU:function(){return f},tL:function(){return p},vJ:function(){return h}});var t,i,o=r(82394),c=r(92083),l=r.n(c);function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){var r=n.block_uuid,t=n.completed_at,i=n.started_at,c=n.status,u=null;i&&t&&(u=l()(t).valueOf()-l()(i).valueOf());return s(s({},e),{},(0,o.Z)({},r,{runtime:u,status:c}))}),{})}function d(e){if(!e)return null;var n=new Date(l()(e).valueOf()),r=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds());return new Date(r)}!function(e){e.DAY="day",e.HOUR="hour",e.MINUTE="minute",e.SECOND="second"}(i||(i={}));var p=(t={},(0,o.Z)(t,i.DAY,86400),(0,o.Z)(t,i.HOUR,3600),(0,o.Z)(t,i.MINUTE,60),(0,o.Z)(t,i.SECOND,1),t);function f(e){var n=i.SECOND,r=e;return e%86400===0?(r/=86400,n=i.DAY):e%3600===0?(r/=3600,n=i.HOUR):e%60===0&&(r/=60,n=i.MINUTE),{time:r,unit:n}}function h(e,n){return e*p[n]}},51099:function(e,n,r){r(82684);var t=r(60328),i=r(67971),o=r(86673),c=r(10503),l=r(73899),u=r(49125),s=r(28598);n.Z=function(e){var n=e.page,r=e.maxPages,a=e.onUpdate,d=e.totalPages,p=[],f=r;if(f>d)p=Array.from({length:d},(function(e,n){return n}));else{var h=Math.floor(f/2),b=n-h;n+h>=d?(b=d-f+2,f-=2):n-h<=0?(b=0,f-=2):(f-=4,b=n-Math.floor(f/2)),p=Array.from({length:f},(function(e,n){return n+b}))}return(0,s.jsx)(s.Fragment,{children:d>0&&(0,s.jsxs)(i.Z,{alignItems:"center",children:[(0,s.jsx)(t.Z,{disabled:0===n,onClick:function(){return a(n-1)},children:(0,s.jsx)(c.Hd,{size:1.5*u.iI,stroke:"#AEAEAE"})}),!p.includes(0)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(t.Z,{onClick:function(){return a(0)},borderLess:!0,noBackground:!0,children:1})},0),!p.includes(1)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(t.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0)]}),p.map((function(e){return(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(t.Z,{onClick:function(){e!==n&&a(e)},notClickable:e===n,backgroundColor:e===n&&l.a$,borderLess:!0,noBackground:!0,children:e+1})},e)})),!p.includes(d-1)&&(0,s.jsxs)(s.Fragment,{children:[!p.includes(d-2)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(t.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0),(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(t.Z,{onClick:function(){return a(d-1)},borderLess:!0,noBackground:!0,children:d})},d-1)]}),(0,s.jsx)(o.Z,{ml:1}),(0,s.jsx)(t.Z,{disabled:n===d-1,onClick:function(){return a(n+1)},children:(0,s.jsx)(c.Kw,{size:1.5*u.iI,stroke:"#AEAEAE"})})]})})}},47409:function(e,n,r){r.d(n,{D:function(){return c},V:function(){return o}});var t,i=r(82394),o=r(66050).V,c=(t={},(0,i.Z)(t,o.COMPLETED,"Done"),(0,i.Z)(t,o.CANCELLED,"Cancelled"),(0,i.Z)(t,o.FAILED,"Failed"),(0,i.Z)(t,o.RUNNING,"Running"),(0,i.Z)(t,o.INITIAL,"Ready"),t)},55378:function(e,n,r){var t=r(82394),i=r(26304),o=r(82684),c=r(46313),l=r(69898),u=r(31969),s=r(49125),a=r(28598),d=["beforeIcon","children","label","placeholder"];function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var h=c.default.select.withConfig({displayName:"Select__SelectStyle",componentId:"sc-q6ezu2-0"})(["",' background-image:url("data:image/svg+xml;utf8,','");background-repeat:no-repeat;background-position:-webkit-calc(100% - ',"px) center;background-position:calc(100% - ","px) center;padding-right:","px;&:hover{cursor:pointer;}"," "," "," ",""],l.p,"\n  <svg width='12' height='12' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>\n    <path\n      clip-rule='evenodd'\n      d='M8.0015 11.7109L14.0022 5.71017L12.588 4.29597L7.99485 8.88914L3.40754 4.34482L2 5.76567L8.0015 11.7109Z'\n      fill='%23B4B8C0'\n      fill-rule='evenodd'\n    />\n  </svg>",s.iI,s.iI,2.5*s.iI,(function(e){return!e.hasContent&&!e.showPlaceholder&&"\n    color: ".concat((e.theme.content||u.Z.content).muted,";\n  ")}),(function(e){return e.backgroundColor&&"\n    background-color: ".concat(e.backgroundColor,";\n  ")}),(function(e){return e.color&&"\n    color: ".concat(e.color,";\n  ")}),(function(e){return e.showPlaceholder&&"\n    color: ".concat((e.theme.content||u.Z.content).inverted,";\n  ")})),b=function(e,n){var r=e.beforeIcon,t=e.children,o=e.label,c=e.placeholder,u=(0,i.Z)(e,d);return(0,a.jsx)(l.Z,f(f({},u),{},{beforeIcon:r,input:(0,a.jsxs)(h,f(f({},u),{},{children:[(o||c)&&(0,a.jsx)("option",{disabled:!0,selected:!0,value:"",children:o||c}),t]})),label:o,placeholder:c,ref:n,setContentOnMount:!0,showLabelRequirement:function(e){return!!e.content}}))};n.Z=o.forwardRef(b)},33766:function(e,n,r){r.d(n,{u:function(){return a}});var t=r(12757),i=r(82394),o=r(34376),c=r.n(o),l=r(59e3);function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){(0,i.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.replaceParams,o=r.pushHistory,u=i?{}:(0,l.iV)();n=window.location.pathname;var a=o?c().push:c().replace,d=s(s({},u),e);Object.entries(e).forEach((function(e){var n=(0,t.Z)(e,2),r=n[0],i=n[1];"undefined"!==typeof i&&null!==i||delete d[r]}));var p=(0,l.uM)(d);p.length>=1&&(p="?".concat(p));var f="".concat(n.split("?")[0]).concat(p);return a(c().router.pathname,f,{shallow:!0})}}}]);