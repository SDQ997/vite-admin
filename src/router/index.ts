import { createRouter , createWebHashHistory , RouteRecordRaw } from "vue-router"
import { getToken } from "@/utils/token"
import { menuList } from "@/api/menu/menu.ts"
import { createApp } from 'vue'
import App from '@/App.vue'
const app = createApp(App)
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
        redirect:"/index/home",
        component:()=>import("@/views/index/index.vue"),
        children:[]
    },
    // {
    //     path: '/:pathMatch(.*)',
    //     name: 'error',
    //     component:()=>import("@/views/other/error.vue"),
    // },
]

// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes //路由表
})
const initMenu = async ()=>{
    let modules = import.meta.glob("../views/**")
    menuList().then(res=>{
        res.forEach((item)=>{
            let obj = {
                name:item.name,
                path:item.path,
                component: modules[`../views/${item.componentsPath}.vue`],
                meta:{
                    title:item.title,
                    keepAlive:item.keepAlive,
                    role:item.role,
                    id:item.id,
                    parentId:item.parentId,
                    bread:item.bread,
                    children:item.children,
                    icon:item.icon
                }
            }
            router.addRoute("index",obj)
        })
    })
}
router.beforeEach(async (to,from,next)=>{
    let token = getToken()
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
            if(to.matched.length == 0){
                await initMenu()
                next({ ...to, replace: true })
            }else{
                next()
            }
        }
    }
})
export default router