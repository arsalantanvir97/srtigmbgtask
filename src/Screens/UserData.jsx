import React, { useState } from 'react'
import { countryList } from '../utils/countries'
import InputField from '../Components/InputField'
import { isValidInput } from '../utils/Validation'
import Button from '../Components/Button'

const UserData = () => {
  const [country, setcountry] = useState('')
  const [city, setcity] = useState('')
  const [zipcode, setzipcode] = useState(0)
  const isValidCity = isValidInput(city, 'city')
  const isValidZipCode = isValidInput(zipcode, 'zipcode')
  return (
    <>
      <div className='input-sec'>
        <select
          placeholder='Select a country'
          value={country}
          onChange={(e) => {
            setcountry(e.target.value)
          }}
        >
          <option>Select a country</option>
          {countryList?.length > 0 &&
            countryList?.map((count, index) => (
              <option key={index} value={JSON.stringify(count)}>
                {count}
              </option>
            ))}
        </select>
      </div>
      <InputField
        inputvalue={city}
        setInputvalue={setcity}
        placeholder={'City'}
        type={'text'}
        valid={isValidCity}
      />
      <InputField
        inputvalue={zipcode}
        setInputvalue={setzipcode}
        placeholder={'Zipcode'}
        type={'number'}
        valid={isValidZipCode}
      />
      <Button text={'Back'} pos={'left'} isdisabled={false} path={'/'} />
      <Button
        text={'Next'}
        pos={'right'}
        isdisabled={
          country.length === 0 ||
          !isValidCity.isValid ||
          !isValidZipCode.isValid
        }
        path={'/summary'}
      />
    </>
  )
}

export default UserData
