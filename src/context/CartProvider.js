import { useState } from "react";
import { CartContext } from "./CartContext";


const CartProvider = ({children}) => {
const [cart, setCart] = useState([]);

const addItem = (item,quantity) => {
  if (isInCart(item.id)) {
    alert("El producto ya se agregó al carrito")
  }
  else {
    const newProduct = {
      id: item.id,
      name: item.title,
      price: item.price,
      quantity: quantity,
      category: item.categoryid,
      description: item.description,
      image: item.imageid
    };
    setCart([...cart, newProduct]);
  };
 
};

  const removeItem = (productId) =>{
    setCart(cart.filter((product) => product.id !== productId))
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id  === id)
  };

  const clear = () => {
    setCart([])
  };

  return (
   <CartContext.Provider value={{cart, addItem, clear, removeItem}}>
    {children}
   </CartContext.Provider>
  )
}

export default CartProvider