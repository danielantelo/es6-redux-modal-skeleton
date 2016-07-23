import template from 'lodash.template';

const modalTemplate = template(`
    <section class="redux-modal">
        <h1 class="redux-modal__title">
          hello world
        </h1>
        <button class="redux-modal__close js-redux-modal-close">Close</button>
    </section>
`);

export default function injectModal() {
  const markup = modalTemplate({});
  const markupElement = document.createElement('div');
  markupElement.id = 'redux-modal-container';
  markupElement.innerHTML = markup;
  document.body.appendChild(markupElement);
}
