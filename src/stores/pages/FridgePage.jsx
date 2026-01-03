import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import {fridgeData} from "../data/fridge"
const FridgePage = () => {
  const [selectedFridge,setSelectedFridge] = useState([]);
  const companyHandler=(refridge)=>{
    if(selectedFridge.includes(refridge)){
      setSelectedFridge(selectedFridge.filter((item)=>item !== refridge))
    }else{
      setSelectedFridge([...selectedFridge,refridge])
    }
  }
const filteredFridge=selectedFridge.length === 0 ? fridgeData : fridgeData.filter((orange)=> selectedFridge.includes(orange.brand) )

  return (
    <>
      <Navbar/>
      <div className="full-page">
        <div className="pro-selected">
          {
            fridgeData.map((fridge)=>{
              return(
                <div className="pro-input">
                  <label>
                    <input type="checkbox" 
                    onChange={()=>companyHandler(fridge.brand)}/>
                    {fridge.brand}
                  </label>
                </div>
              )
            })
          }
        </div>
        <div className="pageSection">
          {
            filteredFridge.map((fridges)=>{
              return(
                <div>
                  <div className="pageImg">
                    <img src={fridges.image} alt="fridge"/>
                  </div>
                  <div className="mobile-details">
                    {fridges.brand},{fridges.model}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default FridgePage