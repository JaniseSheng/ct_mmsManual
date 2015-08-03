/**
 * Created by janisesheng on 15-7-20.
 */

$(document).ready(function() {
    //检测是否使手机 或 pc

    if(checkDevice_Browser.fastCkeckDevice()=="pc"){
        //mmsEvent.helpMenuFixed();
        mmsEvent.helpMenuFixedMobile();
    }else{
        mmsEvent.helpMenuFixedMobile();
    }

    mmsEvent.helpSectionScroll();

});


var mmsEvent = (function(){
    //----------------------help menu点击切换section----------------------------

    //htlp页面中 左侧menu菜单超出屏幕之前固定
    var helpMenuFixed = function (){
        var elm = $('.help-menu');
        var startPos = $(elm).offset().top;

        var scrollY =0; //滚动的定义初始值 默认是0
        $("body").on("update", function(event, values){
            scrollY = values.position;
            console.log(scrollY);
            $(elm).css('position', ((scrollY+70) > startPos) ? 'fixed' : 'relative');
            $(elm).css('top', ((scrollY) > startPos) ? '70px' : '');
        });
    }
    var ismenu = true ;
    var helpMenuFixedMobile = function (){
        $("#fastMenu").click(function () {
            if(ismenu){
                $(".help-menu").css({"opacity":"1",
                    "height":"auto",
                    "left":"0"});
            }else{
                $(".help-menu").css({"opacity":"0",
                    "height":"0",
                    "left":"-100%"});
            }
            ismenu=!ismenu;

        });
        $(".help-list,.scrolltop").click(function (){
            $(".help-menu").css({"opacity":"0",
                "height":"0",
                "left":"-100%"});
            ismenu = true ;
        });

    }

/*    //点击menu 滚动切换section的内容
    var helpSectionScroll = function (){
        //初始获取每个section离顶部的距离
        var sectionTop = [] ;
        var offestTop = 70 ; //偏移量
        $(".help-menu ul li").each(function(i){
            sectionTop[i]=$("#section"+i+"").offset().top-offestTop;
            $(".help-list").eq(i).attr("date_Y", sectionTop[i]);
        });
        console.log(sectionTop);

        sectionTop[0]=sectionTop[0]-90;
        $(".help-list").eq(0).attr("date_Y", sectionTop[0]);

        $(".help-list").click(function () {
            var sectionTop =$(this).attr("date_Y");
            $('#ws-container').animate({scrollTop: sectionTop});
        });

        $(".scrolltop").click(function () {
            $('#ws-container').animate({scrollTop: "0"});
        });
    }*/

    var helpSectionScroll = function (){
        //获取当前点击的对象
        $(".help-list").click(function () {
            var sectionTop =$(this).attr("rel");
            $(".nano").nanoScroller({ scrollTo: $('#'+sectionTop)});
            $(this).css("color","#2DC530");
        });
        $(".scrolltop").click(function () {
            $('#ws-container').animate({scrollTop: "0"});
        });
    }

    return {
        helpMenuFixed:helpMenuFixed,
        helpSectionScroll:helpSectionScroll,
        helpMenuFixedMobile:helpMenuFixedMobile
    }
})();

