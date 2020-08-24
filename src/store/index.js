import root from "./root/index.js";
import tagView from "./tag/index.js";

/**
 * @desc store根节点 多个store模块组合
 */
export default new Vuex.Store({
    ...root,
    modules: {
        tagView
    }
});
