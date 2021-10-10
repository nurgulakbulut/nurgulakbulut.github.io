//navbar düzenleme:

$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 800) {
            $('.navbar').addClass("sticky");

        }else{
            $('.navbar').removeClass("sticky");

        }
    });
});

/* IE/Safari Scroll Smoothness */

$('.navbar a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();
        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 300);
    }
})



//typed animasyonu:

var typed = new Typed(".typing", {

    strings: ["Nurgül Akbulut"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});

