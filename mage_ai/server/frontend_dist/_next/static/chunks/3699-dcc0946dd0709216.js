"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3699],{33699:function(n,e,t){t.d(e,{y:function(){return X},Z:function(){return N}});var i=t(89565),r=t.n(i),o=t(56085),a=t(82684),c=t(35490),u=t(47999),l=t(67971),s=t(82635),d=t(86673),f=t(54283),h=t(19711),p=t(9518),g=t(23831),y=t(49125),v=t(37391),m=(0,p.css)([""," ",""],(function(n){return!n.width&&"\n    width: 100%;\n  "}),(function(n){return n.width&&"\n    width: ".concat(n.width,"px;\n  ")})),b=p.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-11d4rgl-0"})([""," "," height:100%;overflow:auto;position:absolute;",""],m,v.w5,(function(n){return"\n    background-color: ".concat((n.theme.background||g.Z.background).codeTextarea,";\n  ")})),x=p.default.div.withConfig({displayName:"indexstyle__InnerStyle",componentId:"sc-11d4rgl-1"})([""," padding:","px;"],m,y.cd*y.iI),S=p.default.div.withConfig({displayName:"indexstyle__LineStyle",componentId:"sc-11d4rgl-2"})(["height:","px;"],20),w=(0,p.css)(["@keyframes cursor-blink{0%{opacity:0;}}::before{","}::after{","}"],(function(n){return n.focusBeginning&&"\n      position: absolute;\n      background-color: ".concat((n.theme.accent||g.Z.accent).warning,';\n      content: "";\n      display: inline-block;\n      height: ').concat(20,"px;\n      width: ").concat(y.iI,"px;\n      opacity: 0.3;\n    ")}),(function(n){return n.focused&&"\n      background-color: ".concat((n.theme.accent||g.Z.accent).warning,';\n      content: "";\n      display: inline-block;\n      height: ').concat(20,"px;\n      width: ").concat(y.iI,"px;\n      opacity: 0.3;\n    ")})),T=p.default.div.withConfig({displayName:"indexstyle__InputStyle",componentId:"sc-11d4rgl-3"})(["align-items:center;display:flex;gap:2px;",""],w),k=p.default.span.withConfig({displayName:"indexstyle__CharacterStyle",componentId:"sc-11d4rgl-4"})([""," ::after{","}"],w,(function(n){return n.focused&&"\n      position: absolute;\n    "})),j=t(16115),I=t(94353),E=t(28799),_=t(51504),P=t(66653),C=t(41150),A=t(28598);function Z(n,e){var t="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"===typeof n)return F(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return F(n,e)}(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){c=!0,o=n},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw o}}}}function F(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var X="terminal";var N=function(n){var e=n.interruptKernel,t=n.onFocus,i=n.uuid,p=void 0===i?X:i,g=n.width,y=(0,a.useRef)(null),v=(0,a.useRef)(null),m=(0,a.useState)(!1),w=m[0],F=m[1],N=(0,a.useState)(""),M=N[0],D=N[1],O=(0,a.useState)(0),U=O[0],L=O[1],R=(0,a.useState)(""),G=R[0],B=R[1],Q=(0,a.useState)(0),z=Q[0],K=Q[1],Y=(0,a.useState)([]),q=Y[0],H=Y[1],J=(0,a.useState)(!1),V=J[0],W=J[1],$=(0,a.useState)([]),nn=$[0],en=$[1],tn=(0,o.ZP)((0,E.Ib)(),{shouldReconnect:function(){return!0}}),rn=tn.lastMessage,on=(tn.readyState,tn.sendMessage);(0,a.useEffect)((function(){if(rn){var n=null!==rn&&void 0!==rn&&rn.data?JSON.parse(rn.data):null;(null===n||void 0===n?void 0:n.uuid)===p&&(s.uF.BUSY===(null===n||void 0===n?void 0:n.execution_state)?F(!0):s.uF.IDLE===(null===n||void 0===n?void 0:n.execution_state)&&F(!1),en((function(e){return n?e.concat(n):e})))}}),[rn,F,en,p]),(0,a.useEffect)((function(){if(y.current&&v.current){var n=v.current.getBoundingClientRect().height;y.current.scrollTo(0,n)}}),[nn,y,v]);var an=(0,C.y)(),cn=an.registerOnKeyDown,un=an.setDisableGlobalKeyboardShortcuts,ln=an.unregisterOnKeyDown;(0,a.useEffect)((function(){return function(){ln(p)}}),[ln,p]);var sn=(0,a.useCallback)((function(){K((function(n){return n>0?n-1:n}))}),[]),dn=(0,a.useCallback)((function(){K((function(n){return n<=M.length?n+1:n}))}),[M]),fn=(0,a.useCallback)((function(n){var e=(null===n||void 0===n?void 0:n.split(/\n/))||[];if(e.length>1){var t=e.slice(0,-1);t[0]=M+t[0];var i=t.map((function(n,e){return{command:0===e,data:n,type:s.Gi.TEXT}}));L(q.length+t.length),H((function(n){return n.concat(t)})),en((function(n){return n.concat(i)})),B((function(n){return n+t.join("\n")}));var r=(e.slice(-1)[0]||"").trim();D(r),K(r.length)}else D((function(e){return e+n})),K(M.length+n.length)}),[M,q]);return cn(p,(function(n,t,i){var r=n.code,o=n.key;if(V)if((0,P.j)(n),(0,_.y)([j.PQ,j.VS],t))F(!1),en((function(n){var e;return n.concat({command:!0,data:(null===M||void 0===M||null===(e=M.trim())||void 0===e?void 0:e.length)>=1?M:"\n",type:s.Gi.TEXT})})),D(""),e();else if(!w)if(j.Qj!==r||t[j.zX])if((0,_.y)([j.QK],t))sn();else if((0,_.y)([j.DY],t))dn();else if((0,_.y)([j.Bu],t)){if(q.length>=1){var a,u=Math.max(0,U-1);D(q[u]),L(u),K((null===(a=q[u])||void 0===a?void 0:a.length)||0)}}else if((0,_.y)([j.kD],t)){if(q.length>=1){var l=Math.min(q.length,U+1),d=q[l]||"";D(d),L(l),K(d.length)}}else if((0,_.y)([j.Uq],t)){var f=G+M;(null===f||void 0===f?void 0:f.length)>=1&&(F(!0),on(JSON.stringify({api_key:I.l,code:"!".concat(f),token:(new c.Z).decodedToken.token,uuid:p})),L(q.length+1),H((function(n){return n.concat(M)})),K(0)),en((function(n){var e;return n.concat({command:!0,data:(null===M||void 0===M||null===(e=M.trim())||void 0===e?void 0:e.length)>=1?M:"\n",type:s.Gi.TEXT})})),B(""),D("")}else if((0,_.y)([j.zX,j.VS],t))navigator.clipboard.writeText(window.getSelection().toString());else if((0,_.y)([j.zX,j.Pd],t)||(0,_.y)([j.PQ,j.Pd],t)){var h,g,y,v,m;"undefined"===typeof(null===(h=navigator)||void 0===h?void 0:h.clipboard)?alert('Clipboard pasting is not allowed in insecure contexts. If your Mage deployment is not secure but you still want to use clipboard paste, you can override this setting (which should only be done temporarily) on Chrome browsers by going to "chrome://flags/#unsafely-treat-insecure-origin-as-secure", adding your origin to "Insecure origins treated as secure", and enabling that setting.'):null!==(g=navigator)&&void 0!==g&&null!==(y=g.clipboard)&&void 0!==y&&y.readText?navigator.clipboard.readText().then(fn).catch((function(n){return alert("".concat(n,'\n    For Chrome, users need to allow clipboard permissions for this site under "Privacy and security" -> "Site settings".\n    For Safari, users need to allow the clipboard paste by clicking "Paste" in the context menu that appears.'))})):null!==(v=navigator)&&void 0!==v&&null!==(m=v.clipboard)&&void 0!==m&&m.read?navigator.clipboard.read().then((function(n){var e,t=Z(n);try{for(t.s();!(e=t.n()).done;){var i,r=e.value,o=Z(r.types);try{for(o.s();!(i=o.n()).done;){var a=i.value;if("text/plain"===a)return r.getType(a)}}catch(c){o.e(c)}finally{o.f()}}}catch(c){t.e(c)}finally{t.f()}})).then((function(n){return n.text()})).then(fn).catch((function(n){return alert("".concat(n,'\n    For Firefox, users need to allow clipboard paste by setting the "dom.events.asyncClipboard.read" preference in "about:config" to "true" and clicking "Paste" in the context menu that appears.'))})):alert('If pasting is not working properly, you may need to adjust some settings in your browser.\n\n    For Firefox, users need to allow clipboard paste by setting both the "dom.events.asyncClipboard.clipboardItem" and "dom.events.asyncClipboard.read" preferences in "about:config" to "true" and clicking "Paste" in the context menu that appears.\n    For Chrome, users need to allow clipboard permissions for this site under "Privacy and security" -> "Site settings".\n    For Safari, users need to allow the clipboard paste by clicking "Paste" in the context menu that appears.\n')}else t[j.zX]||t[j.PQ]||1!==o.length||(D((function(n){return n.slice(0,z)+o+n.slice(z)})),dn());else{var b=Math.max(0,z-1);D((function(n){return n.slice(0,b)+n.slice(z)})),K((function(n){return Math.max(0,n-1)}))}}),[w,M,q,U,V,e,F,D,H,L,en,p]),(0,A.jsx)(b,{ref:y,width:g,children:(0,A.jsx)(u.Z,{isOpen:!0,onClick:function(){null===t||void 0===t||t(),W(!0),un(!0)},onClickOutside:function(){W(!1),un(!1)},style:{minHeight:"100%"},children:(0,A.jsxs)(x,{ref:v,width:g,children:[null===nn||void 0===nn?void 0:nn.reduce((function(n,e,t){var i=e||{},o=i.command,a=i.data,c=i.type,u=[];u=(u=Array.isArray(a)?a:[a]).filter((function(n){return n}));var d=[];return u.forEach((function(n,e){var i;if(s.jU.includes(c)&&(i=(0,A.jsxs)(h.ZP,{monospace:!0,noWrapping:!0,pre:!0,children:[n&&(0,A.jsx)(r(),{children:n}),!n&&(0,A.jsx)(A.Fragment,{children:"\xa0"})]})),i){var a="command-".concat(t,"-").concat(e,"-").concat(n);o?d.push((0,A.jsx)(S,{children:(0,A.jsxs)(l.Z,{alignItems:"center",children:[(0,A.jsx)(h.ZP,{inline:!0,monospace:!0,warning:!0,children:"\u2192\xa0"}),i]})},a)):d.push((0,A.jsx)(S,{children:i},a))}})),n.concat(d)}),[]),w&&(0,A.jsx)(d.Z,{mt:1,children:(0,A.jsx)(f.Z,{})}),!w&&(0,A.jsx)(T,{focused:V&&(0===M.length||z>M.length),children:(0,A.jsxs)(h.ZP,{monospace:!0,children:[(0,A.jsx)(h.ZP,{inline:!0,monospace:!0,warning:!0,children:"\u2192\xa0"}),null===M||void 0===M?void 0:M.split("").map((function(n,e){return(0,A.jsxs)(k,{focusBeginning:V&&0===z&&0===e,focused:V&&z===e+1,children:[" "===n&&(0,A.jsx)(A.Fragment,{children:"\xa0"})," "!==n&&n]},"command-".concat(e,"-").concat(n))}))]})})]})})})}},82635:function(n,e,t){var i,r;t.d(e,{Gi:function(){return r},jU:function(){return a},uF:function(){return i}}),function(n){n.BUSY="busy",n.IDLE="idle",n.QUEUED="queued"}(i||(i={})),function(n){n.IMAGE_PNG="image/png",n.PROGRESS="progress",n.TABLE="table",n.TEXT="text",n.TEXT_HTML="text/html",n.TEXT_PLAIN="text/plain"}(r||(r={}));var o,a=[r.TEXT,r.TEXT_PLAIN];!function(n){n.DISPLAY_DATA="display_data",n.STATUS="status",n.STREAM="stream",n.STREAM_PIPELINE="stream_pipeline"}(o||(o={}))},51504:function(n,e,t){t.d(e,{y:function(){return o}});var i=t(75582),r=t(16115);function o(n,e){var t=n.map((function(n){return String(n)})),o=n.includes(r.PQ),a=n.includes(r.zX),c=n.includes(r.XR),u=r.xU.map((function(n){return String(n)})),l=r.vk.map((function(n){return String(n)})),s=r.Tr.map((function(n){return String(n)})),d=Object.entries(e).find((function(n){var e=(0,i.Z)(n,2),r=e[0];return e[1]&&!t.includes(String(r))&&(!a||!l.includes(String(r)))&&(!o||!u.includes(String(r)))&&(!c||!s.includes(String(r)))}));return n.every((function(n){return e[n]}))&&!d}}}]);