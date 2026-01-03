import React,{useState} from 'react'
import Navbar from "../components/Navbar"
import { menData } from '../data/mens'
import { Link } from 'react-router-dom';

const MensPages = () => {
  const [selectedClothes,setSelectedClothes] = useState([]);
  const companyHandler=(menswere)=>{
    if(selectedClothes.includes(menswere)){
      setSelectedClothes(selectedClothes.filter((item)=> item !== menswere))
    }
    else{
      setSelectedClothes([...selectedClothes,menswere])
  }
  }

  const filtedClothesProduct=selectedClothes.length === 0 ? menData : menData.filter((ornage)=>selectedClothes.includes(ornage.brand))

  return (
    <>
      <Navbar/>
      <div className="full-page"> 
        <div className="pro-selected">
          {
            menData.map((clothes)=>{
              return(
                <div className="pro-input">
                  <label>
                    <input type="checkbox" 
                    onChange={()=>companyHandler(clothes.brand)}/>
                    {clothes.brand}
                  </label>
                </div>
              )
            })
          }
        </div>
        <div className="pageSection">
          {
            filtedClothesProduct.map((cloth)=>{
              return(
                <div>
                  <Link to={`/menswere/${cloth.id}`}>
                    <div >
                    <img src={cloth.image} alt="mens-cloth" />
                  </div>
                  <div className="mobile-details">
                    {cloth.brand},{cloth.model}
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

export default MensPages