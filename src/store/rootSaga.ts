import { takeEvery,put, all, take,call }  from 'redux-saga/effects'


import userSaga from './saga/userSaga';
import permissionSaga from './saga/permissionSaga';



function* rootSaga(){
    yield all([
        call(userSaga),
        call(permissionSaga)
    ])
}

export default rootSaga;
