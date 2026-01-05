import React, { useState } from 'react'
import { womanData } from '../data/womens'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';

const WomanPage = () => {
  const [selectedwomanProduct,setSelectedwomanProduct] = useState([]);
  const companyHandler=((products)=>{
    if(selectedwomanProduct.includes(products)){
      setSelectedwomanProduct(selectedwomanProduct.filter((item)=> item !== products))
    }else{
      setSelectedwomanProduct([...selectedwomanProduct,products])
    }
  })
  const filteredProduct=selectedwomanProduct.length ===0 ? womanData : womanData.filter((ornage)=>selectedwomanProduct.includes(ornage.brand))
  return (
    <>
      <Navbar/>
      <div className="full-page">
        <div className="pro-selected">
            {
              womanData.map((woman)=>{
                return(
                  <div className="pro-input">
                    <label>
                      <input type="checkbox" 
                      onChange={()=>companyHandler(woman.brand)}/>
                      {woman.brand}
                    </label>
                  </div>
                )
              })
            }
        </div>
        <div className="pageSection">
            {
              filteredProduct.map((womans)=>{
                return(
                  <div>
                    <Link to={`/woman/${womans.id}`}>
                       <div>
                          <img src={womans.image}  alt="womansClothes"/>
                        </div>
                        <div className="mobile-details">
                          {womans.brand},{womans.model}
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

export default WomanPage