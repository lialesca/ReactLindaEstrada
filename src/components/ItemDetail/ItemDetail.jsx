import { Link } from "react-router-dom"
import "./ItemDetail.css"

export default function ItemDetail({name,img,description,category,price,stock}){



    return(
        <div className="ItemDetail">

            <div className="ItemDetail--card">
                <img src={img} alt={name} />
                <div className="ItemDetail--card-info">
                    <h2>{name}</h2>
                    <p><b>Descripción del producto:  </b>{description}</p>
                    <p><b>Categoría:  </b>{category}</p>
                    <p><b>Precio:  </b>{price}</p>
                    <p><b>Stock:  </b>{stock}</p>
                    <div>
                        <Link to='/cart' className="Item__Card--button" >Finalizar compra</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}