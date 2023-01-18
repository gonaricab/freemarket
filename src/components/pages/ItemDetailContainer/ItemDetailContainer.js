import { useEffect, useState } from "react";
import ItemDetail from "../../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import './styles.css'

const ItemDetailContainer = () => {
const [singleProduct, setSingleProduct] = useState({});
const {id} = useParams();
const getProduct = fetch (`https://fakestoreapi.com/products/${id}`) 

useEffect(() => {
    getProduct
    .then((resp) =>{
        return resp.json ();
    })
    .then ((data) =>{
        setSingleProduct(data);
    })
    .catch((error) =>{
        console.log(error)
    });
}, []);
  return (
    <ItemDetail product={singleProduct}/>
  )
}

export default ItemDetailContainer