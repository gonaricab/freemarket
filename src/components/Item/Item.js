import './Item.css'
const Item = ({producto}) => {
  return (
    <div className='list'>
      <img className='imagen' alt={producto.title} src={`/images/${producto.imageid}`}/>
      <h2>{producto.title}</h2>
      <h3>{producto.categoryid}</h3>
      <p>{producto.description}</p>
    </div>
        
   
  )
}

export default Item