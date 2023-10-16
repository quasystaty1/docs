"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[582],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var o=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),l=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return o.createElement(s.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,y=p["".concat(s,".").concat(d)]||p[d]||f[d]||n;return t?o.createElement(y,i(i({ref:r},u),{},{components:t})):o.createElement(y,i({ref:r},u))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<n;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1123:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var o=t(7462),a=(t(7294),t(3905));const n={sidebar_position:6},i="Relayer",c={unversionedId:"overview-of-astria/architecture/relayer",id:"overview-of-astria/architecture/relayer",title:"Relayer",description:"The Relayer's responsibility is to take validated blocks from the sequencer and",source:"@site/docs/overview-of-astria/architecture/6-relayer.md",sourceDirName:"overview-of-astria/architecture",slug:"/overview-of-astria/architecture/relayer",permalink:"/docs/overview-of-astria/architecture/relayer",draft:!1,editUrl:"https://github.com/astriaorg/docs/docs/overview-of-astria/architecture/6-relayer.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"The Astria Sequencer",permalink:"/docs/overview-of-astria/architecture/the-astria-sequencer"},next:{title:"Conductor",permalink:"/docs/overview-of-astria/architecture/conductor"}},s={},l=[],u={toc:l},p="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"relayer"},"Relayer"),(0,a.kt)("p",null,"The Relayer's responsibility is to take validated blocks from the sequencer and\npass them along to both the Conductor and the DA layer. Because the sequencer's\nblock times are much faster than those of the DA, the relayer also collects a\nqueue of ordered sequencer blocks before wrapping them for submission to DA."),(0,a.kt)("p",null,"The individual sequencer blocks are sent immediately to the Conductor to enable\nfast finality for an improved UX and also act as soft commits for the execution\nlayer. The collections of blocks sent to the DA layer are used as a source of\ntruth and are ultimately pulled from the DA to be used as firm commits for\nfinality in the rolllups."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/astria/tree/main/crates/astria-sequencer-relayer"},"Relayer code\nhere.")))}f.isMDXComponent=!0}}]);