import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HOME_ROUTE, PROFILE_ROUTE } from './utils/constant/router'
import './sass/index.scss'
import Header from './components/common/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Error from './pages/Error'


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Header />
    <Switch>
         <Route exact path={HOME_ROUTE} component={Home} />
          <Route path={PROFILE_ROUTE} component={Profile} />
          <Route component={Error} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

