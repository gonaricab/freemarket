import ItemList from "../../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading"
import {getFirestore,getDocs,collection, query, where} from "firebase/firestore";

const ItemListContainer = () => {
const [products, setProducts] = useState([]);
const getProducts = () => {
const db = getFirestore();
const queryBase = collection(db, "products");
const querySnapshot = category ? query( queryBase, where("categoryid", "==", category)) 
: queryBase;

getDocs(querySnapshot)
  .then((response) => {
    const data = response.docs.map((doc) => {
      return {id: doc.id,...doc.data()}
    })
    setLoading(false);
    setProducts(data);
  })
  .catch(error => console.log(error));
};
const {category} = useParams();
const [loading, setLoading] = useState(true);

 useEffect (() => {
  getProducts();
  
 }, [category]);


 return (
  <div>
    {loading ? <Loading/> 
    :<ItemList productos = {products} />}
    
  </div>
 );
}

export default ItemListContainer;