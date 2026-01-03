import React from 'react'
import { acData } from '../data/ac'

const Ac = () => {
  const FirstFiveWaches=acData.slice(0,5)
    return (
      <>
        <div className="proTitle">
          <h2>AC's</h2>
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

export default Ac