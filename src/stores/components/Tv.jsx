import React from 'react'
import {tvData} from "../data/tv"

const Tv = () => {
   const FirstFiveMobiles=tvData.slice(0,5)
  return (
    <>
        <div className="proTitle">
            <h2>TV's</h2>
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

export default Tv