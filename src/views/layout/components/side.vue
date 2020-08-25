<template lang='pug'>
    div.side-bar(:class="isShowCollapse ? 'active' : ''")
        .header
            i(class="el-icon-menu")
            span 管理后台
        el-scrollbar(wrap-class="nav")
            el-menu(
                router
                :default-active="$route.path"
                :collapse="isShowCollapse"
                background-color="#3a3f51"
                text-color="#b4b6bd"
                :unique-opened="true"
                active-text-color="#fff"
                :collapse-transition="false"
                mode="vertical"
            )
                div(v-for="(item,index) in menu" :key="item.index")
                    el-menu-item(:index="item.path" v-if="item.children.length == 0")
                        i.icon(:class="item.meta.icon")
                        span(slot="title" v-text="item.meta.title")
                    el-submenu(class="padding-bottom-10" :index="index + ''" v-if="item.children.length != 0")
                        template(slot="title")
                            i.icon(:class="item.meta.icon")
                            span(slot="title" v-text="item.meta.title")
                        el-menu-item(:index="citem.path" v-for="(citem,cIndex) in item.children" :key="citem.cIndex + 'sec'")
                            span(slot="title" v-text="citem.meta.title")
</template>

<script>
// import INTERFACE from '@/api/interface.js';
import { SIDE_CONFIG } from '@/router/index.js';
export default {
    data(){
        return {
            menu : []
        }
    },

    mounted(){
        this.getMenuList();
    },

    methods : {

        /**
         * 获取菜单
         */
        getMenuList(){
            let arr = this.utils.deepCopy(SIDE_CONFIG);
            arr.forEach((item) => {
                item.children = item.children || [];
            })
            this.menu = arr;
            this.setNavList();
        },

        /**
         * 设置导航栏数据
         */
        setNavList(){
            let classObj = {
                0 : "c1",
                1 : "c2",
                2 : "c3",
                3 : "c4",
            }

            for(var i = 0 ; i < this.menu.length ; i ++){
                var className = classObj[i] ? classObj[i] : 'c0';
                this.menu[i].meta.icon = this.menu[i].meta.icon + ' ' + className;
            }
        }
    }
}
</script>

<style>

</style>
