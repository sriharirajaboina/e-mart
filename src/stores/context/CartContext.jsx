import { useState, useEffect, createContext, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // ✅ ADD TO CART (with quantity)
  const addToCart = (products) => {
  setCartItems((prev) => {
    const existing = prev.find(
      (item) =>
        item.id === products.id &&
        item.p === products.product
    );

    if (existing) {
      return prev.map((item) =>
        item.id === products.id &&
        item.category === products.product
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...products, quantity: 1 }];
  });
};

const Increment = (id, product) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id && item.product === product
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const Decrement = (id, product) => {
  setCartItems((prev) =>
    prev
      .map((item) =>
        item.id === id && item.product === product
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};


  // ✅ REMOVE COMPLETELY
  const removeFromCart = (id, product) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(item.id === id && item.product === product)
      )
    );
  };

  // ✅ STORE IN LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, Increment, Decrement, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
