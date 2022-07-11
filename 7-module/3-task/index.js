// import createElement from "../../assets/lib/create-element"

function createElement(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.firstElementChild;
};

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = createElement(this.getSlider);

    this.sliderSteps = this.elem.querySelector('.slider__steps');
    this.getSteps();

    this.thumb = this.elem.querySelector('.slider__thumb');
    this.thumbValue = this.elem.querySelector('.slider__value');

    this.progress = this.elem.querySelector('.slider__progress');

    this.sliderStepsSpans = this.sliderSteps.querySelectorAll('span');
    this.setActiveStep(value);

    this.elem.addEventListener('click', this.changeValue.bind(this));
  }

  getSteps() {
    this.sliderSteps.innerHTML = '<span></span>'.repeat(this.steps);
  }

  getSlider() {
    return `
    <div class="slider">
      <div class="slider__thumb">
        <span class="slider__value">0</span>
      </div>
    
      <div class="slider__progress"></div>
    
      <div class="slider__steps">
      </div>
    </div>`
  }

  setActiveStep(step) {
    for (let i = 0; i < this.steps; i++) {
      if (i === step) {
        this.sliderStepsSpans[i].classList.add('slider__step-active');
      } else {
        this.sliderStepsSpans[i].classList.remove('slider__step-active');
      }
    }   
  }

  changeValue(event) {
    const posX = event.layerX;
    const width = this.elem.clientWidth;
    const x = width / (this.steps - 1);
    const y = Math.round(posX / x);
    const progressWidth = 100/(this.steps - 1) * y;
    this.setActiveStep(y)
    this.thumbValue.innerHTML = y;
    this.thumb.style.left = `${progressWidth}%`;
    this.progress.style.width = `${progressWidth}%`;

    const customEvent = new CustomEvent('slider-change', { 
      detail: y, 
      bubbles: true 
    })

    event.target.dispatchEvent(customEvent);
  }

}
