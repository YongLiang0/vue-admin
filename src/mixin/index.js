import { mapState as rootState, mapMutations as rootMutations , mapActions as rootActions} from "vuex";

export default {
    install(Vue) {
        Vue.mixin({

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
