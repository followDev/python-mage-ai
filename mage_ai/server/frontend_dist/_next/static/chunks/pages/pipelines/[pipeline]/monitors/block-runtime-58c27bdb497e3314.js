(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4947],{44162:function(e,n,t){"use strict";t.d(n,{HC:function(){return v},Kf:function(){return s},Nk:function(){return p},gE:function(){return h},jv:function(){return f},oh:function(){return d},qn:function(){return l},t1:function(){return m},y9:function(){return b}});var r=t(46313),i=t(23831),o=t(73942),c=t(86422),u=t(49125),a=t(90880),d=68;function l(e,n){var t=(n.theme.borders||i.Z.borders).light,r=(n.theme.monotone||i.Z.monotone).grey500,o=n||{},u=o.isSelected,a=o.theme;return u?t=(a.content||i.Z.content).active:c.tf.TRANSFORMER===e?(t=(a.accent||i.Z.accent).purple,r=(a.accent||i.Z.accent).purpleLight):c.tf.DATA_EXPORTER===e?(t=(a.accent||i.Z.accent).yellow,r=(a.accent||i.Z.accent).yellowLight):c.tf.DATA_LOADER===e?(t=(a.accent||i.Z.accent).blue,r=(a.accent||i.Z.accent).blueLight):c.tf.SCRATCHPAD===e?(t=(a.content||i.Z.content).default,r=(a.accent||i.Z.accent).contentDefaultTransparent):c.tf.SENSOR===e?(t=(a.accent||i.Z.accent).pink,r=(a.accent||i.Z.accent).pinkLight):c.tf.DBT===e&&(t=(a.accent||i.Z.accent).dbt,r=(a.accent||i.Z.accent).dbtLight),{accent:t,accentLight:r}}var s=(0,r.css)([""," "," "," "," ",""],(0,a.eR)(),(function(e){return!e.selected&&!e.hasError&&"\n    border-color: ".concat(l(e.blockType,e).accentLight,";\n  ")}),(function(e){return e.selected&&!e.hasError&&"\n    border-color: ".concat(l(e.blockType,e).accent,";\n  ")}),(function(e){return!e.selected&&e.hasError&&"\n    border-color: ".concat((e.theme.accent||i.Z.accent).negativeTransparent,";\n  ")}),(function(e){return e.selected&&e.hasError&&"\n    border-color: ".concat((e.theme.borders||i.Z.borders).danger,";\n  ")})),p=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],o.n_),f=r.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-1"})([""," border-left-style:solid;border-left-width:2px;border-right-style:solid;border-right-width:2px;border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:solid;border-top-width:2px;padding-bottom:","px;padding-top:","px;position:relative;"," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],s,o.n_,o.n_,u.iI,u.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).codeTextarea,";\n  ")}),(function(e){return!e.hasOutput&&"\n    border-bottom-left-radius: ".concat(o.n_,"px;\n    border-bottom-right-radius: ").concat(o.n_,"px;\n    border-bottom-style: solid;\n    border-bottom-width: 2px;\n  ")})),h=r.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-2"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:10;&:hover{.block-divider-inner{","}}"],2*u.iI,(function(e){return"\n        background-color: ".concat((e.theme.text||i.Z.text).fileBrowser,";\n      ")})),m=r.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-3"})(["height 1px;width:100%;position:absolute;z-index:-1;"]),b=r.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-4"})(["margin-bottom:","px;padding-bottom:","px;padding-left:","px;",""],u.cd*u.iI,u.iI,d,(function(e){return"\n    border-bottom: 1px solid ".concat((e.theme.borders||i.Z.borders).medium,";\n  ")})),v=r.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-5"})(["bottom:","px;left:","px;position:absolute;"],1*u.iI,d)},43032:function(e,n,t){"use strict";t.d(n,{Cl:function(){return u},Nk:function(){return a},ZG:function(){return c}});var r=t(46313),i=t(23831),o=t(49125),c=1.5*o.iI,u=1*c+o.iI/2,a=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-uvd91-0"})([".row:hover{","}"],(function(e){return"\n      background-color: ".concat((e.theme.interactive||i.Z.interactive).hoverBackground,";\n    ")}))},92953:function(e,n,t){"use strict";var r;t.d(n,{a:function(){return r}}),function(e){e.BLOCK_RUNS="block_runs",e.BLOCK_RUNTIME="block_runtime",e.PIPELINE_RUNS="pipeline_runs"}(r||(r={}))},87465:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});t(82684);var r=t(34376),i=t(87372),o=t(38965),c=t(86673),u=t(19711),a=t(2850),d=t(46313),l=t(23831),s=t(49125),p=d.default.div.withConfig({displayName:"indexstyle__LinkStyle",componentId:"sc-1in9sst-0"})(["padding:","px ","px;"," ",""],s.iI,s.tr,(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.interactive||l.Z.interactive).checked,";\n  ")}),(function(e){return!e.selected&&"\n    cursor: pointer;\n  "})),f=t(92953),h=t(59920),m=t(28598);var b=function(e){var n=e.breadcrumbs,t=e.children,d=e.monitorType,l=e.pipeline,b=e.subheader,v=(0,r.useRouter)();return(0,m.jsx)(o.Z,{before:(0,m.jsxs)(a.M,{children:[(0,m.jsx)(c.Z,{p:s.cd,children:(0,m.jsx)(i.Z,{level:4,muted:!0,children:"Insights"})}),(0,m.jsx)(p,{onClick:function(e){e.preventDefault(),v.push("/pipelines/[pipeline]/monitors","/pipelines/".concat(null===l||void 0===l?void 0:l.uuid,"/monitors"))},selected:f.a.PIPELINE_RUNS==d,children:(0,m.jsx)(u.ZP,{children:"Pipeline runs"})}),(0,m.jsx)(p,{onClick:function(e){e.preventDefault(),v.push("/pipelines/[pipeline]/monitors/block-runs","/pipelines/".concat(null===l||void 0===l?void 0:l.uuid,"/monitors/block-runs"))},selected:f.a.BLOCK_RUNS==d,children:(0,m.jsx)(u.ZP,{children:"Block runs"})}),(0,m.jsx)(p,{onClick:function(e){e.preventDefault(),v.push("/pipelines/[pipeline]/monitors/block-runtime","/pipelines/".concat(null===l||void 0===l?void 0:l.uuid,"/monitors/block-runtime"))},selected:f.a.BLOCK_RUNTIME==d,children:(0,m.jsx)(u.ZP,{children:"Block runtime"})})]}),breadcrumbs:n,pageName:h.M.MONITOR,pipeline:l,subheader:b,uuid:"pipeline/monitor",children:t})}},2850:function(e,n,t){"use strict";t.d(n,{M:function(){return c}});var r=t(46313),i=t(23831),o=t(3055),c=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);",""],o.Mz,(function(e){return"\n    border-left: 1px solid ".concat((e.theme.borders||i.Z.borders).medium,";\n  ")}))},45739:function(e,n,t){"use strict";t.d(n,{K:function(){return i}});var r=t(31969),i=function(e){var n=e||r.Z,t=n.brand,i=t.earth200,o=t.earth300,c=t.earth400,u=t.energy200,a=t.energy300,d=t.energy400,l=t.fire200,s=t.fire300,p=t.fire400,f=t.water200,h=t.water300,m=t.water400,b=t.wind200,v=t.wind300,g=t.wind400,x=n.chart;return[x.backgroundPrimary,x.backgroundSecondary,x.backgroundTertiary].concat([g,m,p,d,c,v,h,s,a,o,b,f,l,u,i])}},52359:function(e,n,t){"use strict";var r=t(46313).default.div.withConfig({displayName:"YAxisLabelContainer",componentId:"sc-qwp21x-0"})(["-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);white-space:nowrap;"]);n.Z=r},344:function(e,n,t){"use strict";t.d(n,{P5:function(){return u},Pw:function(){return i},Vs:function(){return d},Xh:function(){return o},fR:function(){return a}});var r=t(5679),i=20,o=10,c=Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:2});function u(e){return"number"!==typeof e?e:e>=1e4?c.format(e):e.toString()}function a(e,n){var t=(0,r.kE)(e)?String((0,r.QV)(e,1)):String(e);return t.length>n?"".concat(t.substring(0,n),"..."):t}function d(e,n,t){var r,i,o;return"undefined"===typeof e||"undefined"===typeof n?0:null===e||void 0===e||null===(r=e(n,t))||void 0===r||null===(i=r.props)||void 0===i||null===(o=i.children)||void 0===o?void 0:o.join("").length}},86422:function(e,n,t){"use strict";t.d(n,{$W:function(){return s},DA:function(){return l},J8:function(){return f},Qj:function(){return h},Ut:function(){return g},V4:function(){return v},VZ:function(){return p},dO:function(){return d},f2:function(){return b},iZ:function(){return m},t6:function(){return c},tf:function(){return a}});var r,i,o,c,u=t(82394);!function(e){e.PYTHON="python",e.R="r",e.SQL="sql",e.YAML="yaml"}(c||(c={}));var a,d=(r={},(0,u.Z)(r,c.PYTHON,"PY"),(0,u.Z)(r,c.R,"R"),(0,u.Z)(r,c.SQL,"SQL"),(0,u.Z)(r,c.YAML,"YAML"),r);!function(e){e.CHART="chart",e.DATA_EXPORTER="data_exporter",e.DATA_LOADER="data_loader",e.DBT="dbt",e.SCRATCHPAD="scratchpad",e.SENSOR="sensor",e.TRANSFORMER="transformer"}(a||(a={}));var l,s=[a.CHART,a.DATA_EXPORTER,a.DATA_LOADER,a.SCRATCHPAD,a.SENSOR,a.TRANSFORMER],p=[a.DATA_EXPORTER,a.DATA_LOADER],f=[a.DATA_EXPORTER,a.DATA_LOADER,a.TRANSFORMER],h=[a.CHART,a.SCRATCHPAD,a.SENSOR],m=[a.SCRATCHPAD];!function(e){e.EXECUTED="executed",e.FAILED="failed",e.NOT_EXECUTED="not_executed",e.UPDATED="updated"}(l||(l={}));var b=[a.DATA_EXPORTER,a.TRANSFORMER],v=(i={},(0,u.Z)(i,a.DATA_EXPORTER,"Data exporter"),(0,u.Z)(i,a.DATA_LOADER,"Data loader"),(0,u.Z)(i,a.SCRATCHPAD,"Scratchpad"),(0,u.Z)(i,a.SENSOR,"Sensor"),(0,u.Z)(i,a.TRANSFORMER,"Transformer"),i),g=[a.DATA_LOADER,a.TRANSFORMER,a.DATA_EXPORTER];o={},(0,u.Z)(o,a.DATA_EXPORTER,"DE"),(0,u.Z)(o,a.DATA_LOADER,"DL"),(0,u.Z)(o,a.SCRATCHPAD,"SP"),(0,u.Z)(o,a.SENSOR,"SR"),(0,u.Z)(o,a.TRANSFORMER,"TF")},68805:function(e,n,t){"use strict";t.r(n);var r=t(77837),i=t(12757),o=t(82394),c=t(38860),u=t.n(c),a=t(82684),d=t(92083),l=t.n(d),s=t(16634),p=t(67971),f=t(87372),h=t(68735),m=t(87465),b=t(86673),v=t(55378),g=t(19711),x=t(41374),R=t(28799),T=t(23831),A=t(73942),Z=t(43032),_=t(92953),y=t(46313),E=t(44162),O=t(24224),D=t(96510),S=t(83455),k=t(28598);function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function j(e){var n=e.pipeline,t=(0,a.useContext)(y.ThemeContext),c=(0,a.useState)(null),d=c[0],C=c[1],j=n.uuid,w=x.ZP.pipelines.detail(j).data,N=(0,a.useMemo)((function(){return P(P({},null===w||void 0===w?void 0:w.pipeline),{},{uuid:j})}),[w,j]),I=x.ZP.pipeline_schedules.pipelines.list(j).data,L=(0,a.useMemo)((function(){return null===I||void 0===I?void 0:I.pipeline_schedules}),[I]),M=(0,a.useMemo)((function(){return(0,O.HK)(null===N||void 0===N?void 0:N.blocks,(function(e){return e.uuid}))||{}}),[N]),X=(0,a.useState)(null),B=X[0],F=X[1],H=(0,S.Db)(function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat((0,R.ZP)(x.x8),"/block_run_time?pipeline_uuid=").concat(j),(n||0===n)&&(t+="&pipeline_schedule_id=".concat(n)),e.abrupt("return",fetch(t,{method:"GET"}));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),{onSuccess:function(e){return(0,D.wD)(e,{callback:function(e){F(e)}})}}),U=(0,i.Z)(H,1)[0];(0,a.useEffect)((function(){U(d)}),[U]);var K=((null===B||void 0===B?void 0:B.monitor_stats)||{}).stats,Y=(0,a.useMemo)((function(){for(var e=new Date,n=[],t=0;t<90;t++)n.unshift(e.toISOString().split("T")[0]),e.setDate(e.getDate()-1);return n}),[]),q=(0,a.useMemo)((function(){if(K)return Object.entries(K).reduce((function(e,n){var t=(0,i.Z)(n,2),r=t[0],c=t[1].data;return P(P({},e),{},(0,o.Z)({},r,Y.map((function(e){return{x:e,y:e in c?[c[e]]:null}}))))}),{})}),[K]),z=(0,a.useMemo)((function(){var e=[];return e.push({bold:!0,label:function(){return"Monitors"}}),e}),[N]);return(0,k.jsx)(m.Z,{breadcrumbs:z,monitorType:_.a.BLOCK_RUNTIME,pipeline:N,subheader:(0,k.jsx)(p.Z,{children:(0,k.jsxs)(v.Z,{backgroundColor:T.Z.interactive.defaultBackground,label:"Trigger:",onChange:function(e){var n=e.target.value;"initial"!==n?(U(n),C(n)):(U(),C(null))},value:d||"initial",children:[(0,k.jsx)("option",{value:"initial",children:"All"}),L&&L.map((function(e){return(0,k.jsx)("option",{value:e.id,children:e.name})}))]})}),children:(0,k.jsx)(b.Z,{mx:2,children:q&&Object.entries(q).map((function(e){var n,r=(0,i.Z)(e,2),o=r[0],c=r[1];return(0,k.jsxs)(b.Z,{mt:2,children:[(0,k.jsxs)(p.Z,{alignItems:"center",children:[(0,k.jsx)(b.Z,{mx:1,children:(0,k.jsx)(s.Z,{color:(0,E.qn)(null===(n=M[o])||void 0===n?void 0:n.type,{theme:t}).accent,size:Z.ZG,square:!0})}),(0,k.jsx)(f.Z,{level:4,children:o})]}),(0,k.jsx)("div",{style:{backgroundColor:T.Z.background.chartBlock,borderRadius:"".concat(A.TR,"px"),marginTop:"8px"},children:(0,k.jsx)(h.Z,{data:c,getX:function(e){return l()(e.x).valueOf()},gridProps:{stroke:"black",strokeDasharray:null,strokeOpacity:.2},height:200,hideGridX:!0,margin:{top:10,bottom:30,left:35,right:-1},noCurve:!0,renderXTooltipContent:function(e){return(0,k.jsx)(g.ZP,{center:!0,small:!0,children:l()(e.x).format("MMM DD")})},renderYTooltipContent:function(e){var n,t=null===e||void 0===e||null===(n=e.y)||void 0===n?void 0:n[0];return void 0!=t&&(0,k.jsx)(g.ZP,{center:!0,small:!0,children:t.toFixed?t.toFixed(3):t})},thickStroke:!0,xLabelFormat:function(e){return l()(e).format("MMM DD")},xLabelRotate:!1})})]})}))})})}j.getInitialProps=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n.default=j},76017:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/monitors/block-runtime",function(){return t(68805)}])}},function(e){e.O(0,[3662,4259,2740,6674,2714,9832,2874,1374,6182,1404,9898,8965,3461,9774,2888,179],(function(){return n=76017,e(e.s=n);var n}));var n=e.O();_N_E=n}]);