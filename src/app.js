import App from './App.vue';
import router from './router/index.js';

new Vue({
    el: '#app',
    router,
    // store,
    components: { App },
    template: '<app/>'
})