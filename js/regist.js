/*
 * @Author: your name
 * @Date: 2021-02-08 12:15:24
 * @LastEditTime: 2021-02-08 15:46:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\极果\JiGuo\js\regist.js
 */
$('#phone_').focus(function(){
    $(this).css('color','black')

})

var phone=/^1[3578]\d{9}$/
$('#phone_').blur(function(){
    if($(this).val()==''){
        $(this).val('手机号码不能为空！').css('color','red')
        return false
    }else if(!phone.test($(this).val())){
        $(this).val('请输出正确的手机号').css('color','red')
        return false
    }else{
        
    }
    
})

$('#imgCode').focus(function(){
    $(this).css('color','black')
})



$('#imgCode').blur(function(){
    
    var yzm=$('#imgCode').val()=='r2B7'
    if($(this).val()==''){
        $(this).val('验证码不能为空').css('color','red')
    }else if(yzm==false){
       $(this).val('验证码不正确').css('color','red')
    }else{
        
    }
})



$('#four').focus(function(){
    $(this).css('color','black')
})



$('#four').blur(function(){
    
    var yzm=/^[0-9]{4}/
    if($(this).val()==''){
        $(this).val('验证码不能为空').css('color','red')
    }else if(!yzm.test($(this).val())){
       $(this).val('验证码不正确').css('color','red')
    }else{
        
    }
})
var timer;
var num=true
$('#yzm').click(function(){
    var index=60
    if(num){
        num=false
        timer=setInterval(function(){
            index--
            $('#yzm').text(index+'秒')

            if(index<0){
                clearInterval(timer)
                $('#yzm').html('重新获取')
                num=true
            }
        },100)
    }
  
})