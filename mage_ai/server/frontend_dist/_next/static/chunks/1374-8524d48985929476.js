"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1374],{41374:function(t,n,e){e.d(n,{ZP:function(){return F}});var r=e(82394),o=e(77837),u=e(12757),c=e(38860),a=e.n(c),i=(e(83455),e(96040)),s=e(55056),f=e.n(s),p=e(59e3),l=e(554);function d(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?d(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var h="DELETE",y="GET",b="POST",g="PUT";function O(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.body,o=(n.ctx,n.method),c=void 0===o?y:o,a=n.query,i=void 0===a?{}:a,s=(n.token,{"Content-Type":"application/json"}),f={method:c};if(e){var d=e.file;if(d){d.name,d.size,d.type;var h=new FormData,b=Object.keys(e).filter((function(t){return"file"!==t}))[0];h.set("json_root_body",JSON.stringify((0,r.Z)({api_key:l.env.NEXT_PUBLIC_API_KEY},b,e[b]))),h.append("file",d),f.body=h,delete s["Content-Type"]}else f.body=JSON.stringify(v(v({},e),{},{api_key:l.env.NEXT_PUBLIC_API_KEY}))}f.headers=new Headers(s);var g=v(v({},(0,p.iV)(t)),i);l.env.NEXT_PUBLIC_API_KEY&&(g.api_key=l.env.NEXT_PUBLIC_API_KEY);var O=Object.entries(g).reduce((function(t,n){var e=(0,u.Z)(n,2),r=e[0],o=e[1];return t.concat("".concat(r,"=").concat(o))}),[]).join("&");return{data:f,headers:s,method:c,queryString:O,url:t.split("?")[0]}}function w(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=O(t,n),r=e.data,o=e.queryString,u=e.url,c=o?"".concat(u,"?").concat(o):u;return fetch(c,r)}function m(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=O(t,n),r=e.data,o=e.headers,u=e.method,c=e.queryString,a=e.url,i=c?"".concat(a,"?").concat(c):a;return f().request({data:r.body,headers:o,method:u,onUploadProgress:null===n||void 0===n?void 0:n.onUploadProgress,url:i})}function P(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return w(t,n).then((function(t){return t.clone().json()}))}var j=e(28799);function x(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?x(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):x(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function E(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return m((0,j.Q2)(t),_(_({},e),{},{body:n,method:b}))}function k(t,n,e,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=(0,j.Q2)(n,e,t);return m(u,_(_({},o),{},{body:r,method:b}))}function Z(t,n,e,r,o){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},c=(0,j.Q2)(n,e,t,r);return m(c,_(_({},u),{},{body:o,method:g}))}function D(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return w((0,j.Q2)(n,e),{ctx:t,query:r,method:y})}function A(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return w((0,j.Q2)(n),{ctx:t,query:e,method:y})}function C(t,n,e,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return w((0,j.Q2)(e,r,n),{ctx:t,query:o,method:y})}function Q(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=(0,j.Q2)(t,n,null,null,r);return m(o,{body:e,method:g})}function S(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=(0,i.ZP)(n?(0,j.Q2)(t,n):null,(function(t){return P(t,{method:y,query:e})}),r),u=o.data,c=o.error,a=o.mutate;return{data:u,error:c,mutate:a}}function T(t,n,e,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},c=arguments.length>6?arguments[6]:void 0,a=(0,i.ZP)(n&&(r?(0,j.Q2)(e,r,t,n,o,c):null),(function(t){return P(t,{method:y,query:o})}),u),s=a.data,f=a.error,p=a.mutate;return{data:s,error:f,mutate:p}}function L(t,n){return w((0,j.Q2)(t,n),{method:h})}function I(t,n,e,r){return w((0,j.Q2)(n,e,t,r),{method:h})}function U(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=(0,i.ZP)((0,j.Q2)(t,null,null,null,n),(function(t){return P(t)}),e),o=r.data,u=r.error,c=r.mutate;return{data:o,error:u,loading:!o&&!u,mutate:c}}function q(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=(0,i.ZP)(e?(0,j.Q2)(n,e,t,null,r):null,(function(t){return P(t)}),o),c=u.data,a=u.error,s=u.mutate;return{data:c,error:a,loading:!c&&!a,mutate:s}}function N(t,n,e,r){return w((0,j.Q2)(n,e),{ctx:t,body:r,method:g})}var B=e(96510);function K(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function H(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?K(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):K(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var X="blocks",Y="feature_sets",J="kernels",R="pipelines",z={};[["execute",R],["autocomplete_items"],[X],[X,R],[X,R,"analyses"],[X,R,"outputs"],["columns",Y],["downloads",Y],[Y],["files"],["file_contents"],[J],["interrupt",J],["restart",J],[R],["status"],["variables",R],["versions",Y],["widgets",R]].forEach((function(t){var n=(0,u.Z)(t,4),e=n[0],r=n[1],c=n[2],i=n[3];z[e]||(z[e]={deleteAsync:function(){var t=(0,o.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(e,n);case 2:return r=t.sent,t.next=5,(0,B.pr)(r);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),detail:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;return S(e,t,n,H(H({},i),r))},detailAsync:function(){var t=(0,o.Z)(a().mark((function t(n,r){var o,u,c=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=c.length>2&&void 0!==c[2]?c[2]:{},t.next=3,D(n,e,r,o);case 3:return u=t.sent,t.next=6,(0,B.pr)(u);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),updateAsync:function(){var t=(0,o.Z)(a().mark((function t(n,r,o){var u;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(n,e,r,o);case 2:return u=t.sent,t.next=5,(0,B.pr)(u);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),useUpdate:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var r=(0,o.Z)(a().mark((function r(o){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Q(e,t,o,n));case 1:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}),c?(z[e][r][c]={},z[e][r][c].detail=function(t,n,o,u){return T(e,n,r,t,o,H(H({},i),u),c)}):r?(z[e][r]={},z[e][r].useCreate=function(t,n){return function(){var u=(0,o.Z)(a().mark((function o(u){return a().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",k(e,r,t,u,n));case 1:case"end":return o.stop()}}),o)})));return function(t){return u.apply(this,arguments)}}()},z[e][r].useCreateWithParentIdLater=function(t){return function(){var n=(0,o.Z)(a().mark((function n(o){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",k(e,r,o.parentId,o.body,t));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},z[e][r].useUpdate=function(t,n,u){return function(){var c=(0,o.Z)(a().mark((function o(c){return a().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Z(e,r,t,n,c,u));case 1:case"end":return o.stop()}}),o)})));return function(t){return c.apply(this,arguments)}}()},z[e][r].useDelete=function(t,n){return(0,o.Z)(a().mark((function o(){var u;return a().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,I(e,r,t,n);case 2:return u=o.sent,o.next=5,(0,B.pr)(u);case 5:return o.abrupt("return",o.sent);case 6:case"end":return o.stop()}}),o)})))},z[e][r].listAsync=function(){var t=(0,o.Z)(a().mark((function t(n,o){var u,c,i=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=i.length>2&&void 0!==i[2]?i[2]:{},t.next=3,C(n,e,r,o,u);case 3:return c=t.sent,t.next=6,(0,B.pr)(c);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),z[e][r].list=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;return q(e,r,t,n,H(H({},i),o))},z[e][r].detail=function(t,n,o,u){return T(e,n,r,t,o,H(H({},i),u))}):(z[e].create=function(){var t=(0,o.Z)(a().mark((function t(n,r){var o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e,n,r);case 2:return o=t.sent,t.next=5,(0,B.pr)(o);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),z[e].useCreate=function(t){return function(){var n=(0,o.Z)(a().mark((function n(r){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",E(e,r,t));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},z[e].useDelete=function(t){return(0,o.Z)(a().mark((function n(){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L(e,t);case 2:return r=n.sent,n.next=5,(0,B.pr)(r);case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))},z[e].listAsync=function(){var t=(0,o.Z)(a().mark((function t(n){var r,o,u=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{},t.next=3,A(n,e,r);case 3:return o=t.sent,t.next=6,(0,B.pr)(o);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),z[e].list=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return U(e,t,H(H({},i),n))})}));var F=z},28799:function(t,n,e){e.d(n,{Ib:function(){return c},Q2:function(){return a}});var r=e(59e3);function o(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"localhost",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"6789",r=n;return t&&(r=window.location.hostname),r===n?r="".concat(r,":").concat(e):t&&window.location.port&&(r="".concat(r,":").concat(window.location.port)),r}function u(){var t="localhost",n="/CLOUD_NOTEBOOK_BASE_PATH_PLACEHOLDER_",e=o(true,t,"6789"),r=function(t,n){var e,r="http://";return n!==(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"localhost")&&(r="https://",!t||null!==(e=window.location.protocol)&&void 0!==e&&e.match(/https/)||(r="http://")),r}(true,e,t),u="";return n.includes("CLOUD_NOTEBOOK_BASE_PATH_PLACEHOLDER")||(u=n),"".concat(r).concat(e).concat(u,"/api")}function c(){return"ws://".concat(o(!0,"localhost","6789"),"/websocket/")}function a(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,i="".concat(u(),"/").concat(t);return n&&(i="".concat(i,"/").concat(n)),e&&(i="".concat(i,"/").concat(e)),o&&(i="".concat(i,"/").concat(o)),a&&(i="".concat(i,"/").concat(a)),Object.values(c).length>=1&&(i="".concat(i,"?").concat((0,r.uM)(c))),i}}}]);