import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const { userByEmail } = useContext(AuthContext);


    const handleSignUp = (data) => {
        console.log(data);
        userByEmail(data.email, data.password)
            .then(res => {
                console.log(res)
                toast.success('successfully user created')
            })
            .catch(err => console.log(err))

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