import request from '@/utils/mockRequest'
export const menuList = (data)=>{
    return request({
        url:"menu/list",
        method:"get",
        data:data
    })
}