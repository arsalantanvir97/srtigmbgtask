import React, { useState } from 'react'

const InputField = ({
  type,
  placeholder,
  inputvalue,
  setInputvalue,
  valid,
}) => {
  const [touched, setTouched] = useState(false)

  const handleInputBlur = () => {
    setTouched(true)
  }

  return (
    <>
      <div className='input-sec'>
        <input
          value={inputvalue}
          onChange={(e) => {
            setInputvalue(e.target.value)
          }}
          type={type}
          placeholder={placeholder}
          onBlur={handleInputBlur}
          style={{ borderColor: touched && !valid.isValid ? 'red' : '' }}
        />
        {touched && !valid.isValid && (
          <p style={{ color: 'red' }}>{valid.message}</p>
        )}
      </div>
    </>
  )
}

export default InputField
