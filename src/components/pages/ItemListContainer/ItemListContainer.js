import ItemList from "../../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
const [products, setProducts] = useState([]);
const [filteredProducts, setfilteredProducts] = useState([]);
const getProducts = fetch ('https://fakestoreapi.com/products');
const {category} = useParams();


 useEffect (() => {
  getProducts
  .then ((res) => {
    return res.json();
  })
  .then ((response) =>{
    setProducts(response);
  })
  
  .catch((error) => console.log(error));
 }, []);

 useEffect(() =>{
  if(category) {
    const removeCharacters = category.includes('%20')
      ? category.replace('%20', '')
      : category
    const filterProducts = products.filter((product) => {return product.category === removeCharacters}
    );
    setfilteredProducts(filterProducts);
  }
  
 }, [category])

 return (
  <div>
    <ItemList productos = {category ? filteredProducts : products} />
  </div>
 );
}

export default ItemListContainer;