import React from 'react';
import { TbError404, TbFaceIdError } from "react-icons/tb";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-full m-auto bg-slate-100 p-4'>
            <div className='flex justify-center items-center'>
                <span className='text-[400px]'><TbError404 /></span>
            </div>
            <div>
                <button className='btn btn-primary gap-1'>
                    <TbFaceIdError />
                    <Link to='/'>Go to Home</Link>
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;