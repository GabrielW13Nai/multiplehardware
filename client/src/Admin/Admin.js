import React from 'react'
import Navigation from '../Cards/Navigation'
import './Admin.css'
import AdminAnalytics from './AdminAnalytics'
import AdminPerfomance from './AdminPerfomance'
import AdminSettings from './AdminSettings'
import AdminItems from './AdminItems'
import { Switch, Route } from 'react-router-dom'
import AdminNavigation from './AdminNavigation'

const Admin = () => {

  return (
    <>
      <Navigation />
      <div className='admin-main'>
      <AdminNavigation />

        <div>
        <Switch>
          <Route exact path="/adminanalytics"><AdminAnalytics /></Route>
          <Route exact path="/adminperfomance"><AdminPerfomance /></Route>
          <Route exact path="/adminsettings"><AdminSettings /></Route>
          <Route exact path="/adminitems"><AdminItems /></Route>

        </Switch>

        </div>

        <div className='admin-main-sect'>
          <div className='analytics-earnings'>
            <div className='analytics'>
              <h3>Website Analytics</h3>
            </div>
            <div className='earnings'>
              <h3>Earnings</h3>
            </div>
          </div>

        </div>
        <div className='admin-details'>

        </div>

      </div>
    </>

  )
}

export default Admin
