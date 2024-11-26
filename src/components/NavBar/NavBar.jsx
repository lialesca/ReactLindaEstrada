
import './NavBar.css';
import { IoMdPerson } from "react-icons/io";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <>
            <nav className="navbar__container">
                <div className='navbar__container_logo'>
                    <Link to="/"><p className='navbar__titulo'>Ale Creations</p></Link>
                </div>
                <ul className='navbar__menu'>    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/category/celular">Phones</Link></li>
                    <li><Link to="/category/tablet">Tablets</Link></li>
                    <li><Link to="/category/computadora">Notebooks</Link></li>
                    <li><Link to="/category/myProfile"><IoMdPerson /></Link></li>
                </ul>
                <CartWidget cartCount={6}/>
            </nav>
        </>
    )
}

export default NavBar;