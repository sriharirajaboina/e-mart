import React, { useState } from 'react'
import { furnitureData } from '../data/furniture'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const FurniturePage = () => {
  const [selectedFurniture,setSelectedFurniture]=useState([]);
  const companyHandler=(products)=>{
    if(selectedFurniture.includes(products)){
      setSelectedFurniture(selectedFurniture.filter((item)=> item !== products))
    }else{
      setSelectedFurniture([...selectedFurniture,products])
    }
  }

  const filteredProduct=selectedFurniture.length ==0 ? furnitureData : furnitureData.filter((orange)=> selectedFurniture.includes(orange.brand))
  return (
   <>
   <Navbar/>
    <div className="full-page">
      <div className="pro-selected">
        {
          furnitureData.map((furniture)=>{
            return(
              <div className="pro-input">
                <label>
                  <input type="checkbox" 
                  onChange={()=>companyHandler(furniture.brand)}/>
                  {furniture.brand}
                </label>
              </div>
            )
          })
        }
      </div>
      <div className="pageSection">
        {
          filteredProduct.map((furnitures)=>{
            return(
              <div>
                <Link to={`/furniture/${furnitures.id}`}>
                  <div>
                  <img src={furnitures.image} alt="furniture"/>
                </div>
                <div className="mobile-details">
                  {furnitures.brand},{furnitures.model}
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

export default FurniturePage