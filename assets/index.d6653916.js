import{d as e,aW as t,N as a,e as r,h as s,o as n,i as o,w as i,m as p,l as d,j as m}from"./index.038a8ed4.js";import"./DownOutlined.d67419d1.js";import"./index.eb024b31.js";import"./index.940e2f2a.js";import"./RightOutlined.101d5456.js";import"./index.3d5ce4ae.js";import"./types.749efd5b.js";import"./toInteger.555223b8.js";import"./isEqual.d82ae6f0.js";import"./transButton.4a4fa5a4.js";import{_ as u}from"./index.9f92e1b3.js";import"./index.8d91dadc.js";import"./usePageContext.d0db1a38.js";var l=e({name:"TestTab",components:{PageWrapper:u},setup(){const{currentRoute:e}=t();return{params:a((()=>r(e).params))}}});const j=m("br",null,null,-1),f=p(" Keep Alive "),b=m("input",null,null,-1);l.render=function(e,t,a,r,m,u){const l=s("PageWrapper");return n(),o(l,{title:"带参数标签页",content:"支持带参数多tab缓存"},{default:i((()=>[p(" Current Param : "+d(e.params)+" ",1),j,f,b])),_:1})};export default l;