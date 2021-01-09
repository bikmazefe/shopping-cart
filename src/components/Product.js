import React from 'react';


function Product(props) {
    return (
        <div className = "product-card">
            <img src={props.item.img_url} alt=""/>
            <span className = "item-title" >{props.item.title}</span>
            <div className="">
                <button onClick = {() => props.handleAddToCart(props.item.id)}>Add to Cart</button>
                <span className="item-price">€ {props.item.price} -</span>
            </div>
        </div>
    );
}

export default Product;