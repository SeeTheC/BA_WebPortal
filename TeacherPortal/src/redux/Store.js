// @flow
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducer from './reducers';
import rootSaga from './saga';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
  ]
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares, sagaMiddleware)
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
// const action = type => store.dispatch({ type });

export default { store, persistor };
