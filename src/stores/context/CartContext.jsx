import { useState,useEffect,createContext,useContext } from "react";

const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });


    const addToCart=(item)=>{
        setCartItems((prev)=>[...prev,item])
    }
    const removeFromCart=(item)=>{
        setCartItems((prev)=>prev.filter((apple)=>apple !== item));
    }

      useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
    return (
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext);