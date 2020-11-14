define(["jquery"], function($){
    function amplifier(){

        $(function () {
            $(".bigImg")
            .mouseenter(function () {
                $(".small,.mark").show();
            })
            .mouseleave(function () {
                $(".small,.mark").hide();
            })
            .mousemove(function(ev){
                var l = ev.pageX - $(this).offset().left - 108;
                l = Math.max(0, l);
                l = Math.min(l, 216);
                var t = ev.pageY - $(this).offset().top - 108;
                t = Math.max(0, t);
                t = Math.min(t, 216);
                $(".small").css({
                left: l,
                top: t
                })
                $(".mark img").css({
                left: -2 * l,
                top: -2 * t
                })
            })
        });
        var smaallImg = document.querySelectorAll(".smaallImg");
        var img1 =document.querySelector(".img1");
        var img2 = document.querySelector(".img2");
            for(let i=0;i<smaallImg.length;i++){
                smaallImg[i].onmouseenter=function(){
                    var a=20+i;
                    img1.setAttribute('src','../images2/ia_2000000'+a+'.jpg')
                    img2.setAttribute('src','../images2/ia_2000000'+a+'.jpg')
                }
           }
    }

    function dsq(){
        var dsq
        //获取div对象
        var spans=document.querySelector('.spans');
        //设置时间差的显示格式
        function fn1(){
            //获取开始时间
            var dt1=new Date()
            //获取结束时间
            var dt2=new Date("2020-11-30 24:00:00")
            //计算两个时间的时间差，单位：秒
            var t1=parseInt((dt2-dt1)/1000)
            if(t1<=0){
                clearInterval(dsq)
            }
            //天
            var d = Math.floor(t1/86400)
            var d1 = t1-d*86400;
            //小时
            var h=Math.floor(d1/3600)
            var h1 = d1 - h*3600
            if(h<10){
                h='0'+h
            }
            //分钟
            var m=Math.floor(h1/60)
            if(m<10){
                m='0'+m
            }
            var m1 =h1-m*60 
            //秒
            var s=m1
            if(s<10){
                s='0'+s
            }
            //拼接字符串
            var str="仅剩"+d+"天"+h+"小时"+m+"分"+s+"秒"
            // document.write(str)
            spans.innerHTML=str
        }
        fn1()
        dsq=setInterval(fn1,1000)
    }

    function target(){
        var app = document.querySelector("#app");
        var label = document.querySelectorAll(".header-label");
        var desc = document.querySelector(".pdpDetail-desc");
        var dara = document.querySelector(".pdpDetail-para")
        var item = document.querySelector(".comment-item")
        app.onclick=function(e){
    		var e = e || window.event
    		var target = e.target || e.srcElement
    		//判断点击是不是增加按钮
    		if(target.innerHTML=='商品介绍'){
                desc.style.display = "block";
                dara.style.display = "none";
                item.style.display = "none";
            };
            if(target.innerHTML=='规格参数'){
                desc.style.display = "none";
                dara.style.display = "block";
                item.style.display = "none";
            };
            if(target.innerHTML=='商品评价 （5）'){
                desc.style.display = "none";
                dara.style.display = "none";
                item.style.display = "block";
            }
            
        } 
    }
// function part(){
//     $.ajax({
//         type: 'get',
//         url: "../data/list.json",
//         success: function(arr){
//           var cookieStr = $.cookie("goods");
//           var newArr=[];
//           if(cookieStr){
//             var cookieArr = JSON.parse(cookieStr);
//             //判断cookie中是否有当前商品，没有就追加
//             for(var i=0;i<arr.length;i++){
//               for(var j=0;j<cookieArr.length;j++){
//                 if(arr[i].id==cookieArr[j].id){
//                   arr[i].num = cookieArr[j].num;
//                   newArr.push(arr[i]);
//                   break;
//                 }
//               }
//             }
//             var str = ``;
//           for(var i = 0; i < Arr.length; i++){
//             str += `<div ${Arr[i].id}">
//             <div class="pdpImges">
//                 <div class="bigImg">
//                     <div class="image-zoom">
//                         <img class= " img1" src="${arr[i].pic}" alt="">
//                     </div>
//                     <div class="small"></div>
//                 </div>
//                 <div class="mark">
//                     <img class="img2" src="${arr[i].pic}" alt="">
//                 </div>
//                 <div class="pdpImages-content">
//                     <div class="btn-prev">
//                         <i class="iconfont">&#xe501;</i>
//                     </div>
//                     <div class="swiper-container">
//                         <div class="swiper-wrapper">
//                             <div class="swiper-slide">
//                                 <div class="smaallImg">
//                                     <img src="${arr[i].smallImg1}" alt="">
//                                 </div>
//                             </div>
//                             <div class="swiper-slide">
//                                 <div class="smaallImg">
//                                     <img src="${arr[i].smallImg2}" alt="">
//                                 </div>
//                             </div>
//                             <div class="swiper-slide">
//                                 <div class="smaallImg">
//                                     <img src="${arr[i].smallImg3}" alt="">
//                                 </div>
//                             </div>
//                             <div class="swiper-slide">
//                                 <div class="smaallImg">
//                                     <img src="${arr[i].smallImg4}" alt="">
//                                 </div>
//                             </div>
//                             <div class="swiper-slide">
//                                 <div class="smaallImg">
//                                     <img src="${arr[i].smallImg5}" alt="">
//                                 </div>
//                             </div>
//                             <div class="swiper-slide">
//                                 <div class="smaallImg">
//                                     <img src="images2/ia_200000025.jpg" alt="">
//                                 </div>
//                             </div>
//                         </div>
//                         <span class="swiper-notification"></span>
//                     </div>
//                     <div class="btn-next">
//                         <i class="iconfont">&#xe502;</i>
//                     </div>
//                 </div>
//             </div>
//             <div class="pdpinfo">
//                 <p class="title">${arr[i].name}</p>
//                 <p class="smalltltle">${arr[i].p}</p>                  
//                 <div class="act">
//                     <span>嗨购盛宴 超燃开启</span>
//                     <span class="spans">仅剩11天02小时05分22秒</span>
//                 </div>
//                 <div class="pdp-item">
//                     <div class="item-left">
//                         <div class="name">活动价</div>
//                         <span class="symbol">￥</span>
//                         <span class="price">${arr[i].prices}</span>
//                         <span class="originalPrice">[￥599.00]</span>
//                     </div>
//                     <div class="item-right">
//                         <span class="text">累计评价 5</span>
//                     </div>
//                 </div>
//                 <div class="service">
//                     <div class="service-left">
//                         <div class="name">服务</div>
//                     </div>
//                     <div class="service-right">
//                         <div class="service-right-item">
//                             <img src="images2/ia_200000030.png" alt="">
//                             <span>满69元免邮费</span>
//                         </div>
//                         <div class="service-right-item">
//                             <img src="images2/ia_200000030.png" alt="">
//                             <span>官方正品保障</span>
//                         </div>
//                         <div class="service-right-item">
//                             <img src="images2/ia_200000030.png" alt="">
//                             <span>两年全国联保</span>
//                         </div>
//                         <div class="service-right-item">
//                             <img src="images2/ia_200000030.png" alt="">
//                             <span>7天无忧退换货</span>
//                         </div>
//                         <div class="service-right-item">
//                             <img src="images2/ia_200000030.png" alt="">
//                             <span>24小时发货</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="pdp-coupon">
//                     <div class="coupon-name">优惠</div>
//                     <div class="coupon-items">
//                         <div class="couipon-item">
//                             <span class="span1">6286/6288双十一优惠券</sapn>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="pdplimit">
//                     <div class="limit-name">限制</div>
//                     <span class="spans">特价商品不可与 优惠券叠加使用</span>
//                 </div>
//                 <div class="pdplimit">
//                     <div class="limit-name">不包邮</div>
//                     <span class="spans">台湾、香港、澳门、海外</span>
//                 </div>
//                 <div class="pdpspecifications">
//                     <div class="specifications-left">
//                         <div class="name">规格</div>
//                     </div>
//                     <div class="specifications-right">
//                         <div class="right-item">
//                             <img src="${arr[i].pic}" alt="" class="skuImg">
//                             <img src="images2/ia_200000032.png" alt="" class="selectedImg">
//                         </div>
//                     </div>
//                 </div>
//                 <div class="pdp-item">
//                     <div class="item-left">
//                         <div class="name">数量</div>
//                         <div class="input-number">
//                             <button>-</button>
//                             <input type="text" value="1">
//                             <button>+</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="pdp-item-a">
//                     <div class="pdp-item-button">
//                         <button class="el-button">
//                             <span>加入购物车</span>
//                         </button>
//                         <button class="el-button">
//                             <a href="sc.html"><span>立即购买</span></a>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
// `
//           }
//           $(".pdp-header").html(str);
//         }
          
//       },
//         error: function (msg){
//           console.log(msg);
//         }
        
//       })
// }
    function partnum(){
        sc_num()
        $(".pdp-item").on("click","button",function(){
            
            //获取当前商品的id
            var id = $(this).closest(".pdp-header").attr("id");
             var first = $.cookie("goods")==null ? false : true;
                if(first){
                //先从cookie中将这条数据取出来
                var cookieArr = JSON.parse($.cookie("goods"));
                var index = cookieArr.findIndex(item => item.id == id);
                //判断当前是+还是-
                if(this.innerHTML=="+"){
                cookieArr[index].num++
                }else{
                cookieArr[index].num==1 ? cookieArr[index].num=1 : cookieArr[index].num--;
                }
                //修改页面上的数量
                $(this).siblings("input").val(cookieArr[index].num);
            
                $.cookie("goods",JSON.stringify(cookieArr),{
                expires:7
                })
                sc_num()
            }else{
                var cookieArr = [{id:id,num:1}];
            $.cookie("goods",JSON.stringify(cookieArr),{
                expires:7
            })
            }
            
        })
    $(".el-button").on("click",".el-span",function(){
        
        //获取到当前点击按钮所在商品的id
        var id = $(this).closest(".pdp-header").attr("id");
        
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
               var a = parseFloat( $(".item-left .input-number").find("input").val())
                cookieArr[i].num+=a;
            }else{
                let obj = {id:id,num:1};
                cookieArr.push(obj)
            }
            $.cookie("goods", JSON.stringify(cookieArr), {
                expires: 7
              })
            
        }
        sc_num()
    })
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
      
   
}
   
return{
    amplifier,
    dsq,
    target,
    partnum
    
}
      
})