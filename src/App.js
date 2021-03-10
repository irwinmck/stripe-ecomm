import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Pages
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Auth from './pages/auth/auth.component'

// Components
import NavBar from './components/navbar/navbar.component'

// Auth
import { auth, createUser } from './firebase/firebase.utils'

// Styles
import './App.css'

/*********************
 * MAIN APP
 ********************/
function App() {
  const [user, setUser] = useState(null)

  const authHandler = async auth => {
    if (auth) {
      const userRef = await createUser(auth)
      userRef.onSnapshot(snap => {
        const user = {
          id: snap.id,
          ...snap.data()
        }
        setUser(user)
        console.log(user)
      })
    } else {
      setUser(null)
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authHandler)
    return () => unsubscribe()
  }, [])

  return (
    <>
      <NavBar user={user} />
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
