import React from 'react';

const ProductCarts = ({ product }) => {
    console.log(product);
    const { name, picture, Location, original_price, resale_price } = product;

    return (
        <div className='col-span-1'>
            <div className="card card-compact h-96 bg-base-100 shadow-xl">
                <figure><img className='w-full' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex justify-between'>
                        <p>{Location}</p>
                        <p>{resale_price}</p>
                        <p>{original_price}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCarts;