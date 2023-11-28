import React from 'react'

const InputField = ({ type, placeholder, inputvalue, setInputvalue }) => {
  return (
    <div>
      <div className='input-sec'>
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  )
}

export default InputField
