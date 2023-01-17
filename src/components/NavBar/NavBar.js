import './styles.css';
import CartiWidget from '../CartWidget/CartiWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navBar">
        <div>logo</div>
        <div>
            <ul className='options'>
                <li><NavLink to="/">All</NavLink></li>
                <li><NavLink to="/category/men's clothing">Men's clothing</NavLink></li>
                <li><NavLink to="/category/women's clothing">Women's clothing</NavLink></li>
                <li><NavLink to="/category/jewelery">Jewelery</NavLink></li>
                <li><NavLink to="/category/electronics">Electronics</NavLink></li>
            </ul>
        </div>
        <div><CartiWidget/></div>
    </div>
  )
}

export default NavBar