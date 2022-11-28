import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllProducts = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <p>{data.length}</p>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-slate-200 text-base-content">

                    {data.map(da =><li><button>{da.name}</button></li> )}    
                    
                        {/* <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li> */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default AllProducts;