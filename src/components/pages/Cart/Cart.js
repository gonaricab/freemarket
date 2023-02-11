import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
const {cart, removeItem, clear} = useContext(CartContext);

if(cart.lenght === 0) {
  return <h1>No hay productos en tu carrito</h1>
}

  return (
    <div style={{padding: "10px", widows:"500px"}}>
      <ul style={{listStyle: "none"}}>
        {cart.map((product)=>(   
          <li key={product.id}>
            <div style={{display:"flex",  flexDirection:"column", justifyContent:"space-between"}}>
            <img alt={product.id} src={ `/images/${product.image}`} width="50px"></img>
            <h4>{product.description}</h4>
            <h4>Categoria:{product.category}</h4>
            <h4>Cantidad:{product.quantity}</h4>
            <h4>Precio:{product.price}</h4>
            <button onClick={()=> removeItem(product.id)} style={{height:"40px"}}>Eliminar del carrito</button>
            </div>
          </li> 

        ))}
      </ul>
      { <div style={{marginTop:"150px"}}>
        <button onClick={() =>clear()}>Vaciar Carrito</button>
      </div>}  
    </div>
  )
}

export default Cart