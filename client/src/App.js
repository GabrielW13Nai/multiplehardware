import React from 'react'
import Home from './HomeComponents/Home'
import About from './HomeComponents/About'
import Contact from './HomeComponents/Contact'
import Reviews from './HomeComponents/Reviews'
import './App.css'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (

      <div>
        <Switch>
        <Route exact path="/"><Home /></Route>
          <Route exact path="/home"><Home /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/contacts"><Contact /></Route>
          <Route exact path="/reviews"><Reviews /></Route>

        </Switch>

      </div>
    
    
  )
}
export default App