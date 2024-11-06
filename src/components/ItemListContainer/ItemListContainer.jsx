
import './ItemListContainer.css';


const ItemListContainer= (props)=>{

    return (
        <div className='itemListContainer__greeting'>        
            <h1 style={{color:"#EBB9AD", fontWeight:"400"}} >{props.greeting}</h1>
        </div>


    )
}


export default ItemListContainer;