import {
  applyMiddleware,
  createStore
} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';


const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  // run saga middleware
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
