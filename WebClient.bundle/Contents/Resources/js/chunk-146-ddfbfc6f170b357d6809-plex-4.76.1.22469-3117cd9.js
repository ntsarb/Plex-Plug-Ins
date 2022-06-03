"use strict";(self.webpackChunkplex_web_client=self.webpackChunkplex_web_client||[]).push([[146],{20011:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var r=n(94184),o=n.n(r),a=n(67294),i=n(28216),s=n(5642),d=n(86832),g=n(14093),l=n(75691),u=n(22222);const A=(0,u.P1)((function(e){return e.deviceSettings}),(e=>e.remotePlayer),((e,t)=>t?t.volume:e.volume));var c=n(84105),E=n(77502),f=n(21366);const m=["af","am","ar","ar_eg","ar_sa","eu","be","bn","bg","ca","zh","zh_cn","zh_hk","zh_tw","hr","cs","da","nl","en","en_au","en_ca","en_gb","en_ie","en_in","en_sg","en_za","et","fa","fil","fi","fr","fr_ca","fr_ch","gl","de","de_at","el","gu","he","hi","hu","is","id","it","ja","kn","ko","lo","lv","ln","lt","ms","ml","mr","no","pl","pt","pt_br","pt_pt","ro","ru","sr","sk","sl","es","es_419","es_ar","es_cl","es_co","es_cr","es_do","es_ec","es_sv","es_gt","es_hn","es_mx","es_ni","es_pa","es_pe","es_pr","es_py","es_us","es_uy","es_ve","sw","sv","gsw","tl","ta","te","th","tr","uk","ur","vi","zu"],p=(0,u.P1)(f.Z,(e=>function(e){const t=e.toLowerCase().replace(/-/g,"_");return m.includes(t)?t:"en"}(e)));var v=n(20222),w=n(51359),y=n(20683);function T(e){const t=Math.round(e%3600),n=Math.floor(e/3600),r=Math.floor(t/60),o=t%60;return`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")} (${e}s)`}function M(e){return t=>{var n,r;const o=t,a=t;try{const e=null==(n=o.getAdData)?void 0:n.call(o),t=(null==e?void 0:e.adError)||(null==(r=a.getError)?void 0:r.call(a));if(t){const e={message:t.getMessage(),errorCode:t.getErrorCode(),vastErrorCode:t.getVastErrorCode()};d.Z.error("[IMA SDK] Error: %s from event %s: %o",t.getType(),o.type,e)}else(0,w.Z)()&&function(e){var t,n;const r=null==(t=e.getAd)?void 0:t.call(e),o=null==(n=e.getAdData)?void 0:n.call(e),a=null==r?void 0:r.getAdPodInfo();if(a)try{const t={adPosition:a.getAdPosition(),isBumper:a.getIsBumper(),maxDuration:a.getMaxDuration(),podIndex:a.getPodIndex(),timeOffset:a.getTimeOffset(),totalAds:a.getTotalAds()};(0,d.Z)("[IMA SDK] Event %s (adPodInfo): %o",e.type,t)}catch(e){d.Z.warn("[IMA SDK] Cannot log adPodInfo",null==e?void 0:e.message)}if(o&&(0,d.Z)("[IMA SDK] Event %s (adData): %o",e.type,o),r)try{const t={adSystem:r.getAdSystem(),advertiserName:r.getAdvertiserName(),apiFramework:r.getApiFramework(),contentType:r.getContentType(),creativeAdId:r.getCreativeAdId(),creativeId:r.getCreativeId(),dealId:r.getDealId(),description:r.getDescription(),duration:r.getDuration(),height:r.getHeight(),mediaUrl:r.getMediaUrl(),minSuggestedDuration:r.getMinSuggestedDuration(),skipTimeOffset:r.getSkipTimeOffset(),surveyUrl:r.getSurveyUrl(),title:r.getTitle(),traffickingParameters:r.getTraffickingParameters(),traffickingParametersString:r.getTraffickingParametersString(),uiElements:r.getUiElements(),universalAdIdRegistry:r.getUniversalAdIdRegistry(),universalAdIdValue:r.getUniversalAdIdValue(),vastMediaHeight:r.getVastMediaHeight(),vastMediaWidth:r.getVastMediaWidth(),width:r.getWidth(),wrapperAdIds:r.getWrapperAdIds(),wrapperAdSystems:r.getWrapperAdSystems(),wrapperCreativeIds:r.getWrapperCreativeIds(),isLinear:r.isLinear()};(0,d.Z)("[IMA SDK] Event %s (ad):",e.type,t)}catch(e){d.Z.warn("[IMA SDK] Cannot log ad info",null==e?void 0:e.message)}}(o)}catch(e){d.Z.warn("[IMA SDK] Event:",null==o?void 0:o.type,null==e?void 0:e.message)}e(t)}}const S=void 0,I=null;function _({edgeGutterX:e,edgeGutterY:t,height:n,isFullscreen:r,isIdle:u,isMiniPlayer:f,isStackedAbove:m,placement:_,playerType:D,statusOverlayClassName:h,url:Z,width:C,onAdChange:L,onPositionMillisecondsChange:P}){const R=(0,i.I0)(),[O,k]=(0,a.useState)(S),[N,b]=(0,a.useState)(),[U,V]=(0,a.useState)(null),[x,F]=(0,c.Z)(),[G,W]=(0,a.useState)(g.Ho),[z,H]=(0,a.useState)(g.Mf),[K,B]=(0,a.useState)(g.pN),$=(0,i.v9)((0,E.Z)(D,"durationSeconds")),j=(0,i.v9)((0,E.Z)(D,"isPaused")),Q=(0,i.v9)(p),q=(0,i.v9)((0,E.Z)(D,"positionSeconds")),Y=(0,i.v9)(A),X=function(e,t,n=!0){const r=(0,a.useRef)({currentTime:e,duration:t});return(0,a.useEffect)((()=>{n&&e>=0&&(r.current.currentTime=e)}),[n,e]),(0,a.useEffect)((()=>{n&&t>=0&&(r.current.duration=t)}),[n,t]),r.current}(q,$,!u),J=function(e,t,n,r){const[o,i]=(0,a.useState)();return(0,a.useEffect)((()=>{if(!t)return;const o=M((e=>{const t=e.getError();r(new Error(t.getMessage()))})),a=M((e=>{(0,w.Z)()&&(0,d.Z)("[IMA] Creating AdsManager"),i(e.getAdsManager(n))})),s=new window.google.ima.AdsRequest;return s.adTagUrl=y.Z.join(e,{vpaid:1}),s.forceNonLinearFullSlot=!0,s.linearAdSlotWidth=1280,s.linearAdSlotHeight=720,s.setAdWillAutoPlay(!0),s.setAdWillPlayMuted(!1),t.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR,o),t.addEventListener(window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,a),(0,w.Z)()&&(0,d.Z)("[IMA] Loading ads:",s.adTagUrl),t.requestAds(s),()=>{t.removeEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR,o),t.removeEventListener(window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,a)}}),[t,n,e,r]),(0,a.useEffect)((()=>{if(!o)return;const e=M((t=>{o.removeEventListener(t.type,e),(0,w.Z)()&&(0,d.Z)("[IMA] Enabling preloading");const n=new window.google.ima.AdsRenderingSettings;n.enablePreloading=!0,o.updateAdsRenderingSettings(n)}));return(0,w.Z)()&&(0,d.Z)("[IMA] Starting AdsManager"),(0,w.Z)()&&(0,d.Z)("[IMA] CuePoints:",o.getCuePoints().map(T).join(", ")),o.addEventListener(window.google.ima.AdEvent.Type.LOADED,e),o.init(1280,720,window.google.ima.ViewMode.NORMAL),o.start(),()=>{o.removeEventListener(window.google.ima.AdEvent.Type.LOADED,e),(0,w.Z)()&&(0,d.Z)("[IMA] Destroying AdsManager"),o.destroy()}}),[o]),o}(Z,function(e){const[t,n]=(0,a.useState)();return(0,a.useEffect)((()=>{e&&((0,w.Z)()&&(0,d.Z)("[IMA] Creating AdsLoader"),n(new window.google.ima.AdsLoader(e)))}),[e]),(0,a.useEffect)((()=>()=>{t&&((0,w.Z)()&&(0,d.Z)("[IMA] Destroying AdsLoader"),t.destroy())}),[t]),t}(function(e){const[t,n]=(0,a.useState)();return(0,a.useEffect)((()=>{e&&((0,w.Z)()&&(0,d.Z)("[IMA] Creating AdDisplayContainer"),n(new window.google.ima.AdDisplayContainer(e)))}),[e]),(0,a.useEffect)((()=>(t&&((0,w.Z)()&&(0,d.Z)("[IMA] Initializing AdDisplayContainer"),t.initialize()),()=>{t&&((0,w.Z)()&&(0,d.Z)("[IMA] Destroying AdDisplayContainer"),t.destroy())})),[t]),t}(U)),X,b),ee=(0,a.useCallback)((e=>{V(e)}),[]);(0,a.useEffect)((()=>{(0,w.Z)()&&(0,d.Z)("[IMA] Setting locale",Q),window.google.ima.settings.setLocale(Q)}),[Q]),(0,a.useEffect)((()=>{O!==S&&(O===I?(W(g.Ho),H(g.Mf),b(void 0),B(g.pN)):(W(O.displayIndex),H(O.displayTotal)),(0,w.Z)()&&(0,d.Z)("[IMA] Changing ad to",O),L(O))}),[O,L]),(0,a.useEffect)((()=>{N&&(d.Z.error("[IMA] Error",...function(e){if(function(e){const t=e;return!!(t.getMessage||t.getErrorCode||t.getVastErrorCode)}(e)){const t=e;let n,r,o;try{r=t.getMessage()}catch(e){d.Z.error("[IMA] error getting message from AdError",e.message)}try{n=t.getErrorCode()}catch(e){d.Z.error("[IMA] error getting error code from AdError",e.message)}try{o=t.getVastErrorCode()}catch(e){d.Z.error("[IMA] error getting VAST error code from AdError",e.message)}return[r||"Unknown error",`(IMA:${n}, VAST:${o})`]}return[e.message]}(N)),O===I?L(I):k(I))}),[O,N,L]),(0,a.useEffect)((()=>{null==J||J.setVolume(Y/100)}),[J,Y]),(0,a.useEffect)((()=>{null==J||J.resize(F.width||1280,F.height||720,r?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL)}),[J,r,F]),(0,a.useEffect)((()=>{j?null==J||J.pause():null==J||J.resume()}),[J,j]),(0,a.useEffect)((()=>{const e=M((e=>{var t;const n=e.getAd(),r=null==n?void 0:n.getAdPodInfo();switch(e.type){case window.google.ima.AdEvent.Type.AD_BUFFERING:R((0,s.n9)({playerType:D,isBuffering:!0}));break;case window.google.ima.AdEvent.Type.AD_PROGRESS:R((0,s.n9)({playerType:D,isBuffering:!1})),P(1e3*e.getAdData().currentTime);break;case window.google.ima.AdEvent.Type.ALL_ADS_COMPLETED:case window.google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:k(I);break;case window.google.ima.AdEvent.Type.LOADED:B(null!=(t=null==r?void 0:r.getTimeOffset())?t:-1);break;case window.google.ima.AdEvent.Type.STARTED:j&&(null==J||J.pause()),k(function(e){if(!e)return null;const t=e.getAdPodInfo();return{clicksThrough:!0,displayIndex:t.getAdPosition(),displayTotal:t.getTotalAds(),duration:e.getDuration(),height:e.getHeight(),mimeType:e.getContentType(),timeOffset:t.getTimeOffset(),width:e.getWidth()}}(n));break;case window.google.ima.AdEvent.Type.LOG:{const t=e.getAdData().adError;t&&1009===t.getErrorCode()&&(d.Z.warn("[IMA] Manually handling empty VAST"),b(t));break}}})),t=[window.google.ima.AdEvent.Type.AD_BUFFERING,window.google.ima.AdEvent.Type.AD_PROGRESS,window.google.ima.AdEvent.Type.ALL_ADS_COMPLETED,window.google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,window.google.ima.AdEvent.Type.LOADED,window.google.ima.AdEvent.Type.LOG,window.google.ima.AdEvent.Type.STARTED,window.google.ima.AdEvent.Type.COMPLETE,window.google.ima.AdEvent.Type.IMPRESSION];return t.forEach((t=>{null==J||J.addEventListener(t,e)})),()=>{t.forEach((t=>{null==J||J.removeEventListener(t,e)}))}}),[J,R,j,P,D]),(0,a.useEffect)((()=>{const e=M((e=>{b(e.getError())}));return null==J||J.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR,e),()=>{null==J||J.removeEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR,e)}}),[J]);const te=(0,l.Z)(n,C,_,e,t,m);return a.createElement("div",{style:te},a.createElement("div",{ref:(0,v.Z)(ee,x),className:o()("ImaPlayer-adContainer-pyxPYF",O===I?"ImaPlayer-hasNoAd-PDk1sC":"ImaPlayer-hasAd-kF60Qd")}),f?null:a.createElement(g.ZP,{className:h,displayIndex:G,displayTotal:z,isAdCountdownTimerEnabled:!1,secondsUntilAd:K-q}))}}}]);