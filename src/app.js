import App from './App.vue';
import router from './router/index.js';
import store from "./store/index.js";

import "./assets/css/style.scss";

import utils from './common/utils.js';
Vue.use(utils);

import mixin from './mixin/index.js';
Vue.use(mixin);

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<app/>'
})