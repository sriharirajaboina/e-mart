import React from 'react'
import {speakerData} from "../data/speakers"

const Speakers = () => {
   const FirstFiveMobiles=speakerData.slice(0,5)
  return (
    <>
        <div className="proTitle">
            <h2>Speakers</h2>
        </div>
        <div className="proSection">
        {
            FirstFiveMobiles.map((item)=>{
                return(
                    <div className="imgBox">
                        <img src={item.image} alt="mobile-img"
                        className="proImage"/>
                    </div>
                )
            })
        }
        </div>
    </>
  )
}

export default Speakers