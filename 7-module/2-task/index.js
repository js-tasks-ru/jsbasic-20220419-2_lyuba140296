import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = createElement(this.createModal());
    this.title = this.elem.querySelector('.modal__title');
    this.body = this.elem.querySelector('.modal__body');
    this.button = this.elem.querySelector('.modal__close');
    this.button.onclick = this.close.bind(this);
    document.addEventListener('keydown', this.close.bind(this));
  }

  createModal() {
    return `  
    <div class="modal">
      <div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>

          <h3 class="modal__title">
            Вот сюда нужно добавлять заголовок
          </h3>
        </div>

        <div class="modal__body">
          A сюда нужно добавлять содержимое тела модального окна
        </div>
      </div>
    </div>`;
  }

  open() {
    const body = document.querySelector('body');
    body.classList.add('is-modal-open');
    body.append(this.elem);
  }

  setTitle(title) {
    this.title.innerHTML = title;
  }

  setBody(body) {
    this.body.innerHTML = '';
    this.body.append(body);
  }

  close(event) {
    const deleteButton = event.target.closest('.modal__close');
    if (!deleteButton && event.code !== "Escape") return; 

    const body = document.querySelector('body');
    body.classList.remove('is-modal-open');
    this.elem.remove();
  }
}
