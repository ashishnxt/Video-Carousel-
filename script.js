var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // Default for larger screens
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // When window width is >= 320px (mobile)
      320: {
        slidesPerView: 1, // Show 1 card on mobile
        slidesPerGroup: 1,
        spaceBetween: 10,
      },
      // When window width is >= 768px (tablets/laptops)
      768: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      // When window width is >= 1024px (desktops)
      1024: {
        slidesPerView: 4,
        slidesPerGroup:4,
        spaceBetween: 30,
      },
    },
});
