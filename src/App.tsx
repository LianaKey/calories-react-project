import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'

import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/App.css'
import 'antd/dist/antd.css';
import { MainPage, InfoPage, MorePage } from './pages'
import { Navigation } from './components'
import { rootReducer } from "./redux/reducers/"
import { Container } from 'react-materialize'
import { hot } from 'react-hot-loader'


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const store = createStore(rootReducer, {}, composeEnhancers())

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Container className="container">
            <Switch>
              <Route component={MainPage} path="/" exact />
              <Route component={MorePage} path="/more" />
              <Route component={InfoPage} path="/info" />
            </Switch>
        </Container>
      </BrowserRouter>
    </Provider> 
  )
}

export default hot(module)(App) 