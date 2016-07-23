import { expect } from 'chai';
import ReduxModal from '../src/index';
import { triggerClickEventOnElement } from './resources/helpers/dom';

describe('redux modal', () => {
  let component;

  beforeEach(() => {
    component = new ReduxModal();
  });

  afterEach(() => {
    component.destroy();
  });

  it('injects modal markup and styles into the document', () => {
    expect(!!document.getElementById('redux-modal-container')).to.equal(true);
  });

  it('binds open and close events', () => {
    const modalOpenedSelector = '.redux-modal--opened';

    // check modal is hidden by default and opens on demand
    expect(!!document.querySelector(modalOpenedSelector)).to.equal(false);
    triggerClickEventOnElement('.js-redux-modal-open');
    expect(!!document.querySelector(modalOpenedSelector)).to.equal(true);

    // check we can then close modal on demand
    triggerClickEventOnElement('.js-redux-modal-close');
    expect(!!document.querySelector(modalOpenedSelector)).to.equal(false);
  });
});
