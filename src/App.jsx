import { useState } from 'react'
import Header from './components/Header1/header'
import './App.css'
import HomePage from './components/Home/Home_Page'
import BodyPage from './components/Home/BodyPage'
import '@fontsource/dm-serif-display/400.css'
import '@fontsource/dm-serif-display/400-italic.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Footer from './components/Footer/Footer'
import Intro_page from './components/Intro_page/Intro_page'
import Values from './components/Values/Values'
import Innoinher from './components/Innoinher/Innoinher'
import Layout from './components/layout/Layout'
import Color from './components/Color/Color'
import Text from './components/Text/Text'
import Icon from './components/Icon/Icon'

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header/>
            <HomePage  />
            <BodyPage/>
            <Footer/>
          </>
        } />
        <Route path="/introduction" element={<>
        <Header/>
        <Intro_page/>
        <Footer/>
        </>
        
      } />
       <Route path="/values" element={<>
        <Header/>
        <Values/>
        <Footer/>
        </>
        
      } />
            <Route path="/innoinher" element={<>
        <Header/>
        <Innoinher/>
        <Footer/>
        </>
        
      } />

       <Route path="/layout" element={<>
        <Header/>
        <Layout/>
        <Footer/>
        </>
        
      } />
        <Route path="/color" element={<>
        <Header/>
        <Color/>
        <Footer/>
        </>
        
      } />
       <Route path="/text" element={<>
        <Header/>
        <Text/>
        <Footer/>
        </>
        
      } />
       <Route path="/icon" element={<>
        <Header/>
        <Icon/>
        <Footer/>
        </>
        
      } />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
