var swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        550: {
            slidesPerView: 1,
        },

        650: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

    }
});

//wow JS
new WOW({ mobile: false }).init();

// Fixed Header on Scroll
window.onscroll = function () {
    const scrollTop = document.documentElement.scrollTop;
    if (window.innerWidth > 768) {
        if (scrollTop > 70) {
            document.querySelector(".navigation").classList.add("sticky");
        } else {
            document.querySelector(".navigation").classList.remove("sticky");
        }
    }

}