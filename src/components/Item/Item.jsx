import './Item.css'
import { Link } from 'react-router-dom'

export default function Item({productoProps}){

    return(
        <div className="Item__Card">
            <img src={productoProps.img} alt={productoProps.name} className="Item__Card--img" />
            <div className='Item__Card--info'>
                <div className='Item__Card--info-Text'>
                    <h3>{productoProps.name}</h3>
                    <p><b>Precio:  </b>{productoProps.price}</p>
                    <p>{productoProps.information}</p>
                </div>
                <Link to={`/detail/${productoProps.id}`} className='Item__Card--button'>Ver detalle</Link>
            </div>
        </div>
    )
}