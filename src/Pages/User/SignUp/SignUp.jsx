import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const { userByEmail, updateCurrentUser } = useContext(AuthContext);
    const [userEmail ,setUserEmail] =useState('');
 


    const handleSignUp = (data) => {
        console.log(data);
        userByEmail(data.email, data.password)
            .then(res => {
                console.log(res)
                toast.success('successfully user created');
                const info = {
                    displayName: data.name
                }

                updateCurrentUser(info)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err))

        const saveUser = (name, email) => {
            const user = { name, email };
            fetch('https://doctors-portal-server-rust.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    setUserEmail(email);
                })
        }

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h3 className='text-3xl font-bold p-2'>Sign Up</h3>
                <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "Name is Required" })} placeholder="your name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: "password is Required", minLength: { value: 6, message: "Password must be 6 characters long" } })} placeholder="password" className="input input-bordered" />
                    </div>
                    <div className='mt-1'>
                        <h4 className='text-lg font-semibold text-start'>Select your role</h4>
                        <select className="select select-ghost w-full max-w-xs">
                            <option disabled selected>Buyer</option>
                            <input type="text" {...register("Buyer", { required: "buyer is Required" })} placeholder="buyer" disabled selected />
                            <input type="text" {...register("Seller", { required: "seller is Required" })} placeholder="seller" />
                        </select>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign up</button>
                    </div>
                    <div>
                        <p>Have an account? <span className='text-primary font-semibold'><Link to='/login'>Login</Link></span> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;