import {useRouteMatch,useLocation,Route} from 'react-router-dom' 

import React from 'react';


function RouterArr(){
    const match = useRouteMatch('/home')
    const location = useLocation()
    console.log(location)
    console.log(match)
    return (
      <>
        <Route path='/home' render={()=>(<div>HOME</div>)}></Route>
        <Route path='/about' render={()=>(<div>about</div>)}></Route>
      </>
    )
  
  }


export default RouterArr;