/*
 * @Author: your name
 * @Date: 2021-02-08 12:15:24
 * @LastEditTime: 2021-02-20 11:02:35
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


/* 用户名的验证，2-4位纯汉字 */
$('#username').on('focus', function () {
    $(this).val('');
    $(this).css('color', 'black');
    
})
$('#username').on('blur',function(){
    // console.log(99);
  
  
    if($(this).val()==''){
        $(this).val('用户名不能为空！');
        $(this).css('color', 'red');
        $(this)[0].bool = false;
      }
    else if($(this).val().search(/^[a-z]{2,6}$/) == -1){
        $(this).val('用户名错误！2-4个汉字');
        $(this).css('color', 'red');
        $(this)[0].bool = false;
      }else{
        $(this)[0].bool = true;
      }
    //   console.log($(this)[0].bool)
});

/* 验证密码 不能包含空格、回车、换行、中文字符，其他都可以，长度6到16位 */
$('#password_').on('focus',function(){
    $(this).val('');
    $(this).css('color', 'black');
});
var pass=$('#password_').val().search(/^[^\s\u4e00-\u9fa5]{6,16}$/);
// console.log(pass);
$('#password_').on('blur',function(){
   
    if($(this).val()==''){
        $(this).val('');
        alert('密码不能为空！');
        $(this)[0].bool = false;
      }
   else if(pass!=-1){
        $(this).val('');
        alert('6-16位,不含有汉字，空格等特殊字符');
        $(this)[0].bool = false;
    }else{
        $(this)[0].bool = true;
    }
    // console.log($(this)[0].bool)
});

/* 验证密码是否一致 */
$('#re_password').on('focus',function(){
    $(this).val('');
    $(this).css('color', 'black');
});
$('#re_password').on('blur',function(){
 
    if($('#re_password').val()!=$('#password_').val()){
        $(this).val('');
        alert('两次密码不一致！'); 
        $(this)[0].bool = false;
    }else{
        $(this)[0].bool = true;
    }
    // console.log($(this)[0].bool)
});
// rgb(255, 0, 0)
$('#reg').on('click',function(){
    var ajax_bool =true;
    $('.ipts input').each(function(){
        var bol = $(this)[0].bool;
        if (bol==false || $(this).val()==''){
            alert('请完成合法输入！')
            ajax_bool = false;
            return false;
        }
    });
    var phone_=$('#phone_').val();
    var pass_=$('#password_').val();
    var username_=$('#username').val();
    if(ajax_bool){
        $.ajax({
            url:http+'/users/register',
            type:'post',
            data:{
                username:username_,
                phone:phone_,
                password:pass_,
                code:'r2B7'
            },
            success:function (json) {
                alert(json.msg);
            }
        })
    }

});