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

//preloader
function runPreloader() {
    const preloader = document.querySelector(".preloader-container");
    preloader.classList.add("opacity-0");
    setTimeout(function () {
        preloader.style.display = "none";
    }, 1000)
}

window.addEventListener("load", runPreloader);


// Fixed Header on Scroll
function fixedHeader() {
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
}

//tabs

//select elements to work with (all childrens of tabs links and further content )
function showTabs() {
    const tabs = document.querySelector(".latest-work__items").children;
    const tabsContent = document.querySelector(".gallery").children;

    //loop through each tab link
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", (event) => {
            event.preventDefault();
            //add active class to a clicked tab link
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove("active");
            }
            tabs[i].classList.add("active");
            const target = tabs[i].getAttribute("data-target");//data attribute for tabs

            //loop through all children of gallery
            for (let k = 0; k < tabsContent.length; k++) {
            
                if (target === tabsContent[k].getAttribute("data-id")) {
                    tabsContent[k].classList.remove("hide");
                    tabsContent[k].classList.add("show");
                } else {
                    tabsContent[k].classList.add("hide");
                    tabsContent[k].classList.remove("show");
                }

                if (target === "all") {
                    tabsContent[k].classList.remove("hide");
                    tabsContent[k].classList.add("show");
                }
            }
        });
    }
}

//open and close toggle btn on click
function openToggle() {
    //open toggle on click
    const toggleBtn = document.querySelector(".navigation__toggle-btn");
    toggleBtn.addEventListener("click", () => {
        document.querySelector(".navigation__nav").classList.toggle("show");
        document.querySelector(".navigation__icon").classList.toggle("active");
        document.querySelector("body").classList.toggle("lock");
    });

    //close toggle on click on a specific link
    const navbar = document.querySelector(".navigation__nav");
    const links = navbar.querySelectorAll(".navigation__link");

    links.forEach(link => {
        link.addEventListener("click", () => {
            document.querySelector(".navigation__nav").classList.toggle("show");
            document.querySelector(".navigation__icon").classList.toggle("active");
            document.querySelector("body").classList.remove("lock");
        });
    });

}

function lightbox() {
    const lightbox = document.querySelector(".lightbox");
    const closeBtn = document.querySelector(".lightbox__close");
    const lightboxImage = document.querySelector(".lightbox__img");
    const galleryItems = document.querySelectorAll(".gallery__img");

    //loop through each element in gallery
    galleryItems.forEach(img => {
        img.querySelector(".gallery__btn").addEventListener("click", (event) => {
            event.preventDefault();
            lightbox.classList.remove("hide");
            lightbox.classList.add("show");
            document.querySelector("body").classList.add("lock");

            //change the src of particular img 
            lightboxImage.src = img.querySelector("img").getAttribute("src");
        });
    });

    //listen for changes on click to close btn
    closeBtn.addEventListener("click", () => {
        lightbox.classList.add("hide");
        lightbox.classList.remove("show");
        document.querySelector("body").classList.remove("lock");
    });

    //close lightbox outside img
    lightbox.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target === lightboxImage)) {
            lightbox.classList.add("hide");
            lightbox.classList.remove("show");
            document.querySelector("body").classList.remove("lock");
        }
    });
};

//call functions
showTabs();
fixedHeader();
openToggle();
lightbox();
