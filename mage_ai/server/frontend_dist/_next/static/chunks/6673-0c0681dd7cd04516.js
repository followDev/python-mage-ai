"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6673],{65597:function(e,n,i){i.d(n,{c:function(){return u},f:function(){return s}});var r=i(46313),t=i(23831),o=i(49125),c=i(73942),l=i(37391),u=r.default.div.withConfig({displayName:"Tablestyle__TableContainerStyle",componentId:"sc-8ammqd-0"})(["position:relative;overflow:auto;"," ",""],l.w5,(function(e){return e.minHeight&&"\n    min-height: ".concat(e.minHeight,"px;\n  ")})),s=r.default.div.withConfig({displayName:"Tablestyle__PopupContainerStyle",componentId:"sc-8ammqd-1"})(["position:absolute;max-height:","px;z-index:10;border-radius:","px;padding:","px;"," "," "," ",""],58*o.iI,c.TR,2*o.iI,(function(e){return"\n    box-shadow: ".concat((e.theme.shadow||t.Z.shadow).popup,";\n    background-color: ").concat((e.theme.interactive||t.Z.interactive).defaultBackground,";\n  ")}),(function(e){return e.leftOffset&&"\n    left: ".concat(e.leftOffset,"px;\n  ")}),(function(e){return e.topOffset&&"\n    top: ".concat(e.topOffset,"px;\n  ")}),(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")}))},55084:function(e,n,i){i.d(n,{Z:function(){return A}});var r,t=i(82394),o=i(12757),c=i(12691),l=i.n(c),u=i(34376),s=i.n(u),a=i(82684),d=i(83455),p=i(60328),f=i(47999),h=i(93461),j=i(67971),x=i(10919),m=i(66050).V,g=(r={},(0,t.Z)(r,m.COMPLETED,"Done"),(0,t.Z)(r,m.CANCELLED,"Cancelled"),(0,t.Z)(r,m.FAILED,"Failed"),(0,t.Z)(r,m.RUNNING,"Running"),(0,t.Z)(r,m.INITIAL,"Ready"),r),b=i(86673),Z=i(54283),_=i(17903),C=i(19711),O=i(41374),v=i(73942),k=i(10503),w=i(65597),I=i(49125),E=i(19395),y=i(96510),D=i(28598);function P(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function N(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?P(Object(i),!0).forEach((function(n){(0,t.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):P(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function L(e){var n=e.onCancel,i=e.onSuccess,r=e.pipelineRun,t=r.status,c=(0,d.Db)(O.ZP.pipeline_runs.pipeline_schedules.useCreate(null===r||void 0===r?void 0:r.pipeline_schedule_id),{onSuccess:function(e){return(0,y.wD)(e,{callback:function(){i()},onErrorCallback:function(e){var n=e.error,i=n.errors,r=n.message;console.log(i,r)}})}}),l=(0,o.Z)(c,1)[0],u=(0,a.useState)(),s=u[0],h=u[1],x=(0,a.useCallback)((function(){h(!1),l({pipeline_run:{execution_date:null===r||void 0===r?void 0:r.execution_date,pipeline_schedule_id:null===r||void 0===r?void 0:r.pipeline_schedule_id,pipeline_uuid:null===r||void 0===r?void 0:r.pipeline_uuid,variables:null===r||void 0===r?void 0:r.variables}})}),[r]),_=(0,a.useCallback)((function(){h(!1),n(N(N({},r),{},{status:m.CANCELLED}))}),[r]);return(0,D.jsxs)("div",{style:{position:"relative"},children:[(0,D.jsx)(p.Z,{beforeIcon:m.INITIAL!==t&&(0,D.jsxs)(D.Fragment,{children:[m.COMPLETED===t&&(0,D.jsx)(k.Jr,{size:2*I.iI}),[m.FAILED,m.CANCELLED].includes(t)&&(0,D.jsx)(k.Py,{size:2*I.iI,inverted:m.CANCELLED===t}),[m.RUNNING].includes(t)&&(0,D.jsx)(Z.Z,{color:"white",small:!0})]}),borderRadius:v.D7,danger:m.FAILED===t,default:m.INITIAL===t,notClickable:m.COMPLETED===t,onClick:function(){return h(m.COMPLETED!==t)},padding:"6px",primary:m.RUNNING===t,warning:m.CANCELLED===t,children:g[t]}),(0,D.jsx)(f.Z,{onClickOutside:function(){return h(!1)},open:s,children:(0,D.jsxs)(w.f,{children:[[m.RUNNING,m.INITIAL].includes(t)&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(C.ZP,{bold:!0,color:"#9ECBFF",children:"Run is in progress"}),(0,D.jsx)(b.Z,{mb:1}),(0,D.jsxs)(C.ZP,{children:["This pipeline run is currently ongoing. Retrying will cancel",(0,D.jsx)("br",{}),"the current pipeline run."]}),(0,D.jsx)(C.ZP,{}),(0,D.jsx)(b.Z,{mt:1,children:(0,D.jsxs)(j.Z,{children:[(0,D.jsx)(p.Z,{onClick:function(){_(),x()},children:"Retry run"}),(0,D.jsx)(b.Z,{ml:1}),(0,D.jsx)(p.Z,{onClick:_,children:"Cancel run"})]})})]}),[m.CANCELLED,m.FAILED].includes(t)&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(C.ZP,{bold:!0,color:"#9ECBFF",children:["Run ",t]}),(0,D.jsx)(b.Z,{mb:1}),(0,D.jsx)(C.ZP,{children:"Retry the run with changes you have made to the pipeline."}),(0,D.jsx)(b.Z,{mb:1}),(0,D.jsx)(p.Z,{onClick:x,children:"Retry run"})]})]})})]})}var A=function(e){var n=e.fetchPipelineRuns,i=e.onClickRow,r=e.pipelineRuns,t=e.selectedRun,c=(0,d.Db)((function(e){return O.ZP.pipeline_runs.useUpdate(e.id)({pipeline_run:e})}),{onSuccess:function(e){return(0,y.wD)(e,{callback:function(){n()},onErrorCallback:function(e){var n=e.error,i=n.errors,r=n.message;console.log(i,r)}})}}),u=(0,o.Z)(c,1)[0],a=[null,1,2,1,1,null],f=[{uuid:"Status"},{uuid:"Date"},{uuid:"Trigger"},{uuid:"Block runs"},{uuid:"Completed"},{uuid:"Logs"}];return i&&(a.push(null),f.push({label:function(){return""},uuid:"action"})),(0,D.jsx)(w.c,{minHeight:30*I.iI,children:(0,D.jsx)(_.Z,{columnFlex:a,columns:f,isSelectedRow:function(e){return r[e].id===(null===t||void 0===t?void 0:t.id)},onClickRow:i,rows:r.map((function(e,t){var o=e.block_runs_count,c=e.completed_at,a=e.execution_date,d=e.id,f=e.pipeline_schedule_id,m=e.pipeline_schedule_name,Z=e.pipeline_uuid,_=e.status,O=[];return O=t>0&&r[t-1].execution_date==e.execution_date&&r[t-1].id==e.id?[(0,D.jsx)(b.Z,{ml:1,children:(0,D.jsxs)(j.Z,{alignItems:"center",children:[(0,D.jsx)(k.TT,{size:2*I.iI,useStroke:!0}),(0,D.jsx)(p.Z,{borderRadius:v.D7,notClickable:!0,padding:"6px",children:(0,D.jsx)(C.ZP,{muted:!0,children:g[_]})})]})},"row_item_1"),(0,D.jsx)(C.ZP,{default:!0,monospace:!0,muted:!0,children:"-"},"row_item_2"),(0,D.jsx)(C.ZP,{default:!0,monospace:!0,muted:!0,children:"-"},"row_item_3"),(0,D.jsx)(l(),{as:"/pipelines/".concat(Z,"/runs/").concat(d),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,D.jsx)(x.Z,{bold:!0,muted:!0,children:"See block runs (".concat(o,")")})},"row_item_4"),(0,D.jsx)(C.ZP,{monospace:!0,muted:!0,children:c&&(0,E.eI)(c).toISOString().split(".")[0]||"-"},"row_item_5"),(0,D.jsx)(p.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return s().push("/pipelines/".concat(Z,"/logs?pipeline_run_id[]=").concat(d))},children:(0,D.jsx)(k.B4,{default:!0,size:2*I.iI})},"row_item_6")]:[(0,D.jsx)(L,{onCancel:u,onSuccess:n,pipelineRun:e},"row_item_7"),(0,D.jsx)(C.ZP,{default:!0,monospace:!0,children:a&&(0,E.eI)(a).toISOString().split(".")[0]||"-"},"row_item_8"),(0,D.jsx)(l(),{as:"/pipelines/".concat(Z,"/triggers/").concat(f),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,D.jsx)(x.Z,{bold:!0,sameColorAsText:!0,children:m})},"row_item_9"),(0,D.jsx)(l(),{as:"/pipelines/".concat(Z,"/runs/").concat(d),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,D.jsx)(x.Z,{bold:!0,sameColorAsText:!0,children:"See block runs (".concat(o,")")})},"row_item_10"),(0,D.jsx)(C.ZP,{default:!0,monospace:!0,children:c&&(0,E.eI)(c).toISOString().split(".")[0]||"-"},"row_item_11"),(0,D.jsx)(p.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return s().push("/pipelines/".concat(Z,"/logs?pipeline_run_id[]=").concat(d))},children:(0,D.jsx)(k.B4,{default:!0,size:2*I.iI})},"row_item_12")],i&&O.push((0,D.jsx)(h.Z,{flex:1,justifyContent:"flex-end",children:(0,D.jsx)(k._Q,{default:!0,size:2*I.iI})})),O})),uuid:"pipeline-runs"})})}},19395:function(e,n,i){i.d(n,{IJ:function(){return a},eI:function(){return d},gU:function(){return f},tL:function(){return p},vJ:function(){return h}});var r,t,o=i(82394),c=i(92083),l=i.n(c);function u(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?u(Object(i),!0).forEach((function(n){(0,o.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){var i=n.block_uuid,r=n.completed_at,t=n.started_at,c=n.status,u=null;t&&r&&(u=l()(r).valueOf()-l()(t).valueOf());return s(s({},e),{},(0,o.Z)({},i,{runtime:u,status:c}))}),{})}function d(e){if(!e)return null;var n=new Date(l()(e).valueOf()),i=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds());return new Date(i)}!function(e){e.DAY="day",e.HOUR="hour",e.MINUTE="minute",e.SECOND="second"}(t||(t={}));var p=(r={},(0,o.Z)(r,t.DAY,86400),(0,o.Z)(r,t.HOUR,3600),(0,o.Z)(r,t.MINUTE,60),(0,o.Z)(r,t.SECOND,1),r);function f(e){var n=t.SECOND,i=e;return e%86400===0?(i/=86400,n=t.DAY):e%3600===0?(i/=3600,n=t.HOUR):e%60===0&&(i/=60,n=t.MINUTE),{time:i,unit:n}}function h(e,n){return e*p[n]}},51099:function(e,n,i){i(82684);var r=i(60328),t=i(67971),o=i(86673),c=i(10503),l=i(73899),u=i(49125),s=i(28598);n.Z=function(e){var n=e.page,i=e.maxPages,a=e.onUpdate,d=e.totalPages,p=[],f=i;if(f>d)p=Array.from({length:d},(function(e,n){return n}));else{var h=Math.floor(f/2),j=n-h;n+h>=d?(j=d-f+2,f-=2):n-h<=0?(j=0,f-=2):(f-=4,j=n-Math.floor(f/2)),p=Array.from({length:f},(function(e,n){return n+j}))}return(0,s.jsx)(s.Fragment,{children:d>0&&(0,s.jsxs)(t.Z,{alignItems:"center",children:[(0,s.jsx)(r.Z,{disabled:0===n,onClick:function(){return a(n-1)},children:(0,s.jsx)(c.Hd,{size:1.5*u.iI,stroke:"#AEAEAE"})}),!p.includes(0)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{onClick:function(){return a(0)},borderLess:!0,noBackground:!0,children:1})},0),!p.includes(1)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0)]}),p.map((function(e){return(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{onClick:function(){e!==n&&a(e)},notClickable:e===n,backgroundColor:e===n&&l.a$,borderLess:!0,noBackground:!0,children:e+1})},e)})),!p.includes(d-1)&&(0,s.jsxs)(s.Fragment,{children:[!p.includes(d-2)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0),(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{onClick:function(){return a(d-1)},borderLess:!0,noBackground:!0,children:d})},d-1)]}),(0,s.jsx)(o.Z,{ml:1}),(0,s.jsx)(r.Z,{disabled:n===d-1,onClick:function(){return a(n+1)},children:(0,s.jsx)(c.Kw,{size:1.5*u.iI,stroke:"#AEAEAE"})})]})})}}}]);