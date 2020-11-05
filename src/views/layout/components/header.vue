<template>
    <div class="header-bar" :class="isShowCollapse ? 'active' : ''">
        <div class="left">
            <ul>
                <li>
                    <a @click="onClickSwitchCosplan">
                        <i :class="isShowCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="right">
            <div class="icon">
                <i class="el-icon-s-custom"></i>
            </div>
            <div class="user">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <span>admin</span> 
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><i class="el-icon-key"></i> 修改密码</el-dropdown-item>
                        <el-dropdown-item><i class="el-icon-switch-button"></i> 退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
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

