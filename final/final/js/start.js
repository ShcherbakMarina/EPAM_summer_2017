/*slider*/
// var screenWidth = document.documentElement.clientWidth;
// console.log(screenWidth);
var screenWidth = window.innerWidth;
// console.log(windowWidth);
// console.log(screenWidth1);
// var screenWidth = document.documentElement.innerWidth;
var promo = document.getElementsByClassName('promo');
var promoBanners = [];

for (var i = 0; i < promo.length; i++) {
  promoBanners[i] = promo[i].children[0].children[0];
}

changePromo();

var slider = document.getElementsByClassName('bannersSlider')[0];
var dots = document.getElementsByClassName('sliderDots')[0];
var leftArrow = document.getElementsByClassName('leftArrow')[0];
var rightArrow = document.getElementsByClassName('rightArrow')[0];


leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);


var timer = setInterval(moveRight, 10000);
// console.log(slider);

// var promoBanner = document.getElementsByClassName('promo')[0];
// var promoBannerWidth = window.getComputedStyle(promoBanner).width;
// var sliderWrapper = document.getElementsByClassName('bannersSlider')[0].children[0];
// sliderWrapper.style.width = promoBannerWidth * sliderWrapper.children.length;
// sliderWrapper.style.height = window.getComputedStyle(promoBanner).height;
// console.log(sliderWrapper);

function moveRight() {
  var activeBanner = document.getElementsByClassName('activePromo')[0];
  var activeDot = document.getElementsByClassName('activeDot')[0];
  activeBanner.classList.remove('activePromo');
  activeDot.classList.remove('activeDot');
  if (activeBanner.nextElementSibling) {
    var nextBanner = activeBanner.nextElementSibling;
    var nextDot = activeDot.nextElementSibling;
    nextBanner.classList.add('activePromo');
    nextDot.classList.add('activeDot');
  } else {
    slider.children[0].classList.add('activePromo');
    dots.children[0].classList.add('activeDot');
  }
  clearInterval(timer);
  timer = setInterval(moveRight, 10000);
}

function moveLeft() {
  var activeBanner = document.getElementsByClassName('activePromo')[0];
  var activeDot = document.getElementsByClassName('activeDot')[0];
  activeBanner.classList.remove('activePromo');
  activeDot.classList.remove('activeDot');
  if (activeBanner.previousElementSibling) {
    var previousBanner = activeBanner.previousElementSibling;
    var previousDot = activeDot.previousElementSibling;
    previousBanner.classList.add('activePromo');
    previousDot.classList.add('activeDot');
  } else {
    slider.children[slider.children.length-1].classList.add('activePromo');
    dots.children[dots.children.length-1].classList.add('activeDot');
  }
  clearInterval(timer);
  timer = setInterval(moveRight, 10000);
}


function changePromo() {
  var screenWidth = window.innerWidth;

  var sliderWrapper = document.querySelector('.slider .wrapper');
  var sliderStyle = window.getComputedStyle(sliderWrapper);
  var sliderWidth = sliderStyle.getPropertyValue('width');

  for (i = 0; i < promoBanners.length; i++) {
    promoBanners[i].style.width = sliderWidth;
  }

  if (screenWidth >= 1025) {
    for (i = 0; i < promoBanners.length; i++) {
      promoBanners[i].src = 'img/promo/promo' + (+[i] + 1) + '.jpg';
    }
  } else if (screenWidth < 1025 && screenWidth >= 650) {
    for (i = 0; i < promoBanners.length; i++) {
      promoBanners[i].src = 'img/promo/tablet/promo' + (+[i] + 1) + '.jpg';
    }
  } else if (screenWidth < 650) {
    for (i = 0; i < promoBanners.length; i++) {
      promoBanners[i].src = 'img/promo/mobile/promo' + (+[i] + 1) + '.jpg';
    }
  }
}

window.onresize = changePromo;
