import React, { useState, useEffect } from 'react';
import '../style/Cart.scss'
import Trash from '../images/trash-2.svg'

function Cart(props) {

    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
      const total = props.cartItems.reduce((total, item) => {
                        const amount = item.price * item.quantity;
                        return total + amount;
                    }, 0);
       setCartTotal(total);
    }, [props.cartItems])



    return (
        <div className = "cart">
            <h2>Cart</h2>
            {props.cartItems.map(item => {
                return <div className="cart-item">
                            <img src={item.img_url} alt="" className = "item-image"/>
                            <span className = "item-title">{item.title}</span>
                            <div className="quantity-wrapper">
                                <button onClick = {() => props.handleQuantityChange("increment", item.id)}>
                                    +
                                </button>
                                <span>{item.quantity}</span>
                                <button 
                                    onClick = {() => props.handleQuantityChange("decrement", item.id)}
                                    disabled = {item.quantity === 1}>
                                    -
                                </button>
                            </div>
                            <span className="total-price">€ {item.quantity * item.price}</span>
                            <img 
                                onClick = {() => props.handleRemoveFromCart(item.id)} 
                                src={Trash} 
                                alt="" 
                                className = "trash"
                                />
                       </div>
            })}
            <div className="general-total">
                <button>PROCEED TO CHECKOUT</button>
                <span>TOTAL: <span id = "amount">€ {cartTotal}</span></span>
            </div>
        </div>
    );
}

export default Cart;