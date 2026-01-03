import React from 'react'
import {menData} from "../data/mens"

const Mens = () => {
   const FirstFiveMobiles=menData.slice(0,5)
  return (
    <>
        <div className="proTitle">
            <h2>Men Fashion</h2>
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

export default Mens