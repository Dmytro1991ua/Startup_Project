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

//tabs

//select elements to work with (all childrens of tabs links and further content )
function showTabs() {
    const tabs = document.querySelector(".latest-work__items").children;
    console.log(tabs);
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
            console.log(target);

            //loop through all children of gallery
            for (let k = 0; k < tabsContent.length; k++) {
                tabsContent[k].style.transform = "scale(0)";
                tabsContent[k].style.display = "none";
                if (target === tabsContent[k].getAttribute("data-id") || target === "all") {
                    tabsContent[k].style.transform = "scale(1)";
                    tabsContent[k].style.display = "block";
                }
            }
        });
    }
}

showTabs();

