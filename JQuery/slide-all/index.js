let $btns = $('.btns > div');
let $window = $('.window');
let $imagesBox = $('.images');
let current = 0;
let $images = $imagesBox.children('img')
//复制第一张和最后一张
let firstCopy = $images.eq(0).clone(true);
let lastCopy = $images.eq($images.length - 1).clone(true);
$imagesBox.append(firstCopy);
$imagesBox.prepend(lastCopy);

$btns.eq(0).on('click', function () {
    if (current == 3) {
        console.log('从最后一张回到第一张')
        $imagesBox.css('transform', 'translateX(-3500px)')
            .one('transitionend', function () {
                $imagesBox.hide()
                    .offset()
                $imagesBox.css('transform', 'translateX(-700px)')
                    .show()
            })
    } else {
        $imagesBox.css('transform', 'translateX(-700px)')
    }
    current = 0;
})
$btns.eq(1).on('click', function () {
    current = 1;
    $imagesBox.css('transform', 'translateX(-1400px)')
})
$btns.eq(2).on('click', function () {
    current = 2;
    $imagesBox.css('transform', 'translateX(-2100px)')
})
$btns.eq(3).on('click', function () {
    if (current === 0) {
        console.log('从第一张回到最后一张')
        $imagesBox.css('transform', 'translateX(0px)')
            .one('transitionend', function () {
                $imagesBox.hide()
                    .offset()
                $imagesBox.css('transform', 'translateX(-2800px)')
                    .show()
            })
    }else {
        $imagesBox.css('transform', 'translateX(-2800px)')
    }
    current = 3;
})