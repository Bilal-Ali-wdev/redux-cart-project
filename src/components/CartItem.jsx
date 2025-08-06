import React from 'react';
import {useDispatch} from 'react-redux';
import {removeFromCart} from '../redux/actions/cartActions';
const CartItem=({ item }) => {
    const dispatch=useDispatch();
    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            padding: '10px',
            borderBottom: '1px solid #eee'
        }}>
            <img 
                src={item.image} 
                alt={item.name} 
                style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: '5px'
                }}
            />
            <div>
                <h3 style={{ margin: 0 }}>{item.name}</h3>
                <p>Price: Rs.{item.price}</p>
                <p>Quantity: {item.qty}</p>
                <button 
                    onClick={() => dispatch(removeFromCart(item.id))}
                    style={{
                        background: '#dc3545',
                        color: 'white',
                        border: 'none',
                        padding: '5px 10px',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};
export default CartItem;