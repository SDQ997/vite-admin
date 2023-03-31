import database from "../database/database"
export default (url,data)=>{
    if(url == "menu/list"){
        return database()[url]
        // return database()[url].filter((item)=>{
        //     console.log(localStorage.getItem("role"))
        //     return item.role.includes(localStorage.getItem("role"))
        // })
    }
}