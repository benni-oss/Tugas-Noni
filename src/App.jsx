import { useState } from 'react'
import Header from './components/Header/header'
import './App.css'
import HomePage from './components/Home/Home_Page'
import BodyPage from './BodyPage/BodyPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HeadBar from './components/Headbar/HeadBar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header/>
            <div className='min-h-screen w-full' style={{
            background: 'linear-gradient(to right, #FFF5F5, #ABE2E4, #05787D, #144A4C)'
        }}>
            <HomePage  />
            
            </div>
            <BodyPage/>
            <Footer/>
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
