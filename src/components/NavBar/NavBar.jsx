
import './NavBar.css';
import logo from '../../assets/images/logo.png'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

    return (
        <>
            <nav className="navbar__container">
                <div className='navbar__container_logo'>
                    <a href=""><img src={logo} alt="logo Ale Creations" /></a>
                    <p className='navbar__titulo'>Ale Creations</p>
                </div>
                <ItemListContainer/>
                <CartWidget/>
            </nav>
        </>
    )
}

export default NavBar;