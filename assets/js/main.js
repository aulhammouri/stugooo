$(function(){



    //nav bar
$('.navbar-nav li a').click(function(event){
    event.preventDefault();
    console.log($('#' + $(this).data('scroll')).offset().top)
    $('html, body').animate({
        scrollTop: $('#' + $(this).data('scroll')).offset().top
    }, 1000)
    $('#' + $(this).data('scroll')).fadeOut(100);

    $('#' + $(this).data('scroll')).fadeIn(3000);
})


})

//to top
 //Check to see if the window is top if not then display button
 $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});

//Click event to scroll to top
$('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});





// said.html page set all card with same hight
if(window.innerWidth > 767){
    let said1h = document.getElementsByClassName('said')[0].clientHeight
    let said2h = document.getElementsByClassName('said')[1].clientHeight
    let said3h = document.getElementsByClassName('said')[2].clientHeight
    for(i=0; i<3; i++){
        var elesaid = document.getElementsByClassName('said')[i];
        var elewhowsaid = document.getElementsByClassName('who-said')[i];
        elewhowsaid.style.paddingTop = Math.max(said1h, said2h, said3h) - elesaid.clientHeight+'px'
    
    }
}

// said.html page set all card with same hight
