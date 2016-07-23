import Immutable from 'immutable';
import { actionTypes } from './actions';

export const reduxModalDefaultState = Immutable.fromJS({
  visible: false,
});

export function reduxModalReducer(state = reduxModalDefaultState, action) {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return state.mergeDeep({
        visible: true,
      });
    case actionTypes.CLOSE_MODAL:
      return state.mergeDeep({
        visible: false,
      });
    default:
      return state;
  }
}
