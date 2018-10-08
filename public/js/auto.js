/**
 * Created by Jimmy on 2017/3/14 0014.
 * function 浏览器检测，放缩页面
 */
(function () {
  checkNavigator()
  if(mobilecheck()){
    //跳转到手机对应的页面
    var CURRENT_BASE_URL = location.href.split('?')[0];
    var CURRENT_SEARCH = location.search
    if(location.href === 'https://www.fengke.club' || location.href === 'https://www.fengke.club/' || location.href === 'https://www.fengke.club/GeekMart/views/' || location.href === 'https://www.fengke.club/GeekMart/views'){
      location.href = '/GeekMartMobile/views/index.html'
    }else if(location.href === 'http://www.geek-learning.com' || location.href === 'http://www.geek-learning.com/' || location.href === 'http://www.geek-learning.com/GeekMart/views/' || location.href === 'http://www.geek-learning.com/GeekMart/views'){
      location.href = '/GeekMartMobile/views/index.html'
    }else if(CURRENT_BASE_URL.indexOf('management') > -1){    //管理中心页
      location.href = '/GeekMartMobile/views/user/user.html#/'
    }else if(CURRENT_BASE_URL.indexOf('common/instantMessenger') > -1){ //私信页
      location.href = '/GeekMartMobile/views/user/user.html#/privateLetter/letterList'
    }else if(CURRENT_BASE_URL.indexOf('community/subforum') > -1){ 
      location.href =  '/GeekMartMobile/views/community/subForum.html' + CURRENT_SEARCH
    }else if(CURRENT_BASE_URL.indexOf('common/customerService') > -1){//在线客服
      location.href = '/GeekMartMobile/views/user/user.html#/customerService'
    }else if(CURRENT_BASE_URL.indexOf('mall/editProduct') > -1){
      location.href = '/GeekMartMobile/views/mall/editGoods.html' + CURRENT_SEARCH
    }else{
      CURRENT_BASE_URL = CURRENT_BASE_URL.replace(/\/GeekMart\/views/g, '/GeekMartMobile/views')
      if(CURRENT_BASE_URL.indexOf('.html') === -1){
        CURRENT_BASE_URL = CURRENT_BASE_URL + '.html'
      }
      var COMPLETE_URL = CURRENT_BASE_URL + CURRENT_SEARCH
      location.href = COMPLETE_URL
    }
  }
  var width = screen.width
  var rate = width / 1200
  if (width < 1200)
    document.getElementById('WebViewport').setAttribute('content', 'width=1200px,initial-scale=' + rate + ',target-densitydpi=device-dpi,minimum-scale=' + rate + ',user-scalable=yes')
})()

/**
 * 检测手机浏览器
 * @returns {boolean}
 */
function mobilecheck() {
  var check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}
/**
 * 跳转到登录页
 */
function goLogin() {
  var returnUrl = location.href;
  returnUrl = encodeURIComponent(returnUrl);
  location.href = '/GeekMart/views/common/sign?returnUrl=' + returnUrl;
}
/**
 * 检测浏览器版本
 * @returns {boolean}
 */
function checkNavigator() {
  if (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE", "")) <= 9) {
    // location.href = "/GeekMart/views/static/another/browser.html"
  }
}
//问答去详情页
function linkCoach(id) {
  var urlP = 'id=' + id
  urlP = encodeURIComponent(urlP)
  location.href = '/GeekMart/views/coach/problemDetails?' + urlP
}
//去pcb详情页
function linkPcb(id){
  location.href = '/GeekMart/views/pcb/details/' + id
}
//是否登录
function isLogin() {
  var cookies = {}
  var all = document.cookie
  /*if (all === "") return cookies*/
  var list = all.split("; ")
  list.forEach(function (item) {
    var cookieItem = item
    var p = cookieItem.indexOf("=")
    var name = cookieItem.substring(0, p)
    var value = cookieItem.substring(p + 1)
    value = decodeURIComponent(value)
    cookies[name] = value
  })
  if (!cookies["_x_6841_hsd56_2asgf_sg"]) {
    return false
  } else {
    return true
  }
}
/**
 * _isLogin--判断是否登录,并跳转
 * @private
 */
function _isLogin() {
  var cookies = {}
  var all = document.cookie
  /*if (all === "") return cookies*/
  var list = all.split("; ")
  list.forEach(function (item) {
    var cookieItem = item
    var p = cookieItem.indexOf("=")
    var name = cookieItem.substring(0, p)
    var value = cookieItem.substring(p + 1)
    value = decodeURIComponent(value)
    cookies[name] = value
  })
  if (!cookies["_x_6841_hsd56_2asgf_sg"]) {
    var returnUrl = location.href
    returnUrl = encodeURIComponent(returnUrl)
    location.href = '/GeekMart/views/common/sign?returnUrl=' + returnUrl
  } else {

  }
}

