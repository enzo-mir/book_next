(()=>{var e={};e.id=301,e.ids=[301],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},1952:e=>{e.exports={style:{fontFamily:"'__Work_Sans_e1239b', '__Work_Sans_Fallback_e1239b'",fontStyle:"normal"},className:"__className_e1239b"}},9054:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>h,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c}),r(3380),r(6401),r(2788);var i=r(4442),a=r(6771),n=r(2831),s=r.n(n),o=r(6687),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["about",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3380)),"C:\\Users\\mirag\\OneDrive\\Bureau\\Codage\\codage\\Portfolio\\portfolio\\app\\about\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,2851))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,6401)),"C:\\Users\\mirag\\OneDrive\\Bureau\\Codage\\codage\\Portfolio\\portfolio\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,2788)),"C:\\Users\\mirag\\OneDrive\\Bureau\\Codage\\codage\\Portfolio\\portfolio\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,2851))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\mirag\\OneDrive\\Bureau\\Codage\\codage\\Portfolio\\portfolio\\app\\about\\page.tsx"],u="/about/page",h={require:r,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/about/page",pathname:"/about",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7540:(e,t,r)=>{Promise.resolve().then(r.bind(r,7420))},7951:(e,t,r)=>{Promise.resolve().then(r.bind(r,754)),Promise.resolve().then(r.bind(r,2337))},8988:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9326,23)),Promise.resolve().then(r.t.bind(r,5342,23)),Promise.resolve().then(r.t.bind(r,9061,23)),Promise.resolve().then(r.t.bind(r,3373,23)),Promise.resolve().then(r.t.bind(r,6168,23)),Promise.resolve().then(r.t.bind(r,3565,23))},2694:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6745,23))},7420:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var i=r(5833),a=r(7729);let n=JSON.parse('[{"id":0,"title":"the begining","description":"This is the first time I code, it was C language with Openclassroom","img":"/start.png","date":"2019"},{"id":1,"title":"dev web","description":"Introduce in the world of world wide web with basics Html and Css learnt with MDN and W3School","img":"/dev.png","date":"2020"},{"id":2,"title":"start fundamentals","description":"Started my first online formation with Studi and start some Js","img":"/fundamental.png","date":"2022"},{"id":3,"title":"getting deeper","description":"Choose a front-end framework which is react/vite (with his ecosystem)","img":"/deeper.png","date":"2023"},{"id":4,"title":"typesafe","description":"Discover typescript, zod and now I have to use these two fundamentals in all of my projects","img":"/type.png","date":"2024"},{"id":5,"title":"fullstack","description":"Try to learn some of back-end dev with express, fastify and adonisJs and have the correct methods of server dev","img":"/fullstack.png","date":"2024"}]');var s=r(2475),o=r.n(s),l=r(1952),c=r.n(l),d=r(3889),u=Object.defineProperty,h=new Map,p=new WeakMap,m=0,f=void 0;function g({threshold:e,delay:t,trackVisibility:r,rootMargin:i,root:n,triggerOnce:s,skip:o,initialInView:l,fallbackInView:c,onChange:d}={}){var u;let[g,x]=a.useState(null),v=a.useRef(),[b,_]=a.useState({inView:!!l,entry:void 0});v.current=d,a.useEffect(()=>{let a;if(!o&&g)return a=function(e,t,r={},i=f){if(void 0===window.IntersectionObserver&&void 0!==i){let a=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}let{id:a,observer:n,elements:s}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return`${t}_${"root"===t?(r=e.root)?(p.has(r)||(m+=1,p.set(r,m.toString())),p.get(r)):"0":e[t]}`}).toString(),r=h.get(t);if(!r){let i;let a=new Map,n=new IntersectionObserver(t=>{t.forEach(t=>{var r;let n=t.isIntersecting&&i.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=n),null==(r=a.get(t.target))||r.forEach(e=>{e(n,t)})})},e);i=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:n,elements:a},h.set(t,r)}return r}(r),o=s.get(e)||[];return s.has(e)||s.set(e,o),o.push(t),n.observe(e),function(){o.splice(o.indexOf(t),1),0===o.length&&(s.delete(e),n.unobserve(e)),0===s.size&&(n.disconnect(),h.delete(a))}}(g,(e,t)=>{_({inView:e,entry:t}),v.current&&v.current(e,t),t.isIntersecting&&s&&a&&(a(),a=void 0)},{root:n,rootMargin:i,threshold:e,trackVisibility:r,delay:t},c),()=>{a&&a()}},[Array.isArray(e)?e.toString():e,g,n,i,s,o,r,c,t]);let j=null==(u=b.entry)?void 0:u.target,w=a.useRef();g||!j||s||o||w.current===j||(w.current=j,_({inView:!!l,entry:void 0}));let y=[x,b.inView,b.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}a.Component;let x=({data:e})=>{let{ref:t,inView:r}=g({threshold:0});return(0,i.jsxs)("article",{className:o().article,"data-visible":r,ref:t,children:[i.jsx(d.default,{src:e.img,alt:e.title,width:60,height:60}),(0,i.jsxs)("aside",{children:[i.jsx("h1",{children:e.title}),i.jsx("p",{className:c().className,children:e.description})]})]},e.id)};var v=r(5222);let b=()=>{let{ref:e,inView:t}=g({threshold:0});return(0,i.jsxs)("main",{className:o().main,ref:e,children:[i.jsx(v.E.h1,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},children:"Discover me"}),(0,i.jsxs)("section",{className:o().timeline_section,children:[i.jsx("hr",{"data-visible":t}),i.jsx("div",{children:n.map(e=>i.jsx(x,{data:e},e.id))}),i.jsx("aside",{})]})]})}},754:(e,t,r)=>{"use strict";r.d(t,{default:()=>O});var i,a,n,s,o,l,c,d=r(5833),u=r(930),h=r.n(u),p=r(7729),m=r(7718);function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}let g=function(e){return m.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:40,height:39,fill:"none"},e),i||(i=m.createElement("g",{clipPath:"url(#github_svg__a)"},m.createElement("path",{fill:"#000",fillRule:"evenodd",d:"M20.017.5C8.947.5 0 9.208 0 19.982c0 8.611 5.733 15.901 13.687 18.481.994.194 1.358-.42 1.358-.935 0-.452-.032-2-.032-3.613-5.568 1.162-6.728-2.322-6.728-2.322-.895-2.258-2.22-2.838-2.22-2.838-1.823-1.194.132-1.194.132-1.194 2.022.13 3.082 2 3.082 2 1.79 2.967 4.673 2.129 5.833 1.613.165-1.258.696-2.129 1.26-2.613-4.442-.451-9.114-2.128-9.114-9.612 0-2.129.795-3.87 2.054-5.225-.199-.483-.895-2.483.2-5.16 0 0 1.69-.517 5.5 2a20 20 0 0 1 5.005-.646c1.69 0 3.413.226 5.003.645 3.812-2.516 5.502-2 5.502-2 1.094 2.678.397 4.678.199 5.161 1.292 1.355 2.054 3.096 2.054 5.225 0 7.483-4.672 9.128-9.146 9.612.729.613 1.358 1.774 1.358 3.613 0 2.612-.032 4.709-.032 5.354 0 .516.364 1.129 1.358.935C34.267 35.883 40 28.593 40 19.982 40.033 9.208 31.052.5 20.017.5",clipRule:"evenodd"}))),a||(a=m.createElement("defs",null,m.createElement("clipPath",{id:"github_svg__a"},m.createElement("path",{fill:"#fff",d:"M0 .5h40v38H0z"})))))};function x(){return(x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}let v=function(e){return m.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:40,height:39,fill:"none"},e),n||(n=m.createElement("rect",{width:40,height:38,y:.5,fill:"#000",rx:19})),s||(s=m.createElement("path",{fill:"#fff",d:"M20.142 10.5a.616.616 0 0 0-.598.614v11.673a.608.608 0 1 0 1.22 0V11.114a.62.62 0 0 0-.384-.57.6.6 0 0 0-.238-.044m9.23 3.497a.6.6 0 0 0-.23.053l-5.236 2.352a.61.61 0 0 0-.359.56.62.62 0 0 0 .36.56l5.235 2.361a.61.61 0 0 0 .845-.432.62.62 0 0 0-.348-.688l-3.988-1.8 3.988-1.793a.614.614 0 0 0-.266-1.173m-18.75 4.221a.606.606 0 0 0-.609.488.6.6 0 0 0 .006.28c1.447 5.601 6.48 9.514 12.237 9.514a.616.616 0 0 0 0-1.228 11.37 11.37 0 0 1-6.985-2.397 11.5 11.5 0 0 1-4.072-6.197.614.614 0 0 0-.578-.46"})))};function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}let _=function(e){return m.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:40,height:41,fill:"none"},e),o||(o=m.createElement("rect",{width:40,height:40,y:.5,fill:"#000",rx:20})),l||(l=m.createElement("path",{stroke:"#fff",strokeLinejoin:"round",strokeWidth:2,d:"m28.987 11.649-6.243 17.838-3.568-8.027-8.027-3.568z"})),c||(c=m.createElement("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M28.859 11.942 11.442 29.358"})))};var j=r(6323),w=r.n(j),y=r(8949),P=r(2328);let O=()=>{let e=(0,p.useRef)(null),t=(0,P.usePathname)().replace("/","");function r(t){e.current&&t.target===t.currentTarget&&(e.current.checked=!1)}return d.jsx(d.Fragment,{children:(0,d.jsxs)("header",{className:w().header,onPointerDown:r,onMouseDown:r,children:[d.jsx("nav",{className:w().nav,children:(0,d.jsxs)("ul",{children:[d.jsx("li",{children:d.jsx("a",{href:"/portfolio","aria-current":"portfolio"===t,className:h().className,children:"PORTFOLIO"})}),d.jsx("li",{children:d.jsx("a",{href:"/about","aria-current":"about"===t,className:h().className,children:"ABOUT ME"})})]})}),d.jsx("h1",{children:d.jsx("a",{href:"/",children:"miraglio enzo"})}),(0,d.jsxs)("ul",{className:w().socials,children:[d.jsx("li",{children:d.jsx(y.default,{href:"https://github.com/enzo-mir",target:"_blank",children:d.jsx(g,{})})}),d.jsx("li",{children:d.jsx(y.default,{href:"https://www.frontendmentor.io/profile/enzo-mir",target:"_blank",children:d.jsx(v,{})})}),d.jsx("li",{children:d.jsx(y.default,{href:"mailto:miraglioenzo93@gmail.com",target:"_blank",children:d.jsx(_,{})})})]}),(0,d.jsxs)("label",{htmlFor:"check",className:w().burger,children:[d.jsx("input",{ref:e,type:"checkbox",id:"check"}),d.jsx("span",{}),d.jsx("span",{}),d.jsx("span",{})]})]})})}},2337:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var i=r(5833);r(7729);var a=r(9219),n=r.n(a),s=r(5222);let o=({children:e})=>i.jsx(s.E.div,{initial:{clipPath:"circle(0% at 50% 0)"},animate:{clipPath:"circle(150% at 50% 0)",transition:{duration:.5,ease:[0,-.02,1,.41]}},exit:{clipPath:"circle(0% at 50% 0)"},className:n().wrapper,children:e})},2475:e=>{e.exports={main:"about_main__kog3m",timeline_section:"about_timeline_section__s86ee",article:"about_article__g_1Gc"}},7365:e=>{e.exports={footer:"footer_footer___oDHx"}},6323:e=>{e.exports={header:"header_header__k8WAm",nav:"header_nav___Lcp4",socials:"header_socials__hSeRB",burger:"header_burger__Luklk"}},9219:e=>{e.exports={wrapper:"inner_wrapper__KGz83"}},9564:e=>{e.exports={main:"not_found_main__XPJur"}},3380:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>s,__esModule:()=>n,default:()=>o});var i=r(4945);let a=(0,i.createProxy)(String.raw`C:\Users\mirag\OneDrive\Bureau\Codage\codage\Portfolio\portfolio\app\about\page.tsx`),{__esModule:n,$$typeof:s}=a;a.default;let o=(0,i.createProxy)(String.raw`C:\Users\mirag\OneDrive\Bureau\Codage\codage\Portfolio\portfolio\app\about\page.tsx#default`)},6401:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b,metadata:()=>v});var i=r(5356),a=r(7843),n=r.n(a);r(3946);var s=r(4945);let o=(0,s.createProxy)(String.raw`C:\Users\mirag\OneDrive\Bureau\Codage\codage\Portfolio\portfolio\app\components\header.tsx`),{__esModule:l,$$typeof:c}=o;o.default;let d=(0,s.createProxy)(String.raw`C:\Users\mirag\OneDrive\Bureau\Codage\codage\Portfolio\portfolio\app\components\header.tsx#default`);r(8089);var u=r(7365),h=r.n(u);let p=()=>(0,i.jsxs)("footer",{className:h().footer,children:[(0,i.jsxs)("p",{children:["created by Enzo Miraglio, designed by ",i.jsx("a",{href:"#",children:"@elodiecarr"})]}),i.jsx("p",{children:"\xa9copyright 2024 - Enzo Miraglio"})]}),m=(0,s.createProxy)(String.raw`C:\Users\mirag\OneDrive\Bureau\Codage\codage\Portfolio\portfolio\app\inner.tsx`),{__esModule:f,$$typeof:g}=m;m.default;let x=(0,s.createProxy)(String.raw`C:\Users\mirag\OneDrive\Bureau\Codage\codage\Portfolio\portfolio\app\inner.tsx#default`),v={title:"Home page - Miraglio enzo",description:"hi i'm a front end web developer, hire me out !"};function b({children:e}){return i.jsx("html",{lang:"en",children:(0,i.jsxs)("body",{className:n().className,children:[i.jsx(d,{}),i.jsx(x,{children:e}),i.jsx(p,{})]})})}},2788:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var i=r(5356),a=r(4609),n=r.n(a),s=r(4832);r(8089);var o=r(9564),l=r.n(o);let c=()=>(0,i.jsxs)("main",{className:l().main,children:[i.jsx("h1",{className:n().className,children:"This page could not be found"}),i.jsx(s.default,{href:"/",className:n().className,children:"Go back home"})]})},2851:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var i=r(6403);let a=e=>[{type:"image/x-icon",sizes:"64x64",url:(0,i.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},3946:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[675,33,889],()=>r(9054));module.exports=i})();