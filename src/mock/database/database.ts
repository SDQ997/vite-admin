export default () => {
    return {
        "menu/list": [
            {
                title: "menu.home",
                name: "home",
                path: "home",
                componentsPath:"home/index",
                role: ["superadmin"],
                id: '1',
                icon:"House",
                parentId: null,
                keepAlive:true,
                bread:true,
                children:[]
            },
            {
                title: "menu.doc",
                name: "doc",
                path: "doc",
                componentsPath:"doc/index",
                role: ["superadmin"],
                id: '2',
                icon:"Document",
                parentId: null,
                keepAlive:true,
                bread:true,
                children:[]
            },
        ]
    }
}