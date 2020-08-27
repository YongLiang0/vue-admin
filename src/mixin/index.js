import { mapState as rootState, mapMutations as rootMutations , mapActions as rootActions} from "vuex";

export default {
    install(Vue) {
        Vue.mixin({

            data(){
                return{
                    form_input_require : {
                        required: true, 
                        message: '请输入', 
                        trigger: 'blur'
                    },
                    form_select_require : {
                        required: true, 
                        message: '请选择', 
                        trigger: 'change'
                    }
                }
            },

            computed : {
                ...rootState([
                    "isShowCollapse",
                ]),
            },

            methods: {

                ...rootMutations([
                    'switchNavCollapse'
                ]),

                ...rootActions([
                ]),

                $error(msg) {
                    msg && this.$message({
                        type : 'error',
                        duration : 2000,
                        message : msg
                    })
                },

                $warning(msg) {
                    msg && this.$message({
                        type : 'warning',
                        duration : 2000,
                        message : msg
                    })
                },

                $success(msg) {
                    msg && this.$message({
                        type : 'success',
                        duration : 2000,
                        message : msg
                    })
                },
            }
            
        })
    }
}
