import{d as e,N as s,bK as o,dC as i,bJ as n,h as r,o as t,i as a,j as d,w as m,m as l,l as p}from"./index.038a8ed4.js";import{D as u}from"./index.fa174d44.js";var c=e({name:"CurrentPermissionMode",components:{Divider:u},setup(){const e=s((()=>n.getProjectConfig.permissionMode)),{togglePermissionMode:r}=i();return{permissionMode:e,PermissionModeEnum:o,togglePermissionMode:r}}});const M={class:"mt-2"},f=l(" 当前权限模式： "),g=l(" 切换权限模式 ");c.render=function(e,s,o,i,n,u){const c=r("a-button"),P=r("Divider");return t(),a("div",M,[f,d(c,{type:"link"},{default:m((()=>[l(p(e.permissionMode===e.PermissionModeEnum.BACK?"后台权限模式":"前端角色权限模式"),1)])),_:1}),d(c,{class:"ml-4",onClick:e.togglePermissionMode,type:"primary"},{default:m((()=>[g])),_:1},8,["onClick"]),d(P)])};export default c;