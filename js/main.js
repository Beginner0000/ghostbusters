$(document).ready(function () {
  const mMenuBtm = $('.m-menu-button');
  const mMenu = $('.m-menu');
  const tab = $('.tab');

  mMenuBtm.on("click", function () {
    mMenu.toggleClass('active');
    $('body').toggleClass('no-scroll');
  });

  tab.on("click, function () {
    tab.removeClass('active')
    $(this).toggleClass('active')
    let activeNabContent = $(this).attr('data-target')
    $('tabs-content').removeClass('visible')
    $(activeNabContent).toggleClass('visible')
  }")

  var mySwiper = new Swiper ('.swiper-container', {
   slidePerView: 4,
   spaceBetween: 25,
   loop: true,
   breakpoints: {
     992: {
       slidesPerView: 4,
     },
     768: {
       slidePerView: 2,
     },
     320 (property) slidesPerView: Number
      slidesPerView: 1,
      slidesOffsetAfter: 50,
      navigation: {
      nextEl: '.button-next',
      },
     },
   },
 })
});
