/**
 * 接口
 */
import {get, post, put, del} from "./http";
import API from "./api";

const INTERFACE = {
    
    // 获取用户
    testInterface(params){
        return post(API.API_TEST,params)
    },

   
};

export default INTERFACE;
