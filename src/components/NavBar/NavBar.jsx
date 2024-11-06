
import './NavBar.css';
import logo from '../../assets/images/logo.png'
import { IoMdPerson } from "react-icons/io";
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

    return (
        <>
            <nav className="navbar__container">
                <div className='navbar__container_logo'>
                    <a href=""><img src={logo} alt="logo Ale Creations" /></a>
                    <p className='navbar__titulo'>Ale Creations</p>
                </div>
                <ul className='navbar__menu'>
                    <a href=""><li>Home</li></a>
                    <a href=""><li>Shop</li></a>
                    <a href=""><li>Workshops</li></a>
                    <a href=""><li>Contact us</li></a>
                    <a href=""><li><IoMdPerson /></li></a>
                </ul>
                <CartWidget/>
            </nav>
        </>
    )
}

export default NavBar;