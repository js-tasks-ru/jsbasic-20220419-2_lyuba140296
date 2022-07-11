import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = createElement(this.getMenu());
    this.ribbonInner = this.elem.querySelector('.ribbon__inner');
    this.leftArrow = this.elem.querySelector('.ribbon__arrow_left');
    this.rightArrow = this.elem.querySelector('.ribbon__arrow_right');
    
    this.elem.addEventListener('click', this.addCategory.bind(this));
    this.initArrows();
    
  }

  getMenuElements() {
    return this.categories.map(category => {
      return `<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`
    }).join('');
  }

  getMenu() {
    return `<div class="ribbon">
    <button class="ribbon__arrow ribbon__arrow_left">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    
    <nav class="ribbon__inner">
      ${this.getMenuElements()}
    </nav>

    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>`
  }

  initArrows() {
    const scrollSize = 350;
    
    this.leftArrow.onclick = () => {
      this.ribbonInner.scrollBy(-scrollSize, 0);
      this.buttonVisibleToggler();
    }
    
    this.rightArrow.onclick = () => {
      this.ribbonInner.scrollBy(scrollSize, 0);
      this.buttonVisibleToggler();
    }
    
  }

  addCategory(event) {
    event.preventDefault();
    const target = event.target; 
    const category = target.closest('.ribbon__item');
    const items = this.elem.querySelectorAll('.ribbon__item');
    if (target.tagName != 'A') return; 
  
    const toggleSelect = function () {
      for (let item of items) {
        item.classList.remove('ribbon__item_active');
      }
      category.classList.add('ribbon__item_active');
    }
   
    if (category){
      toggleSelect();
    } 

    const customEvent = new CustomEvent('ribbon-select', { 
      detail: category.dataset.id, 
      bubbles: true 
    })

    event.target.dispatchEvent(customEvent);
  }

  buttonVisibleToggler() {
    const scrollWidth = this.ribbonInner.scrollWidth;
    const scrollLeft = this.ribbonInner.scrollLeft;
    const clientWidth = this.ribbonInner.clientWidth;
    const scrollRight = scrollWidth - scrollLeft - clientWidth;

    if(scrollLeft === 0) {
      this.leftArrow.classList.remove('ribbon__arrow_visible');
    } else {
      this.leftArrow.classList.add('ribbon__arrow_visible');
    }

    if(scrollRight < 1) {
      this.rightArrow.classList.remove('ribbon__arrow_visible');
    } else {
      this.rightArrow.classList.add('ribbon__arrow_visible');
    }
    
  }

  
}
