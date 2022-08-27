import{_ as e}from"./V-Breadcrumb.vue_vue&type=script&setup=true&lang.95222eda.js";import{_ as a,a as s}from"./V-Field.vue_vue&type=script&setup=true&lang.50df6a27.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.7d7c3fd2.js";import{_ as t}from"./V-FlexNone.vue_vue&type=script&setup=true&lang.cbed393c.js";import{_ as o}from"./V-Desc.vue_vue&type=style&index=0&media=screen&lang.a15b66b4.js";import{a as c,c as r,d as i,u as n}from"./index.670b29b2.js";import{u}from"./useDropdown.490deeca.js";import{u as p}from"./useNotyf.8c9a8697.js";import{d,j as v,k as m,n as f,u as h,i as g,S as b,F as y,l as k,m as _,E as x,U as j,v as w,r as V,w as P,_ as C,a as S,W as z,A,z as L,P as B,X as q,Z as N,O as F}from"./vendor.6243191d.js";import{t as O}from"./filters.e49d41fb.js";import{_ as T}from"./V-FlexTable.vue_vue&type=script&setup=true&lang.19fc13e5.js";import{_ as U}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.036e60ba.js";import{_ as I}from"./V-Modal.vue_vue&type=script&setup=true&lang.13c249d1.js";import{_ as R}from"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.67c36c04.js";import{_ as D}from"./V-Loader.vue_vue&type=script&setup=true&lang.152a1df5.js";import{a as E,t as M}from"./activeSidebarState.4b53b430.js";import"./moment.08a7f518.js";const $=f("i",{class:"iconify","data-icon":"feather:more-vertical"},null,-1),W={class:"dropdown-menu",role:"menu",style:{"min-width":"auto"}},X=f("span",null,"修改",-1),Z=f("span",null,"删除",-1);var G=d({expose:[],props:{row:{type:Object,required:!0}},setup(e){const{row:a}=e;c();const s=r();i();const{dropdownElement:l,isOpen:t,toggle:o,close:n}=u();g("startBuild");const p=g("handleRemove");return(e,c)=>(v(),m("div",{ref:l,class:[[h(t)&&"is-active"],"dropdown is-spaced is-dots is-right dropdown-trigger is-pushed-mobile"]},[f("div",{class:"is-trigger","aria-haspopup":"true",onClick:c[1]||(c[1]=(...e)=>h(o)&&h(o)(...e))},[$]),f("div",W,[f("div",{class:"dropdown-content",onClick:c[4]||(c[4]=(...e)=>h(n)&&h(n)(...e))},[f("a",{class:"dropdown-item is-media",onClick:c[2]||(c[2]=e=>{s.push({name:"user-projects-edit-id",params:{id:a.project_id}})})},[X]),f("a",{class:"dropdown-item is-media",onClick:c[3]||(c[3]=e=>h(p)(a))},[Z])])])],2))}});const H={class:"flex-table-cell","data-th":"Name"},J={class:"route-link"},K=f("span",{style:{display:"inline-block",transform:"scale(0.7)"}},"●",-1),Q={class:"flex-table-cell","data-th":"Status"},Y={key:0},ee={key:1},ae={key:2},se={class:"flex-table-cell","data-th":"Status"},le={class:"flex-table-cell","data-th":"Status"},te={class:"flex-table-cell","data-th":"Time"},oe={class:"flex-table-cell cell-end","data-th":"Actions"};var ce=d({expose:[],props:{rows:{type:Array,required:!0}},setup:e=>(a,s)=>{const l=k("RouterLink"),t=o,c=G;return v(!0),m(y,null,b(e.rows,(e=>(v(),m("div",{key:e.id,class:"flex-table-item"},[f("div",H,[f("span",J,[f(l,{to:{name:"user-projects-projectid-files",params:{projectid:e.project_id}}},{default:_((()=>[K,x(" "+j(e.repo_name),1)])),_:2},1032,["to"])])]),f("div",Q,[0===e.level?(v(),m("span",Y,"基础APP")):1===e.level?(v(),m("span",ee,"高级APP")):(v(),m("span",ae,"节点"))]),f("div",se,[f("span",null,j(e.data_set.length),1)]),f("div",le,[f(t,{content:e.desc},null,8,["content"])]),f("div",te,[f("span",null,j(h(O)(e.CreateTime)),1)]),f("div",oe,[f(c,{key:e.project_id,row:e},null,8,["row"])])])))),128)}});const re=f("svg",{class:"checkmark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},[f("circle",{class:"checkmark-circle",cx:"26",cy:"26",r:"25",fill:"none"}),f("path",{class:"checkmark-check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})],-1);let ie=0;var ne=d({expose:[],props:{value:{type:[String,Number],default:void 0},modelValue:{type:Array,default:[]},color:{type:String,default:void 0,validator:e=>-1!==[void 0,"primary","info","success","warning","danger","purple"].indexOf(e)||(console.warn(`V-AnimatedCheckbox: invalid "${e}" color. Should be primary, info, success, warning, danger, purple or undefined`),!1)}},emits:["update:modelValue"],setup(e,{emit:a}){const s=e,l="animated-checkbox-"+ ++ie,t=w((()=>s.modelValue.includes(s.value))),o=V(null),c=V(null);function r(){const e=[...s.modelValue];t.value?e.splice(e.indexOf(s.value),1):e.push(s.value),a("update:modelValue",e)}return P((()=>{o.value&&c.value&&(t.value?(o.value.classList.add("is-checked"),c.value.classList.add("is-opaque"),setTimeout((()=>{var e;null==(e=o.value)||e.classList.remove("is-unchecked")}),150)):(o.value.classList.add("is-unchecked"),o.value.classList.remove("is-checked"),setTimeout((()=>{var e;null==(e=c.value)||e.classList.remove("is-opaque")}),150)))})),(a,i)=>(v(),m("div",{ref:o,class:["animated-checkbox",[e.color&&"is-"+e.color]]},[f("input",C({id:l,type:"checkbox",checked:h(t),value:s.value},a.$attrs,{onChange:r}),null,16,["checked","value"]),f("label",{for:l,class:"checkmark-wrap"},[f("div",{ref:c,class:"shadow-circle"},null,512),re])],2))}});const ue={key:0},pe={class:"list-view-toolbar"},de={class:"select"},ve=f("option",{value:""},"全部",-1),me=f("option",{value:"1"},"高级APP",-1),fe=f("option",{value:"0"},"基础APP",-1),he=f("option",{value:"2"},"节点",-1),ge={class:"buttons"},be=x(" 创建项目 "),ye={class:"page-content-inner"},ke=f("div",{class:"flex-table-header"},[f("span",null,"名称"),f("span",null,"项目类别"),f("span",null,"数据集"),f("span",null,"描述"),f("span",null,"创建时间"),f("span",{class:"cell-end"},"操作")],-1),_e={key:0,class:"page-content-inner"},xe={class:"flex-table is-compact"},je=f("div",{class:"flex-table-header"},[f("span",null,"名称"),f("span",null,"描述"),f("span",null,"数据集"),f("span",null,"项目"),f("span",{class:"cell-end"},"适配")],-1),we={class:"flex-table-item"},Ve={class:"flex-table-cell"},Pe={class:"light-text"},Ce={class:"flex-table-cell"},Se={class:"light-text"},ze={class:"flex-table-cell"},Ae={class:"light-text"},Le={class:"flex-table-cell"},Be={class:"light-text"},qe={class:"flex-table-cell cell-end"},Ne=x("适配"),Fe=x("确认"),Oe=x("去删除应用");var Te=d({expose:[],props:{audit:{type:Boolean,default:!1}},setup(e){const o=p(),n=c(),u=r(),d=i(),g=V(!1),k=V(),x=V(""),P=V(""),C=w((()=>{try{return Number.parseInt(n.query.page)||1}catch(e){}return 1})),F=w((()=>d.state.user.projects));console.log(F.value);L("startBuild",(e=>{g.value=!0,k.value=e}));const O=V(!1),D=V(0);L("handleRemove",(e=>{k.value=e,d.dispatch("user/getInstancesCount",e.project_id).then((e=>{D.value=e.instance_count,O.value=!0}))})),S([P,x,C],((e,a)=>{e[0]===a[0]&&e[1]===a[1]||(u.push("projects"),d.dispatch("user/getProjects",{page:1,size:10,search:e[0],level:x.value?x.value:""})),e[2]!==a[2]&&d.dispatch("user/getProjects",{page:C.value,size:10,search:e[0],level:x.value?x.value:""})}));const E=V([]);return z((()=>{})),(e,c)=>{const r=s,i=a,n=l,u=t,p=ce,w=T,V=U,S=ne,z=I,L=R,M=l,$=I;return h(F).page_info?(v(),m("div",ue,[f("div",pe,[f(i,null,{default:_((()=>[f(r,{icon:"feather:search"},{default:_((()=>[B(f("input",{"onUpdate:modelValue":c[1]||(c[1]=e=>P.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[q,P.value]])])),_:1})])),_:1}),f(i,null,{default:_((()=>[f(r,null,{default:_((()=>[f("div",de,[B(f("select",{"onUpdate:modelValue":c[2]||(c[2]=e=>x.value=e)},[ve,me,fe,he],512),[[N,x.value]])])])),_:1})])),_:1}),A("",!0),f("div",ge,[f(n,{to:"/user/projects/new",color:"primary",elevated:""},{default:_((()=>[be])),_:1})])]),f("div",ye,[h(F)&&0===h(F).data.length?(v(),m(u,{key:0,title:"没有数据",subtitle:"当前没有要显示的数据"})):(v(),m(w,{key:1,compact:""},{header:_((()=>[ke])),body:_((()=>[f(p,{rows:h(F).data},null,8,["rows"])])),_:1})),h(F).page_info.count?(v(),m(V,{key:2,"item-per-page":h(F).page_info.size,"total-items":h(F).page_info.count,"current-page":h(C),"max-links-displayed":5},null,8,["item-per-page","total-items","current-page"])):A("",!0),f(z,{open:g.value,size:"big",actions:"center",title:"开始适配",onClose:c[5]||(c[5]=e=>g.value=!1)},{content:_((()=>[k.value?(v(),m("div",_e,[f("div",xe,[je,(v(!0),m(y,null,b(k.value.build_args,((e,a)=>(v(),m("div",we,[f("div",Ve,[f("span",Pe,j(e.branch),1)]),f("div",Ce,[f("span",Se,j(e.tag),1)]),f("div",ze,[f("span",Ae,j(e.cpu),1)]),f("div",Le,[f("span",Be,j(e.os),1)]),f("div",qe,[f(S,{key:e.branch+e.tag+e.cpu+e.os,modelValue:E.value,"onUpdate:modelValue":c[3]||(c[3]=e=>E.value=e),value:a,color:"success",checked:""},null,8,["modelValue","value"])])])))),256))])])):A("",!0)])),action:_((()=>[f(n,{color:"primary",onClick:c[4]||(c[4]=e=>(console.log("options",E,E.value),void d.dispatch("user/startBuilder",{build_args:E.value,id:k.value.id}).then((()=>{d.dispatch("user/getProjects",{page:C.value,size:10}),g.value=!1})))),raised:""},{default:_((()=>[Ne])),_:1})])),_:1},8,["open"]),f($,{open:O.value,actions:"center",onClose:c[7]||(c[7]=e=>O.value=!1),title:"提示信息"},{content:_((()=>[0===D.value?(v(),m(L,{key:0,title:"您确认要删除此项目吗？"})):(v(),m(L,{key:1,title:"当前项目存在已部署的应用，请先删除应用。"}))])),action:_((()=>[0===D.value?(v(),m(M,{key:0,color:"primary",onClick:c[6]||(c[6]=e=>{d.dispatch("user/deleteProject",k.value.project_id).then((()=>{o.success("删除成功！"),O.value=!1,d.dispatch("user/getProjects",{page:1,size:10})}))}),raised:""},{default:_((()=>[Fe])),_:1})):(v(),m(M,{key:1,color:"primary",to:{name:"user-projects-projectid-deploys",params:{projectid:k.value.project_id}},raised:""},{default:_((()=>[Oe])),_:1},8,["to"]))])),_:1},8,["open"])])])):A("",!0)}}});const Ue={class:"page-title has-text-centered"},Ie={class:"menu-toggle has-chevron"},Re=f("span",{class:"rotate"},[f("i",{class:"icon-line-top"}),f("i",{class:"icon-line-center"}),f("i",{class:"icon-line-bottom"})],-1),De=f("div",{class:"title-wrap"},[f("h1",{class:"title is-4"},"项目列表")],-1),Ee={class:"page-content-inner"},Me={class:"breadcrumb-box"},$e=f("i",{class:"iconify","data-icon":"feather:corner-down-left"},null,-1);var We=d({expose:[],setup(a){const s=c(),l=r(),t=i(),o=V(!0);n({title:"项目列表"}),F((()=>{E.value="none"})),z((()=>{t.dispatch("user/getProjects",{page:Number.parseInt(s.query.page)||1,size:10}).then((()=>{o.value=!1}))}));const u=V([{icon:"feather:home",hideLabel:!0,to:{name:"user-projects"}},{label:"项目列表",to:{name:"user-projects"}}]);return(a,s)=>{const t=e,c=Te,r=D;return v(),m("div",null,[f("div",Ue,[f("div",{class:"vuero-hamburger nav-trigger push-resize",onClick:s[1]||(s[1]=e=>h(M)("none"))},[f("span",Ie,[f("span",{class:[["none"===h(E)&&""],"icon-box-toggle"]},[Re],2)])]),De]),f("div",Ee,[f("div",Me,[u.value?(v(),m(t,{key:0,items:u.value,separator:"bullet","with-icons":""},null,8,["items"])):A("",!0),f("div",{onClick:s[2]||(s[2]=()=>h(l).back())},[$e])]),f(r,{size:"large",active:o.value},{default:_((()=>[f(c)])),_:1},8,["active"])])])}}});export default We;
