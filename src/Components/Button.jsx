import React from 'react'

const Button = ({ text, pos, isdisabled }) => {
  function hell() {
    console.log('helllo')
  }
  return (
    <>
      <button
        className={`button-sec ${pos}`}
        type='button'
        onClick={hell}
        disabled={isdisabled}
      >
        {text}
      </button>
    </>
  )
}

export default Button
