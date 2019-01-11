// 初始化nav区域滚动
$(function(){
    mui('.mui-scroll-wrapper').scroll({
        indicators: false, //是否显示滚动条
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    $('.nav-btn').on('tap','li',function(){
        
        $(this).addClass('active').siblings().removeClass('active');
    })
    

    // 页面开始,加载列表,发送请求
    $.ajax({
        type:'get',
        url:'http://localhost:9090/api/getbaicaijiatitle',
        success:function(res){
            console.log(res);
            var html = template('navlistTpl', res);
                
            $('.nav-btn-scroll ul').html(html);
        }
    })


    // 给每个li标签添加点击事件
    $('.nav-btn-scroll .nav-btn').on('tap','li',function(){
        var id = $(this).data('id');
        console.log(id);
        querySecondCommodity(id);
    })

    querySecondCommodity(0);
    
    function querySecondCommodity (id){
        $.ajax({
            type:'get',
            url:'http://localhost:9090/api/getbaicaijiaproduct',
            data:{titleid:id},
            success:function(obj){
                // console.log(obj);
                var html = template('navcommTpl', obj);
                // console.log(html);
                
                $('#main .mui-table-view').html(html);
            }
        })
    }

    // 页面滚动的高度
    var b;
    var c;
    
    var group = $('.fixede'); //滚动的元素
  
    
    $(window).scroll(function(){
        b = $(this).scrollTop(); //页面滚动的高度
    //   console.log(b);
      
        c = group.offset().top;  //元素距离文档的高度
        console.log(c);
        
        if(c>510){
            group.show();
        }else{
            group.hide();
        }
    })

    $('.fixede .fa-long-arrow-up').on('tap',function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
        // window.parent.scrollTo(0, 0);
    })

    $('#footer #rtt').on('tap',function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
        // window.parent.scrollTo(0, 0);
    })
})