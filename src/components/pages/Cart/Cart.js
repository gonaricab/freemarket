import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

const Cart = () => {
const {cart} = useContext(CartContext);
console.log(cart);
  return (
    
    <div>
        {cart.map((product)=>(
            <h1 key={product.id}>{product.title}</h1>
        ))}
    </div>
  )
}

export default Cart