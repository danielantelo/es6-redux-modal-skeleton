import { expect } from 'chai';
import { isFSA } from 'flux-standard-action';
import * as actions from '../src/actions';

describe('redux modal actions', () => {
  const dataFixture = {
    key1: 'value1',
    key2: 'value2'
  };

  it('should create an action to open the modal', () => {
    const action = actions.openModal(dataFixture);
    expect(isFSA(action)).to.equal(true);
    expect(action.type).to.equal('OPEN_MODAL');
    expect(action.payload).to.deep.equal(dataFixture);
  });

  it('should create an action to close the modal', () => {
    const action = actions.closeModal();
    expect(isFSA(action)).to.equal(true);
    expect(action.type).to.equal('CLOSE_MODAL');
    expect(action.payload).to.deep.equal({});
  });
});
