import './NavBar.css'
import carrito from './carrito.png'

const NavBar = () => {

    return (
        <div className="divUno">
          <ul className="barra"> 
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Nosotros</a></li>
          </ul> 
          <div className='divDos'>
            <img src={carrito} className="carrito"/>
          </div>
        </div>
    )
};
export default NavBar;