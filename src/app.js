import App from './App.vue';
import router from './router/index.js';

import "./assets/css/style.scss";

import utils from './common/utils.js';
Vue.use(utils);

new Vue({
    el: '#app',
    router,
    // store,
    components: { App },
    template: '<app/>'
})