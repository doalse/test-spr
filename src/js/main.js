"use strict";

$(function() {
    $(".js-nav-bottom__btn").on("click", function() {
        $(".nav-bottom-menu").toggleClass("nav-bottom-menu_show");
    });

    $(".nav-bottom__search-ico").on("click", function() {
        $(".nav-bottom__search-cart").slideToggle("fast");
        $(".nav-bottom__input").val("").focus();
    });
});
