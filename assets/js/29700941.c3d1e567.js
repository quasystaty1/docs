"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[439],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8270:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},l="Overview",s={unversionedId:"dusknet/overview",id:"dusknet/overview",title:"Overview",description:"After running the Astria stack locally, the next step is to run a rollup against",source:"@site/docs/dusknet/1-overview.md",sourceDirName:"dusknet",slug:"/dusknet/overview",permalink:"/docs/dusknet/overview",draft:!1,editUrl:"https://github.com/astriaorg/docs/docs/dusknet/1-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Shutting Down the Cluster",permalink:"/docs/dev-cluster/shutdown"},next:{title:"Local Rollup Deployment",permalink:"/docs/dusknet/local-rollup-deployment"}},i={},c=[{value:"Local Dependencies",id:"local-dependencies",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"After running the Astria stack locally, the next step is to run a rollup against\nthe remote Astria network."),(0,a.kt)("p",null,"The primary difference between running a local rollup and one that targets the\nremote devnet, is the configuration of the rollup and creating an account for\nthe Sequencer."),(0,a.kt)("h2",{id:"local-dependencies"},"Local Dependencies"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/dev-cluster/tree/main"},"dev-cluster")," and the main\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/astria"},"astria repo")," repo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:astriaorg/astria.git\ngit clone https://github.com/astriaorg/dev-cluster\n")),(0,a.kt)("p",null,"And install the following tools:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Foundry Cast and Forge tools - ",(0,a.kt)("a",{parentName:"li",href:"https://book.getfoundry.sh/getting-started/installation"},"https://book.getfoundry.sh/getting-started/installation")),(0,a.kt)("li",{parentName:"ul"},"docker - ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"https://docs.docker.com/get-docker/")),(0,a.kt)("li",{parentName:"ul"},"kubectl - ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"https://kubernetes.io/docs/tasks/tools/")),(0,a.kt)("li",{parentName:"ul"},"helm - ",(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"https://helm.sh/docs/intro/install/")),(0,a.kt)("li",{parentName:"ul"},"kind - ",(0,a.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"https://kind.sigs.k8s.io/docs/user/quick-start/#installation")),(0,a.kt)("li",{parentName:"ul"},"just - ",(0,a.kt)("a",{parentName:"li",href:"https://just.systems/man/en/chapter_4.html"},"https://just.systems/man/en/chapter_4.html"))),(0,a.kt)("p",null,"Many of these dependencies are also required for running the local dev-cluster\nif you have previously done that."),(0,a.kt)("p",null,"For reference, the latest component releases that the devnet cluster is running are the\nfollowing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/astriaorg/astria/releases/tag/v0.7.0--conductor"},"conductor v0.7.0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/astriaorg/astria/releases/tag/v0.2.2--composer"},"composer v0.2.2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/astriaorg/astria/releases/tag/v0.5.1--sequencer-relayer"},"sequencer-relayer v0.5.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/astriaorg/astria/releases/tag/v0.4.1--sequencer"},"sequencer\nv0.4.1"))),(0,a.kt)("p",null,"You do not need to download these independently, they are already within the\ndev-cluster repo."),(0,a.kt)("p",null,"Once all of the dependencies have been installed, you can move on to running the\nrollup."))}d.isMDXComponent=!0}}]);