$(".nav__btn, .nav__menu-link").on("click", () => {
  $("body").toggleClass("menu-open");
  $("body").removeClass("manifest-menu-open");
});
$(".nav-manifest__menu-link").on("click", () => {
  $("body").removeClass("manifest-menu-open");
});
$(".nav-manifest__btn").on("click", () => {
  $("body").toggleClass("manifest-menu-open");
  $("body").removeClass("menu-open");
});
$("[data-scroll='toggle']").on("click", () => {
  $("body").toggleClass("stop");
});
$("[data-scroll='close']").on("click", () => {
  $("body").removeClass("stop");
});
$("[data-scroll='open']").on("click", () => {
  $("body").addClass("stop");
});

$("[nav-color='dark']").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(".nav").addClass("dark");
    },
    onEnterBack: () => {
      $(".nav").addClass("dark");
    },
  });
});
$("[nav-color='light']").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(".nav").removeClass("dark");
    },
    onEnterBack: () => {
      $(".nav").removeClass("dark");
    },
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  // attribute value checker
  function attr(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
    if (attrVal === "true" && defaultValType === "boolean") return true;
    if (attrVal === "false" && defaultValType === "boolean") return false;
    if (isNaN(attrVal) && defaultValType === "string") return attrVal;
    if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
    return defaultVal;
  }
  // pagecolor trigger
  $("[pagecolor-element]").each(function (index) {
    // elements
    let triggerEl = $(this),
      targetEl = $("body");
    // settings
    let classSetting = attr(triggerEl.attr("pagecolor-class"));
    let manifestItem = attr(triggerEl.attr("manifest-item"));
    // result
    ScrollTrigger.create({
      trigger: triggerEl,
      start: "top center",
      end: "bottom center",
      onToggle: ({ self, isActive }) => {
        if (isActive) {
          targetEl.addClass(classSetting);
        } else {
          targetEl.removeClass(classSetting);
        }
      },
    });
    ScrollTrigger.create({
      trigger: triggerEl,
      start: "top center",
      end: "bottom center",
      onToggle: ({ self, isActive }) => {
        if (isActive) {
          targetEl.addClass(manifestItem);
        } else {
          targetEl.removeClass(manifestItem);
        }
      },
    });
  });
});

const $manifest = $(".nav-manifest");
const $manifestBtn = $(".nav-manifest__wrapper-btn");
const $manifestLink = $(".nav-manifest__menu-link");
$manifestBtn.on("click", () => {
  $manifest.toggleClass("active");
});
$manifestLink.on("click", () => {
  $manifestBtn.removeClass("manifest-menu-open");
  $("body").removeClass("stop");
  $manifest.removeClass("active");
});

var a2a_config = a2a_config || {};
a2a_config.onclick = 1;
a2a_config.locale = "ru";
const modalSocial = document.querySelectorAll(".modal__social");
for (let i = 0; i < modalSocial.length; i++) {
  const modalSocialCurrent = document.querySelectorAll(".modal__social")[i];
  const modalCurrentLink = modalSocialCurrent.getAttribute("data-url");
  //	console.log(modalCurrentLink);
  a2a_config.linkurl = document.domain + "/" + modalCurrentLink;
  const modalSetCurrentLink = modalSocialCurrent.setAttribute(
    "data-a2a-url",
    a2a_config.linkurl
  );
}

const navLink = document.querySelectorAll(".nav-manifest__menu-link");
// Проходимся по всем ссылкам
for (let i = 0; i < navLink.length; i++) {
  //  console.log(navLink[i]);
  const href = navLink[i].getAttribute("href"); // Получаем атрибут 'href' чтобы ссылаться по ним
  //  console.log(href);
  navLink[i].addEventListener("click", () => {
    scrollToLink(href); // Доскраливаем до кадого элемента использую 'href' как идентификатор
  });
}
function scrollToLink(el) {
  const element = document.querySelector(el);
  element.scrollIntoView({ behavior: "auto" });
}
