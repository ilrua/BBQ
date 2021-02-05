
console.info("BBQ!!!")

        var id1 = "left1"
        var word1 = "日安！"
        var id2 = "left2"
        var word2 = "夜安！"
        var id3 = "left3"
        var word3 = "早点休息"
        var id4 = "left4"
        var word4 = "老板大气"
        var id5 = "left6"
        var word5 = "OHHHHHHHHHH"
        var id6 = "left5"
        var word6 = "哈哈哈哈"
        var id7 = "left7"
        var word7 = "点歌"
        var id8 = "left8"
        var word8 = "直播间好卡"
    //'use strict';
url = window.location.hostname
if (url=="live.bilibili.com"){
        createPenel()
    function createPenel(){
        console.info("Create Penel Now")
        createRuler()
        var div2 = document.getElementById("bbq-father-lable")//找到父
        var css='<style type="text/css">#left1{float: left;}#left2{float: left;}#left3{float: left;}#left4{float: left;}#left5{float: left;}#left6{float: left;}#left7{float: left;}#left8{float: left;}</style>'//定义（必须有所有的标签）
        $(div2).append(css)
        div2 = document.getElementById("bbq-father-lable")
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
        Button = '<div data-v-0f5281e6="" class="gift-package live-skin-highlight-bg live-skin-button-text" id="'+ id7 +'" onclick="sendLiveDamku(word7)"><span data-v-0f5281e6="">'+word7+'</span></div>'
        $(div2).append(Button)
        Button = '<div data-v-0f5281e6="" class="gift-package live-skin-highlight-bg live-skin-button-text" id="'+ id8 +'" onclick="sendLiveDamku(word8)"><span data-v-0f5281e6="">'+word8+'</span></div>'
        $(div2).append(Button)
    }

    function createRuler(){
        var div=document.getElementById("control-panel-ctnr-box");//找到消息框
        var fatherLable='<div data-v-1e7d7d58="" data-v-6379e588="" class="seeds-wrap" id="bbq-father-lable"></div>'//创建一个父
        var div2=document.getElementById("bbq-father-lable")//找到父
        $(div).append(fatherLable)
        var css='<style type="text/css">#left1{float: left;}#left2{float: left;}#left3{float: left;}#left4{float: left;}#left5{float: left;}#left6{float: left;}#left7{float: left;}#left8{float: left;}</style>'//定义（必须有所有的标签）
        $(div2).append(css)

    }

    function sendLiveDamku(msg){
        var token = getCookie(); //设置token
        var roomid = window.location.pathname;
        roomid=roomid.replace("/","");
        var url = "https://api.live.bilibili.com/msg/send?color=16777215&fontsize=25&mode=1&msg=" + msg + "&rnd=1&roomid=" + roomid + "&bubble=0&csrf_token=" + token + "&csrf=" + token
        post(url)
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
            console.error("do you login?")
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
            console.log("sended")
            },
            error: function(err) { //失败
            console.error(err)
            console.log("wasted")
            }

    })}//live代码块
} else {
  console.log("Err:No bilibili")
}
 


















