import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
const ProductList = () =>{
    const products=useSelector(state => state.products.items); 
    return(
        <div>
            <h2>Welcome to Add To Cart System</h2>
            <div className="products">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
export default ProductList;