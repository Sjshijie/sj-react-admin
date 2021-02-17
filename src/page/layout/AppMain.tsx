import React, { useEffect, Suspense,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import AuthRouter from '../../components/AuthRouter/AuthRouter'



export default function(){
    const permissionRoutes=useSelector((state:any)=>state.permissionReducer.permissionRoutes)
    return (
        <>
            <Suspense fallback='loading'>
                <AuthRouter routes={permissionRoutes}/>
            </Suspense>
        </>
    )
}