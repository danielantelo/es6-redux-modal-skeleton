import reduxModalStore from './store';
import * as actions from './actions';
import injectModal from './templates/modalRenderer';

export default class ReduxModal {
  static getDefaultOptions() {
    return {
      openModalElementSelector: '.js-redux-modal-open',
      closeModalElementSelector: '.js-redux-modal-close',
      modalContainerSelector: '#redux-modal-container',
      modalElementSelector: '.redux-modal',
      modalDataAttribute: 'data-redux-modal',
      modalOpenedClass: 'redux-modal--opened',
    };
  }

  constructor(props = {}) {
    this.options = Object.assign(ReduxModal.getDefaultOptions(), props.options || {});

    injectModal();
    this.setPreviousStates();
    this.setupOpenModalElements();
    this.findModalElements();
    this.setupCloseModalElements();
    reduxModalStore.subscribe(this.propagateStateChanges.bind(this));
  }

  propagateStateChanges() {
    const isVisibleChanged = this.getStateValue('visible') !== this.prevIsVisible;
    this.setPreviousStates();

    if (isVisibleChanged) {
      this.updateModalVisibility();
    }
  }

  destroy() {
    this.openModalElements.forEach(element => {
      element.removeEventListener('click', this.onOpenModal);
    });
    this.closeModalElements.forEach(element => {
      element.removeEventListener('click', this.onCloseModal);
    });
    this.modalContainer.remove();
  }

  getStateValue(key) {
    return reduxModalStore.getState().reduxModal.get(key);
  }

  getElement(element, parent = document) {
    const selector = `${element}Selector`;
    return parent.querySelector(this.options[selector]);
  }

  getElements(element, parent = document) {
    const selector = `${element}Selector`;
    return [].slice.call(parent.querySelectorAll(this.options[selector]));
  }

  setPreviousStates() {
    this.prevIsVisible = this.getStateValue('visible');
  }

  setupOpenModalElements() {
    this.openModalElements = this.getElements('openModalElement');
    this.openModalElements.forEach(element => {
      element.addEventListener('click', this.onOpenModal);
    });
  }

  onOpenModal = (event) => {
    event.preventDefault();
    const data = event.target.getAttribute(this.options.modalDataAttribute);
    reduxModalStore.dispatch(actions.openModal(data));
  };

  findModalElements() {
    this.modalContainer = this.getElement('modalContainer');
    this.modal = this.getElement('modalElement', this.modalContainer);
  }

  setupCloseModalElements() {
    this.closeModalElements = this.getElements('closeModalElement');
    this.closeModalElements.forEach(element => {
      element.addEventListener('click', this.onCloseModal);
    });
  }

  onCloseModal = (event) => {
    event.preventDefault();
    reduxModalStore.dispatch(actions.closeModal());
  };

  updateModalVisibility() {
    const visible = this.getStateValue('visible');
    if (visible) {
      this.modal.classList.add(this.options.modalOpenedClass);
    } else {
      this.modal.classList.remove(this.options.modalOpenedClass);
    }
  }
}
