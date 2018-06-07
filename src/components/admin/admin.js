import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Login from './login'
import DashBoard from './dashboard'
import CreateEvent from '../createEvent'

class Admin extends Component {
  render () {
    return (
      <div>
        <Route path='/' component={Login} />
        <Route exact path='/admin/dashboard' component={DashBoard} />
        <Route exact path='/admin/create' component={CreateEvent} />
      </div>
    )
  }
}

export default Admin
