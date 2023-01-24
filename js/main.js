
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEL = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () { //_.throttle(함수, 시간ms)

  if (window.scrollY > 500) {
    // badgeEL.style.display='none';

    gsap.to(badgeEL, .6, {
      opacity: 0,
      display: 'none'
    }); //gsap.to(요소, 지속시간, 옵션);
  } else {
    // badgeEL.style.display='block';
    gsap.to(badgeEL, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //0.7  1.4  2.1  2.8
    opacity: 1
  });
})


new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  // direction:'horizontal',
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;


promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;

  if (isHidePromotion) {  //숨김처리
    promotionEl.classList.add('hide');
  } else {   //보임처리
    promotionEl.classList.remove('hide');
  }
});