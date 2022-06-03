"use strict";(self.webpackChunkplex_web_client=self.webpackChunkplex_web_client||[]).push([[507],{95678:(e,t,r)=>{r.r(t),r.d(t,{default:()=>R});var n=r(67294),i=r(4844),a=r(15042),o=r(27929),s=r(74309),l=r(1346),c=r(75989),p=r(31446),y=r(37703),m=r(22222),h=r(50362),u=r(59155),d=r(59468),v=r(17524),I=r(69881),f=r(7420),E=r(52918),g=r(40875),b=r(53181),D=r(60428),S=r(5562),Z=r(63312),P=r(66088),w=r(45697),C=r.n(w),k=r(17845);function x(e){const t=e["aria-label"],r=e.className,i=e.style,a={strokeLinejoin:"round",strokeMiterlimit:"1.414",viewBox:"0 0 560 560",xmlns:"http://www.w3.org/2000/svg",id:"plex-icon-toolbar-remove-from-playlist-560"};a["aria-hidden"]=!t,a.style=i,a.className=k.Z.plexIcon+(r?" "+r:"");const o=[n.createElement.apply(n,["path",{d:"m560 504h-336v-44.8h336zm0-134.4h-336v-44.8h336zm-464.965-188.478 63.357-63.357 31.679 31.678-63.357 63.357 63.357 63.357-31.679 31.678-63.357-63.356-63.356 63.356-31.679-31.678 63.357-63.357-63.357-63.357 31.679-31.678zm464.965 54.078h-252v-44.8h252zm0-134.4h-336v-44.8h336z"}].concat([]))];return t&&o.unshift(n.createElement("title",null,t)),n.createElement.apply(n,["svg",a].concat(o))}x.propTypes={"aria-label":C().string,className:C().string,style:C().object};const O=x,j=(0,y.$j)(null,(function(e,t){return{onRemovePress(){e(E.hr())}}}))((function({onRemovePress:e}){return n.createElement(Z.Z,{tooltip:(0,S.Z)("Remove from Playlist"),tooltipAttachment:P.OI,onPress:e},n.createElement(O,null))}));var L=Object.defineProperty,Q=Object.prototype.hasOwnProperty,T=Object.getOwnPropertySymbols,z=Object.prototype.propertyIsEnumerable,K=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const N={dispatchChangeQuickSearchSettings:g.changeQuickSearchSettings};class _ extends n.Component{constructor(){super(...arguments),this.onLibraryChange=()=>{this.props.dispatchChangeQuickSearchSettings({serverEntityID:this.props.serverEntityID,providerEntityID:this.props.providerEntityID,providerIdentifier:v.Y3,directoryID:this.props.librarySectionID})}}componentDidMount(){this.onLibraryChange()}componentDidUpdate(e){this.props.librarySectionID!==e.librarySectionID&&this.onLibraryChange()}componentWillUnmount(){this.props.dispatchChangeQuickSearchSettings({serverEntityID:this.props.serverEntityID,providerEntityID:this.props.providerEntityID,providerIdentifier:null,sectionID:null})}render(){const e=this.props,{dispatchChangeQuickSearchSettings:t}=e,r=((e,t)=>{var r={};for(var n in e)Q.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&T)for(var n of T(e))t.indexOf(n)<0&&z.call(e,n)&&(r[n]=e[n]);return r})(e,["dispatchChangeQuickSearchSettings"]);return n.createElement(D.Z,((e,t)=>{for(var r in t||(t={}))Q.call(t,r)&&K(e,r,t[r]);if(T)for(var r of T(t))z.call(t,r)&&K(e,r,t[r]);return e})({},r))}}const A=(0,f.Z)(_,(function(e){const t=e.ui.playlistPage;return{serverEntityID:t.serverEntityID,metadataKey:t.metadataKey}}),(function(e,t){e(E.tL({serverEntityID:t.serverEntityID,providerEntityID:t.providerEntityID,metadataKey:t.metadataKey})),e(E._Y())})),M=(0,y.$j)((function(e,t){return(0,m.P1)((e=>e.ui.playlistPage),d.Z,b.Z,(0,m.P1)((e=>e.ui.playlistPage.playlist),(e=>e.ui.playlistPage.playlistItemList),u.Z,h.Z,((e,t,r,n)=>{const i=n[e],a=i&&i.playlistType===I.PHOTO,o=t&&t.metadataItems.length;if(a&&o)return n[r[t.metadataItems[0]].metadataItem].librarySectionID})),((e,t,r,n)=>{const{playlist:i,isPlaylistPending:a,playlistError:o}=e,s=!a&&!!o;return{metadataItemEntityID:i,librarySectionID:n,showSpinner:a,showError:s,showNotFoundError:s&&404===o.status,columnAdjustment:t.columnAdjustment,activeSelectionType:r.activeSelectionType,multiSelectToolbarComponent:j}}))}),N)(A);function R(){const{machineIdentifier:e,providerIdentifier:t}=(0,l.Z)(),r=(0,s.Z)(),y=(0,i.Z)(a.cN,e),m=(0,i.Z)(a.MC,t,y);return n.createElement(p.Z,{machineIdentifier:e,providerIdentifier:t},n.createElement(o.Z,{metricsContext:(0,c.Z)(r.context)},n.createElement(M,{machineIdentifier:e,metadataKey:(0,c.Z)(r.key),providerEntityID:m,serverEntityID:y})))}}}]);