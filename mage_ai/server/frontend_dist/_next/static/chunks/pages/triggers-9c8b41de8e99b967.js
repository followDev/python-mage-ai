(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[585],{1210:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var r=t(82394),i=t(21831),o=t(82684),c=t(47999),u=t(49894),l=t(93461),s=t(57384),a=t(40881),d=t(72454),f=t(28598);function p(e,n){var t=e.children;return(0,f.jsx)(d.HS,{ref:n,children:t})}var h=o.forwardRef(p),g=t(32063),v=t(85019),j=t(82531),b=t(66166),m=t(3055),Z=t(49125),O=t(91427),x=t(24141);function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=function(e){var n,t=e.after,r=e.afterHidden,p=e.afterWidth,_=e.afterWidthOverride,P=e.before,E=e.beforeWidth,C=e.breadcrumbs,w=e.children,k=e.errors,A=e.headerMenuItems,I=e.navigationItems,S=e.setErrors,T=e.subheaderChildren,D=e.title,M=e.uuid,N=(0,x.i)().width,R="dashboard_after_width_".concat(M),H="dashboard_before_width_".concat(M),V=(0,o.useRef)(null),B=(0,o.useState)(_?p:(0,O.U2)(R,p)),L=B[0],z=B[1],q=(0,o.useState)(!1),F=q[0],U=q[1],W=(0,o.useState)(P?Math.max((0,O.U2)(H,E),13*Z.iI):null),Y=W[0],Q=W[1],J=(0,o.useState)(!1),X=J[0],K=J[1],$=(0,o.useState)(null)[1],G=j.ZP.projects.list({},{revalidateOnFocus:!1}).data,ee=null===G||void 0===G?void 0:G.projects,ne=[];C?ne.push.apply(ne,(0,i.Z)(C)):(null===ee||void 0===ee?void 0:ee.length)>=1&&ne.push.apply(ne,[{label:function(){var e;return null===(e=ee[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},{bold:!0,label:function(){return D}}]),(0,o.useEffect)((function(){null===V||void 0===V||!V.current||F||X||null===$||void 0===$||$(V.current.getBoundingClientRect().width)}),[F,L,X,Y,V,$,N]),(0,o.useEffect)((function(){F||(0,O.t8)(R,L)}),[r,F,L,R]),(0,o.useEffect)((function(){X||(0,O.t8)(H,Y)}),[X,Y,H]);var te=(0,b.Z)(p);return(0,o.useEffect)((function(){_&&te!==p&&z(p)}),[_,p,te]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.Z,{title:D}),(0,f.jsx)(a.Z,{breadcrumbs:ne,menuItems:A,project:null===ee||void 0===ee?void 0:ee[0],version:null===ee||void 0===ee||null===(n=ee[0])||void 0===n?void 0:n.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===I||void 0===I?void 0:I.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(v.Z,{navigationItems:I,showMore:!0})}),(0,f.jsx)(l.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(g.Z,{after:t,afterHeightOffset:m.Mz,afterHidden:r,afterMousedownActive:F,afterWidth:L,before:P,beforeHeightOffset:m.Mz,beforeMousedownActive:X,beforeWidth:d.k1+(P?Y:0),hideAfterCompletely:!0,leftOffset:P?d.k1:null,mainContainerRef:V,setAfterMousedownActive:U,setAfterWidth:z,setBeforeMousedownActive:K,setBeforeWidth:Q,children:[T&&(0,f.jsx)(h,{children:T}),w]})})]}),k&&(0,f.jsx)(c.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===S||void 0===S?void 0:S(null)},children:(0,f.jsx)(u.Z,y(y({},k),{},{onClose:function(){return null===S||void 0===S?void 0:S(null)}}))})]})}},97225:function(e,n,t){"use strict";var r=t(75582),i=t(12691),o=t.n(i),c=t(82684),u=t(83455),l=t(34376),s=t(60328),a=t(47999),d=t(67971),f=t(10919),p=t(93348),h=t(62609),g=t(86673),v=t(58180),j=t(19711),b=t(82531),m=t(10503),Z=t(49125),O=t(45838),x=t(9736),_=t(96510),y=t(66653),P=t(28598);n.Z=function(e){var n=e.fetchPipelineSchedules,t=e.highlightRowOnHover,i=e.includeCreatedAtColumn,E=e.includePipelineColumn,C=e.pipeline,w=e.pipelineSchedules,k=e.selectedSchedule,A=e.setErrors,I=e.setSelectedSchedule,S=e.stickyHeader,T=null===C||void 0===C?void 0:C.uuid,D=(0,l.useRouter)(),M=(0,c.useRef)({}),N=(0,c.useState)(null),R=N[0],H=N[1],V=(0,c.useState)(0),B=V[0],L=V[1],z=(0,c.useState)(0),q=z[0],F=z[1],U=(0,u.Db)((function(e){return b.ZP.pipeline_schedules.useUpdate(e.id)({pipeline_schedule:e})}),{onSuccess:function(e){return(0,_.wD)(e,{callback:function(){n()},onErrorCallback:function(e,n){return A({errors:n,response:e})}})}}),W=(0,r.Z)(U,1)[0],Y=(0,u.Db)((function(e){return b.ZP.pipeline_schedules.useDelete(e)()}),{onSuccess:function(e){return(0,_.wD)(e,{callback:function(){n(),T?D.push("/pipelines/[pipeline]/triggers","/pipelines/".concat(T,"/triggers")):n()},onErrorCallback:function(e,n){return A({errors:n,response:e})}})}}),Q=(0,r.Z)(Y,1)[0],J=[{label:function(){return""},uuid:"action"},{uuid:"Status"},{uuid:"Type"},{uuid:"Name"},{uuid:"Frequency"},{uuid:"Runs"},{uuid:"Latest run status"},{uuid:"Logs"}];(0,x.Ct)()||J.push({label:function(){return""},uuid:"edit/delete"});var X=[null,1,1,3,1,null,null,null,null];return E&&(J.splice(2,0,{uuid:"Pipeline"}),X.splice(2,0,2)),i&&(J.splice(3,0,{uuid:"Created at"}),X.splice(3,0,null)),(0,P.jsx)(O.cl,{overflowVisible:!0,children:0===w.length?(0,P.jsx)(g.Z,{px:3,py:1,children:(0,P.jsx)(j.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:"No triggers available"})}):(0,P.jsx)(v.Z,{columnFlex:X,columns:J,highlightRowOnHover:t,isSelectedRow:function(e){return w[e].id===(null===k||void 0===k?void 0:k.id)},onClickRow:I?function(e){return null===I||void 0===I?void 0:I(w[e])}:null,rowVerticalPadding:6,rows:w.map((function(e,n){var t,r=e.id,u=e.created_at,l=e.pipeline_runs_count,v=e.pipeline_uuid,b=e.last_pipeline_run_status,O=e.name,_=e.schedule_interval,C=e.status,w=T||v;M.current[r]=(0,c.createRef)();var k=[(0,P.jsx)(s.Z,{iconOnly:!0,noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(n){(0,y.j)(n),W({id:e.id,status:p.fq.ACTIVE===C?p.fq.INACTIVE:p.fq.ACTIVE})},children:p.fq.ACTIVE===C?(0,P.jsx)(m.dz,{muted:!0,size:2*Z.iI}):(0,P.jsx)(m.Py,{default:!0,size:2*Z.iI})},"toggle_trigger_".concat(n)),(0,P.jsx)(j.ZP,{default:p.fq.INACTIVE===C,monospace:!0,success:p.fq.ACTIVE===C,children:C},"trigger_status_".concat(n)),(0,P.jsx)(j.ZP,{default:!0,monospace:!0,children:null===(t=p.Z4[e.schedule_type])||void 0===t?void 0:t.call(p.Z4)},"trigger_type_".concat(n)),(0,P.jsx)(o(),{as:"/pipelines/".concat(w,"/triggers/").concat(r),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,P.jsx)(f.Z,{bold:!0,onClick:function(e){(0,y.j)(e),D.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(w,"/triggers/").concat(r))},sameColorAsText:!0,children:O})},"trigger_name_".concat(n)),(0,P.jsx)(j.ZP,{default:!0,monospace:!0,children:_},"trigger_frequency_".concat(n)),(0,P.jsx)(j.ZP,{default:!0,monospace:!0,children:l},"trigger_run_count_".concat(n)),(0,P.jsx)(j.ZP,{default:!0,monospace:!0,children:b||"N/A"},"latest_run_status_".concat(n)),(0,P.jsx)(s.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return D.push("/pipelines/".concat(w,"/logs?pipeline_schedule_id[]=").concat(r))},children:(0,P.jsx)(m.B4,{default:!0,size:2*Z.iI})},"logs_button_".concat(n))];return(0,x.Ct)()||k.push((0,P.jsxs)(d.Z,{children:[(0,P.jsx)(s.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return D.push("/pipelines/".concat(w,"/triggers/").concat(r,"/edit"))},title:"Edit",children:(0,P.jsx)(m.I8,{default:!0,size:2*Z.iI})}),(0,P.jsx)(g.Z,{mr:1}),(0,P.jsx)(s.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){var e,n,t,i;H(r),L((null===(e=M.current[r])||void 0===e||null===(n=e.current)||void 0===n?void 0:n.offsetTop)||0),F((null===(t=M.current[r])||void 0===t||null===(i=t.current)||void 0===i?void 0:i.offsetLeft)||0)},ref:M.current[r],title:"Delete",children:(0,P.jsx)(m.rF,{default:!0,size:2*Z.iI})}),(0,P.jsx)(a.Z,{onClickOutside:function(){return H(null)},open:R===r,children:(0,P.jsx)(h.Z,{danger:!0,left:(q||0)-286,onCancel:function(){return H(null)},onClick:function(){H(null),Q(r)},title:"Are you sure you want to delete the trigger ".concat(O,"?"),top:(B||0)-(n<=1?40:96),width:40*Z.iI})})]},"edit_delete_buttons_".concat(n))),E&&k.splice(2,0,(0,P.jsx)(j.ZP,{default:!0,monospace:!0,children:w},"pipeline_name_".concat(n))),i&&k.splice(3,0,(0,P.jsx)(j.ZP,{default:!0,monospace:!0,children:u},"created_at_".concat(n))),k})),stickyHeader:S,uuid:"pipeline-triggers"})})}},51099:function(e,n,t){"use strict";t.d(n,{Q:function(){return a}});t(82684);var r=t(60328),i=t(67971),o=t(86673),c=t(10503),u=t(73899),l=t(49125),s=t(28598),a=22;n.Z=function(e){var n=e.page,t=e.maxPages,a=e.onUpdate,d=e.totalPages,f=[],p=t;if(p>d)f=Array.from({length:d},(function(e,n){return n}));else{var h=Math.floor(p/2),g=n-h;n+h>=d?(g=d-p+2,p-=2):n-h<=0?(g=0,p-=2):(p-=4,g=n-Math.floor(p/2)),f=Array.from({length:p},(function(e,n){return n+g}))}return(0,s.jsx)(s.Fragment,{children:d>0&&(0,s.jsxs)(i.Z,{alignItems:"center",children:[(0,s.jsx)(r.Z,{disabled:0===n,onClick:function(){return a(n-1)},children:(0,s.jsx)(c.Hd,{size:1.5*l.iI,stroke:"#AEAEAE"})}),!f.includes(0)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{onClick:function(){return a(0)},borderLess:!0,noBackground:!0,children:1})},0),!f.includes(1)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0)]}),f.map((function(e){return(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{onClick:function(){e!==n&&a(e)},notClickable:e===n,backgroundColor:e===n&&u.a$,borderLess:!0,noBackground:!0,children:e+1})},e)})),!f.includes(d-1)&&(0,s.jsxs)(s.Fragment,{children:[!f.includes(d-2)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0),(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{onClick:function(){return a(d-1)},borderLess:!0,noBackground:!0,children:d})},d-1)]}),(0,s.jsx)(o.Z,{ml:1}),(0,s.jsx)(r.Z,{disabled:n===d-1,onClick:function(){return a(n+1)},children:(0,s.jsx)(c.Kw,{size:1.5*l.iI,stroke:"#AEAEAE"})})]})})}},93348:function(e,n,t){"use strict";t.d(n,{TR:function(){return d},U5:function(){return l},Xm:function(){return o},Z4:function(){return a},fq:function(){return u},kJ:function(){return s}});var r,i,o,c=t(82394);!function(e){e.API="api",e.EVENT="event",e.TIME="time"}(o||(o={}));var u,l,s,a=(r={},(0,c.Z)(r,o.API,(function(){return"API"})),(0,c.Z)(r,o.EVENT,(function(){return"event"})),(0,c.Z)(r,o.TIME,(function(){return"schedule"})),r);!function(e){e.ACTIVE="active",e.INACTIVE="inactive"}(u||(u={})),function(e){e.ONCE="@once",e.HOURLY="@hourly",e.DAILY="@daily",e.WEEKLY="@weekly",e.MONTHLY="@monthly"}(l||(l={})),function(e){e.CREATED_AT="created_at",e.NAME="name",e.PIPELINE="pipeline_uuid",e.STATUS="status",e.TYPE="schedule_type"}(s||(s={}));var d=(i={},(0,c.Z)(i,s.CREATED_AT,"Created at"),(0,c.Z)(i,s.NAME,"Name"),(0,c.Z)(i,s.PIPELINE,"Pipeline"),(0,c.Z)(i,s.STATUS,"Status"),(0,c.Z)(i,s.TYPE,"Type"),i)},46756:function(e,n,t){"use strict";t.r(n);var r=t(77837),i=t(82394),o=t(75582),c=t(38860),u=t.n(c),l=t(82684),s=t(34376),a=t(1210),d=t(67971),f=t(51099),p=t(41788),h=t(55378),g=t(86673),v=t(19711),j=t(97225),b=t(82531),m=t(93348),Z=t(49125),O=t(33766),x=t(59e3),_=t(28598);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function E(){var e=(0,s.useRouter)(),n=(0,x.iV)(),t=null!==n&&void 0!==n&&n.page?n.page:0,r=(null===n||void 0===n?void 0:n.order_by)||m.kJ.CREATED_AT,i={_limit:f.Q,_offset:t*f.Q,order_by:r},c=b.ZP.pipeline_schedules.list(i,{refreshInterval:7500,revalidateOnFocus:!0}),u=c.data,p=c.mutate,y=(0,l.useMemo)((function(){return(null===u||void 0===u?void 0:u.pipeline_schedules)||[]}),[u]),E=(0,l.useMemo)((function(){var e;return(null===u||void 0===u||null===(e=u.metadata)||void 0===e?void 0:e.count)||[]}),[u]);return(0,_.jsxs)(a.Z,{title:"Triggers",uuid:"triggers/index",children:[(0,_.jsx)(g.Z,{mx:2,my:1,children:(0,_.jsxs)(d.Z,{alignItems:"center",children:[(0,_.jsx)(v.ZP,{bold:!0,default:!0,large:!0,children:"Sort runs by:"}),(0,_.jsx)(g.Z,{mr:1}),(0,_.jsx)(h.Z,{compact:!0,defaultColor:!0,fitContent:!0,onChange:function(e){e.preventDefault(),(0,O.u7)({order_by:e.target.value,page:0})},paddingRight:4*Z.iI,placeholder:"Select column",value:r||m.kJ.CREATED_AT,children:Object.entries(m.TR).map((function(e){var n=(0,o.Z)(e,2),t=n[0],r=n[1];return(0,_.jsx)("option",{value:t,children:r},t)}))})]})}),(0,_.jsx)(j.Z,{fetchPipelineSchedules:p,highlightRowOnHover:!0,includeCreatedAtColumn:!0,includePipelineColumn:!0,pipelineSchedules:y,stickyHeader:!0}),(0,_.jsx)(g.Z,{p:2,children:(0,_.jsx)(f.Z,{maxPages:9,onUpdate:function(t){var r=Number(t),i=P(P({},n),{},{page:r>=0?r:0});e.push("/triggers","/triggers?".concat((0,x.uM)(i)))},page:Number(t),totalPages:Math.ceil(E/f.Q)})})]})}E.getInitialProps=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,p.Z)(E)},33766:function(e,n,t){"use strict";t.d(n,{O2:function(){return d},g_:function(){return p},u7:function(){return f}});var r=t(75582),i=t(82394),o=t(34376),c=t.n(o),u=t(59e3),l=t(24224);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d="_offset";function f(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.preserveParams,i=n.pushHistory,o=n.replaceParams,l=(0,u.iV)(),s={};t&&t.forEach((function(e){l[e]&&(s[e]=l[e])}));var d,f=o?s:l;d=window.location.pathname;var p=i?c().push:c().replace,h=a(a({},f),e);Object.entries(e).forEach((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1];"undefined"!==typeof i&&null!==i||delete h[t]}));var g=(0,u.uM)(h);g.length>=1&&(g="?".concat(g));var v="".concat(d.split("?")[0]).concat(g);return p(c().router.pathname,v,{shallow:!0})}function p(e,n,t){var i=t.addingMultipleValues,o=t.isList,c=t.itemsPerPage,u=t.pushHistory,s=void 0!==u&&u,p=t.resetLimitParams,h=a({},e);i?Object.entries(n).forEach((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1];if(Array.isArray(i)){var o="".concat(t,"[]");h[o]=i.map(String)}})):o?Object.entries(n).forEach((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1],o=String(i),c="".concat(t,"[]"),u=h[c];u&&Array.isArray(u)?(u=u.map(String)).includes(o)?h[c]=(0,l.Od)(u,(function(e){return e===o})):h[c]=u.concat(o):h[c]=[o]})):h=a(a({},h),n),p&&(h._limit=c||20,h[d]=0),f(h,{pushHistory:s})}},59733:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/triggers",function(){return t(46756)}])}},function(e){e.O(0,[3879,5716,881,4506,8180,9774,2888,179],(function(){return n=59733,e(e.s=n);var n}));var n=e.O();_N_E=n}]);