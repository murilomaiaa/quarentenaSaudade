import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Text from './components/Text'

const Routes = () =>(
  <BrowserRouter>
    <Switch>
      <Route path='/:name' component={Text} />
      <Route path='*' component={Text} />
    </Switch>
  </BrowserRouter>
)

export default Routes
