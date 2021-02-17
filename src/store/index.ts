import {createStore,compose,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import { createBrowserHistory } from 'history';   //支持在action里路由跳转
import { routerMiddleware } from 'connected-react-router' //支持在action里路由跳转
import reducer from './reducer';
import mySaga from './rootSaga'

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer(history), /* preloadedState, */ composeEnhancers(
    applyMiddleware(sagaMiddleware,routerMiddleware(history))  //支持在action里路由跳转
));
sagaMiddleware.run(mySaga)
// console.log(mySaga)

// const store = createStore(reducer);

export default store;