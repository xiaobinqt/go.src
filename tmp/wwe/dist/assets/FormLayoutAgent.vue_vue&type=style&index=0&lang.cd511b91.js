var e=Object.defineProperty,l=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,o=(l,a,s)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[a]=s;import{_ as d}from"./V-Radio.vue_vue&type=script&setup=true&lang.3abcd434.js";import{_ as t,a as i}from"./V-Field.vue_vue&type=script&setup=true&lang.50df6a27.js";import{_ as r}from"./V-Button.vue_vue&type=script&setup=true&lang.7d7c3fd2.js";import{_ as n}from"./V-Buttons.vue_vue&type=script&setup=true&lang.88c78073.js";import{d as u,v as c,b as p,W as m,j as v,k as f,n as y,m as _,u as b,A as h,P as g,X as V,Z as j,E as U}from"./vendor.6243191d.js";import{a as x,c as z,d as A}from"./index.670b29b2.js";import{u as R}from"./useNotyf.8c9a8697.js";const k={class:"form-card",style:{width:"auto",height:"auto"}},q={class:"form-inner"},S={class:"field is-horizontal"},B=y("div",{class:"field-label is-normal"},[y("label",{class:"label"},"设备类型")],-1),O={class:"field-body"},P={key:0,class:"field is-horizontal"},w=y("div",{class:"field-label is-normal"},[y("label",{class:"label required"},"设备型号")],-1),C={class:"field-body"},D={key:1,class:"field is-horizontal"},G=y("div",{class:"field-label is-normal"},[y("label",{class:"label required"},"设备厂商")],-1),F={class:"field-body"},E={class:"field is-horizontal"},H=y("div",{class:"field-label is-normal"},[y("label",{class:"label required"},"设备名称")],-1),L={class:"field-body"},M={class:"field is-horizontal"},I=y("div",{class:"field-label is-normal"},[y("label",{class:"label"},"设备描述")],-1),N={class:"field-body"},W={key:2,class:"field is-horizontal"},X=y("div",{class:"field-label is-normal"},[y("label",{class:"label required"},"CPU型号")],-1),Z={class:"field-body"},J={class:"select"},K=y("option",{value:""},"请选择",-1),Q=y("option",{value:"4核心ARM Cortex-A7"},"4核心ARM Cortex-A7",-1),T={key:3,class:"field is-horizontal"},Y=y("div",{class:"field-label is-normal"},[y("label",{class:"label required"},"内存类型")],-1),$={class:"field-body"},ee={class:"select"},le=y("option",{value:""},"请选择",-1),ae=y("option",{value:"2GB DDR3"},"2GB DDR3",-1),se={key:4,class:"field is-horizontal"},oe=y("div",{class:"field-label is-normal"},[y("label",{class:"label required"},"存储器类型")],-1),de={class:"field-body"},te={class:"select"},ie=y("option",{value:""},"请选择",-1),re=y("option",{value:"8GB FLASH"},"8GB FLASH",-1),ne={key:5,class:"field is-horizontal"},ue=y("div",{class:"field-label is-normal"},[y("label",{class:"label required"},"通信连接方式")],-1),ce={class:"field-body"},pe={class:"select"},me=y("option",{value:""},"请选择",-1),ve=y("option",{value:"RS485"},"RS485",-1),fe=y("option",{value:"RS232"},"RS232",-1),ye=y("option",{value:"载波通信"},"载波通信",-1),_e=y("option",{value:"蓝牙"},"蓝牙",-1),be=y("option",{value:"遥信"},"遥信",-1),he={class:"field is-horizontal"},ge=y("div",{class:"field-label is-normal"},[y("label",{class:"label"})],-1),Ve={class:"field-body"},je=U("取消"),Ue=U("确定");var xe=u({expose:[],setup(e){const u=x(),U=z(),xe=A(),ze=R();c((()=>u.query.project||""));const Ae={model_type:"0",name:"",desc:"",model:"",vendor:"",cpu:"",ram:"",memory_type:"",conn_type:""},Re=c((()=>xe.state.channel.agent));"admin-agents-edit-id"===u.name&&Re.value&&Re.value.name&&(console.log("agent.value",Re.value),Ae.model_type=Re.value.model_type+"",Ae.name=Re.value.name,Ae.desc=Re.value.desc,Ae.model=Re.value.model,Ae.vendor=Re.value.vendor,Ae.cpu=Re.value.cpu,Ae.ram=Re.value.ram,Ae.memory_type=Re.value.memory_type,Ae.conn_type=Re.value.conn_type);const ke=p(Ae);console.log("formData.value",ke);const qe=function(){if("0"===ke.model_type){if(""===ke.model)return void ze.error("请输入设备型号");if(""===ke.name)return void ze.error("请输入设备名称");if(""===ke.cpu)return void ze.error("请选择CPU型号");if(""===ke.memory_type)return void ze.error("请选择内存类型");if(""===ke.ram)return void ze.error("请选择存储器类型")}else{if(""===ke.vendor)return void ze.error("请输入设备厂商");if(""===ke.name)return void ze.error("请输入设备名称");if(""===ke.conn_type)return void ze.error("请选择通信连接方式")}u.params.id?xe.dispatch("channel/updateAgent",((e,d)=>{for(var t in d||(d={}))l.call(d,t)&&o(e,t,d[t]);if(a)for(var t of a(d))s.call(d,t)&&o(e,t,d[t]);return e})({id:u.params.id},ke)).then((()=>{ze.success("添加成功！"),U.push({name:"admin-agents"})})):xe.dispatch("channel/createAgent",ke).then((()=>{ze.success("添加成功！"),U.push({name:"admin-agents"})}))};return m((()=>{})),(e,l)=>{const a=d,s=i,o=t,u=r,c=n;return v(),f("div",k,[y("div",q,[y("div",S,[B,y("div",O,[y(o,null,{default:_((()=>[y(s,null,{default:_((()=>[y(a,{modelValue:b(ke).model_type,"onUpdate:modelValue":l[1]||(l[1]=e=>b(ke).model_type=e),value:"0",label:"终端设备",name:"vcs_type_github",color:"primary"},null,8,["modelValue"]),y(a,{modelValue:b(ke).model_type,"onUpdate:modelValue":l[2]||(l[2]=e=>b(ke).model_type=e),value:"1",label:"端设备",name:"vcs_type_gitlab",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1})])]),"0"===b(ke).model_type?(v(),f("div",P,[w,y("div",C,[y(o,null,{default:_((()=>[y(s,null,{default:_((()=>[g(y("input",{"onUpdate:modelValue":l[3]||(l[3]=e=>b(ke).model=e),class:"input",type:"text",placeholder:"请输入设备型号"},null,512),[[V,b(ke).model]])])),_:1})])),_:1})])])):h("",!0),"1"===b(ke).model_type?(v(),f("div",D,[G,y("div",F,[y(o,null,{default:_((()=>[y(s,null,{default:_((()=>[g(y("input",{"onUpdate:modelValue":l[4]||(l[4]=e=>b(ke).vendor=e),class:"input",type:"text",placeholder:"请输入设备厂商"},null,512),[[V,b(ke).vendor]])])),_:1})])),_:1})])])):h("",!0),y("div",E,[H,y("div",L,[y(o,null,{default:_((()=>[y(s,null,{default:_((()=>[g(y("input",{"onUpdate:modelValue":l[5]||(l[5]=e=>b(ke).name=e),class:"input",type:"text",placeholder:"请输入设备名称"},null,512),[[V,b(ke).name]])])),_:1})])),_:1})])]),y("div",M,[I,y("div",N,[y(o,null,{default:_((()=>[y(s,null,{default:_((()=>[g(y("textarea",{"onUpdate:modelValue":l[6]||(l[6]=e=>b(ke).desc=e),class:"textarea",rows:"6",placeholder:"请输入设备描述"},"\n              ",512),[[V,b(ke).desc]])])),_:1})])),_:1})])]),"0"===b(ke).model_type?(v(),f("div",W,[X,y("div",Z,[y(o,null,{default:_((()=>[y(s,null,{default:_((()=>[y("div",J,[g(y("select",{"onUpdate:modelValue":l[7]||(l[7]=e=>b(ke).cpu=e)},[K,Q],512),[[j,b(ke).cpu]])])])),_:1})])),_:1})])])):h("",!0),"0"===b(ke).model_type?(v(),f("div",T,[Y,y("div",$,[y(o,null,{default:_((()=>[y(s,null,{default:_((()=>[y("div",ee,[g(y("select",{"onUpdate:modelValue":l[8]||(l[8]=e=>b(ke).memory_type=e)},[le,ae],512),[[j,b(ke).memory_type]])])])),_:1})])),_:1})])])):h("",!0),"0"===b(ke).model_type?(v(),f("div",se,[oe,y("div",de,[y(o,null,{default:_((()=>[y(s,null,{default:_((()=>[y("div",te,[g(y("select",{"onUpdate:modelValue":l[9]||(l[9]=e=>b(ke).ram=e)},[ie,re],512),[[j,b(ke).ram]])])])),_:1})])),_:1})])])):h("",!0),"1"===b(ke).model_type?(v(),f("div",ne,[ue,y("div",ce,[y(o,null,{default:_((()=>[y(s,null,{default:_((()=>[y("div",pe,[g(y("select",{"onUpdate:modelValue":l[10]||(l[10]=e=>b(ke).conn_type=e)},[me,ve,fe,ye,_e,be],512),[[j,b(ke).conn_type]])])])),_:1})])),_:1})])])):h("",!0),y("div",he,[ge,y("div",Ve,[y(o,null,{default:_((()=>[y(s,null,{default:_((()=>[y(c,null,{default:_((()=>[y(u,{to:{name:"admin-agents"},raised:""},{default:_((()=>[je])),_:1}),y(u,{onClick:l[11]||(l[11]=e=>qe()),color:"primary",raised:""},{default:_((()=>[Ue])),_:1})])),_:1})])),_:1})])),_:1})])])])])}}});export{xe as _};
