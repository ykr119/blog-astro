if (window.matchMedia("(max-width: 599px)").matches) {
  ScrollReveal().reveal(".fade-in-delay", {
    delay: 200,
    origin: "bottom",
    distance: "50px",
  });
} else if (window.matchMedia("(max-width:1023px)").matches) {
  ScrollReveal().reveal(".fade-in-delay", {
    delay: 200,
    origin: "bottom",
    distance: "50px",
    viewFactor: 0.7,
  });
} else {
  ScrollReveal().reveal(".fade-in-delay", {
    delay: 200,
    origin: "bottom",
    distance: "50px",
    viewFactor: 0.3,
  });
}
if (window.matchMedia("(min-width: 600px)").matches) {
  ScrollReveal().reveal(".about-box01", {
    delay: 200,
    origin: "bottom",
    distance: "50px",
  });
  ScrollReveal().reveal(".about-box02", {
    delay: 300,
    origin: "bottom",
    distance: "50px",
  });
  ScrollReveal().reveal(".about-box03", {
    delay: 400,
    origin: "bottom",
    distance: "50px",
  });
  ScrollReveal().reveal(".about-box04", {
    delay: 500,
    origin: "bottom",
    distance: "50px",
  });
  ScrollReveal().reveal(".about-box05", {
    delay: 600,
    origin: "bottom",
    distance: "50px",
  });
}

gsap.to("#section-career h2", {
  backgroundPosition: "left top -500px",
  scrollTrigger: {
    trigger: "#section-career",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.to("#section-skill h2", {
  backgroundPosition: "left top -500px",
  scrollTrigger: {
    trigger: "#section-skill",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});
gsap.to("#section-favorite h2", {
  backgroundPosition: "left top -500px",
  scrollTrigger: {
    trigger: "#section-favorite",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});
gsap.to("#section-character h2", {
  backgroundPosition: "left top -500px",
  scrollTrigger: {
    trigger: "#section-character",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});
gsap.to("#section-strong-points h2", {
  backgroundPosition: "left top -500px",
  scrollTrigger: {
    trigger: "#section-strong-points",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

const swiper1 = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 32,
  speed: 6000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
  },
  breakpoints: {
    1024: {
      slidesPerView: 6,
    },
  },
});

$(".strong-points").click(function () {
  $(".strong-points.active").removeClass("active");
  $(this).addClass("active");
  $(".appear").removeClass("appear");
  const index = $(this).index();
  $(".strong-points__list").eq(index).addClass("appear");
});
const message1 = "私の長所って" + "<br>" + "なんだろう？？";
const message2 = "それはね！";
const message3 = "私の長所を" + "<br>" + "教えてください！";
const message4 = "もちろん！";
const message5 = "私の長所って？" + "<br>" + "なんでしょう";
const message6 = "例えば・・・";
const message7 = "長所を教えて！" + "<br>" + "お願い！";
const message8 = "オッケー！";
const message9 = "長所とは一体・・・" + "<br>" + "なんだろう";
const message10 = "私に任せて！";
$("#strong-points1").click(function () {
  $(".comment1").html(message1);
  $(".comment2").html(message2);
  $(".section-strong-points__backimg").attr("src", "../images/strong-points1.png");
});
$("#strong-points2").click(function () {
  $(".comment1").html(message3);
  $(".comment2").html(message4);
  $(".section-strong-points__backimg").attr("src", "../images/strong-points2.png");
});
$("#strong-points3").click(function () {
  $(".comment1").html(message5);
  $(".comment2").html(message6);
  $(".section-strong-points__backimg").attr("src", "../images/strong-points3.png");
});
$("#strong-points4").click(function () {
  $(".comment1").html(message7);
  $(".comment2").html(message8);
  $(".section-strong-points__backimg").attr("src", "../images/strong-points4.png");
});
$("#strong-points5").click(function () {
  $(".comment1").html(message9);
  $(".comment2").html(message10);
  $(".section-strong-points__backimg").attr("src", "../images/strong-points5.png");
});
$(".section-favorite__list li").click(function () {
  $(".section-favorite__page-top").addClass("check");
  $(".section-favorite__page-back").addClass("active");
  $(".section-favorite__link-list").addClass("show");
  $(".description-list.show").removeClass("show");
});
$("#favorite1").click(function () {
  $("#link-list1").toggleClass("active");
  $("#description-list1").toggleClass("show");
});
$("#favorite2").click(function () {
  $("#link-list2").toggleClass("active");
  $("#description-list2").toggleClass("show");
});
$("#favorite3").click(function () {
  $("#link-list3").toggleClass("active");
  $("#description-list3").toggleClass("show");
});
$("#top-btn").click(function () {
  $(".section-favorite__page-top").removeClass("check");
  $(".section-favorite__page-back").removeClass("active");
  $(".description-list").removeClass("show");
  $(".section-favorite__link-list").removeClass("show");
  $(".link-list").removeClass("active");
});
$(".link-list").click(function () {
  $(".link-list.active").removeClass("active");
  $(this).addClass("active");
  $(".description-list.show").removeClass("show");
  const index = $(this).index();
  $(".description-list").eq(index).addClass("show");
});
