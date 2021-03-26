$(function(){
    function subHeadSlideIn(){
        $('a').hide().slideDown(5000);
    }
    subHeadSlideIn();
    function footerSlideIn(){
        $('footer').hide().slideDown(7000);
    }
    footerSlideIn();
})

$(function headerFlash(){
    $('h1').hide().fadeIn(1500).fadeOut(1500);
    headerFlash();
})
