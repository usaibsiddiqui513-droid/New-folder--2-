"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Load cart from localStorage once on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("nexastore_cart");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setCart(parsed);
        }
      }
    } catch (err) {
      console.warn("Failed to load cart from localStorage", err);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save cart to localStorage whenever it changes after initial load
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("nexastore_cart", JSON.stringify(cart));
    } catch (err) {
      console.warn("Failed to save cart to localStorage", err);
    }
  }, [cart, isLoaded]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 2500);
  };

  const addToCart = (product, quantity = 1) => {
    if (!product || quantity <= 0) return;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingIndex] = {
          ...newCart[existingIndex],
          quantity: newCart[existingIndex].quantity + quantity,
        };
        return newCart;
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            category: product.category,
            image: product.image,
            quantity: quantity,
            rating: product.rating,
          },
        ];
      }
    });

    showToast(`Added ${quantity > 1 ? `${quantity}x ` : ""}"${product.name}" to your cart`);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    showToast("Item removed from your cart");
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    try {
      localStorage.removeItem("nexastore_cart");
    } catch (e) {
      // ignore
    }
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoaded,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        toastMessage,
        setToastMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
