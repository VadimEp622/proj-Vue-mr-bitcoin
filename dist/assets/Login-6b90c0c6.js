import{c as f,a as h,F as g,E as v,b as x}from"./index.esm-9f725ae1.js";import{_ as m,o as _,e as S,w as b,u as o,b as t,f as i,p as u,g as p,m as y,h as $,r as L,c as F}from"./index-609adcff.js";import{M as V}from"./index-e77ef847.js";const w=e=>(u("data-v-63ac7f17"),e=e(),p(),e),I={class:"form-login flex gap-10"},B={class:"name"},j={class:"error-container"},k=w(()=>t("button",null,"Login",-1)),E={__name:"FormLogin",props:{initialValues:Object},emits:["onSubmit"],setup(e,{emit:c}){const r=f({name:h().required().min(1).max(20).matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,"Name can only contain Latin letters.")}),n=e.initialValues,s=c;function a(l){s("onSubmit",l)}return(l,z)=>(_(),S(o(x),{class:"form-login-container flex justify-center",onSubmit:a,"validation-schema":o(r),"initial-values":o(n)},{default:b(()=>[t("section",I,[t("section",B,[i(o(g),{name:"name",type:"text",placeholder:"Enter name",autocomplete:"off"}),t("section",j,[i(o(v),{class:"error clr-gray-0",name:"name"})])]),k])]),_:1},8,["validation-schema","initial-values"]))}},M=m(E,[["__scopeId","data-v-63ac7f17"]]);const O={data(){return{initialValues:{name:"Sam Sung"}}},computed:{...y(["user"])},methods:{...$(["login"]),onSubmit(e){this.login(e.name)}},watch:{user(e){e&&Object.keys(e).length>0&&this.redirectTo("/")}},mixins:[V],components:{FormLogin:M}},C=e=>(u("data-v-3134a414"),e=e(),p(),e),N={class:"login-page full"},A={class:"greeting flex column justify-center height-100-percent"},D=C(()=>t("h2",{class:"text-align-center clr-white"},"Welcome to Mr. Bitcoin!",-1));function q(e,c,r,d,n,s){const a=L("FormLogin");return _(),F("section",N,[t("section",A,[D,i(a,{"initial-values":n.initialValues,onOnSubmit:s.onSubmit},null,8,["initial-values","onOnSubmit"])])])}const Z=m(O,[["render",q],["__scopeId","data-v-3134a414"]]);export{Z as default};
