import React from "react"
import {useParams} from "react-router-dom"
import {tvData} from "../stores/data/tv"
import Navbar from '../stores/components/Navbar'
import { useCart } from "../stores/context/CartContext"

const TcSingle = () => {
  const {id} = useParams();
  const {addToCart} = useCart();
    const Products= tvData.find((apple)=> apple.id == Number(id));
  return (
    <>
    <Navbar/>
    <div className="ind-section">
        <div className="ind-img">
            <img src={Products.image} alt="tv" />
        </div>
        <div className="ind-details">
            <div className="id-comapany space">
                <h2>{Products.brand}</h2>
            </div>
             <div className="ind-model space">
                <h2>{Products.model}</h2>
            </div>
             <div className="ind-price space">
                <h2>{Products.price}</h2>
            </div>
             <div  className="ind-desc space">
                <p>{Products.description}</p>
            </div>
            <button onClick={()=>addToCart(Products)}>Add to Cart</button>
        </div>
    </div>
    </>
  )
}

export default TcSingle