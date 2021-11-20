document.addEventListener( 'DOMContentLoaded', () => {
    var splide = new Splide( '.slider_wrapper', {
        classes: {
            arrows: 'splide__arrows',
            prev  : 'splide__arrow splide__arrow--prev',
            next  : 'splide__arrow splide__arrow--next',
        },
        type    : 'loop',
        perPage : 1,
        autoplay: true,
    });
    splide.mount();

let buttonTG = document.querySelector('.telegram_button'),
    hamburgerBtn = document.querySelector('.hamburger'),
    hamburgerMenu = document.querySelector('.hamburger_menu'),
    arrowUp = document.querySelector('.to_up'),
    telegram = document.querySelector('.telegram'),
    links = document.querySelectorAll('.a');

hamburgerBtn.addEventListener('click',()=>{
    hamburgerBtn.classList.toggle('hamburger_active');
    hamburgerMenu.classList.toggle('hamburger_menu_active');
});

links.forEach(item =>{
    item.addEventListener('click', ()=>{
        hamburgerBtn.classList.toggle('hamburger_active');
        hamburgerMenu.classList.toggle('hamburger_menu_active');
    });
});

setInterval(function(){
    if(window.pageYOffset >= 1700){
        arrowUp.animate({'opacity':'1'},400);
    } else{
        arrowUp.animate({'opacity':'0'},400);
    }
},10);


var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


telegram.addEventListener('click',()=>{
    window.open('https://t.me/sashatokhin');
    
});

buttonTG.addEventListener('click',() =>{
    window.open('https://t.me/mayakowskiybot');

});


// ("a[href^='#header']")
// ("a[href^='#biography']")
// ("a[href^='#photos']")
// ("a[href^='#talk']")
// ("a[href^='#last']")
// ("a[href^='#creativity']")


});
