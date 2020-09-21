import React from "react"
import './assets/css/App.css'
import Navigation from './components/Navigation'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CalcPage from './pages/CalcPage'
import InfoPage from './pages/InfoPage'
import MorePage from './pages/MorePage'
import { Dishes } from "./data/data"

const App: React.FC = () => {
  return (
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
  )
}

export default App