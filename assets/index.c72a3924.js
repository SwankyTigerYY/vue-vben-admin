var e=Object.assign;import{d as t,r as i,a as r,aF as o,cr as s,cs as n,h as d,o as a,i as p,bz as m,j,a2 as f,bc as c,k as u}from"./index.038a8ed4.js";import"./SearchOutlined.66d5caaf.js";import"./index.c3615560.js";import"./DownOutlined.d67419d1.js";import"./CheckOutlined.d620339d.js";import"./index.c9d7536d.js";import"./EyeOutlined.b126afd7.js";import"./index.620c0fa0.js";import"./index.a3ff7a6f.js";import"./index.eb024b31.js";import"./colors.792317d4.js";import"./index.940e2f2a.js";import"./RightOutlined.101d5456.js";import"./index.3d5ce4ae.js";import"./types.749efd5b.js";import"./toInteger.555223b8.js";import"./uuid.db1f33da.js";import"./findIndex.754fd039.js";import"./_stringToArray.e17e6377.js";import"./domUtils.f518ba34.js";import"./isEqual.d82ae6f0.js";import"./_baseProperty.74f89655.js";import"./index.bb7f58db.js";import"./index.daf187d0.js";import"./UpOutlined.f46c2aed.js";import"./LeftOutlined.cbfa8e1f.js";import"./index.a445a13b.js";import"./responsiveObserve.c545f1cc.js";import"./index.b5f1be95.js";import"./index.2e8b1daa.js";import"./index.bbf40656.js";import"./index.fa174d44.js";import"./index.578eb220.js";import"./index.6c08f541.js";import"./index.d9f5aec7.js";import{S as l}from"./index.66099454.js";import"./index.a9b0ab62.js";import"./transButton.4a4fa5a4.js";import"./util.0d0e9725.js";import"./index.a3cb0236.js";import"./index.4e07c2e6.js";import"./index.f67f9032.js";import{_ as b}from"./index.9f92e1b3.js";import"./index.f5dd0bfd.js";import"./FullscreenOutlined.5a989c67.js";import"./RightOutlined.7c1cd1fe.js";import"./useTimeout.1b66c22c.js";import"./index.90dff1fd.js";import"./index.8d91dadc.js";import"./animation.36e00bb4.js";import"./useScrollTo.f8476e81.js";import"./useAttrs.fdf628ba.js";import"./useWindowSizeFn.823037b6.js";import"./download.8376fe00.js";import"./useForm.711c001e.js";import"./usePageContext.d0db1a38.js";import"./data.2505cb7f.js";import x from"./Step1.a8f4bcb9.js";import S from"./Step2.79044c0b.js";import v from"./Step3.da44f199.js";var h=t({components:{Step1:x,Step2:S,Step3:v,PageWrapper:b,[l.name]:l,[l.Step.name]:l.Step},setup(){const t=i(0),s=r({initSetp2:!1,initSetp3:!1});return e({current:t,handleStep1Next:function(e){t.value++,s.initSetp2=!0},handleStep2Next:function(e){t.value++,s.initSetp3=!0},handleRedo:function(){t.value=0,s.initSetp2=!1,s.initSetp3=!1},handleStepPrev:function(){t.value--}},o(s))}});const O=m("data-v-6a09ea8d");s("data-v-6a09ea8d");const g={class:"step-form-form"},N={class:"mt-5"};n();const P=O(((e,t,i,r,o,s)=>{const n=d("a-step"),m=d("a-steps"),l=d("Step1"),b=d("Step2"),x=d("Step3"),S=d("PageWrapper");return a(),p(S,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:O((()=>[j("div",g,[j(m,{current:e.current},{default:O((()=>[j(n,{title:"填写转账信息"}),j(n,{title:"确认转账信息"}),j(n,{title:"完成"})])),_:1},8,["current"])]),j("div",N,[f(j(l,{onNext:e.handleStep1Next},null,8,["onNext"]),[[c,0===e.current]]),e.initSetp2?f((a(),p(b,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[c,1===e.current]]):u("",!0),e.initSetp3?f((a(),p(x,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[c,2===e.current]]):u("",!0)])])),_:1})}));h.render=P,h.__scopeId="data-v-6a09ea8d";export default h;