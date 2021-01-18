import{d as e,h as o,o as t,i,w as n,j as s}from"./index.038a8ed4.js";import"./SearchOutlined.66d5caaf.js";import"./index.c3615560.js";import"./DownOutlined.d67419d1.js";import"./CheckOutlined.d620339d.js";import"./index.c9d7536d.js";import"./EyeOutlined.b126afd7.js";import{_ as l}from"./index.620c0fa0.js";import"./index.a3ff7a6f.js";import"./index.eb024b31.js";import"./colors.792317d4.js";import"./index.940e2f2a.js";import"./RightOutlined.101d5456.js";import"./index.3d5ce4ae.js";import"./types.749efd5b.js";import"./toInteger.555223b8.js";import"./uuid.db1f33da.js";import"./findIndex.754fd039.js";import"./_stringToArray.e17e6377.js";import"./domUtils.f518ba34.js";import"./isEqual.d82ae6f0.js";import"./_baseProperty.74f89655.js";import"./index.bb7f58db.js";import"./index.daf187d0.js";import"./UpOutlined.f46c2aed.js";import"./LeftOutlined.cbfa8e1f.js";import"./index.a445a13b.js";import"./responsiveObserve.c545f1cc.js";import"./index.b5f1be95.js";import"./index.2e8b1daa.js";import"./index.bbf40656.js";import"./index.fa174d44.js";import"./index.578eb220.js";import"./index.6c08f541.js";import"./index.d9f5aec7.js";import"./index.a9b0ab62.js";import"./transButton.4a4fa5a4.js";import"./util.0d0e9725.js";import{a as p}from"./index.a3cb0236.js";import{_ as a}from"./index.9f92e1b3.js";import"./index.f5dd0bfd.js";import"./FullscreenOutlined.5a989c67.js";import"./RightOutlined.7c1cd1fe.js";import"./useTimeout.1b66c22c.js";import"./index.90dff1fd.js";import"./index.8d91dadc.js";import"./animation.36e00bb4.js";import"./useScrollTo.f8476e81.js";import"./useAttrs.fdf628ba.js";import"./useWindowSizeFn.823037b6.js";import"./download.8376fe00.js";import{u as r}from"./useForm.711c001e.js";import"./usePageContext.d0db1a38.js";var d=e({components:{BasicForm:l,CollapseContainer:p,PageWrapper:a},setup(){const[e]=r({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[o]=r({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:o}}});d.render=function(e,l,p,a,r,d){const m=o("BasicForm"),c=o("CollapseContainer"),f=o("PageWrapper");return t(),i(f,{title:"可折叠表单示例"},{default:n((()=>[s(c,{title:"基础收缩示例"},{default:n((()=>[s(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),s(c,{title:"超过3行自动收起",class:"mt-4"},{default:n((()=>[s(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default d;