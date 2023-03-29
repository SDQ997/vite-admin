import request from '@/utils/mockRequest'

export const menuList = (data)=>{
    request({
        url:"menu/list",
        method:"get",
        data:data
    })
}