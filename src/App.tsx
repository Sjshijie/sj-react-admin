import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import { Provider } from 'react-redux';
import store,{ history } from './store/index'
import AuthRouter from './components/AuthRouter/AuthRouter'
import { ConnectedRouter } from 'connected-react-router'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const Login = React.lazy(() => import('./page/login'));
const Layout = React.lazy(() => import('./page/layout'));

function App() {
  return (
    <div className="App" >
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Suspense fallback='loading'>
            <Switch>
              <Route path='/login'  component={Login}/>
              <Route path='/' component={Layout}/>
            </Switch>
          </Suspense>
        </ConnectedRouter>
      </Provider>
    </div>
  )
}

export default App;

