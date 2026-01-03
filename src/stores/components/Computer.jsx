import React from 'react'
import { computerData } from '../data/computers'


const Computer = () => {
    const FirstFiveImage=computerData.slice(0,5)
  return (
   <>
    <div>
        <div className="proTitle">
            <h2>Computer</h2>
        </div>
        <div className="proSection">
            {
                FirstFiveImage.map((item)=>{
                    return(
                        <div className="imgBox">
                            <img src={item.image} alt="computer"
                            className="proImage"/>
                        </div>
                    )
                })
            }
        </div>
    </div>
   </>
  )
}

export default Computer