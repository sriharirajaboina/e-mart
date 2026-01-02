import React from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import LandingPage from "./stores/pages/LandingPage"
import MobilePage from './stores/pages/MobilePage'
import MobileSingle from './single/MobileSingle'
function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={ <LandingPage/>} />
          <Route path="/mobiles" element={<MobilePage/>} />
            <Route path="/mobiles/:id" element={<MobileSingle/>}/>
        </Routes>
       
      </div>
    
    </>
  )
}

export default App
