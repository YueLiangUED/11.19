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
        temp = 0;
    $starBtn.click(function() {
        if(offOn) {
            offOn = !offOn;
            ratating();
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
                alert("2等奖");
            } else if(num <= cat * 2) {
                alert("3等奖");
            } else if(num <= cat * 3) {
                alert("4等奖");
            } else if(num <= cat * 4) {
                alert("1等奖");
            }
        }, 4000);
    }

    //首页提交按钮
    $('#submitBtn').on('click',function (e) {
        /*do something*/
        e.preventDefault();
        $('.model').fadeIn(); //显示弹窗
        showMask(); //显示遮罩层
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
