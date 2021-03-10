import React from 'react'

// Styles
import './custom-button.styles.scss'

const CustomButton = ({ children, google, ...rest }) => {
  return (
    <button className={`${google && 'google'} custom-button`} {...rest}>
      {children}
    </button>
  )
}

export default CustomButton
