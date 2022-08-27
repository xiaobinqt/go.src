import{_ as e}from"./V-Breadcrumb.vue_vue&type=script&setup=true&lang.95222eda.js";import{_ as t}from"./FormLayoutProject.vue_vue&type=style&index=0&lang.62d3ea41.js";import{_ as s}from"./V-Loader.vue_vue&type=script&setup=true&lang.152a1df5.js";import{u as a,a as r,d as o,c as i}from"./index.670b29b2.js";import{a as c,t as l}from"./activeSidebarState.4b53b430.js";import{d as u,r as n,O as p,v,W as d,j as m,k as j,n as b,u as g,m as f,A as h}from"./vendor.6243191d.js";import"./V-Field.vue_vue&type=script&setup=true&lang.50df6a27.js";import"./V-Button.vue_vue&type=script&setup=true&lang.7d7c3fd2.js";import"./V-Buttons.vue_vue&type=script&setup=true&lang.88c78073.js";import"./V-Message.vue_vue&type=script&setup=true&lang.177426e4.js";import"./useNotyf.8c9a8697.js";const y={class:"page-title has-text-centered"},_={class:"menu-toggle has-chevron"},k=b("span",{class:"rotate"},[b("i",{class:"icon-line-top"}),b("i",{class:"icon-line-center"}),b("i",{class:"icon-line-bottom"})],-1),x=b("div",{class:"title-wrap"},[b("h1",{class:"title is-4"},"修改项目")],-1),V={class:"page-content-inner"},w={class:"breadcrumb-box"},B=b("i",{class:"iconify","data-icon":"feather:corner-down-left"},null,-1);var L=u({expose:[],setup(u){const L=r(),z=i(),C=o(),F=n(!0);a({title:"新建项目"}),p((()=>{c.value="projects"}));const P=v((()=>C.state.user.project)),S=n();return d((()=>{C.dispatch("user/getProject",L.params.id).then((()=>{S.value=[{icon:"feather:home",hideLabel:!0,to:{name:"user-projects"}},{label:"项目列表",to:{name:"user-projects"}},{label:P.value.name}],F.value=!1}))})),(a,r)=>{const o=e,i=t,u=s;return m(),j("div",null,[b("div",y,[b("div",{class:"vuero-hamburger nav-trigger push-resize",onClick:r[1]||(r[1]=e=>g(l)("projects"))},[b("span",_,[b("span",{class:[["projects"===g(c)&&"active"],"icon-box-toggle"]},[k],2)])]),x]),b("div",V,[b(u,{size:"large",active:F.value},{default:f((()=>[b("div",w,[S.value?(m(),j(o,{key:0,items:S.value,separator:"bullet","with-icons":""},null,8,["items"])):h("",!0),b("div",{class:"back-button",onClick:r[2]||(r[2]=()=>g(z).back())},[B])]),F.value?h("",!0):(m(),j(i,{key:0,project:g(P)},null,8,["project"]))])),_:1},8,["active"])])])}}});export default L;