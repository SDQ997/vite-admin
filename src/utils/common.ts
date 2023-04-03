/**
 * @author nimo
 * @description 退出登录
 * */ 
import router from "@/router/index.ts";
export const logout = ()=>{
    localStorage.clear()
    router.push("/login")
}

/**
 * @author nimo
 * @description 获取静态资源
 * */
export const getAssetsFile  = (url: string)=>{
    if(url){
        return new URL(url, import.meta.url).href;
    }else{
        return null
    }
}