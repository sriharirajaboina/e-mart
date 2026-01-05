import React from 'react';
import { useCart } from './context/CartContext';
import Navbar from "../stores/components/Navbar";

const UserCart = () => {
  const { cartItems, Increment, Decrement, removeFromCart } = useCart();

  
  const totalCartPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      {cartItems.length === 0 ? (
        <h2>Empty Product</h2>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-section">
              <div className="cart-img">
                <img src={item.image} alt={item.product} />
              </div>

              <div className="cart-details">
                <h3>{item.product}</h3>
                <h3>{item.model}</h3>
                <h2>Price: ₹{item.price}</h2>
                <h3>Total: ₹{item.price * item.quantity}</h3>
              </div>

              <div className="quantity">
                <span
                  className="decrement"
                  onClick={() => Decrement(item.id,item.product)}
                >
                  −
                </span>
                <span className="counts">{item.quantity}</span>
                <span
                  className="increment"
                  onClick={() => Increment(item.id,item.product)}
                >
                  +
                </span>
              </div>

              <button onClick={() => removeFromCart(item.id,item.product)}>
                Remove From Cart
              </button>
            </div>
          ))}

          <h2>Total Cart Price: ₹{totalCartPrice}</h2>
        </>
      )}
    </>
  );
};

export default UserCart;
