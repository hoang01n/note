import React, { useContext } from 'react';
import { AuthContext } from '~/context/authContext';
import { getInitials } from '~/utils/helper';
import { Link } from 'react-router-dom';

const ProfileInfo = () => {
  const { auth, logout } = useContext(AuthContext);
  // console.log("name", auth.user?.fullname)
  return (
<>
    <div className='flex items-center gap-3'>
      {auth.user?.fullname ? (
        <>


        <div className='w-10 h-10 flex items-center justify-center font-medium px-3 py-1 rounded-full  bg-slate-200 text-slate-950'>{getInitials(auth.user?.fullname)}</div>
   
      <div className='flex flex-row items-center my-2 md:flex-col'>
        <p className='text-sm font-medium mx-1'>{auth.user?.fullname}</p>
        <button onClick={logout} className='text-sm font-medium text-white bg-blue-500 px-1 py-1 rounded-lg'>Logout</button>
      </div>
       
        </>
      ):(
        
        <ul className='flex justify-between mt-2'>
            <li>
              <Link to="/login" className='font-medium mr-2 text-base text-blue-500'>Login</Link>
            </li>
            <li>
              <Link to="/register" className='font-medium text-base text-blue-500'>Register</Link>
            </li>
          </ul>
      )
}
    </div>
</>
  )
}
export default ProfileInfo;
