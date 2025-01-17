"use strict";(self.webpackChunkplex_web_client=self.webpackChunkplex_web_client||[]).push([[927],{14699:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(22222),o=n(90934);function a(){return(0,r.P1)(((e,{mediaSubscriptionEntityID:t})=>t),o.Z,((e,t)=>t[e]))}},48927:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var r=n(28216),o=n(22222),a=n(99051),l=n(67294),c=n(69605),i=n(2424),s=n(64795),u=n(66102),d=n(50362),p=n(14699),m=n(58368),f=n(5562),b=n(22745),y=n(37084),S=n(70182),v=n(79849),g=n(56510),O=n(89460),w=n(30464),M=n(60528),E=n(58300),P=n(40691),Z=n(13202),h=Object.defineProperty,C=Object.prototype.hasOwnProperty,D=Object.getOwnPropertySymbols,j=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,I=(e,t)=>{for(var n in t||(t={}))C.call(t,n)&&k(e,n,t[n]);if(D)for(var n of D(t))j.call(t,n)&&k(e,n,t[n]);return e};const A=function(e){const t=e,{errorMessage:n,isMediaSubscriptionSaving:r,prefGroups:o,className:a,onModalClose:c,onSubmit:i}=t,s=((e,t)=>{var n={};for(var r in e)C.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&D)for(var r of D(e))t.indexOf(r)<0&&j.call(e,r)&&(n[r]=e[r]);return n})(t,["errorMessage","isMediaSubscriptionSaving","prefGroups","className","onModalClose","onSubmit"]),u=(0,w.Z)(r)&&!r;return(0,l.useEffect)((()=>{u&&!n&&c()}),[n,u,c]),l.createElement(y.ZP,{className:a,onSubmit:i},l.createElement(O.Z,null,(0,f.Z)("Download Options")),n?l.createElement(P.Z,{errorMessage:n}):null,l.createElement(S.Z,null,l.createElement("div",{key:"advanced"},l.createElement(Z.Z,I(I({},s),{prefs:o.advanced})))),l.createElement(v.Z,null,l.createElement(g.Z,null,l.createElement(b.Z,{kind:M.TP,onPress:c},(0,f.Z)("Cancel")),l.createElement(E.Z,{isSpinning:r,kind:M._8,type:"submit"},(0,f.Z)("Save")))))};var x=Object.defineProperty,K=Object.prototype.hasOwnProperty,_=Object.getOwnPropertySymbols,N=Object.prototype.propertyIsEnumerable,T=(e,t,n)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,G=(e,t)=>{for(var n in t||(t={}))K.call(t,n)&&T(e,n,t[n]);if(_)for(var n of _(t))N.call(t,n)&&T(e,n,t[n]);return e},L=(e,t)=>{var n={};for(var r in e)K.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&_)for(var r of _(e))t.indexOf(r)<0&&N.call(e,r)&&(n[r]=e[r]);return n};const U=new Set(["autoDeletionItemPolicyUnwatchedLibrary","autoDeletionItemPolicyWatchedLibrary"]),$={dispatchSyncDownloadModalChangeTemplateMode:a.Jl,dispatchSyncDownloadSaveSubscription:a.Y1},B=(0,r.$j)((function(){return(0,o.P1)(((e,{modal:t})=>t),(0,p.Z)(),(0,o.P1)((e=>e.downloads.states),((e,{modal:t})=>t),((e,t)=>{const{sourceAttr:n,ratingKey:r}=t;return e.some((e=>e.ratingKey===r&&e.sourceAttr===n&&"saving"===e.state))})),d.Z,((e,t,n,r)=>{const{hint:o}=t,a=t.target&&r[t.target.metadata],l=(0,m.Z)(t.prefs,U);return{errorMessage:e.error,hint:o,isMediaSubscriptionSaving:n,prefGroups:l,target:a}}))}),$)((function(e){const t=e,{dispatchSyncDownloadModalChangeTemplateMode:n,dispatchSyncDownloadSaveSubscription:r,modal:o}=t,a=L(t,["dispatchSyncDownloadModalChangeTemplateMode","dispatchSyncDownloadSaveSubscription","modal"]),{ratingKey:c,sourceAttr:i}=o,s=(0,l.useCallback)((e=>{const t=e,{mode:n}=t,o=L(t,["mode"]);r({prefs:o,ratingKey:c,sourceAttr:i})}),[c,i,r]);return l.createElement(A,G(G({},a),{onSubmit:s}))})),J=function(e){const{isOpen:t,modal:n,onSyncDownloadModalClose:r}=e,{error:o,mediaSubscription:a,ratingKey:d,sourceAttr:p}=n,m=(0,l.useCallback)((()=>{r({ratingKey:d,sourceAttr:p})}),[d,p,r]);return l.createElement(i.Z,{isOpen:t,metricsPage:c.B8,onModalClose:m},o&&!a?l.createElement(u.Z,{message:o,onModalClose:m}):l.createElement(s.Z,{onModalClose:m},l.createElement(B,{className:"SyncDownloadModal-formContent-UPIOkn ModalContent-modalContent-1AVOPv",mediaSubscriptionEntityID:a,modal:n,onModalClose:m})))};var V=Object.defineProperty,W=Object.prototype.hasOwnProperty,Y=Object.getOwnPropertySymbols,q=Object.prototype.propertyIsEnumerable,z=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,F=(e,t)=>{for(var n in t||(t={}))W.call(t,n)&&z(e,n,t[n]);if(Y)for(var n of Y(t))q.call(t,n)&&z(e,n,t[n]);return e};const H=(0,o.P1)((function(e){return e.ui.syncDownloadModals}),(e=>({modal:e.find((e=>e.isOpen))}))),Q={onSyncDownloadModalClose:a.yr},R=(0,r.$j)(H,Q)((function(e){return e.modal?l.createElement(J,F(F({},e),{isOpen:!0})):null}))}}]);