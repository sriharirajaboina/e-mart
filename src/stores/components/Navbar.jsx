import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <div className="navSection">
            <Link to="/">
                 <div className="title"> 
                    <h2>E-Mart</h2>
                </div>
            </Link>
           
            <div className="search">
                <input type="text" placeholder="Search...."/>
            </div>
            <div className="user">
                <div className="user-details">
                    Signup/SignIn
                </div>
                <div className="cart">
                    Cart
                </div>
            </div>
        </div>
        <div className="subMenu">
            <ul>
                <Link to="/mobiles">
                    <li>Mobiles</li>
                </Link>
                <li>Computers</li>
                <li>Watches</li>
                <li>Men Fashions</li>
                <li>Woman Dressing</li>
                <li>Furniture</li>
                <li>Ac</li>
                <li>Kitchen</li>
                <li>Fridges</li>
                <li>Speakers</li>
                <li>AC</li>
                <li>Tv's</li>
            </ul>
        </div>
    </>
    
    
  );
};

export default Navbar