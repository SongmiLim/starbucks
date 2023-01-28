///// HEADER -- SUBMENU /////
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


///// HEADER -- BADGES 스크롤 & TO-TOP/////
const badgeEL = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () { //_.throttle(함수, 시간ms)

  if (window.scrollY > 500) {
    //배지 숨기기
    gsap.to(badgeEL, .6, { //gsap: 애니메이션효과
      opacity: 0,
      display: 'none'
    }); //gsap.to(요소, 지속시간, 옵션);
    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x:0
    });
  } 
  else {
    //배지 보이기
    gsap.to(badgeEL, .6, {
      opacity: 1,
      display: 'block'
    });
     //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x:100
    });

  }
}, 300));

toTopEl.addEventListener('click',function(){
  gsap.to(window, .7, {
    scrollTo: 0
  });
});





///// VISUAL /////
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




///// AWARDS /////
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});





///// PROMOTION /////
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;


promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;

  if (isHidePromotion) { //숨김처리
    promotionEl.classList.add('hide');
  } else { //보임처리
    promotionEl.classList.remove('hide');
  }
});






///// YOUTUBE VIDEO /////
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(
    selector,
    random(1.5, 2.5), {
      y: size,
      repeat: -1, //무한반복
      yoyo: true, //애니메이션 다시재생
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);








// FindTheStore_ScrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});




//FOOTER_날짜
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();