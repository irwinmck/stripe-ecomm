import React, { useState } from 'react'

// Styles
import './sign-in.styles.scss'

// Components
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

const SignIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const updateUser = e => {
    const { value, name } = e.target
    // have to spread first, then update
    setUser({ ...user, [name]: value })
  }

  const signIn = e => {
    e.preventDefault()
    console.log('Signing in...')
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account.</h2>
      <span>Sign in with your email and password!</span>

      <form onSubmit={signIn}>
        <FormInput
          name='email'
          type='email'
          value={user.email}
          handleChange={updateUser}
          label='Email'
          required
        />

        <FormInput
          name='password'
          type='password'
          value={user.password}
          handleChange={updateUser}
          label='Password'
          required
        />

        <CustomButton type='submit'>Sign In</CustomButton>
      </form>
    </div>
  )
}

export default SignIn
