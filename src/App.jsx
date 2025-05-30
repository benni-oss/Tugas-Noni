import { useState } from 'react'
import Header from './Header/header'
import './App.css'
import HomePage from './HomePage/HomePage'
import BodyPage from './BodyPage/BodyPage'
import EndPage from './EndPage/EndPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HeadBar from './Documentation/HeadBar/HeadBar'

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header/>
            <div className='min-h-screen w-full mt-14' style={{
            background: 'linear-gradient(to right, #FFF5F5, #ABE2E4, #05787D, #144A4C)'
        }}>
            <HomePage  />
            
            </div>
            <BodyPage/>
            <EndPage/>
          </>
        } />
        <Route path="/documentation" element={<>
        
          <Header/>
        
        
        </>
      } />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
