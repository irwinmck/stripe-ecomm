import React from 'react'

// Styles
import './custom-button.styles.scss'

const CustomButton = ({ children, ...rest }) => {
  return (
    <button className='custom-button' {...rest}>
      {children}
    </button>
  )
}

export default CustomButton
