var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel: true
});

swiper.sliderMove = function (s, e) {
    console.log(s);
};

function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li")) {
        i.classList.remove("activeLink");
    }
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink");
    swiper.slideTo(indx, 1000, true);
}


document.addEventListener("DOMContentLoaded", function() {
    const hireMeBtn = document.getElementById('hireMeBtn');
    const contactMeBtn = document.getElementById('contactMeBtn');

    hireMeBtn.addEventListener('click', function() {
        Navigate(2); 
    });

    contactMeBtn.addEventListener('click', function() {
        Navigate(4); 
    });
});
