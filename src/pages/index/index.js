// 首页使用的js
import "swiper/css/swiper.min.css";
import Swiper from "swiper";

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

import "../common/popup";
import "../common/aside";

const caseSwiper = new Swiper(".case-wrapper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function slide(container, times) {
  const tabItem01 = $(container).find(".tab-item");
  const viewItem01 = $(container).find(".view-item");
  let swiperIndex01 = 0;
  setInterval(function () {
    console.log(swiperIndex01);
    viewItem01
      .eq(swiperIndex01)
      .addClass("active")
      .siblings()
      .removeClass("active");
    tabItem01
      .eq(swiperIndex01)
      .addClass("active")
      .siblings()
      .removeClass("active");

    swiperIndex01++;
    if (swiperIndex01 === tabItem01.length) {
      swiperIndex01 = 0;
    }
  }, times);
}
slide(".module03", 3000);
slide(".module04", 3000);

$(".popup01").on("click", function () {
  $(".offer-container").fadeIn();
});
$("section.offer-container .offer-wrapper .close").on("click", function () {
  $(".offer-container").fadeOut();
});

$(".popup02").on("click", function () {
  $(".consult-container").fadeIn();
});

$("section.consult-container .consult-wrapper .close").on("click", function () {
  $(".consult-container").fadeOut();
});

$(".ad01")
  .find("i")
  .on("click", function () {
    $(".ad01").animate(
      {
        right: "-300px",
      },
      600
    );
    setTimeout(function () {
      $(".ad01").animate(
        {
          right: "0",
        },
        600
      );
    }, 5000);
  });
$(".ad01")
  .find("img")
  .on("click", function () {
    $(".form-popup").fadeIn();
  });
$(".form-popup i.close").on("click", function () {
  $(".form-popup").fadeOut();
});

$(".module03 .tab-item").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  const index = $(this).attr("data-index");
  $(".module03 .view-item").hide().eq(index).show();
});
$(".module04 .tab-item").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  const index = $(this).attr("data-index");
  $(".module04 .view-item").hide().eq(index).show();
});

$("footer .close").on("click", function () {
  $("footer").addClass("active");
  setTimeout(function () {
    $("footer").removeClass("active");
  }, 15000);
});

$("section.success-popup .close").on("click", function(){
  $("section.success-popup").fadeOut();
})