import './ItemListContainer.css';

const ItemListContainer= ()=>{

    return (
        <>
            <ul className='ItemListContainer'>
                <li>Home</li>
                <li>Blog</li>
                <li>Workshop</li>
                <li>Contact us</li>
                <li><span className="material-symbols-outlined">person</span></li>
            </ul>
        </>
    )
}

export default ItemListContainer;