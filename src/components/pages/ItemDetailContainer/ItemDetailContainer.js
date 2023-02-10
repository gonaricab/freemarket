import { useEffect, useState } from "react";
import ItemDetail from "../../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import {getFirestore,doc, getDoc} from  "firebase/firestore";
import './styles.css'

const ItemDetailContainer = () => {
const [singleProduct, setSingleProduct] = useState({});
const {id} = useParams();

const getProduct = () => {
  const db = getFirestore();
  const querySnapshot = doc(db, "products", id);

  getDoc(querySnapshot)
  .then ((response) => {
    setSingleProduct({id: response.id, ...response.data()});
  })
  .catch((error) => console.log(error))
};
/* const getProduct = fetch (`https://fakestoreapi.com/products/${id}`)  */

useEffect(() => {
    getProduct();
    
}, []);
  return (
    <ItemDetail product={singleProduct}/>
  )
}

export default ItemDetailContainer