export default () => {
    return {
        "menu/list": [
            {
                name: "home",
                path: "home",
                componentsPath:"home/index",
                meta:{
                    title: "menu.home",
                    role: ["superadmin"],
                    id: '1',
                    icon:"House",
                    parentId: null,
                    keepAlive:true,
                    bread:true,
                },
                children:[]
            },
            {
                name: "doc",
                path: "doc",
                componentsPath:"doc/index",
                meta:{
                    title: "menu.doc",
                    role: ["superadmin"],
                    id: '2',
                    icon:"Document",
                    parentId: null,
                    keepAlive:true,
                    bread:true,
                },
                children:[]
            },
            {
                meta:{
                    title: "menu.component",
                    role: ["superadmin"],
                    id: '3',
                    icon:"Grid",
                    parentId: null,
                    keepAlive:false,
                    bread:false,
                },
                children:[]
            },
            {
                name: "richText",
                path: "richText",
                componentsPath:"components/richText/index",
                meta:{
                    title: "menu.richText",
                    role: ["superadmin"],
                    id: '3-1',
                    icon:"",
                    parentId: "3",
                    keepAlive:false,
                    bread:true,
                },
                children:[]
            },
            {
                name: "sticky",
                path: "sticky",
                componentsPath:"components/sticky/index",
                meta:{
                    title: "menu.sticky",
                    role: ["superadmin"],
                    id: '3-2',
                    icon:"",
                    parentId: "3",
                    keepAlive:true,
                    bread:true,
                },
                children:[]
            },
            {
                name: "dropZone",
                path: "dropZone",
                componentsPath:"components/dropZone/index",
                meta:{
                    title: "menu.dropZone",
                    role: ["superadmin"],
                    id: '3-3',
                    icon:"",
                    parentId: "3",
                    keepAlive:true,
                    bread:true,
                },
                children:[]
            }
        ]
    }
}