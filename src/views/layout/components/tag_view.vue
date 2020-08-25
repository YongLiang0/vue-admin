<template>
    <div class="tagview"> 
        <el-scrollbar>
            <div class="tag-item"
                :class="isActive(item) ? 'active' : ''"
                @click="onClickTagItem(item)"
                v-for="(item, index) in tagViewList" :key="index">
                <span v-text="item.title"></span>
                <i class="el-icon-close" @click.stop="onCloseItem(index)"></i>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState,mapMutations } = createNamespacedHelpers("tagView");
export default {
    data() {
        return {
        }
    },

    computed: {
        ...mapState([
            'tagViewList'
        ])
    },

    watch : {
        $route(){
            this.addTagView(this.$route);
        }
    },

    mounted() {
        this.addTagView(this.$route)
    },

    methods : {

        ...mapMutations([
            'addTagView',
            'deleteTagView'
        ]),

        /**
         * 获取当前路由的active状态
         */
        isActive(route) {
            return route.path === this.$route.path
        },

        /**
         * 单个tag点击事件
         */
        onClickTagItem(item){
            if(item.path != this.$route.path){
                this.$router.push(item.path);
            }
        },

        /**
         * 删除单个tag
         */
        onCloseItem(index){
            this.deleteTagView(index);
            if(this.tagViewList.length == 0){
                if(this.$route.path != '/index'){
                    this.$router.push('/index');
                }
                else{
                    this.addTagView(this.$route)
                }
            }
            else{
                let last = this.tagViewList[this.tagViewList.length - 1];
                this.$router.push(last.path);
                
            }
        }
    },

}
</script>