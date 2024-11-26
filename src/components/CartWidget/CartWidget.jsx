import './CartWidget.css';
import { ImCart } from "react-icons/im";

const CartWidget = ({cartCount})=>{

    return(
        <>
            <div className='CartWidget__container'>
                <span><ImCart /></span>
                <p>{cartCount}</p>
            </div>
        </>
    )
}

export default CartWidget;