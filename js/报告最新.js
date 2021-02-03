/*
 * @Author: your name
 * @Date: 2021-02-03 15:05:07
 * @LastEditTime: 2021-02-03 15:22:57
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


$('.mid_top_twoV>span').click(function(){
    $(this).addClass('mid_top_spanC').siblings().removeClass('mid_top_spanC')
})