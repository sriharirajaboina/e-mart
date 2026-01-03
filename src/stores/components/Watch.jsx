import React from 'react'
import { watchData } from '../data/watches'

const Watch = () => {
  const FirstFiveWaches=watchData.slice(0,5)
  return (
    <>
      <div className="proTitle">
        <h2>Watches</h2>
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

export default Watch