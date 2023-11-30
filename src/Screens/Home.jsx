import React, { useState } from 'react'
import InputField from '../Components/InputField'
import Button from '../Components/Button'
import { isValidInput } from '../utils/Validation'
import useSessionStorage from '../Hooks/useSessionStorage'

const Home = () => {
  const [firstName, setfirstName] = useSessionStorage('firstName', '')
  const [lastName, setlastName] = useSessionStorage('lastName', '')
  const [age, setage] = useSessionStorage('age', 0)
  const isValidFirstName = isValidInput(firstName, 'name')
  const isValidLastName = isValidInput(lastName, 'name')
  const isValidAge = isValidInput(age, 'age')

  return (
    <>
      <InputField
        inputvalue={firstName}
        setInputvalue={setfirstName}
        placeholder={'First Name'}
        type={'text'}
        valid={isValidFirstName}
      />
      <InputField
        inputvalue={lastName}
        setInputvalue={setlastName}
        placeholder={'Last Name'}
        type={'text'}
        valid={isValidLastName}
      />
      <InputField
        inputvalue={age}
        setInputvalue={setage}
        placeholder={'Age'}
        type={'number'}
        valid={isValidAge}
      />
      <Button
        text={'Next'}
        pos={'right'}
        isdisabled={
          !isValidFirstName.isValid ||
          !isValidLastName.isValid ||
          !isValidAge.isValid
        }
        path={'/user-data'}
      />
    </>
  )
}

export default Home
