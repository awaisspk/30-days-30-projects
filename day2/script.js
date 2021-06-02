var btn = document.getElementsByClassName("btn");
var banner = document.getElementById("banner");

btn[0].onclick = function () {
  banner.src = "./img/pic1.png";
};

btn[1].onclick = function () {
  banner.src = "./img/pic2.png";
};

btn[2].onclick = function () {
  banner.src = "./img/pic3.png";
};
