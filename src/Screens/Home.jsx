import React from 'react'
import InputField from '../Components/InputField'
import Button from '../Components/Button'

const Home = () => {
  return (
    <>
      <InputField placeholder={'First Name'} type={'text'} />
      <InputField placeholder={'Last Name'} type={'text'} />
      <InputField placeholder={'Age'} type={'number'} />
      <Button text={'Next'} pos={'right'} />
    </>
  )
}

export default Home
