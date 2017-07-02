import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export const store = createStoreWithMiddleware(reducers);
