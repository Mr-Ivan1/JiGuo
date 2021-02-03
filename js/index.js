/*
 * @Author: your name
 * @Date: 2021-01-27 21:58:13
 * @LastEditTime: 2021-02-01 20:28:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\极果\JiGuo\js\index.js
 */


/* 倒计时 */
var daoshi=document.getElementsByClassName('daoshi')[0]
var inputtime= +new Date('2022-1-28 21:58:00') //用户输入的时间
var imgs=document.getElementsByClassName('imgs')

obj()
setInterval(obj,1000)
function obj(){
        
        var nowtime= +new Date() //当前时间
        var times=(inputtime-nowtime)/1000  //用户输入时间-当前时间
        var d=parseInt(times/60/60/24)
        d<10?d='0'+d:d
        var h=parseInt(times/60/60%24)
        h<10?h='0'+h:h
        var m=parseInt(times/60%60)
        m<10?m='0'+m:m
        var s=parseInt(times%60)
        s<10?s='0'+s:s
        daoshi.innerHTML='申请时间剩余:'+d+'天'+h+'时'+m+'分'+s+'秒'
    }

/* 点赞小红心 */
    $('.hx').each(function (index, item) {
      
        var flag_1 = true;
        $(item).on('click', function (e) {
            e = e || window.event;
            e.preventDefault();
            var num = $(this).next().next().text()
            if (flag_1 == true) {
                $(this).addClass('hx1');
                num++;
                $(this).next().next().text(num);
                flag_1 = !flag_1;
            } else {
                $(this).removeClass();
                num--;
                $(this).next().next().text(num);
                flag_1 = !flag_1;
            }
        });
    });
// 点击返回顶部
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

/* 懒加载 */

var jz=document.getElementsByClassName('jz')[0]
var xx=document.getElementsByClassName('xx')[0]
var c_9=document.getElementsByClassName('c_9')[0]
var uls=document.getElementsByClassName('uls')[0]
var timeout;
jz.onclick=function(){
   clearTimeout(timeout)
        xx.style.display='none'
        c_9.style.display='block'
        jz.innerHTML='正在加载......'
        timeout=setTimeout(function(){
                xx.style.display='block'
                c_9.style.display='none'
                jz.innerHTML='点击加载更多'
                lan()

            },1000)
           
       
}

function lan(){
    $.ajax({
        url:http+"/play/new",
        dataType:"json",
        data:"get",
        success:function(res){
            console.log(res)
            var str=doT.template($('#dot').text())
            var old=$('.uls').html()
            $('.uls').html(old+str(res[parseInt(Math.random()*4)]))
        }
    })
    
}
