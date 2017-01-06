var sidebar = document.querySelector(".sidebar");
var sidebarMenu = document.querySelector(".menu_nav");

var buttonMenu = document.querySelector(".linkToNav");

var linkDesign = document.querySelector(".link_design");
var linkMusic = document.querySelector(".link_music");
var linkVideo = document.querySelector(".link_video");
var linkLinks = document.querySelector(".link_links");
var linkChat = document.querySelector(".link_chat");

var firstPart = document.querySelector(".first_part");
var secondPart = document.querySelector(".second_part");
var thirdPart = document.querySelector(".third_part");

var secondPartTitle = document.querySelector(".title_second_part");
var thirdPartTitle = document.querySelector(".title_third_part");

var anyItem = document.getElementsByClassName("menu_item");
var anyLinks = document.getElementsByClassName("link");

var itemDesign = document.querySelector(".item_design");
var itemMusic = document.querySelector(".item_music");
var itemVideo = document.querySelector(".item_video");
var itemLinks = document.querySelector(".item_links");
var itemChat = document.querySelector(".item_chat");

var itemLogosContainer = document.querySelector(".portfolio_previews");
var itemLogosContainerScrollBar = document.querySelector(".container__portfolio__previews");

var itemLogosMore = document.getElementsByClassName("container__portfolio__item__portfolio");

var linkIllustrations = document.querySelector(".link__illustrations");
var linkIllustrationsMore = document.getElementsByClassName("container__portfolio__previews__category__illustrations__item__link");
var itemIllustrationsMore = document.getElementsByClassName("container__portfolio__item__illustrations");

// Animation

var linkAnimation = document.querySelector(".link__animation");
var linkAnimationMore = document.getElementsByClassName("container__portfolio__previews__animation__item__link");
var itemAnimationMore = document.getElementsByClassName("container__portfolio__item__animation");

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

buttonMenu.onclick = function() {
  if (sidebarMenu.style.display == "block") {
    sidebar.style.height = "9%";

    this.style.transform = "rotate(0deg)";
    this.style.margin = "0";

    fadeOut(sidebarMenu);

    for (var i = 0; i < anyItem.length; i++) {
      anyItem[i].style.display = "none";
    }

    fadeOut(firstPart);
    fadeOut(secondPart);
    fadeOut(thirdPart);
  } else {
    sidebar.style.height = "100%";

    this.style.transform = "rotate(90deg)";
    this.style.margin = "9px 0 0 -6px";

    fadeIn(sidebarMenu);
  }
};

linkDesign.onclick = function() {
  showFirstMenu(itemDesign, linkDesign);
};

linkMusic.onclick = function() {
  showFirstMenu(itemMusic, linkMusic);
};

linkVideo.onclick = function() {
  showFirstMenu(itemVideo, linkVideo);
};

linkLinks.onclick = function() {
  showFirstMenu(itemLinks, linkLinks);
};

linkChat.onclick = function() {
  showFirstMenu(itemChat, linkChat);
};

// First level menu

linkIllustrations.onclick = function() {
  showSecondPart();
};

linkAnimation.onclick = function() {
  showSecondPart();
};

// More portfolio menu

linkIllustrationsMore[0].onclick = function() {
  showMorePortfolio(itemIllustrationsMore, 0);
};

linkIllustrationsMore[1].onclick = function() {
  showMorePortfolio(itemIllustrationsMore, 1);
};

linkIllustrationsMore[2].onclick = function() {
  showMorePortfolio(itemIllustrationsMore, 2);
};

linkIllustrationsMore[3].onclick = function() {
  showMorePortfolio(itemIllustrationsMore, 3);
};

linkIllustrationsMore[4].onclick = function() {
  showMorePortfolio(itemIllustrationsMore, 4);
};

linkIllustrationsMore[5].onclick = function() {
  showMorePortfolio(itemIllustrationsMore, 5);
};

linkIllustrationsMore[6].onclick = function() {
  showMorePortfolio(itemIllustrationsMore, 6);
};

linkIllustrationsMore[7].onclick = function() {
  showMorePortfolio(itemIllustrationsMore, 7);
};

linkIllustrationsMore[8].onclick = function() {
  showMorePortfolio(itemIllustrationsMore, 8);
};

linkIllustrationsMore[9].onclick = function() {
  showMorePortfolio(itemIllustrationsMore, 9);
};

linkIllustrationsMore[10].onclick = function() {
  showMorePortfolio(itemIllustrationsMore, 10);
};

linkIllustrationsMore[11].onclick = function() {
  showMorePortfolio(itemIllustrationsMore, 11);
};

linkIllustrationsMore[12].onclick = function() {
  showMorePortfolio(itemIllustrationsMore, 12);
};

linkIllustrationsMore[13].onclick = function() {
  showMorePortfolio(itemIllustrationsMore, 13);
};

linkIllustrationsMore[14].onclick = function() {
  showMorePortfolio(itemIllustrationsMore, 14);
};

// Function

function showFirstMenu(item, link) {
  for (var i = 0; i < anyItem.length; i++) anyItem[i].style.display = "none";

  for (var i = 0; i < anyLinks.length; i++) anyLinks[i].style.color = "#c5c5c5";

  fadeOut(secondPart);
  fadeOut(thirdPart);
  fadeIn(firstPart);
  fadeIn(item);

  link.style.color = "#fff882";
}

function showSecondPart() {
  fadeIn(secondPart);

  itemLogosContainer.style.display = "block";

  this.style.color = "#fff882";
}

function showMorePortfolio(item, number) {
  for (var i = 0; i < item.length; i++)
    item[i].style.display = "none";

  fadeIn(thirdPart);
  fadeIn(item[number]);
}

var e = document.querySelector(".promo");

setTimeout(function() {
  fadeOut(e);
}, 2000);
