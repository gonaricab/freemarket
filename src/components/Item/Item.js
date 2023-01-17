import './Item.css'
const Item = ({producto}) => {
  return (
    <li className='list'>
        <img className='imagen' alt="" src={producto.image}/>
        <h2>{producto.title}</h2>
        <h3>{producto.category}</h3>
        <p>{producto.description}</p>
    </li>
  )
}

export default Item