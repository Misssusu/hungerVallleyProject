var btns = $('.btn button');
var images = $('.box img');
var index;
var p;
//给按钮添加点击事件
for(let i = 0;i < btns.length; i++) {
    $(btns[i]).on('click',(evt) =>{
        index = $(evt.currentTarget).index();
        p = index * -400;
        $(images).css('transform','translateX('+ p +'px)');
        btns.eq(index)
        .addClass('active')
        .siblings('.active')
        .removeClass('active')
    })
}
//实现自动播放
var size = $(images).length;
var n = 0;
var timerId;
function timerFun() {
    timerId = setInterval(() => {
        p = (n%size) * -400;
        btns.eq(n%size).trigger('click');
        n = n + 1;
    },1000)
}
timerFun()
//当鼠标移入的时候暂停播放
$('.box').on('mouseenter',() => {
    window.clearInterval(timerId)
})
//当鼠标移开的时候继续播放
$('.box').on('mouseleave',() => {
    timerFun()
})
