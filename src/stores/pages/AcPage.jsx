import React from 'react'
import Navbar from '../components/Navbar'
import { acData } from '../data/ac'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const AcPage = () => {
  const [selectedAc,setSelectedAc]=useState([]);
  const companyHandler=(acProducts)=>{
    if(selectedAc.includes(acProducts)){
      setSelectedAc(selectedAc.filter((item)=>item !== acProducts))
    }else{
      setSelectedAc([...selectedAc,acProducts])
    }
  }
  const filteredAcProducts= selectedAc.length === 0 ? acData : acData.filter((orange)=>selectedAc.includes(orange.company))
  return (
    <>
      <Navbar/>
      <div className="full-page">
        <div className="pro-selected">
          {
            acData.map((ac)=>{
              return(
                <div className="pro-input">
                  <label>
                    <input type="checkbox"
                    onChange={()=>companyHandler(ac.company)}/>
                    {ac.company}
                  </label>
                </div>
              )
            })
          }
        </div>
        <div className="pageSection">
            {
              filteredAcProducts.map((acs)=>{
                return(
                  <div>
                    <Link to={`/ac/${acs.id}`}>
                      <div className="pageImg">
                      <img src={acs.image} alt="woman-images" />
                    </div>
                    <div className="mobile-details">
                      {acs.company},{acs.model}
                    </div>
                    </Link>
                  </div>
                )
              })
            }
        </div>
      </div>
    </>
  )
}

export default AcPage