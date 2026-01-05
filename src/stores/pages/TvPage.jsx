import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import { tvData } from '../data/tv'
import { Link } from 'react-router-dom';

const TvPage = () => {
  const [selectedTv,setSelectedTv] = useState([]);
  const companyHandler=(product)=>{
    if(selectedTv.includes(product)){
      setSelectedTv(selectedTv.filter((item)=> item !== product))
    }else{
      setSelectedTv([...selectedTv,product])
    }
  }

  const filteredProduct = selectedTv.length === 0 ? tvData : tvData.filter((orange)=>selectedTv.includes(orange.brand))
  return (
    <>
    <Navbar/>
    <div className="full-page">
      <div  className="pro-selected">
        {
          tvData.map((tv)=>{
            return (
              <div className="pro-input">
                <label>
                  <input type="checkbox" 
                  onChange={()=>companyHandler(tv.brand)}/>
                  {tv.brand}
                </label>
              </div>
            )
          })
        }
      </div>
      <div className="pageSection">
        {
         filteredProduct.map((tvs)=>{
            return(
              <div>
                <Link to={`/tv/${tvs.id}`}>
                    <div className="pageImg">
                  <img src={tvs.image} alt="tv" />
                </div>
                <div className="mobile-details">
                  {tvs.brand},{tvs.model}
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

export default TvPage