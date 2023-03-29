import axios from "axios";
import errorCode from "@/utils/erCode";
import { getToken } from "@/utils/token"
import { ElMessage } from "element-plus";
import { logout } from "@/utils/common"
axios.defaults.headers["Content-Type"] = "application/json";
// 创建axios实例
const service = axios.create({
  baseURL: "",
  // 超时
  timeout: 30000,
});
// request拦截器
service.interceptors.request.use(
  (config) => {
    config.baseURL = process.env.VUE_APP_BASE_API;
    // console.log(config);
    // 是否需要设置 token
    // console.log(config, "config");
    const isToken = (config.headers || {}).isToken === false;
    if (getToken() && !isToken) {
      config.headers["Authorization"] = "Bearer " + getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    if (config.url == "/publicKey") {
      config.headers["Authorization"] = "";
    }
    return config;
  },
  (error) => {
    // console.log(error);
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode["default"];
    // if (code === 401) {
    //   MessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
    //       confirmButtonText: '重新登录',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     }
    //   ).then(() => {
    //     store.dispatch('LogOut').then(() => {
    //       location.href = '/';
    //     })
    //   })
    // } else
    if (code === 500) {
        ElMessage({
            message: msg,
            type: "error",
        });
      return Promise.reject(new Error(msg));
    } else if (code !== 200) {
      return Promise.reject("error");
    } else {
      return res.data;
    }
  },
  (error) => {
    // console.log("err" + error, "44566565", error.response);
    let { message } = error;
    if (error.response.status === 401) {
        ElMessage({
            message:"登录失效",
            type: "error",
        });
        logout()
    } else if (error.response.status != 200) {
      message = error.response.data.msg;
      ElMessage({
        message:message,
        type: "error",
        duration: 5 * 1000,
    });
    }

    return Promise.reject(error);
  }
);

export default service;
