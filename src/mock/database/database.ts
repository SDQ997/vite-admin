export default () => {
    return {
        "menu/list": [
            {
                name:"index",
                path:"/index",
                redirect:"/index/home",
                component:()=>import("@/views/index/index.vue"),
                children:[
                    {
                        title: "首页",
                        name:"home",
                        path: "home",
                        component:()=>import("@/views/home/index.vue"),
                        role: ["superadmin"],
                        id:'1',
                        parentId:null,
                        child: []
                    }
                ]
            }
        ]
    }
}