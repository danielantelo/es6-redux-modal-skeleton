import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

export function mockApiGetSuccess(endpoint, query, responseData) {
  return nock(global.baseUrl)
    .get(endpoint)
    .query(query)
    .reply(200, responseData);
}

export function mockApiPutSuccess(endpoint, requestData, responseData) {
  return nock(global.baseUrl)
    .put(endpoint, requestData)
    .reply(200, responseData);
}

export function mockApiPostSuccess(endpoint, requestData, responseData) {
  return nock(global.baseUrl)
    .post(endpoint, requestData)
    .reply(200, responseData);
}

export function mockApiDeleteSuccess(endpoint, responseData) {
  return nock(global.baseUrl)
    .delete(endpoint)
    .reply(200, responseData);
}

export function mockApiGetError(endpoint, statusCode, query, errorBody) {
  return nock(global.baseUrl)
    .get(endpoint)
    .query(query)
    .reply(statusCode, errorBody);
}

export function mockApiPutError(endpoint, statusCode, requestData, errorBody) {
  return nock(global.baseUrl)
    .put(endpoint, requestData)
    .reply(statusCode, errorBody);
}

export function mockApiPostError(endpoint, statusCode, requestData, errorBody) {
  return nock(global.baseUrl)
    .post(endpoint, requestData)
    .reply(statusCode, errorBody);
}

export function mockApiDeleteError(endpoint, statusCode, errorBody) {
  return nock(global.baseUrl)
    .delete(endpoint)
    .reply(statusCode, errorBody);
}

function catchError(error, done) {
  if (error instanceof Error) {
    done(error);
  } else {
    done(new Error(error));
  }
}

export function expectActionsToEqual(action, actionArgs, expectedActions, done) {
  const store = mockStore();

  store.dispatch(action(...actionArgs))
    .then(() => {
      expect(store.getActions()).to.be.deep.equal(expectedActions);
    })
    .catch(() => {
      expect(store.getActions()).to.be.deep.equal(expectedActions);
    })
    .then(done)
    .catch(error => catchError(error, done));
}
