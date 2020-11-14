define(['jquery'], function($){
    function banner(){
      $(function () {
        var aBtns = $(".pic").find("ol li");
        var oUl = $(".pic").find("ul");
        var lis = $(".pic").find("ul li");
        var iNow = 0;
        var timer = null;
  
        $(".pic").mouseenter(function () {
          clearInterval(timer);
        });
  
        $(".pic").mouseleave(function () {
          //轮播
          timer = setInterval(function () {
            iNow++;
            tab();
          }, 2000);
        });
  
        aBtns.click(function () {
          iNow = $(this).index();
          tab();
        });
  
        //轮播
        timer = setInterval(function () {
          iNow++;
          tab();
        }, 2000);
  
        function tab() {
          aBtns.removeClass("active").eq(iNow).addClass("active");
  
          if (iNow == aBtns.size()) {
            aBtns.eq(0).addClass("active");
          }
  
          oUl.animate(
            {
              left: iNow * -1200,
            },
            500,
            function () {
              //判断是否是最后一张图片
              if (iNow === aBtns.size()) {
                iNow = 0;
   
               lis.css("top", 0);
              }
            }
          );
        }
      });
    }
    return {
      banner
    }
  })