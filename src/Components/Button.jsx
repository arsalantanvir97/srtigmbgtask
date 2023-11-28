import React from 'react'

const Button = ({ text, pos }) => {
  return (
    <>
      <button className={`button-sec ${pos}`} type='button'>
        {text}
      </button>
    </>
  )
}

export default Button
