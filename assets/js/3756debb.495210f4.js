"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[110],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,y=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(y,i(i({ref:t},d),{},{components:r})):n.createElement(y,i({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},i="Why Decentralized Sequencers?",s={unversionedId:"overview-of-astria/why-decentralized-sequencers",id:"overview-of-astria/why-decentralized-sequencers",title:"Why Decentralized Sequencers?",description:"To deploy your own rollup on the Astria Dusknet devnet, check out the",source:"@site/docs/overview-of-astria/2-why-decentralized-sequencers.md",sourceDirName:"overview-of-astria",slug:"/overview-of-astria/why-decentralized-sequencers",permalink:"/docs/overview-of-astria/why-decentralized-sequencers",draft:!1,editUrl:"https://github.com/astriaorg/docs/docs/overview-of-astria/2-why-decentralized-sequencers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/overview-of-astria/introduction"},next:{title:"Cross-Rollup Composability",permalink:"/docs/overview-of-astria/cross-rollup-composability"}},c={},l=[],d={toc:l},u="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"why-decentralized-sequencers"},"Why Decentralized Sequencers?"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To deploy your own rollup on the Astria Dusknet devnet, check out the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/dusknet/overview/"},"instructions here"),"!")),(0,o.kt)("p",null,"Centralization is antithetical to crypto. And yet, today\u2019s rollups almost\nuniversally depend on a single sequencer. Centralized sequencers provide fast\ntransaction confirmations and reduce costs by batching and compressing\ntransactions. However, these benefits come at the cost of relying on a single\ntrusted actor for liveness and censorship resistance."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sacrificing decentralization for an improved user experience is an\nunacceptable Faustian bargain.")),(0,o.kt)("p",null,"Astria tackles centralization head-on, providing rollups with a decentralized\nsequencer and even better UX. Astria\u2019s shared sequencer network is a middleware\nblockchain with its own decentralized sequencer set which accepts transactions\nfrom multiple rollups. These transactions are ordered into a single block and\nwritten to the base layer without executing them."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Shared Sequencers",src:r(154).Z,width:"3840",height:"2160"})))}p.isMDXComponent=!0},154:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/shared_sequencer-aef561d11f236d4ade5df4e6b7bcadcf.png"}}]);