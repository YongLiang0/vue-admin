import App from './App.vue';
import router from './router/index.js';
import store from "./store/index.js";

/**
 * css库
 */
import "./assets/css/style.scss";

/**
 * 全局组件注册
 */
import './components/index.js';

/**
 * 全局工具了方法注册
 */
import utils from './common/utils.js';
Vue.use(utils);

/**
 * 全局mixin
 */
import mixin from './mixin/index.js';
Vue.use(mixin);

/**
 * vue注册
 */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<app/>'
});