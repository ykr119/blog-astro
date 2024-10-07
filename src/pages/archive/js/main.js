// フェードイン
ScrollReveal().reveal(".fadein-box01", {
  delay: 200,
  origin: "bottom",
  distance: "50px",
});
ScrollReveal().reveal(".fadein-box02", {
  delay: 300,
  origin: "bottom",
  distance: "50px",
});
ScrollReveal().reveal(".fadein-box03", {
  delay: 400,
  origin: "bottom",
  distance: "50px",
});
ScrollReveal().reveal(".fadein-box04", {
  delay: 500,
  origin: "bottom",
  distance: "50px",
});
ScrollReveal().reveal(".fadein-box05", {
  delay: 600,
  origin: "bottom",
  distance: "50px",
});
ScrollReveal().reveal(".fadein-box06", {
  delay: 700,
  origin: "bottom",
  distance: "50px",
});

// ハンバーガーメニュー
const menu = document.getElementById("menu");
const MenuContainer = document.querySelector(".nav-list");
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  MenuContainer.classList.toggle("active");
});
document.querySelectorAll(".nav-list li a").forEach(function (Anchor) {
  Anchor.addEventListener("click", function () {
    menu.classList.remove("active");
    MenuContainer.classList.remove("active");
  });
});

// 横スクロール
const listWrapperEl = document.querySelector(".side-scroll-list-wrapper");
const listEl = document.querySelector(".side-scroll-list");
gsap.to(listEl, {
  x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".side-scroll",
    start: "top top",
    end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
  },
});
gsap.to(listEl, {
  scrollTrigger: {
    trigger: ".side-scroll",
    start: "top top",
    end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
    toggleClass: { targets: ".side-scroll", className: "color" },
  },
});

// マウスストーカー
const stalker = document.getElementById("cursor");
const HoverArea = document.querySelector(".hover-area");
document.addEventListener("mousemove", function (e) {
  stalker.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px)";
});
HoverArea.addEventListener("mouseover", function () {
  stalker.style.visibility = "visible";
});
HoverArea.addEventListener("mouseleave", function () {
  stalker.style.visibility = "hidden";
});

// hover解除
var touch =
  "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

if (touch) {
  try {
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(":hover")) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}
