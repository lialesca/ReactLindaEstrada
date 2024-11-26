import { useState, useEffect } from 'react';
import {getProducts, getProductsByCategory} from '../../asyncMock.js'
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx';


const ItemListContainer= (props)=>{
    const [products, setProducts]=useState([])
    const [loading, setLoading] = useState(false);

    const {idCategory}= useParams()
    useEffect(()=>{


        setLoading(true);

        if(idCategory){
            getProductsByCategory(idCategory)
            .then((data)=>{
                setProducts(data)
                console.log(data)
                setLoading(false)
            })
        }    
        else{
            getProducts()
            .then((data)=>{
                setProducts(data)
                console.log(data)
                setLoading(false)
            })
        }

    },[idCategory]) 

    
    return (
        <div className='itemListContainer__greeting itemListContainer'>        
            <h1 style={{color:"#EBB9AD", fontWeight:"400"}} >{props.greeting}</h1>
            {loading ? <img className='itemListContainer__loading' src="/img/loading.gif"/> : <ItemList productos={products} />}
        </div>


    )
}


export default ItemListContainer;