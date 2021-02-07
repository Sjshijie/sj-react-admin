import React,{useEffect} from 'react';
import { connect } from 'react-redux' 
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/index'


import RouterArr from './RouterArr'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation
} from "react-router-dom";

import axios from './utils/request'




// const mapStateToProps = (state: IState) => state;
// interface IState{

// }

// interface IProps{
//   getList:()=>void
// }

function App() {

    useEffect(() => {
      axios.post('http://inner.meeno.net:20842/user/loginNormal.do').then(res=>{
        console.log(res)
      })
    }, []);

    return (
      <div className="App" >
        <Router>
          <Link to='/home'>home</Link>
          <Link to='/about'>about</Link>


          <Switch>
            <RouterArr />
          </Switch>
        </Router>
      </div>
    )
}



export default App;

// const mapDispatchToProps = (dispatch:any)=>{
//   return {
//       getList:()=>{
//          dispatch({        //这样子 不仅会执行saga 也会执行 reduce  所以 需要执行saga的时候最好 action 命名不同 这样子 会少执行一次 return state , reducer  switch case
//           type:'testAction'
//         })
//         // {type:'testAction'}

        
//       }
        
        
          
      
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App);
