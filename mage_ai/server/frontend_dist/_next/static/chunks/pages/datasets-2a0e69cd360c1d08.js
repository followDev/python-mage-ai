(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9671],{59739:function(n,e,t){"use strict";var r=t(56669);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,c){if(c!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},47329:function(n,e,t){n.exports=t(59739)()},56669:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},36770:function(n,e,t){"use strict";t.d(e,{d:function(){return Z},Z:function(){return E}});var r=t(12757),o=t(82684),i=t(34376),c=t(82394),a=t(12691),l=t.n(a),u=t(60328),d=t(57639),s=t(93461),f=t(67971),h=t(10919),p=t(86673),b=t(19711),g=t(10503),m=t(28598);function y(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function v(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?y(Object(t),!0).forEach((function(e){(0,c.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function x(n,e){var t=n.as,r=n.bold,o=n.button,i=n.hideIcon,c=n.href,a=n.label,y=n.large,x=n.linkProps,j=n.onClick,w=n.selected,_=n.title,k=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,m.jsxs)(f.Z,{alignItems:"center",children:[(0,m.jsx)(s.Z,{children:(0,m.jsxs)(p.Z,{mr:e?0:{xs:1},children:[!n&&a,n&&(0,m.jsx)(b.ZP,{bold:!0,headline:y,primary:!w,title:_,children:a})]})}),!i&&(0,m.jsx)(s.Z,{children:(0,m.jsx)(b.ZP,{large:y,muted:!0,children:" / "})})]})},Z=v(v({},x),{},{block:!0,bold:r||w,headline:y,title:_}),O=o?(0,m.jsx)(u.Z,{afterIcon:(0,m.jsx)(g.K5,{size:12}),basic:!0,noPadding:!0,onClick:j,ref:e,transparent:!0,children:k(!0,!0)}):(0,m.jsx)(h.Z,v(v({},Z),{},{onClick:j,children:k()}));return(0,m.jsx)(d.Z,{children:(0,m.jsxs)(p.Z,{mr:{xs:1},children:[!c&&!j&&k(!0),c&&!j&&(0,m.jsx)(l(),{as:t,href:c,passHref:!0,children:(0,m.jsx)(h.Z,v(v({},Z),{},{children:k()}))}),!c&&j&&O]})})}var j=o.forwardRef(x);function w(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function _(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?w(Object(t),!0).forEach((function(e){(0,c.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function k(n,e){var t=n.bold,r=n.breadcrumbs,o=n.large,i=n.linkProps;return(0,m.jsx)(f.Z,{children:r.map((function(n,c){return(0,m.jsx)(s.Z,{children:(0,m.jsx)(j,_(_({bold:t,hideIcon:c===r.length-1},n),{},{large:o,linkProps:i,ref:e}))},"".concat(n.label,"_").concat(c)||c)}))})}var Z,O=o.forwardRef(k),P=t(6753),T=t(59e3);!function(n){n.DATASETS="datasets",n.DATASET_DETAIL="dataset_detail",n.COLUMNS="features",n.COLUMN_DETAIL="feature_detail",n.EXPORT="export"}(Z||(Z={}));function C(n,e){var t,o,c=n.featureSet,a=n.setColumnListMenuVisible,l=(0,i.useRouter)().query.slug,u=void 0===l?[]:l,d=(0,T.iV)(),s=d[P.yg],f=d.show_columns,h=d.column,p=(0,r.Z)(u,1)[0],b=["datasets"].concat(u),g=((null===c||void 0===c||null===(t=c.sample_data)||void 0===t?void 0:t.columns)||[])[h],y=(null===c||void 0===c||null===(o=c.metadata)||void 0===o?void 0:o.name)||"dataset",v=[],x="".concat(P.yg,"=").concat(s||P.mW),j="".concat(P.AE,"=").concat(f||0);b.length>0&&b.forEach((function(n,e){var t=Z.DATASETS,r="/".concat(Z.DATASETS);1===e?(t=y.length>35?"".concat(y.slice(0,35),"..."):y,r="/".concat(Z.DATASETS,"/").concat(p,"?").concat(x,"&").concat(j)):n===Z.EXPORT&&(t=Z.EXPORT,r="/".concat(Z.DATASETS,"/").concat(p,"/").concat(Z.EXPORT));var o={bold:!0,href:r,label:t,title:1===e?y:null};v.push(o)})),"undefined"!==typeof h&&g&&v.push({bold:!0,label:g.length>35?"".concat(g.slice(0,35),"..."):g,title:g});var w=v[v.length-1];return w.selected=!0,w.href=null,w.label!==Z.EXPORT&&(w.button=!0,w.onClick=function(){return a(!0)}),(0,m.jsx)(O,{breadcrumbs:v,large:!0,linkProps:{noHoverUnderline:!0},ref:e})}var E=o.forwardRef(C)},6753:function(n,e,t){"use strict";t.d(e,{AE:function(){return o},Ek:function(){return u},H3:function(){return i},jh:function(){return l},mW:function(){return c},oE:function(){return a},yg:function(){return r}});var r="tabs[]",o="show_columns",i="column",c="Reports",a="Visualizations",l="Data",u=[c,a,l]},69345:function(n,e,t){"use strict";t.d(e,{FH:function(){return u},o_:function(){return d}});var r=t(12757),o=t(34376),i=t(6753),c=t(36770),a=t(59e3),l=["Bad","Worse","Worst"],u=function(n){return l.includes(n)},d=function(n,e){var t=(0,o.useRouter)().query.slug,l=void 0===t?[]:t,u=(0,r.Z)(l,1)[0],d=(0,a.iV)(),s=d.show_columns,f=d.column,h="/".concat(c.d.DATASETS,"/").concat(u),p="".concat(i.H3,"=").concat(f||e),b="".concat(i.yg,"=").concat(n,"&").concat(p,"&").concat(i.AE,"=").concat(s||0);return"".concat(h,"?").concat(b)}},84201:function(n,e,t){"use strict";var r=t(82684),o=t(93461),i=t(67971),c=t(70759),a=t(28598);e.Z=function(n){var e=n.border,t=n.children,l=n.columnFlexNumbers,u=n.condensed,d=n.flexStart,s=n.last,f=n.noHorizontalPadding,h=n.secondary;return(0,a.jsx)(c.gI,{border:e,condensed:u,last:s,noHorizontalPadding:f,secondary:h,children:(0,a.jsx)(i.Z,{alignItems:d?"flex-start":"center",children:r.Children.map(t,(function(n,e){return n&&l?(0,a.jsx)(o.Z,{alignItems:"center",flex:l[e],children:n},"row-card-item-".concat(e)):n}))})})}},70759:function(n,e,t){"use strict";t.d(e,{$B:function(){return d},VH:function(){return s},gI:function(){return f},kA:function(){return u}});var r=t(46313),o=t(31969),i=t(73942),c=t(49125),a=1.5*c.iI,l=1.5*c.iI,u=r.default.div.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-13p7y8j-0"})(["",""],(function(n){return n.width&&"\n    width: ".concat(n.width,"px;\n  ")})),d=r.default.div.withConfig({displayName:"indexstyle__RowContainerStyle",componentId:"sc-13p7y8j-1"})(["border-bottom-left-radius:","px;border-bottom-right-radius:","px;margin-bottom:","px;"," "," ",""],i.n_,i.n_,a,(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).page,";\n    border: ").concat(i.YF,"px ").concat(i.M8," ").concat((n.theme.interactive||o.Z.interactive).defaultBorder,";\n    border-top: none;\n  ")}),(function(n){return n.minHeight>0&&"\n    min-height: ".concat(n.minHeight,"px;\n  ")}),(function(n){return n.scrollable&&"\n    margin-bottom: ".concat(c.iI,"px;\n    overflow-y: auto;\n    padding-top: ").concat(3,"px;\n    padding-left: ").concat(3,"px;\n    padding-right: ").concat(3,"px;\n  ")})),s=r.default.div.withConfig({displayName:"indexstyle__TitleStyle",componentId:"sc-13p7y8j-2"})(["border-top-left-radius:","px;border-top-right-radius:","px;padding:","px ","px;",""],i.n_,i.n_,a,2*c.iI,(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).header,";\n    border: ").concat(i.YF,"px ").concat(i.M8," ").concat((n.theme.interactive||o.Z.interactive).defaultBorder,";\n  ")})),f=r.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-13p7y8j-3"})(["padding:","px ","px;"," "," "," "," "," ",""],l,2*c.iI,(function(n){return n.noHorizontalPadding&&"\n    padding-left: 0;\n    padding-right: 0;\n  "}),(function(n){return n.condensed&&"\n    padding-top: ".concat(9,"px;\n    padding-bottom: ").concat(9,"px;\n  ")}),(function(n){return!n.secondary&&"\n    background-color: ".concat((n.theme.background||o.Z.background).row,";\n  ")}),(function(n){return n.secondary&&"\n    background-color: ".concat((n.theme.background||o.Z.background).row2,";\n  ")}),(function(n){return n.last&&"\n    border-bottom-left-radius: ".concat(i.n_,"px;\n    border-bottom-right-radius: ").concat(i.n_,"px;\n  ")}),(function(n){return n.border&&"\n    border: 1px solid ".concat((n.theme.monotone||o.Z.monotone).grey200,";\n    border-radius: ").concat(i.n_,"px;\n  ")}))},11754:function(n,e,t){"use strict";var r=t(82684),o=t(67971),i=t(19711),c=t(70759),a=t(28598);e.Z=function(n){var e=n.alternating,t=n.children,l=n.headerDetails,u=n.headerTitle,d=n.minHeight,s=n.scrollable,f=n.width;return(0,a.jsxs)(c.kA,{width:f,children:[(0,a.jsx)(c.VH,{children:(0,a.jsxs)(o.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,a.jsx)(i.ZP,{bold:!0,default:!0,children:u}),l&&(0,a.jsx)(i.ZP,{children:l})]})}),(0,a.jsx)(c.$B,{minHeight:d,scrollable:s,children:r.Children.map(t,(function(n,o){return n&&r.cloneElement(n,{last:o===t.length-1,secondary:e&&o%2===1})}))})]})}},105:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return N}});var r=t(77837),o=t(38860),i=t.n(o),c=t(34376),a=t.n(c),l=t(67971),u=t(28857),d=t(31969),s=t(10919),f=t(84201),h=t(11754),p=t(86673),b=t(47329),g=t.n(b);function m(n){return n.children}m.propTypes={afterChildren:g().node,beforeChildren:g().node,children:g().node.isRequired,disabled:g().bool,label:g().string.isRequired};var y=t(82684),v=t(46313),x=t(93461),j=t(19711),w=t(2005),_=t(49125),k=t(73942),Z=t(28598),O=v.default.div.withConfig({displayName:"Tabs__TabHeaderContainerStyle",componentId:"sc-rojme5-0"})(["",""],(function(n){return n.containerWidthPercentage&&"\n    width: ".concat(n.containerWidthPercentage,"%;\n  ")})),P=v.default.div.withConfig({displayName:"Tabs__TabHeader",componentId:"sc-rojme5-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;margin-right:","px;position:relative;z-index:2;"," "," ",""],k.BG,k.BG,6*_.iI,(function(n){return n.noBottomBorder&&"\n    border-bottom: none;\n  "}),(function(n){return n.active&&"\n    border-bottom: ".concat(_.cd,"px solid;\n    border-color: ").concat((n.theme.interactive||d.Z.interactive).linkPrimary,";\n  ")}),(function(n){return n.fullWidth&&"\n    width: 100%;\n  "})),T=v.default.div.withConfig({displayName:"Tabs__LinkStyle",componentId:"sc-rojme5-2"})(["align-items:center;display:flex;"," "," ",""],(function(n){return n.bold&&"\n    font-family: ".concat(w.nF,";\n  ")}),(function(n){return n.fullWidth&&"\n    justify-content: center;\n  "}),(function(n){return!n.disabled&&"\n    &:hover {\n      path {\n        fill: ".concat((n.theme.content||d.Z.interactive).linkPrimary," !important;\n      }\n    }\n  ")}));var C=function(n){var e=n.actionEl,t=n.bold,r=n.children,o=n.containerWidthPercentage,i=n.currentTab,c=n.defaultKey,a=n.fullWidth,u=n.large,d=n.noBottomBorder,f=n.onChange,h=Array.isArray(r)?r.filter((function(n){return!!n})):[r],b=y.Children.map(h,(function(n){return n.key})),g=(0,y.useState)(c||b[0]),m=g[0],v=g[1],w=i||m;return(0,y.useEffect)((function(){v(c)}),[c]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(O,{containerWidthPercentage:o,children:(0,Z.jsxs)(l.Z,{justifyContent:a?"center":null,children:[e&&(0,Z.jsx)(x.Z,{flex:"1",children:e}),y.Children.map(h,(function(n){var e=n.key,r=n.props,o=w===e,i={default:!o,disabled:r.disabled,size:2*_.iI};return(0,Z.jsx)(x.Z,{flex:a?"1":null,children:(0,Z.jsx)(s.Z,{block:!0,default:!o,disabled:r.disabled,flex:1,large:u,noHoverUnderline:!0,noOutline:!0,onClick:function(){f&&f(e),v(e)},preventDefault:!0,sameColorAsText:o,children:(0,Z.jsx)(P,{active:o,fullWidth:a,noBottomBorder:d,children:(0,Z.jsxs)(T,{bold:t&&o,disabled:r.disabled,fullWidth:a,large:u,children:[r.beforeChildren&&y.cloneElement(r.beforeChildren,i),(0,Z.jsx)(p.Z,{ml:r.beforeChildren?1:0,mr:r.afterChildren?1:0,children:(0,Z.jsx)(j.ZP,{bold:t,large:u,children:r.label})}),r.afterChildren&&y.cloneElement(r.afterChildren,i)]})})})},e)}))]})}),h.filter((function(n){return n.key===w}))]})},E=t(54626),S=t(10503),D=t(69345),I=t(5679),A=t(24224),H=function(){var n=E.ZP.feature_sets.list().data,e=n?(0,A.YC)(n,(function(n){return n.id}),{ascending:!1}):[];return(0,Z.jsx)(u.Z,{centerAlign:!0,header:(0,Z.jsx)(p.Z,{mt:_.iI}),pageTitle:"Dataset Dashboard",children:(0,Z.jsx)(p.Z,{px:1,children:(0,Z.jsx)(C,{bold:!0,defaultKey:"datasets",large:!0,children:(0,Z.jsx)(m,{label:"Datasets",children:(0,Z.jsx)(p.Z,{pb:3,pt:3,children:(0,Z.jsx)(h.Z,{headerDetails:(0,I._6)("dataset",null===e||void 0===e?void 0:e.length),headerTitle:"datasets",children:(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.map((function(n,t){var r=n||{},o=r.id,i=r.metadata||{},c=i.column_types,u=void 0===c?{}:c,d=i.name,h=void 0===d?"dataset_".concat(o):d,b=i.statistics||{},g=b.count,m=b.quality,y=u?Object.keys(u).length:0;return(0,Z.jsxs)(f.Z,{columnFlexNumbers:[4,1,1,1],last:t===e.length-1,children:[(0,Z.jsxs)(l.Z,{alignItems:"center",children:[(0,Z.jsx)(S.$B,{secondary:!0}),(0,Z.jsx)(p.Z,{mr:1}),(0,Z.jsx)(s.Z,{noHoverUnderline:!0,onClick:function(){return a().push("datasets/".concat(o))},preventDefault:!0,sameColorAsText:!0,children:h})]}),(0,Z.jsxs)(j.ZP,{children:[(0,I.x6)(y)," features"]}),(0,Z.jsxs)(j.ZP,{children:[(0,I.x6)(g)," rows"]}),(0,Z.jsx)(j.ZP,{bold:(0,D.FH)(m),danger:(0,D.FH)(m),children:m})]},o)})):(0,Z.jsx)(p.Z,{p:2,children:(0,Z.jsx)(j.ZP,{children:"No datasets available. Add one to get started."})})})})},"datasets")})})})};H.getInitialProps=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",{themeProps:{currentTheme:d.Z}});case 1:case"end":return n.stop()}}),n)})));var N=H},5679:function(n,e,t){"use strict";t.d(e,{OC:function(){return s},n1:function(){return f},RA:function(){return b},kC:function(){return g},vg:function(){return k},JX:function(){return m},T3:function(){return P},Mp:function(){return y},Pb:function(){return h},kE:function(){return Z},HD:function(){return p},wX:function(){return v},x6:function(){return x},_6:function(){return j},Y6:function(){return C},Lo:function(){return E},Tz:function(){return O},QV:function(){return T},C5:function(){return _}});var r=t(12757),o=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],i=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],c=t(92083),a=t.n(c),l=["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"],u=["0","1","2","3","4","5","6","7","8","9"],d=t(24224),s="YYYY-MM-DD HH:mm:SS",f="YYYY-MM-DD";function h(n){try{JSON.parse(n)}catch(e){return!1}return!0}function p(n){return"string"===typeof n}function b(n){return n.split(" ").join("_")}function g(n){return n?n.charAt(0).toUpperCase()+n.slice(1):""}function m(n){return a().unix(n).format("YYYY-MM-DD HH:mm")}function y(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*n)}function v(n){return n.charAt(0).toLowerCase()+n.slice(1)}function x(n){if(null===n||"undefined"===typeof n)return"";var e=n.toString().split("."),t=(0,r.Z)(e,2),o=t[0],i=t[1],c=o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return i?"".concat(c,".").concat(i):c}function j(n,e){var t,r=e,o=void 0!==r&&null!==r;if(o||(r=2),1===r)t=n;else{var i=n.length,c=n[i-1];t="y"===c&&"day"!==n?"".concat(n.slice(0,i-1),"ies"):"".concat(n,"s"===c?"es":"s")}return o?"".concat(r," ").concat(t):t}function w(n){return null===n||void 0===n?void 0:n.replace(/_/g," ")}function _(n){var e=n.length;return"ies"===n.slice(e-3,e)?"".concat(n.slice(0,e-3),"y"):"es"===n.slice(e-2,e)?n.slice(0,e-2):n.slice(0,e-1)}function k(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return g(w(n.toLowerCase()))}function Z(n){return!isNaN(n)}function O(n){var e,t=n.match(/\d+(\.?\d*)%/)||[];return Number(null===(e=t[0])||void 0===e?void 0:e.slice(0,-1))}function P(n){return"".concat(x(function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round((n||0)*Math.pow(100,e))/100}(n)),"%")}function T(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=Math.pow(10,e);return Math.round((n||0)*t)/t}function C(){return"".concat((0,d.mp)(o)," ").concat((0,d.mp)(l))}function E(){return"".concat((0,d.mp)(i)).concat((0,d.mp)(u))}},11246:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets",function(){return t(105)}])}},function(n){n.O(0,[5339,2083,2874,3887,9774,2888,179],(function(){return e=11246,n(n.s=e);var e}));var e=n.O();_N_E=e}]);