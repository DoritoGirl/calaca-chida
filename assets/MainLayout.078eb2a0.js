import{c as $,h as G,a as M,g as J,b as Z}from"./dom.d5b007dc.js";import{j as E,c as g,h as m,a as ee,l as D,p as A,g as C,k as te,w as _,o as T,m as q,n as K,q as O,r as w,s as U,t as k,u as S,b as ne,_ as oe,v as ie,x as le,y as re,z as F,d as j,A as ae}from"./index.1d1ddf3b.js";var se=$({name:"QPageContainer",setup(e,{slots:s}){const{proxy:{$q:n}}=C(),t=ee(D,E);if(t===E)return console.error("QPageContainer needs to be child of QLayout"),E;A(te,!0);const r=g(()=>{const a={};return t.header.space===!0&&(a.paddingTop=`${t.header.size}px`),t.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(a.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),a});return()=>m("div",{class:"q-page-container",style:r.value},G(s.default))}});const ce=[null,document,document.body,document.scrollingElement,document.documentElement];function ue(e,s){let n=J(s);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return ce.includes(n)?window:n}function de(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function fe(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let L;function P(){if(L!==void 0)return L;const e=document.createElement("p"),s=document.createElement("div");M(e,{width:"100%",height:"200px"}),M(s,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),s.appendChild(e),document.body.appendChild(s);const n=e.offsetWidth;s.style.overflow="scroll";let t=e.offsetWidth;return n===t&&(t=s.clientWidth),s.remove(),L=n-t,L}const{passive:B}=O,ve=["both","horizontal","vertical"];var he=$({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ve.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:s}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,r,a;_(()=>e.scrollTarget,()=>{l(),v()});function c(){t!==null&&t();const h=Math.max(0,de(r)),b=fe(r),d={top:h-n.position.top,left:b-n.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const z=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";n.position={top:h,left:b},n.directionChanged=n.direction!==z,n.delta=d,n.directionChanged===!0&&(n.direction=z,n.inflectionPoint=n.position),s("scroll",{...n})}function v(){r=ue(a,e.scrollTarget),r.addEventListener("scroll",i,B),i(!0)}function l(){r!==void 0&&(r.removeEventListener("scroll",i,B),r=void 0)}function i(h){if(h===!0||e.debounce===0||e.debounce==="0")c();else if(t===null){const[b,d]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];t=()=>{d(b),t=null}}}const{proxy:f}=C();return _(()=>f.$q.lang.rtl,c),T(()=>{a=f.$el.parentNode,v()}),q(()=>{t!==null&&t(),l()}),Object.assign(f,{trigger:i,getPosition:()=>n}),K}});function ge(){const e=w(!U.value);return e.value===!1&&T(()=>{e.value=!0}),e}const X=typeof ResizeObserver!="undefined",N=X===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var V=$({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:s}){let n=null,t,r={width:-1,height:-1};function a(l){l===!0||e.debounce===0||e.debounce==="0"?c():n===null&&(n=setTimeout(c,e.debounce))}function c(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:l,offsetHeight:i}=t;(l!==r.width||i!==r.height)&&(r={width:l,height:i},s("resize",r))}}const{proxy:v}=C();if(X===!0){let l;const i=f=>{t=v.$el.parentNode,t?(l=new ResizeObserver(a),l.observe(t),c()):f!==!0&&k(()=>{i(!0)})};return T(()=>{i()}),q(()=>{n!==null&&clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():t&&l.unobserve(t))}),K}else{let f=function(){n!==null&&(clearTimeout(n),n=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",a,O.passive),i=void 0)},h=function(){f(),t&&t.contentDocument&&(i=t.contentDocument.defaultView,i.addEventListener("resize",a,O.passive),c())};const l=ge();let i;return T(()=>{k(()=>{t=v.$el,t&&h()})}),q(f),v.trigger=a,()=>{if(l.value===!0)return m("object",{style:N.style,tabindex:-1,type:"text/html",data:N.url,"aria-hidden":"true",onLoad:h})}}}}),me=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:s,emit:n}){const{proxy:{$q:t}}=C(),r=w(null),a=w(t.screen.height),c=w(e.container===!0?0:t.screen.width),v=w({position:0,direction:"down",inflectionPoint:0}),l=w(0),i=w(U.value===!0?0:P()),f=g(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),h=g(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),b=g(()=>i.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),d=g(()=>i.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function z(o){if(e.container===!0||document.qScrollPrevented!==!0){const u={position:o.position.top,direction:o.direction,directionChanged:o.directionChanged,inflectionPoint:o.inflectionPoint.top,delta:o.delta.top};v.value=u,e.onScroll!==void 0&&n("scroll",u)}}function Y(o){const{height:u,width:p}=o;let y=!1;a.value!==u&&(y=!0,a.value=u,e.onScrollHeight!==void 0&&n("scrollHeight",u),H()),c.value!==p&&(y=!0,c.value=p),y===!0&&e.onResize!==void 0&&n("resize",o)}function I({height:o}){l.value!==o&&(l.value=o,H())}function H(){if(e.container===!0){const o=a.value>l.value?P():0;i.value!==o&&(i.value=o)}}let x=null;const Q={instances:{},view:g(()=>e.view),isContainer:g(()=>e.container),rootRef:r,height:a,containerHeight:l,scrollbarWidth:i,totalWidth:g(()=>c.value+i.value),rows:g(()=>{const o=e.view.toLowerCase().split(" ");return{top:o[0].split(""),middle:o[1].split(""),bottom:o[2].split("")}}),header:S({size:0,offset:0,space:!1}),right:S({size:300,offset:0,space:!1}),footer:S({size:0,offset:0,space:!1}),left:S({size:300,offset:0,space:!1}),scroll:v,animate(){x!==null?clearTimeout(x):document.body.classList.add("q-body--layout-animate"),x=setTimeout(()=>{x=null,document.body.classList.remove("q-body--layout-animate")},155)},update(o,u,p){Q[o][u]=p}};if(A(D,Q),P()>0){let p=function(){o=null,u.classList.remove("hide-scrollbar")},y=function(){if(o===null){if(u.scrollHeight>t.screen.height)return;u.classList.add("hide-scrollbar")}else clearTimeout(o);o=setTimeout(p,300)},R=function(W){o!==null&&W==="remove"&&(clearTimeout(o),p()),window[`${W}EventListener`]("resize",y)},o=null;const u=document.body;_(()=>e.container!==!0?"add":"remove",R),e.container!==!0&&R("add"),ne(()=>{R("remove")})}return()=>{const o=Z(s.default,[m(he,{onScroll:z}),m(V,{onResize:Y})]),u=m("div",{class:f.value,style:h.value,ref:e.container===!0?void 0:r,tabindex:-1},o);return e.container===!0?m("div",{class:"q-layout-container overflow-hidden",ref:r},[m(V,{onResize:I}),m("div",{class:"absolute-full",style:b.value},[m("div",{class:"scroll",style:d.value},[u])])]):u}}});const pe=ie({name:"MainLayout"});function we(e,s,n,t,r,a){const c=ae("router-view");return le(),re(me,{view:"lhr Lpr lfr"},{default:F(()=>[j(se,null,{default:F(()=>[j(c)]),_:1})]),_:1})}var ze=oe(pe,[["render",we]]);export{ze as default};
