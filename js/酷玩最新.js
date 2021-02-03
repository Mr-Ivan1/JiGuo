/*
 * @Author: your name
 * @Date: 2021-02-01 18:01:54
 * @LastEditTime: 2021-02-02 13:38:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\极果\JiGuo\js\酷玩最新.js
 */

var main_more=document.getElementsByClassName('main_more')[0]
var nomain_loading=document.getElementsByClassName('nomain_loading')[0]
var newone=document.getElementsByClassName('new_one')[0]

var xml=new XMLHttpRequest()
xml.open('get','http://127.0.0.1:3000/play/new',true)
xml.send()
xml.onreadystatechange=function(){
    if(xml.readyState==4){
        if(xml.status==200){
            var res=JSON.parse(xml.responseText) 
            console.log(res)
            var kunew=doT.template($('#newone').text())
            newone.innerHTML=kunew(res[0])
        }
    }
}












$('.sort').click(function(){
   $(this).addClass('bottom')
   $('.new').removeClass('bottom')
   $('.hot').removeClass('bottom')
   $('.one').hide()
   $('.two').hide()
   $('.there').show()
})


$('.new').click(function(){
    $(this).addClass('bottom')
    $('.hot').removeClass('bottom')
    $('.sort').removeClass('bottom')
    $('.one').show()
    $('.two').hide()
    $('.there').hide()
    $.ajax({
        url:http+'/play/new',
        dataType:'json',
        data:'get',
        success:function(res){
            console.log(res)
            var kunew=doT.template($('#newone').text())
            $('.new_one').html(kunew(res[0]))
           
        }
    })
 })


 $('.hot').click(function(){
    $(this).addClass('bottom')
    $('.new').removeClass('bottom')
    $('.sort').removeClass('bottom')
    $('.one').hide()
    $('.two').show()
    $('.there').hide()
    
    $.ajax({
        url:http+'/play/hot',
        dataType:'json',
        data:'get',
        success:function(res){
            console.log(res)
            var kunew=doT.template($('#newone').text())
            $('.hot_one').html(kunew(res[2]))
         
        }
    })
 })



 main_more.onclick=function(){
    nomain_loading.innerHTML='数据正在加载......'
   
    setTimeout(function(){
        playnew()
        playnew1()
        nomain_loading.innerHTML='点击加载更多'
    },2000)

}

function playnew(){
    $.ajax({
        url:http+'/play/new',
        dataType:'json',
        data:'get',
        success:function(res){
            console.log(res)
            var kunew=doT.template($('#hot').text())
           var old=$('.new_more').html()
            $('.new_more').html(old+kunew(res[parseInt(Math.random()*4)]))
           
        }
    })
}

function playnew1(){
    $.ajax({
        url:http+'/play/new',
        dataType:'json',
        data:'get',
        success:function(res){
            console.log(res)
            var kunew=doT.template($('#hot').text())
           var old=$('.hot_more').html()
            $('.hot_more').html(old+kunew(res[parseInt(Math.random()*4)]))
           
        }
    })
}








