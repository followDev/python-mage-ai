"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9916],{62976:function(e,t,n){n.d(t,{Z:function(){return D}});var r=n(82394),i=n(77555),o=n(82684),a=n(10919),c=n(12691),l=n.n(c),u=n(34376),d=n.n(u),s=n(46313),h=n(63068),f=n(44628),m=n(6508),p=n(67971),v=n(19711),g=n(23831),x=n(31969),y=function(){var e=document.createElement("div");e.setAttribute("style","width: 100px; height: 100px; overflow: scroll; position:absolute; top:-9999px;"),document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t},b=n(2005),j=n(31012),w=n(37391),_=n(6753),O=n(49125),Z=n(69345),k=n(24224),P=n(28598);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=2*O.iI+j.dN,S=20*O.iI,E=s.default.div.withConfig({displayName:"DataTable__Styles",componentId:"sc-1arr863-0"})([""," "," "," .body > div{","}.table{border-spacing:0;display:inline-block;"," "," "," "," .tr{.td.td-index-column{","}}.th{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;","}.th,.td{"," font-family:",";margin:0;","}.td{padding:","px;}&.sticky{overflow:auto;}.header{overflow:hidden;}}"],(function(e){return e.disableScrolling&&"\n    overflow: hidden;\n  "}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,"px;\n  ")}),w.w5,(function(e){return!e.noBorderBottom&&"\n      border-bottom: 1px solid ".concat((e.theme.borders||x.Z.borders).medium,";\n    ")}),(function(e){return!e.noBorderLeft&&"\n      border-left: 1px solid ".concat((e.theme.borders||x.Z.borders).medium,";\n    ")}),(function(e){return!e.noBorderRight&&"\n      border-right: 1px solid ".concat((e.theme.borders||x.Z.borders).medium,";\n    ")}),(function(e){return!e.noBorderTop&&"\n      border-top: 1px solid ".concat((e.theme.borders||x.Z.borders).medium,";\n    ")}),(function(e){return"\n          color: ".concat((e.theme.content||x.Z.content).default,";\n        ")}),(function(e){return"\n        height: ".concat(e.columnHeaderHeight||C,"px;\n      ")}),j.iD,b.ry,(function(e){return"\n        background-color: ".concat((e.theme.background||x.Z.background).table,";\n        border-bottom: 1px solid ").concat((e.theme.borders||x.Z.borders).medium,";\n        border-right: 1px solid ").concat((e.theme.borders||x.Z.borders).medium,";\n      ")}),1*O.iI);function T(e){var t=e.original,n=8.5*Math.max.apply(Math,(0,i.Z)(t.map((function(e){return(null===e||void 0===e?void 0:e.length)||0})))),r=Math.ceil(n/(S-2*O.iI));return Math.max(r,1)*j.dN+2*O.iI}function L(e){var t=e.columnHeaderHeight,n=e.columns,r=e.data,c=e.disableScrolling,u=e.height,j=e.index,w=e.invalidValues,M=e.maxHeight,E=e.numberOfIndexes,L=e.previewIndexes,D=e.renderColumnHeader,N=e.width,A=(0,o.useContext)(s.ThemeContext),R=(0,o.useRef)(null),H=(0,o.useRef)(null);(0,o.useEffect)((function(){var e=function(e){var t;null===R||void 0===R||null===(t=R.current)||void 0===t||t.scroll(e.target.scrollLeft,0)};return H&&H.current.addEventListener("scroll",e),function(){var t;null===H||void 0===H||null===(t=H.current)||void 0===t||t.removeEventListener("scroll",e)}}),[R,H]);var F=(0,o.useMemo)((function(){return j&&r&&j.length===r.length}),[r,j]),B=(0,o.useMemo)((function(){var e=[];return(0,k.w6)(E).forEach((function(t,n){var o=8.7*String(null===r||void 0===r?void 0:r.length).length;if(F){var a=j.map((function(e){return E>=2?String(e[n]).length:String(e).length}));o=8.7*Math.max.apply(Math,(0,i.Z)(a))}e.push(o+2*O.iI)})),e}),[r,j,E,F]),U=n.map((function(e){return null===e||void 0===e?void 0:e.Header})).slice(1),W=(0,o.useMemo)((function(){return y()}),[]),q=(0,o.useMemo)((function(){var e=N-(Math.max.apply(Math,(0,i.Z)(B))+1.5*O.iI+W),t=n.length-1,r=S;return r*t<e&&(r=e/t),{width:r}}),[n,B,W,N]),V=(0,f.useTable)({columns:n,data:r,defaultColumn:q},f.useBlockLayout,m.useSticky),X=V.getTableBodyProps,z=V.getTableProps,J=V.headerGroups,Y=V.prepareRow,G=V.rows,Q=d().query.slug,K=void 0===Q?[]:Q,$=new Set((null===L||void 0===L?void 0:L.removedRows)||[]),ee=(0,o.useCallback)((function(e){var t=e.index,n=e.style,r=G[t];Y(r);var i=r.original,c=$.has(t);return(0,P.jsx)("div",I(I({},r.getRowProps({style:I(I({},n),{},{width:"auto"})})),{},{className:"tr",children:r.cells.map((function(e,n){var r,u=n<=E-1,d=e.getCellProps(),s=e.column.id,h=null===w||void 0===w||null===(r=w[s])||void 0===r?void 0:r.includes(t),f=I({},d.style);u&&(f.fontFamily=b.Vp,f.left=0,f.position="sticky",f.textAlign=j?"right":"center",f.width=B[n]);var m,g=i[n-E],y=U.indexOf(s);if(h&&(f.color=x.Z.interactive.dangerBorder),c&&(f.backgroundColor=x.Z.background.danger),Array.isArray(g)||"object"===typeof g)try{g=JSON.stringify(g)}catch(O){g="Error: cannot display value"}return u&&(F?(m=j[t],Array.isArray(m)&&(m=m[n])):m=e.render("Cell")),(0,o.createElement)("div",I(I({},d),{},{className:"td ".concat(u?"td-index-column":""),key:"".concat(n,"-").concat(g),style:f}),m,!u&&(0,P.jsxs)(p.Z,{justifyContent:"space-between",children:[(0,P.jsxs)(v.ZP,{danger:h,default:!0,wordBreak:!0,children:[!0===g&&"true",!1===g&&"false",(null===g||"null"===g)&&"null",!0!==g&&!1!==g&&null!==g&&"null"!==g&&g]}),h&&(0,P.jsx)(l(),{as:(0,Z.o_)(_.mW,y),href:"/datasets/[...slug]",passHref:!0,children:(0,P.jsx)(a.Z,{danger:!0,children:"View all"})})]}))}))}))}),[j,w,B,E,Y,G,K]),te=(0,o.useMemo)((function(){var e;return M?(e=(0,k.Sm)(G.map(T)),e+=t||C):(e=u,e-=t||C),e}),[t,T,u,M,G]);return(0,P.jsx)("div",I(I({},z()),{},{className:"table sticky",style:{width:N},children:(0,P.jsxs)("div",I(I({},X()),{},{className:"body",children:[(0,P.jsx)("div",{className:"header",ref:R,children:J.map((function(e,t){return(0,o.createElement)("div",I(I({},e.getHeaderGroupProps()),{},{className:"tr",key:"".concat(e.id,"_").concat(t)}),e.headers.map((function(e,t){var n,r=t<=E-1,i=e.getHeaderProps(),a=I({},i.style);return r?(a.fontFamily=b.Vp,a.left=0,a.position="sticky",a.textAlign="center",a.width=B[t],a.minWidth=B[t]):D?n=D(e,t-E,{width:q.width}):(n=e.render("Header"),a.color=(A||g.Z).content.default,a.padding=1*O.iI,a.minWidth=q.width),(0,o.createElement)("div",I(I({},i),{},{className:"th",key:e.id,style:a,title:r?"Row number":void 0}),n)})))}))}),(0,P.jsx)(h.S_,{estimatedItemSize:C,height:te,itemCount:null===G||void 0===G?void 0:G.length,itemSize:function(e){return T(G[e])},outerRef:H,style:{maxHeight:M,pointerEvents:c?"none":null},children:ee})]}))}))}var D=function(e){var t=e.columnHeaderHeight,n=e.columns,i=e.disableScrolling,a=e.height,c=e.index,l=e.invalidValues,u=e.maxHeight,d=e.noBorderBottom,s=e.noBorderLeft,h=e.noBorderRight,f=e.noBorderTop,m=e.previewIndexes,p=e.renderColumnHeader,v=e.rows,g=e.width,x=(0,o.useMemo)((function(){return null!==c&&void 0!==c&&c.length&&Array.isArray(c[0])?c[0].length:1}),[c]),y=(0,o.useMemo)((function(){return(0,k.w6)(x).map((function(e,t){return{Header:(0,k.w6)(t+1).map((function(){return" "})).join(" "),accessor:function(e,t){return t},sticky:"left"}})).concat(null===n||void 0===n?void 0:n.map((function(e){return{Header:String(e),accessor:String(e)}})))}),[n,x]);return(0,o.useMemo)((function(){return null===v||void 0===v?void 0:v.map((function(e){return e.reduce((function(e,t,i){return I(I({},e),{},(0,r.Z)({},n[i],t))}),{})}))}),[n,v]),(0,P.jsx)(E,{columnHeaderHeight:t,disableScrolling:i,height:a,maxHeight:u,noBorderBottom:d,noBorderLeft:s,noBorderRight:h,noBorderTop:f,children:(0,P.jsx)(L,{columnHeaderHeight:t,columns:y,data:v,disableScrolling:i,height:a,index:c,invalidValues:l,maxHeight:u,numberOfIndexes:x,previewIndexes:m,renderColumnHeader:p,width:g})})}},47256:function(e,t,n){var r=n(82394),i=n(77555),o=n(82684),a=n(26226),c=n(46313),l=n(29989),u=n(68864),d=n(84181),s=n(93461),h=n(67971),f=n(10919),m=n(86673),p=n(19711),v=n(31969),g=n(2005),x=n(49125),y=n(28598);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=c.default.div.withConfig({displayName:"HeatMap__YAxisLabelContainer",componentId:"sc-h2irj-0"})(["-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);white-space:nowrap;"]);function _(e,t){return Math.max.apply(Math,(0,i.Z)(e.map(t)))}function O(e,t){return Math.min.apply(Math,(0,i.Z)(e.map(t)))}var Z=function(e){return e.bins},k=function(e){return e.count},P={top:0,left:0,right:0,bottom:0};function M(e){var t=e.countMidpoint,n=e.data,r=(e.events,e.height),i=e.margin,a=void 0===i?{}:i,s=e.minCount,h=e.width,f=(e.yLabels,(0,o.useContext)(c.ThemeContext)),m=(f.monotone||v.Z.monotone).grey300,p=(f.brand||v.Z.brand).wind400,x=(f.content||v.Z.content).default,b=(f.monotone||v.Z.monotone).white,w=j(j({},P),a),M=[];n[0].forEach((function(e,t){var r=n.map((function(e){return e[t]}));M.push({bin:t,bins:r.reverse().map((function(e,t){return{bin:t,count:e}}))})}));var I=_(M,(function(e){return _(Z(e),k)})),C=O(M,(function(e){return O(Z(e),k)})),S=_(M,(function(e){return Z(e).length})),E="undefined"!==typeof t?t:0,T="undefined"!==typeof s?s:C,L=(0,d.Z)({domain:[0,M.length]}),D=(0,d.Z)({domain:[0,S]}),N=(0,d.Z)({range:[m,p],domain:[E,I]}),A=(0,d.Z)({range:[.1,1],domain:[E,I]}),R=(0,d.Z)({range:[m,p],domain:[T,E]}),H=(0,d.Z)({range:[1,.1],domain:[T,E]}),F=h-(w.left+w.right),B=r-(w.bottom+w.top),U=F/M.length,W=B/S;return L.range([0,F]),D.range([B,0]),h<10?null:(0,y.jsx)(y.Fragment,{children:(0,y.jsx)("svg",{width:h,height:r,children:(0,y.jsx)(l.Z,{left:w.left,top:w.top,children:(0,y.jsx)(u.Z,{data:M,xScale:L,yScale:D,colorScale:N,opacityScale:A,binWidth:U,binHeight:U,gap:0,children:function(e){return e.map((function(e){return e.map((function(e){var n=e.opacity,r=e.color;return"undefined"!==typeof t&&e.count<t&&(n=H(e.count),r=R(e.count)),(0,y.jsxs)("svg",{height:W,width:U,x:e.x,y:e.y-W,children:[(0,y.jsx)("rect",{className:"visx-heatmap-rect",fill:r,fillOpacity:n,height:W,width:U}),(0,y.jsx)("text",{alignmentBaseline:"middle",fill:e.count>=.8*I?b:x,fontFamily:g.ry,fontSize:14,textAnchor:"middle",x:"50%",y:"50%",children:e.count})]},"heatmap-rect-".concat(e.row,"-").concat(e.column))}))}))}})})})})}t.Z=function(e){var t=e.countMidpoint,n=e.data,r=e.height,i=e.margin,o=e.minCount,c=e.xAxisLabel,l=e.xLabels,u=e.yAxisLabel,d=e.yLabels,v=function(e){return e.length>12?"".concat(e.substring(0,12),"..."):e},g=4*x.iI,b=8*x.iI,j=0;return u&&(j+=g+1*x.iI),d&&(j+=b+1*x.iI),(0,y.jsxs)(y.Fragment,{children:[(c||l)&&(0,y.jsx)("div",{style:{marginBottom:null===i||void 0===i?void 0:i.bottom,marginLeft:null===i||void 0===i?void 0:i.left,marginRight:null===i||void 0===i?void 0:i.right,marginTop:null===i||void 0===i?void 0:i.top,paddingLeft:j},children:(0,y.jsxs)(m.Z,{mb:{xs:1},children:[c&&(0,y.jsx)(m.Z,{mb:1,children:(0,y.jsx)(p.ZP,{center:!0,muted:!0,xsmall:!0,children:c})}),l&&(0,y.jsx)(h.Z,{children:l.map((function(e){var t=e.label,n=e.linkProps;return(0,y.jsx)(s.Z,{flex:"1",justifyContent:"center",children:n?(0,y.jsx)(f.Z,{bold:!0,centerAlign:!0,minWidth:70,onClick:n.onClick,xsmall:!0,children:t}):(0,y.jsx)(p.ZP,{bold:!0,center:!0,minWidth:70,title:String(t),xsmall:!0,children:v(String(t))})},t)}))})]})}),(0,y.jsxs)("div",{style:{height:r,display:"flex",width:"100%"},children:[u&&(0,y.jsx)("div",{style:{marginRight:1*x.iI,width:g},children:(0,y.jsx)(h.Z,{alignItems:"center",justifyContent:"center",children:(0,y.jsx)(w,{children:(0,y.jsx)(p.ZP,{center:!0,muted:!0,xsmall:!0,children:u})})})}),d&&(0,y.jsx)("div",{style:{marginRight:1*x.iI},children:(0,y.jsx)(h.Z,{alignItems:"center",flexDirection:"column",fullHeight:!0,width:b,children:d.map((function(e){var t=e.label,n=e.linkProps;return(0,y.jsx)(s.Z,{alignItems:"center",flex:"1",children:n?(0,y.jsx)(f.Z,{bold:!0,centerAlign:!0,onClick:n.onClick,xsmall:!0,children:t}):(0,y.jsx)(p.ZP,{bold:!0,center:!0,title:String(t),xsmall:!0,children:v(String(t))})},t)}))})}),(0,y.jsx)("div",{style:{height:r,width:"100%"},children:(0,y.jsx)(a.Z,{children:function(e){var r=e.width,a=e.height;return(0,y.jsx)(M,{countMidpoint:t,data:n,height:a,margin:i,minCount:o,width:r,yLabels:d})}})})]})]})}},68735:function(e,t,n){var r=n(26304),i=n(77555),o=n(82394),a=n(82684),c=n(26226),l=n(46313),u=n(90948),d=n(84969),s=n(65743),h=n(85587),f=n(79487),m=n(67778),p=n(52136),v=n(29989),g=n(17066),x=n(84482),y=n(76771),b=n(98889),j=n(65376),w=n(59381),_=n(97745),O=n(48072),Z=n(10103),k=n(84181),P=n(24903),M=n(67971),I=n(86673),C=n(19711),S=n(52359),E=n(23831),T=n(80906),L=n(73899),D=n(2005),N=n(31012),A=n(49125),R=n(24224),H=n(45739),F=n(28598),B=["areaBetweenLines","data","events","height","lineLegendNames","margin","width","xAxisLabel","xLabelFormat","yAxisLabel","yLabelFormat"];function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q=W(W({},j.j),{},{backgroundColor:E.Z.background.navigation,border:"none"}),V=(0,w.Z)((function(e){var t=e.areaBetweenLines,n=e.data,r=e.events,o=void 0!==r&&r,c=e.getX,w=e.getY,M=e.height,I=e.hideTooltip,S=e.increasedXTicks,B=e.lineLegendNames,U=e.margin,V=e.noCurve,X=e.renderXTooltipContent,z=e.renderYTooltipContent,J=e.showTooltip,Y=e.thickStroke,G=e.tooltipData,Q=e.tooltipLeft,K=void 0===Q?0:Q,$=e.tooltipTop,ee=void 0===$?[]:$,te=e.width,ne=e.xLabelFormat,re=e.yLabelFormat,ie=(0,a.useContext)(l.ThemeContext),oe=c||function(e){return null===e||void 0===e?void 0:e.x},ae=w||function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return null===e||void 0===e||null===(t=e.y)||void 0===t?void 0:t[n]},ce=E.Z.monotone.gray,le=E.Z.brand.wind200,ue=E.Z.content.active,de=E.Z.monotone,se=(de.black,de.gray),he=n.map((function(e){return Number(oe(e))}));if(te<10)return null;var fe=te-U.left-U.right,me=M-U.top-U.bottom,pe=Math.max.apply(Math,(0,i.Z)(n.map((function(e){return e.y.length})))),ve=(0,a.useMemo)((function(){return(0,k.Z)({domain:[Math.min.apply(Math,(0,i.Z)(he)),Math.max.apply(Math,(0,i.Z)(he))],range:[0,fe]})}),[fe,he]),ge=Math.min.apply(Math,(0,i.Z)(n.map((function(e){var t=e.y;return Math.min.apply(Math,(0,i.Z)(t))})))),xe=Math.max.apply(Math,(0,i.Z)(n.map((function(e){var t=e.y;return Math.max.apply(Math,(0,i.Z)(t))})))),ye=(0,a.useMemo)((function(){return(0,k.Z)({domain:[ge,xe],nice:!0,range:[me,0]})}),[me,xe,ge]),be=te>520?S?20:10:S?10:5,je=(0,H.K)(ie),we=ue,_e=je.map((function(e){return{stroke:e}})),Oe=(0,P.Z)({domain:B||[],range:_e.map((function(e){return e.stroke}))}),Ze=(0,a.useCallback)((function(e){var t=((0,O.Z)(e)||{x:0}).x,r=ve.invert(t-U.left),i=(0,R.ry)(he,(function(e){return r>=e})),o=n[i-1],a=n[i],c=o;a&&(r-oe(o)>oe(a)-r?c=a:(c=o,i-=1));var l=(0,Z.range)(0,pe).map((function(e){return ye(ae(c,e))}));J({tooltipData:W(W({},c),{},{index:i}),tooltipLeft:t,tooltipTop:l})}),[n,oe,ae,U,J,ve,ye]),ke={};return V||(ke.curve=_.ZP),(0,F.jsxs)(F.Fragment,{children:[B&&(0,F.jsx)("div",{style:{marginLeft:null===U||void 0===U?void 0:U.left},children:(0,F.jsx)(g.Z,{labelFormat:function(e){return e},scale:Oe,children:function(e){return(0,F.jsx)("div",{style:{display:"flex",flexDirection:T.qs.ROW},children:e.map((function(e,t){return(0,F.jsxs)(x.Z,{margin:"0 5px",onClick:function(){o&&alert("clicked: ".concat(JSON.stringify(e)))},children:[(0,F.jsx)("svg",{height:15,width:15,children:(0,F.jsx)("rect",{fill:e.value,height:15,width:15})}),(0,F.jsx)(y.Z,{align:"left",margin:"0 0 0 4px",children:(0,F.jsx)(C.ZP,{small:!0,children:e.text})})]},"legend-quantile-".concat(t))}))})}})}),(0,F.jsxs)("svg",{height:M,width:te,children:[!t&&(0,F.jsx)(s.Z,{fill:"transparent",height:M,onMouseLeave:function(){return I()},onMouseMove:Ze,onTouchMove:Ze,onTouchStart:Ze,rx:14,width:te-(U.left+U.right),x:U.left,y:0}),(0,F.jsxs)(v.Z,{left:U.left,top:U.top,children:[(0,F.jsx)(m.Z,{height:me,pointerEvents:"none",scale:ye,stroke:ce,strokeDasharray:"3,3",strokeOpacity:.4,width:fe}),(0,F.jsx)(p.Z,{height:me,pointerEvents:"none",scale:ve,stroke:ce,strokeDasharray:"3,3",strokeOpacity:.4,width:fe}),(0,F.jsx)("line",{stroke:ce,x1:fe,x2:fe,y1:0,y2:me}),(0,F.jsx)(u.Z,{numTicks:be,scale:ve,stroke:we,tickFormat:function(e){return ne?ne(e):e},tickLabelProps:function(e){return{fill:ue,fontFamily:D.ry,fontSize:N.J5,textAnchor:"middle",transform:"rotate(-45, ".concat(ve(e),", 0) translate(-32, 4)")}},tickStroke:we,top:me}),(0,F.jsx)(d.Z,{hideTicks:!0,scale:ye,stroke:we,tickFormat:function(e){return re?re(e):e},tickLabelProps:function(e){return{dx:String(e).length>4?3:0,fill:ue,fontFamily:D.ry,fontSize:N.J5,textAnchor:"end"}},tickStroke:we}),t&&t.map((function(e){var t=e[0],r=e[1];return(0,a.createElement)(b.Z,W(W({},ke),{},{aboveAreaProps:{fill:E.Z.brand.earth400,fillOpacity:.3},belowAreaProps:{fill:le,fillOpacity:.2},clipAboveTo:0,clipBelowTo:me,data:n,id:"".concat(Math.random()),key:"".concat(t,"-").concat(r),x:function(e){return ve(oe(e))},y0:function(e){return ye("undefined"===typeof r?ge:ae(e,r))},y1:function(e){return ye(ae(e,t))}}))})),(0,Z.range)(0,pe).map((function(e){return(0,a.createElement)(h.Z,W(W({},ke),{},{data:n,key:e,pointerEvents:"none",strokeWidth:Y?2:1,x:function(e){return ve(oe(e))},y:function(t){return ye(e>=t.y.length?ge:ae(t,e))}},_e[e]))}))]}),G&&(0,F.jsxs)("g",{children:[(0,F.jsx)(f.Z,{from:{x:K,y:U.top},pointerEvents:"none",stroke:L.Ej,strokeDasharray:"5,2",strokeWidth:1,to:{x:K,y:me+U.top}}),ee.map((function(e,t){return(0,F.jsx)("circle",{cx:K,cy:e+1+U.top,fill:_e[t].stroke,fillOpacity:.1,pointerEvents:"none",r:4,stroke:se,strokeOpacity:.1,strokeWidth:1},t)})),ee.map((function(e,t){return(0,F.jsx)("circle",{cx:K,cy:e+U.top,fill:_e[t].stroke,pointerEvents:"none",r:4,stroke:_e[t].stroke,strokeWidth:2},t)}))]})]}),G&&(0,F.jsxs)("div",{children:[ee.map((function(e,t){var n=ae(G,t);return t>=1&&Math.abs(ee[t-1]-e)<5*A.iI&&(e+=3*A.iI),(0,F.jsxs)(j.Z,{left:K+A.iI,style:q,top:e-A.iI,children:[z&&z(G,t),!z&&(0,F.jsxs)(C.ZP,{center:!0,small:!0,children:[n.toFixed?n.toFixed(3):n," ",B[t]]})]},t)})),(0,F.jsxs)(j.Z,{left:K,style:W(W({},j.j),{},{transform:"translateX(-65%)"}),top:me+U.top,children:[X&&X(G),!X&&(0,F.jsx)(C.ZP,{center:!0,small:!0,children:oe(G).toFixed(3)})]})]})]})}));t.Z=function(e){var t=e.areaBetweenLines,n=e.data,i=(e.events,e.height),o=e.lineLegendNames,a=e.margin,l=void 0===a?{}:a,u=e.width,d=e.xAxisLabel,s=e.xLabelFormat,h=e.yAxisLabel,f=e.yLabelFormat,m=(0,r.Z)(e,B),p=W(W({},{bottom:3*A.iI,left:5*A.iI,right:3*A.iI,top:3*A.iI}),l);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)("div",{style:{display:"flex",height:i,marginBottom:A.iI,width:"100%"},children:[h&&(0,F.jsx)(M.Z,{alignItems:"center",fullHeight:!0,justifyContent:"center",width:28,children:(0,F.jsx)(S.Z,{children:(0,F.jsx)(C.ZP,{center:!0,muted:!0,small:!0,children:h})})}),(0,F.jsx)(I.Z,{mr:1}),(0,F.jsx)("div",{style:{height:i,width:"undefined"===typeof u?"100%":u},children:(0,F.jsx)(c.Z,{children:function(e){var r=e.width,i=e.height;return(0,F.jsx)(V,W(W({},m),{},{areaBetweenLines:t,data:n,height:i,lineLegendNames:o,margin:p,width:r,xLabelFormat:s,yLabelFormat:f}))}})})]}),d&&(0,F.jsx)("div",{style:{paddingLeft:h?36:0,paddingTop:4},children:(0,F.jsx)(C.ZP,{center:!0,muted:!0,small:!0,children:d})})]})}},19537:function(e,t,n){n.d(t,{Z:function(){return I}});var r=n(82684),i=n(46313),o=n(88560),a=n(93461),c=n(67971),l=n(10919),u=n(11754),d=n(86673),s=n(19711),h=n(86585),f=n(31969),m=n(73942),p=n(73899),v=n(37391),g=n(49125),x=(i.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-43nc8t-0"})(["border-radius:","px;",""],m.TR,(function(e){return"\n    border: 1px solid ".concat((e.theme.interactive||f.Z.interactive).defaultBorder,";\n  ")})),i.default.div.withConfig({displayName:"indexstyle__ColumnProfileStyle",componentId:"sc-43nc8t-1"})(["",""],(function(e){return"\n    background: ".concat((e.theme.background||f.Z.background).table,";\n    border-bottom: 1px solid ").concat((e.theme.interactive||f.Z.interactive).defaultBorder,";\n    border-right: 1px solid ").concat((e.theme.interactive||f.Z.interactive).defaultBorder,";\n  ")}))),y=(i.default.div.withConfig({displayName:"indexstyle__HeaderStyle",componentId:"sc-43nc8t-2"})(["background:",";padding:","px ","px;"," border-top-left-radius:","px;border-top-right-radius:","px;"],p.Uq,1.75*g.iI,g.tr,(function(e){return"\n    border-bottom: 1px solid ".concat((e.theme.interactive||f.Z.interactive).defaultBorder,";\n  ")}),m.TR,m.TR),i.default.div.withConfig({displayName:"indexstyle__FeatureProfileStyle",componentId:"sc-43nc8t-3"})(["",""],(function(e){return"\n    border-bottom: 1px solid ".concat((e.theme.interactive||f.Z.interactive).defaultBorder,";\n  ")}))),b=(i.default.div.withConfig({displayName:"indexstyle__BodyStyle",componentId:"sc-43nc8t-4"})(["border-bottom-left-radius:","px;border-bottom-right-radius:","px;overflow-y:scroll;"],m.TR,m.TR),i.default.div.withConfig({displayName:"indexstyle__CellStyle",componentId:"sc-43nc8t-5"})([""," padding:","px;"],(function(e){return e.backgroundColor&&"\n    background-color: ".concat(e.backgroundColor,";\n  ")}),g.iI)),j=i.default.div.withConfig({displayName:"indexstyle__ScrollOverflowStyle",componentId:"sc-43nc8t-6"})([""," overflow-x:auto;"],v.w5),w=n(5679),_=n(95157),O=n(33766),Z=n(28598),k=["Type","Missing","Unique","Min","Max","Mean","Median","Mode","Invalid","Outliers","Skewness","Std dev"],P={Missing:0,Invalid:0,Outliers:0,Unique:.9};function M(e){var t=e.columns,n=e.feature,u=e.shouldLink,f=e.statistics,m=(0,r.useContext)(i.ThemeContext),p=n.columnType,v=n.uuid,x=(0,_.oZ)(f,v),j=x.average,M=x.avg_string_length,I=x.avg_word_count,C=x.count,S=x.count_distinct,E=x.invalid_value_count,T=x.invalid_value_rate,L=x.max,D=x.max_character_count,N=x.max_word_count,A=x.min,R=x.min_character_count,H=x.min_word_count,F=x.median,B=x.mode,U=x.null_value_count,W=x.null_value_rate,q=x.outlier_count,V=x.skew,X=x.std,z=x.unique_value_rate,J=[p,U,S,A,L,j,F,B,E,q,V,X],Y={Min:H,Max:N,Mean:I},G={Min:"".concat((0,w._6)("character",R)),Max:"".concat((0,w._6)("character",D)),Mean:"".concat((0,w._6)("character",(0,w.QV)(M)))},Q={Invalid:(0,w.T3)(T),Missing:(0,w.T3)(W),Unique:(0,w.T3)(z)},K=h.T5[p],$=[m.background.row,m.background.row2],ee=$[0],te=$[1],ne=u?l.Z:s.ZP;return(0,Z.jsxs)(a.Z,{flexDirection:"column",children:[(0,Z.jsx)(y,{children:(0,Z.jsx)(d.Z,{px:1,py:2,children:(0,Z.jsxs)(c.Z,{alignItems:"center",children:[K&&(0,Z.jsxs)(a.Z,{title:o.Rp[p],children:[(0,Z.jsx)(K,{size:2*g.iI}),"\xa0"]}),(0,Z.jsx)(ne,{inline:!0,onClick:u?function(){return(0,O.u)({column:t.indexOf(v)},{pushHistory:!0})}:void 0,preventDefault:!0,secondary:!0,children:(0,Z.jsx)(s.ZP,{bold:!0,default:!u,maxWidth:25*g.iI,monospace:!0,secondary:u,textOverflow:!0,title:v,children:v})})]})})}),J.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"-",t=arguments.length>1?arguments[1]:void 0,n=k[t],r=p===o.RL.TEXT&&n in Y,i=r?Y[n]:e,a=isNaN(i)?i:(0,w.QV)(i),c=n in P&&a/C>P[n];return(0,Z.jsx)(b,{backgroundColor:t%2===0?ee:te,children:(0,Z.jsxs)(s.ZP,{bold:c,danger:c,default:!0,textOverflow:!0,title:r?G[n]:"",children:[r?"".concat((0,w._6)("word",a)):a,n in Q&&" (".concat(Q[n],")")]})},t)}))]})}var I=function(e){var t=e.features,n=void 0===t?[]:t,o=e.shouldLink,l=e.statistics,h=(0,r.useContext)(i.ThemeContext),f=(0,r.useMemo)((function(){return n.map((function(e){return e.uuid}))}),[n]);return(0,Z.jsx)(u.Z,{headerTitle:"Feature profiles",children:(0,Z.jsxs)(c.Z,{children:[(0,Z.jsx)(x,{children:(0,Z.jsxs)(a.Z,{flex:1,flexDirection:"column",style:{background:h.background.table},children:[(0,Z.jsx)(d.Z,{mr:1.25*g.iI,mt:"".concat(53,"px")}),k.map((function(e,t){return(0,Z.jsx)(b,{children:(0,Z.jsx)(s.ZP,{default:!o,secondary:o,children:e})},"".concat(e,"-").concat(t))}))]})}),(0,Z.jsx)(j,{children:(0,Z.jsx)(c.Z,{children:n.map((function(e,t){return(0,Z.jsx)(y,{children:(0,Z.jsx)(M,{columns:f,feature:e,shouldLink:o,statistics:l})},"".concat(e,"-").concat(t))}))})})]})})}},80906:function(e,t,n){var r,i,o,a;n.d(t,{Q0:function(){return r},X0:function(){return a},qs:function(){return i},rD:function(){return o}}),function(e){e.ADD="add",e.AVERAGE="average",e.CLEAN_COLUMN_NAME="clean_column_name",e.COUNT="count",e.COUNT_DISTINCT="count_distinct",e.CUSTOM="custom",e.DIFF="diff",e.DROP_DUPLICATE="drop_duplicate",e.EXPAND_COLUMN="expand_column",e.EXPLODE="explode",e.FILTER="filter",e.FIRST="first",e.FIX_SYNTAX_ERRORS="fix_syntax_errors",e.GROUP="group",e.IMPUTE="impute",e.JOIN="join",e.LAST="last",e.LIMIT="limit",e.MAX="max",e.MEDIAN="median",e.MIN="min",e.MODE="mode",e.REFORMAT="reformat",e.REMOVE="remove",e.REMOVE_OUTLIERS="remove_outliers",e.SCALE="scale",e.SELECT="select",e.SHIFT_DOWN="shift_down",e.SHIFT_UP="shift_up",e.SORT="sort",e.SUM="sum",e.UNION="union",e.UPDATE_TYPE="update_type",e.UPDATE_VALUE="update_value"}(r||(r={})),function(e){e.COLUMN="column",e.ROW="row"}(i||(i={})),function(e){e.NOT_APPLIED="not_applied",e.COMPLETED="completed"}(o||(o={})),function(e){e.FEATURE="feature"}(a||(a={}))},95157:function(e,t,n){n.d(t,{Ln:function(){return d},Tx:function(){return l},eS:function(){return u},oZ:function(){return c},vI:function(){return a}});var r=n(82394);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e){var t,n;return e?null===(t=e.insights)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.reduce((function(e,t,n){return e[((null===t||void 0===t?void 0:t.feature)||{}).uuid]=n,e}),{}):{}}function c(e,t){return{average:e["".concat(t,"/average")],avg_string_length:e["".concat(t,"/avg_string_length")],avg_word_count:e["".concat(t,"/avg_word_count")],completeness:e["".concat(t,"/completeness")],count:e["".concat(t,"/count")],count_distinct:e["".concat(t,"/count_distinct")],invalid_indices:e["".concat(t,"/invalid_indices")],invalid_value_count:e["".concat(t,"/invalid_value_count")],invalid_value_rate:e["".concat(t,"/invalid_value_rate")],invalid_values:e["".concat(t,"/invalid_values")],max:e["".concat(t,"/max")],max_character_count:e["".concat(t,"/max_character_count")],max_null_seq:e["".concat(t,"/max_null_seq")],max_word_count:e["".concat(t,"/max_word_count")],median:e["".concat(t,"/median")],min:e["".concat(t,"/min")],min_character_count:e["".concat(t,"/min_character_count")],min_word_count:e["".concat(t,"/min_word_count")],mode:e["".concat(t,"/mode")],null_value_count:e["".concat(t,"/null_value_count")],null_value_rate:e["".concat(t,"/null_value_rate")],outlier_count:e["".concat(t,"/outlier_count")],outlier_ratio:e["".concat(t,"/outlier_ratio")],outliers:e["".concat(t,"/outliers")],quality:e["".concat(t,"/quality")],skew:e["".concat(t,"/skew")],std:e["".concat(t,"/std")],sum:e["".concat(t,"/sum")],unique_value_rate:e["".concat(t,"/unique_value_rate")],validity:e["".concat(t,"/validity")],value_counts:e["".concat(t,"/value_counts")]}}function l(e,t){return e&&e.statistics?c(e.statistics,t):{}}function u(e,t){if(!e||!e.statistics)return{};var n=e.statistics,r={};return null===t||void 0===t||t.forEach((function(e){var t=n["".concat(e,"/invalid_indices")];r[e]=t})),r}function d(e){var t=e.pipeline,n=void 0===t?{}:t,r=Array.isArray(null===n||void 0===n?void 0:n.actions)?n.actions.map((function(e,t){return o(o({},e),{},{id:t+1})})):[];return o(o({},e),{},{pipeline:o(o({},n),{},{actions:r})})}},33766:function(e,t,n){n.d(t,{u:function(){return d}});var r=n(12757),i=n(82394),o=n(34376),a=n.n(o),c=n(59e3);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.replaceParams,o=n.pushHistory,l=i?{}:(0,c.iV)();t=window.location.pathname;var d=o?a().push:a().replace,s=u(u({},l),e);Object.entries(e).forEach((function(e){var t=(0,r.Z)(e,2),n=t[0],i=t[1];"undefined"!==typeof i&&null!==i||delete s[n]}));var h=(0,c.uM)(s);h.length>=1&&(h="?".concat(h));var f="".concat(t.split("?")[0]).concat(h);return d(a().router.pathname,f,{shallow:!0})}},66166:function(e,t,n){var r=n(82684);t.Z=function(e){var t=(0,r.useRef)();return(0,r.useEffect)((function(){t.current=e}),[e]),t.current}}}]);