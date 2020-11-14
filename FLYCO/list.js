define(["jquery","jquery-cookie"], function($){
    function  listA(){
        $.ajax({
          type: 'get',
          url: "../data/list.json",
          success: function(arr){
            var str = ``;
            for(var i = 0; i < arr.length; i++){
              str += `
              <div class="plplist-item" ${arr[i].id}>
              <div class="el-card-body">
                  <div class="item-img">
                      <a class="a-img" href="part.html">
                          <img class="imga" src="${arr[i].pic}" alt="">
                          <img class="imgb" src="${arr[i].img}" alt="">
                          <div class="pic-tags">
                              <img src="${arr[i].images}" alt="">
                          </div>
                      </a>
                  </div>
                  <div class="item-tagRemark">
                      <div class="item-avtRed">
                          <span>${arr[i].span}</span>
                      </div>
                  </div>
                  <div class="item-name">
                      <a href="" class="name">${arr[i].name}</a>
                      <img id="${arr[i].id}" class="btns" src="${arr[i].img1}" alt="">
                  </div>
                  <div class="item-price">
                  ${arr[i].price}
                      <span class="price">${arr[i].prices}</span>
                  </div>
                  <div class="item-label">
                      <span>${arr[i].span1}</span>
                  </div>
              </div>
          </div>
      </div>`
            }
    
            $(".plplist").html(str);
        },
          error: function (msg){
            console.log(msg);
          }
          
        })
        var link = $(".list1 .el-link")
        for(var i = 0 ;i < link.length;i++){
            $(link[i]).mouseenter(function (){
              $(this).addClass('active').siblings("a").removeClass("active");
             
            })
            $(link[i]).mouseleave(function (){
                $(this).removeClass("active");
               
              })
            $(link[i]).click(function (){
                $(this).addClass('active').siblings("a").removeClass("active");
               
              })
          }
          
        var label = $(".screen-list .label .el-link .el-link-inner")
        for(var i = 0 ;i < label.length;i++){
            $(label[i]).mouseenter(function (){
              $(this).addClass('active1').siblings("span").removeClass("active1");
             
            })
            $(label[i]).mouseleave(function (){
                $(this).removeClass("active1");
               
              })
            $(label[i]).click(function (){
                $(this).addClass('active1').siblings("span").removeClass("active1");
               
              })
        }
    }
    function sc(){

      
        $("#list").on("click",".btns",function(){
        
            //获取到当前点击按钮所在商品的id
            var id = this.id;
            var first = $.cookie("goods")==null ? true : false;
            if(first){
                var cookieArr = [{id:id,num:1}];
                $.cookie("goods",JSON.stringify(cookieArr),{
                    expires:7
                })
            }else{
                var cookieArr = JSON.parse($.cookie("goods"));
                var same = false;//假设没添加过
                for(var i=0;i<cookieArr.length;i++){
                    if(cookieArr[i].id==id){
                        same = true;
                        break;
                    }
                }
                if(same){
                    cookieArr[i].num++;
                }else{
                    let obj = {id:id,num:1};
                    cookieArr.push(obj)
                }
                $.cookie("goods", JSON.stringify(cookieArr), {
                    expires: 7
                  })
                
            }
           
            // var cookieArr = JSON.parse($.cookie("goods"));
            // var inputs = document.querySelector(".input");
            // var sum = 0;
            // var cookieStr = $.cookie("goods");
            // if(cookieStr==null){
            //     return false;
            // }
            // if(cookieStr){
            //     var cookieArr = JSON.parse(cookieStr);
            //     for(var i=0;i<cookieArr.length;i++){
            //         sum +=cookieArr[i].num
            //         inputs.value = sum;
            //     }
            // }
            sc_num()
            
        })

        //登录页面的显示与隐藏
        
    }
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
     
    $("#list").on("click",".aImg",function(){
        console.log(1)
        $(".el-dialog").css("display","block")
      })
      $(".el-dialog").on("click",".dialog-title-right",function(){
        $(".el-dialog").css("display","none")
      })
    }  
    return {
        listA,
        sc,
        sc_num
    }    
})