import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const AllProducts = (props) => {
    const { setCartCount } = props;
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        < div >
            <h1>All Products</h1>
            <div className='row container'>
                {
                    products.map(product => <Product setCartCount={setCartCount} key={product.id} product={product}></Product>)
                }
            </div>
        </div >
    );
};

export default AllProducts;