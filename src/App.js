import React from 'react'
import Home from './Pages/Home'
import ShowJob from './Pages/ShowJob'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail' element={<ShowJob />} />
    </Routes>
  )
}

export default App
