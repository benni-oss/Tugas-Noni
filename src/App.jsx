import { useState } from 'react'
import Header, { Header1 } from './components/Header1/Header1'
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
import Stepbar from './components/Stepbar/Stepbar'
import Tools from './components/Tools/Tools'
import Contact from './components/Contact/Contact'

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header1/>
            <HomePage  />
            <BodyPage/>
            <Footer/>
          </>
        } />
        <Route path="/introduction" element={<>
        <Header1/>
        <Intro_page/>
        <Footer/>
        </>
        
      } />
       <Route path="/values" element={<>
        <Header1/>
        <Values/>
        <Footer/>
        </>
        
      } />
            <Route path="/innoinher" element={<>
        <Header1/>
        <Innoinher/>
        <Footer/>
        </>
        
      } />

       <Route path="/layout" element={<>
        <Header1/>
        <Layout/>
        <Footer/>
        </>
        
      } />
        <Route path="/color" element={<>
        <Header1/>
        <Color/>
        <Footer/>
        </>
        
      } />
       <Route path="/text" element={<>
        <Header1/>
        <Text/>
        <Footer/>
        </>
        
      } />
       <Route path="/icon" element={<>
        <Header1/>
        <Icon/>
        <Footer/>
        </>
        
      } />

      <Route path="/stepbar" element={<>
        <Header1/>
        <Stepbar/>
        <Footer/>
        </>
        
      } />

      <Route path="/tools" element={<>
        <Header1/>
        <Tools/>
        <Footer/>
        </>
        
      } />

            <Route path="/contact" element={<>
        <Header1/>
        <Contact/>
        <Footer/>
        </>
        
      } />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
