import React from 'react';
import Product from './Product'
import '../style/Shop.scss'

const Shop = (props) => {
    return (
        <div className = "shop">
            <div className="item-container">
                {props.products.map(product => {
                    return <Product 
                                item = {product} 
                                handleAddToCart = {props.handleAddToCart}/>
                })}
            </div>
        </div>
    );
};

export default Shop;