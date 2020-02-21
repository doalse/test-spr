"use strict";

$(function() {
    $(".js-nav-bottom__btn").on("click", function() {
        $(".nav-bottom-menu").toggleClass("nav-bottom-menu_show");
    });

    $(".nav-bottom__search-ico").on("click", function() {
        $(".nav-bottom__search-cart").slideToggle("fast");
        $(".nav-bottom__input").val("").focus();
    });

    // slider configuration

    $(".js-slider-box").slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: `<button type="button" class="slick-prev">〈</button>`,
        nextArrow: `<button type="button" class="slick-next">〉</button>`,
        customPaging: function(slider, i) {
            return `<a class="slick-dot__element"></a>`;
        }
    });
});
