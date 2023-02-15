import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { collection, addDoc, getFirestore, doc, updateDoc} from "firebase/firestore";

const Cart = () => {
const [formValue, setFormValue] = useState({
  name: "", 
  phone:"", 
  email:"",
});
const {cart, removeItem, clear} = useContext(CartContext);
const [order, setOrder] = useState({});
const db = getFirestore();

useEffect (() => {
  setOrder(
    {
    buyer:{
      name:"Diego Franco",
      phone:"541234122",
      email: "tessst@test.com"
    },
      item: cart.map((product) => {
        const {name, price, id} =product;
        return{name,price,id};
      }),
      total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0 ),
    }
  )
}, [cart]);

if(cart.lenght === 0) {
  return <h1>No hay productos en el carrito</h1>
}


const createOrder = (event) => {
  event.preventDefault();
  const db = getFirestore();
  const querySnapshot = collection(db, "orders");
  const currentOrder = {...order, buyer: formValue,}

  addDoc(querySnapshot, currentOrder)
  .then ((response) => {
    console.log(response)
    updateStockProducts();
     alert("Orden creada con éxito, id" + response.id)
  })
  .catch(error => console.log("error"))
};

const updateStockProducts = () => {
  cart.forEach ((product) => {
  const querySnapshot = doc(db,"products", product.id)
  updateDoc(querySnapshot,{
    stock:product.stock - product.quantity
  })
  .then(()=>{
    console.log("el producto actualizó su stock")
  })
  .catch((error) => console.log(error))
  })
  clear();
};

const handleInput = (event) => {

  setFormValue({
    ...formValue,
    [event.target.name]: event.target.value,
    
  })
} 

  return (
    
    <div style={{display:"flex", flexDirection:"row"}}>
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
            <h4>Stock: {product.stock}</h4>
            <button onClick={()=> removeItem(product.id)} style={{height:"40px"}}>Eliminar del carrito</button>
            </div>
          </li> 

        ))}
      </ul>
      <div style={{marginTop:"150px"} }  >
        <button onClick={() =>clear()}>Vaciar Carrito</button>
      </div> 
     
    </div>
    <div style={{padding: "70px"}}>
      <form style={{display:"flex", flexDirection:"column"}}>
        <input  value={formValue.name} name="name" type="text" placeholder="name" style={{margin: "10px"}} onChange={handleInput}/>
        <input  value={formValue.phone} name="phone" type="text" placeholder="phone" style={{margin: "10px"}} onChange={handleInput}/>
        <input  value={formValue.email} name="email" type="text" placeholder="email" style={{margin: "10px"}} onChange={handleInput}/>
        <div style={{marginTop:"20px"} }>
        <button onClick={ createOrder}>Crear orden</button>
      </div> 
      </form>
    </div>
    </div>
   
  )
}

export default Cart;