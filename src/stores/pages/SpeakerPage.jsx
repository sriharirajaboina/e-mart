import React, { useState } from 'react'
import { speakerData } from '../data/speakers'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


const SpeakerPage = () => {
  const [selectedSpeaker,setSelectedSpeaker] = useState([]);
  const companyHandler=(product)=>{
    if(selectedSpeaker.includes(product)){
      setSelectedSpeaker(selectedSpeaker.filter((item) => item !== product))
    }else{
      setSelectedSpeaker([...selectedSpeaker,product])
    }
  }

  const filteredProduct= selectedSpeaker.length === 0 ? speakerData : speakerData.filter((orange)=> selectedSpeaker.includes(orange.brand))
  return (
    <>
      <Navbar/>
      <div className="full-page">
        <div className="pro-selected">
          {
            speakerData.map((speaker)=>{
              return(
                <div className="pro-input">
                  <label>
                    <input type="checkbox" 
                    onChange={()=>companyHandler(speaker.brand)}/>
                    {speaker.brand}
                  </label>
                </div>
              )
            })
          }
        </div>
        <div className="pageSection">
          {
            filteredProduct.map((item)=>{
              return(
                <div>
                 <Link to={`/speakers/${item.id}`}>
                     <div>
                        <img src={item.image} alt="speaker"/>
                      </div>
                      <div className="mobile-details">
                        {item.brand},{item.model}
                      </div>
                 </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default SpeakerPage