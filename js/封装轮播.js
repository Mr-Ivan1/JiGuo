/*
 * @Author: your name
 * @Date: 2021-01-26 21:35:18
 * @LastEditTime: 2021-01-26 21:47:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\JS练习\定时器的应用\封装函数.js
 */
function move(obj,attr,target,speed,callback){
    clearInterval(obj.timer);
    var current=parseInt(getStyle(obj,attr));
    if(current>target){
        speed=-speed
    }

    obj.timer=setInterval(function(){
        var oldvalue=parseInt(getStyle(obj,attr));
        var newvalue=oldvalue+speed
        if(speed<0&&newvalue<target ||speed>0&&newvalue>target){
            newvalue=target
        }
        obj.style[attr]=newvalue+'px';
        if(newvalue==target){
            clearInterval(obj.timer);
            callback&&callback()
        }
    },30);
}

function getStyle(obj,name){
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[name]
    }else{
        return obj.currentStyle[name]
    }
}