import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Pages
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Auth from './pages/auth/auth.component'

// Components
import NavBar from './components/navbar/navbar.component'

// Styles
import './App.css'

/**
 * MAIN APP
 */
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/'><HomePage /></Route>
        <Route path='/shop'><ShopPage /></Route>
        <Route path='/signin'><Auth /></Route>
        <Redirect to='/' />
      </Switch>
    </>
  )
}

export default App
