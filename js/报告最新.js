/*
 * @Author: your name
 * @Date: 2021-02-03 15:05:07
 * @LastEditTime: 2021-02-03 16:05:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\极果\JiGuo\js\报告最新.js
 */
$.ajax({
    url:'http://127.0.0.1:3000/report/new',
    dataType:'json',
    data:'get',
    success:function(res){
        console.log(res)
        var reportnew=doT.template($('#baogao').text())
        $('.mid_main_lfDiv').html(reportnew(res))
    }
})


$('.rephot').click(function(){
    $(this).addClass('mid_top_spanC')
    $('.repnew').removeClass('mid_top_spanC')


    $.ajax({
        url:http+'/report/hot',
        dataType:'json',
        data:'get',
        success:function(res){
            console.log(res)
            var reportnew=doT.template($('#baogao').text())
            $('.mid_main_lfDiv').html(reportnew(res))
        }
    })
})

$('.repnew').click(function(){
    $(this).addClass('mid_top_spanC')
    $('.rephot').removeClass('mid_top_spanC')

    $.ajax({
        url:http+'/report/new',
        dataType:'json',
        data:'get',
        success:function(res){
            console.log(res)
            var reportnew=doT.template($('#baogao').text())
            $('.mid_main_lfDiv').html(reportnew(res))
        }
    })
})


$('.gengduo').click(function(){
    $(this).html('正在加载......')
    setTimeout(function(){
        $('.gengduo').html('点击加载更多')
        obj()
    },2000)
})


function obj(){
    $.ajax({
        url:http+'/report/hot',
        dataType:'json',
        data:'get',
        success:function(res){
            console.log(res)
            var reportnew=doT.template($('#baogao').text())
            var old=$('.mid_mainnew').html()
            $('.mid_mainnew').html(old+reportnew(res))
        }
    })
}