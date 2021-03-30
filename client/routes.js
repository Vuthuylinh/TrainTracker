import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Trains} from './components'

const Routes =()=> {

    return (
      <Router>
          <Route exact path="/trains" component={Trains} />
      </Router>
    )
}
export default Routes
