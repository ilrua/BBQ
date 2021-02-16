/*
Creator : Redmaple(ilrua)
Project Name : Be Bilibili Cute(BBQ)
Programming Language : JavaScript,HTML,CSS,MarkDown.
Copyright (c) 2021-2077 HyperStudioz.

Someday we will talk all night,Of all that we've been through.

*/
console.log('%c Im %c BBQ %c V0.0.1','color:#f00;','font-size:20px;','color:white;background:black;')//特效输出
console.log("[BBQ]BBQ给大家拜年了！新年快乐！万事如意！希望这个小项目能被你们喜欢~")
console.log("[KERNEL]BBQ已启动 载入核心代码中")
var chk = "chk"
var news = "news"
//---kernel code---


function bv2av(vid,mode){
    //BV2AV函数除判断外的所有代码均来自来自 https://www.zhihu.com/question/381784377/answer/1099438784。（知乎或许不是FW
var table = "fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF",
  tr = new Object();
for (var i = 0; i < 58; i++) {
  tr[table[i]] = i;
}
var s = [11, 10, 3, 8, 4, 6],
  xor = 177451812,
  add = 8728348608;

if (mode == "av"){
    var avid = dec(vid);
    console.log("[B2A]已获取到AVID: "+avid);
    return avid;
} else if(mode == "bv"){
    var bvid = enc(vid);
    console.log("[B2A]已获取到BVID: "+bvid);
    return bvid;
} else {
    console.log("[B2A]变量MODE的值必须在av与bv其一");
    return false;
}
function dec(x) {
  var r = 0;
  for (var i = 0; i < 6; i++) {
    r += tr[x[s[i]]] * 58 ** i;
  }
  return (r - add) ^ xor;
}

function enc(x) {
  x = (x ^ xor) + add;
  r = "BV1  4 1 7  ".split("");
  for (var i = 0; i < 6; i++) {
    r[s[i]] = table[Math.floor(x / 58 ** i) % 58];
  }
  return r.join("");
}
}

function update(text){
    if(text.toLowerCase() == "news"){
        var url = "https://ilrua.github.io/ilrua/bbq/updt.json"//更新地址
            var request = new XMLHttpRequest();
            request.open("get", url);/*设置请求方法与路径*/
            request.send(null);/*不发送数据到服务器*/
            request.onload = function () {/*XHR对象获取到返回信息后执行*/
                if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
                    var json = JSON.parse(request.responseText);
                    for(var i=0;i<json.length;i++){
                    	console.log(json[i].name);
                    }
                    var json = JSON.parse(request.responseText);
                    console.log("[UPDATE]已获取更新信息");
                }
                    //是的 因为特性 我们只能在这里进行判断。
                    var version = json.version
                    var info = json.info
                    console.log("[CHK]BBQ云上版本: " + version)
                    console.log("[CHK]BBQ更新内容: ")
                    console.log(info)
                    }
    } else {
        console.log("[UPDATE]错误的函数")
    }
}
//---kernel code end---
console.log("[KERNEL]BBQ已启动 已载入核心代码中")
var text = "现在没有消息"
var local = false
var id1 = "left1"
var word1 = "日安！"
var id2 = "left2"
var word2 = "夜安！"
var id3 = "left3"
var word3 = "早点休息"
var id4 = "left4"
var word4 = "老板大气"
var id5 = "left6"
var word5 = "OHHHH"
var id6 = "left5"
var word6 = "哈哈哈哈"
var id7 = "left7"
var word7 = "点歌"
var id8 = "left8"
var word8 = "直播间好卡"
    //'use strict';
    //萌新友好模式：开
xurl = window.location.href; 
var link2 = xurl.substring(0,30);
var url = window.location.hostname//检查域名
if (url=="live.bilibili.com"){
    console.log("[KERNEL]在直播页面上启动了")
    console.log("[ALERT]在活动页面的直播间上启动时会出现无法显示面板的情况")
    createPenel()//自动开始建立面板
    function createPenel(){
        console.info("[CP]创建面板中")
        createRuler()//创造规则
        console.info("[CP]已创建约束元素")
        createButton()//创造按钮等杂项
        console.info("[CP]已创建控件元素")
        console.info("[CP]面板创建成功")
    }
    function createButton(){
        var div2 = document.getElementById("bbq-father-lable")//找到父
        div2 = document.getElementById("bbq-father-lable")
        var diy = document.getElementById("bbq-diy-lable")
        diy = document.getElementById("bbq-diy-lable")
        //批量制作按钮
        var Button = '<div data-v-0f5281e6="" class="gift-package live-skin-highlight-bg live-skin-button-text" id="'+ id1 +'" onclick="sendLiveDamku(word1)"><span data-v-0f5281e6="">'+word1+'</span></div>'
        $(div2).append(Button)
        Button = '<div data-v-0f5281e6="" class="gift-package live-skin-highlight-bg live-skin-button-text" id="'+ id2 +'" onclick="sendLiveDamku(word2)"><span data-v-0f5281e6="">'+word2+'</span></div>'
        $(div2).append(Button)
        Button = '<div data-v-0f5281e6="" class="gift-package live-skin-highlight-bg live-skin-button-text" id="'+ id3 +'" onclick="sendLiveDamku(word3)"><span data-v-0f5281e6="">'+word3+'</span></div>'
        $(div2).append(Button)
        Button = '<div data-v-0f5281e6="" class="gift-package live-skin-highlight-bg live-skin-button-text" id="'+ id4 +'" onclick="sendLiveDamku(word4)"><span data-v-0f5281e6="">'+word4+'</span></div>'
        $(div2).append(Button)
        Button = '<div data-v-0f5281e6="" class="gift-package live-skin-highlight-bg live-skin-button-text" id="'+ id5 +'" onclick="sendLiveDamku(word5)"><span data-v-0f5281e6="">'+word5+'</span></div>'
        $(div2).append(Button)
        Button = '<div data-v-0f5281e6="" class="gift-package live-skin-highlight-bg live-skin-button-text" id="'+ id6 +'" onclick="sendLiveDamku(word6)"><span data-v-0f5281e6="">'+word6+'</span></div>'
        $(div2).append(Button)
        Button = '<div data-v-0f5281e6="" class="gift-package live-skin-highlight-bg live-skin-button-text" id="'+ id7 +'" onclick="sendLiveMusicDamku()"><span data-v-0f5281e6="">'+word7+'</span></div>'
        $(div2).append(Button)
        Button = '<div data-v-0f5281e6="" class="gift-package live-skin-highlight-bg live-skin-button-text" id="'+ id8 +'" onclick="sendLiveDamku(word8)"><span data-v-0f5281e6="">'+word8+'</span></div>'
        $(div2).append(Button)
        var input='<input id="diytext"  type="text" placeholder="弹幕内容(颜色Beta)" class="inputtx"/>'
        $(diy).append(input)
        var input='<input id="colorid"  type="text" placeholder="弹幕颜色16进制(无#)" class="inputcl"/>'
        $(diy).append(input)
        Button = '<div data-v-0f5281e6="" class="gift-package live-skin-highlight-bg live-skin-button-text" id="'+ 'clrid' +'" onclick="sendDiyDamku()"><span data-v-0f5281e6="">'+'发送'+'</span></div>'
        $(diy).append(Button)
        //歌名框
        var input='<input id="musicName"  type="text" placeholder="在此输入歌名" class="inputmn"/>'
        $(div2).append(input)
        //状态
        input='<p id="log">BBQ启动了,Nya~</p>'
        $(div2).append(input)
        $("#bbq-father-lable").css("opacity","0.7");//透明设置
     }
    function createRuler(){
        var div=document.getElementsByClassName("header-info-ctnr");//找到消息框
        var fatherLable='<div data-v-1e7d7d58="" data-v-6379e588="" class="seeds-wrap" id="bbq-father-lable"></div>'//定义一个父框
        $(div).append(fatherLable)//创建一个父框
        var div2=document.getElementById("bbq-father-lable")//找到父框
        var css='<style type="text/css">#inputmn{float: left;}#left1{float: left;}#left2{float: left;}#left3{float: left;}#left4{float: left;}#left5{float: left;}#left6{float: left;}#left7{float: left;}#left8{float: left;}</style>'//定义（必须有所有的标签）
        $(div2).append(css)//css规则创建
        div=document.getElementById("pk-guard-vm");//找到礼品框
        fatherLable='<div data-v-1e7d7d58="" data-v-6379e588="" class="seeds-wrap" id="bbq-diy-lable"></div>'//定义第二个父框
        $(div).append(fatherLable)//创建一个父框
        div2=document.getElementById("bbq-diy-lable")//找到父框
        css='<style type="text/css">#colorid{float: left;}#clrid{float: left;}#diytext{float: left;}</style>'//定义（必须有所有的标签）
        $(div2).append(css)//css规则创建
    }

    function sendLiveDamku(msg,){
        //普通快捷方式
        console.log("[SLD]启动提交普通弹幕函数")
        var token = getCookie(); //设置token
        var roomid = window.location.pathname;
        roomid=roomid.replace("/","");//获取域名'/'字符后的内容
        var url = "https://api.live.bilibili.com/msg/send?color=16777215&fontsize=25&mode=1&msg=" + msg + "&rnd=1&roomid=" + roomid + "&bubble=0&csrf_token=" + token + "&csrf=" + token
        post(url)//调用发送端
        console.log("[SLD]提交一个普通弹幕")
    }

    function sendLiveMusicDamku(){
        console.log("[SLMD]启动提交点歌弹幕函数")
        var musicName = document.getElementById("musicName").value//获取曲名
        var token = getCookie(); //设置token
        var roomid = window.location.pathname;
        roomid=roomid.replace("/","");//获取域名'/'字符后的内容
        var url = "https://api.live.bilibili.com/msg/send?color=16777215&fontsize=25&mode=1&msg=点歌 " + musicName + "&rnd=1&roomid=" + roomid + "&bubble=0&csrf_token=" + token + "&csrf=" + token
        post(url)//调用发送端
        console.log("[SLMD]提交一个点歌弹幕")
    }

    function sendDiyDamku(){
        console.log("[SDD]启动提交自定义弹幕函数")
        var msg = document.getElementById("diytext").value
        var color = document.getElementById("colorid").value//获取颜色ID
        var intColor = parseInt(color, 16)
        var token = getCookie(); //设置token
        var roomid = window.location.pathname;
        roomid=roomid.replace("/","");//获取域名'/'字符后的内容
        var url = "https://api.live.bilibili.com/msg/send?color=" + intColor + "&fontsize=25&mode=1&msg=" + msg + "&rnd=1&roomid=" + roomid + "&bubble=0&csrf_token=" + token + "&csrf=" + token
        post(url)//调用发送端
        console.log("[SDD]提交一个自定义弹幕")
    }

    function getCookie(){
        console.log("[GC]正在获取Cookie")
        var cookieName = "bili_jct";
        var cookieValue = null;//返回cookie的value值
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');//将获得的所有cookie切割成数组
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];//得到某下标的cookies数组
                if (cookie.substring(0, cookieName.length + 2).trim() == cookieName.trim() + "=") {//如果存在该cookie的话就将cookie的值拿出来
                    cookieValue = cookie.substring(cookieName.length + 2, cookie.length);
                    break
                }
            }
        }
        if (cookieValue != "" && cookieValue != null) {//如果存在指定的cookie值
            console.log("[GC]已获取到用户Cookie Bili_jct值为 " + cookieValue)
            return cookieValue;
        } else {//如果cookie的值是空
            console.error("[GC]未获取到用户Cookie Bili_jct值为 " + cookieValue)
            alert("FBI OPEN THE DOOR!!! \n你，你登录了吗？\n什么？！没有？！你怎么敢的啊\n快点的，登录完带你Van~")
            log("未登录。")
        }
     }

    function post(url){
        console.log("[POST]尝试Post到服务器以创建弹幕")
    $.ajax({//指向了Jquery库，b站有Jquery
            url: url,
            type: 'POST',
            xhrFields: {
            withCredentials: true // 这里设置了withCredentials，带cookie请求。
            },
            success: function(data) { //成功
            console.log("%c[POST]提交到服务器一条弹幕。一条成功",'color:white;background:black;')
            log("成功发送 1 个弹幕")
            },
            error: function(err) { //失败
            console.log("[POST]提交到服务器零条弹幕。一条失败")
            log(" 1 个弹幕发送失败")
            }

    })}//live代码块

    function log(text){
         console.info("[日志] " + text);
         logtable = document.getElementById("log");
         logtable.innerHTML = '<p id="log">' + text + '</p> ';
    }
    
    setFace()//最后设置一个获取封面的按钮在三个点里

    function setFace(){
        var fatherTable = document.getElementsByClassName("more-ops-list");
        var lablehtml = '<li><div class="ops-watch-later van-watchlater" onclick="goViewFace();"><span class="wl-tips" style="display: none;"></span></div>获取封面</li>';
        $(fatherTable).append(lablehtml);
    }

    function goViewFace(){
        $.ajax({ 
            type:"GET", 
            url:"https://v1.alapi.cn/api/bbcover?&c="+bvid, 
            dataType:"json", 
            success:function(data){ //这里的data就是json信息
                window.open(data.data.cover); ;//data.data.cover就是封面信息 接着打开封面页面。
            } 
            }); 
    }
    

} else if(url=="t.bilibili.com") {
    console.log("[KERNEL]在动态页面上启动了")
    createPanel();
    function createPanel(){
    var table = document.getElementsByClassName('title tc-black fs-14 ls-0');
    var p='<p id="bbqtag">您正在使用BBQ,nya~</p>'
    $(table).append(p)//创建BBQ
    }
} else if(link2=="https://www.bilibili.com/video") {
    console.log("[KERNEL]在视频页面上启动了"+link2)
    setTimeout("createPinel()",2000)
    var cp = "createPinel"
    function createPinel(){
    //一键三连
    var head = document.getElementsByTagName("head")
    var ops = document.getElementsByClassName("ops") 
    //var ops = document.getElementsByTagName("body")
    var css3style = '<style id="likevidcss">.btn3go{width: 50px;height: 50px;border-radius:50%;background-color: #92dae8;border: 1px solid #84bec9;position:absolute;bottom:10px;border:1px solid #aaa}.btn3icon{width: 40px;height: 40px;background-clip:content-box;}</style>'
    var btn3style = '<button class="btn3go" onclick="likeVideo();"><span><image class="btn3icon" src="https://ae01.alicdn.com/kf/U1c987f6b116d4655bb4d6c5ffd0e40319.jpg"></image></span></button>'
    $(head).append(css3style);
    $(ops).append(btn3style);
    console.log("%c[CP]正在创造面板。请注意。当你连接到服务器的延迟大于2000ms时，面板就会失效。此bug暂时无法被解决\n您如果无法看到一键三连等元素，请在此输入'retry(cp)'区分大小写",'color:white;background:black;')
    };

    function retry(func){
        eval(func+"()");
    };

    function likeVideo(){
        csrf = getCookie()
        avid=xurl.replace(link2,"");
        avid = bv2av(bvid,"av")
        apiurl = 'https://api.bilibili.com/x/web-interface/archive/like/triple' + '?aid=' + avid +'&csrf=' +csrf 
        $.ajax({//指向了Jquery库，b站有Jquery
            url: apiurl,
            type: 'POST',
            xhrFields: {
            withCredentials: true // 这里设置了withCredentials，带cookie请求。
            },
            success: function(data) { //成功
                //此功能耗资10个硬币
            console.log("%c[POST]成功三连;客户端没有信息",'color:white;background:black;')
            alert('三连了,再点是没用的哦。你现在是看不到的呢。要按F5刷新才能看得到的呢')
            },
            error: function(err) { //失败
            console.log("[POST]三连失败")
            }
    })
}

    function getCookie(){
        console.log("[GC]正在获取Cookie")
        var cookieName = "bili_jct";
        var cookieValue = null;//返回cookie的value值
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');//将获得的所有cookie切割成数组
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];//得到某下标的cookies数组
                if (cookie.substring(0, cookieName.length + 2).trim() == cookieName.trim() + "=") {//如果存在该cookie的话就将cookie的值拿出来
                    cookieValue = cookie.substring(cookieName.length + 2, cookie.length);
                    console.log("[GC]Cookie值为" + cookieValue)
                    return cookieValue
                    break
                }
            }
        }

}
} else {
  console.log("现在不是B站呢~")
}
