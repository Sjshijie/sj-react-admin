import {createStore,compose,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer';
import mySaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(sagaMiddleware)
));
sagaMiddleware.run(mySaga)
// console.log(mySaga)

// const store = createStore(reducer);

export default store;