/**
 * Created by janisesheng on 15-7-20.
 */
var mmsEvent = (function(){
    //----------------------help menu点击切换section----------------------------

    //htlp页面中 左侧menu菜单超出屏幕之前固定
    var helpMenuFixed = function (){
        var elm = $('.help-menu');
        var startPos = $(elm).offset().top;

        var scrollY =0; //滚动的定义初始值 默认是0
        $("body").on("update", function(event, values){
            scrollY = values.position;
            $(elm).css('position', ((scrollY) > startPos) ? 'fixed' : 'relative');
            $(elm).css('top', ((scrollY) > startPos) ? '0px' : '');
        });
    }

    //点击menu 滚动切换section的内容
    var helpSectionScroll = function (){
        //初始获取每个section离顶部的距离
        var sectionTop = [] ;
        $(".help-menu ul li").each(function(i){
            sectionTop[i]=$("#section"+i+"").offset().top;
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
    }
    return {
        helpMenuFixed:helpMenuFixed,
        helpSectionScroll:helpSectionScroll
    }
})();

