import React from 'react'
import { watchData } from '../stores/data/watches'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'
import { useCart } from '../stores/context/CartContext'

const WatchSingle = () => {
    const {id} = useParams();
    const {addToCart} = useCart();
    const watchProduct= watchData.find((items)=>items.id  === id)
  return (
    <>
        <Navbar/>
        <div className="ind-section">
            <div className="ind-img">
                <img src={watchProduct.image} alt="watch-img" />
            </div>
            <div className="ind-details">
               <div className="id-comapany space">
                    <h2>{watchProduct.company}</h2>
                </div>
                <div className="ind-model space">
                    <h3>{watchProduct.model}</h3>
                </div>
                <div className="ind-price space">
                    <h2>{watchProduct.price}</h2>
                </div>
                <div className="ind-desc space">
                    <p>
                        {watchProduct.description}
                    </p>
                </div>
                <button onClick={()=>addToCart(watchProduct)}>Add to Cart</button>
          </div>
        </div>
    </>
  )
}

export default WatchSingle