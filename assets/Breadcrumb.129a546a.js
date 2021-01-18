import{j as e,aH as t,aI as r,d as n,aN as a,aJ as o,r as i,aW as l,aQ as s,dG as u,b1 as c,bk as d,bU as m,aY as h,t as f,aD as p,bL as v,aE as b,h as g,o as O,i as y,w as j,k,l as x,m as B}from"./index.038a8ed4.js";import"./DownOutlined.d67419d1.js";import"./index.940e2f2a.js";import"./RightOutlined.101d5456.js";import{B as C}from"./index.3d5ce4ae.js";import"./types.749efd5b.js";import"./toInteger.555223b8.js";import"./isEqual.d82ae6f0.js";import"./index.8d91dadc.js";var w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"};function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E=function(n,a){var o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){H(e,t,r[t])}))}return e}({},n,a.attrs);return e(r,t(o,{icon:w}),null)};E.displayName="HomeOutlined",E.inheritAttrs=!1;var M=n({name:"LayoutBreadcrumb",components:{HomeOutlined:E,Icon:a,[C.name]:C},props:{theme:o.oneOf(["dark","light"])},setup(){const e=i([]),{currentRoute:t}=l(),{prefixCls:r}=s("layout-breadcrumb"),{getShowBreadCrumbIcon:n}=d(),{t:a}=u();return c((()=>{var r,n;if(t.value.name===h)return;const o=null==(r=t.value)?void 0:r.matched;if(!o||0===o.length)return;let i=function(e){let t=v(e,(e=>{const{meta:t}=e;if(!t)return!1;const{title:r,hideBreadcrumb:n,hideMenu:a}=t;return!(!r||n||a)})).filter((e=>{var t,r;return!(null==(t=e.meta)?void 0:t.hideBreadcrumb)||!(null==(r=e.meta)?void 0:r.hideMenu)}));return t=t.filter((e=>e.path!==p.BASE_HOME)),t}(f(o));const l=i.filter((e=>e.path!==p.BASE_HOME));l.length===i.length&&l.unshift({path:p.BASE_HOME,meta:{title:a("layout.header.home"),isLink:!0}}),(null==(n=t.value.meta)?void 0:n.currentActiveMenu)&&l.push(t.value),e.value=l})),{routes:e,t:a,prefixCls:r,getShowBreadCrumbIcon:n,handleClick:function(e,t,r){null==r||r.preventDefault();const{children:n,redirect:a,meta:o}=e;if((null==n?void 0:n.length)&&!a)return void(null==r||r.stopPropagation());if(null==o?void 0:o.carryParam)return;const i=b();if(a&&m(a))i(a);else{const e=t.slice(1),r=e.pop()||"";let n=`${e.pop()||""}/${r}`;n=/^\//.test(n)?n:`/${n}`,i(n)}},hasRedirect:function(e,t){var r;return!!(null==(r=null==t?void 0:t.meta)?void 0:r.isLink)||e.indexOf(t)!==e.length-1}}}});const S={key:1};M.render=function(t,r,n,a,o,i){const l=g("Icon"),s=g("router-link"),u=g("a-breadcrumb");return O(),y("div",{class:[t.prefixCls,`${t.prefixCls}--${t.theme}`]},[e(u,{routes:t.routes},{itemRender:j((({route:e,routes:r,paths:n})=>[t.getShowBreadCrumbIcon&&e.meta.icon?(O(),y(l,{key:0,icon:e.meta.icon},null,8,["icon"])):k("",!0),t.hasRedirect(r,e)?(O(),y(s,{key:2,to:"",onClick:r=>t.handleClick(e,n,r)},{default:j((()=>[B(x(t.t(e.meta.title)),1)])),_:2},1032,["onClick"])):(O(),y("span",S,x(t.t(e.meta.title)),1))])),_:1},8,["routes"])],2)};export default M;