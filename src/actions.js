export const actionTypes = Object.freeze({
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
});

export function openModal(incomingData) {
  return {
    type: actionTypes.OPEN_MODAL,
    payload: incomingData,
  };
}

export function closeModal() {
  return {
    type: actionTypes.CLOSE_MODAL,
    payload: {},
  };
}
