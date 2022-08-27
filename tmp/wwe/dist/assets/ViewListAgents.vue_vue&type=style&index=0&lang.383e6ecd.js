import{_ as e,a}from"./V-Field.vue_vue&type=script&setup=true&lang.50df6a27.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.7d7c3fd2.js";import{_ as s}from"./V-FlexNone.vue_vue&type=script&setup=true&lang.cbed393c.js";import{_ as l}from"./V-Desc.vue_vue&type=style&index=0&media=screen&lang.a15b66b4.js";import{a as n,c as i,d as o}from"./index.670b29b2.js";import{u as r}from"./useDropdown.490deeca.js";import{d as c,j as d,k as p,n as u,u as m,m as v,i as g,l as f,S as _,F as h,U as y,E as b,A as x,r as w,v as j,b as k,a as A,W as V,z as C,P as z,X as N}from"./vendor.6243191d.js";import{_ as F}from"./V-FlexTable.vue_vue&type=script&setup=true&lang.19fc13e5.js";import{_ as P}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.036e60ba.js";import{_ as U}from"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.67c36c04.js";import{_ as q}from"./V-Modal.vue_vue&type=script&setup=true&lang.13c249d1.js";import"./useNotyf.8c9a8697.js";const E=u("i",{class:"iconify","data-icon":"feather:more-vertical"},null,-1),S={class:"dropdown-menu",role:"menu",style:{"min-width":"auto"}},B={class:"dropdown-content"},D=u("span",null,"修改",-1),M=u("span",null,"删除",-1);var O=c({expose:[],props:{row:{type:Object,required:!0}},setup(e){const{row:a}=e;n(),i(),o();const{dropdownElement:t,isOpen:s,toggle:l}=r();g("editAgent");const c=g("removeAgent");return(e,n)=>{const i=f("RouterLink");return d(),p("div",{ref:t,class:[[m(s)&&"is-active"],"dropdown is-spaced is-dots is-right dropdown-trigger is-pushed-mobile"]},[u("div",{class:"is-trigger","aria-haspopup":"true",onClick:n[1]||(n[1]=(...e)=>m(l)&&m(l)(...e))},[E]),u("div",S,[u("div",B,[u(i,{class:"dropdown-item is-media",to:{name:"admin-agents-edit-id",params:{id:a.model_id}}},{default:v((()=>[D])),_:1},8,["to"]),u("a",{href:"#",class:"dropdown-item is-media",onClick:n[2]||(n[2]=e=>{c(a)})},[M])])])],2)}}});const R={class:"flex-table-cell","data-th":"Name"},I={class:"flex-table-cell","data-th":"Name"},L={class:"flex-table-cell","data-th":"Name"},T={key:0},W=u("span",{class:"cell-label"},"型号",-1),X=u("span",{class:"cell-label"},"CPU",-1),G=u("span",{class:"cell-label"},"RAM",-1),H=u("span",{class:"cell-label"},"CPU",-1),J={key:1},K=u("span",{class:"cell-label"},"厂商",-1),Q=u("span",{class:"cell-label"},"通信连接方式",-1),Y={class:"flex-table-cell","data-th":"Email"},Z={class:"flex-table-cell","data-th":"CreateAt"},$={class:"flex-table-cell cell-end","data-th":"Actions"};var ee=c({expose:[],props:{rows:{type:Array,required:!0}},setup:e=>(a,t)=>{const s=l,n=O;return d(!0),p(h,null,_(e.rows,(e=>(d(),p("div",{key:e.id,class:"flex-table-item"},[u("div",R,y(e.name),1),u("div",I,y(0===e.model_type?"终端设备":"端设备"),1),u("div",L,[0===e.model_type?(d(),p("div",T,[u("div",null,[W,b(y(e.model),1)]),u("div",null,[X,b(y(e.cpu),1)]),u("div",null,[G,b(y(e.ram),1)]),u("div",null,[H,b(y(e.memory_type),1)])])):x("",!0),1===e.model_type?(d(),p("div",J,[u("div",null,[K,b(y(e.vendor),1)]),u("div",null,[Q,b(y(e.conn_type),1)])])):x("",!0)]),u("div",Y,[u(s,{content:e.desc},null,8,["content"])]),u("div",Z,y(e.create_time),1),u("div",$,[u(n,{key:e.expand_agent_id,row:e},null,8,["row"])])])))),128)}});const ae={key:0},te={class:"list-view-toolbar"},se={class:"buttons"},le=b("添加设备"),ne={class:"page-content-inner"},ie=u("div",{class:"flex-table-header"},[u("span",null,"名称"),u("span",null,"类型"),u("span",null,"设备信息"),u("span",null,"描述"),u("span",null,"创建时间"),u("span",{class:"cell-end"},"操作")],-1),oe=b("确认");var re=c({expose:[],props:{audit:{type:Boolean,default:!1}},setup(l){const{audit:r}=l,c=n(),g=i(),f=o();w(!1),w(!1);const _=w();w();const h=w(!1),y=w("");w("");const b=j((()=>{try{return Number.parseInt(c.query.page)||1}catch(e){}return 1})),E=j((()=>f.state.channel.agents)),S=e=>{h.value=!1,f.dispatch("channel/delAgent",_.value.model_id).then((()=>{f.dispatch("channel/getAgents",{page:1,size:10})}))};return C("editAgent",((e,a)=>{_.value=e})),C("removeAgent",((e,a)=>{_.value=e,h.value=!0})),k({certificate_title:"",certificate_content:""}),w(""),A([y,b],((e,a)=>{e[0]!==a[0]&&(g.push("agents"),f.dispatch("channel/getAgents",{page:1,size:10,search:e[0],status:r?"0":void 0})),e[1]!==a[1]&&f.dispatch("channel/getAgents",{page:b.value,size:10,search:e[0],status:r?"0":void 0})})),V((()=>{f.dispatch("channel/getAgents",{page:b.value,size:10,status:r?"0":void 0})})),(l,n)=>{const i=a,o=e,r=t,c=s,g=ee,f=F,_=P,w=U,j=t,k=q;return m(E).page_info?(d(),p("div",ae,[u("div",te,[u(o,null,{default:v((()=>[u(i,{icon:"feather:search"},{default:v((()=>[z(u("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>y.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[N,y.value]])])),_:1})])),_:1}),x("",!0),u("div",se,[u(r,{to:{name:"admin-agents-form"},color:"success"},{default:v((()=>[le])),_:1})])]),u("div",ne,[m(E)&&0===m(E).data.length?(d(),p(c,{key:0,title:"没有数据",subtitle:"当前没有要显示的数据"})):(d(),p(f,{key:1,compact:""},{header:v((()=>[ie])),body:v((()=>[u(g,{rows:m(E).data},null,8,["rows"])])),_:1})),m(E).page_info.count?(d(),p(_,{key:2,"item-per-page":m(E).page_info.size,"total-items":m(E).page_info.count,"current-page":m(b),"max-links-displayed":5},null,8,["item-per-page","total-items","current-page"])):x("",!0)]),u(k,{open:h.value,actions:"center",onClose:n[2]||(n[2]=e=>h.value=!1),title:"提示信息"},{content:v((()=>[u(w,{title:"您确认要删除此设备吗？"})])),action:v((()=>[u(j,{color:"primary",onClick:S,raised:""},{default:v((()=>[oe])),_:1})])),_:1},8,["open"])])):x("",!0)}}});export{re as _};
