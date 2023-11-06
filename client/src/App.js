import React from 'react'
import Home from './HomeComponents/Home'
import About from './HomeComponents/About'
import Contact from './HomeComponents/Contact'
import Reviews from './HomeComponents/Reviews'
import Admin from './Admin/Admin'
import AdminAnalytics from './Admin/AdminAnalytics'
import AdminPerfomance from './Admin/AdminPerfomance'
import AdminSettings from './Admin/AdminSettings'
import AdminItems from './Admin/AdminItems'
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
          <Route exact path="/admin"><Admin /></Route>
          <Route exact path="/adminanalytics"><AdminAnalytics /></Route>
          <Route exact path="/adminperfomance"><AdminPerfomance /></Route>
          <Route exact path="/adminsettings"><AdminSettings /></Route>
          <Route exact path="/adminitems"><AdminItems /></Route>
        </Switch>

      </div>


  )
}
export default App
