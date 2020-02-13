"use strict";

$(function() {
    $(".nav-bottom__search-ico").on("click", function() {
        $(".mobile-search-bar").slideToggle("fast");
    });

    $(".nav-bottom__btn-ico").on("click", function() {
        $(".nav-mobile-menu").toggleClass("nav-mobile-menu_show");
    });
});
