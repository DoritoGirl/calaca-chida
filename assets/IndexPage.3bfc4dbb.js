import{u as m,a as f,Q as h,b as x}from"./QBtn.cd0a656e.js";import{c as S,d as g}from"./dom.d5b007dc.js";import{c as d,h as n,_ as y,x as r,D as c,d as u,z as _,E as v,G as o}from"./index.1d1ddf3b.js";var C=S({name:"QAvatar",props:{...m,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:t}){const l=f(e),i=d(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),a=d(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const s=e.icon!==void 0?[n(h,{name:e.icon})]:void 0;return n("div",{class:i.value,style:l.value},[n("div",{class:"q-avatar__content row flex-center overflow-hidden",style:a.value},g(t.default,s))])}}}),z="/assets/19654.f360e496.jpg",k="/assets/Skull_Trumpet.30b26611.mp4";const p={name:"IndexPage",data(){return{calaca:!1}},methods:{activateCalca(){return this.calaca=!0}}},q={class:"main"},B={key:0,class:"skull-btn"},b=o("h1",null,"Click here to party",-1),Q=o("img",{src:z},null,-1),w={key:1,class:"vid"},I=o("video",{loop:"",width:" 320",height:"240",controls:"",autoplay:"",volume:"0.45"},[o("source",{src:k,type:"video/mp4"})],-1),P=[I];function $(e,t,l,i,a,s){return r(),c("div",q,[a.calaca==!1?(r(),c("div",B,[b,u(x,{round:"",onClick:t[0]||(t[0]=N=>s.activateCalca())},{default:_(()=>[u(C,{size:"250px"},{default:_(()=>[Q]),_:1})]),_:1})])):v("",!0),a.calaca===!0?(r(),c("div",w,P)):v("",!0)])}var j=y(p,[["render",$]]);export{j as default};
