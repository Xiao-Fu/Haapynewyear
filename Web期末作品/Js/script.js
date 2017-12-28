window.onload = function () {
    //获取三个页面元素
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");
    var lantern = document.getElementById("p1_lantern");

    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];

    //当音乐播放完停止时候，自动停止光盘旋转效果//监听事件
    audio.addEventListener("ended",function (event) {
        music.setAttribute("class","");
    },false);
    //点击音乐图标，控制音乐播放效果
    music.addEventListener("touchstart",function (event) {
        if(audio.paused){
            audio.play();
            this.setAttribute("class","play");
        }else {
            audio.pause();
            this.setAttribute("class","");
        }
    },false);
    //点击灯笼开启好运2018
    lantern.addEventListener("click", function() {
        page1.style.display = "none";
        page2.setAttribute("class", "page");
        page2.style.display = "block";

        setTimeout(function() {
            page3.style.display = "block";
            page3.style.top = "100%";
            page2.setAttribute("class", "page fadeOut");
            page3.setAttribute("class", "page fadeIn");
        }, 5500)
    },false);
};