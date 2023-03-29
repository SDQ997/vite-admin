/**
 * @author nimo
 * @description 退出登录
 * */ 
import router from "@/router/index.ts";
export const logout = ()=>{
    localStorage.clear()
    router.push("/login")
}