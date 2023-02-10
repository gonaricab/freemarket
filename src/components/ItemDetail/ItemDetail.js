import './style.css'
import ItemCount from '../ItemCount/ItemCount';
import {useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({product}) => {
  const {addItem} = useContext(CartContext);
  const [contador, setContador] = useState(1);
  const stock = 4;
  return (
    <div className='detail'>
      <img className='image' alt={product.title} src={product.image} />
      <h2>Estos productos estan listos para tu carrito {contador}</h2>
      <h2>{product.title}</h2>
      <h3>{product.category}</h3>
      <p>{product.description}</p>
      <ItemCount contador={contador} actualizaValor={setContador} stock={stock}/>
        <div>
            <button onClick={() => addItem(product, contador)}>Agregar al carrito</button>
        </div>
    </div>
  );
};

export default ItemDetail