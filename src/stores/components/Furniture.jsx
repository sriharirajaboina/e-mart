import React from 'react'
import {furnitureData} from "../data/furniture"

const Furniture = () => {
   const FirstFiveMobiles=furnitureData.slice(0,5)
    return (
      <>
          <div className="proTitle">
              <h2>Furniture</h2>
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

export default Furniture