import{_ as u,m,J as p,a as h,L as C,k as f,r as a,o as s,c as i,e as n,g as r,f as I,j as b,p as S,h as y}from"./index-d7260935.js";import{_ as v}from"./FormContact-e2e37dca.js";import{M as F}from"./index-e77ef847.js";import"./index.esm-bc068e69.js";const g={data(){return{initialValues:null,isFormSubmitted:!1}},created(){this.loadContact(this.contactId)},computed:{...m(["contact","isContactLoaded","isUpdatingContacts"]),contactId(){return this.$route.params.id},ICON_ARROW_LEFT(){return p}},watch:{isContactLoaded(t){t&&Object.keys(this.contact).length!==0&&(this.initialValues=this.contact)},isUpdatingContacts(t){this.isFormSubmitted&&!t&&this.onReturn(this.contactId)}},methods:{...h(["loadContact","updateContact"]),onReturn(t){this.redirectTo(`/contact/${t}`)},onSave(t){this.isFormSubmitted=!0,this.updateContact(t)}},mixins:[F],components:{FormContact:v,Loader:C,IconHandler:f}},k=t=>(S("data-v-a037da29"),t=t(),y(),t),L={key:0,class:"contact-edit-container full main-layout"},O={class:"contact-edit"},R={class:"return-btn-container flex justify-start"},x={key:0,class:"submit-modal flex justify-center align-center clr-gray-0"},V=k(()=>n("span",null,"Submitting...",-1)),E=[V];function N(t,c,j,A,o,e){const d=a("IconHandler"),l=a("FormContact"),_=a("Loader");return o.initialValues?(s(),i("section",L,[n("section",O,[n("section",R,[n("button",{class:"return-btn clr-gray-2",onClick:c[0]||(c[0]=B=>e.onReturn(e.contactId))},[r(d,{name:e.ICON_ARROW_LEFT},null,8,["name"])])]),r(l,{"initial-values":o.initialValues,onOnSubmit:e.onSave},null,8,["initial-values","onOnSubmit"]),o.isFormSubmitted?(s(),i("section",x,E)):I("",!0)])])):(s(),b(_,{key:1}))}const M=u(g,[["render",N],["__scopeId","data-v-a037da29"]]);export{M as default};
