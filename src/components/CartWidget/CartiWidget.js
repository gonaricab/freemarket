import { useContext, useEffect,useState} from 'react'
import { CartContext } from '../../context/CartContext';
import './styles.css'
const CartiWidget = () => {
const {cart} = useContext(CartContext);
const [total, setTotal] = useState(0)
  
useEffect(() =>{
  setTotal(
    cart?.reduce((prev, curr)=> {
      console.log(prev,curr);
      return prev + curr.quantity;
    }, 0) 
  );
},[cart])
 
  return (
    <div>
        {total}
        <img className='imagenCarrito' alt="carrito" src="/images/carrito.png"/>
    </div>
  )
}

export default CartiWidget