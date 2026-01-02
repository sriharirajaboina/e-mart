import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import { mobileData } from '../data/mobile'
import { Link } from 'react-router-dom'

const MobilePage = () => {

    const [selectedProduct,setSelectedProduct]=useState([])
    const companyHandler=(phones)=>{
        if(selectedProduct.includes(phones)){
            setSelectedProduct(selectedProduct.filter(item => item !== phones))
        }else{
            setSelectedProduct([...selectedProduct,phones])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? 
        mobileData : mobileData.filter((orange)=>selectedProduct.includes(orange.company))

  return (
    <>  
            <Navbar/>
            <div className="full-page">
                <div className="pro-selected">
                {
                    mobileData.map((phone)=>{
                        return(
                            <div className="pro-input">
                                <label>
                                    <input type="checkbox" 
                                    checked={selectedProduct.includes(phone.company)}
                                    onChange={()=>companyHandler(phone.company)}
                                    />
                                    {phone.company}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
            <div className="pageSection">
                {filteredProduct.map((item)=>{
                    return(
                        <div>
                            <Link to={`/mobiles/${item.id}`}>
                                <div className="pageImg">
                                    <img src={item.image} alt="mobiles-page"/>
                                </div>
                                <div className="mobile-details">
                                    {item.company},{item.model}
                                </div>
                            </Link>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default MobilePage