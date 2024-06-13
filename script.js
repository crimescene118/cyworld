$(function(){
    // 팝업
    $('.pp').click(function(){
        $(.pop).show()
        retern false;
    })
    $('button').click(function(){
        $('.pop').hide();
    })
    
    // 전체메뉴1
    $('nav>ul>li').mouseenter(function(){
        $('.sub').stop().slideDown();
    })
    $('nav>ul>li').mouseleave(function(){
        $('.sub').stop().slideUp();
    })
    
})