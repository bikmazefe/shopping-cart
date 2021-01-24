import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/logo.svg'
import Cart from '../images/cart.svg'

const Nav = (props) => {
    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt=""/>
                <h1>SAX<span>SHOP</span></h1>
            </div>
            <div className="nav-links">
                <Link to = "/shopping-cart/"> HOME </Link>
                <Link to = "/shopping-cart/shop"> SHOP </Link>
                <Link to = "/shopping-cart/cart" id = "cart-icon">
                    <img src={Cart} alt=""/>
                    <span>{props.cartSize}</span>
                </Link>
            </div>
        </nav>
    );
};

export default Nav;