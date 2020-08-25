/**
 * create by ly
 * 自动注册全局components
 * 注：文件夹的名称即为components在页面的名称
 * 列：uploadImage ==> <upload-image></upload-image>
 */

const requireComponent = require.context( '../components',true, /\.vue$/);

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    var componentName = fileName.split("/")[1];
    Vue.component(
        componentName,
        componentConfig.default || componentConfig
    )
})
