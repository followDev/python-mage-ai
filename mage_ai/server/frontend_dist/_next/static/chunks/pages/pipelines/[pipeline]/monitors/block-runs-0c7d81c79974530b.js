(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5912],{44162:function(e,n,t){"use strict";t.d(n,{HC:function(){return g},Kf:function(){return s},Nk:function(){return p},gE:function(){return v},jv:function(){return b},nz:function(){return f},oh:function(){return a},qn:function(){return d},t1:function(){return h},y9:function(){return m}});var r=t(9518),o=t(23831),i=t(86422),c=t(73942),u=t(49125),l=t(90880),a=68;function d(e,n){var t,r,c=((null===n||void 0===n||null===(t=n.theme)||void 0===t?void 0:t.borders)||o.Z.borders).light,u=((null===n||void 0===n||null===(r=n.theme)||void 0===r?void 0:r.monotone)||o.Z.monotone).grey500,l=n||{},a=l.blockColor,d=l.isSelected,s=l.theme;return d?c=((null===s||void 0===s?void 0:s.content)||o.Z.content).active:i.tf.TRANSFORMER===e||a===i.Lq.PURPLE?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).purple,u=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).purpleLight):i.tf.DATA_EXPORTER===e||a===i.Lq.YELLOW?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).yellow,u=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).yellowLight):i.tf.DATA_LOADER===e||a===i.Lq.BLUE?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).blue,u=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).blueLight):i.tf.SENSOR===e||a===i.Lq.PINK?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).pink,u=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).pinkLight):i.tf.DBT===e?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).dbt,u=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).dbtLight):a===i.Lq.TEAL?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).teal,u=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).tealLight):(i.tf.SCRATCHPAD===e||a===i.Lq.GREY||i.tf.CUSTOM===e&&!a)&&(c=((null===s||void 0===s?void 0:s.content)||o.Z.content).default,u=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).contentDefaultTransparent),{accent:c,accentLight:u}}var s=(0,r.css)([""," "," "," "," "," "," ",""],(0,l.eR)(),(function(e){return!e.selected&&!e.hasError&&"\n    border-color: ".concat(d(e.blockType,e).accentLight,";\n  ")}),(function(e){return e.selected&&!e.hasError&&"\n    border-color: ".concat(d(e.blockType,e).accent,";\n  ")}),(function(e){return!e.selected&&e.hasError&&"\n    border-color: ".concat((e.theme.accent||o.Z.accent).negativeTransparent,";\n  ")}),(function(e){return e.selected&&e.hasError&&"\n    border-color: ".concat((e.theme.borders||o.Z.borders).danger,";\n  ")}),(function(e){return e.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(e){return e.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),p=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],c.n_),f=r.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-1"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding:","px;position:sticky;top:-5px;"," ",""],s,c.n_,c.n_,c.M8,c.mP,c.M8,c.mP,c.M8,c.mP,u.iI,(function(e){return"\n    background-color: ".concat((e.theme||o.Z).background.content,";\n  ")}),(function(e){return e.zIndex&&"\n    z-index: ".concat(6+(e.zIndex||0),";\n  ")})),b=r.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-2"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding-bottom:","px;padding-top:","px;position:relative;"," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],s,c.M8,c.mP,c.M8,c.mP,u.iI,u.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).codeTextarea,";\n  ")}),(function(e){return!e.hasOutput&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom-style: ").concat(c.M8,";\n    border-bottom-width: ").concat(c.mP,"px;\n  ")})),v=r.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-3"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:8;bottom:","px;&:hover{"," .block-divider-inner{","}}"],2*u.iI,.5*u.iI,(function(e){return e.additionalZIndex>0&&"\n      z-index: ".concat(8+e.additionalZIndex,";\n    ")}),(function(e){return"\n        background-color: ".concat((e.theme.text||o.Z.text).fileBrowser,";\n      ")})),h=r.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-4"})(["height 1px;width:100%;position:absolute;z-index:-1;top:","px;"],1.5*u.iI),m=r.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-5"})(["margin-bottom:","px;padding-bottom:","px;",""],u.cd*u.iI,u.iI,(function(e){return"\n    border-bottom: 1px solid ".concat((e.theme.borders||o.Z.borders).medium,";\n    padding-left: ").concat(e.normalPadding?u.iI:a,"px;\n  ")})),g=r.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-6"})(["bottom:","px;left:","px;position:absolute;"],1*u.iI,a)},43032:function(e,n,t){"use strict";t.d(n,{Cl:function(){return u},Nk:function(){return l},ZG:function(){return c}});var r=t(9518),o=t(23831),i=t(49125),c=1.5*i.iI,u=1*c+i.iI/2,l=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-uvd91-0"})([".row:hover{","}"],(function(e){return"\n      background-color: ".concat((e.theme.interactive||o.Z.interactive).hoverBackground,";\n    ")}))},86422:function(e,n,t){"use strict";t.d(n,{$W:function(){return p},DA:function(){return s},HX:function(){return v},J8:function(){return b},Lq:function(){return a},Qj:function(){return h},Ut:function(){return A},V4:function(){return O},VZ:function(){return f},dO:function(){return d},f2:function(){return g},iZ:function(){return m},t6:function(){return c},tf:function(){return l}});var r,o,i,c,u=t(82394);!function(e){e.PYTHON="python",e.R="r",e.SQL="sql",e.YAML="yaml"}(c||(c={}));var l,a,d=(r={},(0,u.Z)(r,c.PYTHON,"PY"),(0,u.Z)(r,c.R,"R"),(0,u.Z)(r,c.SQL,"SQL"),(0,u.Z)(r,c.YAML,"YAML"),r);!function(e){e.CHART="chart",e.CUSTOM="custom",e.DATA_EXPORTER="data_exporter",e.DATA_LOADER="data_loader",e.DBT="dbt",e.SCRATCHPAD="scratchpad",e.SENSOR="sensor",e.TRANSFORMER="transformer"}(l||(l={})),function(e){e.BLUE="blue",e.GREY="grey",e.PINK="pink",e.PURPLE="purple",e.TEAL="teal",e.YELLOW="yellow"}(a||(a={}));var s,p=[l.CHART,l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SCRATCHPAD,l.SENSOR,l.TRANSFORMER],f=[l.DATA_EXPORTER,l.DATA_LOADER],b=[l.DATA_EXPORTER,l.DATA_LOADER,l.TRANSFORMER],v=[l.DATA_EXPORTER,l.DATA_LOADER,l.DBT,l.TRANSFORMER],h=[l.CHART,l.SCRATCHPAD,l.SENSOR],m=[l.SCRATCHPAD];!function(e){e.EXECUTED="executed",e.FAILED="failed",e.NOT_EXECUTED="not_executed",e.UPDATED="updated"}(s||(s={}));var g=[l.DATA_EXPORTER,l.TRANSFORMER],O=(o={},(0,u.Z)(o,l.CUSTOM,"Custom"),(0,u.Z)(o,l.DATA_EXPORTER,"Data exporter"),(0,u.Z)(o,l.DATA_LOADER,"Data loader"),(0,u.Z)(o,l.SCRATCHPAD,"Scratchpad"),(0,u.Z)(o,l.SENSOR,"Sensor"),(0,u.Z)(o,l.TRANSFORMER,"Transformer"),o),A=[l.DATA_LOADER,l.TRANSFORMER,l.DATA_EXPORTER];i={},(0,u.Z)(i,l.DATA_EXPORTER,"DE"),(0,u.Z)(i,l.DATA_LOADER,"DL"),(0,u.Z)(i,l.SCRATCHPAD,"SP"),(0,u.Z)(i,l.SENSOR,"SR"),(0,u.Z)(i,l.TRANSFORMER,"TF")},55378:function(e,n,t){"use strict";var r=t(82394),o=t(26304),i=t(82684),c=t(9518),u=t(69898),l=t(31969),a=t(49125),d=t(28598),s=["beforeIcon","children","label","placeholder"];function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=c.default.select.withConfig({displayName:"Select__SelectStyle",componentId:"sc-q6ezu2-0"})(["",' background-image:url("data:image/svg+xml;utf8,','");background-repeat:no-repeat;background-position:-webkit-calc(100% - ',"px) center;background-position:calc(100% - ","px) center;padding-right:","px;&:hover{cursor:pointer;}"," "," "," ",""],u.p,"\n  <svg width='12' height='12' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>\n    <path\n      clip-rule='evenodd'\n      d='M8.0015 11.7109L14.0022 5.71017L12.588 4.29597L7.99485 8.88914L3.40754 4.34482L2 5.76567L8.0015 11.7109Z'\n      fill='%23B4B8C0'\n      fill-rule='evenodd'\n    />\n  </svg>",a.iI,a.iI,2.5*a.iI,(function(e){return!e.hasContent&&!e.showPlaceholder&&"\n    color: ".concat((e.theme.content||l.Z.content).muted,";\n  ")}),(function(e){return e.backgroundColor&&"\n    background-color: ".concat(e.backgroundColor,";\n  ")}),(function(e){return e.color&&"\n    color: ".concat(e.color,";\n  ")}),(function(e){return e.showPlaceholder&&"\n    color: ".concat((e.theme.content||l.Z.content).inverted,";\n  ")})),v=function(e,n){var t=e.beforeIcon,r=e.children,i=e.label,c=e.placeholder,l=(0,o.Z)(e,s);return(0,d.jsx)(u.Z,f(f({},l),{},{beforeIcon:t,input:(0,d.jsxs)(b,f(f({},l),{},{children:[(i||c)&&(0,d.jsx)("option",{disabled:!0,selected:!0,value:"",children:i||c}),r]})),label:i,placeholder:c,ref:n,setContentOnMount:!0,showLabelRequirement:function(e){return!!e.content}}))};n.Z=i.forwardRef(v)},50094:function(e,n,t){"use strict";t.r(n);var r=t(77837),o=t(75582),i=t(82394),c=t(38860),u=t.n(c),l=t(82684),a=t(92083),d=t.n(a),s=t(9518),p=t(21679),f=t(16634),b=t(67971),v=t(87372),h=t(87465),m=t(41788),g=t(55378),O=t(86673),A=t(82531),R=t(23831),T=t(67400),E=t(43032),x=t(92953),y=t(44162),_=t(24224),Z=t(28598);function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?D(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function P(e){var n=e.pipeline,t=(0,l.useContext)(s.ThemeContext),r=(0,l.useState)(null),c=r[0],u=r[1],a=n.uuid,m=A.ZP.pipelines.detail(a,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,D=(0,l.useMemo)((function(){return S(S({},null===m||void 0===m?void 0:m.pipeline),{},{uuid:a})}),[m,a]),P=A.ZP.pipeline_schedules.pipelines.list(a).data,C=(0,l.useMemo)((function(){return null===P||void 0===P?void 0:P.pipeline_schedules}),[P]),w=(0,l.useMemo)((function(){return(0,_.HK)(null===D||void 0===D?void 0:D.blocks,(function(e){return e.uuid}))||{}}),[D]),L={pipeline_uuid:a};(c||0===c)&&(L.pipeline_schedule_id=Number(c));var j=A.ZP.monitor_stats.detail("block_run_count",L),k=j.data,I=j.mutate,N=((null===k||void 0===k?void 0:k.monitor_stat)||{}).stats,M=(0,l.useMemo)((function(){for(var e=new Date,n=[],t=0;t<90;t++)n.unshift(e.toISOString().split("T")[0]),e.setDate(e.getDate()-1);return n}),[]),B=(0,l.useMemo)((function(){if(N)return Object.entries(N).reduce((function(e,n){var t=(0,o.Z)(n,2),r=t[0],c=t[1].data,u=M.map((function(e){return S({date:e},c[e]||{})}));return S(S({},e),{},(0,i.Z)({},r,u))}),{})}),[M,N]),H=(0,l.useMemo)((function(){var e=[];return e.push({bold:!0,label:function(){return"Monitors"}}),e}),[D]);return(0,Z.jsx)(h.Z,{breadcrumbs:H,monitorType:x.a.BLOCK_RUNS,pipeline:D,subheader:(0,Z.jsx)(b.Z,{children:(0,Z.jsxs)(g.Z,{backgroundColor:R.Z.interactive.defaultBackground,label:"Trigger:",onChange:function(e){var n=e.target.value;"initial"!==n?(u(n),I(n)):(I(),u(null))},value:c||"initial",children:[(0,Z.jsx)("option",{value:"initial",children:"All"}),C&&C.map((function(e){return(0,Z.jsx)("option",{value:e.id,children:e.name})}))]})}),children:(0,Z.jsx)(O.Z,{mx:2,children:B&&Object.entries(B).map((function(e){var n,r,i=(0,o.Z)(e,2),c=i[0],u=i[1];return(0,Z.jsxs)(O.Z,{mt:3,children:[(0,Z.jsxs)(b.Z,{alignItems:"center",children:[(0,Z.jsx)(O.Z,{mx:1,children:(0,Z.jsx)(f.Z,{color:(0,y.qn)(null===(n=w[c])||void 0===n?void 0:n.type,{blockColor:null===(r=w[c])||void 0===r?void 0:r.color,theme:t}).accent,size:E.ZG,square:!0})}),(0,Z.jsx)(v.Z,{level:4,children:c})]}),(0,Z.jsx)(O.Z,{mt:1,children:(0,Z.jsx)(p.Z,{colors:T.BAR_STACK_COLORS,data:u,getXValue:function(e){return e.date},height:200,keys:T.BAR_STACK_STATUSES,margin:{bottom:30,left:35,right:0,top:10},xLabelFormat:function(e){return d()(e).format("MMM DD")}})})]},c)}))})})}P.getInitialProps=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n.default=(0,m.Z)(P)},83542:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/monitors/block-runs",function(){return t(50094)}])}},function(e){e.O(0,[3850,2083,5896,2714,9767,6579,434,9898,1830,6623,7400,9774,2888,179],(function(){return n=83542,e(e.s=n);var n}));var n=e.O();_N_E=n}]);