/**
 * create by ly
 * 工具类
 */

class utils {

    /**
     * 去空格
     * @param {*} str
     */
    static trim(str){
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }

    /**
	 * 深拷贝
	 * @param {Object} obj
	 */
    static deepCopy(obj){
		var str, newobj = obj.constructor === Array ? [] : {};
		if(typeof obj !== 'object')
		{
			return;
		}
		else if(window.JSON)
		{
			str = JSON.stringify(obj), //系列化对象
				newobj = JSON.parse(str); //还原
		}
		else
		{
			for(var i in obj){
				newobj[i] = typeof obj[i] === 'object' ? cloneObj(obj[i]) : obj[i];
			}
		}
		return newobj;
    }

    /**
     * 判断是否为空对象
     * @param {*} obj
     */
    static isEmptyObject(obj ){
        var name;
		for ( name in obj ) {
			return false;
		}
		return true;
    }

    /**
     * 生成随机数
     * @param {*} n
     */
    static randomNumber(n){
        var rnd = "";
        for(var i = 0; i < n ; i ++){
            rnd += Math.floor(Math.random() * 10);
        }
        return rnd;
    }

    /**
     * 根据对象拼接get请求的url参数
     */
    static splicingUrlParams(obj){
        let url = '';
        for(var i in obj){
            url += `${i}=${obj[i]}&`;
        }
        url = `?${url.substring(0,url.length - 1)}`;
        return url;
    }
};

var obj = {
    install(Vue){
        Vue.prototype.utils = utils;
    }
};

export {
    obj as default,
    utils
};
