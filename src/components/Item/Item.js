import './Item.css'
const Item = ({producto}) => {
  return (
    <div className='list'>
      <img className='imagen' alt={producto.id} src={producto.image}/>
        <h2>{producto.title}</h2>
        <h3>{producto.category}</h3>
        <p>{producto.description}</p>
    </div>
        
   
  )
}

export default Item