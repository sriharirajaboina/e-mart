import React from 'react'
import { mobileData } from "../data/mobile"
const Mobile = () => {
    const FirstFiveMobiles=mobileData.slice(0,5)
  return (
    <>
        <div className="proTitle">
            <h2>Mobiles</h2>
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

export default Mobile