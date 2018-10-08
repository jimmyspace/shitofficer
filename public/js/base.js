/**
 * Created by Jimmy on 2017/3/4.
 */

/**
 * 跨站脚本
 * <script>
 *     var name = decodeURIComponent(url参数)；
 *     document.write(name);
 * </script>
 * 防止动态注入<script>
 *  坚决方案移除尖括号
 *  name = name.replace(/</g,"&lt;").replace(/>/,"&gt");
 */




/**
 * urlArgs提取url参数
 */
function urlArgs() {
  var args = {};
  var query = location.search.substring(1);
  var pairs = query.split("&");
  for (var i = 0; i < pairs.length; i++) {
    var pos = pairs[i].indexOf('=');
    if (pos == -1) continue;
    var name = pairs[i].substring(0, pos);
    var value = pairs[i].substring(pos + 1);
    value = decodeURIComponent(value);
    args[name] = value;
  }
  return args;
}

/**
 * 获取cookie
 */
function getCookie() {
  var cookie = {};
  var all = document.cookie;
  if (all === "") return cookie;
  var list = all.split("; ");
  for (var i = 0; list.length; i++) {
    var cookie = list[i];
    var p = cookie.indexOf("=");
    var name = cookie.substring(0, p);
    var value = cookie.substring(p + 1);
    value = decodeURIComponent(value);
    cookie[name] = value;
  }
  return cookie
}

/**
 * 设置cookie
 */
function setCookie(name, value, daysToLive) {
  var cookie = name + "=" + encodeURIComponent(value);
  if (typeof daysToLive === "number") {
    cookie += "; max-age=" + (daysToLive * 60 * 60 * 24)
  }
  document.cookie = cookie
}

/**
 * 图片翻转
 * html <img src="normal.png" data-rollover="turn.png">
 *
 */
onload(function () {
  for (var i = 0; i < document.images.length; i++) {
    var img = document.images[i];
    var rollover = img.getAttribute("data-rollover");
    if (!rollover) continue;
    (new Image()).src = rollover;
    img.setAttribute("data-rollout", img.src);
    img.onmouseover = function () {
      this.src = this.getAttribute("data-rollover");
    };
    img.onmouseout = function () {
      this.src = this.getAttribute("data-rollout");
    };
  }
})

/**
 * function 定时器
 * @param f 定时执行的函数
 * @param start 开始时间
 * @param interval 循环时间间隔
 * @param end 结束时间
 */
function invoke(f, start, interval, end) {
  if (!start) start = 0;
  if (arguments.length < 2) {
    setTimeout(f, start);
  } else {
    setTimeout(repeat, start);
    function repeat() {
      var h = setInterval(f, interval);
      if (end) setTimeout(function () {
        clearInterval(h);
      }, end)
    }
  }
}
