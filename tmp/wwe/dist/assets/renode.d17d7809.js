import{_ as e}from"./V-Loader.vue_vue&type=script&setup=true&lang.152a1df5.js";import{d as r,a as s,c as o}from"./index.670b29b2.js";import{u as t}from"./useNotyf.8c9a8697.js";import{d as a,r as d,W as c,j as u,k as i,n,m as p,E as l}from"./vendor.6243191d.js";const f={class:"renode"},j=n("div",{class:"renode-success"},"重启成功！",-1),m=l(" 正在重启开发环境，请稍候... ");var v=a({expose:[],setup(a){const l=t(),v=r(),y=s(),_=o(),h=d(!0);return c((()=>{v.dispatch("channel/getProfile").then((e=>{console.log("route.query",y.query.backurl),v.dispatch("user/restartNodered",e.edge_id).then((()=>{const e=`/proxyNodeRed?project_id=${y.query.project_id}&token=${y.query.token}`;console.log("url",e),window.open(e,"_self")})).catch((()=>{l.error("重启失败！"),_.push({name:"user-projects-projectid-files",params:{projectid:y.query.project_id},query:{dir_path:""}})}))}))})),(r,s)=>{const o=e;return u(),i("div",f,[n("div",null,[n(o,{size:"xl",active:h.value},{default:p((()=>[j])),_:1},8,["active"]),m])])}}});export default v;
