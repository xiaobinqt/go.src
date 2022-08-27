import{_ as s}from"./V-Breadcrumb.vue_vue&type=script&setup=true&lang.95222eda.js";import{_ as a,a as e}from"./V-Field.vue_vue&type=script&setup=true&lang.50df6a27.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.7d7c3fd2.js";import{d as t,O as o,v as i,r,b as n,W as d,j as c,k as p,n as u,u as f,A as m,a2 as v,m as b,P as w,X as _,E as h}from"./vendor.6243191d.js";import{u as g,c as y,d as j,a as k}from"./index.670b29b2.js";import{a as x,t as V}from"./activeSidebarState.4b53b430.js";import{u as z}from"./useNotyf.8c9a8697.js";const S={class:"page-title has-text-centered"},P={class:"menu-toggle has-chevron"},U=u("span",{class:"rotate"},[u("i",{class:"icon-line-top"}),u("i",{class:"icon-line-center"}),u("i",{class:"icon-line-bottom"})],-1),B=u("div",{class:"title-wrap"},[u("h1",{class:"title is-4"},"修改密码")],-1),C={class:"page-content-inner"},A={class:"breadcrumb-box"},E=u("i",{class:"iconify","data-icon":"feather:corner-down-left"},null,-1),F={class:"settings-card"},L={class:"profile-form"},N={class:"field is-horizontal"},O=u("div",{class:"field-label is-normal"},[u("label",{class:"label"},"旧密码")],-1),W={class:"field-body"},X={class:"field is-horizontal"},q=u("div",{class:"field-label is-normal"},[u("label",{class:"label"},"新密码")],-1),D={class:"field-body"},G={class:"field is-horizontal"},H=u("div",{class:"field-label is-normal"},[u("label",{class:"label"},"确认密码")],-1),I={class:"field-body"},J={class:"field is-horizontal"},K=u("div",{class:"field-label is-normal"},[u("label",{class:"label"})],-1),M={class:"field-body"},Q=h(" 提交 ");var R=t({expose:[],setup(t){const h=z();k();const R=y(),T=j();g({title:"修改密码"}),o((()=>{x.value="projects"})),i((()=>T.state.channel.user));const Y=r([{icon:"feather:home",hideLabel:!0,to:{name:"user-projects"}},{label:"设置"},{label:"修改密码"}]),Z=n({user_id:"",origin_password:"",new_password:"",retry_password:""});r("");const $=async()=>{""!==Z.origin_password&&""!==Z.new_password&&""!==Z.retry_password?Z.origin_password!==Z.new_password?T.dispatch("channel/updatePassword",Z).then((s=>{h.success("密码修改成功！")})).catch((s=>{h.error(s.message)})):h.error("旧密码与新密码不能相同"):h.error("旧密码、新密码或确认密码不能为空")};return d((()=>{T.dispatch("channel/getProfile").then((s=>{Z.user_id=s.user_id}))})),o((()=>{x.value="settings"})),(t,o)=>{const i=s,r=e,n=a,d=l;return c(),p("div",null,[u("div",S,[u("div",{class:"vuero-hamburger nav-trigger push-resize",onClick:o[1]||(o[1]=s=>f(V)("settings"))},[u("span",P,[u("span",{class:[["settings"===f(x)&&"active"],"icon-box-toggle"]},[U],2)])]),B]),u("div",C,[u("div",A,[Y.value?(c(),p(i,{key:0,items:Y.value,separator:"bullet","with-icons":""},null,8,["items"])):m("",!0),u("div",{class:"back-button",onClick:o[2]||(o[2]=()=>f(R).back())},[E])]),u("div",F,[u("div",L,[u("form",{onSubmit:v($,["prevent"])},[u("div",N,[O,u("div",W,[u(n,null,{default:b((()=>[u(r,{icon:"feather:lock"},{default:b((()=>[w(u("input",{class:"input",type:"password","onUpdate:modelValue":o[3]||(o[3]=s=>f(Z).origin_password=s),placeholder:"密码",autocomplete:"new-password"},null,512),[[_,f(Z).origin_password]])])),_:1})])),_:1})])]),u("div",X,[q,u("div",D,[u(n,null,{default:b((()=>[u(r,{icon:"feather:lock"},{default:b((()=>[w(u("input",{class:"input",type:"password","onUpdate:modelValue":o[4]||(o[4]=s=>f(Z).new_password=s),placeholder:"请输入新密码",autocomplete:"new-password"},null,512),[[_,f(Z).new_password]])])),_:1})])),_:1})])]),u("div",G,[H,u("div",I,[u(n,null,{default:b((()=>[u(r,{icon:"feather:lock"},{default:b((()=>[w(u("input",{class:"input",type:"password","onUpdate:modelValue":o[5]||(o[5]=s=>f(Z).retry_password=s),placeholder:"请再次输入新密码",autocomplete:"new-password"},null,512),[[_,f(Z).retry_password]])])),_:1})])),_:1})])]),u("div",J,[K,u("div",M,[u(n,null,{default:b((()=>[u(r,{class:"login"},{default:b((()=>[u(d,{color:"primary",bold:"",raised:""},{default:b((()=>[Q])),_:1})])),_:1})])),_:1})])])],40,["onSubmit"])])])])])}}});export default R;