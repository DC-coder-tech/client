import React from 'react'

const Button = ({
    label = 'Button',
    type = 'button',
    className = '',
    disabled=false
}) => {
  return (
    <div>
          <button type={type} className={`bg-buttonColor hover:bg-buttonHower text-white font-bold py-2 px-4 rounded-lg ${className}`} disabled={disabled}>
              {label}
          </button>
    </div>
  )
}

export default Button
