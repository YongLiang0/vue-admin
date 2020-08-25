<template>
    <div class="header-bar" :class="isShowCollapse ? 'active' : ''">
        <div class="left">
            <ul>
                <li><a @click="onClickSwitchCosplan">
                    <i :class="isShowCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userName : 'liangyong'
        }
    },

    mounted(){
    },

    methods : {

        onClickSwitchCosplan(){
            this.switchNavCollapse(!this.isShowCollapse);
        }
    }
}
</script>

