import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
    return (
        <div className = "product-card">
            <img src={props.item.image} alt=""/>
            <span>{props.item.title}</span>
            <Link to = {`/shop/${props.item.id}`}>See Details</Link>
            <button onClick = {() => props.handleAddToCart(props.item.id)}>Add to Cart</button>
        </div>
    );
}

export default Product;