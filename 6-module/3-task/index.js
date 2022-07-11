import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = createElement(this.getCarousel(slides));
    this.elem.addEventListener('click', this.addProductCard.bind(this));
    this.initCarousel();
  }

  getCarousel(slides) {
    return `
    <div class="carousel">
      <!--Кнопки переключения-->
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">
        ${this.getSlides(slides)}
      </div>
    </div>`;
  }

  getSlides(slides) {
    return slides.map(slide => {return this.getSlide(slide)}).join('');
  }

  getSlide(slide) {
    return `<div class="carousel__slide" data-id="${slide.id}">
              <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
              <div class="carousel__caption">
                <span class="carousel__price">€${slide.price.toFixed(2)}</span>
                <div class="carousel__title">${slide.name}</div>
                <button type="button" class="carousel__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                </button>
              </div>
            </div>`;
  }

  

  addProductCard(event) {
    const target = event.target; 
    const btn = target.closest('.carousel__button');
    const slide = target.closest('.carousel__slide');

    if (btn === null || slide === null) return; 
    
    const customEvent = new CustomEvent("product-add", { 
      detail: slide.dataset.id, 
      bubbles: true
    });

    event.target.dispatchEvent(customEvent);
  }
  
  initCarousel() {
    const carouselArrowRight = this.elem.querySelector('.carousel__arrow_right');
    const carouselArrowLeft = this.elem.querySelector('.carousel__arrow_left');
    const carouselInner = this.elem.querySelector('.carousel__inner');
    
    const count = this.slides.length;
    let index = 1;
  
    const buttonVisibleToggler = function() {
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
  
    const slideAndCheck = function() {
      const slideWidth = carouselInner.offsetWidth;
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
  
}
