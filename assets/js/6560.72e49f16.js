"use strict";(self.webpackChunkawesome_idea=self.webpackChunkawesome_idea||[]).push([[6560],{8926:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(6252),a=n(2262),s=n(2119);const r=(0,o.aZ)({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(t){const e=(0,s.yj)(),n=(0,a.iH)();(0,o.YP)((()=>e.path),(()=>n.value.focus()));const r=({target:t})=>{const e=document.querySelector(t.hash);if(e){const t=()=>{e.removeAttribute("tabindex"),e.removeEventListener("blur",t)};e.setAttribute("tabindex","-1"),e.addEventListener("blur",t),e.focus(),window.scrollTo(0,0)}};return()=>[(0,o.h)("span",{ref:n,tabindex:"-1"}),(0,o.h)("a",{href:`#${t.content}`,class:"skip-link sr-only",onClick:r},"Skip to content")]}})},6560:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});var o=n(6252),a=n(2119),s=n(7621),r=n(8926),u=n(203),c=n(5205);const i=(0,o.aZ)({name:"404",setup(){var t;const e=(0,s.I)(),n=(0,c.X6)(),i=()=>{const t=n.value.routeLocales["404msg"];return t[Math.floor(Math.random()*t.length)]},{navigate:l}=(0,a.nB)({to:null!==(t=n.value.home)&&void 0!==t?t:e.value});return()=>[(0,o.h)(r.Z),(0,o.h)((0,o.up)("CommonWrapper"),{sidebar:!1},(()=>(0,o.h)("main",{class:"page not-found",id:"main-content"},[(0,o.h)(u.u),(0,o.h)("blockquote",i()),(0,o.h)("button",{class:"action-button",onClick:()=>{window.history.go(-1)}},n.value.routeLocales.back),(0,o.h)("button",{class:"action-button",onClick:()=>l()},n.value.routeLocales.home)])))]}})}}]);