import{_ as u}from"./FormContact-f958c143.js";import{L as p}from"./Loader-3f1dcac8.js";import{_ as f,D as C,m as h,E as S,h as b,i as v,r as s,o as a,c,b as n,f as i,d as y,p as F,g as I}from"./index-609adcff.js";import{M as R}from"./index-e77ef847.js";import"./index.esm-9f725ae1.js";const g={data(){return{initialValues:C.getEmptyContact(),isFormSubmitted:!1}},created(){},unmounted(){},computed:{...h(["isUpdatingContacts"]),ICON_ARROW_LEFT(){return S}},methods:{...b(["createContact"]),onReturn(){this.redirectTo("/contact")},onSave(t){this.isFormSubmitted=!0,this.createContact(t)}},watch:{isUpdatingContacts(t){this.isFormSubmitted&&!t&&this.onReturn()}},mixins:[R],components:{FormContact:u,Loader:p,IconHandler:v}},x=t=>(F("data-v-609df24c"),t=t(),I(),t),O={key:0,class:"contact-create-container full main-layout"},L={class:"contact-create"},k={class:"return-btn-container flex justify-start"},E={key:0,class:"submit-modal flex justify-center align-center"},N=x(()=>n("span",null,"Submitting...",-1)),V=[N],A={key:1,class:"loader"};function T(t,r,B,H,o,e){const _=s("IconHandler"),m=s("FormContact"),d=s("Loader");return o.initialValues?(a(),c("section",O,[n("section",L,[n("section",k,[n("button",{class:"return-btn clr-gray-2",onClick:r[0]||(r[0]=(...l)=>e.onReturn&&e.onReturn(...l))},[i(_,{name:e.ICON_ARROW_LEFT},null,8,["name"])])]),i(m,{"initial-values":o.initialValues,onOnSubmit:e.onSave},null,8,["initial-values","onOnSubmit"]),o.isFormSubmitted?(a(),c("section",E,V)):y("",!0)])])):(a(),c("section",A,[i(d)]))}const D=f(g,[["render",T],["__scopeId","data-v-609df24c"]]);export{D as default};
