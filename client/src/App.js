import React from 'react'
import Layout from './Components/Layout'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Layout />
      </div>
    </BrowserRouter>
    
  )
}
export default App