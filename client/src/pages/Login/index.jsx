

import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '~/context/authContext';
import { useForm } from 'react-hook-form';




const Login = () => {

  const [error, setError] = useState('');
  const { auth, login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = async (e) => {
    // e.preventDefault();

    try {
      await login(e.email, e.password);
      // window.location.href = '/';
    } catch (err) {

      console.error(err)
      setError('Tài khoản và mật khẩu không đúng');
    }

  };
  useEffect(() => {
    if (auth.user) {
      console.log("user: " + auth.user.name);
    }
  }, [auth]);


  return (



    <>

      {!auth.user && (
        ""
        // <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto mt-8'>
        //   <div className='text-center text-2xl font-bold'>Login</div>
        //   <div className="my-2 leading-6">
        //     <label htmlFor="success" className="block mb-2 text-sm font-medium text-black-400 dark:text-black-500">Email</label>
        //     <input type="email" id="success" name="email" className="bg-green-50 border border-state-50 text-black-900 dark:text-black-400 placeholder-black-700 dark:placeholder-black-500 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-700 dark:border-black-500"
        //      placeholder="Email input"
        //      {...register("email", {
        //       required: "Email Address is required",
        //       pattern: {
        //           value: /\S+@\S+\.\S+/,
        //           message: "Entered value does not match email format"
        //       }
        //   })}
        //      />
        //     {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        //   </div>
        //   <div className='my-2 leading-6'>
        //     <label htmlFor="" className="block mb-2 text-sm font-medium  text-black-700 dark:text-black-500">Password</label>
        //     <input type="password" name="password"  className="bg-green-50 border border-state-50 text-black-900 dark:text-black-40  placeholder-black-700 dark:placeholder-black-500 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-700 dark:border-black-500" placeholder="Password input" 
        //        {...register("password", {
        //         required: "Password is required",
        //         minLength: {
        //             value: 8,
        //             message: "Password must have at least 8 characters"
        //         }
        //     })}
        //     />
        //     {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        //   </div>
        //   <button type="submit" className="w-full bg-blue-500 mt-3 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
        //     Login
        //   </button>
        //   <div className='text-center text-ms text-black-500 mt-3'>
        //     <span>Don't have an account?</span> <a href="/register" className='text-blue-500  underline'>Register</a>
        //   </div>


        // </form>


      )}
      {/* <form onSubmit={handleSubmit(onSubmit)} className="flex h-[80vh] w-screen items-start overflow-hidden px-2 mt-[4rem]">

        <div className="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
          <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-blue-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>
          <div className="mx-auto mb-2 space-y-3">
            <h1 className="text-center text-3xl font-bold text-gray-700">Sign in</h1>
            <p className="text-gray-500">Sign in to access your account</p>
          </div>

          <div>
            <div className=" mt-2 w-full leading-5">
              <input type="text" name="email"   className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" " 
              {...register("email", {
                      required: "Email Address is required",
                      pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Entered value does not match email format"
                      }
                    }
                    )}
              />
              <label htmlFor="email" className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Enter Your Email </label>
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <div className="relative mt-2 w-full leading-5">
              <input type="password" name='password' className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " 
               {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters"
                        }
                    })}
              />
              <label htmlFor="password" className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Enter Your Password</label>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <div className="flex w-full items-center">
            <button type='submit' className="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white">Login</button>
            <a className="w-full text-center text-sm font-medium text-gray-600 hover:underline" href="#">Forgot your password?</a>
          </div>
          <p className="text-center text-gray-600">
            Don't have an account?
            <a href="/register" className="whitespace-nowrap font-semibold text-gray-900 hover:underline">Sign up</a>
          </p>
        </div>

      </form> */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex h-[80vh] w-screen items-start overflow-hidden px-2 mt-[4rem]">
    <div className="relative flex w-full max-w-md flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl mx-auto">
        <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-blue-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>
        <div className="mx-auto mb-2 space-y-3">
            <h1 className="text-center text-3xl font-bold text-gray-700">Sign in</h1>
            <p className="text-gray-500">Sign in to access your account</p>
        </div>

        <div>
            <div className="relative mt-2 w-full leading-5">
                <input
                    type="text"
                    name="email"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=""
                    {...register("email", {
                        required: "Email Address is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"
                        }
                    })}
                />
                <label htmlFor="email" className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Enter Your Email </label>
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
            <div className="relative mt-2 w-full leading-5">
                <input
                    type="password"
                    name='password'
                    className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters"
                        }
                    })}
                />
                <label htmlFor="password" className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Enter Your Password</label>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div className="flex w-full items-center">
            <button type='submit' className="shrink-0 inline-block w-full  rounded-lg bg-blue-600 py-3 font-bold text-white">Login</button>

        </div>
        <p className="text-center text-gray-600">
            Don't have an account?
            <a href="/register" className="whitespace-nowrap font-semibold text-gray-900 hover:underline">Sign up</a>
        </p>
    </div>
</form>
    </>
  )
}

export default Login;


