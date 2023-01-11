import './styles.css'
import CartiWidget from '../CartWidget/CartiWidget'
const NavBar = () => {
  return (
    <div className="navBar">
        <div>logo</div>
        <div>
            <ul className='options'>
                <li>Todo</li>
                <li>Notebooks</li>
                <li>Mobile Phones</li>
            </ul>
        </div>
        <div><CartiWidget/></div>
    </div>
  )
}

export default NavBar