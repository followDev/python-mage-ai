(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[244],{66757:function(e,n,t){"use strict";var r=t(19319),i=t(94178),o=t(67240),u="localStorage"in t.g&&t.g.localStorage?t.g.localStorage:r;function c(e,n){return 1===arguments.length?s(e):l(e,n)}function s(e){const n=u.getItem(e);return i(n)}function l(e,n){try{return u.setItem(e,JSON.stringify(n)),!0}catch(t){return!1}}c.set=l,c.get=s,c.remove=function(e){return u.removeItem(e)},c.clear=function(){return u.clear()},c.backend=function(e){return e&&(u=e),u},c.on=o.on,c.off=o.off,e.exports=c},94178:function(e){"use strict";e.exports=function(e){const n=function(e){try{return JSON.parse(e)}catch(n){return e}}(e);return void 0===n?null:n}},19319:function(e){"use strict";var n={};e.exports={getItem:function(e){return e in n?n[e]:null},setItem:function(e,t){return n[e]=t,!0},removeItem:function(e){return!!(e in n)&&delete n[e]},clear:function(){return n={},!0}}},67240:function(e,n,t){"use strict";var r=t(94178),i={};function o(e){e||(e=t.g.event);var n=i[e.key];n&&n.forEach((function(n){n(r(e.newValue),r(e.oldValue),e.url||e.uri)}))}e.exports={on:function(e,n){i[e]?i[e].push(n):i[e]=[n],t.g.addEventListener?t.g.addEventListener("storage",o,!1):t.g.attachEvent?t.g.attachEvent("onstorage",o):t.g.onstorage=o},off:function(e,n){var t=i[e];t.length>1?t.splice(t.indexOf(n),1):i[e]=[]}}},59739:function(e,n,t){"use strict";var r=t(56669);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,o,u){if(u!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:i};return t.PropTypes=t,t}},47329:function(e,n,t){e.exports=t(59739)()},56669:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},27125:function(e,n,t){"use strict";var r=t(82684),i=t(12691),o=t.n(i),u=t(34376),c=t.n(u),s=t(46313),l=t(66050),a=t(60328),d=t(16634),f=t(10919),p=t(86673),h=t(17903),v=t(19711),g=t(10503),m=t(49125),b=t(44162),w=t(24224),y=t(28598);n.Z=function(e){var n=e.blockRuns,t=e.onClickRow,i=e.pipeline,u=e.selectedRun,x=(0,r.useContext)(s.ThemeContext),_=(i||{}).uuid,j=(0,r.useMemo)((function(){return i.blocks||[]}),[i]),O=(0,r.useMemo)((function(){return(0,w.HK)(j,(function(e){return e.uuid}))}),[j]);return(0,y.jsx)(h.Z,{columnFlex:[null,1,3,2,null,null],columns:[{uuid:"Date"},{uuid:"Status"},{uuid:"Trigger"},{uuid:"Block"},{uuid:"Completed"},{uuid:"Logs"}],isSelectedRow:function(e){return n[e].id===(null===u||void 0===u?void 0:u.id)},onClickRow:t,rows:null===n||void 0===n?void 0:n.map((function(e){var n,t=e.block_uuid,r=e.completed_at,i=e.created_at,u=e.id,s=e.pipeline_schedule_id,h=e.pipeline_schedule_name,w=e.status;return[(0,y.jsx)(v.ZP,{monospace:!0,default:!0,children:i}),(0,y.jsx)(v.ZP,{danger:l.V.FAILED===w,default:l.V.CANCELLED===w,info:l.V.INITIAL===w,monospace:!0,success:l.V.COMPLETED===w,warning:l.V.RUNNING===w,children:w}),(0,y.jsx)(o(),{as:"/pipelines/".concat(_,"/triggers/").concat(s),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,y.jsx)(f.Z,{bold:!0,sameColorAsText:!0,children:h})}),(0,y.jsx)(o(),{as:"/pipelines/".concat(_,"/edit?block_uuid=").concat(t),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,y.jsxs)(f.Z,{bold:!0,sameColorAsText:!0,verticalAlignContent:!0,children:[(0,y.jsx)(d.Z,{color:(0,b.qn)(null===(n=O[t])||void 0===n?void 0:n.type,{theme:x}).accent,size:1.5*m.iI,square:!0}),(0,y.jsx)(p.Z,{mr:1}),(0,y.jsx)(v.ZP,{monospace:!0,children:t})]})}),(0,y.jsx)(v.ZP,{monospace:!0,default:!0,children:r||"-"}),(0,y.jsx)(a.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return c().push("/pipelines/".concat(_,"/logs?block_run_id[]=").concat(u))},children:(0,y.jsx)(g.B4,{default:!0,size:2*m.iI})})]})),uuid:"block-runs"})}},21135:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return V}});var r=t(77837),i=t(82394),o=t(38860),u=t.n(o),c=t(46313),s=t(82684),l=t(28598);var a=function(e){var n=e.size;return(0,l.jsxs)("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.5 8.5H15.5V3.5H20.5V8.5ZM14 9V3C14 2.44772 14.4477 2 15 2H21C21.5523 2 22 2.44772 22 3V9C22 9.55229 21.5523 10 21 10H15C14.4477 10 14 9.55229 14 9ZM2 5V12.5V14V21.5C2 22.0523 2.44772 22.5 3 22.5H10.5H12H19.5C20.0523 22.5 20.5 22.0523 20.5 21.5V13.5C20.5 12.9477 20.0523 12.5 19.5 12.5H12V5C12 4.44772 11.5523 4 11 4H3C2.44772 4 2 4.44772 2 5ZM10.5 14V21H3.5V14H10.5ZM19 14V21H12V14H19ZM10.5 5.5V12.5H3.5V5.5H10.5Z",fill:"url(#paint0_linear_2842_55048)"}),(0,l.jsx)("defs",{children:(0,l.jsxs)("linearGradient",{id:"paint0_linear_2842_55048",x1:"2",y1:"12.25",x2:"22",y2:"12.25",gradientUnits:"userSpaceOnUse",children:[(0,l.jsx)("stop",{offset:"0.28125",stopColor:"#7D55EC"}),(0,l.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]})})]})},d=t(27125),f=t(1583),p=t(23831),h=c.default.div.withConfig({displayName:"PageSectionHeader",componentId:"sc-1wznrcv-0"})(["left:0;position:sticky;top:0;width:100%;z-index:2;",""],(function(e){return"\n    background-color: ".concat(e.backgroundColor||(e.theme.background||p.Z.background).page,";\n    border-bottom: 1px solid ").concat((e.theme.borders||p.Z.borders).medium,";\n  ")})),v=t(38965);var g=function(e){var n=e.size;return(0,l.jsxs)("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("g",{"clip-path":"url(#clip0_3007_70027)",children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.75 6.6859C1.75 3.95988 3.95988 1.75 6.6859 1.75h.98788c-.23022.41608-.36128.89466-.36128 1.40385s.13106.98777.36128 1.40384h-.71224c-1.32761 0-2.40385 1.07624-2.40385 2.40385 0 1.32761 1.07624 2.40385 2.40385 2.40385H15.609c3.3916 0 6.141 2.74941 6.141 6.14101 0 3.3916-2.7494 6.141-6.141 6.141H9.55584c.23019-.416.36123-.8946.36123-1.4037 0-.5092-.13108-.9879-.36134-1.404H15.609c1.8409 0 3.3333-1.4923 3.3333-3.3333 0-1.8409-1.4924-3.3333-3.3333-3.3333H6.96154C4.08329 12.1731 1.75 9.83979 1.75 6.96154V6.6859zM10.2163.25H6.6859C3.13145.25.25 3.13145.25 6.6859v.27564c0 3.70666 3.00486 6.71156 6.71154 6.71156H15.609c1.0125 0 1.8333.8208 1.8333 1.8333s-.8208 1.8333-1.8333 1.8333H7.01282c-1.60375 0-2.90385 1.3001-2.90385 2.9039 0 1.3248.88713 2.4423 2.09974 2.7911.06039.0173.12158.0328.18352.0463.20007.0436.40785.0665.62099.0665l.02449-.0001H15.609c4.22 0 7.641-3.421 7.641-7.641 0-4.22-3.421-7.64101-7.641-7.64101H6.96154c-.49918 0-.90385-.40467-.90385-.90385 0-.49918.40467-.90385.90385-.90385h3.25636c1.6038 0 2.9039-1.30009 2.9039-2.90384 0-1.60375-1.3001-2.903849-2.9039-2.90385h-.0016zm0 4.30769c-.77528 0-1.4038-.62852-1.4038-1.40384 0-.77505.62808-1.4034 1.403-1.40385h.0017c.7749.00045 1.403.6288 1.403 1.40385 0 .77532-.6285 1.40384-1.4039 1.40384zM7.01282 21.6474c-.10108 0-.19967-.0106-.29469-.0309-.03025-.0065-.06014-.0139-.08963-.0223-.58829-.1673-1.01912-.7086-1.01912-1.3505 0-.7753.62852-1.4039 1.40384-1.4039s1.40385.6286 1.40385 1.4039c0 .7696-.61935 1.3946-1.38683 1.4037h-.01742z",fill:"url(#paint0_linear_3007_70027)"})}),(0,l.jsxs)("defs",{children:[(0,l.jsxs)("linearGradient",{id:"paint0_linear_3007_70027",x1:"11.75",y1:".250001",x2:"11.75",y2:"23.1475",gradientUnits:"userSpaceOnUse",children:[(0,l.jsx)("stop",{offset:".28125",stopColor:"#7D55EC"}),(0,l.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]}),(0,l.jsx)("clipPath",{id:"clip0_3007_70027",children:(0,l.jsx)("path",{fill:"#fff",transform:"matrix(0 1 1 0 0 0)",d:"M0 0h24v24H0z"})})]})]})},m=t(62694),b=t(86673),w=t(41374),y=t(56681),x=t(10503),_=t(66166),j=t(59920),O=t(33766),k=t(7715),C=t(24224),P=t(59e3);function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var S={Icon:x.mR,IconSelected:g,label:function(){return"Pipeline runs"},uuid:"pipeline_runs"},M={Icon:x.Re,IconSelected:a,label:function(){return"Block runs"},uuid:"block_runs"},E=[S,M];function R(e){var n=e.pipeline,t=((0,s.useContext)(c.ThemeContext),(0,s.useState)(S)),r=t[0],i=t[1],o=(0,s.useState)(y.G[0]),u=o[0],a=o[1],p=(0,s.useState)(null),g=p[0],x=p[1],H=n.uuid,R=w.ZP.pipelines.detail(H).data,V=(0,s.useMemo)((function(){return Z(Z({},null===R||void 0===R?void 0:R.pipeline),{},{uuid:H})}),[R,H]),T=(0,s.useMemo)((function(){return V.blocks||[]}),[V]),D=((0,s.useMemo)((function(){return(0,C.HK)(T,(function(e){return e.uuid}))}),[T]),w.ZP.pipeline_runs.list({pipeline_uuid:H})),I=D.data,N=D.mutate,z=(0,s.useMemo)((function(){return(null===I||void 0===I?void 0:I.pipeline_runs)||[]}),[I]),Y=w.ZP.block_runs.list((0,k.gR)(g,["tab"]),{},{pauseFetch:!g}).data,L=(0,s.useMemo)((function(){return(null===Y||void 0===Y?void 0:Y.block_runs)||[]}),[Y]),A=(0,s.useState)(),U=A[0],B=A[1],q=(0,s.useState)(),F=(q[0],q[1],(0,P.iV)()),X=(0,_.Z)(F);(0,s.useEffect)((function(){var e=F.pipeline_run_id;if(!(0,k.Xy)(F,X)){var n=Z({},F);e?n.pipeline_run_id=e:n.pipeline_uuid=H,x(n)}}),[H,F,X]);var G=(0,_.Z)(r);(0,s.useEffect)((function(){var e=F.tab;e&&i(E.find((function(n){return n.uuid===e})))}),[F,r,G]);var J=(0,s.useMemo)((function(){return(0,l.jsx)(m.Z,{fetchPipelineRuns:N,onClickRow:function(e){return B((function(n){var t=z[e];return(null===n||void 0===n?void 0:n.id)!==t.id?t:null}))},pipelineRuns:z,selectedRun:U})}),[N,V,z,U]),W=(0,s.useMemo)((function(){return(0,l.jsx)(d.Z,{blockRuns:L,pipeline:V})}),[L,V]);return(0,l.jsxs)(v.Z,{afterHidden:S.uuid===(null===r||void 0===r?void 0:r.uuid)&&!U,buildSidekick:S.uuid===(null===r||void 0===r?void 0:r.uuid)?function(e){return(0,y.Z)(Z(Z({},e),{},{selectedRun:U,selectedTab:u,setSelectedTab:a}))}:function(e){return(0,y.Z)(e)},breadcrumbs:[{label:function(){return"Runs"}}],pageName:j.M.RUNS,pipeline:V,title:function(e){var n=e.name;return"".concat(n," runs")},uuid:"".concat(j.M.RUNS,"_").concat(H),children:[(0,l.jsx)(h,{children:(0,l.jsx)(b.Z,{py:1,children:(0,l.jsx)(f.Z,{onClickTab:function(e){var n=e.uuid;return(0,O.u)({tab:n})},selectedTabUUID:null===r||void 0===r?void 0:r.uuid,tabs:E})})}),S.uuid===(null===r||void 0===r?void 0:r.uuid)&&J,M.uuid===(null===r||void 0===r?void 0:r.uuid)&&W]})}R.getInitialProps=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var V=R},33766:function(e,n,t){"use strict";t.d(n,{u:function(){return a}});var r=t(12757),i=t(82394),o=t(34376),u=t.n(o),c=t(59e3);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.replaceParams,o=t.pushHistory,s=i?{}:(0,c.iV)();n=window.location.pathname;var a=o?u().push:u().replace,d=l(l({},s),e);Object.entries(e).forEach((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1];"undefined"!==typeof i&&null!==i||delete d[t]}));var f=(0,c.uM)(d);f.length>=1&&(f="?".concat(f));var p="".concat(n.split("?")[0]).concat(f);return a(u().router.pathname,p,{shallow:!0})}},5679:function(e,n,t){"use strict";t.d(n,{OC:function(){return d},n1:function(){return f},RA:function(){return v},kC:function(){return g},vg:function(){return O},JX:function(){return m},T3:function(){return P},Mp:function(){return b},Pb:function(){return p},kE:function(){return k},HD:function(){return h},wX:function(){return w},x6:function(){return y},_6:function(){return x},Y6:function(){return Z},Lo:function(){return S},Tz:function(){return C},QV:function(){return H},C5:function(){return j}});var r=t(12757),i=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],o=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],u=t(92083),c=t.n(u),s=["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"],l=["0","1","2","3","4","5","6","7","8","9"],a=t(24224),d="YYYY-MM-DD HH:mm:SS",f="YYYY-MM-DD";function p(e){try{JSON.parse(e)}catch(n){return!1}return!0}function h(e){return"string"===typeof e}function v(e){return e.split(" ").join("_")}function g(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function m(e){return c().unix(e).format("YYYY-MM-DD HH:mm")}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*e)}function w(e){return e.charAt(0).toLowerCase()+e.slice(1)}function y(e){if(null===e||"undefined"===typeof e)return"";var n=e.toString().split("."),t=(0,r.Z)(n,2),i=t[0],o=t[1],u=i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return o?"".concat(u,".").concat(o):u}function x(e,n){var t,r=n,i=void 0!==r&&null!==r;if(i||(r=2),1===r)t=e;else{var o=e.length,u=e[o-1];t="y"===u&&"day"!==e?"".concat(e.slice(0,o-1),"ies"):"".concat(e,"s"===u?"es":"s")}return i?"".concat(r," ").concat(t):t}function _(e){return null===e||void 0===e?void 0:e.replace(/_/g," ")}function j(e){var n=e.length;return"ies"===e.slice(n-3,n)?"".concat(e.slice(0,n-3),"y"):"es"===e.slice(n-2,n)?e.slice(0,n-2):e.slice(0,n-1)}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return g(_(e.toLowerCase()))}function k(e){return!isNaN(e)}function C(e){var n,t=e.match(/\d+(\.?\d*)%/)||[];return Number(null===(n=t[0])||void 0===n?void 0:n.slice(0,-1))}function P(e){return"".concat(y(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round((e||0)*Math.pow(100,n))/100}(e)),"%")}function H(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=Math.pow(10,n);return Math.round((e||0)*t)/t}function Z(){return"".concat((0,a.mp)(i)," ").concat((0,a.mp)(s))}function S(){return"".concat((0,a.mp)(o)).concat((0,a.mp)(l))}},66166:function(e,n,t){"use strict";var r=t(82684);n.Z=function(e){var n=(0,r.useRef)();return(0,r.useEffect)((function(){n.current=e}),[e]),n.current}},79897:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/runs",function(){return t(21135)}])}},function(e){e.O(0,[5339,2083,1774,7619,2874,3903,8933,8965,6532,7414,9774,2888,179],(function(){return n=79897,e(e.s=n);var n}));var n=e.O();_N_E=n}]);