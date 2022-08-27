import{_ as e}from"./V-Breadcrumb.vue_vue&type=script&setup=true&lang.95222eda.js";import{_ as a,a as s}from"./V-Field.vue_vue&type=script&setup=true&lang.50df6a27.js";import{_ as t}from"./V-FlexNone.vue_vue&type=script&setup=true&lang.cbed393c.js";import{_ as l}from"./V-Tag.vue_vue&type=script&setup=true&lang.bf8fa42e.js";import{a as n,c as r,d as o,u as i}from"./index.670b29b2.js";import{u}from"./useDropdown.490deeca.js";import{d,j as c,k as p,n as v,u as m,A as g,i as h,S as f,F as _,l as y,m as b,E as k,U as x,r as w,v as j,b as V,a as E,W as C,z as U,P as z,X as N,Z as S,O as q}from"./vendor.6243191d.js";import{_ as A}from"./V-FlexTable.vue_vue&type=script&setup=true&lang.19fc13e5.js";import{_ as F}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.036e60ba.js";import{_ as O}from"./V-Button.vue_vue&type=script&setup=true&lang.7d7c3fd2.js";import{_ as B}from"./V-Modal.vue_vue&type=script&setup=true&lang.13c249d1.js";import{u as P}from"./useNotyf.8c9a8697.js";import{a as T,t as L}from"./activeSidebarState.4b53b430.js";import"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.67c36c04.js";const M=v("i",{class:"iconify","data-icon":"feather:more-vertical"},null,-1),$={class:"dropdown-menu",role:"menu",style:{"min-width":"auto"}},D={class:"dropdown-content"},I=v("span",null,"用户分配",-1),R=v("span",null,"删除",-1);var W=d({expose:[],props:{row:{type:Object,required:!0},user:{type:Object,required:!0}},setup(e){const{row:a}=e;n(),r(),o();const{dropdownElement:s,isOpen:t,toggle:l}=u(),i=h("assignUser"),d=h("delEdge");return(n,r)=>2===a.type?(c(),p("div",{key:0,ref:s,class:[[m(t)&&"is-active"],"dropdown is-spaced is-dots is-right dropdown-trigger is-pushed-mobile"]},[v("div",{class:"is-trigger","aria-haspopup":"true",onClick:r[1]||(r[1]=(...e)=>m(l)&&m(l)(...e))},[M]),v("div",$,[v("div",D,[v("a",{class:"dropdown-item is-media",href:"#",onClick:r[2]||(r[2]=e=>m(i)(a))},[I]),1===e.user.super_admin&&2===a.health?(c(),p("a",{key:0,class:"dropdown-item is-media",href:"#",onClick:r[3]||(r[3]=e=>m(d)(a))},[R])):g("",!0)])])],2)):g("",!0)}});const X={class:"flex-table-cell","data-th":"Name"},Z={key:1},G={class:"flex-table-cell","data-th":"Name"},H={class:"flex-table-cell","data-th":"Name"},J={class:"flex-table-cell","data-th":"CreateAt"},K={class:"flex-table-cell","data-th":"CreateAt"},Q={class:"flex-table-cell cell-end","data-th":"Actions"};var Y=d({expose:[],props:{rows:{type:Array,required:!0},user:{type:Object,required:!0}},setup(e){const a=e=>e.substr(0,8);return(s,t)=>{const n=y("RouterLink"),r=l,o=W;return c(!0),p(_,null,f(e.rows,(s=>(c(),p("div",{key:s.id,class:"flex-table-item"},[v("div",X,[1===s.health?(c(),p(n,{key:0,to:{name:"admin-edges-edgeid",params:{edgeid:s.edge_id}}},{default:b((()=>[k(x(a(s.hostname)||a(s.edge_id)),1)])),_:2},1032,["to"])):(c(),p("span",Z,x(a(s.hostname)||a(s.edge_id)),1))]),v("div",G,x(1===s.type?"仿真":"物理"),1),v("div",H,[1===s.health?(c(),p(r,{key:0,color:"primary",label:"健康",rounded:""})):g("",!0),2===s.health?(c(),p(r,{key:1,color:"danger",label:"异常",rounded:""})):g("",!0)]),v("div",J,x(s.esn),1),v("div",K,x(s.model),1),v("div",Q,[v(o,{key:s.edge_id,row:s,user:e.user},null,8,["row","user"])])])))),128)}}});const ee={key:0},ae={class:"list-view-toolbar"},se={class:"select"},te=v("option",{value:""},"全部",-1),le=v("option",{value:"0"},"仿真",-1),ne=v("option",{value:"1"},"物理",-1),re=v("div",{class:"buttons"},null,-1),oe={class:"page-content-inner"},ie=v("div",{class:"flex-table-header"},[v("span",null,"终端名称"),v("span",null,"终端类型"),v("span",null,"终端状态"),v("span",null,"ESN"),v("span",null,"终端型号"),v("span",{class:"cell-end"},"操作")],-1),ue={style:{height:"200px"}},de={class:"modal-form"},ce=k("确认"),pe=v("h2",{style:{"text-align":"center","font-weight":"700"}},"您确定要删除此终端吗?",-1),ve=k("确认");var me=d({expose:[],props:{audit:{type:Boolean,default:!1}},setup(e){const{audit:l}=e,i=n(),u=r(),d=o(),h=P();w(!1),w(!1);const f=w();w();const _=w(!1),k=w(!1),x=w(""),q=w(""),T=j((()=>{try{return Number.parseInt(i.query.page)||1}catch(e){}return 1})),L=j((()=>d.state.channel.edges)),M=j((()=>d.state.channel.user)),$=()=>{d.dispatch("channel/delEdge",f.value.edge_id).then((()=>{u.push("edges"),h.success("删除成功！"),k.value=!1,d.dispatch("channel/getEdges",{page:1,size:10,search:x.value,type:q.value?q.value:void 0})}))},D=w([]),I=w([]),R=e=>{_.value=!1,console.log("usersValue",D.value),d.dispatch("channel/addUserToEdge",{edge_id:f.value.edge_id,user_ids:D.value.join(",")}).then((()=>{h.success("分配用户成功！")}))};return U("assignUser",(e=>{f.value=e,_.value=!0,d.dispatch("channel/getUserByEdge",f.value.edge_id).then((e=>{D.value=e.map((e=>e.user_id))}))})),U("delEdge",(e=>{f.value=e,k.value=!0})),V({certificate_title:"",certificate_content:""}),w(""),E([x,q,T],((e,a)=>{e[0]===a[0]&&e[1]===a[1]||(u.push("edges"),d.dispatch("channel/getEdges",{page:1,size:10,search:e[0],type:q.value?q.value:void 0})),e[2]!==a[2]&&d.dispatch("channel/getEdges",{page:T.value,size:10,search:e[0],type:q.value?q.value:void 0})})),C((()=>{d.dispatch("channel/getEdges",{page:T.value,size:10,status:l?"0":void 0}),d.dispatch("channel/getUsers",{page:1,size:9999,online:-1}).then((e=>{I.value=e.data.map((e=>({value:e.user_id,label:`${e.real_name||e.user_name}(${e.user_name})`})))}))})),(e,l)=>{const n=s,r=a,o=t,i=Y,u=A,d=F,h=y("Multiselect"),f=s,w=a,j=O,V=B;return m(L).page_info?(c(),p("div",ee,[v("div",ae,[v(r,null,{default:b((()=>[v(n,{icon:"feather:search"},{default:b((()=>[z(v("input",{"onUpdate:modelValue":l[1]||(l[1]=e=>x.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[N,x.value]])])),_:1})])),_:1}),v(r,null,{default:b((()=>[v(n,null,{default:b((()=>[v("div",se,[z(v("select",{"onUpdate:modelValue":l[2]||(l[2]=e=>q.value=e)},[te,le,ne],512),[[S,q.value]])])])),_:1})])),_:1}),g("",!0),re]),v("div",oe,[m(L)&&0===m(L).data.length?(c(),p(o,{key:0,title:"没有数据",subtitle:"当前没有要显示的数据"})):(c(),p(u,{key:1,compact:""},{header:b((()=>[ie])),body:b((()=>[v(i,{rows:m(L).data,user:m(M)},null,8,["rows","user"])])),_:1})),m(L).page_info.count?(c(),p(d,{key:2,"item-per-page":m(L).page_info.size,"total-items":m(L).page_info.count,"current-page":m(T),"max-links-displayed":5},null,8,["item-per-page","total-items","current-page"])):g("",!0)]),v(V,{open:_.value,actions:"center",onClose:l[4]||(l[4]=e=>_.value=!1),title:"分配用户"},{content:b((()=>[v("div",ue,[v("form",de,[v(w,null,{default:b((()=>[v(f,null,{default:b((()=>[v(h,{modelValue:D.value,"onUpdate:modelValue":l[3]||(l[3]=e=>D.value=e),mode:"tags",searchable:!0,"create-tag":!0,options:I.value,placeholder:"分配用户"},null,8,["modelValue","options"])])),_:1})])),_:1})])])])),action:b((()=>[v(j,{color:"primary",onClick:R,raised:""},{default:b((()=>[ce])),_:1})])),_:1},8,["open"]),v(V,{open:k.value,actions:"center",onClose:l[5]||(l[5]=e=>k.value=!1),title:"提示信息"},{content:b((()=>[pe])),action:b((()=>[v(j,{color:"primary",onClick:$,raised:""},{default:b((()=>[ve])),_:1})])),_:1},8,["open"])])):g("",!0)}}});const ge={class:"page-title has-text-centered"},he={class:"menu-toggle has-chevron"},fe=v("span",{class:"rotate"},[v("i",{class:"icon-line-top"}),v("i",{class:"icon-line-center"}),v("i",{class:"icon-line-bottom"})],-1),_e=v("div",{class:"title-wrap"},[v("h1",{class:"title is-4"},"终端管理")],-1),ye={class:"page-content-inner"},be={class:"breadcrumb-box"},ke=v("i",{class:"iconify","data-icon":"feather:corner-down-left"},null,-1);var xe=d({expose:[],setup(a){i({title:"终端管理"}),q((()=>{T.value="none"}));const s=w([{icon:"feather:home",hideLabel:!0,to:{name:"admin-users"}},{label:"终端管理",to:{name:"admin-edges"}}]);return(a,t)=>{const l=e,n=me;return c(),p("div",null,[v("div",ge,[v("div",{class:"vuero-hamburger nav-trigger push-resize",onClick:t[1]||(t[1]=e=>m(L)("none"))},[v("span",he,[v("span",{class:[["none"===m(T)&&""],"icon-box-toggle"]},[fe],2)])]),_e]),v("div",ye,[v("div",be,[s.value?(c(),p(l,{key:0,items:s.value,separator:"bullet","with-icons":""},null,8,["items"])):g("",!0),v("div",{onClick:t[2]||(t[2]=()=>a.router.back())},[ke])]),v(n)])])}}});export default xe;