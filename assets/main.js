import { $ } from "jquery"

$(document).ready(function() {
  $("body").on("click", ".navbar-burger", function() {
    var activeClass = "is-active"
    var bodyActiveMenuClass = "has-menu-active"
    var btnMenu = $(this)
    var menuItems = $(".navbar-menu")
    var body = $("body")
    if ($(this).hasClass(activeClass)) {
      body.removeClass(bodyActiveMenuClass)
      btnMenu.removeClass(activeClass)
      menuItems.removeClass(activeClass)
    } else {
      body.addClass(bodyActiveMenuClass)
      btnMenu.addClass(activeClass)
      menuItems.addClass(activeClass)
    }
  })
})
