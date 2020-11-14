define(["jquery","jquery-cookie"], function($){
    function sc_num(){
        var cookieStr = $.cookie("goods");
        var sum = 0;
        if(cookieStr){
          var cookieArr = JSON.parse(cookieStr);
          
          for(var i = 0; i < cookieArr.length; i++){
            
            sum += cookieArr[i].num;
          }
        }
        $("#q").val(sum);
    }


    //给删除按钮添加点击
    function sc_msg(){
      no()
      $.ajax({
        type: 'get',
        url: "../data/list.json",
        success: function(arr){
          var cookieStr = $.cookie("goods");
          var newArr=[];
          if(cookieStr){
            var cookieArr = JSON.parse(cookieStr);
            //判断cookie中是否有当前商品，没有就追加
            for(var i=0;i<arr.length;i++){
              for(var j=0;j<cookieArr.length;j++){
                if(arr[i].id==cookieArr[j].id){
                  arr[i].num = cookieArr[j].num;
                  newArr.push(arr[i]);
                  break;
                }
              }
            }
            var str = ``;
          for(var i = 0; i < newArr.length; i++){
            str += `<div id=${newArr[i].id} class="item">
            <div class="item-product">
                <div class="P-info">
                    <input class="xuan" type="checkbox">
                </div>
                <a class="infoImg" href="">
                    <img src="${newArr[i].pic}" alt="">
                </a>
                <div class="text">
                    <a href="" target=_blank>
                        <span class="name">${newArr[i].name}</span>
                    </a>
                    <span class="subTitle">${newArr[i].p}</span>
                </div>
                <div class="item-productA">
                    <div>￥<span>${newArr[i].prices}</span></div>
                </div>
                <div class="product-num">
                    <div class="num">
                        <button>-</button>
                        <span class="inputA">${cookieArr[i].num}</span>
                        <button>+</button>
                    </div>
                </div>
                <div class="product-subtotal">${(newArr[i].prices*cookieArr[i].num)}</div>
                <div class="el-link">
                    <span class="el-inner">删除</span>
                </div>
            </div>
        </div>`
          }
  
          $(".list-item").html(str);
        }
          
      },
        error: function (msg){
          console.log(msg);
        }
        
      })
      //通过事件委托添加删除 和 + 和 -的功能
      $(".list").on("click", '.el-inner', function(){
            
        //删除节点  页面上要删除这个节点，cookie中也要删除
        var id = $(this).closest(".item").remove().attr("id");
        var cookieArr = JSON.parse($.cookie("goods"));
        for(var i=0;i<cookieArr.length;i++){
          if(cookieArr[i].id==id){
            //删除
            cookieArr.splice(i,1)
            break;
          }
        };
        //判断cookieArr是否为空
        cookieArr.length === 0 ? $.cookie("goods", null) : $.cookie("goods", JSON.stringify(cookieArr), {
          expires: 7
        })
        sc_num();
        no();
      })


   
        $(".list").on("click","button",function(){
          //获取当前商品的id
          var id = $(this).closest(".item").attr("id");
          //先从cookie中将这条数据取出来
          var cookieArr = JSON.parse($.cookie("goods"));
          //var index = cookieArr.findIndex(item => item.id == id);
          for(var i=0;i<cookieArr.length;i++){
          //判断当前是+还是-
            if(this.innerHTML=="+"){
              cookieArr[i].num++
            }else{
              cookieArr[i].num==1 ? cookieArr[i].num=1 : cookieArr[i].num--;
            }
         
          //修改页面上的数量
          $(this).siblings(".inputA").html(cookieArr[i].num);
        
          $.cookie("goods",JSON.stringify(cookieArr),{
            expires:7
          })
          //计算小计
          var sum1 = 0;
          var price =  $(this).closest(".product-num").prev(".item-productA").find("div span").html();

          var count = $(this).siblings(".inputA").html()
          var sum = price*count;
          $(this).closest(".product-num").next(".product-subtotal").html(sum)
          sum1+=parseFloat(price*count) 
          console.log(sum1)
          $(".list-bottom-right").find(".amountA").html(sum1)
        } 
          sc_num();
        })
       
        $(".header").on("click",".quan",function(){
          
          var xuans = $('.list input.xuan')
          var quans  = $(".list-bottom .quan")
          if (this.checked) {
            for(var i = 0 ;i < xuans.length; i++){
              xuans[i].checked = true;
              
            }
            for(var i = 0 ;i < quans.length; i++){
              quans[i].checked = true;
              
            }

          } else {
            for(var i = 0 ;i < xuans.length; i++){
              xuans[i].checked = false;
            }
            for(var i = 0 ;i < quans.length; i++){
              quans[i].checked = false;
              
            }
          }

        })
        $(".list-bottom").on("click",".quan",function(){
          
          var xuans = $('.list input.xuan')
          var quans  = $(".header .quan")
          if (this.checked) {
            for(var i = 0 ;i < xuans.length; i++){
              xuans[i].checked = true;
              
            }
            for(var i = 0 ;i < quans.length; i++){
              quans[i].checked = true;
              
            }

          } else {
            for(var i = 0 ;i < xuans.length; i++){
              xuans[i].checked = false;
            }
            for(var i = 0 ;i < quans.length; i++){
              quans[i].checked = false;
              
            }
          }
        })
        //批量删除
          $(".list-bottom").on("click",".spanC",function(){

            $.cookie("goods",null)
          
              $(".list-item").remove()
              sc_num();
             
              var quans1  = $(".header .quan")
              var quans2  = $(".list-bottom .quan")
              for(var i = 0 ;i < quans1.length; i++){
                quans1[i].checked = false;
                
              } 
              for(var i = 0 ;i < quans2.length; i++){
                quans2[i].checked = false;
                
              }         
          })
        //   var xuans = $('.list .xuan');
        //   var a = 0;
        //   var quans1  = $(".header .quan")
        //   var quans2  = $(".list-bottom .quan")
        //   //$('.list').on("click",".xuan",function(){
        //     for(var i=0;i<xuans.length;i++){
        //       if(xuan[i].checked){
        //         a++
        //         console.log(a)
        //       }
        //     }
        //     if(a==xuans.length){      
        //         quans1[i].checked = true;
        //         quans2[i].checked = true;              
        //     }else{            
        //         quans1[i].checked = false;
        //         quans2[i].checked = false;  
        //     }
        //  // })
        
          //登录页面的显示与隐藏
          $("#sc").on("click",".aImg",function(){
            console.log(1)
            $(".el-dialog").css("display","block")
          })
          $(".el-dialog").on("click",".dialog-title-right",function(){
            $(".el-dialog").css("display","none")
          })
       
    }
    //  function pricesA(){
    //   //console.log(2)
    //   var items = $(".item")
    //   var total =0;
    //   items.each(function(index,item){
    //     //console.log(1)
    //     var price = $(item).find(".item-productA div span").html();
    //     var num = $(item).find(".num .inputA").html();
    //     var priceB =price*num
    //     console.log(price)
    //     total += priceB;
    //     //console.log(total)
    //   })
    //     $("list-bottom .amountA").html(total)
    // }
    function no(){
       var cookieArr = JSON.parse($.cookie("goods"));
      
              if(cookieArr==null){
                $(".no").css("display","block")
              }else{
                $(".no").css("display","none")
              }
            }
    return {
      sc_num,
      sc_msg,
      no,
      //pricesA
    }   
})