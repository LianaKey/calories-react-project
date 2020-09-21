import React from "react"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import './assets/css/App.css'
import CalcPage from './pages/CalcPage'
import InfoPage from './pages/InfoPage'
import MorePage from './pages/MorePage'
import Navigation from './components/Navigation'
import { rootReducer } from "./redux/rootReducer"
import { Dishes } from "./data/data"

const store = createStore(rootReducer, Dishes)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navigation/>
      <div className="container">
          <Switch>
            <Route component={CalcPage} path="/" exact />
            <Route component={MorePage} path="/more" />
            <Route component={InfoPage} path="/info" />
          </Switch>
      </div>
      </BrowserRouter>
    </Provider> 
  )
}

export default App