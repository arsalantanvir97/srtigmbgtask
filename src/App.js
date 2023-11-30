import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Screens/Home'
import UserData from './Screens/UserData'
import Summary from './Screens/Summary'

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/user-data' element={<UserData />}></Route>
          <Route path='/summary' element={<Summary />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
