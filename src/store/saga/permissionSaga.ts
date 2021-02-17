import { takeEvery,put, all, take,call }  from 'redux-saga/effects'

import routeConfig from '../../components/AuthRouter/config'

function* getServerRoute(params:any){
    const routes = yield call(returnPremission,params.preload,routeConfig)
    routes.unshift({
        name:"home",
        path:"/home",
        title:'首页'
    })
    yield put({type:"getPermissionRoutes",preload:routes})
}

export default function* permissionSaga(){
    yield takeEvery('permissionRouterAction',getServerRoute)
}


function returnPremission(serveRouters:any,routes:any){
    let res:any = []
    routes.forEach((item:any)=>{
        if(hasPremission(serveRouters,item)){
            if(item.children && item.children.length){
                item.children = returnPremission(serveRouters,item.children)
            }
            res.push(item)
        }
    })
    return res
}

function hasPremission(serveRouters:any,router:any):Boolean{
    router.preIds={}
    function handleRouter(serveRouters:any){
        serveRouters.forEach((item:any) => {
            if(item.route == router.name){
                router.preIds[item.permId]=item.name
            }
            if(item.children){
                handleRouter(item.children)
            }
        });
    }

    handleRouter(serveRouters)
    
    if(router.preIds){
        return true
    }else{
        return false
    }
    
}