import React from 'react';
import ProductList from './ProductList'

const Shop = (props) => {
    return (
        <div className = "shop">
            <h1>Shop</h1>
            <div className="item-container">
                {props.products.map(product => {
                    return <ProductList 
                                item = {product} 
                                handleAddToCart = {props.handleAddToCart}/>
                })}
            </div>
        </div>
    );
};

export default Shop;