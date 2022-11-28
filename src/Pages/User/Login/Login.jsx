import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Login = () => {

    const { userSignInEmail, googleLogin } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const [error, setError] = useState('')

    const handleSignIn = (data) => {
        console.log(data);
        userSignInEmail(data.email, data.password)
            .then(res => {
                console.log(res)
                setError('')
                reset()
                toast.success('successfully Login')
            })
            .catch(err => setError(err))
    };


    const userLoginByGoogle = () => {
        googleLogin()
            .then(res => {
                console.log(res);
                toast.success('successfully Login')
            })
            .catch(err => console.log(err))
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h3 className='text-3xl font-bold p-2'>Login</h3>
                <form onSubmit={handleSubmit(handleSignIn)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"  {...register("email", { required: "Email Address is required" })} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password must be 6 characters or longer' } })} placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div>
                        <button onClick={userLoginByGoogle} className='btn btn-primary w-full'><span className='p-2 text-xl'><FcGoogle/></span> google</button>
                    </div>
                    <div>
                        <p>Have no account? <span className='text-primary font-semibold'><Link to='/signUp'>Sign Up</Link></span> </p>
                    </div>
                    {error ? <p>{error.message}</p> : <> </>}
                </form>
            </div>
        </div>
    );
};

export default Login;