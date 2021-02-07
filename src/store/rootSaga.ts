import { takeEvery,put }  from 'redux-saga/effects'

function* test(){
    console.log(222)
    put({type:'test'})
}


function* rootSaga(){
    // yield homeSaga()  //执行子模块saga 必须要加 yield

    yield takeEvery("testAction",test)
}

export default rootSaga;
