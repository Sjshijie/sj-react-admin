import { takeEvery,put, all, take }  from 'redux-saga/effects'
import { push } from 'connected-react-router';

import request from '../../utils/request'


function* login(params:any){
    const res =yield request.post('http://inner.meeno.net:10088/pms/employee/manager/login.do?username=shijie@meeno.net&password=123456&entryType=1')
    yield put({type:'login',preload:{name:1}})    //put 之前一定要加yield
    yield put({type:"permissionRouterAction"})
    yield put(push('/home'))

}

export default function* userSaga(){
    yield takeEvery('loginAction',login)
}