import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCarts from './ProductCarts';

const AllProducts = () => {
    const data = useLoaderData();
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])

    return (
        <div>
            <div className="grid grid-cols-3 gap-1">
                <div className="col-span-2 grid grid-col-1 md:grid-cols-2 gap-2">
                    {
                        products.map(product => <ProductCarts
                            key={product._id}
                            product={product}
                        ></ProductCarts>)
                    }
                </div>
                <div className="col-span-1">
                        <ul className="menu p-4 w-80 bg-slate-200 text-base-content">
                            {data.map(da => <li><button>{da.name}</button></li>)}
                        </ul>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;