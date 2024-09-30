
import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

import {AuthContext} from '~/context/authContext';
const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const { registerUser,  } = useContext(AuthContext);
  
    const onSubmit = async (data) => {
        // console.log("Submitting data:", { ...data, password: '***' });
        try {
            await registerUser(data.fullname, data.age, data.email, data.password);
            // alert('Registration successful!');
           

        } catch (error) {
            console.error("Registration error:", error);
            alert(`Registration failed: ${error.message}`);
        }
    };

    return (
   
       
<div className='h-[80vh] mt-[4rem]'>

<form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto mt-8  border border-gray-300 rounded-2xl p-6 sm:p-8 md:p-9 lg:p-10'>
<div className='text-center text-3xl font-bold text-gray-700 pb-2'>Sign up</div>

<div className="my-4 relative">
    <input
        type="text"
        name="fullname"
        className='border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
        placeholder=""
        {...register("fullname", { required: "Name is required" })}
    />
    <label htmlFor="fullname" className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300">Your name</label>
    {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
</div>

<div className="my-4 relative">
    <input
        type="number"
        name="age"
        className='border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
        placeholder=""
        {...register('age', {
            required: 'Age is required',
            min: { value: 13, message: 'You must be at least 13 years old' },
            max: { value: 99, message: 'You must be 99 years old or younger' }
        })}
    />
    <label htmlFor="age" className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300">Age</label>
    {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
</div>

<div className="mb-6 relative">
    <input
        type="email"
        name="email"
        className='border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
        placeholder=""
        {...register("email", {
            required: "Email Address is required",
            pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format"
            }
        })}
    />
    <label htmlFor="email" className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300">Email</label>
    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
</div>

<div className="my-4 relative">
    <input
        type="password"
        name="password"
        className='border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
        placeholder=""
        {...register("password", {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
            }
        })}
    />
    <label htmlFor="password" className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300">Password</label>
    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
</div>

<button type="submit" className="w-full bg-blue-500 mt-3     hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
    Register
</button>
<div className='text-center text-gray-600 mt-4'>
    <span>Already have an account?</span> <Link to='/loginn' className='whitespace-nowrap font-semibold text-gray-900 hover:underline'>Login</Link>
</div>
</form>
</div>
    )
}

export default Register;