// slider n1
var pic = document.querySelector(".n1");
var swiper1 = document.querySelector("#p1");
var swiper2 = document.querySelector("#p2");
var swiper3 = document.querySelector("#p3");
const mainCenter = document.querySelector(".mainCenter");

swiper1.addEventListener("click", swipe1);

document.addEventListener("DOMContentLoaded", swipe1);

function removeTexts() {
    document.querySelectorAll(".sliderTexts").forEach(function (elem) {
        elem.classList.remove("open");
    });
}

function swipe1() {
    pic.style.marginLeft = "0";
    setTimeout(function () {
        removeTexts();
        pic.querySelector(".sliderTexts").classList.add("open");
    }, 1000);
}

swiper2.addEventListener("click", swipe2);


function swipe2() {
    pic.style.marginLeft = "-100vw";
    setTimeout(function () {
        removeTexts();
        document.querySelector(".topSlider>div:nth-child(2)").querySelector(".sliderTexts").classList.add("open");
    }, 1000);
}

swiper3.addEventListener("click", swipe3);

function swipe3() {
    pic.style.marginLeft = "-200vw";
    setTimeout(function () {
        removeTexts();
        document.querySelector(".topSlider>div:nth-child(3)").querySelector(".sliderTexts").classList.add("open");
    }, 1000);
}

// red background

var sw = document.querySelectorAll(".sl");
for (let i = 0; i < sw.length; i++) {
    sw[i].addEventListener("click", redBg)
}

function redBg() {
    var red = document.querySelector(".red");

    if (red && red != this) {
        red.classList.remove("red");
    }
    this.classList.add("red");

}


// top scroller
window.addEventListener("scroll", scroller);

function scroller() {
    let currScroll = document.documentElement.scrollTop;
    let mainTop = document.querySelector(".mainTop");
    let scrollBtn = document.querySelector(".TopScroller");
    let angle = document.querySelector(".fa-angle-up");
    if (currScroll >= mainTop.offsetHeight * .8) {
        scrollBtn.style.height = "40px";
        scrollBtn.style.marginTop = "10px";
        angle.style.fontSize = "27px"
    }
    if (currScroll < mainTop.offsetHeight * .8) {
        scrollBtn.style.height = "0";
        scrollBtn.style.marginTop = "0";
        angle.style.fontSize = "0";
    }
}

var scrollBtn = document.querySelector(".TopScroller");
scrollBtn.addEventListener("click", GoToTop);

function GoToTop() {
    $("body, html").animate(
        {
            scrollTop: 0
        }, 1000);
}

//running car
window.addEventListener("scroll", runningCar);

function runningCar() {
    let currScroll = document.documentElement.scrollTop;
    let mainTop = document.querySelector(".mainTop");
    if (currScroll >= (mainCenter.offsetTop - 1.5 * mainCenter.offsetHeight)
        && (!mainCenter.classList.contains("animated"))
    ) {
        $(".mainCenter").addClass("animated");
    }
    if ((currScroll > mainCenter.offsetTop + 0.8 * mainCenter.offsetHeight) ||
        (currScroll < mainTop.offsetHeight * 0.6)) {
        mainCenter.classList.remove("animated");
    }
}


// slyder360


$(document).ready(function () {
    $("#deg360").vc3dEye({

        imagePath:
            "Exports/Slyder360/", // the location where you’ve put the images.
        totalImages: 52, // the number of images you have.
        imageExtension: "png" // the extension of the images. Make sure all the images have same extension.

    });
});


// catalog
var auto_pic1 = document.querySelector(".auto1");
var auto_pic2 = document.querySelector(".auto2");
var auto_pic3 = document.querySelector(".auto3");
var auto_pic4 = document.querySelector(".auto4");
var auto_pic5 = document.querySelector(".auto5");

var autosw1 = document.querySelector(".autoSw1");
var autosw2 = document.querySelector(".autoSw2");
var autosw3 = document.querySelector(".autoSw3");
var autosw4 = document.querySelector(".autoSw4");
var autosw5 = document.querySelector(".autoSw5");


function removeAutoTexts() {
    document.querySelectorAll(".auto_text").forEach(function (elem) {
        elem.classList.remove("auto_open");
    });
    document.querySelectorAll(".auto_t").forEach(function (elem) {
        elem.classList.remove("auto_o");
    });
}

autosw1.addEventListener("click", autoSwiper1);

function autoSwiper1() {
    auto_pic1.style.marginLeft = "0";
    setTimeout(
        function () {
            removeAutoTexts();
            auto_pic1.querySelector(".auto_text").classList.add("auto_open");
            auto_pic1.querySelector(".auto_t").classList.add("auto_o");

        }, 1000)
}

// setTimeout(function () {
//     removeTexts();
//     pic.querySelector(".sliderTexts").classList.add("open");
// }, 1000);

autosw2.addEventListener("click", autoSwiper2);

function autoSwiper2() {
    auto_pic1.style.marginLeft = "-100vw";
    setTimeout(
        function () {
            removeAutoTexts();
            auto_pic2.querySelector(".auto_text").classList.add("auto_open");
            auto_pic2.querySelector(".auto_t").classList.add("auto_o");
        }, 1000)
}

autosw3.addEventListener("click", autoSwiper3);

function autoSwiper3() {
    auto_pic1.style.marginLeft = "-200vw";
    setTimeout(
        function () {
            removeAutoTexts();
            auto_pic3.querySelector(".auto_text").classList.add("auto_open");
            auto_pic3.querySelector(".auto_t").classList.add("auto_o");
        }, 1000)
}

autosw4.addEventListener("click", autoSwiper4);

function autoSwiper4() {
    auto_pic1.style.marginLeft = "-300vw";
    setTimeout(
        function () {
            removeAutoTexts();
            auto_pic4.querySelector(".auto_text").classList.add("auto_open");
            auto_pic4.querySelector(".auto_t").classList.add("auto_o");
        }, 1000)
}

autosw5.addEventListener("click", autoSwiper5);

function autoSwiper5() {
    auto_pic1.style.marginLeft = "-400vw";
    setTimeout(
        function () {
            removeAutoTexts();
            auto_pic5.querySelector(".auto_text").classList.add("auto_open");
            auto_pic5.querySelector(".auto_t").classList.add("auto_o");
        }, 1000)
}

// auto background
var asw = document.querySelectorAll(".autoSw");
for (let i = 0; i < asw.length; i++) {
    asw[i].addEventListener("click", ABG)
}

function ABG() {
    let autobg = document.querySelector(".autoBg")
    if (autobg != this) {
        autobg.classList.remove("autoBg")
    }
    this.classList.add("autoBg")
}


// video gallery
var VD = document.querySelectorAll(".VD");
for (let i = 0; i < VD.length; i++) {
    VD[i].addEventListener("mouseover", function () {
            this.querySelector("video").play()
        }
    );
    VD[i].addEventListener("mouseout", function () {
        this.querySelector("video").pause()
    })
}


// init Isotope
var $grid = $('.UDmain').isotope({
    // options
    itemSelector: '.UdMainItem',
});
// filter items on button click
$('.UDul').on('click', 'li', function () {
    $(".UDbutton").addClass("show");

    var filterValue = $(this).attr('data-filter');
    if (filterValue === "*") {
        $(".UDbutton").removeClass("show");
    }
    $(".UDul li").removeClass("active");
    $(this).addClass("active");

    $grid.isotope({filter: filterValue});
});


// Numbers
window.addEventListener("scroll", num);

function num() {
    let currScroll = document.documentElement.scrollTop;
    let number = document.querySelector(".numbers");
    let Vg = document.querySelector(".VideoGallery");
    if (currScroll >= Vg.offsetTop + number.offsetHeight) {
        $('.counter').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({countNum: $this.text()}).animate({
                    countNum: countTo
                },

                {

                    duration: 1000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
        });
    }
}

// search
$(function () {
    $('select').searchableSelect();
});




