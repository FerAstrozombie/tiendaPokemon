import "./styles.css"
import { useEffect, useState } from "react"
import ItemList from "../../Components/ItemList/ItemList"
import { useParams } from "react-router-dom"
import {getFirestore, getDocs, collection, query, where} from "firebase/firestore"



const ItemListContainer = ({greeting}) => {
    const {categoryName} = useParams();
    console.log(categoryName);
    const [productList, setProductList] = useState([]);
    useEffect (() => {

        getProducts();
    // eslint-disable-next-line      
    },[categoryName])


    const getProducts = () => {
        const db = getFirestore();
        const queryBase = collection(db, "Pokeballs");
        const querySnapshot = categoryName ? query(queryBase, where("category", "==",categoryName)) : queryBase;
            getDocs(querySnapshot).then((response) => {
                console.log(response.docs);
                const data = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })
                setProductList(data);
            })
        
    }        
        return (
        <>
        <h2 className="texto">{greeting}</h2>
        <ItemList lista = {productList}/>     
        </>
    )
}

export default ItemListContainer