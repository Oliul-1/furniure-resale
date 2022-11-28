import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {


    return (
        <div className="hero bg-cover" style={{ backgroundImage: `url("https://i.ibb.co/0FJ8Ngg/images-1.jpg")` }}>
            <div className="hero-content flex-col lg:flex-row-reverse hero-overlay bg-opacity-60">
                <img alt='' src="https://i.ibb.co/CtF5cPF/oven.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div className='text-white'>
                    <h1 className="text-5xl font-bold">Our products!</h1>
                    <p className="py-6">Our products quality is very Good.</p>
                    <Link to='/'><button className="btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;