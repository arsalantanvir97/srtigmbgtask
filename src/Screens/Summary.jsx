import React from 'react'
import Button from '../Components/Button'

const Summary = () => {
  return (
    <>
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
