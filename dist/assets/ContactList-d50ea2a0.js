import{_ as l,I as v,k as C,r,o as n,c as o,e as t,j as d,t as i,w as f,F as k,G as g,g as y,Y as $}from"./index-8abba60b.js";const w={props:["contact"],computed:{ICON_DEFAULT_USER(){return v}},components:{IconHandler:C}},x={class:"contact-preview"},I={class:"avatar-container"},D={class:"avatar"},E=["src"],R={class:"content"},b={class:"capitalize"};function L(s,u,e,h,m,a){var c;const _=r("IconHandler");return n(),o("section",x,[t("section",I,[t("section",D,[(c=e.contact)!=null&&c.picture?(n(),o("img",{key:0,src:e.contact.picture.medium,alt:"contact"},null,8,E)):(n(),d(_,{key:1,name:a.ICON_DEFAULT_USER},null,8,["name"]))])]),t("section",R,[t("p",b,i(e.contact.name),1),t("p",null,i(e.contact.email),1),t("p",null,i(e.contact.phone),1)])])}const N=l(w,[["render",L],["__scopeId","data-v-e0c7f00b"]]);const U={props:["contacts"],methods:{onDetails(s){this.$router.push(`/contact/${s}`)},onRemove(s){this.$emit("remove",s)}},components:{ContactPreview:N}},F={class:"contact-list"},B={class:"buttons"},P=["onClick"],S=t("span",null,"Details",-1),T=[S],A=["onClick"],H=t("span",null,"Remove",-1),O=[H],G={key:1,class:"text-align-center clr-gray-0"},V=t("span",null,"No contacts (Refresh to fetch new)",-1),j=[V];function z(s,u,e,h,m,a){const _=r("ContactPreview");return n(),o("section",F,[e.contacts.length!==0?(n(),d($,{key:0,name:"list",tag:"ul"},{default:f(()=>[(n(!0),o(k,null,g(e.contacts,c=>(n(),o("li",{class:"contact-preview-container bg-clr-gold-1",key:c._id},[y(_,{contact:c},null,8,["contact"]),t("section",B,[t("button",{onClick:p=>a.onDetails(c._id)},T,8,P),t("button",{onClick:p=>a.onRemove(c._id)},O,8,A)])]))),128))]),_:1})):(n(),o("section",G,j))])}const q=l(U,[["render",z]]);export{q as default};
