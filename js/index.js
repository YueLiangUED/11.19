(function(global){
    function remChange(){
        document.documentElement.style.fontSize=100*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    var $rotateTarget = $('#rotateTarget'),
        $starBtn = $('#starBtn'),
        cat = 90,
        num = 0,
        offOn = true,
        temp = 0,
        flag = 0;
    $starBtn.click(function() {
        if(offOn && flag === 0) {
            offOn = !offOn;
            ratating();
            flag ++;
        }else if(flag > 0){
            showTc_2();
        }
    });
    function ratating() {
        var rdm = 0;
        rdm = Math.round(Math.random()*(3960 - 3600) + 3600);
        $rotateTarget.css({
            transition: "all 4s",
            transform: "rotate(" + (rdm + temp) + "deg)"
        });
        setTimeout(function() {
            offOn = !offOn;
            num = (rdm + temp) % 360;
            temp += rdm;
            if(num <= cat * 1) {
                $('#jpText_1').text('获得了二等奖');
                $('#jpText_2').text('1GB本地流量');
                showTc_1();
            } else if(num <= cat * 2) {
                $('#jpText_1').text('获得了三等奖');
                $('#jpText_2').text('100MB本地流量');
                showTc_1();
            } else if(num <= cat * 3) {
                $('#jpText_1').text('获得了四等奖');
                $('#jpText_2').text('10MB本地流量');
                showTc_1();
            } else if(num <= cat * 4) {
                $('#jpText_1').text('获得了一等奖');
                $('#jpText_2').text('50元话费');
                showTc_1();
            }
        }, 4000);
    }
    
    setInterval(function () {
        $('main>span').addClass('active');
    },1000);
    setInterval(function () {
        $('main>span').removeClass('active');
    },2000);
    //显示中奖弹窗
    function showTc_1() {
        $('.tc.zj').fadeIn();
        showMask();
    }
    //显示参与过弹窗
    function showTc_2() {
        $('.tc.cy').fadeIn();
        showMask();
    }
    //显示活动结束弹窗
    function showTc_3() {
        $('.tc.end').fadeIn();
        showMask();
    }
    //弹窗确定按钮关闭当前弹窗
    $('.tcBtn').on('click',function () {
        $(this).parent().fadeOut();
        hideMask();
    });
    //弹窗确定按钮
    $('#tcBtn').on('click',function (e) {
        e.preventDefault();
        $(this).parent().fadeOut();
        hideMask();
    });
    //显示遮罩层    
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层  
    function hideMask(){
        $("#mask").hide();
    }

});
