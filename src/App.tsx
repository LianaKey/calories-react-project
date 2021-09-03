import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/App.css'
import { CalcPage, InfoPage, MorePage } from './pages'
import { Navigation } from './components'
import { rootReducer } from "./redux/rootReducer"
import { data } from "./data/data"
import { Container } from 'react-materialize'

const store = createStore(rootReducer, data,
    (window as any).__REDUX_DEVTOOLS_EXTENSION_ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Container className="container">
            <Switch>
              <Route component={CalcPage} path="/" exact />
              <Route component={MorePage} path="/more" />
              <Route component={InfoPage} path="/info" />
            </Switch>
        </Container>
      </BrowserRouter>
    </Provider> 
  )
}

export default App