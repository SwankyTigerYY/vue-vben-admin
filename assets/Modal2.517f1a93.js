import{d as s,h as e,o as t,i as o,w as i,j as a,aH as r,m as d}from"./index.038a8ed4.js";import"./_stringToArray.e17e6377.js";import"./domUtils.f518ba34.js";import"./isEqual.d82ae6f0.js";import"./index.a3cb0236.js";import{_ as l,a as n}from"./index.f5dd0bfd.js";import"./FullscreenOutlined.5a989c67.js";import"./RightOutlined.7c1cd1fe.js";import"./useTimeout.1b66c22c.js";import"./index.90dff1fd.js";import"./index.8d91dadc.js";import"./animation.36e00bb4.js";import"./useScrollTo.f8476e81.js";import"./useAttrs.fdf628ba.js";import"./useWindowSizeFn.823037b6.js";var p=s({components:{BasicModal:l},setup(){const[s,{closeModal:e,setModalProps:t}]=n();return{register:s,closeModal:e,setModalProps:()=>{t({title:"Modal New Title"})}}}});const m=d("从内部关闭弹窗"),c=d("从内部修改title");p.render=function(s,d,l,n,p,f){const u=e("a-button"),j=e("BasicModal");return t(),o(j,r(s.$attrs,{onRegister:s.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:i((()=>[a(u,{type:"primary",onClick:s.closeModal,class:"mr-2"},{default:i((()=>[m])),_:1},8,["onClick"]),a(u,{type:"primary",onClick:s.setModalProps},{default:i((()=>[c])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default p;