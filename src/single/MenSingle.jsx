import React from 'react'
import { useParams } from 'react-router-dom'
import { menData } from '../stores/data/mens';
import Navbar from '../stores/components/Navbar';

const MenSingle = () => {
    const {id} = useParams();
    const mensProduct=menData.find((items)=> items.id === id);
  return (
    <>
    <Navbar/>
        <div className="ind-section">
        <div className="ind-img">
            <img src={mensProduct.image} alt="mens-were" />
        </div>
        <div className="ind-details">
                <div className="id-comapany space">
                    <h2>{mensProduct.company}</h2>
                </div>
                <div className="ind-model space">
                    <h3>{mensProduct.model}</h3>
                </div>
                <div className="ind-price space">
                    <h2>{mensProduct.price}</h2>
                </div>
                <div className="ind-desc space">
                    <p>
                        {mensProduct.description}
                    </p>
                </div>
                <button >Add to Cart</button>
            </div> 
        </div>
    </>
    
  )
}

export default MenSingle