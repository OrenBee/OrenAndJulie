// AOS

//AOS ANIMATION
AOS.init();

// SCROLLREVEA
var swiper1 = new Swiper(".album-slide", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    speed: 400,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 10000,
    },
    on: {
        slideChange: function () {
            this.slides.forEach((slide, index) => {
                if (index === this.activeIndex) {
                    slide.style.filter = "blur(0px) brightness(1)";
                } else {
                    slide.style.filter = "blur(3px) brightness(0.7)";
                }
            });
        },
        slideChangeTransitionStart: function () {
            this.slides.forEach((slide, index) => {
                if (index === this.activeIndex) {
                    slide.style.filter = "blur(0px) brightness(1)";
                } else {
                    slide.style.filter = "blur(3px) brightness(0.7)";
                }
            });
        },
        slideChangeTransitionEnd: function () {
            this.slides.forEach((slide, index) => {
                if (index === this.activeIndex) {
                    slide.style.filter = "blur(0px) brightness(1)";
                } else {
                    slide.style.filter = "blur(3px) brightness(0.7)";
                }
            });
        },
    },
});

swiper1.slides.forEach((slide, index) => {
    if (index === swiper1.activeIndex) {
        slide.style.filter = "blur(0px) brightness(1)";
    } else {
        slide.style.filter = "blur(3px) brightness(0.7)";
    }
});

// FANCY BOX
Fancybox.bind("[data-fancybox]", {
});

//AUDIO
// $(".toggleAudio").on("click", function () {
//     let icon = $(this).find("i");
//     icon.toggleClass("ri-volume-mute-fill ri-volume-up-fill");
//     let audio = $("#audio")[0];
//     audio.paused ? audio.play() : audio.pause();
// });
