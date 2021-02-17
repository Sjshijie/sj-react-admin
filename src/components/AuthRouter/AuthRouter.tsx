import routeComponents from './routes'
import { Route } from 'react-router-dom';

function RouterArr(props:any) {
  return (
    <>
      {
        props.routes.map((item:any) => {
          const Component = routeComponents[item.name]
          if(Component){
            return (<Route path={item.path} key={item.name} exact={item.children && item.children.length?false:true} render={() => {
              return <Component childrenRoutes={item.children}/>
            }}></Route>)
          }
          
        })
      }
    </>

  )
}




export default RouterArr;