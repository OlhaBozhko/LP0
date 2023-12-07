import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';

function main() {
  $(document).ready(function () {
    $('.about__slider').slick({
      dots: true,
      adaptiveHeight: true,
      nextArrow: '<div class="next arrow"></div>',
      prevArrow: '<div class="prev arrow"></div>',
    });
    $('.reviews__slider-r').slick({
      dots: true,
      adaptiveHeight: true,
      nextArrow: '<div class="next arrow"></div>',
      prevArrow: '<div class="prev arrow"></div>',
    });
    // Отримайте необхідні елементи з DOM
    const accordionTtl = document.querySelector('.accordion__ttl');
    const components = document.querySelector('.info__components');
    const accordionOpen = document.querySelector('.accordion__open');

    // Додайте обробник подій для натискання на заголовок аккордеона
    accordionTtl.addEventListener('click', function () {
      // Перевірте, чи має компонент клас 'active' (відображення)
      const isActive = components.classList.contains('active');

      // Якщо 'active' відсутній, то додайте його та змініть відображення
      if (!isActive) {
        components.style.display = 'block'; // Показати компоненти
        setTimeout(() => {
          components.classList.add('active'); // Додати клас 'active' для плавного зміщення
          accordionOpen.classList.add('active'); // Додати клас 'active' для зображення
        }, 50); // Затримка для плавності
      } else {
        // Якщо 'active' присутній, приберіть його та змініть відображення
        components.classList.remove('active'); // Видаліть клас 'active' для плавного зникнення
        accordionOpen.classList.remove('active'); // Видаліть клас 'active' для зображення
        setTimeout(() => {
          components.style.display = 'none'; // Приховати компоненти
        }, 300); // Затримка для плавності
      }
    });
    // Получаем ссылку на кнопку "Показать больше"
const showHideBtn = document.getElementById('showHideBtn');

// Получаем все скрытые элементы комментариев
const hiddenComments = document.querySelectorAll('.hidden.comments__item');

// Устанавливаем начальное значение для отслеживания состояния кнопки
let areCommentsVisible = false;

// Функция для отображения или скрытия дополнительных комментариев
function toggleComments() {
  hiddenComments.forEach(comment => {
    comment.classList.toggle('hidden');
  });

  // Изменяем текст кнопки в зависимости от состояния
  if (areCommentsVisible) {
    showHideBtn.textContent = 'Show more';
  } else {
    showHideBtn.textContent = 'Show less';
  }

  // Инвертируем значение состояния
  areCommentsVisible = !areCommentsVisible;
}

// Добавляем обработчик события клика на кнопку
showHideBtn.addEventListener('click', toggleComments);


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
