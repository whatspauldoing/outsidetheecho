import React from 'react'
import { render } from 'react-dom'
import { App } from './components/app'
import { Router, Route, hashHistory, browserHistory } from 'react-router'
//import { Four04 } from './components/404'

window.React = React

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>,
  document.getElementById('react-container')
)
