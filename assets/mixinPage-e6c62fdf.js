import{_ as r,m as _,n as p,q as f,o as c,k as m,f as o,x as k,T as h,b as C,d as l,e as $,w as v,y as O}from"./index-4ebdf2dd.js";const w={setup(){const t=_(null),e=i=>{if(t.value&&!t.value.contains(i.target)){const s=this.$attrs.onClickOutside;s&&s()}};return p(()=>{document.addEventListener("click",e)}),f(()=>{document.removeEventListener("click",e)}),{container:t}}},M={ref:"container"};function x(t,e,i,s,n,u){return c(),m(h,{to:"body"},[o("div",M,[k(t.$slots,"default")],512)])}const g=r(w,[["render",x]]),B={components:{ClickOutside:g},data(){return{showMenu:!1}}},b={key:0},y=o("li",null,"Option 1",-1),E=o("li",null,"Option 2",-1),N=o("li",null,"Option 3",-1),T=[y,E,N];function V(t,e,i,s,n,u){const a=C("ClickOutside");return c(),l("div",null,[o("button",{onClick:e[0]||(e[0]=d=>n.showMenu=!n.showMenu)},"Toggle Menu"),$(a,{onClickOutside:e[1]||(e[1]=d=>n.showMenu=!1)},{default:v(()=>[n.showMenu?(c(),l("ul",b,T)):O("",!0)]),_:1})])}const q=r(B,[["render",V]]);export{q as default};
