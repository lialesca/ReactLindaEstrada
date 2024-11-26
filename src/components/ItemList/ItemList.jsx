import Item from "../Item/Item"
import './ItemList.css'

export default function ItemList({productos}){

    return(
        <div className="ItemList__Container">
            {productos.map(producto => {
                return <Item key={producto.id} productoProps={producto} >{producto.name}</Item>
            })}
        </div>
    )

}