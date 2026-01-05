import React from "react";
import Navbar from "../stores/components/Navbar";
import { computerData } from "../stores/data/computers";
import { useParams } from "react-router-dom";
import { useCart } from "../stores/context/CartContext";

const ComputerSingle = () => {
  const { id } = useParams();

  const {addToCart} = useCart();

  const computerProduct = computerData.find(
    (item) => item.id === id
  );

  if (!computerProduct) {
    return (
      <>
        <Navbar />
        <h2 style={{ textAlign: "center" }}>
          Product not found
        </h2>
      </>
    );
  }

  return (
    <>
      <Navbar />
        <div className="ind-section">
          <div className="ind-img">
            <img
              src={computerProduct.image}
              alt="single-computer"
            />
          </div>

          <div className="ind-details">
               <div className="id-comapany space">
                    <h2>{computerProduct.company}</h2>
                </div>
                <div className="ind-model space">
                    <h3>{computerProduct.model}</h3>
                </div>
                <div className="ind-price space">
                    <h2>{computerProduct.price}</h2>
                </div>
                <div className="ind-desc space">
                    <p>
                        {computerProduct.description}
                    </p>
                </div>
                <button onClick={()=>addToCart(computerProduct)}>Add to Cart</button>
          </div>
        </div>
    </>
  );
};

export default ComputerSingle;
