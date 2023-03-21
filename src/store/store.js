import { applyMiddleware, compose, createStore } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log('type', action.type);
  console.log('payload', action.payload);
  console.log('currentState', store.getState());
  next(action);
  console.log('next state: ', store.getState());
};
const middleWares = [loggerMiddleware];
const composedEnhancers = compose(applyMiddleware(...middleWares));
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);
