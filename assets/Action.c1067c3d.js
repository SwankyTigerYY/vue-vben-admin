import{d as s,r as o,e as t,cr as e,cs as r,h as a,o as l,i,j as c,aR as n,aS as d,l as m,bz as p,m as f}from"./index.038a8ed4.js";import"./DownOutlined.d67419d1.js";import"./index.eb024b31.js";import"./index.940e2f2a.js";import"./RightOutlined.101d5456.js";import"./index.3d5ce4ae.js";import"./types.749efd5b.js";import"./toInteger.555223b8.js";import"./_stringToArray.e17e6377.js";import"./domUtils.f518ba34.js";import"./isEqual.d82ae6f0.js";import"./transButton.4a4fa5a4.js";import{a as u,_ as j}from"./index.a3cb0236.js";import{_ as b}from"./index.9f92e1b3.js";import"./RightOutlined.7c1cd1fe.js";import"./useTimeout.1b66c22c.js";import"./index.90dff1fd.js";import"./index.8d91dadc.js";import"./animation.36e00bb4.js";import"./useScrollTo.f8476e81.js";import"./usePageContext.d0db1a38.js";var x=s({components:{CollapseContainer:u,ScrollContainer:j,PageWrapper:b},setup(){const s=o(null),e=()=>{const o=t(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){e().scrollTo(s)},scrollRef:s,scrollBottom:function(){e().scrollBottom()}}}});const _=p("data-v-6abcde9e");e("data-v-6abcde9e");const C={class:"my-4"},T=f("滚动到100px位置"),g=f("滚动到800px位置"),v=f("滚动到顶部"),k=f("滚动到底部"),y={class:"scroll-wrap"},R={class:"p-3"};r();const h=_(((s,o,t,e,r,p)=>{const f=a("a-button"),u=a("ScrollContainer"),j=a("PageWrapper");return l(),i(j,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:_((()=>[c("div",C,[c(f,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:_((()=>[T])),_:1}),c(f,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:_((()=>[g])),_:1}),c(f,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:_((()=>[v])),_:1}),c(f,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:_((()=>[k])),_:1})]),c("div",y,[c(u,{class:"mt-4",ref:"scrollRef"},{default:_((()=>[c("ul",R,[(l(),i(n,null,d(100,(s=>c("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},m(s),1))),64))])])),_:1},512)])])),_:1})}));x.render=h,x.__scopeId="data-v-6abcde9e";export default x;