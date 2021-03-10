import React from 'react'
import { Link } from 'react-router-dom'

// Utils
import { auth } from '../../firebase/firebase.utils'

// Styles
import './navbar.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const NavBar = ({ user }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/contact' className='option'>
          CONTACT
        </Link>
        {user ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  )
}

export default NavBar
