import { useState } from "react";
import { CartContext } from "./CartContext";


const CartProvider = ({children}) => {
const [cart, setCart] = useState([]);
const addItem = (item,quantity) => {
  const newProduct = {
    id: item.id,
    name: item.title,
    price: item.price,
    quantity: quantity,
    cateogry: item.cateogry
  };
  setCart([...cart, newProduct]);
  
};

  const clear = () => {
    setCart([])
  }

  const removeItem = (id) =>{
    
  }
  return (
   <CartContext.Provider value={{cart, addItem}}>
    {children}
   </CartContext.Provider>
  )
}

export default CartProvider