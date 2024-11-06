import './CartWidget.css';
import { ImCart } from "react-icons/im";

const CartWidget = ()=>{

    return(
        <>
            <div className='CartWidget__container'>
                <span><ImCart /></span>
                <p>4</p>
            </div>
        </>
    )
}

export default CartWidget;