// hover時に画像切り替え
const HoverTarget1 = document.getElementById("hover-target1");
const HoverTarget2 = document.getElementById("hover-target2");
const HoverTarget3 = document.getElementById("hover-target3");
const HoverTarget4 = document.getElementById("hover-target4");
const HoverTarget5 = document.getElementById("hover-target5");
const HoverTarget6 = document.getElementById("hover-target6");
const HoverImg = document.getElementById("hover-img");
HoverTarget1.addEventListener("mouseover", function () {
  HoverImg.style.backgroundImage = "url('../images/list-back1.png')";
});
HoverTarget2.addEventListener("mouseover", function () {
  HoverImg.style.backgroundImage = "url('../images/list-back2.png')";
});
HoverTarget3.addEventListener("mouseover", function () {
  HoverImg.style.backgroundImage = "url('../images/list-back3.png')";
});
HoverTarget4.addEventListener("mouseover", function () {
  HoverImg.style.backgroundImage = "url('../images/list-back4.png')";
});
HoverTarget5.addEventListener("mouseover", function () {
  HoverImg.style.backgroundImage = "url('../images/list-back5.png')";
});
HoverTarget6.addEventListener("mouseover", function () {
  HoverImg.style.backgroundImage = "url('../images/list-back6.png')";
});

HoverTarget1.addEventListener("mouseleave", function () {
  HoverImg.style.backgroundImage = "none";
});
HoverTarget2.addEventListener("mouseleave", function () {
  HoverImg.style.backgroundImage = "none";
});
HoverTarget3.addEventListener("mouseleave", function () {
  HoverImg.style.backgroundImage = "none";
});
HoverTarget4.addEventListener("mouseleave", function () {
  HoverImg.style.backgroundImage = "none";
});
HoverTarget5.addEventListener("mouseleave", function () {
  HoverImg.style.backgroundImage = "none";
});
HoverTarget6.addEventListener("mouseleave", function () {
  HoverImg.style.backgroundImage = "none";
});
