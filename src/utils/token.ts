/**
 * @author nimo
 * @description 用户获取本地生成的token，demo项目,token不会过期
 * */ 
const _charStr = 'abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789';
export const createToken = (len:number = 128)=>{
    let min = 0, max = _charStr.length-1, _str = '';
    //判断是否指定长度，否则默认长度为15
    //循环生成字符串
    for(var i = 0, index; i < len; i++){
        index = RandomIndex(min, max, i);
        _str += _charStr[index];
    }
    return _str;
}
function RandomIndex(min, max, i){
    let index = Math.floor(Math.random()*(max-min+1)+min),
        numStart = _charStr.length - 10;
    //如果字符串第一位是数字，则递归重新获取
    if(i==0&&index>=numStart){
        index = RandomIndex(min, max, i);
    }
    //返回最终索引值
    return index;
}