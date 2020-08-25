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
        meta : {
            title : '首页',
            icon : 'el-icon-s-home'
        }
    },
    {
        path : '/layout',
        component : getView('tem/index'),
        name : 'index',
        meta : {
            title : '布局',
            icon : 'el-icon-document'
        },
        children : [
            {
                path : '/layout/table',
                component : getView('tem/table/index'),
                name : 'table',
                meta : {
                    title : '表格',
                    icon : ''
                }
            },
            {
                path : '/layout/form',
                component : getView('tem/form/index'),
                name : 'form',
                meta : {
                    title : '表单',
                    icon : ''
                }
            }
        ]
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

export const SIDE_CONFIG = _page_config;
export default router;