import React from 'react'
import {womanData} from "../data/womens"

const Womans = () => {
   const FirstFiveMobiles=womanData.slice(0,5)
  return (
    <>
        <div className="proTitle">
            <h2>Woman Dressing</h2>
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

export default Womans