if (document.documentElement.clientWidth < 768) {
  const swiper = new Swiper("#swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 16,
    slidesPerView: "auto",
    slidesOffsetAfter: 70,
    centerSlides: true,
  });
}

if (document.documentElement.clientWidth > 768) {
  const swiper = document.querySelector("#swiper");
  const btn = document.querySelector(".content__btn-more");

  btn.onclick = function () {
    if (swiper.className == "swiper-visible") {
      swiper.className = "";
      btn.innerHTML = "Показать все";
    } else {
      swiper.className = "swiper-visible";
      btn.innerHTML = "Скрыть";
    }
  };
}
