import carrito from './carrito.png'
import './CartWidget.css'

function CartWidget () {
    return (
        <div className='divCarrito'>
            <img className='carrito' src={carrito}></img>
            <span className='notificacion'>1</span>
        </div>
    )
};

export default CartWidget;