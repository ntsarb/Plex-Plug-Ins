(self.webpackChunkplex_web_client=self.webpackChunkplex_web_client||[]).push([[630],{88740:function(t,e,n){"use strict";var r;function o(t){var e=0;return function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}}}function i(t){var e="undefined"!=typeof Symbol&&Symbol.iterator&&t[Symbol.iterator];return e?e.call(t):{next:o(t)}}var a="undefined"!=typeof window&&window===this?this:void 0!==n.g&&null!=n.g?n.g:this,s="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)};function c(t,e){if(e){var n=a;t=t.split(".");for(var r=0;r<t.length-1;r++){var o=t[r];o in n||(n[o]={}),n=n[o]}(e=e(r=n[t=t[t.length-1]]))!=r&&null!=e&&s(n,t,{configurable:!0,writable:!0,value:e})}}function u(){u=function(){},a.Symbol||(a.Symbol=p)}function l(t,e){this.b=t,s(this,"description",{configurable:!0,writable:!0,value:e})}c("Promise",(function(t){function e(t){this.c=0,this.h=void 0,this.b=[];var e=this.f();try{t(e.resolve,e.reject)}catch(t){e.reject(t)}}function n(){this.b=null}function r(t){return t instanceof e?t:new e((function(e){e(t)}))}if(t)return t;n.prototype.c=function(t){if(null==this.b){this.b=[];var e=this;this.f((function(){e.h()}))}this.b.push(t)};var o=a.setTimeout;n.prototype.f=function(t){o(t,0)},n.prototype.h=function(){for(;this.b&&this.b.length;){var t=this.b;this.b=[];for(var e=0;e<t.length;++e){var n=t[e];t[e]=null;try{n()}catch(t){this.g(t)}}}this.b=null},n.prototype.g=function(t){this.f((function(){throw t}))},e.prototype.f=function(){function t(t){return function(r){n||(n=!0,t.call(e,r))}}var e=this,n=!1;return{resolve:t(this.o),reject:t(this.g)}},e.prototype.o=function(t){if(t===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(t instanceof e)this.s(t);else{t:switch(typeof t){case"object":var n=null!=t;break t;case"function":n=!0;break t;default:n=!1}n?this.m(t):this.i(t)}},e.prototype.m=function(t){var e=void 0;try{e=t.then}catch(t){return void this.g(t)}"function"==typeof e?this.A(e,t):this.i(t)},e.prototype.g=function(t){this.j(2,t)},e.prototype.i=function(t){this.j(1,t)},e.prototype.j=function(t,e){if(0!=this.c)throw Error("Cannot settle("+t+", "+e+"): Promise already settled in state"+this.c);this.c=t,this.h=e,this.l()},e.prototype.l=function(){if(null!=this.b){for(var t=0;t<this.b.length;++t)s.c(this.b[t]);this.b=null}};var s=new n;return e.prototype.s=function(t){var e=this.f();t.v(e.resolve,e.reject)},e.prototype.A=function(t,e){var n=this.f();try{t.call(e,n.resolve,n.reject)}catch(t){n.reject(t)}},e.prototype.then=function(t,n){function r(t,e){return"function"==typeof t?function(e){try{o(t(e))}catch(t){i(t)}}:e}var o,i,a=new e((function(t,e){o=t,i=e}));return this.v(r(t,o),r(n,i)),a},e.prototype.catch=function(t){return this.then(void 0,t)},e.prototype.v=function(t,e){function n(){switch(r.c){case 1:t(r.h);break;case 2:e(r.h);break;default:throw Error("Unexpected state: "+r.c)}}var r=this;null==this.b?s.c(n):this.b.push(n)},e.resolve=r,e.reject=function(t){return new e((function(e,n){n(t)}))},e.race=function(t){return new e((function(e,n){for(var o=i(t),a=o.next();!a.done;a=o.next())r(a.value).v(e,n)}))},e.all=function(t){var n=i(t),o=n.next();return o.done?r([]):new e((function(t,e){function i(e){return function(n){a[e]=n,0==--s&&t(a)}}var a=[],s=0;do{a.push(void 0),s++,r(o.value).v(i(a.length-1),e),o=n.next()}while(!o.done)}))},e})),l.prototype.toString=function(){return this.b};var f,p=(f=0,function t(e){if(this instanceof t)throw new TypeError("Symbol is not a constructor");return new l("jscomp_symbol_"+(e||"")+"_"+f++,e)});function d(){u();var t=a.Symbol.iterator;t||(t=a.Symbol.iterator=a.Symbol("Symbol.iterator")),"function"!=typeof Array.prototype[t]&&s(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return function(t){return d(),(t={next:t})[a.Symbol.iterator]=function(){return this},t}(o(this))}}),d=function(){}}function h(){this.g=!1,this.c=null,this.i=void 0,this.b=1,this.l=this.h=0,this.f=null}function b(t){if(t.g)throw new TypeError("Generator is already running");t.g=!0}function g(t,e){t.f={D:e,T:!0},t.b=t.h||t.l}function y(t,e,n){return t.b=n,{value:e}}function m(t){this.b=new h,this.c=t}function v(t,e,n,r){try{var o=e.call(t.b.c,n);if(!(o instanceof Object))throw new TypeError("Iterator result "+o+" is not an object");if(!o.done)return t.b.g=!1,o;var i=o.value}catch(e){return t.b.c=null,g(t.b,e),w(t)}return t.b.c=null,r.call(t.b,i),w(t)}function w(t){for(;t.b.b;)try{var e=t.c(t.b);if(e)return t.b.g=!1,{value:e.value,done:!1}}catch(e){t.b.i=void 0,g(t.b,e)}if(t.b.g=!1,t.b.f){if(e=t.b.f,t.b.f=null,e.T)throw e.D;return{value:e.return,done:!0}}return{value:void 0,done:!0}}function S(t){this.next=function(e){return b(t.b),t.b.c?e=v(t,t.b.c.next,e,t.b.j):(t.b.j(e),e=w(t)),e},this.throw=function(e){return b(t.b),t.b.c?e=v(t,t.b.c.throw,e,t.b.j):(g(t.b,e),e=w(t)),e},this.return=function(e){return function(t,e){b(t.b);var n=t.b.c;return n?v(t,"return"in n?n.return:function(t){return{value:t,done:!0}},e,t.b.return):(t.b.return(e),w(t))}(t,e)},d(),this[Symbol.iterator]=function(){return this}}function R(t){return function(t){function e(e){return t.next(e)}function n(e){return t.throw(e)}return new Promise((function(r,o){!function t(i){i.done?r(i.value):Promise.resolve(i.value).then(e,n).then(t,o)}(t.next())}))}(new S(new m(t)))}function E(t,e){if(null==t)throw new TypeError("The 'this' value for String.prototype."+e+" must not be null or undefined");return t+""}h.prototype.j=function(t){this.i=t},h.prototype.return=function(t){this.f={return:t},this.b=this.l},c("Object.entries",(function(t){return t||function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push([e,t[e]]);return n}})),c("Array.from",(function(t){return t||function(t,e,n){e=null!=e?e:function(t){return t};var r=[],o="undefined"!=typeof Symbol&&Symbol.iterator&&t[Symbol.iterator];if("function"==typeof o){t=o.call(t);for(var i=0;!(o=t.next()).done;)r.push(e.call(n,o.value,i++))}else for(o=t.length,i=0;i<o;i++)r.push(e.call(n,t[i],i));return r}})),c("String.prototype.repeat",(function(t){return t||function(t){var e=E(this,"repeat");if(0>t||1342177279<t)throw new RangeError("Invalid count value");t|=0;for(var n="";t;)1&t&&(n+=e),(t>>>=1)&&(e+=e);return n}})),c("String.prototype.padStart",(function(t){return t||function(t,e){var n=E(this,"padStart");return t-=n.length,e=void 0!==e?String(e):" ",(0<t&&e?e.repeat(Math.ceil(t/e.length)).substring(0,t):"")+n}}));var P={PARSEC_OK:0,PARSEC_CONNECTING:20,PARSEC_WRN_BROWSER:30,CONNECT_WRN_APPROVAL:6,CONNECT_WRN_DECLINED:8,CONNECT_WRN_PEER_GONE:99,CONNECT_WRN_UNCONFIRMED:100,PARSEC_NOT_RUNNING:-3,WS_ERR_CONNECT:-6101,WS_ERR_CLOSE:-6105,NAT_ERR_WEBRTC:-6200};function O(t,e,n,r){return n=r?n.bind(r):n,t.addEventListener(e,n),[t,e,n]}function L(t){for(var e=(t=i(t)).next();!e.done;e=t.next())(e=e.value)[0].removeEventListener(e[1],e[2])}function C(t,e,n,r,o){(t=new DataView(t)).setInt32(0,n),t.setInt32(4,r),t.setInt32(8,o),t.setInt8(12,e)}function N(t,e,n,r){var o=new ArrayBuffer(13);return C(o,t,e,n,r),o}function _(t,e,n){var r=new ArrayBuffer(13+n.length+1);C(r,t,n.length+1,e,0),t=(new TextEncoder).encode(n),e=new Int8Array(r,13);for(var o=0;o<n.length;o++)e[o]=t[o];return r}var B={},A=1;function D(t){var e=A++;return B[e]=t,e}function T(t){var e=this;this.l=t,this.i=!1,this.j="",this.h=!1,this.b=this.sdp=null,this.c={},this.g=[],this.f=null,this.b=new RTCPeerConnection({iceServers:[{urls:"stun:stun.parsec.gg:3478"}]}),this.b.onicecandidate=function(t){t.candidate&&8<=(t=t.candidate.candidate.replace("candidate:","").split(" ")).length&&"udp"===t[2].toLowerCase()&&e.l(t[4],parseInt(t[5],10),!1,"srflx"===t[7],"host"===t[7])}}function I(t,e,n,r,o){t.c[n]=t.b.createDataChannel(e,{negotiated:!0,id:n}),t.c[n].binaryType="arraybuffer",t.c[n].onopen=r,t.c[n].onmessage=o}function k(t){for(;0<t.g.length;){var e=t.g.shift();t.b.addIceCandidate(new RTCIceCandidate({candidate:"candidate:2395300328 1 udp 2113937151 "+e.ip+" "+e.port+" typ "+(e.from_stun?"srflx":"host")+" generation 0 ufrag "+t.j+" network-cost 50",sdpMid:t.sdp.a.mid,sdpMLineIndex:0}))}}function j(t,e){this.c=e,this.g=t,this.f="",this.b=null,this.h=[],this.i=this.j=!1,this.timeout=null}function Z(t,e){t.b&&(e=JSON.stringify(e),t.b.readyState==WebSocket.OPEN?t.b.send(e):t.h.push(e))}T.prototype.close=function(){for(var t=i(Object.entries(this.c)),e=t.next();!e.done;e=t.next())e.value[1].close();this.b.close()},T.prototype.send=function(t,e){"open"==this.c[e].readyState&&this.c[e].send(t)},j.prototype.close=function(t){this.i=!0,this.b&&(this.b.close(t),this.b=null),this.timeout&&(clearTimeout(this.timeout),this.timeout=null)};var G=1e3/60/1e3,M=(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?200:100)/1e3;function x(t,e){t.playbackRate=e,t.play().catch((function(){}))}function U(t,e,n){var r=this;this.b=t,this.l=!0,this.type=e,this.o=n,this.f=this.c=null,this.m='video/mp4; codecs="avc1.64001e"'===this.type,this.g=[],this.j=[],this.h=null,this.i=0,this.A=function(){var t=r.b.seekable;if(t&&0<t.length){var e=(t=t.end(0))-r.b.currentTime;'video/mp4; codecs="avc1.64001e"'===r.type?(r.i=e>.025?r.i+1:0,60<r.i&&1==r.b.playbackRate?x(r.b,e>3*G?10:1.25):e<G&&1!=r.b.playbackRate&&x(r.b,1)):e>3*M?r.b.currentTime=t+1e3:e>1.5*M&&1==r.b.playbackRate?x(r.b,10):e<M&&10==r.b.playbackRate&&x(r.b,1)}}}function q(t){t.f=new MediaSource,t.b.src=URL.createObjectURL(t.f),t.b.load(),t.g.push(O(t.b,"error",(function(){console.error(t.b.error.message)}),null)),t.g.push(O(t.f,"sourceopen",(function(){t.c=t.f.addSourceBuffer(t.type),t.c.mode="sequence",t.g.push(O(t.c,"update",t.s,t)),t.b.play().catch((function(){})),t.h=setInterval(t.A,1)}),null))}function W(t){t.h&&clearInterval(t.h),t.b.pause(),L(t.g),t.f&&(t.c&&(t.f.removeSourceBuffer(t.c),t.c=null),t.f.endOfStream(),URL.revokeObjectURL(t.b.src),t.f=null),t.b.src="",'video/mp4; codecs="avc1.64001e"'===t.type&&t.b.load(),t.l=!0,t.m='video/mp4; codecs="avc1.64001e"'===t.type,t.g=[],t.j=[],t.h=null,t.i=0}function K(t,e){e=new Uint8Array(e),'audio/mp4; codecs="opus"'===t.type&&t.l&&(t.l=!1,q(t)),'video/mp4; codecs="avc1.64001e"'===t.type&&102===e[4]&&(W(t),q(t),t.m=!1),t.m||(t.j.push(e),t.s())}function F(t,e){var n=this;this.status=P.PARSEC_NOT_RUNNING,this.o=performance.now(),this.s={encodeLatency:0,decodeLatency:0,networkLatency:0},this.c=[],this.signal=this.b=null,this.h=[],this.g="",this.video=t,this.l=[],this.j={},this.m=0,this.i=new U(e,'audio/mp4; codecs="opus"',null),this.f=new U(t,'video/mp4; codecs="avc1.64001e"',(function(){console.warn("Attempting to recover stream..."),n.b&&n.b.send(N(13,0,0,1),0)})),this.h.push(O(window,"beforeunload",(function(){return n.B(),null}),null))}function X(t,e){if(t.signal&&t.status==P.PARSEC_CONNECTING){var n=t.signal;Z(n,{action:"offer_cancel",version:1,payload:{to:n.f,attempt_id:n.g}})}t.signal&&(t.signal.close(1e3),t.signal=null),e!=P.PARSEC_OK&&(t.b&&t.status==P.PARSEC_OK&&t.b.send(N(10,0,0,0),0),t.b&&(t.b.close(),t.b=null),W(t.f),W(t.i)),t.status=e,t.l=[],t.j={},t.m=0}U.prototype.s=function(){if(0<this.j.length&&this.c&&!this.c.updating)try{var t=this.j.shift();this.c.appendBuffer(t)}catch(t){console.warn(t),W(this),this.o&&this.o()}},(r=F.prototype).B=function(){L(this.h),this.C()},r.U=function(){},r.R=function(){return this.g},r.S=function(t){var e=B[t];return null!=e&&delete B[t],null==e?null:e},r.F=function(t,e,n){var r,o,i,a,s,c=this;return R((function(u){if(1==u.b)return/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)?c.status!=P.PARSEC_NOT_RUNNING?u.return():(c.status=P.PARSEC_CONNECTING,B={},A=1,W(c.i),W(c.f),c.c=[],c.g=function(){for(var t=[],e=new Uint8Array(4),n=0;6>n;n++)crypto.getRandomValues(e),t.push(Array.from(e).map((function(t){return t.toString(16).padStart(2,"0")})).join(""));return t.join("-")}(),c.signal=new j(c.g,(function(t){X(c,t)})),r=function(t,e,n,r,o){if(c.signal){var i=c.signal;Z(i,{action:"candex",version:1,payload:{to:i.f,attempt_id:i.g,data:{ver_data:1,ip:t,port:e,lan:o,from_stun:r,sync:n}}})}},o=function(){c.h.push(O(document,"visibilitychange",(function(){document.hidden?(W(c.f),c.b&&c.b.send(N(19,0,0,0),0)):c.b&&c.b.send(N(13,0,0,0),0)}),null));var t=window.screen.width,e=window.screen.height;(800>t||600>e||1920<t||1080<e)&&(t=1920,e=1080),c.b&&c.b.send(function(t,e){return _(11,0,t=JSON.stringify({_version:1,_max_w:6e4,_max_h:6e4,_flags:0,resolutionX:t,resolutionY:e,refreshRate:60,mediaContainer:2}))}(t,e),0),X(c,P.PARSEC_OK)},c.b=new T(r),I(c.b,"control",0,o,(function(t){c.o=performance.now();var e=new DataView(t.data);switch((t={u:e.getInt32(0),w:e.getInt32(4),P:e.getInt32(8),type:e.getInt8(12)}).type){case 10:c.status=t.u;break;case 21:c.s={encodeLatency:parseFloat(t.w)/1e3,decodeLatency:0,networkLatency:0,packetsSent:0,fastRTs:0,slowRTs:0,bitrate:0};break;case 20:c.c.push({type:2,gamepadID:t.u,motorBig:t.w,motorSmall:t.P});break;case 16:c.c.push({type:t.u?4:5});break;case 28:c.m=t.u;break;case 17:c.c.push(function(t,e){return e=D(new Uint8Array(e.buffer,13,t.u)),{type:3,id:t.w,key:e}}(t,e));break;case 9:c.c.push(function(t){var e=t.getInt16(32),n=t.getInt32(16),r=0<n?new Uint8Array(t.buffer,34,n):null;return r=r?D(r):0,{type:1,cursor:{size:n,positionX:t.getInt16(24),positionY:t.getInt16(26),width:t.getInt16(20),height:t.getInt16(22),hotX:t.getInt16(28),hotY:t.getInt16(30),imageUpdate:0<r,relative:!!(256&e),hidden:!!(512&e),stream:0},key:r}}(e));break;case 25:e=JSON.parse(new TextDecoder("utf-8").decode(new Uint8Array(e.buffer,13,t.u-1)));for(var n={},r=0;r<e.length;r++)e[r].id==t.w&&(n=e[r]);t={list:e,me:n},c.l=t.list,c.j=t.me}})),I(c.b,"video",1,null,(function(t){K(c.f,t.data)})),I(c.b,"audio",2,null,(function(t){K(c.i,t.data)})),y(u,function(t){var e;return R((function(n){if(1==n.b)return e=t,y(n,t.b.createOffer(),2);e.f=n.i;for(var r=t.f.sdp.split("\n"),o={},i=0;i<r.length;i++){var a=r[i].split("="),s=a[0];a=a[1],s&&("a"===s?(o.a||(o.a={}),s=a.split(/:(.+)/),o.a[s[0]]=s[1]):o[s]=a)}return t.sdp=o,n.return({ice_ufrag:t.sdp.a["ice-ufrag"],ice_pwd:t.sdp.a["ice-pwd"],fingerprint:t.sdp.a.fingerprint})}))}(c.b),2)):(c.status=P.PARSEC_WRN_BROWSER,u.return());i=u.i,a=function(t,e,n){c.b&&function(t,e,n,r){var o,i;R((function(a){switch(a.b){case 1:if(!t.f)throw"Offer is not set";if(t.h){a.b=0;break}return t.j=e,y(a,t.b.setLocalDescription(t.f),3);case 3:a.h=4;var s=t.sdp.a.mid;return o="v=0\r\no=- "+function(){var t=new Uint8Array(16);return crypto.getRandomValues(t),t.map((function(t){return t%10})).join("")}()+" 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE "+s+"\r\na=msid-semantic: WMS *\r\nm=application 9 DTLS/SCTP 5000\r\nc=IN IP4 0.0.0.0\r\nb=AS:30\r\na=ice-ufrag:"+e+"\r\na=ice-pwd:"+n+"\r\na=ice-options:trickle\r\na=fingerprint:"+r+"\r\na=setup:active\r\na=mid:"+s+"\r\na=sendrecv\r\na=sctpmap:5000 webrtc-datachannel 256\r\na=max-message-size:1073741823\r\n",y(a,t.b.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:o})),6);case 6:a.b=5,a.h=0;break;case 4:a.h=0,s=a.f.D,a.f=null,i=s,console.log(i);case 5:t.i&&k(t),t.h=!0,a.b=0}}))}(c.b,t,e,n)},s=function(t,e,n,r){c.b&&function(t,e,n,r,o){r?(t.i=!0,setTimeout((function(){t.l("1.2.3.4",1234,!0,!1,!1)}),500)):t.g.push({ip:e.replace("::ffff:",""),port:n,from_stun:o}),t.h&&t.i&&k(t)}(c.b,t,e,n,r)},c.signal&&function(t,e,n,r,o,i,a){t.b=new WebSocket("wss://kessel-ws.parsecgaming.com:443/?session_id=_&role=client&version=1&sdk_version=0",e),t.f=n,t.b.onclose=function(){t.i||t.c(P.WS_ERR_CLOSE)},t.b.onerror=function(){t.c(P.WS_ERR_CONNECT)},t.b.onopen=function(){for(;0<t.h.length;)t.b.send(t.h.shift());Z(t,{action:"offer",version:1,payload:{to:t.f,attempt_id:t.g,secret:r||"",data:{ver_data:1,creds:o,mode:2,versions:{p2p:1,bud:1,init:1,video:1,audio:1,control:1}}}}),t.timeout=setTimeout((function(){t.c(P.CONNECT_WRN_APPROVAL)}),3e4)},t.b.onmessage=function(e){switch((e=JSON.parse(e.data)).action){case"answer_relay":if(t.j=!0,!e.payload.approved){t.c(P.CONNECT_WRN_DECLINED);break}t.timeout&&clearTimeout(t.timeout),t.timeout=setTimeout((function(){t.c(P.NAT_ERR_WEBRTC)}),1e4),e=e.payload.data.creds,i(e.ice_ufrag,e.ice_pwd,e.fingerprint);break;case"candex_relay":e=e.payload.data,a(e.ip,e.port,e.sync,e.from_stun);break;case"close":var n=P.WS_ERR_CLOSE;switch(e.payload.reason){case"HOST_NOT_FOUND":n=P.CONNECT_WRN_PEER_GONE;break;case"USER_UNCONFIRMED":n=P.CONNECT_WRN_UNCONFIRMED}t.c(n)}}}(c.signal,t,e,n,i,a,s),u.b=0}))},r.K=function(){return this.status},r.J=function(){return this.j},r.H=function(){return this.m},r.G=function(){return this.l},r.C=function(){X(this,P.PARSEC_NOT_RUNNING)},r.O=function(t,e){this.b&&this.status==P.PARSEC_OK&&this.b.send(_(17,t,e),0)},r.N=function(t){this.b&&this.status==P.PARSEC_OK&&this.b.send(function(t,e){switch(t.type){case 4:if(!t.relative){var n=e.videoWidth,r=e.videoHeight,o=Math.round(e.offsetWidth*window.devicePixelRatio),i=Math.round(e.offsetHeight*window.devicePixelRatio),a=Math.min(o/n,i/r);e=n*a,a*=r,i=Math.max((i-a)/2,0),(o=Math.round(n/e*(t.x-Math.max((o-e)/2,0))))===n-1&&(o=n),o>n&&(o=n),0>o&&(o=0),t.x=o,(n=Math.round(r/a*(t.y-i)))===r-1&&(n=r),n>r&&(n=r),0>n&&(n=0),t.y=n}return N(3,t.relative?1:0,t.x,t.y);case 8:return C(r=new ArrayBuffer(28),23,t.id,0,0),(n=new DataView(r)).setUint16(16,t.buttons),n.setInt16(18,t.thumbLX),n.setInt16(20,t.thumbLY),n.setInt16(22,t.thumbRX),n.setInt16(24,t.thumbRY),n.setUint8(26,t.leftTrigger),n.setUint8(27,t.rightTrigger),r;case 2:return N(1,t.button,t.pressed?1:0,0);case 1:return N(0,t.code,t.mod,t.pressed?1:0);case 3:return N(2,t.x,t.y,0);case 5:return N(4,t.button,t.pressed?1:0,t.id);case 6:return N(5,t.axis,t.value,t.id);case 7:return N(6,0,0,t.id);case 9:return N(24,0,0,0)}}(t,this.video),0)},r.M=function(){return this.c.shift()},r.I=function(){return this.s},r.L=function(){return this.status==P.PARSEC_OK&&5e3<performance.now()-this.o},F.prototype.destroy=F.prototype.B,F.prototype.setLogCallback=F.prototype.U,F.prototype.getAttemptID=F.prototype.R,F.prototype.getBuffer=F.prototype.S,F.prototype.clientConnect=F.prototype.F,F.prototype.clientGetStatus=F.prototype.K,F.prototype.clientGetSelf=F.prototype.J,F.prototype.clientGetHostMode=F.prototype.H,F.prototype.clientGetGuests=F.prototype.G,F.prototype.clientDisconnect=F.prototype.C,F.prototype.clientSendUserData=F.prototype.O,F.prototype.clientSendMessage=F.prototype.N,F.prototype.clientPollEvents=F.prototype.M,F.prototype.clientGetMetrics=F.prototype.I,F.prototype.clientNetworkFailure=F.prototype.L,F.prototype.Status=P,window.Parsec=F},51630:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>Bt});var r,o,i,a,s,c,u=n(9669),l=n.n(u),f=n(67294),p=n(96840),d=n(5562),h=n(93554),b=n(49560);n(88740),(o=r||(r={}))[o.Keyboard=1]="Keyboard",o[o.MouseButton=2]="MouseButton",o[o.MouseWheel=3]="MouseWheel",o[o.MouseMotion=4]="MouseMotion",o[o.GamepadButton=5]="GamepadButton",o[o.GamepadAxis=6]="GamepadAxis",o[o.GamepadUnplug=7]="GamepadUnplug",o[o.GamepadState=8]="GamepadState",o[o.Release=9]="Release",(a=i||(i={}))[a.A=0]="A",a[a.B=1]="B",a[a.X=2]="X",a[a.Y=3]="Y",a[a.Back=4]="Back",a[a.Guide=5]="Guide",a[a.Start=6]="Start",a[a.LeftStick=7]="LeftStick",a[a.RightStick=8]="RightStick",a[a.LeftShoulder=9]="LeftShoulder",a[a.RightShoulder=10]="RightShoulder",a[a.DPadUp=11]="DPadUp",a[a.DPadDown=12]="DPadDown",a[a.DPadLeft=13]="DPadLeft",a[a.DPadRight=14]="DPadRight",(c=s||(s={}))[c.LeftX=0]="LeftX",c[c.LeftY=1]="LeftY",c[c.RightX=2]="RightX",c[c.RightY=3]="RightY",c[c.LeftTrigger=4]="LeftTrigger",c[c.RightTrigger=5]="RightTrigger";function g(t){const e=new Map;return function(n,r){let o=r;o>0&&o<.3||o<0&&o>-.3?o=0:o>.85?o=1:o<-.85?o=-1:o>0?o-=.3:o<0&&(o+=.3),o<0?o*=32768:o>0&&(o*=32767),o=Math.round(o),t&&(o=t(o));const i=e.get(n)||0;if(!(Math.abs(o-i)<.1)||!o&&i)return e.set(n,o),o}}function y(t){const e=g((t=>t<0?-32768:t>0?32767:t));return(n,o)=>{const i=e(n,o);if(void 0!==i)return{axis:t,id:n,type:r.GamepadAxis,value:i}}}function m(t){const e=g();return(n,o)=>{const i=e(n,o);if(void 0!==i)return{axis:t,id:n,type:r.GamepadAxis,value:i}}}function v(t,e){const n=g();let o;return(i,a)=>{const s=n(i,a),c=0!==s;if(void 0===s)return;let u;if(s<0?u=t:s>0&&(u=e),c&&o===u)return;const l=[];return o&&o!==u&&l.push({button:o,id:i,pressed:!1,type:r.GamepadButton}),o=u,u&&l.push({button:u,id:i,pressed:c,type:r.GamepadButton}),l}}function w(t){return(e,n)=>({button:t,id:e,pressed:0!==n,type:r.GamepadButton})}const S={axes:{[b.pz.Axis0]:m(s.LeftX),[b.pz.Axis1]:m(s.LeftY),[b.pz.Axis2]:m(s.RightX),[b.pz.Axis3]:m(s.RightY)},buttons:{[b.Lw.Button0]:w(i.A),[b.Lw.Button1]:w(i.B),[b.Lw.Button2]:w(i.X),[b.Lw.Button3]:w(i.Y),[b.Lw.Button4]:w(i.LeftShoulder),[b.Lw.Button5]:w(i.RightShoulder),[b.Lw.Button6]:m(s.LeftTrigger),[b.Lw.Button7]:m(s.RightTrigger),[b.Lw.Button8]:w(i.Back),[b.Lw.Button9]:w(i.Start),[b.Lw.Button12]:w(i.DPadUp),[b.Lw.Button13]:w(i.DPadDown),[b.Lw.Button14]:w(i.DPadLeft),[b.Lw.Button15]:w(i.DPadRight)},keys:{[b.VD.KeyX]:w(i.A),[b.VD.KeyZ]:w(i.B),[b.VD.KeyS]:w(i.X),[b.VD.KeyA]:w(i.Y),[b.VD.KeyQ]:w(i.LeftShoulder),[b.VD.KeyW]:w(i.RightShoulder),[b.VD.ShiftRight]:w(i.Back),[b.VD.Enter]:w(i.Start),[b.VD.ArrowUp]:w(i.DPadUp),[b.VD.ArrowDown]:w(i.DPadDown),[b.VD.ArrowLeft]:w(i.DPadLeft),[b.VD.ArrowRight]:w(i.DPadRight)}},R={axes:{[b.pz.Axis0]:v(i.DPadLeft,i.DPadRight),[b.pz.Axis1]:v(i.DPadUp,i.DPadDown)},buttons:{[b.Lw.Button12]:w(i.DPadUp),[b.Lw.Button13]:w(i.DPadDown),[b.Lw.Button14]:w(i.DPadLeft),[b.Lw.Button15]:w(i.DPadRight)},keys:S.keys};var E=Object.defineProperty,P=Object.prototype.hasOwnProperty,O=Object.getOwnPropertySymbols,L=Object.prototype.propertyIsEnumerable,C=(t,e,n)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,N=(t,e)=>{for(var n in e||(e={}))P.call(e,n)&&C(t,n,e[n]);if(O)for(var n of O(e))L.call(e,n)&&C(t,n,e[n]);return t};const _=N(N({},R),{buttons:N(N({},R.buttons),{[b.Lw.Button0]:w(i.A),[b.Lw.Button1]:w(i.B),[b.Lw.Button8]:w(i.Back),[b.Lw.Button9]:w(i.Start)})});var B=Object.defineProperty,A=Object.prototype.hasOwnProperty,D=Object.getOwnPropertySymbols,T=Object.prototype.propertyIsEnumerable,I=(t,e,n)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,k=(t,e)=>{for(var n in e||(e={}))A.call(e,n)&&I(t,n,e[n]);if(D)for(var n of D(e))T.call(e,n)&&I(t,n,e[n]);return t};const j=k(k({},R),{buttons:k(k({},R.buttons),{[b.Lw.Button0]:w(i.B),[b.Lw.Button1]:w(i.A),[b.Lw.Button4]:w(i.LeftShoulder),[b.Lw.Button5]:w(i.RightShoulder),[b.Lw.Button8]:w(i.Back),[b.Lw.Button9]:w(i.Start)})});var Z=Object.defineProperty,G=Object.prototype.hasOwnProperty,M=Object.getOwnPropertySymbols,x=Object.prototype.propertyIsEnumerable,U=(t,e,n)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,q=(t,e)=>{for(var n in e||(e={}))G.call(e,n)&&U(t,n,e[n]);if(M)for(var n of M(e))x.call(e,n)&&U(t,n,e[n]);return t};const W=q(q({},R),{buttons:q(q({},R.buttons),{[b.Lw.Button0]:w(i.B),[b.Lw.Button1]:w(i.A),[b.Lw.Button2]:w(i.Y),[b.Lw.Button3]:w(i.B),[b.Lw.Button9]:w(i.Start)})});var K=Object.defineProperty,F=Object.prototype.hasOwnProperty,X=Object.getOwnPropertySymbols,Y=Object.prototype.propertyIsEnumerable,V=(t,e,n)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,z=(t,e)=>{for(var n in e||(e={}))F.call(e,n)&&V(t,n,e[n]);if(X)for(var n of X(e))Y.call(e,n)&&V(t,n,e[n]);return t};const H=z(z({},R),{axes:{[b.pz.Axis0]:m(s.LeftX),[b.pz.Axis1]:m(s.LeftY),[b.pz.Axis2]:y(s.RightX),[b.pz.Axis3]:y(s.RightY)},buttons:z(z({},R.buttons),{[b.Lw.Button0]:w(i.B),[b.Lw.Button2]:w(i.Y),[b.Lw.Button4]:w(i.LeftShoulder),[b.Lw.Button5]:w(i.RightShoulder),[b.Lw.Button6]:y(s.LeftTrigger),[b.Lw.Button7]:y(s.LeftTrigger),[b.Lw.Button9]:w(i.Start)})});var J=Object.defineProperty,$=Object.prototype.hasOwnProperty,Q=Object.getOwnPropertySymbols,tt=Object.prototype.propertyIsEnumerable,et=(t,e,n)=>e in t?J(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,nt=(t,e)=>{for(var n in e||(e={}))$.call(e,n)&&et(t,n,e[n]);if(Q)for(var n of Q(e))tt.call(e,n)&&et(t,n,e[n]);return t};const rt=nt(nt({},R),{buttons:nt(nt({},R.buttons),{[b.Lw.Button0]:w(i.B),[b.Lw.Button1]:w(i.A),[b.Lw.Button8]:w(i.Back),[b.Lw.Button9]:w(i.Start)})});var ot=Object.defineProperty,it=Object.prototype.hasOwnProperty,at=Object.getOwnPropertySymbols,st=Object.prototype.propertyIsEnumerable,ct=(t,e,n)=>e in t?ot(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ut=(t,e)=>{for(var n in e||(e={}))it.call(e,n)&&ct(t,n,e[n]);if(at)for(var n of at(e))st.call(e,n)&&ct(t,n,e[n]);return t};const lt=ut(ut({},R),{buttons:ut(ut({},R.buttons),{[b.Lw.Button0]:w(i.B),[b.Lw.Button1]:w(i.A),[b.Lw.Button9]:w(i.Start)})});var ft=Object.defineProperty,pt=Object.prototype.hasOwnProperty,dt=Object.getOwnPropertySymbols,ht=Object.prototype.propertyIsEnumerable,bt=(t,e,n)=>e in t?ft(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,gt=(t,e)=>{for(var n in e||(e={}))pt.call(e,n)&&bt(t,n,e[n]);if(dt)for(var n of dt(e))ht.call(e,n)&&bt(t,n,e[n]);return t};const yt=gt(gt({},R),{buttons:gt(gt({},R.buttons),{[b.Lw.Button0]:w(i.B),[b.Lw.Button1]:w(i.A),[b.Lw.Button9]:w(i.B)})});var mt=Object.defineProperty,vt=Object.prototype.hasOwnProperty,wt=Object.getOwnPropertySymbols,St=Object.prototype.propertyIsEnumerable,Rt=(t,e,n)=>e in t?mt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Et=(t,e)=>{for(var n in e||(e={}))vt.call(e,n)&&Rt(t,n,e[n]);if(wt)for(var n of wt(e))St.call(e,n)&&Rt(t,n,e[n]);return t};const Pt=Et(Et({},R),{buttons:Et(Et({},R.buttons),{[b.Lw.Button0]:w(i.B),[b.Lw.Button1]:w(i.A),[b.Lw.Button2]:w(i.Y),[b.Lw.Button3]:w(i.X),[b.Lw.Button4]:w(i.LeftShoulder),[b.Lw.Button5]:w(i.RightShoulder),[b.Lw.Button8]:w(i.Back),[b.Lw.Button9]:w(i.Start)})});var Ot=n(8824),Lt=n(63676),Ct=n(38204);const Nt=function({inputDevices:t,paused:e,peerID:n,platformTag:r,preventDefault:o,sessionID:i,style:a,volume:s,onConnected:c,onError:u,onPause:l}){const[h,g]=(0,f.useState)(null),[y,m]=(0,f.useState)(null),[v,w]=(0,f.useState)(null),R=(0,f.useCallback)((t=>{let e=null,n=null;if(t){const r=t.appendChild(document.createElement("video"));r.className="ParsecGame-mediaElement-23fukQ HTMLMedia-mediaElement-1o7Jdm",n=t.appendChild(document.createElement("audio")),e=new window.Parsec(r,n,t)}m(n),w(e)}),[]);return(0,f.useEffect)((()=>()=>{v&&(v.destroy(),(0,p.Z)("[Game] Destroyed"))}),[v]),(0,f.useEffect)((()=>{if(!v||!n||!i)return;(0,p.Z)("[Game] Starting status monitor");let t=window.setInterval((()=>{g(v.clientGetStatus())}),250);return(0,p.Z)("[Game] Connecting..."),v.setLogCallback(p.Z),v.clientConnect(i,n),()=>{t&&((0,p.Z)("[Game] Stopping status monitor"),t=window.clearInterval(t)),v.clientGetStatus()!==v.Status.PARSEC_CONNECTING&&v.clientGetStatus()!==v.Status.PARSEC_OK||((0,p.Z)("[Game] Disconnecting..."),v.clientDisconnect())}}),[v,n,i]),(0,f.useEffect)((()=>{if(!v)return;const{Status:t}=v;if(c(h===t.PARSEC_OK),null!==h&&h!==t.PARSEC_CONNECTING&&h!==t.PARSEC_OK&&h!==t.PARSEC_NOT_RUNNING){const t=new Error(function(t,e){const{Status:n}=e;switch(t){case n.CONNECT_WRN_PEER_GONE:return(0,d.Z)("Unable to start game session.");case n.CONNECT_WRN_UNCONFIRMED:return(0,d.Z)("Please complete Parsec account email verification.");case n.NAT_ERR_WEBRTC:return(0,d.Z)("Network configuration prevents direct connection to game session.");default:return(0,d.Z)("A critical error occurred.")}}(h,v));t.category=function(t,e){const{Status:n}=e;switch(t){case n.CONNECT_WRN_UNCONFIRMED:return(0,d.Z)("Parsec Account");case n.CONNECT_WRN_PEER_GONE:return(0,d.Z)("Game Server");case n.NAT_ERR_WEBRTC:return(0,d.Z)("Network");default:return(0,d.Z)("Unknown")}}(h,v),t.code=String(h),p.Z.error("[Game] Fatal error!",t),p.Z.error("[Game] Disconnecting..."),v.clientDisconnect(),u(t)}}),[v,h,c,u]),(0,f.useEffect)((()=>{if(!v||h!==v.Status.PARSEC_OK)return;const t=e||o?b.Tk.PauseGame:b.Tk.ResumeGame;(0,p.Z)(`[Game] Sending data: ${t}`),v.clientSendUserData(t,"")}),[h,e,v,o]),(0,f.useEffect)((()=>{if(!v||h!==v.Status.PARSEC_OK||o)return;const e=function(t){switch(t){case"Atari 2600":case"Atari 7800":return _;case"Game Boy":case"Game Boy Color":case"Nintendo Entertainment System":return rt;case"Game Boy Advance":return j;case"Nintendo 64":return H;case"Super Nintendo Entertainment System":return Pt;case"Sega Master System":return yt;case"Sega Game Gear":return lt;case"Sega 32X":case"Sega Genesis":return W;default:return S}}(r),n=t.findIndex((t=>t.type===b.MT.Keyboard)),i=(0,Lt.Z)(((t,r)=>{const o=e.keys[t];if(-1!==n&&o){const t=o(n,r?1:0);if(t){const e=Array.isArray(t)?t:[t];for(const t of e)v.clientSendMessage(t)}}}),(t=>t.key===Ct.Z.Escape)),a=(0,Ot.Z)(((n,r,o)=>{const i=t.findIndex((t=>t.index===n.index));if(-1!==i){for(const t of r.changed){const n=e.axes[t];if(n){const e=n(i,r.values.get(t));if(e){const t=Array.isArray(e)?e:[e];for(const e of t)v.clientSendMessage(e)}}}for(const t of o.changed){const n=e.buttons[t];if(n){const e=n(i,o.values.get(t));if(e){const t=Array.isArray(e)?e:[e];for(const e of t)v.clientSendMessage(e)}}}}}));return()=>{i(),a()}}),[h,t,v,r,o]),(0,f.useEffect)((()=>{y&&(y.volume=Math.max(0,Math.min(s/100,1)))}),[y,s]),(0,f.useEffect)((()=>{if(!v)return;const t=()=>{v.clientGetStatus()===v.Status.PARSEC_OK&&v.clientSendUserData(b.Tk.PauseGame,"")},e=()=>{"hidden"===document.visibilityState&&l&&l()};return window.addEventListener("unload",t,!1),document.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("unload",t,!1),document.removeEventListener("visibilitychange",e,!1)}}),[v,l]),f.createElement("div",{style:a,ref:R})};function _t({edgeGutterX:t,edgeGutterY:e,gameInputDevices:n,gamePlatformTag:r,gamePreventDefault:o,height:i,isStackedAbove:a,paused:s,placement:c,positionSeconds:u,src:g,volume:y,width:m,onDurationMillisecondsChange:v,onPause:w,onPositionMillisecondsChange:S,onError:R,onTick:E}){const P=(0,f.useRef)(1e3*u),[O,L]=(0,f.useState)(null),[C,N]=(0,f.useState)(null),[_,B]=(0,f.useState)(!1);(0,f.useEffect)((()=>{const t=l().CancelToken.source(),e=Date.now();return(0,p.Z)("[Game] Fetching session identifiers..."),l().get(g,{cancelToken:t.token}).then((t=>{(0,p.Z)(`[Game] Fetched session identifiers in ${(Date.now()-e)/1e3}s`);const{MediaContainer:n}=t.data;(null==n?void 0:n.status)===b.qZ.Ok?N({peerID:n.peerID,sessionID:n.sessionID}):L({core:null==n?void 0:n.core,status:null==n?void 0:n.status,progress:null==n?void 0:n.progress})}),(t=>{const e=l().isCancel(t);p.Z.warn(`[Game] Session identifier request error; cancelled? ${e}`),e||L({status:b.qZ.UnknownFailure})})),()=>{t.cancel()}}),[g]),(0,f.useEffect)((()=>{var t;if(O){const e=new Error(function(t,e){const{core:n,progress:r,status:o}=t;switch(parseInt(o,10)){case b.qZ.AccountLinkageMissing:return(0,d.Z)("Parsec account not found. Ensure that your Plex account is linked to a Parsec account.");case b.qZ.SubscriptionRequired:return(0,d.Z)("An active Plex Arcade subscription is required for game playback.");case b.qZ.PlatformMissing:return(0,d.Z)("The core mapping file is missing the {platform} platform.",{platform:e});case b.qZ.PlatformCoreMappingMissing:return n?(0,d.Z)("The core mapping file is missing the {core} core for {platform}.",{core:n,platform:e}):(0,d.Z)("The core mapping file is missing a core for {platform}.",{platform:e});case b.qZ.PlatformCoreMissing:return n?(0,d.Z)("The core mapping file is missing the {core} core.",{core:n}):(0,d.Z)("The core mapping file is missing a core.");case b.qZ.TranscoderDied:return(0,d.Z)("The game transcoder exited unexpectedly.");case b.qZ.InvalidCoreMappingFile:return(0,d.Z)("The core mapping file is invalid.");case b.qZ.MissingCoreMappingFile:case b.qZ.PlatformCoreMappingFileMissingOrInvalid:return(0,d.Z)("The core mapping file is missing or invalid.");case b.qZ.SessionPeerNeverShowedUp:return(0,d.Z)("Unable to start a game session.");case b.qZ.TranscoderDownloading:return(0,d.Z)("The game transcoder is downloading; {progress}% complete.",{progress:r});case b.qZ.PlatformCoreDownloading:return n?(0,d.Z)("The {core} core for {platform} is downloading; {progress}% complete.",{core:n,platform:e,progress:r}):(0,d.Z)("A core for {platform} is downloading; {progress}% complete.",{platform:e,progress:r});case b.qZ.RomMissing:return(0,d.Z)("Media not found.");default:return(0,d.Z)("An unknown error occurred.")}}(O,r));e.category=function(t){switch(parseInt(t,10)){case b.qZ.AccountLinkageMissing:case b.qZ.SubscriptionRequired:return(0,d.Z)("Account");case b.qZ.PlatformMissing:case b.qZ.PlatformCoreMappingMissing:case b.qZ.PlatformCoreMissing:case b.qZ.InvalidCoreMappingFile:case b.qZ.MissingCoreMappingFile:case b.qZ.PlatformCoreMappingFileMissingOrInvalid:return(0,d.Z)("Game Setup");case b.qZ.TranscoderDied:case b.qZ.SessionPeerNeverShowedUp:case b.qZ.UnknownFailure:case b.qZ.TranscoderDownloading:case b.qZ.PlatformCoreDownloading:case b.qZ.RomMissing:return(0,d.Z)("Game Server");default:return(0,d.Z)("Unknown")}}(O.status),e.code=String(null!=(t=O.status)?t:-1),p.Z.error("[Game] Fatal error!",e),R(e)}}),[O,r,R]),(0,f.useEffect)((()=>{if(!_)return;const t=Date.now(),e=window.setInterval((()=>{const e=Date.now()-t,n=P.current+e,r=Math.floor(n/1e3);S(n),E(r)}),1e3);return v(-1),()=>{window.clearInterval(e)}}),[_,S,v,E]);const A=(0,h.Z)(i,m,c,t,e,a);return f.createElement(Nt,{inputDevices:n,paused:s,peerID:null==C?void 0:C.peerID,platformTag:r,preventDefault:o,sessionID:null==C?void 0:C.sessionID,style:A,volume:y,onConnected:B,onError:R,onPause:w})}_t.defaultProps={positionSeconds:0,volume:100};const Bt=_t}}]);