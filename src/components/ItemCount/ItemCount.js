import './ItemCount.css'

const ItemCount = ({contador, actualizaValor, stock}) => {
   
    const onAdd = () => {
        if(stock === contador) {
            alert("No puedes comprar más!")
            return;
        }
        actualizaValor(contador + 1);
    }
    
    const restar = () => {
        if (contador === 0 ) {
            return;
        }
        actualizaValor(contador - 1);
    }
return (
    <div className='counter'>
        <div className='controllers'>
            <button onClick={restar}>-</button>
            <div>
            <span>{contador}</span>
            </div>
            <button onClick={onAdd}>+</button>
        </div>
      
    </div>
)
    
};


export default ItemCount;