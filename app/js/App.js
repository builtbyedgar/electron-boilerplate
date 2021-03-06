

import React, { Component } from 'react'
import { Link } from 'react-router'
import { AsyncRouteManager, InitialPreloader, GenericPreloader } from './components'
import { AppStore } from './stores'

class App extends Component {

  constructor (...args) {
    super(...args)
  }

  render () {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="view-one" activeClassName="active">One</Link></li>
          <li><Link to="view-two" activeClassName="active">Two</Link></li>
        </ul>
        <AsyncRouteManager componentDataHandlerMethod={ AppStore.componentDataHandler }
                           initialPreloader={ InitialPreloader }
                           transitionPreloader={ GenericPreloader }
                           transition={ false }
                           transitionTimeOut={ 200 } >
          { this.props.children }
        </AsyncRouteManager>
      </div>
    )
  }
}


export default App
