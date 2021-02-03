/*
 * @Author: your name
 * @Date: 2021-02-02 16:11:59
 * @LastEditTime: 2021-02-03 00:00:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\极果\JiGuo\js\use.js
 */
$.ajax({
    url:'http://127.0.0.1:3000/useing/public',
    dataType:'json',
    data:'get',
    success:function(res){
        console.log(res)
        var dazhong=doT.template($('#dazhong').text())
        $('#free_list').html(dazhong(res))
    }
})


$('.ti').click(function(){
    $('.da').removeClass('da')
    $(this).addClass('da')

    $.ajax({
        url:http+'/useing/master',
        dataType:'json',
        data:'get',
        success:function(res){
            console.log(res)
            var dazhong=doT.template($('#dazhong').text())
            $('#free_list').html(dazhong(res))
        }
    })

})

$('.da').click(function(){
    $('.ti').removeClass('da')
    $(this).addClass('da')

    $.ajax({
        url:http+'/useing/public',
        dataType:'json',
        data:'get',
        success:function(res){
            console.log(res)
            var dazhong=doT.template($('#dazhong').text())
            $('#free_list').html(dazhong(res))
        }
    })

})

$('.da').click(function(){
    $('.ti').removeClass('da')
    $(this).addClass('da')

    $('.free_3_1>.quanbu').click(function(){
        $.ajax({
            url:http+'/useing/master',
            dataType:'json',
            data:'get',
            success:function(res){
                console.log(res)
                var dazhong=doT.template($('#dazhong').text())
                $('#free_list').html(dazhong(res))
            }
        })
    })

    $('.free_3_1>.shen').click(function(){
        $.ajax({
            url:http+'/useing/public',
            dataType:'json',
            data:'get',
            success:function(res){
                console.log(res)
                var dazhong=doT.template($('#dazhong').text())
                $('#free_list').html(dazhong(res))
            }
        })
    })

    $('.free_3_1>.shi').click(function(){
        $.ajax({
            url:http+'/useing/master',
            dataType:'json',
            data:'get',
            success:function(res){
                console.log(res)
                var dazhong=doT.template($('#dazhong').text())
                $('#free_list').html(dazhong(res))
            }
        })
    })

    $('.free_3_1>.yi').click(function(){
        $.ajax({
            url:http+'/useing/public',
            dataType:'json',
            data:'get',
            success:function(res){
                console.log(res)
                var dazhong=doT.template($('#dazhong').text())
                $('#free_list').html(dazhong(res))
            }
        })
    })

 

})

$('.free_3_1 li').click(function(){
    $(this).addClass('quanbu').siblings().removeClass('quanbu')
})

$('.nomain_loading').click(function(){
    $(this).html('正在加载......')

    setTimeout(function(){
        $('.nomain_loading').html('点击加载更多')
        obj()
    },2000)
})


function obj(){
    $.ajax({
        url:http+'/useing/public',
        dataType:'json',
        data:'get',
        success:function(res){
            console.log(res)
            var newdata=doT.template($('#dazhong').text())
            var old=$('#free_more_more').html()
            $('#free_more_more').html(old+newdata(res))
        }
    })
}