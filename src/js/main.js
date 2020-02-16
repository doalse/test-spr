"use strict";

$(function() {
    $(".js-nav-bottom__btn").on("click", function() {
        $(".nav-mobile-menu").toggleClass("nav-mobile-menu_show");
    });

    $(window).on("resize load", function() {
        if ($(window).width() < 1280) {
            $(".js-nav-bottom__submit").attr("data-active", "false");
        } else {
            $(".js-nav-bottom__submit").attr("data-active", "true");
        }
    });

    $(".js-nav-bottom__submit").on("click", function(e) {
        if ($(this).attr("data-active") == "false") {
            e.preventDefault();
            $(".mobile-search-bar").slideToggle("fast");
            $(".mobile-search-bar__input")
                .val("")
                .focus();
        }
    });

    // slider configuration

    $(".js-slider-box").slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        customPaging: function(slider, i) {
            return `<a class="slick-dot__element"></a>`;
        }
    });

    $(".slick-prev").text("〈");
    $(".slick-next").text("〉");
});
