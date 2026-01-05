import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const {cartItems} = useCart();
    const cartCount = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);
  return (
    <>
        <div className="navSection">
            <Link to="/home">
                 <div className="title"> 
                    <h2>E-Mart</h2>
                </div>
            </Link>
           
            <div className="search">
                <input type="text" placeholder="Search...."/>
            </div>
            <div className="user">
                <div className="user-details">
                    <Link to="/">
                        <span>SignUp</span>
                    </Link>
                     <Link to="/signin">
                        <span>/SignIn</span>
                    </Link>
                </div>
                <Link to="/cart">
                     <div className="cart">
                        Cart&nbsp;
                        <span>{ cartCount}</span>
                    </div>
                </Link>
            </div>
        </div>
        <div className="subMenu">
            <ul>
                <Link to="/mobiles">
                    <li>Mobiles</li>
                </Link>
                <Link to="/computers">
                    <li>Computers</li>
                </Link>
                <Link to="/watches">
                    <li>Watches</li>
                </Link>  
                <Link to="/mens">
                     <li>Men Fashions</li>
                </Link>
                <Link to="/woman">
                    <li>Woman Dressing</li>
                </Link>
                <Link to="/furniture">
                    <li>Furniture</li>
                </Link>
                <Link to="/ac">
                    <li>Ac</li>
                </Link>
                <Link to="/kitchen">
                    <li>Kitchen</li>
                </Link>
                <Link to="/fridges">
                    <li>Fridges</li>
                </Link>
                <Link to="/speakers">
                     <li>Speakers</li>
                </Link>
                <Link to="/tv">
                    <li>Tv's</li>
                </Link>
            </ul>
        </div>
    </>
    
    
  );
};

export default Navbar