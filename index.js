// 导入组件
import yjyToTop from './yjy-to-top'; 

let plugin = {};
plugin.install = function( Vue ){
    Vue.component(yjyToTop.name, yjyToTop); // 注册组件
}

// 当使用Vue.use(plugin)安装插件时，
// 实际上就是在调用这里暴露出的对象的
// install方法，因此务必确保这里带有install方法
export default plugin;
