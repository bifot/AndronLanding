var first = document.querySelector(".first");
var second = document.querySelector(".second");
var third = document.querySelector(".third");

var menu = document.querySelector(".menu");
var menuList = document.querySelectorAll(".menu__list");
var menuLink = document.querySelectorAll(".menu__link");
var menuLinkRandom = document.querySelector(".menu__link--random");
var menuLinkLogos = document.querySelector(".menu__link--logos");
var menuLinkLandings = document.querySelector(".menu__link--landings");
var menuLinkIllustrations = document.querySelector(".menu__link--illustrations");
var menuLinkSimhoko = document.querySelector(".menu__link--simhoko");
var menuLinkNaarolman = document.querySelector(".menu__link--naarolman");
var menuLinkAnimation = document.querySelector(".menu__link--animation");
var menuLinkAdd = document.querySelector(".menu__link--add");
var menuLinkMishanya = document.querySelector(".menu__link--mishanya");
var menuLinkAndron = document.querySelector(".menu__link--andron");
var menuLinkSemin = document.querySelector(".menu__link--semin");

var portfolioContainer = document.querySelectorAll(".portfolio__container");
var portfolioContainerIllustrations = document.querySelector(".portfolio__container--illustrations");
var portfolioContainerAnimation = document.querySelector(".portfolio__container--animation");
var portfolioItem = document.querySelectorAll(".portfolio__item");
var portfolioItemIllustrations = document.querySelectorAll(".portfolio__item--illustrations");
var portfolioItemAnimation = document.querySelectorAll(".portfolio__item--animation");

var previewsLink = document.querySelectorAll(".previews__link");
var previewsContainer = document.querySelectorAll(".previews__container");
var previewsContainerIllustrations = document.querySelector(".previews__container--illustrations");
var previewsContainerAnimation = document.querySelector(".previews__container--animation");
var previewsItem = document.querySelectorAll(".previews__item");
var previewsItemIllustrations = document.querySelectorAll(".previews__item--illustrations");
var previewsItemAnimation = document.querySelectorAll(".previews__item--animation");

var sidebar = document.querySelector(".sidebar");
var icon = document.querySelector(".icon");

var navbar = document.querySelector(".navbar");
var navbarList = document.querySelector(".navbar__list");
var navbarItem = document.querySelectorAll(".navbar__item");

var link = document.querySelectorAll(".link");

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
  for (var i = 0, j = menuList.length; i < j; i++) { 
    menuList[i].style.display = "none";
  }

  fadeIn(menu);
  fadeIn(menuList[item]);

  second.style.display = "none";
  third.style.display = "none";
}

function showSecondPartMenu(item) {
  for (var i = 0, j = previewsContainer.length; i < j; i++) { 
    previewsContainer[i].style.display = "none";
  }

  second.style.display = "block";
  item.style.display = "block";
}

function showThirdPartMenu(container, category, item) {
  for (var i = 0, j = portfolioItem.length; i < j; i++) {
    portfolioItem[i].style.display = "none";
  }

  fadeIn(third);
  fadeIn(container);
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

$(navbarItem).on("click", function() {
  showFirstPartMenu($(this).index());
});

// Second Part Menu

$(menuLinkIllustrations).on("click", function() {
  showSecondPartMenu(previewsContainerIllustrations);
});

$(menuLinkAnimation).on("click", function() {
  showSecondPartMenu(previewsContainerAnimation);
});

// Third Part Menu

$(previewsItemIllustrations).on("click", function() {
  showThirdPartMenu(portfolioContainerIllustrations, portfolioItemIllustrations, $(this).index());
});

$(previewsItemAnimation).on("click", function() {
  showThirdPartMenu(portfolioContainerAnimation, portfolioItemAnimation, $(this).index());
});