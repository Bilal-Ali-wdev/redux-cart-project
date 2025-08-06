import React from 'react';
import {useSelector} from 'react-redux';
import CartItem from './CartItem';
const Cart=() =>{
    const {cartItems}=useSelector(state => state.cart);
    return (
        <div>
            <h2>Your Cart🛒</h2>
            {cartItems.length===0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))
            )}
        </div>
    );
};
export default Cart;