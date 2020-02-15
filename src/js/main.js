"use strict";

$(function() {
    $(".nav-bottom__btn").on("click", function() {
        $(".nav-mobile-menu").toggleClass("nav-mobile-menu_show");
    });

    $(window).on("resize load", function() {
        if ($(window).width() < 1280) {
            $(".nav-bottom__submit").attr("data-active", "false");
        } else {
            $(".nav-bottom__submit").attr("data-active", "true");
        }
    });

    $(".nav-bottom__submit").on("click", function(e) {
        if ($(this).attr("data-active") == "false") {
            e.preventDefault();
            $(".mobile-search-bar").slideToggle("fast");
            $(".mobile-search-bar__input")
                .val("")
                .focus();
        }
    });
});
