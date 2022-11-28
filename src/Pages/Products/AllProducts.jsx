import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCarts from './ProductCarts';

const AllProducts = () => {
    const data = useLoaderData();
    console.log(data);
    const [products, setProducts] = useState()

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => setProducts(res))
            .then(err => (console.log(err)))
    }, [])

    return (
        <div>
            <p>{data.length}</p>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {
                        products.map(product => <ProductCarts
                            key={product._id}
                            product={product}
                        ></ProductCarts>)
                    }
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-slate-200 text-base-content">

                        {data.map(da => <li><button>{da.name}</button></li>)}

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default AllProducts;