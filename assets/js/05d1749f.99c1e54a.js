"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[832],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||i;return r?o.createElement(m,a(a({ref:t},p),{},{components:r})):o.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9110:(e,t,r)=>{r.d(t,{ZP:()=>s});var o=r(7462),n=(r(7294),r(4137));const i={toc:[]},a="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(a,(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Want your own rollup? ",(0,n.kt)("a",{parentName:"p",href:"https://deploy.astria.org/"},"Deploy it now!")),(0,n.kt)("p",{parentName:"admonition"},"To deploy your own rollup on the Astria Dusknet on your ",(0,n.kt)("strong",{parentName:"p"},"local machine"),", check out the\n",(0,n.kt)("a",{parentName:"p",href:"/docs/local-rollup/introduction/"},"instructions here"),"!"),(0,n.kt)("p",{parentName:"admonition"},"To deploy your own rollup on the Astria Dusknet ",(0,n.kt)("strong",{parentName:"p"},"remotely"),", check out the\n",(0,n.kt)("a",{parentName:"p",href:"/docs/cloud-rollup/digital-ocean/"},"instructions here"),"!")))}s.isMDXComponent=!0},2324:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=r(7462),n=(r(7294),r(4137)),i=r(9110);const a={sidebar_position:1},s="Architecture Overview",c={unversionedId:"overview/architecture/overview",id:"overview/architecture/overview",title:"Architecture Overview",description:"At a high level, Astria breaks out all of the components that are historically",source:"@site/docs/overview/architecture/1-overview.mdx",sourceDirName:"overview/architecture",slug:"/overview/architecture/overview",permalink:"/docs/overview/architecture/overview",draft:!1,editUrl:"https://github.com/astriaorg/docs/edit/main/docs/overview/architecture/1-overview.mdx",tags:[],version:"current",lastUpdatedAt:1705964620,formattedLastUpdatedAt:"Jan 22, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Cross-Rollup Composability",permalink:"/docs/overview/cross-rollup-composability"},next:{title:"Transaction Flow",permalink:"/docs/overview/architecture/transaction-flow"}},l={},p=[],u={toc:p},h="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"architecture-overview"},"Architecture Overview"),(0,n.kt)(i.ZP,{mdxType:"DeploymentsRedirect"}),(0,n.kt)("p",null,"At a high level, Astria breaks out all of the components that are historically\ncombined together in monolithic blockchains into individual components. This\nresults in a modular ecosystem that allows users to swap out components to fit\ntheir specific needs."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Astria Architecture",src:r(829).Z,width:"3840",height:"2160"})),(0,n.kt)("p",null,"Given this architecture, rollups can retrieve blocks from Astria immediately after they\u2019re created, without waiting for the base layer to include them. The economic weight of Astria\u2019s decentralized sequencer set provides confidence that this transaction order is final. This \u201csoft commitment\u201d allows rollups to provide their end users with fast block confirmations. Alternatively, rollups can wait for blocks to be included by the base layer, giving them the strongest finality. All transactions still get this \u201cfirm commitment\u201d at the speed of the base layer, fast pre-confirmations are just an additional feature that Astria provides to rollups if they choose to use it."),(0,n.kt)("p",null,"To generate a new state root, a rollup\u2019s full nodes retrieve a block from either\nAstria or the base layer, check it against Astria\u2019s fork choice rule, filter out\ntransactions from other rollups, and apply the resultant subset of transactions\nto their previous state. Headers can then be generated from this state root and\ngossiped to light clients. Rollups of this style are termed \u2018Lazy Rollups\u2019, a\nnod to the ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lazy_evaluation?ref=blog.astria.org"},"Lazy\nEvaluation"),"\nprinciple found in programming language theory."),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/astria"},"Astria repo here.")))}d.isMDXComponent=!0},829:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/astria-architecture-b0f845ed5b779ba19c5e3d2e9278068b.png"}}]);