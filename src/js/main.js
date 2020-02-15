"use strict";

$(function() {
    $(".nav-bottom__search-ico").on("click", function() {
        $(".mobile-search-bar").slideToggle("fast");
        $(".mobile-search-bar__input")
            .val("")
            .focus();
    });

    $(".nav-bottom__btn").on("click", function() {
        $(".nav-mobile-menu").toggleClass("nav-mobile-menu_show");
    });
});
