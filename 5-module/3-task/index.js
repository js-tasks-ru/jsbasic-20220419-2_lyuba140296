function initCarousel() {
  const carouselArrowRight = document.querySelector('.carousel__arrow_right');
  const carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  const slides = document.querySelectorAll('.carousel__slide');
  const carouselInner = document.querySelector('.carousel__inner');
  
  const slideWidth = carouselInner.offsetWidth;
  const count = slides.length;
  let index = 1;


  buttonVisibleToggler = () => {
    if (index === 1) {
      carouselArrowLeft.style.display = 'none';
    } else {
      carouselArrowLeft.style.display = '';
    }
    if (index === count) {
      carouselArrowRight.style.display = 'none';
    } else {
      carouselArrowRight.style.display = '';
    }
  }

  slideAndCheck = () => {
    carouselInner.style.transform = `translateX(-${slideWidth * (index - 1)}px)`;
    
    buttonVisibleToggler();
  }

  carouselArrowRight.onclick = function() {
    index++;
    if (index >= count) {
      index = count;
    }
    slideAndCheck();
  }

  carouselArrowLeft.onclick = function() {
    index--;
    if (index <= 1) {
      index = 1;
    }
    slideAndCheck();
  }
  
  buttonVisibleToggler();

}
