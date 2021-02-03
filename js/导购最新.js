/*
 * @Author: your name
 * @Date: 2021-02-02 13:33:31
 * @LastEditTime: 2021-02-02 15:45:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\极果\JiGuo\js\导购最新.js
 */
$.ajax({
    url:http+'/guid/new',
    dataType:'json',
    data:'get',
    success:function(res){
        // console.log(res)
        var daonew=doT.template($('#guidnew').text())
        $('#new').html(daonew(res))
    }
})



$('.hot').click(function(){
    $(this).addClass('bottom')
    $('.new').removeClass('bottom')
    $('#new').hide()
    $('#hot').show()

    $.ajax({
        url:http+'/guid/hot',
        dataType:'json',
        data:'get',
        success:function(res){
            console.log(res)
            var daonew=doT.template($('#guidnew').text())
            $('#hot').html(daonew(res))
        }
    })
})



$('.new').click(function(){
    $(this).addClass('bottom')
    $('.hot').removeClass('bottom')
    $('#hot').hide()
    $('#new').show()

    $.ajax({
        url:http+'/guid/new',
        dataType:'json',
        data:'get',
        success:function(res){
            console.log(res)
            var daonew=doT.template($('#guidnew').text())
            $('#new').html(daonew(res))
        }
    })
})

$('.nomain_loading').click(function(){
    $(this).text('正在加载更多......')
    
    setTimeout(function(){
        $('.nomain_loading').text('点击加载更多')
        guidnew()
    },2000)
})

function guidnew(){
    $.ajax({
        url:http+'/play/new',
        dataType:'json',
        data:'get',
        success:function(res){
            console.log(res)
            var daonew1=doT.template($('#guidnew').text())
            var old=$('.new_more').html()
            $('.new_more').html(old+daonew1(res[parseInt(Math.random()*4)]))
        }
    })
}



var hding=document.getElementsByClassName('hding')[0]
var ks=document.documentElement.clientHeight 
var isTop=true
var timer_=null;

window.onscroll = function() {　
     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop>ks){
        hding.style.display='block'
    }else if(scrollTop<ks){
        hding.style.display='none'
    }
   
    if(!isTop){
        clearInterval(timer_)
    }
    isTop=false
    
}
hding.onclick=function(){
      timer_=setInterval(function(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //用于设置速度差，产生缓动的效果
        var speed=Math.floor(-scrollTop/6)
        document.documentElement.scrollTop=document.body.scrollTop=scrollTop+speed
        isTop=true
        if(scrollTop==0){
            clearInterval(timer_)
        }
    },30)
   
}
