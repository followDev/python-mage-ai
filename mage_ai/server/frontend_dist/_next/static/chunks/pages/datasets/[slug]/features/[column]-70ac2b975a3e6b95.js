(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[438],{6279:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return at}});var r=n(9499),i=n(6835),a=n(1163),o=n.n(a),l=n(7294),u=n(5278),s=n(1180),c=n(381),d=n.n(c),h=n(3955),m=n(1757),f=n(5485),v=n(2729),x=n(4730),p=n(7812),g=n(5142),y=n(2125),j=n(9223),b=n(1788),Z=n(8649),w=n(4645),O=n(9163),k=n(9540),P=n(4764),_=n(9599),I=n(97),C=n(4993),M=n(3499),D=n(5079),S=n(3382),T=n(4370),N=n(7249),L=n(2594),A=n(6486),F=n(7357),V=n(1217),E=n(8276),H=n(160),R=n(987),B=n(9633),Y=R.Z.brand,z=Y.earth200,J=Y.earth300,X=Y.earth400,G=Y.energy200,W=Y.energy300,q=Y.energy400,K=Y.fire200,U=Y.fire300,Q=Y.fire400,$=Y.water200,ee=Y.water300,te=Y.water400,ne=Y.wind200,re=Y.wind300,ie=Y.wind400,ae=[ie,te,Q,q,X,re,ee,U,W,J,ne,$,K,G,z],oe=[ie,te,X,Q,re,ee,J,U],le=n(5363),ue=n(1896),se=n(515),ce=n(450),de=n(5893),he=["areaBetweenLines","data","events","height","lineLegendNames","margin","xAxisLabel","xLabelFormat","yAxisLabel","yLabelFormat"];function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ve=fe(fe({},S.j),{},{backgroundColor:R.Z.background.navigation,border:"none"}),xe=y.ZP.div.withConfig({displayName:"LineSeries__YAxisLabelContainer",componentId:"sc-2jcozd-0"})(["-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);white-space:nowrap;"]),pe=(0,T.Z)((function(e){var t=e.areaBetweenLines,n=e.data,r=e.events,i=void 0!==r&&r,a=e.getX,o=e.getY,u=e.height,s=e.hideTooltip,c=e.increasedXTicks,d=e.lineLegendNames,h=e.margin,m=e.noCurve,f=e.renderXTooltipContent,v=e.renderYTooltipContent,x=e.showTooltip,g=e.thickStroke,y=e.tooltipData,T=e.tooltipLeft,E=void 0===T?0:T,Y=e.tooltipTop,z=void 0===Y?[]:Y,J=e.width,X=e.xLabelFormat,G=e.yLabelFormat,W=a||function(e){return null===e||void 0===e?void 0:e.x},q=o||function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return null===e||void 0===e?void 0:e.y[t]},K="rgba(255, 255, 255, 0.3)",U=R.Z.brand.wind200,Q=R.Z.monotone.gray,$=R.Z.monotone,ee=($.black,$.gray),te=n.map((function(e){return Number(W(e))}));if(J<10)return null;var ne=J-h.left-h.right,re=u-h.top-h.bottom,ie=Math.max.apply(Math,(0,p.Z)(n.map((function(e){return e.y.length})))),oe=(0,l.useMemo)((function(){return(0,F.Z)({domain:[Math.min.apply(Math,(0,p.Z)(te)),Math.max.apply(Math,(0,p.Z)(te))],range:[0,ne]})}),[ne,te]),he=Math.min.apply(Math,(0,p.Z)(n.map((function(e){var t=e.y;return Math.min.apply(Math,(0,p.Z)(t))})))),me=Math.max.apply(Math,(0,p.Z)(n.map((function(e){var t=e.y;return Math.max.apply(Math,(0,p.Z)(t))})))),xe=(0,l.useMemo)((function(){return(0,F.Z)({domain:[he,me],nice:!0,range:[re,0]})}),[re,me,he]),pe=J>520?c?20:10:c?10:5,ge=Q,ye=ae.map((function(e){return{stroke:e}})),je=(0,V.Z)({domain:d||[],range:ye.map((function(e){return e.stroke}))}),be=(0,l.useCallback)((function(e){var t=((0,L.Z)(e)||{x:0}).x,r=oe.invert(t-h.left),i=(0,ce.ry)(te,(function(e){return r>=e})),a=n[i-1],o=n[i],l=a;o&&(l=r-W(a)>W(o)-r?o:a);var u=(0,A.range)(0,ie).map((function(e){return xe(q(l,e))}));x({tooltipData:fe(fe({},l),{},{index:i}),tooltipLeft:t,tooltipTop:u})}),[n,W,q,h,x,oe,xe]),Ze={};return m||(Ze.curve=N.ZP),(0,de.jsxs)(de.Fragment,{children:[d&&(0,de.jsx)("div",{style:{marginLeft:null===h||void 0===h?void 0:h.left},children:(0,de.jsx)(I.Z,{labelFormat:function(e){return e},scale:je,children:function(e){return(0,de.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:e.map((function(e,t){return(0,de.jsxs)(C.Z,{margin:"0 5px",onClick:function(){i&&alert("clicked: ".concat(JSON.stringify(e)))},children:[(0,de.jsx)("svg",{height:15,width:15,children:(0,de.jsx)("rect",{fill:e.value,height:15,width:15})}),(0,de.jsx)(M.Z,{align:"left",margin:"0 0 0 4px",children:(0,de.jsx)(H.ZP,{small:!0,children:e.text})})]},"legend-quantile-".concat(t))}))})}})}),(0,de.jsxs)("svg",{height:u,width:J,children:[!t&&(0,de.jsx)(Z.Z,{fill:"transparent",height:u,onMouseLeave:function(){return s()},onMouseMove:be,onTouchMove:be,onTouchStart:be,rx:14,width:J-(h.left+h.right),x:h.left,y:0}),(0,de.jsxs)(_.Z,{left:h.left,top:h.top,children:[(0,de.jsx)(k.Z,{height:re,pointerEvents:"none",scale:xe,stroke:K,strokeDasharray:"3,3",strokeOpacity:.7,width:ne}),(0,de.jsx)(P.Z,{height:re,pointerEvents:"none",scale:oe,stroke:K,strokeDasharray:"3,3",strokeOpacity:.7,width:ne}),(0,de.jsx)("line",{stroke:K,x1:ne,x2:ne,y1:0,y2:re}),(0,de.jsx)(j.Z,{numTicks:pe,scale:oe,stroke:ge,tickFormat:function(e){return X?X(e):e},tickLabelProps:function(e){return{fill:Q,fontFamily:le.ry,fontSize:ue.J5,textAnchor:"middle",transform:"rotate(-45, ".concat(oe(e),", 0) translate(-32, 4)")}},tickStroke:ge,top:re}),(0,de.jsx)(b.Z,{hideTicks:!0,scale:xe,stroke:ge,tickFormat:function(e){return G?G(e):e},tickLabelProps:function(e){return{dx:String(e).length>4?3:0,fill:Q,fontFamily:le.ry,fontSize:ue.J5,textAnchor:"end"}},tickStroke:ge}),t&&t.map((function(e){var t=e[0],r=e[1];return(0,l.createElement)(D.Z,fe(fe({},Ze),{},{aboveAreaProps:{fill:R.Z.brand.earth400,fillOpacity:.3},belowAreaProps:{fill:U,fillOpacity:.2},clipAboveTo:0,clipBelowTo:re,data:n,id:"".concat(Math.random()),key:"".concat(t,"-").concat(r),x:function(e){return oe(W(e))},y0:function(e){return xe("undefined"===typeof r?he:q(e,r))},y1:function(e){return xe(q(e,t))}}))})),(0,A.range)(0,ie).map((function(e){return(0,l.createElement)(w.Z,fe(fe({},Ze),{},{data:n,key:e,pointerEvents:"none",strokeWidth:g?2:1,x:function(e){return oe(W(e))},y:function(t){return xe(e>=t.y.length?he:q(t,e))}},ye[e]))}))]}),y&&(0,de.jsxs)("g",{children:[(0,de.jsx)(O.Z,{from:{x:E,y:h.top},pointerEvents:"none",stroke:B.Ej,strokeDasharray:"5,2",strokeWidth:1,to:{x:E,y:re+h.top}}),z.map((function(e,t){return(0,de.jsx)("circle",{cx:E,cy:e+1+h.top,fill:ye[t].stroke,fillOpacity:.1,pointerEvents:"none",r:4,stroke:ee,strokeOpacity:.1,strokeWidth:1},t)})),z.map((function(e,t){return(0,de.jsx)("circle",{cx:E,cy:e+h.top,fill:ye[t].stroke,pointerEvents:"none",r:4,stroke:ye[t].stroke,strokeWidth:2},t)}))]})]}),y&&(0,de.jsxs)("div",{children:[z.map((function(e,t){var n=q(y,t);return t>=1&&Math.abs(z[t-1]-e)<5*se.iI&&(e+=3*se.iI),(0,de.jsxs)(S.Z,{left:E+se.iI,style:ve,top:e-se.iI,children:[v&&v(y,t),!v&&(0,de.jsxs)(H.ZP,{center:!0,small:!0,children:[n.toFixed?n.toFixed(3):n," ",d[t]]})]},t)})),(0,de.jsxs)(S.Z,{left:E,style:fe(fe({},S.j),{},{transform:"translateX(-65%)"}),top:re+h.top,children:[f&&f(y),!f&&(0,de.jsx)(H.ZP,{center:!0,small:!0,children:W(y).toFixed(3)})]})]})]})}));var ge=function(e){var t=e.areaBetweenLines,n=e.data,r=(e.events,e.height),i=e.lineLegendNames,a=e.margin,o=void 0===a?{}:a,l=e.xAxisLabel,u=e.xLabelFormat,s=e.yAxisLabel,c=e.yLabelFormat,d=(0,x.Z)(e,he),h=fe(fe({},{bottom:3*se.iI,left:5*se.iI,right:3*se.iI,top:3*se.iI}),o);return(0,de.jsxs)(de.Fragment,{children:[(0,de.jsxs)("div",{style:{display:"flex",height:r,width:"100%",marginBottom:se.iI},children:[s&&(0,de.jsx)(f.Z,{alignItems:"center",justifyContent:"center",fullHeight:!0,width:28,children:(0,de.jsx)(xe,{children:(0,de.jsx)(H.ZP,{center:!0,muted:!0,small:!0,children:s})})}),(0,de.jsx)(E.Z,{mr:1}),(0,de.jsx)("div",{style:{height:r,width:"100%"},children:(0,de.jsx)(g.Z,{children:function(e){var r=e.width,a=e.height;return(0,de.jsx)(pe,fe(fe({},d),{},{areaBetweenLines:t,data:n,height:a,lineLegendNames:i,margin:h,width:r,xLabelFormat:u,yLabelFormat:c}))}})})]}),l&&(0,de.jsx)("div",{style:{paddingLeft:36},children:(0,de.jsx)(H.ZP,{center:!0,muted:!0,small:!0,children:l})})]})},ye=n(3391),je=n(9920),be=["height","width"];function Ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ze(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ze(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Oe={bottom:0,left:0,right:0,top:0},ke=function(e){var t=e.endAngle;return{endAngle:t>Math.PI?2*Math.PI:0,opacity:0,startAngle:t>Math.PI?2*Math.PI:0}},Pe=function(e){var t=e.startAngle;return{endAngle:e.endAngle,opacity:1,startAngle:t}};function _e(e){var t=e.animate,n=e.arcs,r=e.path,a=e.getKey,o=e.getColor,l=e.onClickDatum;return(0,je.useTransition)(n,{enter:Pe,from:t?ke:Pe,keys:a,leave:t?ke:Pe,update:Pe})((function(e,t,n){var u=n.key,s=r.centroid(t),c=(0,i.Z)(s,2),d=c[0],h=c[1],m=t.endAngle-t.startAngle>=.1;return(0,de.jsxs)("g",{children:[(0,de.jsx)(je.animated.path,{d:(0,je.interpolate)([e.startAngle,e.endAngle],(function(e,n){return r(we(we({},t),{},{endAngle:n,startAngle:e}))})),fill:o(t),onClick:function(){return l(t)},onTouchStart:function(){return l(t)}}),m&&(0,de.jsx)(je.animated.g,{style:{opacity:e.opacity},children:(0,de.jsx)("text",{dy:".33em",fill:"white",fontFamily:le.ry,fontSize:ue.J5,pointerEvents:"none",textAnchor:"middle",x:d,y:h,children:a(t)})})]},u)}))}function Ie(e){var t=e.animate,n=void 0===t||t,r=e.data,i=e.getX,a=e.getY,o=e.height,u=e.margin,s=void 0===u?Oe:u,c=e.width,d=(0,l.useState)(null),h=d[0],m=d[1];if(c<10)return null;var f=(0,V.Z)({domain:r.map((function(e){return i(e)})),range:oe}),v=c-s.left-s.right,x=o-s.top-s.bottom,p=Math.min(v,x)/2,g=x/2,y=v/2,j=Math.min(v/4,12*se.iI);return(0,de.jsx)("svg",{height:o,width:c,children:(0,de.jsx)(_.Z,{left:y+s.left,top:g+s.top,children:(0,de.jsx)(ye.Z,{cornerRadius:se.iI/2,data:h?r.filter((function(e){return JSON.stringify(e)===JSON.stringify(h)})):r,innerRadius:p-j,outerRadius:p,padAngle:.005,pieValue:a,children:function(e){return(0,de.jsx)(_e,we(we({},e),{},{animate:n,getColor:function(e){var t=e.data;return f(i(t))},getKey:function(e){var t=e.data;return i(t)},onClickDatum:function(e){var t=e.data;return n&&m(h&&JSON.stringify(h)===JSON.stringify(t)?null:t)}}))}})})})}function Ce(e){var t=e.height,n=e.width,r=(0,x.Z)(e,be),i={};return t&&(i.height=t),n&&(i.width=n),(0,de.jsx)("div",{style:i,children:(0,de.jsx)(g.Z,{children:function(e){var t=e.width,n=e.height;return(0,de.jsx)(Ie,we(we({},r),{},{height:n,width:t}))}})})}var Me=n(992),De=n(862),Se=n(8330),Te=n(5166),Ne=n(3577),Le=n(3918);var Ae=function(e){var t,n=e.column,r=e.features,a=e.insights,o=e.statisticsByColumn,u=e.statisticsOverview,s=(0,l.useRef)(null),c=(0,l.useState)(0),x=(c[0],c[1]);(0,l.useEffect)((function(){var e,t;x(null===s||void 0===s||null===(e=s.current)||void 0===e||null===(t=e.getBoundingClientRect())||void 0===t?void 0:t.width)}),[s,x]);var p=u||{},g=null===p||void 0===p?void 0:p.count,y=(0,ce.HK)(r,(function(e){return e.uuid})),j=((0,ce.vM)(r,(function(e){return e.columnType})),y[n]||{}),b=null===p||void 0===p?void 0:p["".concat(n,"/count")],Z=null===p||void 0===p?void 0:p["".concat(n,"/count_distinct")],w=[{columnValues:["Number of values",(0,Le.x6)(b)],uuid:"count"},{columnValues:["Unique values",(0,Le.x6)(Z)],uuid:"count_distinct"},{columnValues:["Missing values",(0,Le.T3)(null===p||void 0===p?void 0:p["".concat(n,"/null_value_rate")])],uuid:"null_value_rate"}],O=m.Fy===j.columnType,k=m.Vg.includes(j.columnType),P=[m.fy,m.KS].includes(j.columnType);if(k)w.push.apply(w,[{columnValues:["Minimum",(0,Le.x6)(null===p||void 0===p?void 0:p["".concat(n,"/min")])],uuid:"min"},{columnValues:["Maximum",(0,Le.x6)(null===p||void 0===p?void 0:p["".concat(n,"/max")])],uuid:"max"},{columnValues:["Average",(0,Le.x6)(null===p||void 0===p?void 0:p["".concat(n,"/average")])],uuid:"average"},{columnValues:["Median",(0,Le.x6)(null===p||void 0===p?void 0:p["".concat(n,"/median")])],uuid:"median"},{columnValues:["Total sum",(0,Le.x6)(null===p||void 0===p?void 0:p["".concat(n,"/sum")])],uuid:"sum"}]);else{var _=null===p||void 0===p?void 0:p["".concat(n,"/mode")];_&&w.push({columnValues:["Most frequent value",_],uuid:"mode"})}var I,C,M=a||{},D=M.charts,S=M.correlations,T=M.time_series,N=((0,Ne.LH)([{correlations:S,feature:j}]),null===D||void 0===D?void 0:D.find((function(e){var t=e.type;return Se.o.HISTOGRAM===t}))),L=N?(0,Ne.Co)(N,y,{calculateAnomaly:function(e){var t=e.y,n=e.yValuesAverage,r=e.yValuesStandardDeviation;return Math.abs(t.value-n)>2*r},feature:j,getYValue:function(e){return e.value}}):{},A=L.distribution,F=void 0===A?null:A,V=L.rangedWithUnusualDistribution,B=void 0===V?null:V,Y=L.unusualDistribution,z=void 0===Y?null:Y,J=Object.entries(o||{}).map((function(e){var t=(0,i.Z)(e,2),n=t[0];return{x:t[1],y:n}}));if(F)I=(0,de.jsx)(v.Z,{data:F.data.map((function(e){var t=e.hideRange,n=e.isUnusual,r=e.x;return[e.xLabel,e.y.value,r.min,r.max,n,t]})),getBarColor:function(e){return(0,i.Z)(e,5)[4]?R.Z.brand.wind400:R.Z.brand.wind300},height:50*se.iI,large:!0,margin:{right:2*se.iI},noPadding:!0,renderTooltipContent:function(e){var t=(0,i.Z)(e,6),n=t[1],r=t[2],a=t[3],o=t[5];return(0,de.jsxs)(H.ZP,{small:!0,children:[o&&(0,de.jsxs)(de.Fragment,{children:["Rows: ",n,(0,de.jsx)("br",{}),"Value: ",r]}),!o&&(0,de.jsxs)(de.Fragment,{children:["Rows: ",n,(0,de.jsx)("br",{}),"Range: ",r," - ",a]})]})},showAxisLabels:!0,showYAxisLabels:!0,showZeroes:!0,sortData:function(e){return(0,ce.YC)(e,"[2]")},width:600},n);else if(P){var X=(0,ce.YC)(J,"x");I=(0,de.jsx)(h.Z,{data:X,height:Math.max(3*X.length*se.iI,50*se.iI),renderTooltipContent:function(e){var t=e.x,n=e.y;return"".concat(n," appears ").concat((0,Le.x6)(t)," times")},xNumTicks:2,ySerialize:function(e){var t=e.y;return(0,Le.x6)(t)}})}else O&&o&&(I=(0,de.jsx)(Ce,{data:Object.entries(o),getX:function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1];return"".concat(n," (").concat((0,Le.x6)(r),")")},getY:function(e){return(0,i.Z)(e,2)[1]},height:60*se.iI}));if((null===B||void 0===B?void 0:B.length)>=1)C=(0,de.jsx)(Me.Z,{columnFlexNumbers:[1,1,1],columnHeaders:[{label:"Starting value"},{label:"Ending value"},{label:"Rows"}],rowGroupData:[{rowData:B.map((function(e){var t=e.x,n=e.y;return{columnValues:[t.min,t.max,(0,Le.x6)(n.value)],uuid:""}}))}],small:!0});else if((null===z||void 0===z?void 0:z.length)>=1)C=(0,de.jsx)(Me.Z,{columnFlexNumbers:[1,1],columnHeaders:[{label:"Value"},{label:"Rows"}],rowGroupData:[{rowData:z.map((function(e){var t=e.x,n=e.y;return{columnValues:[t.min,(0,Le.x6)(n.value)],uuid:""}}))}],small:!0});else if(P){var G=J.reduce((function(e,t){var n=t.x,r=t.y;return(0,Ne.xp)(n,b,Z)&&e.push({x:n,y:r}),e}),[]);G.length>=1&&(C=(0,de.jsx)(Me.Z,{columnFlexNumbers:[1,1],columnHeaders:[{label:"Value"},{label:"Rows"}],rowGroupData:[{rowData:(0,ce.YC)(G,"x",{ascending:!1}).map((function(e){var t=e.x;return{columnValues:[e.y,t],uuid:""}}))}],small:!0}))}var W=function(e){var t=e.legendNames,n=e.serializeY,r=e.x,i=e.xMetadata,a=e.y,o=e.yAxisLabel,l=void 0===o?"Statistics":o,u=r.map((function(e,t){var r=e.max,i=e.min,o=a[t];return{x:(r-i)/2+i,y:n(o)}}));return(0,de.jsx)(ge,{data:u,height:60*se.iI,lineLegendNames:t,margin:{bottom:10*se.iI},noCurve:!0,renderXTooltipContent:function(e){var t=e.index,n=r[t],i=n.min,a=n.max;return(0,de.jsxs)(H.ZP,{small:!0,children:[d().unix(i).format(Te.zT)," - ",d().unix(a).format(Te.zT)]})},renderYTooltipContent:function(e,n){var r=e.y;return(0,de.jsxs)(H.ZP,{small:!0,children:[t[n],": ",(0,Le.x6)((0,Le.QV)(r[n],4))]})},xAxisLabel:i.label,xLabelFormat:function(e){return d().unix(e).format(Te.zT)},yAxisLabel:l})},q=[];return null===T||void 0===T||null===(t=T.filter((function(e){var t=e.type;return Se.o.LINE_CHART===t})))||void 0===t||t.forEach((function(e){var t=e.x,n=e.x_metadata,r=e.y,i=[{chart:W({legendNames:["Rows","Unique values","% missing values"],serializeY:function(e){return[e.count,e.count_distinct,e.null_value_rate]},x:t,xMetadata:n,y:r}),metric:"count"}];if(k)i.push({chart:W({legendNames:["Minimum","Maximum","Average","Median"],serializeY:function(e){var t=e.average,n=e.max,r=e.median;return[e.min,n,t,r]},x:t,xMetadata:n,y:r}),metric:"sum"});else if(P||O){var a,o=null===r||void 0===r||null===(a=r[0])||void 0===a?void 0:a.value_counts;if(o){var l=Object.keys(o);i.push({chart:W({legendNames:l,serializeY:function(e){var t=e.value_counts;return l.map((function(e){return(null===t||void 0===t?void 0:t[e])||0}))},x:t,xMetadata:n,y:r,yAxisLabel:"Number of rows with value"}),metric:"value_counts"})}}q.push({charts:i,column:n.label})})),(0,de.jsxs)(f.Z,{flexDirection:"column",fullWidth:!0,justifyContent:"center",children:[I&&(0,de.jsx)(De.Hk,{left:(0,de.jsx)(De.BO,{title:"Distribution of values",children:I}),right:(0,de.jsxs)(De.BO,{noPadding:O||!!C,title:"Distribution data",children:[O&&(0,de.jsx)(Me.Z,{columnFlexNumbers:[1,1,1],columnHeaders:[{label:"Value"},{label:"Number of rows"},{label:"% of rows"}],rowGroupData:[{rowData:(0,ce.YC)(Object.entries(o),(function(e){return(0,i.Z)(e,2)[1]}),{ascending:!1}).map((function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1];return{columnValues:[n,(0,Le.x6)(r),(0,Le.T3)(r/g)],uuid:r}}))}],small:!0}),!O&&(0,de.jsxs)(de.Fragment,{children:[!C&&(0,de.jsx)(H.ZP,{children:"There is no unusual distribution."}),C]})]})}),q.length>=1&&q.map((function(e){var t=e.column,n=e.charts;return(0,de.jsx)(De.Hk,{left:(0,de.jsx)(De.BO,{title:"Statistics by date, column: ".concat(t),children:n.map((function(e){var t=e.chart;e.metric;return(0,de.jsx)(E.Z,{mb:4,children:t})}))})})}))]})},Fe=n(7618),Ve=n(3481),Ee=n(9868),He=n(2631),Re=1.75,Be=(0,y.iv)(["padding:","px;padding-bottom:","px;padding-top:","px;"],Re*se.iI,2*se.iI,2*se.iI),Ye=y.ZP.div.withConfig({displayName:"Panel__PanelStyle",componentId:"sc-1ct8cgl-0"})(["border-radius:","px;overflow:hidden;width:100%;"," "," ",""],He.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||R.Z.background).page,";\n    border: 1px solid ").concat((e.theme.interactive||R.Z.interactive).defaultBorder,";\n  ")}),(function(e){return!e.fullHeight&&"\n    height: fit-content;\n  "}),(function(e){return e.borderless&&"\n    border: none;\n  "})),ze=y.ZP.div.withConfig({displayName:"Panel__HeaderStyle",componentId:"sc-1ct8cgl-1"})([""," "," ",""],(function(e){return"\n    background-color: ".concat((e.theme.background||R.Z.background).header,";\n    border-bottom: 1px solid ").concat((e.theme.interactive||R.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),Be),Je=y.ZP.div.withConfig({displayName:"Panel__ContentStyle",componentId:"sc-1ct8cgl-2"})(["overflow-y:auto;padding:","px;",""],Re*se.iI,(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")})),Xe=y.ZP.div.withConfig({displayName:"Panel__FooterStyle",componentId:"sc-1ct8cgl-3"})(["border-style:",";border-top-width:","px;padding:","px;"],He.M8,He.YF,Re*se.iI),Ge=6.5*se.iI,We=6.5*se.iI;var qe=function(e){var t=e.borderless,n=e.children,r=e.containerRef,i=e.contentContainerRef,a=e.footer,o=e.fullHeight,l=void 0===o||o,u=e.header,s=e.headerHeight,c=e.headerIcon,d=e.headerTitle,h=e.items,m=e.subtitle,v=14;return(d||u)&&(v-=s||Ge),a&&(v-=We),(0,de.jsxs)(Ye,{borderless:t,fullHeight:l,ref:r,children:[(u||d)&&(0,de.jsxs)(ze,{height:s,children:[u&&u,d&&(0,de.jsxs)(f.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,de.jsxs)(f.Z,{alignItems:"center",children:[c&&c,(0,de.jsx)(E.Z,{ml:c?1:0,children:(0,de.jsx)(H.ZP,{bold:!0,children:d})})]}),h&&(0,de.jsx)(de.Fragment,{children:h})]}),m&&(0,de.jsxs)(de.Fragment,{children:[(0,de.jsx)(E.Z,{mb:2}),(0,de.jsx)(f.Z,{alignItems:"right",children:m})]})]}),(0,de.jsx)(Je,{height:l?v:null,ref:i,children:n}),a&&(0,de.jsx)(Xe,{children:(0,de.jsx)(f.Z,{alignItems:"center",justifyContent:"center",children:a})})]})},Ke=n(4085),Ue=n(1487),Qe=n(1743),$e=n(4019),et=n(8302),tt=n(686);function nt(e){if(void 0===e)return"";var t=1===e||0===e?100*e:(100*e).toFixed(2);return"".concat(t,"%")}function rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function it(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?rt(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var at=function(){var e,t,n,r,c=(0,a.useRouter)().query,d=c.slug,h=c.column,m=et.ZP.feature_sets.detail(d).data,v=Object.entries((null===m||void 0===m||null===(e=m.metadata)||void 0===e?void 0:e.column_types)||{}).map((function(e){var t=(0,i.Z)(e,2),n=t[0];return{columnType:t[1],uuid:n}})),x=(0,tt.kx)(m),p=+h,g=x[p],y=null===g||void 0===g?void 0:g.uuid,j=null===g||void 0===g?void 0:g.column_type,b=null===m||void 0===m||null===(t=m.sample_data)||void 0===t||null===(n=t.rows)||void 0===n?void 0:n.map((function(e){return{columnValues:[e[p]]}})),Z=((null===m||void 0===m||null===(r=m.insights)||void 0===r?void 0:r[0])||[]).find((function(e){return e.feature.uuid===y})),w=(null===m||void 0===m?void 0:m.statistics)||{},O=(0,tt.Tx)(m,y),k=O.completeness,P=O.count,_=O.count_distinct,I=O.invalid_value_count,C=O.null_value_count,M=O.outlier_count,D=O.skew,S=[{columnValues:["Validity",nt(O.validity)]},{columnValues:["Completeness",nt(k)]},{columnValues:["Total values",P]},{columnValues:["Unique values",_]},{columnValues:["Missing values",C]},{columnValues:["Invalid values",I]}],T=[{columnValues:["Outliers",M]},{columnValues:["Skewed",null===D||void 0===D?void 0:D.toFixed(3)]}],N=T.every((function(e){return"undefined"===typeof e.columnValues[1]})),L=(0,l.useState)("data"),A=L[0],F=L[1],V=(0,de.jsxs)(f.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,de.jsx)(Ee.Z,{featureSet:m}),(0,de.jsx)(s.Z,{onClick:function(e){e.preventDefault(),o().push("/datasets")},children:(0,de.jsx)(H.ZP,{bold:!0,children:" Datasets view "})})]}),R=(Me.Z,"".concat(y," (").concat(j,")"),(0,de.jsx)(Me.Z,{columnFlexNumbers:[1,1],columnHeaders:[{label:"Column summary"}],rowGroupData:[{rowData:S}]})),B=(0,de.jsxs)(f.Z,{justifyContent:"center",children:[(0,de.jsx)(Fe.Z,{flex:1,children:(0,de.jsx)(Me.Z,{columnFlexNumbers:[1,1],columnHeaders:[{label:"Column values"}],rowGroupData:[{rowData:b,title:"".concat(y," (").concat(j,")")}]})}),(0,de.jsx)(E.Z,{ml:se.iI}),(0,de.jsx)(Fe.Z,{flex:1,children:R})]}),Y=(0,de.jsxs)(f.Z,{justifyContent:"center",children:[(0,de.jsx)(Fe.Z,{flex:1,children:R}),(0,de.jsx)(E.Z,{ml:se.iI}),(0,de.jsx)(Fe.Z,{flex:1,children:N?(0,de.jsx)(qe,{fullHeight:!1,headerTitle:"Warnings",children:(0,de.jsx)(H.ZP,{children:"There are no warnings."})}):(0,de.jsx)(Me.Z,{columnFlexNumbers:[1,1],columnHeaders:[{label:"Warnings"}],rowGroupData:[{rowData:T}]})})]}),z=(0,de.jsxs)(Qe.Z,{bold:!0,defaultKey:A,large:!0,noBottomBorder:!1,onChange:function(e){return F(e)},children:[(0,de.jsxs)(Qe.O,{label:"Data",children:[(0,de.jsx)(E.Z,{my:3}),B]},"data"),(0,de.jsxs)(Qe.O,{label:"Reports",children:[(0,de.jsx)(E.Z,{my:3}),Y]},"reports"),(0,de.jsxs)(Qe.O,{label:"Visualizations",children:[(0,de.jsx)(E.Z,{my:3}),(0,de.jsx)(Ae,{column:y,features:v,insights:Z,statisticsByColumn:w["".concat(y,"/value_counts")]||{},statisticsOverview:w})]},"visualizations")]}),J=(0,l.useState)(),X=J[0],G=J[1],W=null===X||void 0===X?void 0:X.action_type;return(0,de.jsxs)(Ve.Z,{centerAlign:!0,children:[(0,de.jsxs)(E.Z,{mt:se.iI,children:[W&&(0,de.jsx)(u.Z,{actionType:W,axis:null===X||void 0===X?void 0:X.axis,currentFeature:{columnType:j,uuid:y},onSave:function(){return function(e){var t={action_arguments:[y],action_payload:it(it({},e),{},{action_type:W})};alert(JSON.stringify(t))}(X)},payload:X,setPayload:G}),(0,de.jsx)(E.Z,{mt:5,children:(0,de.jsxs)(Ke.Z,{onChange:function(e){return G(JSON.parse(e.target.value))},value:W,width:20*se.iI,children:[(0,de.jsx)("option",{value:"",children:"New action"}),Object.entries($e.Z.columns).map((function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1];return(0,de.jsx)("option",{value:JSON.stringify({action_type:n,axis:"column"}),children:r.title},n)}))]})})]}),(0,de.jsx)(E.Z,{mt:se.iI}),V,(0,de.jsx)(Ue.Z,{featureSet:m,featureSetId:d}),(0,de.jsx)(E.Z,{mt:4}),z]})}},8538:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets/[slug]/features/[column]",function(){return n(6279)}])}},function(e){e.O(0,[885,662,195,452,410,605,493,128,774,888,179],(function(){return t=8538,e(e.s=t);var t}));var t=e.O();_N_E=t}]);