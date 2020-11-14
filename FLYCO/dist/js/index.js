define(["jquery","jquery-cookie"], function($){
  function download(){
    $.ajax({
      type: 'get',
      url: "../data/9.json",
      success: function(arr){
        var str1 = ``;
        var str2 = ``;
        var str3 = ``;
        var str4 = ``;
        var str5 = ``;
        var str6 = ``;
        var str7 = ``;     
        var item = arr[0];
        var child1 = item["list"][0]["child"];
        var child2 = item["list"][1]["child"];
        var child3 = item["list"][2]["child"];
        var child4 = item["list"][3]["child"];
        var child5 = item["list"][4]["child"];
        var child6 = item["list"][5]["child"];
        var child7 = item["list"][6]["child"]; 
        for(var i = 0; i < child1.length; i++){
          str1 += `<a href="">
          <div class="conright-item">
              <div class="conright-item-top">
                  <img  class="win" src="${child1[i].img}" alt="">
              </div>
              <div class="conright-item-bottom">
                  <div class="num">
                      <span>${child1[i].span}
                          <strong>${child1[i].strg}</strong>
                      </span>
                  </div>
                  <div class = "bottom-img">
                      <img class="imgs" src="${child1[i].images}" alt="">
                  </div>
                  <div class="bottom-text">
                      <h3>${child1[i].h3}</h3>
                      <strong>${child1[i].strong}</strong>
                  </div>
              </div>
          </div> 
      </a>`
        }

        $(".conright").html(str1);
        for(var i = 0; i < child2.length; i++){
          str2 += `<a href="">
          <div class="conright-item">
              <div class="conright-item-top">
                  <img  class="win" src="${child2[i].img}" alt="">
              </div>
              <div class="conright-item-bottom">
                  <div class="num">
                      <span>${child2[i].span}
                          <strong>${child2[i].strg}</strong>
                      </span>
                  </div>
                  <div class = "bottom-img">
                      <img class="imgs" src="${child2[i].images}" alt="">
                  </div>
                  <div class="bottom-text">
                      <h3>${child2[i].h3}</h3>
                      <strong>${child2[i].strong}</strong>
                  </div>
              </div>
          </div> 
      </a>`
        }
         $(".conright2").html(str2);

         for(var i = 0; i < child3.length; i++){
          str3 += `<a href="">
          <div class="conright-item">
              <div class="conright-item-top">
                  <img  class="win" src="${child3[i].img}" alt="">
              </div>
              <div class="conright-item-bottom">
                  <div class="num">
                      <span>${child3[i].span}
                          <strong>${child3[i].strg}</strong>
                      </span>
                  </div>
                  <div class = "bottom-img">
                      <img class="imgs" src="${child3[i].images}" alt="">
                  </div>
                  <div class="bottom-text">
                      <h3>${child3[i].h3}</h3>
                      <strong>${child3[i].strong}</strong>
                  </div>
              </div>
          </div> 
      </a>`
        }
         $(".conright3").html(str3);

         for(var i = 0; i < child4.length; i++){
          str4 += `<a href="">
          <div class="conright-item">
              <div class="conright-item-top">
                  <img  class="win" src="${child4[i].img}" alt="">
              </div>
              <div class="conright-item-bottom">
                  <div class="num">
                      <span>${child4[i].span}
                          <strong>${child4[i].strg}</strong>
                      </span>
                  </div>
                  <div class = "bottom-img">
                      <img class="imgs" src="${child4[i].images}" alt="">
                  </div>
                  <div class="bottom-text">
                      <h3>${child4[i].h3}</h3>
                      <strong>${child4[i].strong}</strong>
                  </div>
              </div>
          </div> 
      </a>`
        }
         $(".conright4").html(str4);

         for(var i = 0; i < child5.length; i++){
          str5 += `<a href="">
          <div class="conright-item">
              <div class="conright-item-top">
                  <img  class="win" src="${child5[i].img}" alt="">
              </div>
              <div class="conright-item-bottom">
                  <div class="num">
                      <span>${child5[i].span}
                          <strong>${child5[i].strg}</strong>
                      </span>
                  </div>
                  <div class = "bottom-img">
                      <img class="imgs" src="${child5[i].images}" alt="">
                  </div>
                  <div class="bottom-text">
                      <h3>${child5[i].h3}</h3>
                      <strong>${child5[i].strong}</strong>
                  </div>
              </div>
          </div> 
      </a>`
        }
         $(".conright5").html(str5);


         for(var i = 0; i < child6.length; i++){
          str6 += `<a href="">
          <div class="conright-item">
              <div class="conright-item-top">
                  <img  class="win" src="${child6[i].img}" alt="">
              </div>
              <div class="conright-item-bottom">
                  <div class="num">
                      <span>${child6[i].span}
                          <strong>${child6[i].strg}</strong>
                      </span>
                  </div>
                  <div class = "bottom-img">
                      <img class="imgs" src="${child6[i].images}" alt="">
                  </div>
                  <div class="bottom-text">
                      <h3>${child6[i].h3}</h3>
                      <strong>${child6[i].strong}</strong>
                  </div>
              </div>
          </div> 
      </a>`
        }
         $(".conright6").html(str6);


         for(var i = 0; i < child7.length; i++){
          str7 += `<a href="">
          <div class="conright-item">
              <div class="conright-item-top">
                  <img  class="win" src="${child7[i].img}" alt="">
              </div>
              <div class="conright-item-bottom">
                  <div class="num">
                      <span>${child7[i].span}
                          <strong>${child7[i].strg}</strong>
                      </span>
                  </div>
                  <div class = "bottom-img">
                      <img class="imgs" src="${child7[i].images}" alt="">
                  </div>
                  <div class="bottom-text">
                      <h3>${child7[i].h3}</h3>
                      <strong>${child7[i].strong}</strong>
                  </div>
              </div>
          </div> 
      </a>`
        }
         $(".conright7").html(str7);
      },
      error: function(msg){
        console.log(msg);
      }
      
    })
  }
  function shaver(){
    $.ajax({
      type: 'get',
      url: "../data/4.json",
      success: function(arr){
        var str = ``;
        for(var i = 0; i < arr.length; i++){
          str += `<div class="shaver-content-item">
          <div class="items-item-img">
              <img class="item-img" src="${arr[i].pic}" alt="">
              <div class="shaver-pic">
                  <img class="shaver-pic-img" src="${arr[i].images}" alt="">
              </div>
          </div>
          <div class="items-cart">
              <img src="${arr[i].img}" alt="">
          </div>
          <div class="item-bottom">
              <span class="name">${arr[i].span}</span>
              <span class="tag">${arr[i].p}</span>
              <div class="item-bottom-price">
                  <span class="nowPrice">
                      <h3>${arr[i].h3}</h3>
                      <strong>${arr[i].strong}</strong>
                  </span>
              </div>
          </div>
      </div>`
        }

        $(".shaver-content-items").html(str);
      },
      error: function(msg){
        console.log(msg);
      }
      
    })
  }
  function  hairdrier(){
    $.ajax({
      type: 'get',
      url: "../data/5.json",
      success: function(arr){
        var str = ``;
        for(var i = 0; i < arr.length; i++){
          str += `<div class="content-item">
          <div class="hairdrie-item-img">
              <img class="hairdrie-img" src="${arr[i].pic}" alt="">
              <div class="hairdrie-pic">
                  <img class="${arr[i].images}" src="" alt="">
              </div>
          </div>
          <div class="hairdrier-item-bottom">
              <span class="name">${arr[i].span}</span>
              <span class="tag">${arr[i].p}</span>
              <div class="item-price">
                  <span class="nowPrice">
                      <h3 class="hs">${arr[i].h3}</h3>
                      <strong class="sto">${arr[i].strong}</strong>
                  </span>
              </div>
          </div>
      </div>`
        }

        $(".hairdrier-content-items").html(str);
      },
      error: function(msg){
        console.log(msg);
      }
      
    })
  }
  function  haircut(){
    $.ajax({
      type: 'get',
      url: "../data/6.json",
      success: function(arr){
        var str = ``;
        for(var i = 0; i < arr.length; i++){
          str += `<div class="haircut-item">
          <div class="item-img">
              <img src="${arr[i].pic}" alt="" class="img1">
              <div class="haircut-pic-tags">
                  <img src="${arr[i].images}" alt="">
              </div>
          </div>
          <div class="haircut-item-bottom">
              <span class="haircut-name">${arr[i].span}</span>
              <span class="haircut-tag">${arr[i].p}</span>
              <div class="haircut-price">
                  <span class="nowPrice">
                      <h3>${arr[i].h3}</h3>
                      <strong>${arr[i].strong}</strong>
                  </span>
              </div>
          </div>
      </div>`
        }

        $(".haircut-items").html(str);
      },
      error: function(msg){
        console.log(msg);
      }
      
    })
  }
  function items(){
    $(".conleft").on("mouseenter","span",function(){
      var as1 = $('.conright') ;
      var spans1 = $('.conleft .item');
      for(var i = 0 ;i < spans1.length;i++){
        $(spans1[i]).mouseenter(function (){
          $(this).addClass('active').siblings("span").removeClass("active");
          var index = $(this).index();
          $(as1[index]).css('display','flex').siblings('.conright').css('display','none')
        })
      }
      return false
    })
   
  }
  function  haircurler(){
    $.ajax({
      type: 'get',
      url: "../data/7.json",
      success: function(arr){
        var str = ``;
        for(var i = 0; i < arr.length; i++){
          str += `<div class="haircurler-item">
          <div class="leftImg">
              <img class="imgs" src="${arr[i].pic}" alt="">
              <div class="haircurler-pic-tags">
                  <img src="${arr[i].images}" alt="">
              </div>
          </div>
          <div class="item-right">
              <div class="name">${arr[i].span}</div>
              <div class="tag">
                  <span class="pic">
                      <p>
                        ${arr[i].p1}
                      </p>
                  </span>
                  <span class="pic">
                      <p>
                        ${arr[i].p2}
                      </p>
                  </span>
                  <span class="pic">
                      <p>
                        ${arr[i].p3}
                      </p>
                  </span>
              </div>
              <div class="item-price">
                  <span class="nowPrice">
                      <h3>${arr[i].h3}</h3>
                      <strong>${arr[i].strong}</strong>
                  </span>
              </div>
          </div>
      </div>`
        }

        $(".haircurler-content-items").html(str);
      },
      error: function(msg){
        console.log(msg);
      }
      
    })
  }
  function  smallhaircurler(){
    $.ajax({
      type: 'get',
      url: "../data/8.json",
      success: function(arr){
        var str = ``;
        for(var i = 0; i < arr.length; i++){
          str += `<div class="haircurler-item">
          <div class="leftImg">
              <img src="${arr[i].pic}" alt="">
          </div>
          <div class="item-right">
              <div class="name">${arr[i].span}</div>
              <div class="right-tag">
                  <span class="pic">
                      <p>
                      ${arr[i].p1}
                      </p>
                  </span>
                  <span class="pic">
                      <p>
                      ${arr[i].p2}
                      </p>
                  </span>
                  <span class="pic">
                      <p>
                      ${arr[i].p3}
                      </p>
                  </span>
              </div>
              <div class="item-price">
                  <span class="nowPrice">
                      <h3>${arr[i].h3}</h3>
                      <strong>${arr[i].strong}</strong>
                  </span>
              </div>
          </div>
      </div>`
        }

        $(".haircurler-items").html(str);
      },
      error: function(msg){
        console.log(msg);
      }
      
    })
  }
  function  trimmer(){
    $.ajax({
      type: 'get',
      url: "../data/10.json",
      success: function(arr){
        var str = ``;
        for(var i = 0; i < arr.length; i++){
          str += `<span class="trimmer-item">
          <div class="el-row">
              <img src="${arr[i].pic}" alt="">
              <div class="trimmer-pic-tags">
                  <img src="${arr[i].images}" alt="">
              </div>
          </div>
      </span>`
        }

        $(".trimmer-items").html(str);
      },
      error: function(msg){
        console.log(msg);
      }
      
    })
  }
  function  socket(){
    $.ajax({
      type: 'get',
      url: "../data/11.json",
      success: function(arr){
        var str = ``;
        for(var i = 0; i < arr.length; i++){
          str += `<div class="socket-item">
          <img class="img1" src="${arr[i].pic}" alt="">
          <div class="socket-tag">
              <img ${arr[i].images}" alt="">
          </div>
          <div class="item-bottom">
              <div class="item-left">
                  <h3 class="name">${arr[i].name}</h3>
                  <span>${arr[i].span}</span>
              </div>
              <div class="item-right">
                  <h3>${arr[i].h3}</h3>
                  <strong>${arr[i].strong}</strong>
              </div>
          </div>
      </div>`
        }

        $(".socket-items").html(str);
      },
      error: function(msg){
        console.log(msg);
      }
      
    })
  }
  function  bigsocket(){
    $.ajax({
      type: 'get',
      url: "../data/12.json",
      success: function(arr){
        var str = ``;
        for(var i = 0; i < arr.length; i++){
          str += `<div class="bigsocket-item">
          <img class="imgs" src="${arr[i].pic}" alt="">
          <div class="bigsocket-item-bottom">
              <div class="bottom-left">
                  <h3 class="name">${arr[i].name}</h3>
                  <span>${arr[i].span}</span>
              </div>
              <div class="bottom-right">
                  <h3>${arr[i].h3}</h3>
                  <strong>${arr[i].strong}</strong>
              </div>
          </div>
      </div>`
        }

        $(".bigsocket-items").html(str);
      },
      error: function(msg){
        console.log(msg);
      }
      
    })
  }
  function  bannereother(){
    $.ajax({
      type: 'get',
      url: "../data/13.json",
      success: function(arr){
        var str = ``;
        for(var i = 0; i < arr.length; i++){
          str += `<div class="slide">
          <div class="item">
              <img src="${arr[i].pic}" alt="" class="img">
          </div>
          <span>${arr[i].name}</span>
      </div>`
        }

        $(".swipe-wrapper").html(str);
      },
      error: function(msg){
        console.log(msg);
      }
      
    })
  }
  function startMove(){
    $(".proArea").mouseenter(function(){
      $(".product").css("display","block")
    })
    $(".proArea").mouseleave(function(){
      $(".product").css("display","none")
    })
    $(".product").mouseenter(function(){
      $(".product").css("display","block")
    })
    $(".product").mouseleave(function(){
      $(".product").css("display","none")
    })
    $(".item").mouseenter(function(){
      $(this).addClass('active1').siblings(".item").removeClass("active1")
    })
  }
  function scroll(){
    var a = document.querySelector(".ascroll")
    window.onscroll = function(){
      top1 = top1=document.body.scrollTop || document.documentElement.scrollTop;
      if(top1>=500){
          a.style.display="block";
      }else{
        a.style.display="none";
      }
    }
    
    a.onclick = function(){
      if(top1>=500){
        top1=0;
      }
    }
    $(".cp-fixedTool .items").mouseenter(function(){
      $(this).find(".img").css("display","none").siblings().css("display","block")
    })
    $(".cp-fixedTool .items").mouseleave(function(){
      $(this).find(".img").css("display","block").siblings().css("display","none")
    })
    $("#app").on("click",".aImg",function(){
      console.log(1)
      $(".el-dialog").css("display","block")
    })
    $(".el-dialog").on("click",".dialog-title-right",function(){
      $(".el-dialog").css("display","none")
    })
  }
  return {
    download,
    shaver,
    hairdrier,
    haircut,
    haircurler,
    smallhaircurler,
    items,
    trimmer,
    socket,
    bigsocket,
    bannereother,
    startMove,
    scroll,
  }
})