import React from 'react'
import { fridgeData } from '../data/fridge'

const Fridge = () => {
  const FirstFiveWaches=fridgeData.slice(0,5)
  return (
    <>
      <div className="proTitle">
        <h2>Fridges</h2>
      </div>
      <div className="proSection">
        {
          FirstFiveWaches.map((item)=>{
            return(
              <div className="imgBox">
                <img src={item.image} alt="watch"
                className="proImg"/>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Fridge