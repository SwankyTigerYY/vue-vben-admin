import{d as e,g as t,h as i,o,i as s,j as n,w as a,m as l}from"./index.038a8ed4.js";import"./SearchOutlined.66d5caaf.js";import"./scrollTo.c9242ea7.js";import"./index.c3615560.js";import"./DownOutlined.d67419d1.js";import"./CheckOutlined.d620339d.js";import"./index.c9d7536d.js";import"./EyeOutlined.b126afd7.js";import"./index.620c0fa0.js";import"./index.a3ff7a6f.js";import"./colors.792317d4.js";import"./index.940e2f2a.js";import"./RightOutlined.101d5456.js";import"./types.749efd5b.js";import"./toInteger.555223b8.js";import"./uuid.db1f33da.js";import{_ as r}from"./index.564de3b4.js";import"./findIndex.754fd039.js";import"./_stringToArray.e17e6377.js";import"./domUtils.f518ba34.js";import"./isEqual.d82ae6f0.js";import"./_baseProperty.74f89655.js";import"./index.bb7f58db.js";import"./index.daf187d0.js";import"./UpOutlined.f46c2aed.js";import"./LeftOutlined.cbfa8e1f.js";import"./index.a445a13b.js";import"./responsiveObserve.c545f1cc.js";import"./index.b5f1be95.js";import"./index.2e8b1daa.js";import"./index.bbf40656.js";import"./index.fa174d44.js";import"./index.578eb220.js";import"./index.6c08f541.js";import"./index.52045922.js";import"./zh_CN.8094f4d6.js";import"./useSortable.db6df861.js";import"./index.d9f5aec7.js";import"./index.a9b0ab62.js";import"./CaretDownFilled.8a1bc645.js";import"./transButton.4a4fa5a4.js";import"./util.0d0e9725.js";import"./index.a3cb0236.js";import"./CheckOutlined.da86faa1.js";import"./index.f5dd0bfd.js";import"./FullscreenOutlined.5a989c67.js";import"./RightOutlined.7c1cd1fe.js";import"./SettingOutlined.b8df148c.js";import"./useTimeout.1b66c22c.js";import"./index.90dff1fd.js";import"./index.8d91dadc.js";import"./animation.36e00bb4.js";import"./useScrollTo.f8476e81.js";import"./useAttrs.fdf628ba.js";import"./useWindowSizeFn.823037b6.js";import"./download.8376fe00.js";import"./useForm.711c001e.js";import"./clickOutside.f50cb2b2.js";import"./useExpose.e928c739.js";import{u as c}from"./useTable.69012368.js";import{getBasicColumns as d,getBasicShortColumns as m}from"./tableData.7aa0192c.js";import{d as f}from"./table.eac7103a.js";var p=e({components:{BasicTable:r},setup(){const{createMessage:e}=t(),[i,{setLoading:o,setColumns:s,getColumns:n,getDataSource:a,reload:l,getPaginationRef:r,setPagination:p,getSelectRows:u,getSelectRowKeys:j,setSelectedRowKeys:b,clearSelectedRowKeys:g}]=c({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:f,columns:d(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:i,changeLoading:function(){o(!0),setTimeout((()=>{o(!1)}),1e3)},changeColumns:function(){s(m())},reloadTable:function(){s(d()),l({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){p({current:2}),l()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){b(["0","1","2"])},clearSelect:function(){g()}}}});const u={class:"p-4"},j={class:"mb-4"},b=l("还原"),g=l("开启loading"),C=l("更改Columns"),x=l("获取Columns"),k=l("获取表格数据"),S=l("跳转到第2页"),w={class:"mb-4"},T=l("获取选中行"),R=l("获取选中行Key"),_=l("设置选中行"),y=l("清空选中行"),h=l("获取分页信息");p.render=function(e,t,l,r,c,d){const m=i("a-button"),f=i("BasicTable");return o(),s("div",u,[n("div",j,[n(m,{class:"mr-2",onClick:e.reloadTable},{default:a((()=>[b])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.changeLoading},{default:a((()=>[g])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.changeColumns},{default:a((()=>[C])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getColumn},{default:a((()=>[x])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getTableData},{default:a((()=>[k])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:a((()=>[S])),_:1},8,["onClick"])]),n("div",w,[n(m,{class:"mr-2",onClick:e.getSelectRowList},{default:a((()=>[T])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:a((()=>[R])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:a((()=>[_])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.clearSelect},{default:a((()=>[y])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getPagination},{default:a((()=>[h])),_:1},8,["onClick"])]),n(f,{onRegister:e.registerTable},null,8,["onRegister"])])};export default p;