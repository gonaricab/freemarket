import './styles.css';
import CartiWidget from '../CartWidget/CartiWidget';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="navBar">
        <div>logo</div>
        <div>
            <ul className='options'>
                <li><NavLink to="/">All</NavLink></li>
                <li><NavLink to="/category/hombre">Ropa para Hombre</NavLink></li>
                <li><NavLink to="/category/mujer">Ropa para mujer</NavLink></li>
                <li><NavLink to="/category/tech">Electrónica</NavLink></li>
            </ul>
        </div>
        <div>
          <Link to="/cart"><CartiWidget/></Link>
          
        </div>
    </div>
  )
}

export default NavBar