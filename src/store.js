import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { reduxModalReducer } from './reducers';

const reduxModalReducers = combineReducers({
  reduxModal: reduxModalReducer,
});

const middlewares = [applyMiddleware(thunk)];
const reduxModalStore = createStore(reduxModalReducers, {}, compose(...middlewares));

export default reduxModalStore;
