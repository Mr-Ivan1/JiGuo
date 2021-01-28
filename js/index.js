/*
 * @Author: your name
 * @Date: 2021-01-27 21:58:13
 * @LastEditTime: 2021-01-28 22:10:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\极果\JiGuo\js\index.js
 */
var daoshi=document.getElementsByClassName('daoshi')[0]
var inputtime= +new Date('2022-1-28 21:58:00') //用户输入的时间
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
    