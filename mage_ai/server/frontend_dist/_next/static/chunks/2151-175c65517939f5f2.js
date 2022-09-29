"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2151],{70001:function(t,e,n){var r=n(26304),i=n(77555),o=n(82394),a=n(82684),c=n(26226),u=n(84969),l=n(90948),s=n(65743),d=n(28108),f=n(79487),h=n(29989),p=n(46313),m=n(61655),v=n(9846),g=n(65376),y=n(48072),b=n(24903),x=n(84181),j=n(98677),E=n(19711),O=n(31969),_=n(73899),Z=n(31012),w=n(49125),T=n(2005),I=n(28598),S=["height","width"];function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var A={bottom:5*w.iI,left:3*w.iI,right:20*w.iI,top:0},C=function(t){return t.x},L=function(t){return t.y},M=(0,m.Z)((function(t){var e=t.data,n=t.height,r=t.hideTooltip,o=t.large,c=t.margin,m=void 0===c?{}:c,w=t.renderTooltipContent,S=t.showTooltip,D=t.tooltipData,M=t.tooltipLeft,P=t.tooltipOpen,k=t.tooltipTop,N=t.width,Y=t.xAxisLabel,H=t.xNumTicks,U=t.yLabelFormat,F=t.ySerialize,B=U;B||(B=function(t){return t.length>20?"".concat(t.substring(0,20),"..."):t});var G=o?Z.iD:Z.J5,V=(0,a.useContext)(p.ThemeContext),z=R(R({},A),m),X=e.slice(Math.max(0,e.length-50)),W=Object.keys(X[0]||[]).filter((function(t){return"x"===t})),J=(0,b.Z)({domain:W,range:[_.hM]}),K=(0,x.Z)({domain:[0,Math.max.apply(Math,(0,i.Z)(X.map(C)))],nice:!0}),$=(0,j.Z)({domain:X.map(L),padding:.35}),Q={active:(null===V||void 0===V?void 0:V.content.default)||O.Z.content.default,backgroundPrimary:(null===V||void 0===V?void 0:V.chart.backgroundPrimary)||O.Z.chart.backgroundPrimary,backgroundSecondary:(null===V||void 0===V?void 0:V.chart.backgroundSecondary)||O.Z.chart.backgroundSecondary,muted:(null===V||void 0===V?void 0:V.content.muted)||O.Z.content.muted,primary:(null===V||void 0===V?void 0:V.chart.primary)||O.Z.chart.primary,tooltipBackground:(null===V||void 0===V?void 0:V.background.navigation)||O.Z.background.navigation},q=X.map(F),tt=Math.min(Math.max.apply(Math,(0,i.Z)(q.map((function(t){return String(t).length})))),20);6*tt>2*z.right?z.right+=5.5*tt:6*tt>=z.right&&(z.right+=3.75*tt);var et=N-z.left-z.right,nt=n-z.top-z.bottom;z.left+=7*tt,K.rangeRound([0,et]),$.rangeRound([nt,0]);var rt=X.map(C).length,it=$(q[rt-1]),ot=(0,a.useCallback)((function(t){var e=(0,y.Z)(t)||{x:0,y:0},n=e.x,r=e.y,i=1-(r-it/2)/(nt-it),o=Math.floor(i*rt),a=X[o];"undefined"===typeof a&&(a=X[o-1]),r>it&&r<nt-it&&S({tooltipData:a,tooltipLeft:n,tooltipTop:r+z.top})}),[X,rt,z.top,S,it,nt]);return N<10?null:(0,I.jsxs)("div",{children:[(0,I.jsxs)("svg",{height:n,width:N,children:[(0,I.jsx)(s.Z,{fill:"transparent",height:n-(z.top+z.bottom),onMouseLeave:function(){return r()},onMouseMove:ot,onTouchMove:ot,onTouchStart:ot,rx:14,width:N-z.left,x:z.left,y:0}),(0,I.jsxs)(h.Z,{left:z.left,top:z.top,children:[(0,I.jsx)(d.Z,{color:J,data:X,height:nt,keys:W,pointerEvents:"none",xScale:K,y:F,yScale:$,children:function(t){return t.map((function(t){return t.bars.map((function(e){return(0,I.jsx)("g",{children:(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("rect",{fill:Q.backgroundPrimary,height:e.height,pointerEvents:"none",rx:4,width:e.width,x:e.x,y:e.y})})},"barstack-horizontal-".concat(t.index,"-").concat(e.index))}))}))}}),(0,I.jsx)(u.Z,{hideTicks:!0,scale:$,stroke:Q.muted,tickFormat:function(t){return B(t)},tickLabelProps:function(){return{fill:Q.active,fontFamily:T.ry,fontSize:G,style:{width:"10px"},textAnchor:"end"}},tickStroke:Q.muted,tickValues:q,top:2}),(0,I.jsx)(l.Z,{label:Y,labelProps:{fill:Q.muted,fontFamily:T.ry,fontSize:G,textAnchor:"middle"},numTicks:H,scale:K,stroke:Q.muted,tickLabelProps:function(){return{fill:Q.active,fontFamily:T.ry,fontSize:G,textAnchor:"middle"}},tickStroke:Q.muted,top:nt})]}),D&&(0,I.jsx)("g",{children:(0,I.jsx)(f.Z,{from:{x:z.left,y:k},pointerEvents:"none",stroke:_.Ej,strokeDasharray:"5,2",strokeWidth:1,to:{x:et+z.left,y:k}})})]}),P&&D&&(0,I.jsx)(v.Z,{left:M,style:R(R({},g.j),{},{backgroundColor:Q.tooltipBackground}),top:k,children:(0,I.jsxs)(E.ZP,{black:!0,small:!0,children:[null===w||void 0===w?void 0:w(D),!w&&C(D).toFixed(4)]})})]})}));e.Z=function(t){var e=t.height,n=t.width,i=(0,r.Z)(t,S);return(0,I.jsx)("div",{style:{height:e,width:"undefined"===typeof n?"100%":n},children:(0,I.jsx)(c.Z,{children:function(t){var e=t.width,n=t.height;return(0,I.jsx)(M,R(R({},i),{},{height:n,width:e}))}})})}},66872:function(t,e,n){n.d(e,{Z:function(){return U}});var r=n(26304),i=n(77555),o=n(82394),a=n(82684),c=n(26226),u=n(84969),l=n(90948),s=n(65743),d=n(29989),f=n(46313),h=n(61655),p=n(9846),m=n(65376),v=n(48072),g=n(98677),y=n(84181),b=n(67971),x=n(54283),j=n(19711),E=n(52359),O=n(31969),_=n(73899),Z=n(88560),w=n(2005),T=n(31012),I=n(49125),S=n(88543),D=n(6568),R=function(t){return t.slice(0,10)},A=function(t,e){var n=t.toISOString().slice(0,10),r=e.toISOString().slice(0,10);return"".concat(n,":").concat(r)},C=n(344),L=n(45739),M=n(28598),P=["height","loading","selected","width","xAxisLabel","yAxisLabel"];function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Y={bottom:I.iI,left:3*I.iI,right:0,top:1*I.iI},H=(0,h.Z)((function(t){var e=t.columnType,n=t.data,r=void 0===n?[]:n,o=t.getBarColor,c=t.getXValue,h=t.getYValue,b=t.height,x=t.hideTooltip,E=t.large,P=t.margin,k=void 0===P?{}:P,H=t.muted,U=t.noPadding,F=t.numberOfXTicks,B=t.renderTooltipContent,G=t.selected,V=t.showAxisLabels,z=t.showTooltip,X=t.showYAxisLabels,W=t.showZeroes,J=t.sortData,K=t.tooltipData,$=t.tooltipLeft,Q=t.tooltipOpen,q=t.tooltipTop,tt=t.width,et=t.xLabelFormat,nt=t.yLabelFormat,rt=E?T.J5:T.VK,it=(0,a.useCallback)((function(t){return c?c(t):t[0]}),[c]),ot=(0,a.useCallback)((function(t){return h?h(t):t[1]}),[h]),at=(0,a.useContext)(f.ThemeContext),ct=e===Z.RL.DATETIME,ut=N(N({},Y),k);V&&(ut=N(N({},ut),{},{left:ut.left+I.iI}));var lt=J?J(r):r.sort((function(t,e){return e[1]-t[1]})),st=ct?r.sort((function(t,e){return new Date(t[0])-new Date(e[0])})).filter((function(t){return!!t[0]})):lt.slice(0,60),dt=tt-(ut.left+ut.right),ft=b-(ut.bottom+ut.top),ht=ct?function(t,e){var n,r=t.map((function(t){return new Date(t[0])})).sort((function(t,e){return t-e}));return(0,D.Z)({domain:(n=r,[(0,S.Z)(n[0]),(0,S.Z)(n[n.length-1])]),nice:!0,range:[0,e]})}(st,dt):null,pt=function(t,e){if(null===e)return{};var n=e.ticks().map((function(t){return t.toISOString()})),r={},i=0,o=1;return t.forEach((function(t){var e=new Date(t[0]),a=t[1],c=n[i],u=n[o];if(c&&u){var l=new Date(c),s=new Date(u),d=A(l,s);if(e>=l&&e<s)r[d]=(r[d]||0)+a;else for(;o<n.length||!r[d];)if(i+=1,o+=1,l=new Date(n[i]),s=new Date(n[o]),d=A(l,s),e>=l&&e<s)return void(r[d]=(r[d]||0)+a)}})),n.reduce((function(t,e,n,r){if(0===n)return t;var i=R(e),o=R(r[n-1]);return t.push("".concat(o,":").concat(i)),t}),[]).forEach((function(t){r[t]=r[t]||0})),r}(st,ht);st=ht?Object.entries(pt).sort((function(t,e){return new Date(R(t[0]))-new Date(R(e[0]))})):st;var mt=ht?Math.max.apply(Math,(0,i.Z)(Object.values(pt))):0,vt=st.reduce((function(t,e){return(0!==ot(e)||ct||W)&&t.push(it(e)),t}),[]),gt=vt.length,yt=function(t,e,n){return n?.05:t>=30&&e<300?.5:t>=15?.3:t>=5?.1:t>2?.05:2===t?.025:0}(gt,tt,ct),bt=(0,g.Z)({domain:vt,paddingInner:U?null:yt,range:[0,dt],round:!1}),xt=(0,y.Z)({domain:[0,Math.max.apply(Math,(0,i.Z)(st.map(ot)))],range:[ft,0],round:!0}),jt=(0,L.K)(at),Et={active:((null===at||void 0===at?void 0:at.content)||O.Z.content).active,default:jt[0],muted:((null===at||void 0===at?void 0:at.monotone)||O.Z.monotone).gray,selected:((null===at||void 0===at?void 0:at.elevation)||O.Z.elevation).visualizationAccent},Ot=Et.default;H?Ot=Et.muted:G&&(Ot=Et.selected);var _t=gt?ct?mt:Math.max.apply(Math,(0,i.Z)(st.map((function(t){return ot(t)})))):0,Zt=Math.floor(_t/6),wt=[0],Tt=0;if(_t>6)for(;Tt<_t;)wt.push(Tt+Zt),Tt+=Zt;else for(;Tt<=_t;)wt.push(Tt+1),Tt+=1;_t>9999?ut=N(N({},ut),{},{left:E?8*I.iI:4.1*I.iI}):_t>999&&(ut=N(N({},ut),{},{left:E?5*I.iI:3.6*I.iI}));var It=ct?2.25:0,St=gt<10||e===Z.RL.NUMBER||e===Z.RL.NUMBER_WITH_DECIMALS||ct||X,Dt=(0,a.useCallback)((function(t){var e=(0,v.Z)(t)||{x:0,y:0},n=e.x,r=e.y,i=(n-(V?ut.left:0))/dt,o=Math.floor(gt*i),a=st[o];"undefined"===typeof a&&(a=st[0]);var c=it(a);c=c.length>15?"".concat(c.slice(0,21)):c;var u=B?B(a):"".concat(c," (").concat(ot(a),")");z({tooltipData:u,tooltipLeft:n-ut.left,tooltipTop:r+ut.top})}),[st,gt,it,ot,ut.left,ut.top,B,V,z,tt]);return tt<10||!r.length?null:(0,M.jsxs)("div",{children:[(0,M.jsxs)("svg",{height:b+ut.bottom*(ct?7.5:3),width:tt,children:[(0,M.jsx)(d.Z,{left:V?ut.left:0,top:ut.top+It,children:st.reduce((function(t,e){var n=it(e),r=ot(e);if(0!==r){var i,a=bt.bandwidth(),c=ft-(null!==(i=xt(r))&&void 0!==i?i:0),u=bt(n),l=ft-c;t.push((0,M.jsx)(s.Z,{fill:o?o(e):Ot,height:c,onMouseLeave:function(){return x()},onMouseMove:Dt,onTouchMove:Dt,onTouchStart:Dt,width:a,x:u,y:l},"bar-".concat(n)))}return t}),[])}),V&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(u.Z,{left:ut.left,scale:xt,stroke:Et.muted,tickFormat:function(t){return nt?nt(t):(0,C.P5)(t)},tickLabelProps:function(){return{fill:Et.active,fontFamily:w.ry,fontSize:rt,textAnchor:"end",transform:"translate(-2,2.5)"}},tickStroke:Et.muted,tickValues:wt,top:ut.top+It}),(0,M.jsx)(l.Z,{left:ut.left,numTicks:ct?void 0:F||6,orientation:"top",scale:ht||bt,stroke:Et.muted,tickFormat:function(t){return et?et(String(t)):ct?t.toISOString().slice(0,10):String(t)},tickLabelProps:function(t){return{fill:St?Et.active:"transparent",fontFamily:w.ry,fontSize:rt,textAnchor:"middle",transform:ct?"rotate(-90,".concat(ht(t),",0) translate(-33,10)"):"translate(0, ".concat(3*ut.bottom,")")}},tickLineProps:{transform:"translate(0,".concat(I.iI,")")},tickStroke:St?Et.muted:"transparent",top:ft+ut.top+It})]})]}),Q&&K&&(0,M.jsx)(p.Z,{left:$,style:m.j,top:q,children:(0,M.jsx)(j.ZP,{color:_.E5,small:!0,children:K})})]})}));var U=function(t){var e=t.height,n=t.loading,i=t.selected,o=t.width,a=t.xAxisLabel,u=t.yAxisLabel,l=(0,r.Z)(t,P);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)("div",{style:{display:"flex",height:e,marginBottom:I.iI,width:"100%"},children:[u&&(0,M.jsx)(b.Z,{alignItems:"center",fullHeight:!0,justifyContent:"center",width:28,children:(0,M.jsx)(E.Z,{children:(0,M.jsx)(j.ZP,{center:!0,muted:!0,small:!0,children:u})})}),(0,M.jsxs)("div",{style:{height:e,width:u?0===o?o:o-28:o},children:[n&&(0,M.jsx)(x.Z,{}),!n&&(0,M.jsx)(c.Z,{children:function(t){var e=t.height,n=t.width;return(0,M.jsx)(H,N(N({},l),{},{height:e,selected:i,width:n}))}})]})]}),a&&(0,M.jsx)("div",{style:{paddingLeft:u?36:0,paddingTop:4},children:(0,M.jsx)(j.ZP,{center:!0,muted:!0,small:!0,children:a})})]})}},320:function(t,e,n){n.d(e,{Z:function(){return I}});var r=n(26304),i=n(82394),o=n(12757),a=n(26226),c=n(28940),u=n(82684),l=n(29989),s=n(46313),d=n(11684),f=n(24903),h=n(19711),p=n(23831),m=n(2005),v=n(31012),g=n(49125),y=n(45739),b=n(28598),x=["height","width","xAxisLabel"];function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O={bottom:0,left:0,right:0,top:0},_=function(t){var e=t.endAngle;return{endAngle:e>Math.PI?2*Math.PI:0,opacity:0,startAngle:e>Math.PI?2*Math.PI:0}},Z=function(t){var e=t.startAngle;return{endAngle:t.endAngle,opacity:1,startAngle:e}};function w(t){var e=t.animate,n=t.arcs,r=t.path,i=t.getKey,a=t.getColor,c=t.onClickDatum,u=t.textColor;return(0,d.useTransition)(n,{enter:Z,from:e?_:Z,keys:i,leave:e?_:Z,update:Z})((function(t,e,n){var l=n.key,s=r.centroid(e),f=(0,o.Z)(s,2),h=f[0],p=f[1],g=e.endAngle-e.startAngle>=.1;return(0,b.jsxs)("g",{children:[(0,b.jsx)(d.animated.path,{d:(0,d.to)([t.startAngle,t.endAngle],(function(t,n){return r(E(E({},e),{},{endAngle:n,startAngle:t}))})),fill:a(e),onClick:function(){return c(e)},onTouchStart:function(){return c(e)}}),g&&(0,b.jsx)(d.animated.g,{style:{opacity:t.opacity},children:(0,b.jsx)("text",{dy:".33em",fill:u,fontFamily:m.ry,fontSize:v.J5,pointerEvents:"none",textAnchor:"middle",x:h,y:p,children:i(e)})})]},l)}))}function T(t){var e=t.animate,n=void 0===e||e,r=t.data,i=t.getX,o=t.getY,a=t.height,d=t.margin,h=void 0===d?O:d,m=t.textColor,v=t.width,x=(0,u.useState)(null),j=x[0],_=x[1],Z=(0,u.useContext)(s.ThemeContext),T=m||(null===Z||void 0===Z?void 0:Z.content.active)||p.Z.content.active;if(v<10)return null;var I=(0,f.Z)({domain:r.map((function(t){return i(t)})),range:(0,y.K)(Z)}),S=v-h.left-h.right,D=a-h.top-h.bottom,R=Math.min(S,D)/2,A=D/2,C=S/2,L=Math.min(S/4,12*g.iI);return(0,b.jsx)("svg",{height:a,width:v,children:(0,b.jsx)(l.Z,{left:C+h.left,top:A+h.top,children:(0,b.jsx)(c.Z,{cornerRadius:g.iI/2,data:j?r.filter((function(t){return JSON.stringify(t)===JSON.stringify(j)})):r,innerRadius:Math.max(R-L,12.25),outerRadius:R,padAngle:.005,pieValue:o,children:function(t){return(0,b.jsx)(w,E(E({},t),{},{animate:n,getColor:function(t){var e=t.data;return I(i(e))},getKey:function(t){var e=t.data;return i(e)},onClickDatum:function(t){var e=t.data;return n&&_(j&&JSON.stringify(j)===JSON.stringify(e)?null:e)},textColor:T}))}})})})}function I(t){var e=t.height,n=t.width,i=t.xAxisLabel,o=(0,r.Z)(t,x),c={};return"undefined"!==typeof e&&(c.height=e),"undefined"!==typeof n&&(c.width=n),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{style:c,children:(0,b.jsx)(a.Z,{children:function(t){var e=t.width,n=t.height;return(0,b.jsx)(T,E(E({},o),{},{height:n,width:e}))}})}),i&&(0,b.jsx)("div",{style:{paddingTop:4},children:(0,b.jsx)(h.ZP,{center:!0,muted:!0,small:!0,children:i})})]})}},45739:function(t,e,n){n.d(e,{K:function(){return i}});var r=n(31969),i=function(t){var e=t||r.Z,n=e.brand,i=n.earth200,o=n.earth300,a=n.earth400,c=n.energy200,u=n.energy300,l=n.energy400,s=n.fire200,d=n.fire300,f=n.fire400,h=n.water200,p=n.water300,m=n.water400,v=n.wind200,g=n.wind300,y=n.wind400,b=e.chart;return[b.backgroundPrimary,b.backgroundSecondary,b.backgroundTertiary].concat([y,m,f,l,a,g,p,d,u,o,v,h,s,c,i])}},52359:function(t,e,n){var r=n(46313).default.div.withConfig({displayName:"YAxisLabelContainer",componentId:"sc-qwp21x-0"})(["-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);white-space:nowrap;"]);e.Z=r},344:function(t,e,n){n.d(e,{P5:function(){return c},Pw:function(){return i},Xh:function(){return o},fR:function(){return u}});var r=n(5679),i=20,o=10,a=Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:2});function c(t){return"number"!==typeof t?t:t>=1e4?a.format(t):t.toString()}function u(t,e){var n=(0,r.kE)(t)?String((0,r.QV)(t,1)):String(t);return n.length>e?"".concat(n.substring(0,e),"..."):n}},86585:function(t,e,n){n.d(e,{Mz:function(){return u},T5:function(){return s},bf:function(){return l}});var r,i=n(82394),o=n(10503),a=n(88560),c=n(49125),u=7*c.iI,l=22,s=(c.iI,c.iI,r={},(0,i.Z)(r,a.RL.CATEGORY,o.WD),(0,i.Z)(r,a.RL.CATEGORY_HIGH_CARDINALITY,o.Rj),(0,i.Z)(r,a.RL.DATETIME,o.aw),(0,i.Z)(r,a.RL.EMAIL,o.GT),(0,i.Z)(r,a.RL.LIST,o.aV),(0,i.Z)(r,a.RL.NUMBER,o.qZ),(0,i.Z)(r,a.RL.NUMBER_WITH_DECIMALS,o.As),(0,i.Z)(r,a.RL.PHONE_NUMBER,o.LP),(0,i.Z)(r,a.RL.TEXT,o.KJ),(0,i.Z)(r,a.RL.TRUE_OR_FALSE,o.Kb),(0,i.Z)(r,a.RL.UUID,o.SS),(0,i.Z)(r,a.RL.ZIP_CODE,o.$t),r)},31044:function(t,e,n){n.d(e,{Co:function(){return f},LH:function(){return d},xp:function(){return h}});var r=n(77555),i=n(12757),o=n(92083),a=n.n(o),c=n(88560),u=n(46990),l=n(5679),s=n(24224);function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n={},r=[];return null===t||void 0===t||t.forEach((function(t){var o=t.correlations,a=t.feature.uuid;n[a]||null===o||void 0===o||o.forEach((function(t){var o=t.x,c=void 0===o?[]:o,u=t.y,l=void 0===u?[]:u;c.map((function(t,e){return[t.label,l[e].value]})).filter((function(t){var n=(0,i.Z)(t,2)[1];return null===e||Math.abs(Number(n))>=e})).forEach((function(t){var e=(0,i.Z)(t,2),o=e[0],c=e[1];n[o]||r.push([a,o,c]),n[o]=!0}))})),n[a]=!0})),r}function f(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i||{},d=o.calculateAnomaly,f=o.feature,h=o.getYValue,p=t.x,m=t.x_metadata,v=m.label,g=m.label_type,y=t.y,b=(null===y||void 0===y?void 0:y.map((function(t){return null===h||void 0===h?void 0:h(t)})))||[],x=Math.max.apply(Math,(0,r.Z)(b)),j=Math.max.apply(Math,(0,r.Z)(b)),E=(0,s.Sm)(b),O=(0,s.IN)(b),_=E/Math.max(1,b.length),Z=e[v]||f,w=null===Z||void 0===Z?void 0:Z.columnType,T=c.RL.DATETIME===w,I=[],S=[],D=p.length,R=p.map((function(t,e){var r,i,o,s,f=t.label,h=t.max,p=t.min,m=y[e];if(u.D.RANGE===g)if(n||(n=h-p),s=c.RL.NUMBER===w&&n<=D)r=Number(p);else if(r=n/2+p,T){var v="M/D/YYYY",Z="M/D/YYYY",R="M/D/YYYY";n<=1?(v=n<=.1?"H:mm:ss.SSS":"H:mm:ss",Z="H:mm:ss.SSS",R="H:mm:ss.SSS"):n<=60?(v="H:mm",Z="H:mm:ss",R="H:mm:ss"):n<=3600?(v="H:mm",Z="M/D/YYYY H:mm",R="H:mm"):n<=86400&&(Z="M/D/YYYY H:mm",R="M/D/YYYY H:mm"),r=a().unix(r).format(v),i=a().unix(p).format(Z),o=a().unix(h).format(R)}else r=(0,l.QV)(r);else r=f;var A=e>=1?y[e-1]:null,C=!1;d&&(C=d({x:t,y:m,yPrevious:A,yValues:b,yValuesAverage:_,yValuesMax:x,yValuesMin:j,yValuesStandardDeviation:O,yValuesSum:E}));var L={hideRange:s,isUnusual:C,x:t,xLabel:r,xLabelMax:o,xLabelMin:i,y:m};return C&&(s?S.push(L):I.push(L)),L}));return{distribution:{data:R,featureUUID:v},rangedWithUnusualDistribution:(0,s.YC)(I,(function(t){var e=t.y;return h(e)}),{ascending:!1}),unusualDistribution:(0,s.YC)(S,(function(t){var e=t.y;return h(e)}),{ascending:!1})}}function h(t,e,n){var r=t/e;return r>=1/n*1.5&&r>=n/e}},92506:function(t,e,n){n.d(e,{j:function(){return r},Z:function(){return O}});var r,i=n(82394),o=n(66176),a=n(82684),c=n(60328),u=n(67971),l=n(19711),s=n(10503),d=n(49125),f=n(84779),h=n(28598),p=2*d.iI,m=function(t){var e=t.danger,n=t.decrease,r=t.increase,i=t.percentage,o=t.success,d=n?(0,h.jsx)(s.K5,{}):r&&(0,h.jsx)(s.a2,{});return(0,h.jsx)(c.Z,{danger:e,notClickable:!0,padding:"2px 6px",success:o,children:(0,h.jsxs)(u.Z,{alignItems:"center",children:[(0,h.jsx)(l.ZP,{danger:e,success:o,children:(0,f.DU)(i)}),d&&a.cloneElement(d,{danger:e,size:p,success:o})]})})},v=n(86673),g=n(84201),y=n(11754),b=n(5679);function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}!function(t){t.INCREASE="increase",t.DECREASE="decrease"}(r||(r={}));var E=function(t,e){return t&&t.compare(e,t.val)};var O=function(t){var e=t.stats,n=t.title;return(0,h.jsx)(y.Z,{alternating:!0,headerTitle:n,children:null===e||void 0===e?void 0:e.map((function(t,e){var n=t.change,i=t.columnFlexNumbers,a=t.name,c=t.progress,u=t.rate,s=t.successDirection,d=void 0===s?r.INCREASE:s,f=t.value,p=t.warning,y={bold:E(p,u),danger:E(p,u)};return(0,h.jsxs)(g.Z,{columnFlexNumbers:i||[1,1,1],condensed:!!n,children:[(0,h.jsx)(l.ZP,{default:!0,children:a}),(0,h.jsxs)(h.Fragment,{children:[void 0!==f&&(0,h.jsx)(v.Z,{pr:1,children:(0,h.jsx)(l.ZP,j(j({default:!0},y),{},{children:f}))}),void 0!==u&&(0,h.jsx)(v.Z,{pr:1,children:(0,h.jsx)(l.ZP,j(j({default:!0},y),{},{children:function(t,e){return void 0!==t?"(".concat((0,b.T3)(e),")"):(0,b.T3)(e)}(f,u)}))}),(n<0||n>0)&&(0,h.jsx)(v.Z,{pr:1,children:(0,h.jsx)(m,{danger:d===r.DECREASE?n>0:n<0,decrease:n<0,increase:n>0,percentage:Math.abs(n),success:d===r.INCREASE?n>0:n<0})})]}),c&&(0,h.jsx)(o.Z,j({progress:100*u},y))]},"".concat(a,"_").concat(e))}))})}},43313:function(t,e,n){n.d(e,{CC:function(){return g},Dy:function(){return d},Iw:function(){return h},OD:function(){return j},Sq:function(){return b},Ub:function(){return y},Zu:function(){return f},bC:function(){return E},kY:function(){return s},lb:function(){return p},mG:function(){return O},no:function(){return m},oH:function(){return x},yD:function(){return _},y_:function(){return v}});var r,i,o=n(77555),a=n(82394),c=n(88560),u=n(92506),l=n(24224),s=992,d=["duplicate_row_count","completeness","total_invalid_value_count","total_null_value_count","validity"],f=["count","empty_column_count"],h=["category","category_high_cardinality","true_or_false"],p=["datetime"],m=["number","number_with_decimals"],v=["completeness","validity"],g={completeness:"Completeness",count:"Row count",duplicate_row_count:"Duplicate rows",empty_column_count:"Empty columns",total_invalid_value_count:"Invalid cells",total_null_value_count:"Missing cells",validity:"Validity"},y={completeness:1,duplicate_row_count:4,total_invalid_value_count:3,total_null_value_count:2,validity:0},b={duplicate_row_count:"duplicate_row_rate",total_invalid_value_count:"total_invalid_value_rate",total_null_value_count:"total_null_value_rate"},x={column_count:u.j.INCREASE,completeness:u.j.INCREASE,count:u.j.INCREASE,duplicate_row_count:u.j.DECREASE,empty_column_count:u.j.DECREASE,total_invalid_value_count:u.j.DECREASE,total_null_value_count:u.j.DECREASE,validity:u.j.INCREASE},j={completeness:{compare:l.Qj,val:.8},duplicate_row_count:{compare:l.tS,val:0},empty_column_count:{compare:l.tS,val:0},total_invalid_value_count:{compare:l.tS,val:0},total_null_value_count:{compare:l.tS,val:0},validity:{compare:l.Qj,val:.8}},E=(l.Qj,l.Qj,l.tS,l.tS,r={},(0,a.Z)(r,c.RL.EMAIL,"domain_distribution"),(0,a.Z)(r,c.RL.TEXT,"word_distribution"),(0,a.Z)(r,c.RL.LIST,"element_distribution"),(0,a.Z)(r,"default","value_counts"),r),O=[].concat((0,o.Z)(c.P_),[c.RL.TEXT,c.RL.EMAIL,c.RL.LIST]),_=(i={},(0,a.Z)(i,c.RL.EMAIL,"Domain distribution"),(0,a.Z)(i,c.RL.TEXT,"Word distribution"),(0,a.Z)(i,c.RL.LIST,"Element distribution"),(0,a.Z)(i,"default","Distribution of values"),i)},32151:function(t,e,n){n.d(e,{CL:function(){return R},Fk:function(){return A},Mh:function(){return D},O$:function(){return T},QO:function(){return S},v0:function(){return I}});var r=n(12757),i=n(82394),o=n(12691),a=n.n(o),c=n(70001),u=n(93461),l=n(66872),s=n(10919),d=n(320),f=n(19711),h=n(43313),p=n(86585),m=n(46990),v=n(88560),g=n(6753),y=n(49125),b=n(31044),x=n(84779),j=n(69345),E=n(5679),O=n(24224),_=n(28598);function Z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var T=12*y.iI;function I(t){var e=t.latestStatistics,n=t.versionStatistics,r=Object.keys(e),i=Array(h.Dy.length).fill(0);return r.forEach((function(t){if(h.Dy.includes(t)){var r=h.CC[t],o=e[t],a=o,c=!1,u=[2,3],l=h.Ub[t],s=h.oH[t],d=h.OD[t],f=n?e[t]-(null===n||void 0===n?void 0:n[t]):0;if(h.y_.includes(t))c=!0,u=[2,1,2];else if(t in h.Sq){var p,m;o=(0,x.Jw)(o,0);var v=h.Sq[t];a=e[v],f=n?(null!==(p=e[v])&&void 0!==p?p:0)-(null!==(m=null===n||void 0===n?void 0:n[v])&&void 0!==m?m:0):0}var g={change:f,columnFlexNumbers:u,name:r,progress:c,rate:a,successDirection:s,warning:d};h.y_.includes(t)||(g.value=o),i[l]=g}})),i}function S(t){if("undefined"===typeof t)return{};var e=0,n=0,r=0;return t.forEach((function(t){h.Iw.includes(t)?e+=1:h.no.includes(t)?r+=1:h.lb.includes(t)&&(n+=1)})),{countCategory:e,countDatetime:n,countNumerical:r}}function D(t,e){return null===t||void 0===t?void 0:t.reduce((function(t,n){var r=n.action_payload.action_arguments;return null!==r&&void 0!==r&&r.includes(e)&&t.push(w(w({},n),{},{action_payload:w(w({},n.action_payload),{},{action_arguments:[e]})})),t}),[])}function R(t){var e=t.latestColumnTypes,n=void 0===e?{}:e,r=t.latestStatistics,i=t.versionColumnTypes,o=t.versionStatistics,a=Object.keys(r),c=Object.values(n),u=i?Object.values(i):void 0,l=c.length,s=null===u||void 0===u?void 0:u.length,d=[];d.push({change:(0,x.T$)(l,s),name:"Column count",successDirection:h.oH.column_count,value:(0,E.x6)(l)}),a.forEach((function(t){if(h.Zu.includes(t)){var e=h.CC[t],n=r[t],i=null===o||void 0===o?void 0:o[t],a=h.OD[t],c=(0,x.T$)(null!==n&&void 0!==n?n:0,i);d.push({change:c,name:e,successDirection:h.oH[t],value:(0,E.x6)(n),warning:a})}}));var f=S(c),p=f.countCategory,m=f.countDatetime,v=f.countNumerical,g=S(u),y=g.countCategory,b=g.countDatetime,j=g.countNumerical;return d.push({change:(0,x.T$)(p,y),name:"Categorical Features",rate:p/l,value:(0,E.x6)(p)},{change:(0,x.T$)(v,j),name:"Numerical Features",rate:v/l,value:(0,E.x6)(v)},{change:(0,x.T$)(m,b),name:"Datetime Features",rate:m/l,value:(0,E.x6)(m)}),d}function A(t){var e=t.columnTypes,n=t.columns,i=t.insightsByFeatureUUID,o=t.insightsOverview,x=t.noColumnLinks,Z=void 0!==x&&x,w=t.statistics;return function(t,x,I){var S=I.width,D=n[x],R=e[D],A=p.T5[R],C=(i[D]||{}).charts,L=o.time_series,M=n.filter((function(t){return e[t]===v.RL.DATETIME})),P=null===L||void 0===L?void 0:L.map((function(t){return(0,b.Co)(t,{},{feature:{columnType:R,uuid:D}}).distribution})),k={};null===P||void 0===P||P.forEach((function(t,e){var n=t.data;k[M[e]]=(0,_.jsx)(l.Z,{data:n.map((function(t){var e=t.x,n=t.xLabel,r=t.xLabelMax,i=t.xLabelMin;return[n,t.y.count,i,r,e.min,e.max]})),height:T,large:!0,margin:{bottom:0,left:0,right:0,top:0},renderTooltipContent:function(t){var e=(0,r.Z)(t,4),n=e[1],i=e[2],o=e[3];return(0,_.jsxs)("p",{children:["Rows: ",n,(0,_.jsx)("br",{}),"Start: ",i,(0,_.jsx)("br",{}),"End: ",o]})},sortData:function(t){return(0,O.YC)(t,"[4]")}},D)}));var N,Y=null===C||void 0===C?void 0:C.find((function(t){var e=t.type;return m.o.HISTOGRAM===e})),H=(Y?(0,b.Co)(Y,{},{feature:{columnType:R,uuid:D},getYValue:function(t){return t.value}}):{}).distribution,U=void 0===H?null:H,F=h.bC[R]||h.bC.default,B=null===w||void 0===w?void 0:w["".concat(D,"/").concat(F)],G=Object.entries(B||{}).map((function(t){var e=(0,r.Z)(t,2),n=e[0];return{x:e[1],y:n}})),V=v.RL.TRUE_OR_FALSE===R;if(v.RL.DATETIME===R)N=k[D];else if(U&&!V)N=(0,_.jsx)(l.Z,{data:U.data.map((function(t){var e=t.hideRange,n=t.isUnusual,r=t.x;return[t.xLabel,t.y.value,r.min,r.max,n,e]})),height:T,margin:{bottom:0,left:0,right:0,top:0},renderTooltipContent:function(t){var e=(0,r.Z)(t,6),n=e[1],i=e[2],o=e[3],a=e[5];return(0,_.jsxs)("p",{children:[a&&(0,_.jsxs)(_.Fragment,{children:["Rows: ",n,(0,_.jsx)("br",{}),"Value: ",i]}),!a&&(0,_.jsxs)(_.Fragment,{children:["Rows: ",n,(0,_.jsx)("br",{}),"Range: ",i," - ",o]})]})},sortData:function(t){return(0,O.YC)(t,"[2]")},width:S-2*y.iI});else if(h.mG.includes(R)){var z=(0,O.YC)((0,O.YC)(G,"x",{ascending:!1}).slice(0,5),"x");N=(0,_.jsx)(c.Z,{data:z,height:T,margin:{bottom:0,left:0,right:20,top:0},renderTooltipContent:function(t){var e=t.x,n=t.y;return"".concat(n," appears ").concat((0,E.x6)(e)," times")},xNumTicks:2,ySerialize:function(t){return t.y}})}else V&&B&&(N=(0,_.jsx)(d.Z,{data:Object.entries(B),getX:function(t){var e=(0,r.Z)(t,2),n=e[0],i=e[1];return"".concat(n," (").concat((0,E.x6)(i),")")},getY:function(t){return(0,r.Z)(t,2)[1]},height:T}));return(0,_.jsxs)("div",{style:{padding:y.iI},children:[(0,_.jsxs)("div",{style:{alignItems:"center",display:"flex",marginBottom:y.iI},children:[A&&(0,_.jsx)(u.Z,{title:v.Rp[R],children:(0,_.jsx)(A,{size:2*y.iI})}),(0,_.jsx)("div",{style:{marginLeft:.5*y.iI,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:S-4.5*y.iI},children:Z?(0,_.jsx)(f.ZP,{bold:!0,default:!0,title:n[x],children:n[x]}):(0,_.jsx)(a(),{as:(0,j.o_)(g.oE,x),href:"/datasets/[...slug]",passHref:!0,children:(0,_.jsx)(s.Z,{bold:!0,monospace:!0,secondary:!0,small:!0,title:n[x],children:n[x]})})})]}),N,!N&&(0,_.jsx)("div",{style:{height:T}})]})}}},88560:function(t,e,n){n.d(e,{P_:function(){return c},RL:function(){return i},Rp:function(){return u},Vg:function(){return a}});var r,i,o=n(82394);!function(t){t.CATEGORY="category",t.CATEGORY_HIGH_CARDINALITY="category_high_cardinality",t.DATETIME="datetime",t.EMAIL="email",t.LIST="list",t.NUMBER="number",t.NUMBER_WITH_DECIMALS="number_with_decimals",t.PHONE_NUMBER="phone_number",t.TEXT="text",t.TRUE_OR_FALSE="true_or_false",t.UUID="uuid",t.ZIP_CODE="zip_code"}(i||(i={}));var a=[i.NUMBER,i.NUMBER_WITH_DECIMALS],c=(i.NUMBER,i.NUMBER_WITH_DECIMALS,i.DATETIME,i.NUMBER,i.NUMBER_WITH_DECIMALS,i.CATEGORY,i.CATEGORY_HIGH_CARDINALITY,i.DATETIME,i.EMAIL,i.PHONE_NUMBER,i.TEXT,i.TRUE_OR_FALSE,i.CATEGORY,i.CATEGORY_HIGH_CARDINALITY,i.DATETIME,i.EMAIL,i.PHONE_NUMBER,i.TEXT,[i.CATEGORY,i.CATEGORY_HIGH_CARDINALITY]),u=(r={},(0,o.Z)(r,i.NUMBER,"Number"),(0,o.Z)(r,i.NUMBER_WITH_DECIMALS,"Decimal number"),(0,o.Z)(r,i.CATEGORY,"Category"),(0,o.Z)(r,i.CATEGORY_HIGH_CARDINALITY,"Category (high cardinality)"),(0,o.Z)(r,i.DATETIME,"Date/Time"),(0,o.Z)(r,i.EMAIL,"Email"),(0,o.Z)(r,i.LIST,"List"),(0,o.Z)(r,i.PHONE_NUMBER,"Phone number"),(0,o.Z)(r,i.TEXT,"Text"),(0,o.Z)(r,i.TRUE_OR_FALSE,"Boolean"),(0,o.Z)(r,i.ZIP_CODE,"Zip code"),r)},46990:function(t,e,n){var r,i;n.d(e,{D:function(){return r},o:function(){return i}}),function(t){t.RANGE="range"}(r||(r={})),function(t){t.BAR_HORIZONTAL="bar_horizontal",t.LINE_CHART="line_chart",t.HISTOGRAM="histogram"}(i||(i={}))},66176:function(t,e,n){var r=n(82394),i=n(91835),o=(n(82684),n(46313)),a=n(31969),c=n(73942),u=n(49125),l=n(28598);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f=o.default.div.withConfig({displayName:"ProgressBar__ProgressBarContainerStyle",componentId:"sc-10x9ojc-0"})(["border-radius:","px;height:","px;overflow:hidden;position:relative;width:100%;",""],c.BG,.75*u.iI,(function(t){return"\n    background-color: ".concat((t.theme.monotone||a.Z.monotone).grey200,";\n  ")})),h=o.default.div.withConfig({displayName:"ProgressBar__ProgressBarStyle",componentId:"sc-10x9ojc-1"})(["height:inherit;position:absolute;"," "," "," ",""],(function(t){return"\n    background-color: ".concat((t.theme.progress||a.Z.progress).positive,";\n  ")}),(function(t){return t.progress&&"\n    width: ".concat(t.progress,"%;\n  ")}),(function(t){return t.danger&&"\n    background-color: ".concat((t.theme.progress||a.Z.progress).negative,"\n  ")}),(function(t){return t.animateProgress&&"\n    animation: animate-progress ".concat(t.animateProgress.duration,"ms linear forwards;\n\n    @keyframes animate-progress {\n      0% {\n        width: ").concat(t.animateProgress.start,"%;\n      }\n\n      100% {\n        width: ").concat(t.animateProgress.end,"%;\n      }\n    }\n  ")}));e.Z=function(t){var e=(0,i.Z)({},t);return(0,l.jsx)(f,d(d({},e),{},{children:(0,l.jsx)(h,d({},e))}))}},84779:function(t,e,n){n.d(e,{DU:function(){return a},Jw:function(){return o},T$:function(){return c}});var r=n(12757),i=function(t){var e=String(t).split("."),n=(0,r.Z)(e,2),i=n[0],o=n[1];return"".concat(i.replace(/\B(?=(\d{3})+(?!\d))/g,",")).concat(o?".".concat(o):"")},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=parseFloat(t).toFixed(e);return 0===t&&(n=parseFloat(t).toFixed(0)),i(n)};function a(t){if(void 0===t)return"";var e=1===t||0===t?100*t:(100*t).toFixed(2);return"".concat(e,"%")}function c(t,e){return"undefined"===typeof e?0:(t-e)/e}}}]);