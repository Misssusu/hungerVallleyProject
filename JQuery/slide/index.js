$('.box img:nth-child(1)').addClass('current');
$('.box img:nth-child(2)').addClass('enter');
$('.box img:nth-child(3)').addClass('enter');
setTimeout(() =>{
    $('.box img:nth-child(1)').removeClass('current').addClass('leave')
    .one('transitionend',(evt) => {
        $(evt.currentTarget).removeClass('leave').addClass('enter');
    })
    $('.box img:nth-child(2)').removeClass('enter').addClass('current');
},3000)
setTimeout(() =>{
    $('.box img:nth-child(2)').removeClass('current').addClass('leave')
    .one('transitionend',(evt) => {
        $(evt.currentTarget).removeClass('leave').addClass('enter');
    })
    $('.box img:nth-child(3)').removeClass('enter').addClass('current');
},6000)
setTimeout(() =>{
    $('.box img:nth-child(3)').removeClass('current').addClass('leave')
    .one('transitionend',(evt) => {
        $(evt.currentTarget).removeClass('leave').addClass('enter');
    })
    $('.box img:nth-child(1)').removeClass('enter').addClass('current');
},9000)
setTimeout(() =>{
    $('.box img:nth-child(1)').removeClass('current').addClass('leave')
    .one('transitionend',(evt) => {
        $(evt.currentTarget).removeClass('leave').addClass('enter');
    })
    $('.box img:nth-child(2)').removeClass('enter').addClass('current');
},12000)