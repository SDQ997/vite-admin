/** mock数据请求方式,真实请求请使用utils/request并根据实际情况修改配置参数及回调 */ 
import api from "@/mock/api/api";
const request = (options)=>{
    return new Promise((resolve,reject)=>{
        resolve(api(options.url,options.data))
    });
}
export default request;