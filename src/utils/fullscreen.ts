
/** 
 * @author nimo
 * @description 开启全屏
 * @param el
*/
export function fullScreen() {
    if (document.documentElement.RequestFullScreen) {
        document.documentElement.RequestFullScreen();
    }
    //兼容火狐
    if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    }
    //兼容谷歌等可以webkitRequestFullScreen也可以webkitRequestFullscreen
    if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen();
    }
    //兼容IE,只能写msRequestFullscreen
    if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }
}
/** 
 * @author nimo
 * @description 退出全屏
*/
export function outFullScreen() {
    if (document.exitFullScreen) {
        document.exitFullscreen()
    }
    //兼容火狐
    if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
    }
    //兼容谷歌等
    if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
    }
    //兼容IE
    if (document.msExitFullscreen) {
        document.msExitFullscreen()
    }
}
/** 
 * @author nimo
 * @description 获取全屏状态
*/
export function fullScreenState() {
    let el = <any>document
    return el.fullscreenElement != null ||
        el.msFullscreenElement != null ||
        el.mozFullScreenElement != null ||
        el.webkitFullscreenElement != null || false;
}