(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4249],{58122:function(e,n,t){"use strict";t.d(n,{CL:function(){return f},FS:function(){return g},JZ:function(){return v},e7:function(){return m},v0:function(){return p},wx:function(){return h}});var r=t(12757),i=t(82394),u=t(43313),c=t(93348),o=t(32151),l=t(90211),s=t(84779);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e){var n=e.statistics,t=Object.keys(n),r=Array(u.Dy.length).fill(0);return 0===t.length?null:(t.forEach((function(e){if(u.Dy.includes(e)){var t=u.CC[e],i=n[e],c=i,o=!1,l=[2,3],a=u.Ub[e],d=u.oH[e],p=u.OD[e];if(u.y_.includes(e))o=!0,l=[2,1,2];else if(e in u.Sq){i=(0,s.Jw)(i,0);var f=u.Sq[e];c=n[f]}var g={columnFlexNumbers:l,name:t,progress:o,rate:c,successDirection:d,warning:p};u.y_.includes(e)||(g.value=i),r[a]=g}})),r)}function f(e){var n=e.columnTypes,t=void 0===n?{}:n,r=e.statistics,i=Object.keys(r);if(0===i.length)return null;var c=Object.values(t),s=c.length,a=[];a.push({name:"Column count",successDirection:u.oH.column_count,value:(0,l.x6)(s)}),i.forEach((function(e){if(u.Zu.includes(e)){var n=u.CC[e],t=r[e],i=u.OD[e];a.push({name:n,successDirection:u.oH[e],value:(0,l.x6)(t),warning:i})}}));var d=(0,o.QO)(c),p=d.countCategory,f=d.countDatetime,g=d.countNumerical;return a.push({name:"Categorical Features",rate:p/s,value:(0,l.x6)(p)},{name:"Numerical Features",rate:g/s,value:(0,l.x6)(g)},{name:"Datetime Features",rate:f/s,value:(0,l.x6)(f)}),a}function g(e){return"string"===typeof e?e:JSON.stringify(e)}function h(e,n){var t,r;return null===e||void 0===e||null===(t=e.find((function(e){var t=e.block;return n(t)})))||void 0===t||null===(r=t.variables)||void 0===r?void 0:r.map((function(e){var n=e.value;return d(d({},e),{},{value:g(n)})}))}function v(e,n){return n===c.Xm.TIME?e.push({uuid:"execution_date",value:"<run datetime>"}):n===c.Xm.EVENT&&e.push({uuid:"event",value:"<trigger event>"}),e}function m(e){return e?Object.entries(e).reduce((function(e,n){var t=(0,r.Z)(n,2),u=t[0],c=t[1],o=c;try{o=JSON.parse(c)}catch(l){}return d(d({},e),{},(0,i.Z)({},u,o))}),{}):e}},93348:function(e,n,t){"use strict";t.d(n,{U5:function(){return o},Xm:function(){return i},Z4:function(){return l},fq:function(){return c}});var r,i,u=t(82394);!function(e){e.API="api",e.EVENT="event",e.TIME="time"}(i||(i={}));var c,o,l=(r={},(0,u.Z)(r,i.API,(function(){return"API"})),(0,u.Z)(r,i.EVENT,(function(){return"event"})),(0,u.Z)(r,i.TIME,(function(){return"schedule"})),r);!function(e){e.ACTIVE="active",e.INACTIVE="inactive"}(c||(c={})),function(e){e.ONCE="@once",e.HOURLY="@hourly",e.DAILY="@daily",e.WEEKLY="@weekly",e.MONTHLY="@monthly"}(o||(o={}))},1410:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return K}});var r=t(77837),i=t(82394),u=t(12757),c=t(38860),o=t.n(c),l=t(12691),s=t.n(l),a=t(82684),d=t(83455),p=t(34376),f=t(60328),g=t(47999),h=t(86532),v=t(34744),m=t(67971),b=t(87372),x=t(31866),j=t(10919),y=t(38965),_=t(93348),O=t(62609),Z=t(86673),C=t(19711),P=t(9518),w=t(23831),I=t(73942),E=t(49125),k=t(37391),S=P.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1xgfh62-0"})(["border-bottom:1px solid ",";padding:","px;"],w.Z.borders.medium,E.tr),D=P.default.div.withConfig({displayName:"indexstyle__CardsStyle",componentId:"sc-1xgfh62-1"})([""," height:80px;display:flex;overflow-x:scroll;"],k.w5),T=P.default.div.withConfig({displayName:"indexstyle__VariableCardStyle",componentId:"sc-1xgfh62-2"})(["background-color:",";border-radius:","px;flex-shrink:0;margin-right:","px;padding:","px;"],w.Z.background.output,I.n_,E.iI,E.tr),N=t(73899),A=t(58122),Y=t(28598);var M=function(e){var n=e.hasOverride,t=e.scheduleType,r=e.variables,i=e.variablesOverride,c=[];return Object.entries(r).forEach((function(e){var n=(0,u.Z)(e,2),t=n[0],r=n[1],o=null===i||void 0===i?void 0:i[t];c.push({uuid:t,value:(0,A.FS)(o||r)})})),(0,A.JZ)(c,t),(0,Y.jsxs)(S,{children:[(0,Y.jsx)(Z.Z,{mb:2,children:(0,Y.jsxs)(C.ZP,{bold:!0,large:!0,monospace:!0,muted:!0,children:["Runtime variables",n&&" (override)"]})}),(0,Y.jsx)(D,{noScrollbarTrackBackground:!0,children:r&&c.map((function(e){var n=e.uuid,t=e.value;return(0,Y.jsxs)(T,{children:[(0,Y.jsx)(C.ZP,{monospace:!0,small:!0,children:n}),(0,Y.jsx)(C.ZP,{color:N.Or,monospace:!0,small:!0,children:(0,A.FS)(t)})]})}))})]})},F=t(17903),q=t(46261),V=t(41374),B=t(10503),H=t(59920),R=t(42305),z=t(7715),L=t(96510),J=t(66653),X=t(90211),U=t(24141);function G(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?G(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function $(e){var n=e.pipeline,t=(0,p.useRouter)(),r=n.uuid,c=(0,a.useState)(null),o=c[0],l=c[1],P=(0,U.i)().height,w=V.ZP.variables.pipelines.list(r).data,I=null===w||void 0===w?void 0:w.variables,k=V.ZP.pipeline_schedules.pipelines.list(r,{},{refreshInterval:7500}),S=k.data,D=k.mutate,T=(0,a.useMemo)((function(){return(null===S||void 0===S?void 0:S.pipeline_schedules)||[]}),[S]),N=function(e){return(0,d.Db)(V.ZP.pipeline_schedules.pipelines.useCreate(r),{onSuccess:function(n){return(0,L.wD)(n,{callback:function(n){var t=n.pipeline_schedule.id;null===e||void 0===e||e(t)},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;console.log(t,r)}})}})},G=N((function(e){return t.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(null===n||void 0===n?void 0:n.uuid,"/triggers/").concat(e,"/edit"))})),$=(0,u.Z)(G,2),K=$[0],W=$[1].isLoading,ee=N(D),ne=(0,u.Z)(ee,2),te=ne[0],re=ne[1].isLoading,ie=(0,d.Db)((function(e){return V.ZP.pipeline_schedules.useUpdate(e.id)({pipeline_schedule:e})}),{onSuccess:function(e){return(0,L.wD)(e,{callback:function(){D()},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;console.log(t,r)}})}}),ue=(0,u.Z)(ie,1)[0],ce=(0,d.Db)((function(e){return V.ZP.pipeline_schedules.useDelete(e)()}),{onSuccess:function(e){return(0,L.wD)(e,{callback:function(){D(),t.push("/pipelines/[pipeline]/triggers","/pipelines/".concat(r,"/triggers"))}})}}),oe=(0,u.Z)(ce,1)[0],le=(0,a.useState)(),se=le[0],ae=le[1],de=(0,a.useMemo)((function(){var e,n=null===(e=(0,A.wx)(I,(function(e){return"global"===e.uuid})))||void 0===e?void 0:e.reduce((function(e,n){var t=n.uuid,r=n.value;return Q(Q({},e),{},(0,i.Z)({},t,r))}),{}),t=null===se||void 0===se?void 0:se.variables,u=!(0,z.Qr)(t),c=u?null===se||void 0===se?void 0:se.variables:(0,z.Qr)(n)?null:n;return function(e){var i=e.height-(c?151:0);return(0,Y.jsxs)(Y.Fragment,{children:[c&&(0,Y.jsx)(M,{hasOverride:u,scheduleType:null===se||void 0===se?void 0:se.schedule_type,variables:n,variablesOverride:t}),!c&&(0,Y.jsxs)(Z.Z,{p:E.cd,children:[(0,Y.jsx)(C.ZP,{children:"This pipeline has no runtime variables."}),(0,Y.jsxs)(Z.Z,{mt:1,children:[(0,Y.jsx)(s(),{as:"/pipelines/".concat(r,"/edit?sideview=variables"),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,Y.jsx)(j.Z,{children:"Click here"})})," ",(0,Y.jsx)(C.ZP,{inline:!0,children:"to add variables to this pipeline."})]})]}),(0,Y.jsx)(h.Z,Q(Q({},e),{},{height:i,noStatus:!0}))]})}}),[I,se]);return(0,Y.jsxs)(y.Z,{breadcrumbs:[{label:function(){return"Triggers"}}],buildSidekick:de,pageName:H.M.TRIGGERS,pipeline:n,subheaderBackgroundImage:"/images/banner-shape-purple-peach.jpg",subheaderButton:(0,Y.jsx)(x.ZP,{beforeElement:(0,Y.jsx)(B.mm,{size:2.5*E.iI}),blackBorder:!0,inline:!0,loading:W,noHoverUnderline:!0,onClick:function(){return K({pipeline_schedule:{name:(0,X.Y6)()}})},sameColorAsText:!0,uuid:"PipelineDetailPage/add_new_schedule",children:"Create new trigger"}),subheaderText:(0,Y.jsx)(C.ZP,{bold:!0,large:!0,children:"Run this pipeline using a schedule, event, or API."}),title:function(e){var n=e.name;return"".concat(n," triggers")},uuid:"".concat(H.M.TRIGGERS,"_").concat(r),children:[(0,Y.jsx)(Z.Z,{mt:E.cd,px:E.cd,children:(0,Y.jsxs)(m.Z,{justifyContent:"space-between",children:[(0,Y.jsx)(b.Z,{level:5,children:"Pipeline triggers"}),(0,Y.jsx)(q.Z,{appearBefore:!0,default:!0,fullSize:!0,label:"Creates an @once trigger and runs pipeline immediately",widthFitContent:!0,children:(0,Y.jsx)(f.Z,{beforeIcon:(0,Y.jsx)(B.JM,{inverted:!0,size:2*E.iI}),loading:re,onClick:function(){te({pipeline_schedule:{name:(0,X.Y6)(),schedule_interval:_.U5.ONCE,schedule_type:_.Xm.TIME,start_time:(0,R.d$)((new Date).toISOString(),{dayAgo:!0,utcFormat:!0}),status:_.fq.ACTIVE}})},outline:!0,success:!0,children:"Run pipeline now"})})]})}),(0,Y.jsx)(v.Z,{light:!0,mt:E.cd,short:!0}),(0,Y.jsx)(F.Z,{columnFlex:[null,1,1,3,1,null,null,null],columns:[{label:function(){return""},uuid:"action"},{uuid:"Status"},{uuid:"Type"},{uuid:"Name"},{uuid:"Frequency"},{uuid:"Runs"},{uuid:"Latest run status"},{uuid:"Logs"},{label:function(){return""},uuid:"edit/delete"}],isSelectedRow:function(e){return T[e].id===(null===se||void 0===se?void 0:se.id)},onClickRow:function(e){return ae(T[e])},rows:T.map((function(e,n){var i,u=e.id,c=e.pipeline_runs_count,a=e.last_pipeline_run_status,d=e.name,p=e.schedule_interval,h=e.status;return[(0,Y.jsx)(f.Z,{iconOnly:!0,noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(n){(0,J.j)(n),ue({id:e.id,status:_.fq.ACTIVE===h?_.fq.INACTIVE:_.fq.ACTIVE})},children:_.fq.ACTIVE===h?(0,Y.jsx)(B.dz,{muted:!0,size:2*E.iI}):(0,Y.jsx)(B.Py,{default:!0,size:2*E.iI})},"toggle_trigger_".concat(n)),(0,Y.jsx)(C.ZP,{default:_.fq.INACTIVE===h,monospace:!0,success:_.fq.ACTIVE===h,children:h},"trigger_status_".concat(n)),(0,Y.jsx)(C.ZP,{default:!0,monospace:!0,children:null===(i=_.Z4[e.schedule_type])||void 0===i?void 0:i.call(_.Z4)},"trigger_type_".concat(n)),(0,Y.jsx)(s(),{as:"/pipelines/".concat(r,"/triggers/").concat(u),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,Y.jsx)(j.Z,{bold:!0,onClick:function(e){(0,J.j)(e),t.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(r,"/triggers/").concat(u))},sameColorAsText:!0,children:d})},"trigger_name_".concat(n)),(0,Y.jsx)(C.ZP,{default:!0,monospace:!0,children:p},"trigger_frequency_".concat(n)),(0,Y.jsx)(C.ZP,{default:!0,monospace:!0,children:c},"trigger_run_count_".concat(n)),(0,Y.jsx)(C.ZP,{default:!0,monospace:!0,children:a||"N/A"},"latest_run_status_".concat(n)),(0,Y.jsx)(f.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return t.push("/pipelines/".concat(r,"/logs?pipeline_schedule_id[]=").concat(u))},children:(0,Y.jsx)(B.B4,{default:!0,size:2*E.iI})},"logs_button_".concat(n)),(0,Y.jsxs)(m.Z,{children:[(0,Y.jsx)(f.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return t.push("/pipelines/".concat(r,"/triggers/").concat(u,"/edit"))},title:"Edit",children:(0,Y.jsx)(B.I8,{default:!0,size:2*E.iI})}),(0,Y.jsx)(Z.Z,{mr:1}),(0,Y.jsx)(f.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return l(u)},title:"Delete",children:(0,Y.jsx)(B.rF,{default:!0,size:2*E.iI})}),(0,Y.jsx)(g.Z,{onClickOutside:function(){return l(null)},open:o===u,children:(0,Y.jsx)(O.Z,{danger:!0,onCancel:function(){return l(null)},onClick:function(){l(null),oe(u)},right:2*E.iI,title:"Are you sure you want to delete the trigger ".concat(d,"?"),top:P/2-16*E.iI,width:40*E.iI})})]},"edit_delete_buttons_".concat(n))]})),uuid:"pipeline-triggers"})]})}$.getInitialProps=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var K=$},42305:function(e,n,t){"use strict";t.d(n,{A5:function(){return d},AY:function(){return p},BP:function(){return a},JX:function(){return s},OC:function(){return u},Pc:function(){return f},d$:function(){return l},lJ:function(){return g},n1:function(){return o}});var r=t(92083),i=t.n(r),u="YYYY-MM-DD HH:mm:SS",c="YYYY-MM-DD HH:mm",o="YYYY-MM-DD";function l(e,n){var t=n.utcFormat,r=n.dayAgo,u=i()(e);return t&&(u=u.utc()),r&&(u=u.subtract(1,"days")),u.format(c)}function s(e){return i().unix(e).format(c)}function a(e,n,t){return i()(e).utc().hours(+n).minutes(+t).format()}function d(e){return i()(e).unix()}function p(e,n,t){return"".concat(e.toISOString().split("T")[0]," ").concat(n,":").concat(t)}function f(e){var n=i().unix(+e).utc();return{date:n.toDate(),hour:String(n.hour()),minute:String(n.minute())}}function g(e){return e.padStart(2,"0")}},40183:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/triggers",function(){return t(1410)}])}},function(e){e.O(0,[4259,2212,7689,6674,4804,5872,1774,1374,714,4247,7343,8965,2151,5703,9774,2888,179],(function(){return n=40183,e(e.s=n);var n}));var n=e.O();_N_E=n}]);