import React from 'react'
import {kitchenData} from "../data/kitchen"

const Kitchen = () => {
   const FirstFiveMobiles=kitchenData.slice(0,5)
  return (
    <>
        <div className="proTitle">
            <h2>Kitchen</h2>
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

export default Kitchen