import React from 'react'
import Button from '../Components/Button'

const Summary = () => {
  const firstName = sessionStorage.getItem('firstName')
  const lastName = sessionStorage.getItem('lastName')
  const age = sessionStorage.getItem('age')
  const country = sessionStorage.getItem('country')
  const city = sessionStorage.getItem('city')
  const zipcode = sessionStorage.getItem('zipcode')

  return (
    <>
      <div className='boxstyling'>
        <p>FirstName: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Age: {age}</p>
        <p>Country: {country}</p>
        <p>City: {city}</p>
        <p>ZipCode: {zipcode}</p>
      </div>

      <Button
        text={'Back'}
        pos={'left'}
        isdisabled={false}
        path={'/user-data'}
      />
    </>
  )
}

export default Summary
