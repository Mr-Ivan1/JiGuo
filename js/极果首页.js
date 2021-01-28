var inner=document.getElementsByClassName('inner')[0];
var imgs=document.getElementsByTagName('ul');
var lis=document.getElementsByTagName('li');
var timer=null;
var timer2=null;
var index=0;

function autoMove(){
    timer = setInterval(function(){
        index++;
        clearInterval(timer2);
        if(index>=imgs.length) index = 0;
        var step=0;
        var maxstep=100;

        var start=inner.scrollLeft;
        var end=imgs[0].offsetWidth*index;

        var everystep = (end - start) / maxstep;
        timer2 = setInterval(function(){
            step++;
            if(step>=maxstep){
                step=0;
                clearInterval(timer2);
            }
            start+=everystep;
            inner.scrollLeft = start;
        },10);

        for(var m=0;m<imgs.length;m++){
            lis[m].className='';
        }
        lis[index].className='active';
    },1500);
}
autoMove();




function movedome() {
    var left = 0; //上边距的偏移量
    var stop = false; //动画开始
    setInterval(function() {
        //鼠标放上停止
        if (stop == true) {
            return;
        }
        $(".center_nei").children(".center_bottom").first().animate({ "margin-left": left -= 255 }, 0, function() {
            if (!$(this).is("animated")) {
                if (-left > $(this).height()) {
                    $(this).css("margin-left", "0px").appendTo($(".center_nei"));
                    left = 0;
                }
            }
        });
    }, 500);
    $(".center_nei").hover(function() {
        $(this).css("cursor", "pointer");
        stop = true; //停止动画
    }, function() {
        stop = false; //开始动画
    });
}
movedome()
$('.lasst').on('click', function() {
    $.ajax({
        url: "path:/guid/new",
        success(res) {
            var innert = doT.template($('#xuan').text());
            $('#uls').html(innert(res))
            console.log(res)
        }
    })
})