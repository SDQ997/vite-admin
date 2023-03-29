import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
const routes: Array<RouteRecordRaw> = [
    {
        name:"/",
        path:"/",
        redirect:"/login"
    },
    {
        name:"login",
        path:"/login",
        component:()=>import("@/views/login/index.vue")
    },
    {
        name:"index",
        path:"/index",
        component:()=>import("@/views/index/index.vue")
    }
]

// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes //路由表
})
router.beforeEach((to,from,next)=>{
    let token = localStorage.getItem("token")
    if(!token){
        if(to.name == "login"){
            next()
        }else{
            next("/login")
        }
    }else{
        if(to.name == "login"){
            next("/index")
        }else{
            next()
        }
    }
})
export default router