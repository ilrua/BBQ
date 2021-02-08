console.log('%c Im %c BBQ %c V0.0.1','color:#f00;','font-size:20px;','color:blue;background:yellow;')//特效输出
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
var url = window.location.hostname//检查域名
if (url=="live.bilibili.com"){
    createPenel()//自动开始建立面板
    function createPenel(){
        console.info("Creating Penel")
        createRuler()//创造规则
        createButton()//创造按钮等杂项
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
        var token = getCookie(); //设置token
        var roomid = window.location.pathname;
        roomid=roomid.replace("/","");//获取域名'/'字符后的内容
        var url = "https://api.live.bilibili.com/msg/send?color=16777215&fontsize=25&mode=1&msg=" + msg + "&rnd=1&roomid=" + roomid + "&bubble=0&csrf_token=" + token + "&csrf=" + token
        post(url)//调用发送端
    }

    function sendLiveMusicDamku(){
        var musicName = document.getElementById("musicName").value//获取曲名
        var token = getCookie(); //设置token
        var roomid = window.location.pathname;
        roomid=roomid.replace("/","");//获取域名'/'字符后的内容
        var url = "https://api.live.bilibili.com/msg/send?color=16777215&fontsize=25&mode=1&msg=点歌 " + musicName + "&rnd=1&roomid=" + roomid + "&bubble=0&csrf_token=" + token + "&csrf=" + token
        post(url)//调用发送端
    }

    function sendDiyDamku(){
        var msg = document.getElementById("diytext").value
        var color = document.getElementById("colorid").value//获取颜色ID
        var intColor = parseInt(color, 16)
        var token = getCookie(); //设置token
        var roomid = window.location.pathname;
        roomid=roomid.replace("/","");//获取域名'/'字符后的内容
        var url = "https://api.live.bilibili.com/msg/send?color=" + intColor + "&fontsize=25&mode=1&msg=" + msg + "&rnd=1&roomid=" + roomid + "&bubble=0&csrf_token=" + token + "&csrf=" + token
        post(url)//调用发送端
    }

    function getCookie(){
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
            return cookieValue;
        } else {//如果cookie的值是空
            console.error("No login!Now Alert user.")
            alert("FBI OPEN THE DOOR!!! \n你，你登录了吗？\n什么？！没有？！你怎么敢的啊\n快点的，登录完带你Van~")
            log("未登录。")
        }
     }

    function post(url){
    $.ajax({//指向了Jquery库，b站有Jquery
            url: url,
            type: 'POST',
            xhrFields: {
            withCredentials: true // 这里设置了withCredentials，带cookie请求。
            },
            success: function(data) { //成功
            console.log(data)
            console.log("发送弹幕成功了！")
            log("成功发送 1 个弹幕")
            },
            error: function(err) { //失败
            console.error(err)
            console.log("弹幕发送失败了QWQ")
            log(" 1 个弹幕发送失败")
            }

    })}//live代码块

    function log(text){
         logtable = document.getElementById("log")
         logtable.innerHTML = '<p id="log">' + text + '</p> '
    }

} else if(url=="t.bilibili.com") {
    createPanel();
    function createPanel(){
    var table = document.getElementsByClassName('title tc-black fs-14 ls-0');
    var p='<p id="bbqtag">您正在使用BBQ,nya~</p>'
    $(table).append(p)//创建BBQ
    }
} else {
  console.log("现在不是B站呢~")
}
