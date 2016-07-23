import { expect } from 'chai';
import Immutable from 'immutable';
import { reduxModalReducer } from '../src/reducers';
import * as actions from '../src/actions';

describe('redux modal reducers', () => {
  const state = reduxModalReducer(undefined, {});
  const dataFixture = {
    key1: 'value1',
    key2: 'value2'
  };

  it('should have a default state', () => {
    expect(state).to.deep.equal(Immutable.fromJS({
      visible: false,
    }));
  });

  describe('open modal action', () => {
    it('should set the visible state to active', () => {
      expect(state.get('visible')).to.equal(false);
      const newState = reduxModalReducer(state, actions.openModal(dataFixture));
      expect(newState.get('visible')).to.equal(true);
    });
  });

  describe('close modal action', () => {
    const visibleState = reduxModalReducer(state, actions.openModal(dataFixture));

    it('should set the visible state to inactive', () => {
      expect(visibleState.get('visible')).to.equal(true);
      const newState = reduxModalReducer(visibleState, actions.closeModal());
      expect(newState.get('visible')).to.equal(false);
    });
  });
});
