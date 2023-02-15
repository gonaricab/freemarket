import './style.css'
import ItemCount from '../ItemCount/ItemCount';
import {useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({product}) => {
  const {addItem} = useContext(CartContext);
  const [contador, setContador] = useState(1);
 
  return (
    <div className='detail'>
      <img className='image' alt={product.title} src={`/images/${product.imageid}`} />
      <h2>Estos productos estan listos para tu carrito {contador}</h2>
      <h2>{product.title}</h2>
      <h3>Categoría: {product.categoryid}</h3>
      <p>{product.description}</p>
      <p>Stock: {product.stock}</p>
      <ItemCount contador={contador} actualizaValor={setContador} stock={product.stock}/>
        <div>
            <button onClick={() => addItem(product, contador)}>Agregar al carrito</button>
        </div>
    </div>
  );
};

export default ItemDetail