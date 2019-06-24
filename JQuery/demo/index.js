var btns = $('.btn button');
var images = $('.box img');
var index;
var p;
for(let i = 0;i < btns.length; i++) {
    $(btns[i]).on('click',function(evt) {
        index = $(evt.currentTarget).index();
        console.log(index);
        console.log(i)
        p = i * -400;
        $(images).css('transform','translateX('+ p +'px)')
    })
}
