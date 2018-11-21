console.log(jQuery.fn.jquery)
$(document).ready(function(){
    if ($(window).width() > 768) { //your chosen mobile res
        var toggleWidth = $(".sidenav").width() == 210 ? "50px" : "210px";
        
        $('.sidenav ul li span').toggle(300);
        $('.sidenav').animate({ width: toggleWidth });
        if(toggleWidth=="210px"){
            $('.sidenav li .svg-inline--fa').css({"font-size":"16px"});
            $('.dashboard-content').animate({ marginLeft: "210px" });
            $(".sidenav table li i").hide();
            $(".sidenav table tr:eq(0)").show();
        }else{
            $('.sidenav li .svg-inline--fa').css({"font-size":"20px"});
            $('.dashboard-content').animate({ marginLeft: "50px" });
            $(".sidenav table li i").show();
            $(".sidenav table tr:eq(0)").hide();
        }
    } else {
        var toggleWidth = $(".sidenav").width() == 0 ? "210px" : "0px";
        $('.sidenav').toggle(300);
        $('.sidenav').animate({
            width: toggleWidth
        }, 350);
        
        if(toggleWidth=="210px"){
            $(".sidenav table li i").hide();
            $(".sidenav table tr:eq(0)").show();
            $(".sidenav ul li span").show();
            $(".sidenav table td i").css("display","none !important");
        }else{
            $(".sidenav table li i").show();
            $(".sidenav table tr:eq(0)").hide();
            $(".sidenav ul li span").hide();
            $(".sidenav table td i").css("display","block !important");
        }
    }
})