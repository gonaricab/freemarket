import ItemList from "../../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading"

const ItemListContainer = () => {
const [products, setProducts] = useState([]);
const [filteredProducts, setfilteredProducts] = useState([]);
const getProducts = fetch ('https://fakestoreapi.com/products');
const {category} = useParams();
const [loading, setLoading] = useState(true);

 useEffect (() => {
  setTimeout(() => {
    getProducts
  .then ((res) => {
    return res.json();
  })
  .then ((response) =>{
    setLoading(false);
    setProducts(response);
  })
  .catch((error) => console.log(error));
  }, 3000)
  
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
    {loading === true 
    ? <Loading/> 
    :<ItemList productos = {category ? filteredProducts : products} />}
    
  </div>
 );
}

export default ItemListContainer;