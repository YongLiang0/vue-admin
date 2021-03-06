import Axios from 'axios';
import {utils} from '@/common/utils.js';

Axios.interceptors.request.use((request) => {
    return request;
})

//设置拦截器 重试机制
Axios.interceptors.response.use(response => {
    // if(response.data.result == 0){
    //     return Promise.resolve(response.data);
	// }
	// else{
	// 	if(response.data.desc){
	// 		Vue.$toast(response.data.desc);
	// 	}
	// 	return Promise.resolve(response.data);
	// }
}, err => {
    // if(err.response.status === 401){
	// 	window.localStorage.setItem('STORAGE_TOKEN','');
	// 	if(window.GLOBAL_SYMBOL == 'im'){
	// 		return;
	// 	}
	// 	if(utils.isWechateBrower()){
	// 		return;
	// 	}
	// 	utils.jumpLogin();
	// }
	// else{
	// 	Vue.$toast(err.response.data.desc);
	// }
});

const request = (url, params = {}, headers = {}, method = 'get') => {
	let options = {
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			...headers,
		},
		method: method
    };
    
	if (method === 'post' || method == 'put') {
		if (options.headers['Content-Type'] === 'application/json;charset=UTF-8') {
			options.data = params;
		}
		else {
			options.params = params;
		}
	}
	else if (method === 'get' || method == 'delete') {
		options.params = params;
	}
	return Axios({ url, ...options })
};

export const get = request;

export const post = (url, params, headers) => request(url, params, headers, 'post');

export const del = (url, params, headers) => request(url, params, headers, 'delete');

export const put = (url, params, headers) => request(url, params, headers, 'put');