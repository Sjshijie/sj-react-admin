import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';//支持在action里路由跳转
import { History } from 'history';//支持在action里路由跳转
import userReducer from './reducer/userReducer'
import permissionReducer from './reducer/permissionReducer';

export default (history:History)=>combineReducers({
    router: connectRouter(history), //支持在action里路由跳转
    userReducer,
    permissionReducer
})
