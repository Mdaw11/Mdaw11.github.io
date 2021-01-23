$(document).ready(function(){
    $(window).on('scroll', function(){
        var scroll = $(window).scrollTop();
        if(scroll >= 50) {
            $(".sticky").addClass("stickyadd");
        } else {
        $(".sticky").removeClass("stickyadd");
        }
    })
// This object logs strings onto the page automatically
    var typed = new Typed(".element", {
        strings: ["I'm a Software Developer", "I'm Full Stack Developer", "I'm a Web App Developer", "I'm a Mobile Developer"],
        smartBackspace: true,
        typeSpeed: 250,
        backSpeed: 200,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });

// progress bars
    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function() {
            var p = document.querySelectorAll('.progress-bar');
            p[0].setAttribute("style", "width:100%;transition:1s all");
            p[1].setAttribute("style", "width:95%;transition:1.5s all");
            p[2].setAttribute("style", "width:85%;transition:1.7s all");
            p[3].setAttribute("style", "width:99%;transition:2s all");
            p[4].setAttribute("style", "width:70%;transition:2.3s all");        
        },
        offset:'90%'
    });

    // This will filter out work
    var filterizd =$('.filter-container').filterizr({
        animationDuration: .5,
    })

    // Owl Carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1,

    });

});

// email validator

