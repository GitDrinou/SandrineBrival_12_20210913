import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PROFILE_ROUTE } from './utils/constant/router'
import './sass/index.scss'
import Header from './components/common/Header'
import Profile from './pages/Profile'


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Header />
    <Switch>
          <Route exact path={PROFILE_ROUTE} component={Profile} />
          {/* <Route component={Error} /> */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

