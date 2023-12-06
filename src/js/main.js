import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';

function main() {
  $(document).ready(function(){
    $('.about__slider').slick({
      dots: true,
      adaptiveHeight: true,
      nextArrow: '<div class="next arrow"></div>',
      prevArrow: '<div class="prev arrow"></div>',
    });
  });
  scrollSmooth();
}

if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll',
    function () {
      return setTimeout(main, 1000);
    }, {
      once: true
    });
} else {
  main();
};
