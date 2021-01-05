import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Product(props) {

    const [product, setProduct] = useState({});

    useEffect(() => {
        const id = props.match.params.id;

        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(resp => setProduct(resp.data))
            .catch(err => console.err(err));
    }, [])

    return (
        <div>
            <img src={product.image} alt=""/>
            <span>{product.title}</span>
        </div>
    );
}

export default Product;