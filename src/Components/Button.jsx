import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ text, pos, isdisabled, path }) => {
  const navigate = useNavigate()

  function routeHandler() {
    navigate(path)
  }
  return (
    <>
      <button
        className={`button-sec ${pos}`}
        type='button'
        onClick={routeHandler}
        disabled={isdisabled}
      >
        {text}
      </button>
    </>
  )
}

export default Button
