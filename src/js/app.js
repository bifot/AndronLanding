var first = document.querySelector(".first");
var second = document.querySelector(".second");
var third = document.querySelector(".third");

var menu = document.querySelector(".menu");
var menuList = document.querySelectorAll(".menu-list");
var menuItemLinks = document.querySelectorAll(".menu-list__link");
var menuItemLinkRandom = document.querySelector(".menu-list__link_random");
var menuItemLinkLogos = document.querySelector(".menu-list__link_logos");
var menuItemLinkLandings = document.querySelector(".menu-list__link_landings");
var menuItemLinkIllustrations = document.querySelector(".menu-list__link_illustrations");
var menuItemLinkSimhoko = document.querySelector(".menu-list__link_simhoko");
var menuItemLinkNaarolman = document.querySelector(".menu-list__link_naarolman");
var menuItemLinkAnimation = document.querySelector(".menu-list__link_animation");
var menuItemLinkAdd = document.querySelector(".menu-list__link_add");
var menuItemLinkMishanya = document.querySelector(".menu-list__link_mishanya");
var menuItemLinkAndron = document.querySelector(".menu-list__link_andron");
var menuItemLinkSemin = document.querySelector(".menu-list__link_semin");

var categoryContainer = document.querySelectorAll(".category-container");
var categoryContainerIllustrations = document.querySelector(".category-container_illustrations");
var categoryContainerAnimation = document.querySelector(".category-container_animation");
var categoryItem = document.querySelectorAll(".category-item");
var categoryItemIllustrations = document.querySelectorAll(".category-item_illustrations");
var categoryItemAnimation = document.querySelectorAll(".category-item_animation");
var categoryItemLink = document.querySelectorAll(".category-item_link");

var portfolioItem = document.querySelectorAll(".portfolio-item");
var portfolioItemIllustrations = document.querySelectorAll(".portfolio-item_illustrations");
var portfolioItemAnimation = document.querySelectorAll(".portfolio-item_animation");

var sidebar = document.querySelector(".sidebar");
var icon = document.querySelector(".icon");

var navbar = document.querySelector(".navbar");
var navbarList = document.querySelector(".navbar-list");
var navbarListItem = document.querySelectorAll(".navbar-list__item");

var links = document.querySelectorAll(".link");

function fadeOut(el) {
  el.style.opacity = 1;

  (function fade() {
    (el.style.opacity -= .1) < 0 ? el.style.display = "none" : requestAnimationFrame(fade);
  })();
}

function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);

    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

function showFirstPartMenu(item) {
  for (var i = 0; i < menuList.length; i++) { 
    menuList[i].style.display = "none";
  }

  menu.style.display = "block";
  menuList[item].style.display = "block";

  second.style.display = "none";
  third.style.display = "none";
}

function showSecondPartMenu(item) {
  for (var i = 0, j = categoryContainer.length; i < j; i++) { 
    categoryContainer[i].style.display = "none";
  }

  second.style.display = "block";
  item.style.display = "block";
}

function showThirdPartMenu(category, item) {
  for (var i = 0, j = portfolioItem.length; i < j; i++) {
    portfolioItem[i].style.display = "none";
  }

  fadeIn(third);
  fadeIn(category[item]);
}

icon.addEventListener("click", function() {
  if (navbar.style.display == "block") {
    this.style.transform = "rotate(0deg)";
    this.style.margin = "0";

    sidebar.style.height = "95px";

    navbar.style.display = "none";
    navbarList.style.display = "none";

    menu.style.display = "none";

    second.style.display = "none";
    third.style.display = "none";    
  } else {
    this.style.transform = "rotate(90deg)";
    this.style.margin = "9px 0 0 -6px";

    sidebar.style.height = "100%";

    navbar.style.display = "block";
    navbarList.style.display = "block";
  }
});

// First Part Menu

$(navbarListItem).on("click", function() {
  showFirstPartMenu($(this).index());
});

// Second Part Menu

$(menuItemLinkIllustrations).on("click", function() {
  showSecondPartMenu(categoryContainerIllustrations);
});

$(menuItemLinkAnimation).on("click", function() {
  showSecondPartMenu(categoryContainerAnimation);
});

// Third Part Menu

$(categoryItemIllustrations).on("click", function() {
  showThirdPartMenu(portfolioItemIllustrations, $(this).index());
});

$(categoryItemAnimation).on("click", function() {
  showThirdPartMenu(portfolioItemAnimation, $(this).index());
});