var headerFirstMenu = document.querySelector(".header__first__menu");
var headerFirstMenuItems = document.querySelectorAll(".header__first__menu__item");
var headerFirstMenuItemLink = document.querySelectorAll(".header__first__menu__item__link");
var headerFirstMenuItemLinkRandom = document.querySelector(".header__first__menu__item__link__random");
var headerFirstMenuItemLinkLogos = document.querySelector(".header__first__menu__item__link__logos");
var headerFirstMenuItemLinkLandings = document.querySelector(".header__first__menu__item__link__landings");
var headerFirstMenuItemLinkIllustrations = document.querySelector(".header__first__menu__item__link__illustrations");
var headerFirstMenuItemLinkSimhoko = document.querySelector(".header__first__menu__item__link__simhoko");
var headerFirstMenuItemLinkNaarOlman = document.querySelector(".header__first__menu__item__link__naarolman");
var headerFirstMenuItemLinkAnimation = document.querySelector(".header__first__menu__item__link__animation");
var headerFirstMenuItemLinkAdd = document.querySelector(".header__first__menu__item__link__add");
var headerFirstMenuItemLinkMishanya = document.querySelector(".header__first__menu__item__link__mishanya");
var headerFirstMenuItemLinkAndron = document.querySelector(".header__first__menu__item__link_andron");
var headerFirstMenuItemLinkSemin = document.querySelector(".header__first__menu__item__link__semin");

var headerSecond = document.querySelector(".header__second");
var headerSecondPreviewsCategory = document.querySelectorAll(".header__second__previews__category");
var headerSecondPreviewsCategoryIllustrations = document.querySelector(".header__second__previews__category__illustrations");
var headerSecondPreviewsCategoryAnimation = document.querySelector(".header__second__previews__category__animation");
var headerSecondPreviewsCategoryItem = document.querySelectorAll(".header__second__previews__category__item");
var headerSecondPreviewsCategoryItemsIllustrations = document.querySelectorAll(".header__second__previews__category__item__illustrations");
var headerSecondPreviewsCategoryItemsAnimation = document.querySelectorAll(".header__second__previews__category__item__animation");
var headerSecondPreviewsCategoryItemLink = document.querySelectorAll(".header__second__previews__category__item__link");
var headerSecondPreviewsCategories = document.querySelectorAll(".header__second__previews__category");

var headerThird = document.querySelector(".header__third");
var headerThirdPortfolioContainerItem = document.querySelectorAll(".header__third__portfolio__container__item");
var headerThirdPortfolioIllustrationsItem = document.querySelectorAll(".header__third__portfolio__illustrations__item");
var headerThirdPortfolioAnimationItem = document.querySelectorAll(".header__third__portfolio__animation__item");

var sidebar = document.querySelector(".sidebar");
var sidebarIcon = document.querySelector(".sidebar__icon");
var sidebarNav = document.querySelector(".sidebar__nav");
var sidebarNavList = document.querySelector(".sidebar__nav__list");
var sidebarNavListItem = document.querySelectorAll(".sidebar__nav__list__item");
var sidebarNavListItemLink = document.querySelectorAll(".sidebar__nav__list__item__link");

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
  for (var i = 0; i < headerFirstMenuItems.length; i++) { 
    headerFirstMenuItems[i].style.display = "none";
  }

  headerFirstMenu.style.display = "block";
  headerFirstMenuItems[item].style.display = "block";

  headerSecond.style.display = "none";
  headerThird.style.display = "none";
}

function showSecondPartMenu(item) {
  for (var i = 0, j = headerSecondPreviewsCategories.length; i < j; i++) { 
    headerSecondPreviewsCategories[i].style.display = "none";
  }

  headerSecond.style.display = "block";
  item.style.display = "block";
}

function showThirdPartMenu(category, item) {
  for (var i = 0, j = headerThirdPortfolioContainerItem.length; i < j; i++) {
    headerThirdPortfolioContainerItem[i].style.display = "none";
  }

  fadeIn(headerThird);
  fadeIn(category[item]);
}

sidebarIcon.addEventListener("click", function() {
  if (sidebarNav.style.display == "block") {
    this.style.transform = "rotate(0deg)";
    this.style.margin = "0";

    sidebar.style.height = "95px";
    sidebarNav.style.display = "none";
    sidebarNavList.style.display = "none";

    headerFirstMenu.style.display = "none";
    headerSecond.style.display = "none";
    headerThird.style.display = "none";    
  } else {
    this.style.transform = "rotate(90deg)";
    this.style.margin = "9px 0 0 -6px";

    sidebar.style.height = "100%";
    sidebarNav.style.display = "block";
    sidebarNavList.style.display = "block";
  }
});

// First Part Menu

$(sidebarNavListItem).on("click", function() {
  showFirstPartMenu($(this).index());
});

// Second Part Menu

$(headerFirstMenuItemLinkIllustrations).on("click", function() {
  showSecondPartMenu(headerSecondPreviewsCategoryIllustrations);
});

$(headerFirstMenuItemLinkAnimation).on("click", function() {
  showSecondPartMenu(headerSecondPreviewsCategoryAnimation);
});

// Third Part Menu

$(headerSecondPreviewsCategoryItemsIllustrations).on("click", function() {
  showThirdPartMenu(headerThirdPortfolioIllustrationsItem, $(this).index());
});

$(headerSecondPreviewsCategoryItemsAnimation).on("click", function() {
  showThirdPartMenu(headerThirdPortfolioAnimationItem, $(this).index());
});