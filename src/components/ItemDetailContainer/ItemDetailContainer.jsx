import { useEffect, useState } from "react"
import { getProductByID } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"


export default function ItemDetailContainer(){
    const [product,setProduct] =useState({})
    const [loading, setLoading] = useState(false);
    const {idProduct} = useParams()

    useEffect(()=>{
        setLoading(true);
        console.log("useParam: ", idProduct)
        getProductByID(idProduct)
            .then((data) =>{
                console.log("getPRoductById: ", data)
                setProduct(data)
                setLoading(false)
            })
    },[idProduct])

    return(
        <div className="ItemDetailContainer"> <h2>Detalle del producto</h2>
        {loading ? <img className='itemListContainer__loading' src="/img/loading.gif"/> : <ItemDetail {...product}></ItemDetail>}
        </div>
        
    )
}