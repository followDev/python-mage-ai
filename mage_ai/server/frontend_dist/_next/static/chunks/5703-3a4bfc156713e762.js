"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5703],{44162:function(n,e,t){t.d(e,{HC:function(){return g},Kf:function(){return s},Nk:function(){return f},gE:function(){return v},jv:function(){return m},nz:function(){return p},oh:function(){return l},qn:function(){return a},t1:function(){return h},y9:function(){return b}});var r=t(9518),o=t(23831),i=t(73942),c=t(86422),u=t(49125),d=t(90880),l=68;function a(n,e){var t=(e.theme.borders||o.Z.borders).light,r=(e.theme.monotone||o.Z.monotone).grey500,i=e||{},u=i.isSelected,d=i.theme;return u?t=(d.content||o.Z.content).active:c.tf.TRANSFORMER===n?(t=(d.accent||o.Z.accent).purple,r=(d.accent||o.Z.accent).purpleLight):c.tf.DATA_EXPORTER===n?(t=(d.accent||o.Z.accent).yellow,r=(d.accent||o.Z.accent).yellowLight):c.tf.DATA_LOADER===n?(t=(d.accent||o.Z.accent).blue,r=(d.accent||o.Z.accent).blueLight):c.tf.SCRATCHPAD===n?(t=(d.content||o.Z.content).default,r=(d.accent||o.Z.accent).contentDefaultTransparent):c.tf.SENSOR===n?(t=(d.accent||o.Z.accent).pink,r=(d.accent||o.Z.accent).pinkLight):c.tf.DBT===n&&(t=(d.accent||o.Z.accent).dbt,r=(d.accent||o.Z.accent).dbtLight),{accent:t,accentLight:r}}var s=(0,r.css)([""," "," "," "," "," "," ",""],(0,d.eR)(),(function(n){return!n.selected&&!n.hasError&&"\n    border-color: ".concat(a(n.blockType,n).accentLight,";\n  ")}),(function(n){return n.selected&&!n.hasError&&"\n    border-color: ".concat(a(n.blockType,n).accent,";\n  ")}),(function(n){return!n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.accent||o.Z.accent).negativeTransparent,";\n  ")}),(function(n){return n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.borders||o.Z.borders).danger,";\n  ")}),(function(n){return n.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(n){return n.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),f=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],i.n_),p=r.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-1"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding:","px;position:sticky;top:-5px;"," ",""],s,i.n_,i.n_,i.M8,i.mP,i.M8,i.mP,i.M8,i.mP,u.iI,(function(n){return"\n    background-color: ".concat((n.theme||o.Z).background.content,";\n  ")}),(function(n){return n.zIndex&&"\n    z-index: ".concat(6+(n.zIndex||0),";\n  ")})),m=r.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-2"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding-bottom:","px;padding-top:","px;position:relative;"," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],s,i.M8,i.mP,i.M8,i.mP,u.iI,u.iI,(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).codeTextarea,";\n  ")}),(function(n){return!n.hasOutput&&"\n    border-bottom-left-radius: ".concat(i.n_,"px;\n    border-bottom-right-radius: ").concat(i.n_,"px;\n    border-bottom-style: ").concat(i.M8,";\n    border-bottom-width: ").concat(i.mP,"px;\n  ")})),v=r.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-3"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:10;bottom:","px;&:hover{.block-divider-inner{","}}"],2*u.iI,.75*u.iI,(function(n){return"\n        background-color: ".concat((n.theme.text||o.Z.text).fileBrowser,";\n      ")})),h=r.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-4"})(["height 1px;width:100%;position:absolute;z-index:-1;top:","px;"],1.5*u.iI),b=r.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-5"})(["margin-bottom:","px;padding-bottom:","px;",""],u.cd*u.iI,u.iI,(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.borders||o.Z.borders).medium,";\n    padding-left: ").concat(n.normalPadding?u.iI:l,"px;\n  ")})),g=r.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-6"})(["bottom:","px;left:","px;position:absolute;"],1*u.iI,l)},86532:function(n,e,t){t.d(e,{Z:function(){return Y}});var r,o=t(77555),i=t(82394),c=t(12757),u=t(77837),d=t(38860),l=t.n(d),a=t(51774),s=t.n(a),f=t(9518),p=t(4804),m=t(82684),v=t(83455),h=t(86422),b=t(67971),g=t(16634),y=t(86673),x=t(54283),k=t(19711),A=t(23831),R=t(10503),E=t(49125),T=(E.iI,{height:10,width:10}),O=[h.tf.DATA_EXPORTER,h.tf.SENSOR];!function(n){n.NORTH="NORTH",n.SOUTH="SOUTH"}(r||(r={}));var D=t(73942),C=t(37391),w=f.default.div.withConfig({displayName:"indexstyle__GraphContainerStyle",componentId:"sc-bc2ei5-0"})(["div:only-child{","}",""],C.w5,(function(n){return n.height&&"\n    height: ".concat(n.height,"px;\n  ")})),Z=f.default.div.withConfig({displayName:"indexstyle__NodeStyle",componentId:"sc-bc2ei5-1"})(["border-radius:","px;border:1px solid transparent;min-width:fit-content;"," "," "," ",""],D.BG,(function(n){return n.selected&&"\n    border-color: ".concat((n.theme.content||A.Z.content).active,";\n  ")}),(function(n){return n.backgroundColor&&"\n    background-color: ".concat(n.backgroundColor,";\n  ")}),(function(n){return(n.isCancelled||n.disabled)&&"\n    // opacity doesn\u2019t work on Safari\n    border-color: ".concat((n.theme.content||A.Z.content).active,";\n    border-style: dashed;\n    cursor: not-allowed;\n  ")}),(function(n){return n.disabled&&"\n    &:hover {\n      cursor: not-allowed;\n    }\n  "})),_=f.default.div.withConfig({displayName:"indexstyle__RuntimeStyle",componentId:"sc-bc2ei5-2"})(["margin-right:","px;padding:12px 4px;height:100%;width:50px;background:rgba(0,0,0,0.2);background-blend-mode:soft-light;"],2*E.iI),j=t(44162),P=t(5679),S=function(n){var e=n/1e3,t=4-Math.floor(e).toString().length,r=(0,P.QV)(e,t>=0?t:0),o="s";return r>1e3&&(r=(0,P.QV)(r/60,0),o="m"),"".concat(r).concat(o)},I=t(28598);var N=function(n){var e=n.block,t=n.children,r=n.disabled,o=n.hasFailed,i=n.isCancelled,c=n.isInProgress,u=n.isQueued,d=n.isSuccessful,l=(n.onClick,n.runtime),a=n.selected,s=(0,m.useContext)(f.ThemeContext),p=e.type,v=e.uuid,h=!(c||u||o||d||i),T=d&&!(c||u),D=o&&!(c||u),C="";return h?C="No status":T?C="Successful execution":D?C="Failed execution":c?C="Currently executiing":i&&(C="Cancelled execution"),(0,I.jsx)(Z,{backgroundColor:(0,j.qn)(p,{theme:s}).accent,disabled:r,isCancelled:i,selected:a,children:(0,I.jsxs)(b.Z,{alignItems:"center",children:[l&&(0,I.jsx)(_,{backgroundColor:(0,j.qn)(p,{theme:s}).accent,children:(0,I.jsx)(b.Z,{justifyContent:"center",children:(0,I.jsx)(k.ZP,{inverted:O.includes(p),xsmall:!0,children:S(l)})})}),!l&&(0,I.jsx)(y.Z,{ml:2}),(0,I.jsxs)(b.Z,{alignItems:"center",justifyContent:"center",style:{height:2*E.iI,width:2*E.iI},title:C,children:[c&&(0,I.jsx)(x.Z,{color:(s||A.Z).content.active,small:!0}),T&&(0,I.jsx)(R.Jr,{size:2*E.iI,success:!0}),D&&(0,I.jsx)(R.x8,{danger:!0,size:1.5*E.iI}),h&&(0,I.jsx)(g.Z,{borderSize:1,size:1*E.iI})]}),(0,I.jsx)(y.Z,{ml:1}),(0,I.jsx)(b.Z,{alignItems:"center",justifyContent:"center",style:{padding:"8px 0",height:"100%"},children:(0,I.jsx)(k.ZP,{inverted:O.includes(p),monospace:!0,small:!0,children:t})})]})},v)},B=t(31866),L=t(98781),M=t(41374),H=t(66050),F=t(24224),U=t(25958),z=t(96510),X=t(87323);function G(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function V(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?G(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var q=s()((0,u.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(2018)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.Canvas);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}}),Q=s()((0,u.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(2018)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.Node);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}}),W=s()((0,u.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(2018)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.Edge);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}}),K=(s()((0,u.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(2018)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.MarkerArrow);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}}),s()((0,u.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(2018)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.Port);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}}));var Y=function(n){var e=n.blockRefs,t=n.blockStatus,i=n.editingBlock,u=n.enablePorts,d=void 0!==u&&u,l=n.fetchPipeline,a=n.height,s=n.heightOffset,g=void 0===s?10*E.iI:s,x=n.noStatus,A=n.pipeline,R=n.runningBlocks,O=void 0===R?[]:R,D=n.selectedBlock,C=n.setEditingBlock,Z=n.setErrors,_=n.setSelectedBlock,P=n.showDynamicBlocks,S=void 0!==P&&P,G=(0,m.useContext)(f.ThemeContext),Y=(0,m.useState)([]),$=Y[0],J=Y[1],nn=(0,m.useState)(!1),en=nn[0],tn=nn[1],rn=d&&en,on=(null===i||void 0===i?void 0:i.upstreamBlocks)||{},cn=on.block,un=on.values,dn=void 0===un?[]:un,ln=(0,m.useMemo)((function(){return dn.length}),[dn]),an=(0,m.useMemo)((function(){var n;return(null===A||void 0===A||null===(n=A.blocks)||void 0===n?void 0:n.filter((function(n){var e=n.type;return h.tf.SCRATCHPAD!==e})))||[]}),[null===A||void 0===A?void 0:A.blocks]),sn=(0,F.HK)((0,X.cU)(an,an),(function(n){return n.block.uuid})),fn=(0,m.useMemo)((function(){return an}),[an,sn,S]),pn=(0,m.useMemo)((function(){return(0,F.HK)(fn,(function(n){return n.uuid}))}),[fn]),mn=(0,m.useMemo)((function(){return(0,F.HK)(O,(function(n){return n.uuid}))}),[O]),vn=(0,v.Db)(M.ZP.blocks.pipelines.useUpdate(null===A||void 0===A?void 0:A.uuid,encodeURIComponent(null===cn||void 0===cn?void 0:cn.uuid)),{onSuccess:function(n){return(0,z.wD)(n,{callback:function(){C({upstreamBlocks:null}),null===l||void 0===l||l()},onErrorCallback:function(n,e){return null===Z||void 0===Z?void 0:Z({errors:e,response:n})}})}}),hn=(0,c.Z)(vn,2),bn=hn[0],gn=hn[1].isLoading,yn=(0,v.Db)((function(n){var e=n.fromBlock,t=n.toBlock,r=n.removeDependency;return M.ZP.blocks.pipelines.useUpdate(null===A||void 0===A?void 0:A.uuid,encodeURIComponent(t.uuid))({block:V(V({},t),{},{upstream_blocks:r?t.upstream_blocks.filter((function(n){return n!==e.uuid})):t.upstream_blocks.concat(e.uuid)})})}),{onSuccess:function(n){return(0,z.wD)(n,{callback:function(){null===l||void 0===l||l()},onErrorCallback:function(n,e){return null===Z||void 0===Z?void 0:Z({errors:e,response:n})}})}}),xn=(0,c.Z)(yn,1)[0],kn=(0,m.useCallback)((function(n){var t=n.type,r=n.uuid;if(null===_||void 0===_||_(n),J([]),null!==e&&void 0!==e&&e.current){var o,i=e.current["".concat(t,"s/").concat(r,".py")];null===i||void 0===i||null===(o=i.current)||void 0===o||o.scrollIntoView()}}),[e,_]),An=(0,m.useCallback)((function(n){J([]),C((function(e){var t=e.upstreamBlocks.values||[],r=t.findIndex((function(e){var t=e.uuid;return n.uuid===t}));return V(V({},e),{},{upstreamBlocks:V(V({},e.upstreamBlocks),{},{values:r>=0?(0,F.oM)(t,r):t.concat(n)})})}))}),[C]),Rn=(0,m.useMemo)((function(){var n={};return fn.forEach((function(e){e.upstream_blocks.forEach((function(t){n[t]||(n[t]=[]),n[t].push(e)}))})),n}),[fn]),En=(0,m.useCallback)((function(n){var e;if(L.q.INTEGRATION===(null===A||void 0===A?void 0:A.type)&&h.tf.TRANSFORMER!==n.type){var t,r={};if(h.t6.YAML===n.language&&(r=(0,p.Qc)(n.content)),h.tf.DATA_LOADER===n.type)e="Source: ".concat(null===(t=r)||void 0===t?void 0:t.source);else if(h.tf.DATA_EXPORTER===n.type){var o;e="Destination: ".concat(null===(o=r)||void 0===o?void 0:o.destination)}}else h.tf.DBT===n.type&&(e=(0,U.$)(n));var i=(null===sn||void 0===sn?void 0:sn[n.uuid])||{},c=i.dynamic,u=i.dynamicUpstreamBlock,d=(i.reduceOutput,i.reduceOutputUpstreamBlock);return e||(e=n.uuid,c?e="[dynamic] ".concat(e):u&&!d&&(e="[dynamic child] ".concat(e))),e}),[sn,A]),Tn=(0,m.useMemo)((function(){var n=[],e=[];return fn.forEach((function(i){var c,u=En(i),d=i.type,l=i.upstream_blocks,a=void 0===l?[]:l,s=i.uuid,f=Rn[s],p=[];f?p.push.apply(p,(0,o.Z)(f.map((function(n){return V(V({},T),{},{id:"".concat(s,"-").concat(n.uuid,"-from"),side:r.SOUTH})})))):d!==h.tf.DATA_EXPORTER&&p.push(V(V({},T),{},{id:"".concat(s,"-from"),side:r.SOUTH})),0===a.length&&d!==h.tf.DATA_LOADER&&p.push(V(V({},T),{},{id:"".concat(s,"-to"),side:r.NORTH})),null===a||void 0===a||a.forEach((function(n){p.push(V(V({},T),{},{id:"".concat(n,"-").concat(s,"-to"),side:r.NORTH})),e.push({from:n,fromPort:"".concat(n,"-").concat(s,"-from"),id:"".concat(n,"-").concat(s),to:s,toPort:"".concat(n,"-").concat(s,"-to")})})),n.push({data:{block:i},height:37,id:s,ports:p,width:u.length*E.KF+5*E.iI+((null===cn||void 0===cn?void 0:cn.uuid)===i.uuid?19*E.KF:0)+(null!==t&&void 0!==t&&null!==(c=t[i.uuid])&&void 0!==c&&c.runtime?50:0)})})),{edges:e,nodes:n}}),[null===cn||void 0===cn?void 0:cn.uuid,t,fn,En,Rn]),On=Tn.edges,Dn=Tn.nodes,Cn=(0,m.useCallback)((function(n){if(x)return{};if(t){var e=t[n.uuid]||{},r=e.status,o=e.runtime;return{hasFailed:H.V.FAILED===r,isCancelled:H.V.CANCELLED===r,isInProgress:H.V.RUNNING===r,isQueued:H.V.INITIAL===r,isSuccessful:H.V.COMPLETED===r,runtime:o}}var i;return{hasFailed:h.DA.FAILED===n.status,isInProgress:mn[n.uuid],isQueued:mn[n.uuid]&&(null===(i=O[0])||void 0===i?void 0:i.uuid)!==n.uuid,isSuccessful:h.DA.EXECUTED===n.status}}),[mn,t]);return(0,I.jsxs)(I.Fragment,{children:[cn&&(0,I.jsxs)(y.Z,{my:3,px:E.cd,children:[(0,I.jsxs)(y.Z,{mb:E.cd,children:[(0,I.jsxs)(k.ZP,{children:["Select parent block(s) for ",(0,I.jsx)(k.ZP,{color:(0,j.qn)(cn.type,{theme:G}).accent,inline:!0,monospace:!0,children:cn.uuid}),":"]}),(0,I.jsx)(y.Z,{mt:1,children:dn.map((function(n,e){var t,r=n.uuid;return(0,I.jsxs)(k.ZP,{color:(0,j.qn)(null===(t=pn[r])||void 0===t?void 0:t.type,{theme:G}).accent,inline:!0,monospace:!0,children:[r,ln>=2&&e<=ln-2?(0,I.jsx)(k.ZP,{inline:!0,children:",\xa0"}):null]},r)}))})]}),(0,I.jsxs)(b.Z,{alignItems:"center",children:[(0,I.jsx)(B.ZP,{compact:!0,inline:!0,loading:gn,onClick:function(){return bn({block:V(V({},cn),{},{upstream_blocks:dn.map((function(n){return n.uuid}))})})},uuid:"DependencyGraph/save_parents",children:"Save dependencies"}),(0,I.jsx)(y.Z,{ml:1}),(0,I.jsx)(B.ZP,{compact:!0,inline:!0,noBackground:!0,onClick:function(){J([]),C({upstreamBlocks:null})},uuid:"DependencyGraph/cancel_save_parents",children:"Cancel"})]})]}),(0,I.jsx)(w,{height:a-g,children:(0,I.jsx)(q,{arrow:null,disabled:!1,edge:function(n){var e,t=pn[n.source];return(0,I.jsx)(W,V(V({},n),{},{onClick:function(n,e){J([e.id])},onRemove:function(n,e){var t=pn[e.from],r=pn[e.to];xn({fromBlock:t,removeDependency:!0,toBlock:r}),J([])},removable:!(null!==i&&void 0!==i&&i.upstreamBlocks),style:{stroke:null===(e=(0,j.qn)(null===t||void 0===t?void 0:t.type,{theme:G}))||void 0===e?void 0:e.accent}}))},edges:On,fit:!0,node:function(n){var e,t,r;return(0,I.jsx)(Q,V(V({},n),{},{dragType:"port",linkable:!0,onClick:function(n,e){var t=e.data.block;(null===cn||void 0===cn?void 0:cn.uuid)===t.uuid||(cn?An(t):kn(t))},onEnter:function(){return!(null!==i&&void 0!==i&&i.upstreamBlocks)&&tn(!0)},onLeave:function(){return tn(!1)},port:rn?(0,I.jsx)(K,{onDrag:function(){return tn(!0)},onDragEnd:function(){return tn(!1)},onEnter:function(){return tn(!0)},rx:10,ry:10,style:{fill:(0,j.qn)(null===n||void 0===n||null===(e=n.properties)||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.block)||void 0===r?void 0:r.type,{theme:G}).accent,stroke:"white",strokeWidth:"1px"}}):null,style:{fill:"transparent",stroke:"transparent",strokeWidth:0},children:function(n){var e=n.node.data.block,t=Cn(e);return(0,I.jsx)("foreignObject",{height:n.height,style:{pointerEvents:"none"},width:n.width,x:0,y:0,children:(0,I.jsxs)(N,V(V({block:e,disabled:(null===cn||void 0===cn?void 0:cn.uuid)===e.uuid,selected:cn?!!(0,F.sE)(dn,(function(n){return n.uuid===e.uuid})):(null===D||void 0===D?void 0:D.uuid)===e.uuid},t),{},{children:[En(e),(null===cn||void 0===cn?void 0:cn.uuid)===e.uuid&&" (editing)"]}),e.uuid)})}}))},nodes:Dn,onNodeLink:function(n,e,t,r){var o,i=pn[e.id],c=pn[t.id],u=(null===A||void 0===A?void 0:A.type)===L.q.INTEGRATION&&((null===i||void 0===i?void 0:i.type)===h.tf.DATA_EXPORTER||(null===i||void 0===i?void 0:i.type)===h.tf.DATA_LOADER&&(null===c||void 0===c?void 0:c.type)===h.tf.DATA_EXPORTER);null!==i&&void 0!==i&&null!==(o=i.upstream_blocks)&&void 0!==o&&o.includes(c.uuid)||e.id===t.id||u||xn({fromBlock:i,toBlock:c})},onNodeLinkCheck:function(n,e,t){return!On.some((function(n){return n.from===e.id&&n.to===t.id}))},selections:$,zoomable:!0})})]})}},17903:function(n,e,t){t.d(e,{Z:function(){return R}});var r=t(82394),o=t(12691),i=t.n(o),c=t(82684),u=t(67971),d=t(10919),l=t(86673),a=t(19711),s=t(46261),f=t(9518),p=t(23831),m=t(49125),v=f.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-0"})(["contain:size;width:100%;",""],(function(n){return n.columnBorders&&"\n    border-collapse: separate;\n  "})),h=f.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-1"})(["",""],(function(n){return!n.noHover&&"\n    &:hover {\n      background: ".concat((n.theme.interactive||p.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),b=(0,f.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(n){return!n.alignTop&&"\n    vertical-align: middle;\n  "}),(function(n){return n.alignTop&&"\n    vertical-align: top;\n  "}),(function(n){return!n.noBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.compact&&"\n    padding: ".concat(m.iI/2,"px ").concat(m.iI,"px;\n  ")}),(function(n){return!n.compact&&"\n    padding: ".concat(m.iI,"px ").concat(2*m.iI,"px;\n  ")}),(function(n){return n.maxWidth&&"\n    max-width: ".concat(n.maxWidth,";\n  ")})),g=f.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-2"})([""," "," "," ",""],b,(function(n){return n.columnBorders&&"\n    border: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n    border-right: none;\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.sticky&&"\n    background-color: ".concat((n.theme||p.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    top: 0;\n\n    &:first-child {\n      left: 0;\n      z-index: 2;\n    }\n  ")})),y=f.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-3"})([""," "," "," "," "," ",""],b,(function(n){return n.columnBorders&&"\n    border-left: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.stickyFirstColumn&&"\n    background-color: ".concat((n.theme||p.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    left: 0;\n  ")}),(function(n){return n.selected&&"\n    background-color: ".concat((n.theme.interactive||p.Z.interactive).activeBorder,";\n  ")}),(function(n){return n.wrapColumns&&"\n    white-space: break-spaces;\n  "})),x=t(28598);function k(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function A(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?k(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var R=function(n){var e=n.alignTop,t=n.buildLinkProps,r=n.columnBorders,o=n.columnFlex,f=n.columnMaxWidth,p=n.columns,m=void 0===p?[]:p,b=n.compact,k=n.isSelectedRow,R=n.noBorder,E=n.noHeader,T=n.onClickRow,O=n.rows,D=n.stickyFirstColumn,C=n.stickyHeader,w=n.uuid,Z=n.wrapColumns,_=(0,c.useMemo)((function(){return o.reduce((function(n,e){return n+(e||0)}),0)}),o),j=(0,c.useCallback)((function(n){if(o[n]){var e=Math.round(o[n]/_*100);return"".concat(e,"%")}return null}),[]),P=(0,c.useMemo)((function(){return null===O||void 0===O?void 0:O.map((function(n,o){var c=null===t||void 0===t?void 0:t(o),u=n.map((function(t,i){return(0,x.jsx)(y,{alignTop:e,columnBorders:r,compact:b,last:i===n.length-1,maxWidth:null===f||void 0===f?void 0:f(i),noBorder:R,selected:null===k||void 0===k?void 0:k(o),stickyFirstColumn:D&&0===i,width:j(i),wrapColumns:Z,children:t},"".concat(w,"-row-").concat(o,"-cell-").concat(i))})),l=(0,x.jsx)(h,{noHover:!(c||T),onClick:T?function(){return T(o)}:null,children:u},"".concat(w,"-row-").concat(o));return c?(0,x.jsx)(i(),A(A({},c),{},{passHref:!0,children:(0,x.jsx)(d.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:l})})):l}))}),[e,t,j,f,m,b,k,R,T,O]);return(0,x.jsxs)(v,{columnBorders:r,children:[(null===m||void 0===m?void 0:m.length)>=1&&!E&&(0,x.jsx)(h,{noHover:!0,children:m.map((function(n,e){return(0,x.jsx)(g,{columnBorders:r,compact:b,last:e===m.length-1,noBorder:R,sticky:C,children:(0,x.jsxs)(u.Z,{alignItems:"center",children:[(0,x.jsx)(a.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:n.label?n.label():n.uuid}),n.tooltipMessage&&(0,x.jsx)(l.Z,{ml:"4px",children:(0,x.jsx)(s.Z,{appearBefore:!0,label:(0,x.jsx)(a.ZP,{leftAligned:!0,children:n.tooltipMessage}),lightBackground:!0,primary:!0})})]})},"".concat(w,"-col-").concat(n.uuid,"-").concat(e))}))}),P]})}},66050:function(n,e,t){var r;t.d(e,{V:function(){return r}}),function(n){n.CANCELLED="cancelled",n.COMPLETED="completed",n.FAILED="failed",n.INITIAL="initial",n.RUNNING="running"}(r||(r={}))},86422:function(n,e,t){t.d(e,{$W:function(){return s},DA:function(){return a},HX:function(){return m},J8:function(){return p},Qj:function(){return v},Ut:function(){return y},V4:function(){return g},VZ:function(){return f},dO:function(){return l},f2:function(){return b},iZ:function(){return h},t6:function(){return c},tf:function(){return d}});var r,o,i,c,u=t(82394);!function(n){n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(c||(c={}));var d,l=(r={},(0,u.Z)(r,c.PYTHON,"PY"),(0,u.Z)(r,c.R,"R"),(0,u.Z)(r,c.SQL,"SQL"),(0,u.Z)(r,c.YAML,"YAML"),r);!function(n){n.CHART="chart",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.TRANSFORMER="transformer"}(d||(d={}));var a,s=[d.CHART,d.DATA_EXPORTER,d.DATA_LOADER,d.SCRATCHPAD,d.SENSOR,d.TRANSFORMER],f=[d.DATA_EXPORTER,d.DATA_LOADER],p=[d.DATA_EXPORTER,d.DATA_LOADER,d.TRANSFORMER],m=[d.DATA_EXPORTER,d.DATA_LOADER,d.DBT,d.TRANSFORMER],v=[d.CHART,d.SCRATCHPAD,d.SENSOR],h=[d.SCRATCHPAD];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(a||(a={}));var b=[d.DATA_EXPORTER,d.TRANSFORMER],g=(o={},(0,u.Z)(o,d.DATA_EXPORTER,"Data exporter"),(0,u.Z)(o,d.DATA_LOADER,"Data loader"),(0,u.Z)(o,d.SCRATCHPAD,"Scratchpad"),(0,u.Z)(o,d.SENSOR,"Sensor"),(0,u.Z)(o,d.TRANSFORMER,"Transformer"),o),y=[d.DATA_LOADER,d.TRANSFORMER,d.DATA_EXPORTER];i={},(0,u.Z)(i,d.DATA_EXPORTER,"DE"),(0,u.Z)(i,d.DATA_LOADER,"DL"),(0,u.Z)(i,d.SCRATCHPAD,"SP"),(0,u.Z)(i,d.SENSOR,"SR"),(0,u.Z)(i,d.TRANSFORMER,"TF")},87323:function(n,e,t){t.d(e,{cU:function(){return c}});var r=t(82684),o=t(24224);function i(n,e){return function(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{includeAllNodes:!1},i=(0,o.HK)(t,(function(n){return n.uuid})),c=(r||{}).includeAllNodes,u=[];function d(t){if(t){var r=(t[e]||[]).map((function(n){return i[n]}));(0===r.length||c&&n.uuid!==t.uuid)&&u.push(t),r.forEach((function(n){d(n)}))}}return d(n),u}(n,"upstream_blocks",e,{includeAllNodes:!0})}function c(n,e){return(0,r.useMemo)((function(){return n.map((function(n){var t=function(n,e){var t=i(n,e);return{dynamicUpstreamBlock:t.find((function(e){var t=e.configuration,r=e.uuid;return(null===t||void 0===t?void 0:t.dynamic)&&r!==(null===n||void 0===n?void 0:n.uuid)})),reduceOutputUpstreamBlock:t.find((function(e){var t=e.configuration,r=e.uuid;return(null===t||void 0===t?void 0:t.reduce_output)&&r!==(null===n||void 0===n?void 0:n.uuid)}))}}(n,e),r=t.dynamicUpstreamBlock,o=t.reduceOutputUpstreamBlock,c=(n||{}).configuration||{};return{block:n,dynamic:!!c.dynamic,dynamicUpstreamBlock:r,reduceOutput:!!c.reduce_output,reduceOutputUpstreamBlock:o}}))}),[e,null===e||void 0===e?void 0:e.map((function(n){var e=n.configuration;return null===e||void 0===e?void 0:e.dynamic})),null===e||void 0===e?void 0:e.map((function(n){var e=n.configuration;return null===e||void 0===e?void 0:e.reduce_output})),null===e||void 0===e?void 0:e.map((function(n){return n.upstream_blocks}))])}},25958:function(n,e,t){function r(n){var e,t=null===n||void 0===n||null===(e=n.configuration)||void 0===e?void 0:e.file_path;if(t){var r=t.split("/"),o=r[r.length-1].split(".");return o.pop(),o.join(".")}}t.d(e,{$:function(){return r}})}}]);