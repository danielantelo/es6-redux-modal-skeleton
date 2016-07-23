export function triggerClickEventOnElement(element, options = { canBubble: true, isCancellable: true}) {
  if (typeof element === 'string') {
    const selector = element;
    element = document.querySelector(selector);

    if (!element) {
      throw new Error(`Selector "${selector}" did not match any elements`);
    }
  }

  const clickEvent = document.createEvent('Event');
  clickEvent.initEvent('click', options.canBubble, options.isCancellable);
  element.dispatchEvent(clickEvent);
}
