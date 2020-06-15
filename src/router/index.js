/**
 * create by ly
 * 路由配置
 */

import Router from 'vue-router';

const getView = (path) => {
    const page = () => import(`../views/${path}.vue`);
    return page;
};

const _page_config = [
    {
        path : '/index',
        component : getView('index/index'),
        name : 'index',
    }
];

const _root_config = [
    {
        path : '/',
        redirect : "/index"
    },
    {
        path: '',
        component: getView('layout/index'),
        children : _page_config
    }
];

const router = new Router({
    routes : _root_config
});

export default router;