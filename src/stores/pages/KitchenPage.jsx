import React, { useState } from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';

const KitchenPage = () => {
  const [selectedKitchenProduct,setSelectedKitchenProduct] = useState([]);
  const companyHandler=(product)=>{
    if(selectedKitchenProduct.includes(product)){
      setSelectedKitchenProduct(selectedKitchenProduct.filter((item) => item !== product))
    }else{
      setSelectedKitchenProduct([...selectedKitchenProduct,product])
    }
  }

  const filteredProduct= selectedKitchenProduct.length === 0 ? kitchenData : kitchenData.filter((orange)=>selectedKitchenProduct.includes(orange.brand))
  return (
    <>
    <Navbar/>
      <div className="full-page">
        <div className="pro-selected">
          {
            kitchenData.map((kitchen)=>{
              return(
                <div className="pro-input">
                  <label>
                    <input type="checkbox" 
                    onChange={()=>companyHandler(kitchen.brand)}/>
                    {kitchen.brand}
                  </label>
                </div>
              )
            })
          }
        </div>
        <div className="pageSection">
          {
           filteredProduct.map((kitchens)=>{
              return(
                <div>
                  <Link to={`/kitchen/${kitchens.id}`}>
                    <div>
                      <img src={kitchens.image} alt="kitchen" />
                    </div>
                    <div className="mobile-details">
                      {kitchens.brand},{kitchens.model}
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

export default KitchenPage