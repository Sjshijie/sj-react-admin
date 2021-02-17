import React, { useEffect, Suspense,useState } from 'react';
import AuthRouter from '../../components/AuthRouter/AuthRouter'

export default function (props:any){
    return (
        <Suspense fallback='loading'>
            <AuthRouter routes={props.childrenRoutes}/>
        </Suspense>
    )
}