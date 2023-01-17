
const ItemDetail = ({product}) => {
  return (
    <div>
        <img alt={product.title} src={product.image} />
        <h2>{product.title}</h2>
        <h3>{product.category}</h3>
        <p>{product.description}</p>
    </div>
  );
};

export default ItemDetail