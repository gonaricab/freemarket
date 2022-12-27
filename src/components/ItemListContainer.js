import './ItemListContainer.css'
function ItemListContainer (greeting) {
  return (
    <div className="greeting">
      <h1>{greeting.title}</h1>
    </div>
  )
}
export default ItemListContainer;