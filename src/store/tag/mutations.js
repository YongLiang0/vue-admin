
import { utils } from "@/common/utils.js";

const mutations = {
    
    /**
     * 添加tagView
     */
    addTagView(state,view){
        let isExist = state.tagViewList.some((item) => { return item.path == view.path});
        if(isExist){
            return;
        }

        let itemObj = {
            path : view.path,
            title : view.meta.title
        };
        state.tagViewList.push(itemObj);
        utils.setLocalStorage('STR_TAG_VIEW',state.tagViewList);
    },
    
    /**
     * 单个tag删除事件
     * @param {} state 
     * @param {*} index 
     */
    deleteTagView(state,index){
        state.tagViewList.splice(index,1);
        utils.setLocalStorage('STR_TAG_VIEW',state.tagViewList);
    }


};

export default mutations;
