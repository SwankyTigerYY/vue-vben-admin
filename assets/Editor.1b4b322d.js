import{d as e,bS as i,g as t,h as s,o,i as r,w as d,j as a}from"./index.038a8ed4.js";import"./SearchOutlined.66d5caaf.js";import"./index.c3615560.js";import"./DownOutlined.d67419d1.js";import"./CheckOutlined.d620339d.js";import"./index.c9d7536d.js";import"./EyeOutlined.b126afd7.js";import{_ as n}from"./index.620c0fa0.js";import"./index.a3ff7a6f.js";import"./index.eb024b31.js";import"./colors.792317d4.js";import"./index.940e2f2a.js";import"./RightOutlined.101d5456.js";import"./index.3d5ce4ae.js";import"./types.749efd5b.js";import"./toInteger.555223b8.js";import"./uuid.db1f33da.js";import"./findIndex.754fd039.js";import"./_stringToArray.e17e6377.js";import"./domUtils.f518ba34.js";import"./isEqual.d82ae6f0.js";import"./_baseProperty.74f89655.js";import"./index.bb7f58db.js";import"./index.daf187d0.js";import"./UpOutlined.f46c2aed.js";import"./LeftOutlined.cbfa8e1f.js";import"./index.a445a13b.js";import"./responsiveObserve.c545f1cc.js";import"./index.b5f1be95.js";import"./index.2e8b1daa.js";import"./index.bbf40656.js";import"./index.fa174d44.js";import"./index.578eb220.js";import"./index.6c08f541.js";import"./index.d9f5aec7.js";import"./index.a9b0ab62.js";import"./transButton.4a4fa5a4.js";import"./util.0d0e9725.js";import{a as m}from"./index.a3cb0236.js";import{_ as p}from"./index.9f92e1b3.js";import"./index.f5dd0bfd.js";import"./FullscreenOutlined.5a989c67.js";import"./RightOutlined.7c1cd1fe.js";import"./useTimeout.1b66c22c.js";import"./index.90dff1fd.js";import"./index.8d91dadc.js";import"./animation.36e00bb4.js";import"./useScrollTo.f8476e81.js";import"./useAttrs.fdf628ba.js";import"./useWindowSizeFn.823037b6.js";import"./download.8376fe00.js";import"./usePageContext.d0db1a38.js";import{T as l}from"./index.6e848933.js";const f=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:t})=>i(l,{value:e[t],onChange:i=>{e[t]=i}})}];var j=e({components:{BasicForm:n,CollapseContainer:m,PageWrapper:p},setup(){const{createMessage:e}=t();return{schemas:f,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});j.render=function(e,i,t,n,m,p){const l=s("BasicForm"),f=s("CollapseContainer"),j=s("PageWrapper");return o(),r(j,{title:"富文本嵌入表单示例"},{default:d((()=>[a(f,{title:"富文本表单"},{default:d((()=>[a(l,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default j;