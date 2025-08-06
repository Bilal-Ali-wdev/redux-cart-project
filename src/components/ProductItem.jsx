import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/actions/cartActions';
const ProductItem=({ product }) =>{
    const dispatch=useDispatch();
    return(
        <div className="product" style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            margin: '10px',
            width: '250px',
            textAlign: 'center'
        }}>
            <img 
                src={product.image} 
                alt={product.name} 
                style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '5px',
                    marginBottom: '10px'
                }}
            />
            <h3 style={{ margin: '5px 0' }}>{product.name}</h3>
            <p style={{ 
                color: '#666',
                fontSize: '14px',
                margin: '5px 0'
            }}>
                {product.description}
            </p>
            <p style={{ 
                fontWeight: 'bold',
                fontSize: '16px',
                margin: '10px 0'
            }}>
                Price: Rs.{product.price}
            </p>
            <button 
                onClick={() => dispatch(addToCart(product))}
                style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    padding: '8px 15px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px'
                }}
            >
                Add to Cart
            </button>
        </div>
    );
};
export default ProductItem;