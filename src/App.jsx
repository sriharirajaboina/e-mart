import React from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import LandingPage from "./stores/pages/LandingPage"
import MobilePage from './stores/pages/MobilePage'
import MobileSingle from './single/MobileSingle'
import UserCart from './stores/userCart'
import ComputerPage from './stores/pages/ComputerPage'
import ComputerSingle from './single/ComputerSingle'
import WatchPages from "./stores/pages/WatchPages"
import MensPage from "./stores/pages/MensPages"
import WomanPage from "./stores/pages/WomanPage"
import FurniturePage from "./stores/pages/FurniturePage"
import AcPage from "./stores/pages/AcPage"
import KitchenPage from './stores/pages/KitchenPage'
import FridgePage from './stores/pages/FridgePage'
import SpeakerPage from './stores/pages/SpeakerPage'
import TvPage from './stores/pages/TvPage'
import WatchSingle from './single/WatchSingle'
import MenSingle from './single/MenSingle'
import WomanSingle from './single/WomanSingle'
import FurnitureSingle from './single/FurnitureSingle'
import AcSingle from './single/AcSingle'
import FridgeSingle from './single/FridgeSingle'
import KitchenSingle from './single/KitchenSingle'
import TcSingle from './single/TcSingle'
import SpeakerSingle from './single/SpeakerSingle'
import SignUp from './signForm/SignUp'
import SignIn from './signForm/SignIn'


function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={ <LandingPage/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/mobiles" element={<MobilePage/>} />
            <Route path="/mobiles/:id" element={<MobileSingle/>}/>
          <Route path="/computers" element={<ComputerPage/>}/>
            <Route path="/computer/:id" element={<ComputerSingle/>}/>
          <Route path="/watches" element={<WatchPages/>} />
            <Route path="/watches/:id" element={<WatchSingle/>} />
          <Route path="/mens" element={<MensPage/>} />
            <Route path="/menswere/:id" element={<MenSingle/>} />
          <Route path="/woman" element={<WomanPage/>} />
            <Route path="/woman/:id" element={<WomanSingle/>}/>
          <Route path="/furniture" element={<FurniturePage/>} />
            <Route path="/furniture/:id" element={<FurnitureSingle/>}/>
          <Route path="/ac" element={<AcPage/>} />
            <Route path="/ac/:id" element={<AcSingle/>}/>
          <Route path="/kitchen" element={<KitchenPage/>} />
            <Route path="/kitchen/:id" element={<KitchenSingle/>} />
          <Route path="/fridges" element={<FridgePage/>} />
            <Route path="/fridge/:id" element={<FridgeSingle/>} />
          <Route path="/speakers" element={<SpeakerPage/>} />
            <Route path="/speakers/:id" element={<SpeakerSingle/>} />
          <Route path="/tv" element={<TvPage/>} />
            <Route path="/tv/:id" element={<TcSingle/>} />
            <Route path="/cart" element={<UserCart/>}/>
        </Routes>
       
      </div>
    
    </>
  )
}

export default App
